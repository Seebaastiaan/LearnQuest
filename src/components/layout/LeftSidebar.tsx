"use client";

import { useSettingsStore } from "@/stores";
import {
  BookOpen,
  GraduationCap,
  User,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  href: string;
  icon: React.ElementType;
  labelEs: string;
  labelEn: string;
}

const navItems: NavItem[] = [
  {
    href: "/dashboard",
    icon: GraduationCap,
    labelEs: "Aprender",
    labelEn: "Learn",
  },
  {
    href: "/review",
    icon: BookOpen,
    labelEs: "Repasar",
    labelEn: "Review",
  },
  {
    href: "/profile",
    icon: User,
    labelEs: "Perfil",
    labelEn: "Profile",
  },
];

export function LeftSidebar() {
  const pathname = usePathname();
  const locale = useSettingsStore((s) => s.locale);

  return (
    <aside className="hidden lg:flex flex-col fixed left-0 top-0 bottom-0 w-[220px] border-r border-[#E5E5E5] dark:border-white/10 bg-background z-40">
      {/* Logo */}
      <Link
        href="/dashboard"
        className="flex items-center gap-2.5 px-5 h-[72px] shrink-0"
      >
        <div className="w-10 h-10 rounded-xl bg-[#58CC02] flex items-center justify-center shadow-[0_3px_0_0_#46a302]">
          <GraduationCap className="w-6 h-6 text-white" />
        </div>
        <span className="font-extrabold text-xl tracking-tight text-[#4B4B4B] dark:text-white">
          LearnQuest
        </span>
      </Link>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-2">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-xl text-[15px] font-bold transition-all duration-150
                    ${
                      isActive
                        ? "bg-[#DDF4FF] dark:bg-sky-950/40 text-[#1CB0F6] border-2 border-[#84D8FF] dark:border-sky-700/50"
                        : "text-[#777] dark:text-slate-400 hover:bg-[#F7F7F7] dark:hover:bg-white/5 border-2 border-transparent"
                    }
                  `}
                >
                  <item.icon
                    className={`w-[22px] h-[22px] shrink-0 ${
                      isActive
                        ? "text-[#1CB0F6]"
                        : "text-[#AFAFAF] dark:text-slate-500"
                    }`}
                  />
                  <span>{locale === "es" ? item.labelEs : item.labelEn}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
