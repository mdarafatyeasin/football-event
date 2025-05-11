"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Football from "../components/Football"
import logo from "../../public/logo.png"
import { GalleryThumbnailsIcon as Gallery, Instagram, Mail, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"

const Page = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Text reveal animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  }

  // Line animation variants
  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        delay: 0.2 + i * 0.1,
        duration: 0.8,
        ease: "easeInOut",
      },
    }),
  }

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Football component as background */}
      <div className="absolute inset-0 z-0 opacity-60">
        <Football />
      </div>

      {/* Content layer - 90% width centered */}
      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[90%] z-10 text-white">
        {/* Logo at top center */}
        <motion.div
          className="absolute top-4 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="flex flex-col items-center">
            <Image
              src={logo || "/placeholder.svg"}
              alt="HyperBall 2025"
              width={220}
              height={110}
              className="object-contain drop-shadow-[0_0_15px_rgba(255,0,0,0.6)]"
              priority
            />
          </div>
        </motion.div>


        {/* SVG for connecting lines */}
        <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none">
          {/* Line to top left */}
          <motion.path
            d="M 50% 50% L 15% 25%"
            stroke="url(#redGradient)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            initial="hidden"
            animate="visible"
            custom={0}
            variants={lineVariants}
            className="drop-shadow-[0_0_3px_rgba(255,0,0,0.7)]"
          />

          {/* Line to top right */}
          <motion.path
            d="M 50% 50% L 85% 25%"
            stroke="url(#redGradient)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            initial="hidden"
            animate="visible"
            custom={1}
            variants={lineVariants}
            className="drop-shadow-[0_0_3px_rgba(255,0,0,0.7)]"
          />

          {/* Line to bottom left */}
          <motion.path
            d="M 50% 50% L 15% 75%"
            stroke="url(#redGradient)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            initial="hidden"
            animate="visible"
            custom={2}
            variants={lineVariants}
            className="drop-shadow-[0_0_3px_rgba(255,0,0,0.7)]"
          />

          {/* Line to bottom right */}
          <motion.path
            d="M 50% 50% L 85% 75%"
            stroke="url(#redGradient)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            initial="hidden"
            animate="visible"
            custom={3}
            variants={lineVariants}
            className="drop-shadow-[0_0_3px_rgba(255,0,0,0.7)]"
          />

          {/* Line to bottom center */}
          <motion.path
            d="M 50% 50% L 50% 85%"
            stroke="url(#redGradient)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            initial="hidden"
            animate="visible"
            custom={4}
            variants={lineVariants}
            className="drop-shadow-[0_0_3px_rgba(255,0,0,0.7)]"
          />

          {/* Gradient definition */}
          <defs>
            <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#dc2626" />
              <stop offset="100%" stopColor="#ea580c" />
            </linearGradient>
          </defs>
        </svg>

        {/* Left content cards with animations */}
        <motion.div
          className="absolute top-[25%] left-[15%] -translate-x-1/2 -translate-y-1/2 w-96 bg-black/60 backdrop-blur-sm p-4 rounded-lg border border-red-500/30"
          initial="hidden"
          animate="visible"
          custom={0}
          variants={textVariants}
        >
          <h2
            className="text-3xl font-black mb-2 tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 drop-shadow-[0_0_8px_rgba(255,0,0,0.7)] uppercase"
            style={{ fontFamily: "'Impact', sans-serif", letterSpacing: "1px" }}
          >
            HYPERBALL
          </h2>
          <p className="text-base text-gray-300 leading-relaxed hover:text-white transition-colors duration-300">
            HyperBall 2025 is a next-gen futsal tournament made for the 9-to-5 crowd. Fast-paced, after-hours football
            packed with innovative formats, professional lighting, curated music, and high-energy competition.
          </p>
        </motion.div>

        {/* Right content cards with text-right alignment */}
        <motion.div
          className="absolute top-[25%] left-[85%] -translate-x-1/2 -translate-y-1/2 w-96 bg-black/60 backdrop-blur-sm p-4 rounded-lg border border-red-500/30"
          initial="hidden"
          animate="visible"
          custom={1}
          variants={textVariants}
        >
          <h2
            className="text-3xl font-black mb-2 tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-500 drop-shadow-[0_0_8px_rgba(255,0,0,0.7)] uppercase text-right"
            style={{ fontFamily: "'Impact', sans-serif", letterSpacing: "1px" }}
          >
            GAME MODES
          </h2>
          <p className="text-base text-gray-300 leading-relaxed hover:text-white transition-colors duration-300 text-right">
            We have reimagined the traditional rulebook. Experience 1v1 penalties, Chaos Mode, Power Plays, and dynamic
            scoring that unlocks new players. Every match offers a unique challenge.
          </p>
        </motion.div>

        <motion.div
          className="absolute top-[75%] left-[15%] -translate-x-1/2 -translate-y-1/2 w-96 bg-black/60 backdrop-blur-sm p-4 rounded-lg border border-red-500/30"
          initial="hidden"
          animate="visible"
          custom={2}
          variants={textVariants}
        >
          <h2
            className="text-3xl font-black mb-2 tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 drop-shadow-[0_0_8px_rgba(255,0,0,0.7)] uppercase"
            style={{ fontFamily: "'Impact', sans-serif", letterSpacing: "1px" }}
          >
            WHY PLAY?
          </h2>
          <p className="text-base text-gray-300 leading-relaxed hover:text-white transition-colors duration-300">
            Transition from the office to the court. HyperBall creates the perfect environment for team building, stress
            relief, and showcasing hidden athletic talents. It combines networking and fitness.
          </p>
        </motion.div>

        <motion.div
          className="absolute top-[75%] left-[85%] -translate-x-1/2 -translate-y-1/2 w-96 bg-black/60 backdrop-blur-sm p-4 rounded-lg border border-red-500/30"
          initial="hidden"
          animate="visible"
          custom={3}
          variants={textVariants}
        >
          <h2
            className="text-3xl font-black mb-2 tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-red-600 drop-shadow-[0_0_8px_rgba(255,0,0,0.7)] uppercase text-right"
            style={{ fontFamily: "'Impact', sans-serif", letterSpacing: "1px" }}
          >
            REGISTER NOW
          </h2>
          <p className="text-base text-gray-300 leading-relaxed hover:text-white transition-colors duration-300 text-right">
            Secure your spot in our upcoming events. Contact us to register your team. Requirements include 8–10
            players, a distinctive team name, and commitment to competition.
          </p>
        </motion.div>

        {/* Sports-styled social buttons with BLUE glow effect */}
        <div className="absolute top-[85%] left-1/2 -translate-x-1/2 flex gap-6">
          {mounted &&
            ["gallery", "instagram", "mail", "message"].map((type, index) => (
              <motion.button
                key={type}
                className="relative group"
                aria-label={
                  type === "gallery"
                    ? "Photo Gallery"
                    : type === "instagram"
                      ? "Instagram"
                      : type === "mail"
                        ? "Gmail"
                        : "WhatsApp"
                }
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"></span>
                <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 border border-gray-700 transition-all duration-300 group-hover:border-blue-400 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                  {type === "gallery" && <Gallery className="h-5 w-5" />}
                  {type === "instagram" && <Instagram className="h-5 w-5" />}
                  {type === "mail" && <Mail className="h-5 w-5" />}
                  {type === "message" && <MessageCircle className="h-5 w-5" />}
                </div>
              </motion.button>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Page
