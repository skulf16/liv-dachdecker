"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { mainNav } from "@/lib/nav";
import { cn } from "@/lib/cn";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur supports-[backdrop-filter]:bg-paper/85">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" aria-label="Zur Startseite" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="LIV Dachdecker"
            width={167}
            height={20}
            className="h-[22px] w-auto sm:h-[26px]"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Hauptnavigation">
          {mainNav.map((item) =>
            item.children ? (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    isActive(pathname, item.href)
                      ? "text-clay-deep"
                      : "text-body hover:text-ink",
                  )}
                >
                  {item.label}
                  <svg
                    viewBox="0 0 12 12"
                    className="h-3 w-3 opacity-60"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 4.5 6 7.5 9 4.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
                <div className="invisible absolute left-0 top-full min-w-56 translate-y-1 rounded-lg border border-line bg-paper p-1.5 opacity-0 shadow-lg transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 focus-within:visible focus-within:translate-y-0 focus-within:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className={cn(
                        "block rounded-md px-3 py-2 text-sm transition-colors",
                        isActive(pathname, child.href) && pathname === child.href
                          ? "bg-surface text-clay-deep"
                          : "text-body hover:bg-surface hover:text-ink",
                      )}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  isActive(pathname, item.href)
                    ? "text-clay-deep"
                    : "text-body hover:text-ink",
                )}
              >
                {item.label}
              </Link>
            ),
          )}
          <Link
            href="/kontakt"
            className="ml-2 inline-flex items-center gap-1.5 whitespace-nowrap rounded-md bg-clay px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-clay-deep"
          >
            Mitglied werden
            <span aria-hidden="true">→</span>
          </Link>
        </nav>

        {/* Mobile burger */}
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink lg:hidden"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-4 w-6">
            <span
              className={cn(
                "absolute left-0 top-0 h-0.5 w-6 bg-current transition-transform",
                open && "translate-y-[7px] rotate-45",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-[7px] h-0.5 w-6 bg-current transition-opacity",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-[14px] h-0.5 w-6 bg-current transition-transform",
                open && "-translate-y-[7px] -rotate-45",
              )}
            />
          </span>
        </button>
      </div>

      {/* Mobile panel */}
      {open && (
        <nav
          className="border-t border-line bg-paper lg:hidden"
          aria-label="Hauptnavigation mobil"
        >
          <div className="space-y-1 px-5 py-4 sm:px-6">
            {mainNav.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-md px-3 py-2.5 text-base font-medium",
                    isActive(pathname, item.href)
                      ? "text-clay-deep"
                      : "text-ink hover:bg-surface",
                  )}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-3 border-l border-line pl-3">
                    {item.children
                      .filter((c) => c.href !== item.href)
                      .map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="block rounded-md px-3 py-2 text-sm text-body hover:bg-surface hover:text-ink"
                        >
                          {child.label}
                        </Link>
                      ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/kontakt"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-md bg-clay px-4 py-3 text-center text-base font-semibold text-white hover:bg-clay-deep"
            >
              Mitglied werden →
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
