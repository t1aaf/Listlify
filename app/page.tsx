import { auth } from "@/auth";
import FloatingNavbar from "@/components/Floatingnavbar";
import StickyWall from "@/components/StickyWall";
import { redirect } from "next/navigation";

export default async function Hero() {
  const session = await auth();

  if (!session?.user) {
    redirect("/auth/sign-in");
  }

  return (
    <div className="flex h-screen">
      <FloatingNavbar />
      <main className="flex-1 overflow-auto">
        <div className="p-4 sm:p-6 md:p-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl sm:text-3xl font-semibold">Sticky Wall</h1>
          </div>
          <StickyWall />
        </div>
      </main>
    </div>
  );
}
