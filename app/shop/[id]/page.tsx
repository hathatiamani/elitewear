"use client"

import React, { useEffect, useState } from "react"
import gsap from "gsap"
import Navigation from "@/components/navigation"
import OrderForm from "@/components/order-form"
import Image from "next/image"

const products = [
  { 
    id: 1, 
    name: "Premium Jacket", 
    price: 5000, 
    image: "/jacket.jpg" 
  },
  { 
    id: 2, 
    name: "Classic Shirt", 
    price: 2000, 
    image: "/shirt.jpg" 
  },
  { 
    id: 3, 
    name: "Elegant Pants", 
    price: 8000, 
    image: "/pants.jpg" 
  },
  { 
    id: 4, 
    name: "Designer Belt", 
    price: 2500, 
    image: "/belt.jpg" 
  },
  { 
    id: 5, 
    name: "Wool Sweater", 
    price: 5000, 
    image: "/weater.jpg" 
  },
  { 
    id: 6, 
    name: "Casual Shorts", 
    price: 5000, 
    image: "/shorts.jpg" 
  },
]

export default function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = React.use(params)
  const product = products.find((p) => p.id === Number(id)) || products[0]
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    gsap.set(".nav-item", { y: 25, opacity: 0 })
    gsap.set(".product-detail", { opacity: 0, y: 50 })

    const tl = gsap.timeline()

    tl.to(".nav-item", {
      y: 0,
      opacity: 1,
      stagger: 0.1,
      duration: 0.8,
      ease: "power3.out",
    }).to(
      ".product-detail",
      {
        opacity: 1,
        y: 0,
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Product Image Section */}
          <div className="product-detail">
            <div className="bg-gray-200 aspect-square overflow-hidden relative">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* Product Details Section */}
          <div className="product-detail space-y-8">
            <div>
              <h1 
                className="text-5xl font-light mb-4 uppercase"
                style={{ fontFamily: "'PP Migra', serif" }}
              >
                {product.name}
              </h1>
              <p className="text-3xl font-bold">
                {product.price.toLocaleString()} DZD
              </p>
            </div>

            <div className="space-y-4">
              <p 
                className="text-lg leading-relaxed"
                style={{ fontFamily: "'Neue Montreal', sans-serif" }}
              >
                Discover the perfect blend of style and comfort. This premium piece is crafted with exceptional
                attention to detail.
              </p>
              <ul 
                className="space-y-2 text-sm"
                style={{ fontFamily: "'Neue Montreal', sans-serif" }}
              >
                <li>✓ Premium Quality Materials</li>
                <li>✓ Timeless Design</li>
                <li>✓ Comfortable Fit</li>
                <li>✓ Expert Craftsmanship</li>
              </ul>
            </div>

            <button
              onClick={() => setShowForm(!showForm)}
              className="w-full py-4 bg-black text-white uppercase font-semibold text-lg hover:bg-gray-800 transition-colors"
              style={{ fontFamily: "'Neue Montreal', sans-serif" }}
            >
              {showForm ? "Cancel" : "Place Order"}
            </button>

            {showForm && <OrderForm product={product} />}
          </div>
        </div>
      </div>
    </div>
  )
}