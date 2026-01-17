"use client";

import { useRequireAuth } from "@/providers/auth-provider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { loading } = useRequireAuth("USER");

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return <main>{children}</main>;
}
