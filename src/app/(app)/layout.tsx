import { BottomNav, Navbar } from "@/components/layout/Navbar";
import { SupabaseSyncProvider } from "@/components/providers/SupabaseSyncProvider";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <SupabaseSyncProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pb-20 sm:pb-8">{children}</main>
        <BottomNav />
      </div>
    </SupabaseSyncProvider>
  );
}
