import { Trophy, Star, Zap, ArrowRight, MapPin } from "lucide-react"
import Link from "next/link"

const Banner = () => {
  return (
    <div className="w-full py-16 relative overflow-hidden">
      {/* Animated light effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-600/10 rounded-full filter blur-3xl animate-pulse-slow animation-delay-2000"></div>

      {/* Diagonal lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent"
              style={{
                top: `${i * 10}%`,
                left: 0,
                right: 0,
                transform: "rotate(-5deg) translateY(30px)",
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Main content (UPDATED) */}
          <div className="text-center lg:text-left">
            <div className="inline-block mb-3 px-3 py-1 bg-red-900/20 rounded-full border border-red-900/30">
              <span className="text-red-400 font-medium text-xs tracking-wider uppercase">futsal tournament</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight leading-tight">
              <span className="text-red-500">HYPERBALL</span>
              <br />
              CHAMPIONSHIP 2025
            </h1>

            <p className="text-gray-300 text-base mb-8 max-w-md mx-auto lg:mx-0">
              Showcase your skills and compete with the best teams for glory and impressive prizes.
            </p>

            <div className="flex gap-5 justify-center lg:justify-start">
              {/* Register button - more attractive */}
              <Link href="/register" className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-yellow-600 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-200"></div>
                <button className="relative px-7 py-3 bg-gradient-to-br from-red-700 to-red-600 text-white rounded-lg font-medium shadow-lg flex items-center gap-2">
                  <span className="text-base font-bold tracking-wide">REGISTER</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>

              {/* Venue button - more attractive */}
              <Link href="/v2/venue" className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-600 to-gray-400 rounded-lg blur opacity-30 group-hover:opacity-70 transition duration-200"></div>
                <button className="relative px-7 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg font-medium shadow-lg flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span className="text-base font-bold tracking-wide">VENUE</span>
                </button>
              </Link>
            </div>
          </div>

          {/* Right side - Trophy and prize showcase (UNCHANGED) */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Main trophy display */}
              <div className="w-64 h-64 bg-gradient-to-b from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-700 flex items-center justify-center p-6 shadow-xl relative overflow-hidden">
                {/* Trophy glow effect */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-yellow-500/20 filter blur-xl"></div>
                </div>

                {/* Trophy icon */}
                <div className="relative">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-300 flex items-center justify-center shadow-lg">
                    <Trophy className="h-16 w-16 text-yellow-900" />
                  </div>
                </div>
              </div>

              {/* Prize cards - positioned absolutely */}
              <div className="absolute -top-6 -right-6 w-40 transform rotate-6 bg-gradient-to-br from-yellow-900/30 to-yellow-800/10 border border-yellow-700/30 rounded-lg p-4 backdrop-blur-sm shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <h3 className="text-yellow-300 font-medium text-sm">Champions</h3>
                </div>
                <p className="text-2xl font-bold text-white">₹30,000</p>
                <p className="text-yellow-200/70 text-xs">+ Championship Trophy</p>
              </div>

              <div className="absolute -bottom-6 -left-6 w-40 transform -rotate-6 bg-gradient-to-br from-gray-800/50 to-gray-800/20 border border-gray-700/50 rounded-lg p-4 backdrop-blur-sm shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Star className="h-4 w-4 text-gray-400" />
                  <h3 className="text-gray-300 font-medium text-sm">Runners-up</h3>
                </div>
                <p className="text-2xl font-bold text-white">₹10,000</p>
                <p className="text-gray-400/70 text-xs">+ Finalist Medals</p>
              </div>

              {/* Floating features */}
              <div className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-4 bg-gray-800/70 backdrop-blur-sm border border-gray-700 rounded-lg p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-red-400" />
                  <span className="text-white text-sm whitespace-nowrap">Pro Referees</span>
                </div>
              </div>

              <div className="absolute top-1/4 left-full transform -translate-y-1/2 translate-x-4 bg-gray-800/70 backdrop-blur-sm border border-gray-700 rounded-lg p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-red-400" />
                  <span className="text-white text-sm whitespace-nowrap">Live Streaming</span>
                </div>
              </div>

              <div className="absolute bottom-1/4 left-full transform -translate-y-1/2 translate-x-4 bg-gray-800/70 backdrop-blur-sm border border-gray-700 rounded-lg p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-red-400" />
                  <span className="text-white text-sm whitespace-nowrap">MOM Awards</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner


// Add this to your global CSS
// @keyframes pulse-slow {
//   0%, 100% { opacity: 0.4; }
//   50% { opacity: 0.7; }
// }
//
// .animate-pulse-slow {
//   animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
// }
//
// .animation-delay-2000 {
//   animation-delay: 2s;
// }
