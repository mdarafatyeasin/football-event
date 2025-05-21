import {
  Zap,
  Trophy,
  Users,
  ArrowRight,
  Calendar,
  Medal,
  Camera,
} from "lucide-react";
import Link from "next/link";

export default function ContentBox() {
  return (
    <div className="min-h-screen py-16 px-4 relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMCAwdi02aC02djZoNnptNiAwaDZ2LTZoLTZ2NnptLTEyIDBoLTZ2Nmg2di02em0tNi02aC02djZoNnYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Enhanced header section */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4 px-4 py-1 bg-red-900/20 rounded-full border border-red-900/30">
            <span className="text-red-400 font-medium text-sm tracking-wider">
              PREMIER FUTSAL TOURNAMENT
            </span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
            <span className="text-red-500">HYPER</span>BALL
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-red-700 to-red-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            The premier 5-a-side futsal tournament for players aged 16 and
            above. Showcase your skills and compete with the best.
          </p>
        </div>

        {/* Improved card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Card 1 */}
          <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-red-800/50 transition-all duration-300 shadow-lg hover:shadow-red-900/5">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-lg bg-gradient-to-br from-red-900/40 to-red-800/20 text-red-400 border border-red-900/30">
                <Zap className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-semibold text-white tracking-tight">
                HyperBall?
              </h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              HyperBall is an open 5-a-side futsal tournament for players aged
              16+. Built for high energy and competitive vibes, its more than
              just a game — its a stage to showcase your skills, push your
              limits, and make a mark. Whether youre a regular baller or a
              weekend warrior, this is your moment.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-red-800/50 transition-all duration-300 shadow-lg hover:shadow-red-900/5">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-lg bg-gradient-to-br from-red-900/40 to-red-800/20 text-red-400 border border-red-900/30">
                <Zap className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-semibold text-white tracking-tight">
                Unique Rules & Game Modes
              </h2>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Were not sticking to the basics. HyperBall features custom rules
              like 3 corners = 1 penalty and wild modes like Chaos Mode,
              Player+1, and Power Play. Every game is different. Every moment
              counts.
            </p>
            <button className="group px-6 py-2.5 border border-gray-700 text-gray-200 rounded-lg flex items-center gap-2 hover:bg-gray-800/50 hover:border-gray-600 transition-all text-sm font-medium">
              View Rulebook/Game Modes
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Card 3 - Prizes (Simplified) */}
          <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-red-800/50 transition-all duration-300 shadow-lg hover:shadow-red-900/5">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-lg bg-gradient-to-br from-red-900/40 to-red-800/20 text-red-400 border border-red-900/30">
                <Trophy className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-semibold text-white tracking-tight">
                Prizes, Trophies & More
              </h2>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Winners and top performers walk away with big prize pools,
              trophies, medals, and exclusive goodies. We also award Man of the
              Match (MOM) trophies for standout performances in each game.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Trophy className="h-4 w-4 text-red-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  Championship trophies and medals for top teams
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Camera className="h-4 w-4 text-red-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  Professional photos and videos provided after the tournament
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-red-800/50 transition-all duration-300 shadow-lg hover:shadow-red-900/5">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-lg bg-gradient-to-br from-red-900/40 to-red-800/20 text-red-400 border border-red-900/30">
                <Users className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-semibold text-white tracking-tight">
                Challenge the Best
              </h2>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              This is where the top teams show up. Its your chance to test your
              squad, play under pressure, and prove you belong. Limited
              registrations. High stakes. May the best team win.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/v2/reg"
                className="px-6 py-2.5 bg-gradient-to-r from-red-700 to-red-600 text-white rounded-lg font-medium hover:from-red-600 hover:to-red-500 transition-all shadow-lg shadow-red-900/20 hover:shadow-red-900/30 text-center"
              >
                REGISTER NOW
              </Link>
              <Link
                href="/venue"
                className="px-6 py-2.5 bg-gray-800/50 text-gray-300 rounded-lg font-medium hover:bg-gray-800 transition-all border border-gray-700 flex items-center justify-center gap-2"
              >
                <Calendar className="h-4 w-4" /> View Schedule
              </Link>
            </div>
          </div>
        </div>

        {/* Prize Pool Section - Below the 4 boxes */}
        <div className="mt-12 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Prize Pool</h2>
            <div className="h-1 w-12 bg-gradient-to-r from-red-700 to-red-500 mx-auto mb-3 rounded-full"></div>
            <p className="text-gray-300 text-sm max-w-2xl mx-auto">
              Compete for glory and take home impressive cash prizes
            </p>
          </div>

          {/* Prize cards in a visually attractive layout - SMALLER VERSION */}
          <div className="flex flex-col md:flex-row gap-4 max-w-3xl mx-auto">
            {/* 1st Place - Champions */}
            <div className="flex-1 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-300 flex items-center justify-center shadow-lg z-10 border-2 border-gray-900">
                <Trophy className="h-4 w-4 text-yellow-900" />
              </div>
              <div className="bg-gradient-to-br from-yellow-900/30 to-yellow-800/10 border border-yellow-700/30 rounded-lg p-5 pt-8 text-center h-full">
                <div className="mb-1">
                  <span className="inline-block px-3 py-0.5 bg-yellow-900/40 rounded-full text-yellow-300 text-xs font-medium uppercase tracking-wider">
                    Champions
                  </span>
                </div>
                <h3 className="text-4xl font-bold text-white mb-1">₹30,000</h3>
                <div className="w-8 h-0.5 bg-yellow-500/50 mx-auto mb-2 rounded-full"></div>
                <p className="text-yellow-200/80 text-xs mb-3">First Place</p>
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-800/30 to-yellow-700/10 rounded-lg flex items-center justify-center">
                    <Trophy className="h-8 w-8 text-yellow-500" />
                  </div>
                </div>
                <p className="text-yellow-200/80 text-xs mt-2">
                  + Championship Trophy
                </p>
              </div>
            </div>

            {/* 2nd Place - Runners-up */}
            <div className="flex-1 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-gray-400 to-gray-300 flex items-center justify-center shadow-lg z-10 border-2 border-gray-900">
                <Medal className="h-4 w-4 text-gray-700" />
              </div>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-800/20 border border-gray-700/50 rounded-lg p-5 pt-8 text-center h-full">
                <div className="mb-1">
                  <span className="inline-block px-3 py-0.5 bg-gray-800/80 rounded-full text-gray-300 text-xs font-medium uppercase tracking-wider">
                    Runners-up
                  </span>
                </div>
                <h3 className="text-4xl font-bold text-white mb-1">₹10,000</h3>
                <div className="w-8 h-0.5 bg-gray-500/50 mx-auto mb-2 rounded-full"></div>
                <p className="text-gray-400 text-xs mb-3">Second Place</p>
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-800/50 to-gray-700/20 rounded-lg flex items-center justify-center">
                    <Medal className="h-8 w-8 text-gray-400" />
                  </div>
                </div>
                <p className="text-gray-400 text-xs mt-2">+ Finalist Medals</p>
              </div>
            </div>
          </div>

          {/* Additional prizes note */}
          <div className="text-center mt-4">
            <p className="text-gray-400 text-xs">
              Plus Man of the Match trophies awarded after each game
            </p>
            <Link
              href="/v2/rules"
              className="inline-block mt-5 px-6 py-3 bg-gradient-to-r from-red-700 to-red-600 text-white rounded-lg font-medium hover:from-red-600 hover:to-red-500 transition-all shadow-lg shadow-red-900/20 hover:shadow-red-900/30"
            >
              View Rules
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
