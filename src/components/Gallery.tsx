"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { MapPin, X, ChevronLeft, ChevronRight, ExternalLink, Camera } from "lucide-react"

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Gallery images with varied sizes and aspect ratios (6 images)
  const galleryImages = [
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "HyperBall tournament action shot",
      caption: "Intense match during last year's tournament finals",
      size: "large", // large image (spans 3 columns and 2 rows)
    },
    {
      src: "/placeholder.svg?height=600&width=600",
      alt: "Indoor futsal court",
      caption: "Our professional indoor futsal court with state-of-the-art facilities",
      size: "medium", // medium image (spans 3 columns, 1 row)
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Team celebration",
      caption: "Winners celebrating with their trophy and medals",
      size: "medium", // medium image (spans 3 columns, 1 row)
    },
    {
      src: "/placeholder.svg?height=800&width=600",
      alt: "Player in action",
      caption: "Skilled player showing off during the tournament",
      size: "tall", // tall image (spans 2 columns, 2 rows)
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Tournament crowd",
      caption: "Enthusiastic crowd cheering during a match",
      size: "small", // small image (spans 2 columns, 1 row)
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Trophy presentation",
      caption: "Trophy presentation ceremony from the previous tournament",
      size: "small", // small image (spans 2 columns, 1 row)
    },
  ]

  // Venue details
  const venueDetails = [
    { label: "Name", value: "Hyderabad Sports Complex" },
    { label: "Address", value: "Gandi Maisamma, Hyderabad, Telangana 500043" },
    { label: "Facilities", value: "5 Indoor Courts, Changing Rooms, Cafeteria, Parking" },
    { label: "Spectator Capacity", value: "500 seats" },
  ]

  // Open lightbox with specific image
  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
    document.body.style.overflow = "hidden" // Prevent scrolling when lightbox is open
  }

  // Close lightbox
  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = "auto" // Restore scrolling
  }

  // Navigate to next image in lightbox
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % galleryImages.length)
  }

  // Navigate to previous image in lightbox
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + galleryImages.length) % galleryImages.length)
  }

  // Handle keyboard navigation in lightbox
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox()
    if (e.key === "ArrowRight") nextImage()
    if (e.key === "ArrowLeft") prevImage()
  }

  return (
    <div className="min-h-screen relative">

      <div className="max-w-6xl mx-auto px-4 py-12 relative z-10">
        {/* Header with back button */}
        <div className="mb-8">

          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">
              <span className="text-red-500">VENUE</span> & GALLERY
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-red-700 to-red-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Explore our world-class venue and get a glimpse of the HyperBall tournament experience through our
              gallery.
            </p>
          </div>
        </div>

        {/* Featured Gallery Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-white flex items-center">
            <Camera className="mr-2 h-5 w-5 text-red-500" />
            Tournament Gallery
          </h2>
          <span className="text-gray-400 text-sm">Click any image to enlarge</span>
        </div>

        {/* Dynamic Photo Gallery - With gaps but no dark borders */}
        <section className="mb-16">
          <div className="grid grid-cols-6 gap-4 auto-rows-[200px]">
            {galleryImages.map((image, index) => {
              // Determine grid span classes based on image size
              let gridClass = "col-span-2 row-span-1" // Default (small)

              if (image.size === "large") {
                gridClass = "col-span-3 row-span-2"
              } else if (image.size === "medium") {
                gridClass = "col-span-3 row-span-1"
              } else if (image.size === "tall") {
                gridClass = "col-span-2 row-span-2"
              }

              return (
                <div
                  key={index}
                  className={`${gridClass} group relative overflow-hidden cursor-pointer rounded-lg`}
                  onClick={() => openLightbox(index)}
                >
                  <div className="w-full h-full relative">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <p className="text-white text-sm md:text-base">{image.caption}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Venue Information */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-8 flex items-center">
            <MapPin className="mr-2 h-5 w-5 text-red-500" />
            Tournament Venue
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Venue details */}
            <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-white mb-6">Venue Information</h3>

              <div className="space-y-4 mb-8">
                {venueDetails.map((detail, index) => (
                  <div key={index} className="flex flex-col sm:flex-row sm:items-center py-3 border-b border-gray-800">
                    <span className="text-gray-400 sm:w-1/3">{detail.label}:</span>
                    <span className="text-white font-medium">{detail.value}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-medium text-white">Getting There</h4>
                <p className="text-gray-300">
                  The venue is easily accessible by public transport and has ample parking space for those coming by
                  car. Located just 20 minutes from the city center, its the perfect location for our tournament.
                </p>
                <a
                  href="https://www.google.com/maps/dir//HCCF%2BHXW,+Gandi+Maisamma,+Hyderabad,+Telangana+500043/@17.5716831,78.3429051,26568m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x3bcb8f47c456b5db:0x5525d67f93a1358c!2m2!1d78.4253069!2d17.5717002?entry=ttu&g_ep=EgoyMDI1MDUxNS4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors"
                >
                  Get Directions <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Google Maps */}
            <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden shadow-lg h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.6776111733584!2d78.42273841482233!3d17.571700287975788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8f47c456b5db%3A0x5525d67f93a1358c!2sGandi%20Maisamma%2C%20Hyderabad%2C%20Telangana%20500043!5e0!3m2!1sen!2sin!4v1621345678901!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="HyperBall Tournament Venue"
                className="grayscale invert-[0.85] contrast-[1.2]"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Call to action */}
        <div className="bg-gradient-to-r from-red-900/20 to-gray-900/40 border border-red-900/30 rounded-xl p-8 backdrop-blur-sm text-center">
          <h3 className="text-2xl font-semibold text-white mb-4">Ready to Experience HyperBall?</h3>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            Join us at this amazing venue for the next HyperBall tournament. Register your team now to secure your spot.
          </p>
          <Link
            href="/v2/reg"
            className="inline-block px-6 py-3 bg-gradient-to-r from-red-700 to-red-600 text-white rounded-lg font-medium hover:from-red-600 hover:to-red-500 transition-all shadow-lg shadow-red-900/20 hover:shadow-red-900/30"
          >
            Register Your Team
          </Link>
        </div>

        {/* Footer */}
        <div className="mt-16 border-t border-gray-800/50 pt-8">
          <div className="flex justify-between items-center flex-col md:flex-row gap-6">
            <div>
              <h2 className="text-xl font-bold text-white mb-2">
                <span className="text-red-500">HYPER</span>BALL
              </h2>
              <p className="text-gray-400 text-sm">© 2025 HyperBall. All rights reserved.</p>
            </div>
            <div className="flex gap-6">
              <Link href="/" className="text-gray-300 hover:text-red-400 transition-colors text-sm font-medium">
                Home
              </Link>
              <Link href="/v2/rules" className="text-gray-300 hover:text-red-400 transition-colors text-sm font-medium">
                Rules
              </Link>
              <Link href="/v2/venue" className="text-red-400 hover:text-red-300 transition-colors text-sm font-medium">
                Venue
              </Link>
              <Link href="/v2/reg" className="text-gray-300 hover:text-red-400 transition-colors text-sm font-medium">
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-red-400 transition-colors z-10"
            onClick={closeLightbox}
          >
            <X className="h-8 w-8" />
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-red-400 transition-colors z-10 p-2 bg-black/30 rounded-full"
            onClick={(e) => {
              e.stopPropagation()
              prevImage()
            }}
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-red-400 transition-colors z-10 p-2 bg-black/30 rounded-full"
            onClick={(e) => {
              e.stopPropagation()
              nextImage()
            }}
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          <div className="relative max-w-4xl max-h-[80vh] w-full" onClick={(e) => e.stopPropagation()}>
            <div className="relative aspect-video">
              <Image
                src={galleryImages[currentImageIndex].src || "/placeholder.svg"}
                alt={galleryImages[currentImageIndex].alt}
                fill
                className="object-contain"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4">
              <p className="text-white text-center">{galleryImages[currentImageIndex].caption}</p>
              <p className="text-gray-400 text-center text-sm mt-1">
                {currentImageIndex + 1} / {galleryImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
