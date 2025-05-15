"use clint"
import "../../app/page.css"
import { ArrowRight, Trophy, Users, Zap } from "lucide-react"

const Page = () => {
  return (
    <div className="v2-main min-h-screen text-white">
      {/* Landing Section */}
      <div className="landing-section w-4/5 mx-auto min-h-[80vh] flex flex-col justify-center items-start">
        <h1 className="text-6xl md:text-8xl font-bold text-red-500 mb-4">HyperBall</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">
          THE ULTIMATE 5-A-SIDE FUTSAL EXPERIENCE - SHOWCASE YOUR SKILLS ON THE BIGGEST STAGE
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-3 bg-red-500 text-white font-bold rounded-md hover:bg-red-600 transition-colors">
            REGISTER NOW
          </button>
          <button className="px-8 py-3 border border-white text-white font-bold rounded-md hover:bg-white/10 transition-colors">
            LEARN MORE
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="content-section w-4/5 mx-auto py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="feature-card p-8 border border-white/20 rounded-lg hover:border-red-500/50 transition-colors">
          <h1 className="text-2xl font-bold mb-4 text-red-500 flex items-center gap-2">
            <Zap className="h-6 w-6" /> HyperBall?
          </h1>
          <p className="text-white/80 mb-6">
            HyperBall is an open 5-a-side futsal tournament for players aged 16+. Built for high energy and competitive
            vibes, it's more than just a game — it's a stage to showcase your skills, push your limits, and make a mark.
            Whether you're a regular baller or a weekend warrior, this is your moment.
          </p>
        </div>

        <div className="feature-card p-8 border border-white/20 rounded-lg hover:border-red-500/50 transition-colors">
          <h1 className="text-2xl font-bold mb-4 text-red-500 flex items-center gap-2">
            <Zap className="h-6 w-6" /> Unique Rules & Game Modes
          </h1>
          <p className="text-white/80 mb-6">
            We're not sticking to the basics. HyperBall features custom rules like "3 corners = 1 penalty" and wild
            modes like Chaos Mode, Player+1, and Power Play. Every game is different. Every moment counts.
          </p>
          <button className="px-6 py-2 border border-white/50 text-white rounded-md flex items-center gap-2 hover:bg-white/10 transition-colors">
            View Rulebook/Game Modes <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="feature-card p-8 border border-white/20 rounded-lg hover:border-red-500/50 transition-colors">
          <h1 className="text-2xl font-bold mb-4 text-red-500 flex items-center gap-2">
            <Trophy className="h-6 w-6" /> Prizes, Trophies & More
          </h1>
          <p className="text-white/80 mb-6">
            Winners and top performers walk away with big prize pools, trophies, medals, and exclusive goodies. From MVP
            awards to custom kits — we make sure the grind pays off. Play hard, win harder.
          </p>
        </div>

        <div className="feature-card p-8 border border-white/20 rounded-lg hover:border-red-500/50 transition-colors">
          <h1 className="text-2xl font-bold mb-4 text-red-500 flex items-center gap-2">
            <Users className="h-6 w-6" /> Challenge the Best
          </h1>
          <p className="text-white/80 mb-6">
            This is where the top teams show up. It's your chance to test your squad, play under pressure, and prove you
            belong. Limited registrations. High stakes. "May the best team win."
          </p>
          <button className="px-6 py-2 bg-red-500 text-white font-bold rounded-md hover:bg-red-600 transition-colors">
            REGISTER NOW
          </button>
        </div>
      </div>
    </div>
  )
}

export default Page
