"use client";

import Link from "next/link";
import { Store, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function SellerHeader() {
  const router = useRouter();

  const handleLogout = () => {
    // TODO: Implement actual logout
    router.push("/seller/login");
  };

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/seller/dashboard" className="flex items-center space-x-2">
          <Store className="h-6 w-6 text-primary" />
          <span className="text-lg font-semibold">Seller Dashboard</span>
        </Link>
        <Button variant="ghost" onClick={handleLogout}>
          <LogOut className="h-4 w-4 mr-2" />
          Logout
        </Button>
      </div>
    </header>
  );
}