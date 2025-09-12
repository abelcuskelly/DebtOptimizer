"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useState } from "react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { SignupModal } from "@/components/forms/SignupModal";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-gray-200">
        <Container className="flex h-16 items-center justify-between">
          <Link href="/" className="font-semibold text-lg">
            <span className="text-primary-blue">{SITE.name}</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href} className={cn("text-gray-600 hover:text-gray-900", pathname === l.href && "text-gray-900 font-medium")}>{l.label}</Link>
            ))}
            <Button onClick={() => setIsModalOpen(true)}>Get My Free Debt Analysis</Button>
          </nav>
          <button className="md:hidden p-2" aria-label="Open menu" onClick={() => setOpen((v) => !v)}>
            <Menu />
          </button>
        </Container>
        {open && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <Container className="py-3 flex flex-col gap-2">
              {NAV_LINKS.map((l) => (
                <Link key={l.href} href={l.href} className="py-2" onClick={() => setOpen(false)}>
                  {l.label}
                </Link>
              ))}
              <Button 
                className="w-full" 
                onClick={() => {
                  setIsModalOpen(true);
                  setOpen(false);
                }}
              >
                Get My Free Debt Analysis
              </Button>
            </Container>
          </div>
        )}
      </header>

      <SignupModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
} 