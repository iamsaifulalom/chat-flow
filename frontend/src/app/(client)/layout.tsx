"use client";

import { useRequireAuth } from "@/providers/auth-provider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { loading, user } = useRequireAuth("USER");

    if (loading || !user || user.role !== "USER") {
        return <div className="h-screen flex items-center justify-center">Loading Admin...</div>;
    }
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}
