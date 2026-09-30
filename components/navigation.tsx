"use client";

import Link from "next/link";
import { useState } from "react";

const email = "mailto:hello@nathancrossdale.com?subject=Photography%20Inquiry";
export function InquiryLink({ className = "" }: { className?: string }) { return <a className={className} href={email}>Inquire <span aria-hidden>→</span></a>; }

export function Navigation() {
  const [open, setOpen] = useState(false);
  return <header className="absolute z-30 w-full mix-blend-difference text-[#f4f1ea]"><div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-5 md:px-8 md:py-7">
    <Link className="eyebrow font-bold" href="/">Nathan Crossdale</Link>
    <nav className="hidden items-center gap-7 md:flex"><Link className="eyebrow" href="/#work">Work</Link><Link className="eyebrow" href="/weddings">Weddings</Link><Link className="eyebrow" href="/about">About</Link><InquiryLink className="eyebrow border-b border-current pb-1" /></nav>
    <button aria-expanded={open} onClick={() => setOpen(!open)} className="eyebrow md:hidden">{open ? "Close" : "Menu"}</button>
  </div>{open && <div className="absolute right-5 top-15 flex w-48 flex-col gap-5 bg-[#141310] p-6 shadow-xl md:hidden"><Link className="eyebrow" onClick={() => setOpen(false)} href="/#work">Work</Link><Link className="eyebrow" onClick={() => setOpen(false)} href="/weddings">Weddings</Link><Link className="eyebrow" onClick={() => setOpen(false)} href="/about">About</Link><InquiryLink className="eyebrow" /></div>}</header>;
}
