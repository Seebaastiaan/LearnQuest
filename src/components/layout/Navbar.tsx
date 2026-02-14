"use client";

import { HeartsDisplay } from "@/components/gamification/HeartsDisplay";
import { StreakBadge } from "@/components/gamification/StreakBadge";
import { XPCounter } from "@/components/gamification/XPCounter";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { createClient } from "@/lib/supabase/client";
import { useSettingsStore } from "@/stores";
import {
  BookOpen,
  Globe,
  LogOut,
  Map,
  User,
  Volume2,
  VolumeX,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function Navbar() {
  const locale = useSettingsStore((s) => s.locale);
  const soundEnabled = useSettingsStore((s) => s.soundEnabled);
  const toggleSound = useSettingsStore((s) => s.toggleSound);
  const setLocale = useSettingsStore((s) => s.setLocale);
  const router = useRouter();

  const [user, setUser] = useState<{
    name: string;
    email: string;
    avatar: string;
  } | null>(null);

  useEffect(() => {
    async function loadUser() {
      const supabase = createClient();
      const {
        data: { user: authUser },
      } = await supabase.auth.getUser();

      if (authUser) {
        setUser({
          name:
            authUser.user_metadata?.full_name ||
            authUser.user_metadata?.name ||
            authUser.email?.split("@")[0] ||
            "Usuario",
          email: authUser.email || "",
          avatar:
            authUser.user_metadata?.avatar_url ||
            authUser.user_metadata?.picture ||
            `https://ui-avatars.com/api/?name=${encodeURIComponent(authUser.email || "U")}&background=0ea5e9&color=fff`,
        });
      }
    }
    loadUser();
  }, []);

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    // Forzar recarga completa para limpiar todo el estado del cliente
    window.location.href = "/";
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 max-w-5xl mx-auto">
        {/* Logo */}
        <Link href="/dashboard" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-linear-to-br from-sky-500 to-blue-600 flex items-center justify-center">
            <span className="text-white font-black text-sm">L</span>
          </div>
          <span className="font-bold text-lg hidden sm:block">LearnQuest</span>
        </Link>

        {/* Center: XP + Streak */}
        <div className="flex items-center gap-4">
          <StreakBadge />
          <div className="w-32 hidden sm:block">
            <XPCounter />
          </div>
          <HeartsDisplay />
        </div>

        {/* Right: settings + profile */}
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSound}
            className="h-9 w-9"
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4" />
            ) : (
              <VolumeX className="w-4 h-4" />
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setLocale(locale === "es" ? "en" : "es")}
            className="h-9 w-9"
          >
            <Globe className="w-4 h-4" />
          </Button>

          {/* User Profile Dropdown */}
          {user && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 rounded-full"
                >
                  <Image
                    src={user.avatar}
                    alt={user.name}
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>
                  <div className="flex flex-col">
                    <span className="font-semibold">{user.name}</span>
                    <span className="text-xs text-muted-foreground font-normal">
                      {user.email}
                    </span>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/profile" className="cursor-pointer">
                    <User className="w-4 h-4 mr-2" />
                    {locale === "es" ? "Mi Perfil" : "My Profile"}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={handleLogout}
                  className="text-red-600 dark:text-red-400 cursor-pointer"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  {locale === "es" ? "Cerrar Sesión" : "Sign Out"}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>
    </header>
  );
}

export function BottomNav() {
  const pathname = usePathname();
  const locale = useSettingsStore((s) => s.locale);

  const links = [
    {
      href: "/dashboard",
      icon: Map,
      label: locale === "es" ? "Mapa" : "Map",
    },
    {
      href: "/review",
      icon: BookOpen,
      label: locale === "es" ? "Repasar" : "Review",
    },
    {
      href: "/profile",
      icon: User,
      label: locale === "es" ? "Perfil" : "Profile",
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 sm:hidden">
      <div className="flex items-center justify-around h-16">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-colors
                ${isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"}
              `}
            >
              <link.icon
                className={`w-5 h-5 ${isActive ? "text-primary" : ""}`}
              />
              <span className="text-[10px] font-medium">{link.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
