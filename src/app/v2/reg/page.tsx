"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowLeft, Calendar, CheckCircle, Clock, Lock, Shield, Trophy, Users } from "lucide-react"

export default function RegistrationPage() {
  // Current step for display purposes only
  const currentStep = 1

  // Registration opens on May 20, 2025
  const registrationDate = new Date("May 20, 2025 00:00:00").getTime()

  // State for countdown
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  // State to check if registration is open
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false)

  // Calculate time remaining
  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date().getTime()
      const distance = registrationDate - now

      // Check if registration is open
      if (distance <= 0) {
        setIsRegistrationOpen(true)
        return
      }

      // Calculate time units
      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setTimeRemaining({ days, hours, minutes, seconds })
    }

    // Initial calculation
    calculateTimeRemaining()

    // Update every second
    const interval = setInterval(calculateTimeRemaining, 1000)

    // Cleanup
    return () => clearInterval(interval)
  }, [registrationDate])

  // Tournament benefits for the sidebar
  const benefits = [
    { icon: <Trophy className="h-5 w-5" />, title: "Cash Prizes", description: "Win up to £2,000 for first place" },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Professional Refs",
      description: "FA certified referees for all matches",
    },
    { icon: <Users className="h-5 w-5" />, title: "Team Photos", description: "Professional photography included" },
    { icon: <Calendar className="h-5 w-5" />, title: "Multiple Dates", description: "Choose from 3 tournament dates" },
  ]

  return (
    <div className="bg-gradient-to-br from-gray-950 to-gray-900 min-h-screen relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMCAwdi02aC02djZoNnptNiAwaDZ2LTZoLTZ2NnptLTEyIDBoLTZ2Nmg2di02em0tNi02aC02djZoNnYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>

      <div className="max-w-6xl mx-auto px-4 py-12 relative z-10">
        {/* Header with back button */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-6 group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">
              <span className="text-red-500">HYPER</span>BALL REGISTRATION
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-red-700 to-red-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Complete the form below to register your team for the upcoming HyperBall tournament. All team members must
              be at least 16 years old.
            </p>
          </div>

          {/* Countdown Timer */}
          {!isRegistrationOpen && (
            <div className="max-w-3xl mx-auto mb-10">
              <div className="bg-gradient-to-r from-red-900/30 to-gray-900/50 border border-red-900/30 rounded-xl p-6 backdrop-blur-sm">
                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="h-6 w-6 text-red-400" />
                    <h2 className="text-2xl font-semibold text-white">Registration Opens In</h2>
                  </div>

                  <div className="flex gap-4 mb-6">
                    <div className="text-center min-w-[80px] px-4 py-3 bg-gray-800/70 rounded-lg border border-gray-700">
                      <span className="text-3xl font-bold text-white">{timeRemaining.days}</span>
                      <p className="text-xs text-gray-400 mt-1">Days</p>
                    </div>
                    <div className="text-center min-w-[80px] px-4 py-3 bg-gray-800/70 rounded-lg border border-gray-700">
                      <span className="text-3xl font-bold text-white">{timeRemaining.hours}</span>
                      <p className="text-xs text-gray-400 mt-1">Hours</p>
                    </div>
                    <div className="text-center min-w-[80px] px-4 py-3 bg-gray-800/70 rounded-lg border border-gray-700">
                      <span className="text-3xl font-bold text-white">{timeRemaining.minutes}</span>
                      <p className="text-xs text-gray-400 mt-1">Minutes</p>
                    </div>
                    <div className="text-center min-w-[80px] px-4 py-3 bg-gray-800/70 rounded-lg border border-gray-700">
                      <span className="text-3xl font-bold text-white">{timeRemaining.seconds}</span>
                      <p className="text-xs text-gray-400 mt-1">Seconds</p>
                    </div>
                  </div>

                  <p className="text-gray-300 text-center">
                    Registration for the HyperBall tournament will open on{" "}
                    <span className="text-red-400 font-medium">May 20, 2025</span>. Be ready to secure your teams spot
                    as places are limited!
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Progress indicator - only show when registration is open */}
          {isRegistrationOpen && (
            <div className="w-full max-w-3xl mx-auto mb-10">
              <div className="flex justify-between items-center">
                {[1, 2, 3, 4].map((step) => (
                  <div key={step} className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        currentStep === step
                          ? "bg-red-600 text-white"
                          : currentStep > step
                            ? "bg-green-600 text-white"
                            : "bg-gray-800 text-gray-400"
                      }`}
                    >
                      {currentStep > step ? <CheckCircle className="h-5 w-5" /> : <span>{step}</span>}
                    </div>
                    <span className={`text-xs mt-2 ${currentStep >= step ? "text-gray-200" : "text-gray-500"}`}>
                      {step === 1 && "Team Info"}
                      {step === 2 && "Tournament"}
                      {step === 3 && "Players"}
                      {step === 4 && "Confirm"}
                    </span>
                  </div>
                ))}
              </div>
              <div className="w-full h-1 bg-gray-800 mt-5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-red-700 to-red-500 transition-all duration-300"
                  style={{ width: `${((currentStep - 1) / (4 - 1)) * 100}%` }}
                ></div>
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form section */}
          <div className="lg:col-span-2">
            <div
              className={`bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-xl p-8 shadow-lg relative ${!isRegistrationOpen ? "opacity-75" : ""}`}
            >
              {/* Disabled overlay */}
              {!isRegistrationOpen && (
                <div className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm rounded-xl flex items-center justify-center z-10">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center mx-auto mb-4">
                      <Lock className="h-8 w-8 text-red-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Registration Not Yet Open</h3>
                    <p className="text-gray-300">Please check back on May 20, 2025 when registration opens.</p>
                  </div>
                </div>
              )}

              {/* Step 1: Team Information */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-white">Team Information</h2>

                <div>
                  <label className="block text-white mb-2">Team Name</label>
                  <input
                    type="text"
                    placeholder="Enter your team name"
                    className="w-full px-3 py-2 bg-gray-800/50 border border-gray-700 rounded-md text-white"
                    disabled={!isRegistrationOpen}
                  />
                </div>

                <div>
                  <label className="block text-white mb-2">Captain Name</label>
                  <input
                    type="text"
                    placeholder="Enter team captain's name"
                    className="w-full px-3 py-2 bg-gray-800/50 border border-gray-700 rounded-md text-white"
                    disabled={!isRegistrationOpen}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white mb-2">Email</label>
                    <input
                      type="email"
                      placeholder="captain@team.com"
                      className="w-full px-3 py-2 bg-gray-800/50 border border-gray-700 rounded-md text-white"
                      disabled={!isRegistrationOpen}
                    />
                  </div>

                  <div>
                    <label className="block text-white mb-2">Phone Number</label>
                    <input
                      type="text"
                      placeholder="Your contact number"
                      className="w-full px-3 py-2 bg-gray-800/50 border border-gray-700 rounded-md text-white"
                      disabled={!isRegistrationOpen}
                    />
                  </div>
                </div>
              </div>

              {/* Navigation buttons */}
              <div className="flex justify-between pt-6 mt-6 border-t border-gray-800">
                <button
                  disabled
                  className="px-4 py-2 border border-gray-700 text-gray-500 rounded-md bg-transparent cursor-not-allowed"
                >
                  Previous
                </button>

                <button
                  className={`px-4 py-2 bg-red-600 text-white rounded-md transition-colors ${
                    !isRegistrationOpen ? "opacity-50 cursor-not-allowed" : "hover:bg-red-700"
                  }`}
                  disabled={!isRegistrationOpen}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Tournament date info */}
            <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Important Dates</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-red-900/20 text-red-400 border border-red-900/30">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Registration Opens</h4>
                    <p className="text-gray-400 text-sm">May 20, 2025 • 00:00 GMT</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-red-900/20 text-red-400 border border-red-900/30">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Tournament Starts</h4>
                    <p className="text-gray-400 text-sm">June 15, 2025 • London Sports Center</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tournament benefits */}
            <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Tournament Benefits</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="p-2 rounded-md bg-red-900/20 text-red-400 border border-red-900/30">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-medium">{benefit.title}</h4>
                      <p className="text-gray-400 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Registration fee */}
            <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Registration Fee</h3>
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-300">Team Registration</span>
                <span className="text-white font-medium">£50.00</span>
              </div>
              <p className="text-gray-400 text-sm">
                Fee includes tournament entry, referee costs, venue hire, and team photos. Payment instructions will be
                sent after form submission.
              </p>
            </div>

            {/* Need help */}
            <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Need Help?</h3>
              <p className="text-gray-300 mb-4">
                If you have any questions about registration or the tournament, please contact us:
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-gray-400">Email:</span>
                  <a href="mailto:info@hyperball.com" className="text-red-400 hover:text-red-300">
                    info@hyperball.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400">Phone:</span>
                  <a href="tel:+441234567890" className="text-red-400 hover:text-red-300">
                    +44 123 456 7890
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
