import Link from "next/link"
import {
  ArrowLeft,
  Clock,
  Flag,
  BellIcon as Whistle,
  Users,
  ShieldAlert,
  Zap,
  Timer,
  Siren,
  CornerUpRight,
  Footprints,
  Hourglass,
  Dices,
} from "lucide-react"

export default function RulesPage() {
  return (
    <div className="bg-gradient-to-br from-gray-950 to-gray-900 min-h-screen relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMCAwdi02aC02djZoNnptNiAwaDZ2LTZoLTZ2NnptLTEyIDBoLTZ2Nmg2di02em0tNi02aC02djZoNnYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>

      <div className="max-w-6xl mx-auto px-4 py-12 relative z-10">
        {/* Header with back button */}
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-6 group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">
              <span className="text-red-500">RULES</span> & GAME MODES
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-red-700 to-red-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              HyperBall features unique rules and exciting game modes that make every match unpredictable and thrilling.
              Familiarize yourself with these regulations before stepping onto the pitch.
            </p>
          </div>
        </div>

        {/* Rules navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="#general"
            className="px-4 py-2 bg-gray-900/70 border border-gray-800 rounded-lg text-white hover:border-red-800/50 transition-colors"
          >
            General Rules
          </a>
          <a
            href="#in-game"
            className="px-4 py-2 bg-gray-900/70 border border-gray-800 rounded-lg text-white hover:border-red-800/50 transition-colors"
          >
            In-Game Regulations
          </a>
          <a
            href="#penalty"
            className="px-4 py-2 bg-gray-900/70 border border-gray-800 rounded-lg text-white hover:border-red-800/50 transition-colors"
          >
            Penalty Rules
          </a>
          <a
            href="#game-changer"
            className="px-4 py-2 bg-gray-900/70 border border-gray-800 rounded-lg text-white hover:border-red-800/50 transition-colors"
          >
            Game Changer Modes
          </a>
        </div>

        {/* Rules content */}
        <div className="space-y-12">
          {/* General Tournament Rules */}
          <section id="general" className="scroll-mt-20">
            <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-gradient-to-br from-red-900/40 to-red-800/20 text-red-400 border border-red-900/30">
                  <Flag className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-semibold text-white">I. General Tournament Rules</h2>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-800/30 border border-gray-800 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <Users className="h-5 w-5 text-red-400" />
                      <h3 className="text-lg font-medium text-white">Format</h3>
                    </div>
                    <p className="text-gray-300">5v5 futsal matches.</p>
                  </div>

                  <div className="bg-gray-800/30 border border-gray-800 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <Footprints className="h-5 w-5 text-red-400" />
                      <h3 className="text-lg font-medium text-white">Substitutions</h3>
                    </div>
                    <p className="text-gray-300">
                      Each team gets 3 rolling substitutions. Players can come on/off as often as needed, but the player
                      exiting must leave the pitch before the sub enters.
                    </p>
                  </div>

                  <div className="bg-gray-800/30 border border-gray-800 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <Clock className="h-5 w-5 text-red-400" />
                      <h3 className="text-lg font-medium text-white">Punctuality</h3>
                    </div>
                    <p className="text-gray-300">
                      Teams must stay updated with match fixtures and arrive at the venue at least 30 minutes before
                      their scheduled match.
                    </p>
                  </div>

                  <div className="bg-gray-800/30 border border-gray-800 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <Timer className="h-5 w-5 text-red-400" />
                      <h3 className="text-lg font-medium text-white">Match Duration</h3>
                    </div>
                    <p className="text-gray-300">30 minutes per match – 15 minutes per half.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* In-Game Regulations */}
          <section id="in-game" className="scroll-mt-20">
            <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-gradient-to-br from-red-900/40 to-red-800/20 text-red-400 border border-red-900/30">
                  <Whistle className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-semibold text-white">II. In-Game Regulations</h2>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-800/30 border border-gray-800 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="h-5 w-5 text-red-400" />
                    <h3 className="text-lg font-medium text-white">Referee Communication</h3>
                  </div>
                  <p className="text-gray-300">Only team captains are allowed to speak with the referee during play.</p>
                </div>

                <div className="bg-gray-800/30 border border-gray-800 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <ShieldAlert className="h-5 w-5 text-red-400" />
                    <h3 className="text-lg font-medium text-white">Disciplinary System</h3>
                  </div>
                  <p className="text-gray-300 mb-3">No cards used. Instead:</p>
                  <div className="space-y-2 pl-4 border-l-2 border-gray-700">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
                      <p className="text-gray-300">
                        <span className="text-yellow-400 font-medium">Yellow:</span> Player sits out for 2 minutes; team
                        plays with 4.
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-red-500"></div>
                      <p className="text-gray-300">
                        <span className="text-red-400 font-medium">Red:</span> Player is out for the full match;
                        opposing team is awarded a penalty.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/30 border border-gray-800 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <CornerUpRight className="h-5 w-5 text-red-400" />
                    <h3 className="text-lg font-medium text-white">Corner Rule</h3>
                  </div>
                  <p className="text-gray-300">Every 3 corner kicks earned = 1 penalty.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Penalty Rules */}
          <section id="penalty" className="scroll-mt-20">
            <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-gradient-to-br from-red-900/40 to-red-800/20 text-red-400 border border-red-900/30">
                  <Siren className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-semibold text-white">III. Penalty Rules</h2>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-800/30 border border-gray-800 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <Zap className="h-5 w-5 text-red-400" />
                    <h3 className="text-lg font-medium text-white">1v1 Style Penalty</h3>
                  </div>
                  <div className="space-y-2 pl-4 border-l-2 border-gray-700">
                    <p className="text-gray-300">
                      A chosen player starts from the center line and has 15 seconds to score.
                    </p>
                    <p className="text-gray-300">
                      The goalkeeper must stay inside the penalty area until the taker touches the ball.
                    </p>
                    <p className="text-gray-300">Other players must not interfere or block view/space.</p>
                    <p className="text-gray-300">
                      A defended penalty leading to a corner does not count as a corner kick.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-800/30 border border-gray-800 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <ShieldAlert className="h-5 w-5 text-red-400" />
                      <h3 className="text-lg font-medium text-white">Injuries</h3>
                    </div>
                    <p className="text-gray-300">Referee can pause the match and stop time for injuries.</p>
                  </div>

                  <div className="bg-gray-800/30 border border-gray-800 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <Hourglass className="h-5 w-5 text-red-400" />
                      <h3 className="text-lg font-medium text-white">No Added Time</h3>
                    </div>
                    <p className="text-gray-300">
                      Match ends exactly at 30 minutes unless a goal is actively in play when the timer ends.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Game Changer Modes */}
          <section id="game-changer" className="scroll-mt-20">
            <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-gradient-to-br from-red-900/40 to-red-800/20 text-red-400 border border-red-900/30">
                  <Dices className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-semibold text-white">IV. Game Changer Modes (Final 3 Minutes)</h2>
              </div>

              <p className="text-gray-300 mb-6">
                During the last 3 minutes of each match, a random Game Changer mode activates:
              </p>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-red-900/10 to-gray-800/30 border border-gray-800 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-red-900/30 flex items-center justify-center text-red-400 border border-red-900/30">
                      <span className="font-bold">1</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white">The Line</h3>
                  </div>
                  <div className="space-y-2 pl-4 border-l-2 border-gray-700">
                    <p className="text-gray-300">Goals scored from behind the offside line = 2 points.</p>
                    <p className="text-gray-300">Goals from inside the area = 1 point (as usual).</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-900/10 to-gray-800/30 border border-gray-800 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-red-900/30 flex items-center justify-center text-red-400 border border-red-900/30">
                      <span className="font-bold">2</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white">1:1 Duel</h3>
                  </div>
                  <div className="space-y-2 pl-4 border-l-2 border-gray-700">
                    <p className="text-gray-300">Only one player from each team plays.</p>
                    <p className="text-gray-300">
                      Players cant leave their own half (except into the center circle when attacking).
                    </p>
                    <p className="text-gray-300">Attack must be completed within 15 seconds.</p>
                    <p className="text-gray-300">Ball must stay in motion; if it stops, possession changes.</p>
                    <p className="text-gray-300">No hand use for defending (intentional handball penalized).</p>
                    <p className="text-gray-300">On goal or defensive deflection out of bounds, possession switches.</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-900/10 to-gray-800/30 border border-gray-800 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-red-900/30 flex items-center justify-center text-red-400 border border-red-900/30">
                      <span className="font-bold">3</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white">Fast Forward</h3>
                  </div>
                  <div className="space-y-2 pl-4 border-l-2 border-gray-700">
                    <p className="text-gray-300">
                      Once the ball enters the opponents half, it cannot be passed back to the teams own half.
                    </p>
                    <p className="text-gray-300">
                      Violation = direct free kick at the point of contact or penalty area line (if goalkeeper).
                    </p>
                    <p className="text-gray-300">
                      If the ball is played out or leads to a corner in the teams own half, a direct free kick is
                      awarded from the center of the penalty area.
                    </p>
                    <p className="text-gray-300">If its the third corner, the penalty applies instead.</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-900/10 to-gray-800/30 border border-gray-800 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-red-900/30 flex items-center justify-center text-red-400 border border-red-900/30">
                      <span className="font-bold">4</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white">3v3 Mode</h3>
                  </div>
                  <div className="space-y-2 pl-4 border-l-2 border-gray-700">
                    <p className="text-gray-300">Only 3 players from each team are allowed on the pitch.</p>
                    <p className="text-gray-300">Teams choose which 3 players to send in.</p>
                    <p className="text-gray-300">The goalkeeper can be included or left out its up to the team.</p>
                    <p className="text-gray-300">Game continues with 3v3 until full time.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Call to action */}
          <div className="bg-gradient-to-r from-red-900/20 to-gray-900/40 border border-red-900/30 rounded-xl p-8 backdrop-blur-sm text-center">
            <h3 className="text-2xl font-semibold text-white mb-4">Ready to Play by These Rules?</h3>
            <p className="text-gray-300 max-w-2xl mx-auto mb-6">
              HyperBalls unique rules and game modes create an exciting, fast-paced tournament experience unlike any
              other. Register your team now and test your skills under these dynamic conditions.
            </p>
            <Link
              href="/v0/red"
              className="inline-block px-6 py-3 bg-gradient-to-r from-red-700 to-red-600 text-white rounded-lg font-medium hover:from-red-600 hover:to-red-500 transition-all shadow-lg shadow-red-900/20 hover:shadow-red-900/30"
            >
              Register Your Team
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 border-t border-gray-800/50 pt-8">
          <div className="flex justify-between items-center flex-col md:flex-row gap-6">
            <div>
              <h2 className="text-xl font-bold text-white mb-2">
                <span className="text-red-500">HYPER</span>BALL
              </h2>
              <p className="text-gray-400 text-sm">Email: chiruvarshithpeddisetty@gmail.com</p>
              <p className="text-gray-400 text-sm">Phone : 9347190819</p>
              <p className="text-gray-400 text-sm">© 2025 HyperBall. All rights reserved.</p>
            </div>
            <div className="flex gap-6">
              <Link href="/" className="text-gray-300 hover:text-red-400 transition-colors text-sm font-medium">
                Home
              </Link>
              <Link href="/rules" className="text-red-400 hover:text-red-300 transition-colors text-sm font-medium">
                Rules
              </Link>
              <Link href="/v0/red" className="text-gray-300 hover:text-red-400 transition-colors text-sm font-medium">
                Register
              </Link>
              <Link href="#" className="text-gray-300 hover:text-red-400 transition-colors text-sm font-medium">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
