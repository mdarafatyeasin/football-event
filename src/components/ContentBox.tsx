import { Zap, Trophy, Users, ArrowRight, Calendar, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function ContentBox() {
  return (
    <div className="min-h-screen py-16 px-4 relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMCAwdi02aC02djZoNnptNiAwaDZ2LTZoLTZ2NnptLTEyIDBoLTZ2Nmg2di02em0tNi02aC02djZoNnYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Enhanced header section */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4 px-4 py-1 bg-red-900/20 rounded-full border border-red-900/30">
            <span className="text-red-400 font-medium text-sm tracking-wider">PREMIER FUTSAL TOURNAMENT</span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
            <span className="text-red-500">HYPER</span>BALL
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-red-700 to-red-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            The premier 5-a-side futsal tournament for players aged 16 and above. Showcase your skills and compete with
            the best.
          </p>
        </div>

        {/* Improved card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-red-800/50 transition-all duration-300 shadow-lg hover:shadow-red-900/5">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-lg bg-gradient-to-br from-red-900/40 to-red-800/20 text-red-400 border border-red-900/30">
                <Zap className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-semibold text-white tracking-tight">HyperBall?</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              HyperBall is an open 5-a-side futsal tournament for players aged 16+. Built for high energy and
              competitive vibes, its more than just a game — its a stage to showcase your skills, push your limits,
              and make a mark. Whether youre a regular baller or a weekend warrior, this is your moment.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-red-800/50 transition-all duration-300 shadow-lg hover:shadow-red-900/5">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-lg bg-gradient-to-br from-red-900/40 to-red-800/20 text-red-400 border border-red-900/30">
                <Zap className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-semibold text-white tracking-tight">Unique Rules & Game Modes</h2>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Were not sticking to the basics. HyperBall features custom rules like 3 corners = 1 penalty and wild
              modes like Chaos Mode, Player+1, and Power Play. Every game is different. Every moment counts.
            </p>
            <button className="group px-6 py-2.5 border border-gray-700 text-gray-200 rounded-lg flex items-center gap-2 hover:bg-gray-800/50 hover:border-gray-600 transition-all text-sm font-medium">
              View Rulebook/Game Modes
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-red-800/50 transition-all duration-300 shadow-lg hover:shadow-red-900/5">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-lg bg-gradient-to-br from-red-900/40 to-red-800/20 text-red-400 border border-red-900/30">
                <Trophy className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-semibold text-white tracking-tight">Prizes, Trophies & More</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Winners and top performers walk away with big prize pools, trophies, medals, and exclusive goodies. From
              MVP awards to custom kits — we make sure the grind pays off. Play hard, win harder.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-300 flex items-center justify-center shadow-lg">
                <Trophy className="h-4 w-4 text-yellow-900" />
              </div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-gray-400 to-gray-300 flex items-center justify-center shadow-lg">
                <Trophy className="h-4 w-4 text-gray-700" />
              </div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-700 to-amber-500 flex items-center justify-center shadow-lg">
                <Trophy className="h-4 w-4 text-amber-900" />
              </div>
              <span className="text-gray-400 text-sm ml-2">+ Cash Prizes</span>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-red-800/50 transition-all duration-300 shadow-lg hover:shadow-red-900/5">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-lg bg-gradient-to-br from-red-900/40 to-red-800/20 text-red-400 border border-red-900/30">
                <Users className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-semibold text-white tracking-tight">Challenge the Best</h2>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              This is where the top teams show up. Its your chance to test your squad, play under pressure, and prove
              you belong. Limited registrations. High stakes. May the best team win.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/v2/reg"
                className="px-6 py-2.5 bg-gradient-to-r from-red-700 to-red-600 text-white rounded-lg font-medium hover:from-red-600 hover:to-red-500 transition-all shadow-lg shadow-red-900/20 hover:shadow-red-900/30 text-center"
              >
                REGISTER NOW
              </Link>
              <button className="px-6 py-2.5 bg-gray-800/50 text-gray-300 rounded-lg font-medium hover:bg-gray-800 transition-all border border-gray-700 flex items-center justify-center gap-2">
                <Calendar className="h-4 w-4" /> View Schedule
              </button>
            </div>
          </div>
        </div>

        {/* Next tournament callout */}
        <div className="mt-12 bg-gradient-to-r from-red-900/20 to-gray-900/40 border border-red-900/30 rounded-xl p-6 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-red-500/20 text-red-400">
                <Calendar className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white">Next Tournament</h3>
                <p className="text-gray-300">June 15-16, 2025 • London Sports Center</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-center px-4 py-2 bg-gray-800/70 rounded-lg border border-gray-700">
                <span className="text-2xl font-bold text-white">24</span>
                <p className="text-xs text-gray-400">Days</p>
              </div>
              <div className="text-center px-4 py-2 bg-gray-800/70 rounded-lg border border-gray-700">
                <span className="text-2xl font-bold text-white">12</span>
                <p className="text-xs text-gray-400">Hours</p>
              </div>
              <div className="text-center px-4 py-2 bg-gray-800/70 rounded-lg border border-gray-700">
                <span className="text-2xl font-bold text-white">36</span>
                <p className="text-xs text-gray-400">Minutes</p>
              </div>
            </div>
            <Link
              href="/v2/reg"
              className="px-6 py-2.5 bg-red-600 text-white rounded-lg font-medium hover:bg-red-500 transition-all whitespace-nowrap text-center"
            >
              Register Now
            </Link>
          </div>
        </div>

        {/* Enhanced footer */}
        <div className="mt-16 border-t border-gray-800/50 pt-8">
          <div className="flex justify-between items-center flex-col md:flex-row gap-6">
            <div>
              <h2 className="text-xl font-bold text-white mb-2">
                <span className="text-red-500">HYPER</span>BALL
              </h2>
              <p className="text-gray-400 text-sm">© 2025 HyperBall. All rights reserved.</p>
            </div>
            <div className="flex flex-col md:flex-row gap-8 md:items-center">
              <div className="flex gap-6">
                <a href="#" className="text-gray-300 hover:text-red-400 transition-colors text-sm font-medium">
                  About
                </a>
                <a href="#" className="text-gray-300 hover:text-red-400 transition-colors text-sm font-medium">
                  Contact
                </a>
                <a href="#" className="text-gray-300 hover:text-red-400 transition-colors text-sm font-medium">
                  Rules
                </a>
                <a href="#" className="text-gray-300 hover:text-red-400 transition-colors text-sm font-medium">
                  FAQ
                </a>
              </div>
              <a
                href="#"
                className="text-red-400 hover:text-red-300 transition-colors text-sm font-medium flex items-center gap-1 group"
              >
                View all tournaments <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
