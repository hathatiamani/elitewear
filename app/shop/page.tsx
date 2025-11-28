"use client"

import { useEffect } from "react"
import Link from "next/link"
import gsap from "gsap"
import Navigation from "@/components/navigation"
import Image from "next/image"

const products = [
  { 
    id: 1, 
    name: "Premium Jacket", 
    price: "5,000 DZD", 
    image: "/jacket.jpg" 
  },
  { 
    id: 2, 
    name: "Classic Shirt", 
    price: "2,000 DZD", 
    image: "/shirt.jpg" 
  },
  { 
    id: 3, 
    name: "Elegant Pants", 
    price: "8,000 DZD", 
    image: "/pants.jpg" 
  },
  { 
    id: 4, 
    name: "Designer Belt", 
    price: "2,500 DZD", 
    image: "/belt.jpg" 
  },
  { 
    id: 5, 
    name: "Wool Sweater", 
    price: "5,000 DZD", 
    image: "/sweater.jpg" 
  },
  { 
    id: 6, 
    name: "Casual Shorts", 
    price: "5,000 DZD", 
    image: "/shorts.jpg" 
  },
]

export default function Shop() {
  useEffect(() => {
    gsap.set(".nav-item", { y: 25, opacity: 0 })
    gsap.set(".product-item", { y: 100, opacity: 0 })

    const tl = gsap.timeline()

    tl.to(".nav-item", {
      y: 0,
      opacity: 1,
      stagger: 0.1,
      duration: 0.8,
      ease: "power3.out",
    }).to(
      ".product-item",
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.5",
    )
  }, [])

  return (
    <div className="min-h-screen bg-[#e7e4e5]">
      <Navigation />

      <div className="max-w-7xl mx-auto px-8 py-20 mt-10">
        <h1 className="text-6xl font-light mb-16 uppercase" style={{ fontFamily: "'PP Migra', serif" }}>
          <span className="font-bold" style={{ fontFamily: "'Sharp Grotesk', sans-serif" }}>
            our
          </span>{" "}
          collection
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((product) => (
            <Link href={`/shop/${product.id}`} key={product.id}>
              <div className="product-item group cursor-pointer">
                <div
                  className="bg-gray-200 aspect-square mb-6 overflow-hidden hover:bg-gray-300 transition-colors relative"
                  style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <h3
                  className="text-xl font-light mb-2 group-hover:font-semibold transition-all"
                  style={{ fontFamily: "'Neue Montreal', sans-serif" }}
                >
                  {product.name}
                </h3>
                <p className="text-lg font-semibold">{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}