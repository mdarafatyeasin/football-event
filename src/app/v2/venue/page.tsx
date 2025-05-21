"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, MapPin, Trophy, Shield } from "lucide-react"

// Type definitions
type GroupMatch = {
  time: string
  teamA: string
  teamB: string
  group: string
  court: string
}

type KnockoutMatch = {
  time: string
  teamA: string
  teamB: string
  stage: string
  court: string
}

type EventOnly = {
  time: string
  stage: string
  court: string
  teamA?: undefined
  teamB?: undefined
}

type Fixture = GroupMatch | KnockoutMatch | EventOnly

export default function VenuePage() {
  const [activeDay, setActiveDay] = useState(0)

  const tournamentDays = [
    { date: "June 15, 2025", day: "Saturday" },
    { date: "June 16, 2025", day: "Sunday" },
    { date: "June 22, 2025", day: "Saturday" },
  ]

  const fixtures: Fixture[][] = [
    // Day 1
    [
      { time: "09:00", teamA: "Red Dragons FC", teamB: "Phoenix United", group: "A", court: "Court 1" },
      { time: "09:30", teamA: "Thunderbolts", teamB: "Royal Lions", group: "A", court: "Court 2" },
      { time: "10:00", teamA: "Silver Sharks", teamB: "Golden Eagles", group: "B", court: "Court 1" },
      { time: "10:30", teamA: "Blue Titans", teamB: "Green Vipers", group: "B", court: "Court 2" },
      { time: "11:00", teamA: "Black Panthers", teamB: "White Wolves", group: "C", court: "Court 1" },
      { time: "11:30", teamA: "Yellow Hornets", teamB: "Purple Cobras", group: "C", court: "Court 2" },
      { time: "12:00", teamA: "Orange Tigers", teamB: "Brown Bears", group: "D", court: "Court 1" },
      { time: "12:30", teamA: "Grey Falcons", teamB: "Pink Dolphins", group: "D", court: "Court 2" },
      { time: "14:00", teamA: "Red Dragons FC", teamB: "Royal Lions", group: "A", court: "Court 1" },
      { time: "14:30", teamA: "Phoenix United", teamB: "Thunderbolts", group: "A", court: "Court 2" },
      { time: "15:00", teamA: "Silver Sharks", teamB: "Green Vipers", group: "B", court: "Court 1" },
      { time: "15:30", teamA: "Golden Eagles", teamB: "Blue Titans", group: "B", court: "Court 2" },
    ],
    // Day 2
    [
      { time: "09:00", teamA: "Black Panthers", teamB: "Purple Cobras", group: "C", court: "Court 1" },
      { time: "09:30", teamA: "White Wolves", teamB: "Yellow Hornets", group: "C", court: "Court 2" },
      { time: "10:00", teamA: "Orange Tigers", teamB: "Pink Dolphins", group: "D", court: "Court 1" },
      { time: "10:30", teamA: "Brown Bears", teamB: "Grey Falcons", group: "D", court: "Court 2" },
      { time: "11:00", teamA: "Red Dragons FC", teamB: "Thunderbolts", group: "A", court: "Court 1" },
      { time: "11:30", teamA: "Phoenix United", teamB: "Royal Lions", group: "A", court: "Court 2" },
      { time: "12:00", teamA: "Silver Sharks", teamB: "Blue Titans", group: "B", court: "Court 1" },
      { time: "12:30", teamA: "Golden Eagles", teamB: "Green Vipers", group: "B", court: "Court 2" },
      { time: "14:00", teamA: "Black Panthers", teamB: "Yellow Hornets", group: "C", court: "Court 1" },
      { time: "14:30", teamA: "White Wolves", teamB: "Purple Cobras", group: "C", court: "Court 2" },
      { time: "15:00", teamA: "Orange Tigers", teamB: "Grey Falcons", group: "D", court: "Court 1" },
      { time: "15:30", teamA: "Brown Bears", teamB: "Pink Dolphins", group: "D", court: "Court 2" },
    ],
    // Day 3
    [
      { time: "10:00", teamA: "Group A Winner", teamB: "Group B Runner-up", stage: "Quarter-final 1", court: "Court 1" },
      { time: "10:45", teamA: "Group B Winner", teamB: "Group A Runner-up", stage: "Quarter-final 2", court: "Court 2" },
      { time: "11:30", teamA: "Group C Winner", teamB: "Group D Runner-up", stage: "Quarter-final 3", court: "Court 1" },
      { time: "12:15", teamA: "Group D Winner", teamB: "Group C Runner-up", stage: "Quarter-final 4", court: "Court 2" },
      { time: "14:00", teamA: "QF1 Winner", teamB: "QF3 Winner", stage: "Semi-final 1", court: "Court 1" },
      { time: "14:45", teamA: "QF2 Winner", teamB: "QF4 Winner", stage: "Semi-final 2", court: "Court 1" },
      { time: "16:00", teamA: "SF1 Loser", teamB: "SF2 Loser", stage: "Third Place Match", court: "Court 2" },
      { time: "17:00", teamA: "SF1 Winner", teamB: "SF2 Winner", stage: "Final", court: "Court 1" },
      { time: "18:30", stage: "Award Ceremony", court: "Main Area" },
    ],
  ]

  const venueInfo = {
    name: "London Sports Center",
    address: "123 Stadium Road, London, SW1A 1AA",
    facilities: [
      "2 Professional Futsal Courts",
      "Changing Rooms with Showers",
      "Spectator Seating",
      "Cafeteria",
      "Free Parking",
      "First Aid Station",
    ],
    mapLink: "https://maps.google.com",
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-900 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-6 group"
        >
          <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Tournament Schedule & Venue</h1>
          <div className="h-1 w-20 bg-gradient-to-r from-red-700 to-red-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            All matches will be held at the London Sports Center. Check the schedule below to find out when your team is playing.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {tournamentDays.map((day, index) => (
            <button
              key={index}
              onClick={() => setActiveDay(index)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeDay === index ? "bg-red-600 text-white" : "bg-gray-800/50 text-gray-300 hover:bg-gray-800"
              }`}
            >
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <div>
                  <span className="block">{day.day}</span>
                  <span className="block text-xs opacity-80">{day.date}</span>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="space-y-4 mb-12">
          {fixtures[activeDay].map((match, index) => (
            <div
              key={index}
              className="bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-lg p-4 hover:border-gray-700 transition-all"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-gray-400 min-w-[80px]">
                  <Clock className="h-4 w-4" />
                  <span>{match.time}</span>
                </div>

                {"stage" in match && match.stage === "Award Ceremony" ? (
                  <div className="flex-1 flex items-center justify-center">
                    <div className="flex items-center gap-2">
                      <Trophy className="h-5 w-5 text-yellow-500" />
                      <span className="text-white font-medium">Award Ceremony</span>
                    </div>
                  </div>
                ) : "teamA" in match && "teamB" in match ? (
                  <div className="flex-1 flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                    <div className="text-right min-w-[140px]">
                      <span className="text-white font-medium">{match.teamA}</span>
                    </div>
                    <div className="flex items-center justify-center bg-gray-800 rounded-lg px-3 py-1 min-w-[60px]">
                      <span className="text-red-400 font-bold text-sm">VS</span>
                    </div>
                    <div className="text-left min-w-[140px]">
                      <span className="text-white font-medium">{match.teamB}</span>
                    </div>
                  </div>
                ) : null}

                <div className="flex flex-col sm:flex-row items-end sm:items-center gap-2 sm:gap-4 min-w-[120px]">
                  {"group" in match && (
                    <span className="text-xs px-2 py-1 bg-gray-800 rounded text-gray-300">Group {match.group}</span>
                  )}
                  {"stage" in match && match.stage !== "Award Ceremony" && (
                    <span className="text-xs px-2 py-1 bg-red-900/30 border border-red-900/20 rounded text-red-300">
                      {match.stage}
                    </span>
                  )}
                  {match.court && (
                    <span className="text-xs px-2 py-1 bg-gray-800 rounded text-gray-300">{match.court}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Venue Info */}
        <div className="bg-gray-800/30 border border-gray-700 p-6 rounded-xl text-white space-y-4">
          <h2 className="text-2xl font-semibold mb-2">Venue Information</h2>
          <div className="flex items-center gap-2 text-gray-300">
            <MapPin className="h-4 w-4" />
            <a
              href={venueInfo.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {venueInfo.name} – {venueInfo.address}
            </a>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-300">
            {venueInfo.facilities.map((facility, i) => (
              <li key={i} className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-gray-500" />
                {facility}
              </li>
            ))}
          </ul>
        </div>

        {/* Notes */}
        <div className="mt-8 text-sm text-gray-400">
          <p>
            ⚠️ Match timings are subject to change. Teams are advised to arrive at least 30 minutes before their scheduled matches.
          </p>
        </div>
      </div>
    </div>
  )
}
