"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { isAxiosError } from "axios";
import { APIClientInstance } from "@/lib/api.instance";
import { SignInBody } from "@/schema/auth.schema";
import { singIn } from "@/api/api.auth";

export type User = {
    id: string;
    email: string;
    name: string;
    role: "ADMIN" | "USER";
};

type AuthContextType = {
    user: User | null;
    loading: boolean;
    logout: () => void;
    signInUser: (data: SignInBody) => Promise<void>;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    // Fetch user on mount
    useEffect(() => {
        const fetchMe = async () => {

            const token = localStorage.getItem("accessToken");

            if (!token) {
                setLoading(false);
                return;
            }

            try {
                const res = await APIClientInstance.get("/auth/me", {
                    headers: { Authorization: `Bearer ${token}` },
                });

                setUser(res.data.data);
            } catch (err) {

                console.log(err);
                localStorage.removeItem("accessToken");
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        fetchMe();
    }, []);

    const signInUser = async (data: SignInBody) => {
        try {
            const res = await singIn(data);
            const token = res.data.accessToken;
            localStorage.setItem("accessToken", token);

            console.log(res.data)
            setUser(res.data.data);

            toast.success(res.message);
            router.push(res.data.data.role === "ADMIN" ? "/admin/chat" : "/");
        } catch (err) {
            if (isAxiosError(err)) {
                toast.error(err?.response?.data?.message || "Login failed");
            }
            toast.error("Something went wrong!")
        }
    };

    const logout = () => {
        localStorage.removeItem("accessToken");
        setUser(null);
        router.push("/sign-in");
    };

    return (
        <AuthContext.Provider value={{ user, loading, logout, signInUser }}>
            {children}
        </AuthContext.Provider>
    );
}

// Hook
export function useAuth() {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error("useAuth must be inside AuthProvider");
    return ctx;
}

// Inside auth-provider.tsx
export const useRequireAuth = (role?: "ADMIN" | "USER") => {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (loading) return;

        if (!user) {
            router.push("/sign-in");
            return;
        }

        if (role && user.role !== role) {
            const redirectPath = user.role === "ADMIN" ? "/admin/chat" : "/";
            router.push(redirectPath);
        }
    }, [user, loading, router, role]);

    return { user, loading };
};