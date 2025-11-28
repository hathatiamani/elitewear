"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import gsap from "gsap"
import Navigation from "@/components/navigation"
import Image from "next/image"

export default function Home() {
  const loaderRef = useRef(null)
  const contentRef = useRef(null)

  const footerImages = [
    "/o.jpg",
    "/t.jpg",
    "/tt.jpg",
    "/f.jpg",
  ]

  
  const loaderImages = [
    { src: "/o.jpg", width: 400, height: 600 },
    { src: "/t.jpg", width: 400, height: 600 },
    { src: "/tt.jpg", width: 400, height: 600 },
    { src: "/f.jpg", width: 400, height: 600 },
  ]

  useEffect(() => {
    gsap.set(".loader-img", { y: 500 })
    gsap.set(".loader-imgs", { x: 500 })
    gsap.set(".nav-item", { y: 25, opacity: 0 })
    gsap.set(".hero-text, .footer-item", { y: 200 })

    const tl = gsap.timeline({ delay: 1 })

    tl.to(".loader-img", {
      y: 0,
      duration: 1.5,
      stagger: 0.05,
      ease: "power3.inOut",
    })
      .to(
        ".loader-imgs",
        {
          x: 0,
          duration: 3,
          ease: "power3.inOut",
        },
        "-=2.5",
      )
      .to(
        ".loader-img:not(.loader-logo)",
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          duration: 1,
          stagger: 0.1,
          ease: "power3.inOut",
        },
        "-=1",
      )
      .to(
        ".loader",
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          duration: 1,
          ease: "power3.inOut",
        },
        "-=0.5",
      )
      .to(
        ".nav-item, .hero-text, .footer-item",
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 1,
          ease: "power3.inOut",
        },
        "-=0.5",
      )
  }, [])

  return (
    <div className="min-h-screen bg-[#e7e4e5] overflow-hidden">
      {/* Loader */}
      <div
        className="loader fixed w-screen h-screen bg-black z-50 pointer-events-none"
        style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
        ref={loaderRef}
      >
        <div
          className="loader-imgs w-[150%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-8"
          style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
        >
          {loaderImages.map((image, index) => (
            <div
              key={index}
              className="loader-img relative flex-1 min-w-[200px] h-80" 
              style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
            >
              <Image 
                src={image.src} 
                alt={`Product ${index + 1}`}
                className="w-full h-full object-cover"
                width={image.width}
                height={image.height}
                quality={90} 
                priority 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ))}
          {loaderImages.map((image, index) => (
            <div
              key={`dup-${index}`}
              className="loader-img relative flex-1 min-w-[200px] h-80"
              style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
            >
              <Image 
                src={image.src} 
                alt={`Product ${index + 1}`}
                className="w-full h-full object-cover"
                width={image.width}
                height={image.height}
                quality={90}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <div className="website-content relative w-full mt-20" ref={contentRef}>
        {/* Hero Section */}
        <div className="hero absolute left-0 w-full transform text-center uppercase z-10">
          <div className="hero-text mb-4" style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}>
            <h1 className="text-6xl md:text-8xl font-light leading-none" style={{ fontFamily: "'PP Migra', serif" }}>
              discover
            </h1>
          </div>
          <div className="hero-text mb-4" style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}>
            <h1 className="text-6xl md:text-8xl font-light leading-none" style={{ fontFamily: "'PP Migra', serif" }}>
              premium
            </h1>
          </div>
          <div className="hero-text" style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}>
            <h1
              className="text-6xl md:text-8xl font-bold leading-none"
              style={{ fontFamily: "'Sharp Grotesk', sans-serif" }}
            >
              style
            </h1>
          </div>

          <Link
            href="/shop"
            className="inline-block mt-12 px-8 py-3 bg-black text-white uppercase text-sm font-semibold hover:bg-gray-800 transition-colors"
          >
            Shop Now
          </Link>
        </div>

        {/* Footer */}
        <footer className="fixed bottom-8 right-8 flex gap-3 z-20">
          {footerImages.map((src, index) => (
            <div
              key={index}
              className="footer-item w-20 h-20 bg-white overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
              style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
            >
              <Image
                src={src} 
                alt={`Product ${index + 1}`}
                className="w-full h-full object-cover"
                width={80}
                height={80}
                quality={85}
              />
            </div>
          ))}
        </footer>
      </div>
    </div>
  )
}