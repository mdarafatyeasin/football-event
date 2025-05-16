"use client"

import { useEffect, useState } from "react"
import { Calendar, Trophy } from "lucide-react"
import Link from "next/link"

type TimeLeft = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date("May 20, 2025 00:00:00").getTime()

    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
          FOOTBALL <span className="text-red-600">CHAMPIONSHIP</span>
        </h1>
        <div className="flex items-center justify-center gap-2 text-white/80">
          <Calendar className="h-5 w-5 text-red-500" />
          <p className="text-lg md:text-xl">Starting May 20, 2025</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {[
          { label: "DAYS", value: timeLeft.days },
          { label: "HOURS", value: timeLeft.hours },
          { label: "MINUTES", value: timeLeft.minutes },
          { label: "SECONDS", value: timeLeft.seconds },
        ].map((item) => (
          <div
            key={item.label}
            className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg p-4 flex flex-col items-center justify-center"
          >
            <div className="text-3xl md:text-5xl font-bold text-white mb-2">
              {item.value.toString().padStart(2, "0")}
            </div>
            <div className="text-xs md:text-sm font-medium text-red-500">{item.label}</div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6">
        <Link href="/v2/reg" className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105">
          REGISTER NOW
        </Link>
        <button className="bg-transparent border-2 border-white/30 hover:border-white text-white font-bold py-3 px-8 rounded-full transition-all">
          EVENT DETAILS
        </button>
      </div>

      <div className="mt-12 flex items-center justify-center gap-4 text-white/60">
        <Trophy className="h-6 w-6 text-red-500" />
        <p className="text-lg">Join us for the ultimate football experience</p>
      </div>
    </div>
  )
}
