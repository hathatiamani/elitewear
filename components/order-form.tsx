"use client"

import type React from "react"

import { useState } from "react"
import gsap from "gsap"
import { useEffect } from "react"

interface Product {
  id: number
  name: string
  price: number
}

export default function OrderForm({ product }: { product: Product }) {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    city: "Algiers",
    deliveryType: "home",
  })

  const deliveryFee = formData.deliveryType === "home" ? 500 : 300

  useEffect(() => {
    gsap.from(".order-form", {
      opacity: 0,
      y: 20,
      duration: 0.5,
      ease: "power3.out",
    })
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle order submission
    alert(`Order placed for ${product.name}`)
  }

  const total = product.price + deliveryFee

  const cities = ["Algiers", "Oran", "Constantine", "Annaba", "Blida", "Boumerdes", "Tlemcen"]

  return (
    <div className="order-form bg-white p-8 rounded border border-gray-300">
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Customer Information Section */}
        <div>
          <h3 className="text-2xl font-light mb-6 uppercase" style={{ fontFamily: "'PP Migra', serif" }}>
            customer{" "}
            <span className="font-bold" style={{ fontFamily: "'Sharp Grotesk', sans-serif" }}>
              information
            </span>
          </h3>

          <div className="space-y-4">
            {/* Full Name */}
            <div>
              <label
                className="block text-sm font-semibold mb-2 uppercase"
                style={{ fontFamily: "'Neue Montreal', sans-serif" }}
              >
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors"
                placeholder="Enter your full name"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label
                className="block text-sm font-semibold mb-2 uppercase"
                style={{ fontFamily: "'Neue Montreal', sans-serif" }}
              >
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors"
                placeholder="+213 XXX XXX XXX"
              />
            </div>

            {/* City Selection */}
            <div>
              <label
                className="block text-sm font-semibold mb-2 uppercase"
                style={{ fontFamily: "'Neue Montreal', sans-serif" }}
              >
                Select City <span className="text-red-500">*</span>
              </label>
              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors bg-white"
              >
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Delivery Options */}
        <div>
          <h3 className="text-xl font-light mb-4 uppercase" style={{ fontFamily: "'PP Migra', serif" }}>
            delivery{" "}
            <span className="font-bold" style={{ fontFamily: "'Sharp Grotesk', sans-serif" }}>
              type
            </span>
          </h3>

          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="deliveryType"
                value="home"
                checked={formData.deliveryType === "home"}
                onChange={handleChange}
                className="w-4 h-4"
              />
              <span className="text-sm uppercase" style={{ fontFamily: "'Neue Montreal', sans-serif" }}>
                Home Delivery (+500 DZD)
              </span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="deliveryType"
                value="office"
                checked={formData.deliveryType === "office"}
                onChange={handleChange}
                className="w-4 h-4"
              />
              <span className="text-sm uppercase" style={{ fontFamily: "'Neue Montreal', sans-serif" }}>
                Office Delivery (+300 DZD)
              </span>
            </label>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-gray-50 p-6 border border-gray-200">
          <h3 className="text-xl font-light mb-4 uppercase" style={{ fontFamily: "'PP Migra', serif" }}>
            order{" "}
            <span className="font-bold" style={{ fontFamily: "'Sharp Grotesk', sans-serif" }}>
              summary
            </span>
          </h3>

          <div className="space-y-3" style={{ fontFamily: "'Neue Montreal', sans-serif" }}>
            <div className="flex justify-between text-sm">
              <span>Product Price:</span>
              <span className="font-semibold">{product.price.toLocaleString()} DA</span>
            </div>

            <div className="flex justify-between text-sm">
              <span>Delivery Fee:</span>
              <span className="font-semibold">{deliveryFee.toLocaleString()} DA</span>
            </div>

            <div className="border-t border-gray-300 pt-3 flex justify-between">
              <span className="font-bold">Total:</span>
              <span className="text-xl font-bold">{total.toLocaleString()} DA</span>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-4 bg-black text-white uppercase font-bold text-lg hover:bg-gray-800 transition-colors"
        >
          Confirm Order
        </button>
      </form>
    </div>
  )
}
