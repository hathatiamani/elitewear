"use client"

import Link from "next/link"

export default function Navigation() {

  return (
    <nav
      className="w-full p-8 flex items-center justify-between fixed top-0 z-40 bg-[#e7e4e5]"
      style={{ fontFamily: "'Neue Montreal', sans-serif" }}
    >
      <div className="nav-item flex-1">
        <button
          className="text-sm uppercase hover:opacity-70 transition-opacity"
        >
          ( Home )
        </button>
      </div>

      <div className="nav-item text-center flex-1" style={{ fontFamily: "'PP Editorial Old', serif" }}>
        <Link href="/" className="text-2xl font-medium uppercase">
          EliteWear
        </Link>
      </div>

      <div className="nav-item text-right flex-1">
        <Link href="/shop" className="text-sm uppercase hover:opacity-70 transition-opacity">
          ( shop )
        </Link>
      </div>

      
    </nav>
  )
}
