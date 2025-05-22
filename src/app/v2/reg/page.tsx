"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  Calendar,
  CheckCircle,
  Shield,
  Trophy,
  Users,
  Upload,
  AlertCircle,
  Loader2,
  Lock,
} from "lucide-react"
import { useMutation } from "convex/react"
import { api } from "../../../../convex/_generated/api"

// Define types for our form data
type Player = {
  fullName: string
  age: string
  contactNumber: string
  email: string
  address: string
}

type FormData = {
  teamName: string
  players: Player[]
  payment: {
    transactionId: string
    screenshot: File | null
  }
  termsAccepted: boolean
}

// Define type for registration data to be sent to Convex
type RegistrationData = {
  teamName: string
  players: Player[]
  payment: {
    transactionId: string
    screenshotUrl: string
  }
  termsAccepted: boolean
}

// Define types for form refs
type FormRefs = {
  teamName: HTMLInputElement | null
  players: Array<{
    fullName: HTMLInputElement | null
    age: HTMLInputElement | null
    contactNumber: HTMLInputElement | null
    email: HTMLInputElement | null
    address: HTMLTextAreaElement | null
  }>
  payment: {
    transactionId: HTMLInputElement | null
  }
  terms: HTMLInputElement | null
}

export default function RegistrationPage() {
  // Convex mutation
  const CreateRegistration = useMutation(api.createRegistration.createRegistration)

  // Current step for display purposes only
  const [currentStep, setCurrentStep] = useState(1)

  // State to check if registration is open
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(true)

  // Submission state
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const [submitSuccess, setSubmitSuccess] = useState(false)

  // Form data state
  const [formData, setFormData] = useState<FormData>({
    teamName: "",
    players: Array(8)
      .fill(null)
      .map(() => ({
        fullName: "",
        age: "",
        contactNumber: "",
        email: "",
        address: "",
      })),
    payment: {
      transactionId: "",
      screenshot: null,
    },
    termsAccepted: false,
  })

  // File upload state
  const [fileError, setFileError] = useState("")
  const [fileUploaded, setFileUploaded] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Create refs for all form inputs
  const formRefs = useRef<FormRefs>({
    teamName: null,
    players: Array(8)
      .fill(null)
      .map(() => ({
        fullName: null,
        age: null,
        contactNumber: null,
        email: null,
        address: null,
      })),
    payment: {
      transactionId: null,
    },
    terms: null,
  })

  // Function to collect all form data from refs before submission
  const collectFormData = () => {
    const refs = formRefs.current

    // Get team name
    const teamName = refs.teamName?.value || ""

    // Get player data
    const players = refs.players.map((playerRefs) => ({
      fullName: playerRefs.fullName?.value || "",
      age: playerRefs.age?.value || "",
      contactNumber: playerRefs.contactNumber?.value || "",
      email: playerRefs.email?.value || "",
      address: playerRefs.address?.value || "",
    }))

    // Get payment data
    const transactionId = refs.payment.transactionId?.value || ""

    // Get terms acceptance
    const termsAccepted = refs.terms?.checked || false

    return {
      teamName,
      players,
      payment: {
        transactionId,
        screenshot: formData.payment.screenshot, // Keep the file from state
      },
      termsAccepted,
    }
  }

  // Handle file upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    setFileError("")

    if (!file) {
      setFileUploaded(false)
      return
    }

    // Check file type
    const validTypes = ["image/jpeg", "image/png", "application/pdf"]
    if (!validTypes.includes(file.type)) {
      setFileError("Please upload a JPG, PNG or PDF file")
      setFileUploaded(false)
      return
    }

    // Check file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      setFileError("File size must be less than 5MB")
      setFileUploaded(false)
      return
    }

    // Valid file
    setFormData((prev) => ({
      ...prev,
      payment: { ...prev.payment, screenshot: file },
    }))
    setFileUploaded(true)
  }

  // Handle form submission
  const handleSubmit = async () => {
    // Reset states
    setSubmitError("")
    setSubmitSuccess(false)

    // Collect current form data from refs
    const currentFormData = collectFormData()

    // Update form data state with current values
    setFormData(currentFormData)

    // Log all form data to console
    console.log("Form Data:", currentFormData)

    // Check if file is uploaded
    if (!currentFormData.payment.screenshot) {
      setFileError("Please upload a payment screenshot")
      return
    }

    try {
      setIsSubmitting(true)

      // In a real app, you would upload the file to storage and get a URL
      // For now, we'll just use the file name as a placeholder
      const screenshotUrl = currentFormData.payment.screenshot.name

      // Prepare data for Convex
      const registrationData: RegistrationData = {
        teamName: currentFormData.teamName,
        players: currentFormData.players.filter((player) => player.fullName.trim() !== ""), // Filter out empty players
        payment: {
          transactionId: currentFormData.payment.transactionId,
          screenshotUrl: screenshotUrl,
        },
        termsAccepted: currentFormData.termsAccepted,
      }

      // Submit to Convex
      const result = await CreateRegistration(registrationData)

      console.log("Registration result:", result)

      // Show success message
      setSubmitSuccess(true)

      // In a real app, you might redirect to a success page
      alert("Registration submitted successfully!")
    } catch (error) {
      console.error("Registration error:", error)
      setSubmitError(error instanceof Error ? error.message : "Failed to submit registration. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

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

  // Handle next step
  const handleNextStep = () => {
    // Collect current form data before moving to next step
    const currentFormData = collectFormData()
    setFormData(currentFormData)

    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
      window.scrollTo(0, 0)
    }
  }

  // Handle previous step
  const handlePrevStep = () => {
    // Collect current form data before moving to previous step
    const currentFormData = collectFormData()
    setFormData(currentFormData)

    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
      window.scrollTo(0, 0)
    }
  }

  // Load dummy data for testing
  const loadDummyData = () => {
    // Create a dummy file for testing
    const dummyFile = new File(["dummy content"], "payment_screenshot.jpg", { type: "image/jpeg" })

    const dummyData = {
      teamName: "Red Dragons FC",
      players: [
        {
          fullName: "John Smith",
          age: "28",
          contactNumber: "+44 7700 900123",
          email: "john.smith@example.com",
          address: "123 Main Street, London, SW1A 1AA",
        },
        {
          fullName: "David Johnson",
          age: "25",
          contactNumber: "+44 7700 900124",
          email: "david.johnson@example.com",
          address: "456 Park Avenue, London, SW1A 2BB",
        },
        {
          fullName: "Michael Williams",
          age: "23",
          contactNumber: "+44 7700 900125",
          email: "michael.williams@example.com",
          address: "789 Oak Road, London, SW1A 3CC",
        },
        {
          fullName: "Robert Brown",
          age: "26",
          contactNumber: "+44 7700 900126",
          email: "robert.brown@example.com",
          address: "101 Pine Street, London, SW1A 4DD",
        },
        {
          fullName: "James Davis",
          age: "24",
          contactNumber: "+44 7700 900127",
          email: "james.davis@example.com",
          address: "202 Elm Avenue, London, SW1A 5EE",
        },
        {
          fullName: "Thomas Wilson",
          age: "27",
          contactNumber: "+44 7700 900128",
          email: "thomas.wilson@example.com",
          address: "303 Cedar Lane, London, SW1A 6FF",
        },
        {
          fullName: "Daniel Taylor",
          age: "22",
          contactNumber: "+44 7700 900129",
          email: "daniel.taylor@example.com",
          address: "404 Maple Drive, London, SW1A 7GG",
        },
        {
          fullName: "Matthew Anderson",
          age: "29",
          contactNumber: "+44 7700 900130",
          email: "matthew.anderson@example.com",
          address: "505 Birch Road, London, SW1A 8HH",
        },
      ],
      payment: {
        transactionId: "TXN123456789",
        screenshot: dummyFile,
      },
      termsAccepted: true,
    }

    setFormData(dummyData)

    // Set file uploaded state to true
    setFileUploaded(true)

    // Force registration to be open for testing
    setIsRegistrationOpen(true)

    // Update all form fields with the dummy data
    // This will happen on the next render
  }

  // Update form fields when formData changes (for dummy data loading)
  useEffect(() => {
    const refs = formRefs.current

    // Update team name
    if (refs.teamName) {
      refs.teamName.value = formData.teamName
    }

    // Update player fields
    formData.players.forEach((player, index) => {
      const playerRefs = refs.players[index]
      if (playerRefs.fullName) playerRefs.fullName.value = player.fullName
      if (playerRefs.age) playerRefs.age.value = player.age
      if (playerRefs.contactNumber) playerRefs.contactNumber.value = player.contactNumber
      if (playerRefs.email) playerRefs.email.value = player.email
      if (playerRefs.address) playerRefs.address.value = player.address
    })

    // Update payment transaction ID
    if (refs.payment.transactionId) {
      refs.payment.transactionId.value = formData.payment.transactionId
    }

    // Update terms checkbox
    if (refs.terms) {
      refs.terms.checked = formData.termsAccepted
    }
  }, [formData])

  // Player form template (reused for all players)
  const PlayerForm = ({ playerNumber, isOptional = false }: { playerNumber: number; isOptional?: boolean }) => {
    const playerIndex = playerNumber - 1
    const player = formData.players[playerIndex]

    return (
      <div className="space-y-6 border border-gray-800 rounded-lg p-6 bg-gray-900/30">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold text-white">
            {playerNumber === 1 ? "Team Captain Details" : `Player ${playerNumber} Details`}{" "}
            {isOptional && <span className="text-gray-400 text-sm">(Optional)</span>}
          </h3>
          {!isOptional && <span className="text-red-400 text-sm">* Required</span>}
        </div>

        <div>
          <label className="block text-white mb-2">
            Full Name {!isOptional && <span className="text-red-400">*</span>}
          </label>
          <input
            ref={(el) => {
              if (formRefs.current.players[playerIndex]) {
                formRefs.current.players[playerIndex].fullName = el
              }
            }}
            type="text"
            placeholder="Enter full name"
            className="w-full px-3 py-2 bg-gray-800/50 border border-gray-700 rounded-md text-white"
            disabled={!isRegistrationOpen}
            defaultValue={player.fullName}
            required={!isOptional}
          />
        </div>

        <div>
          <label className="block text-white mb-2">Age {!isOptional && <span className="text-red-400">*</span>}</label>
          <input
            ref={(el) => {
              if (formRefs.current.players[playerIndex]) {
                formRefs.current.players[playerIndex].age = el
              }
            }}
            type="number"
            min="16"
            placeholder="Must be 16+"
            className="w-full px-3 py-2 bg-gray-800/50 border border-gray-700 rounded-md text-white"
            disabled={!isRegistrationOpen}
            defaultValue={player.age}
            required={!isOptional}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-white mb-2">
              Contact Number {!isOptional && <span className="text-red-400">*</span>}
            </label>
            <input
              ref={(el) => {
                if (formRefs.current.players[playerIndex]) {
                  formRefs.current.players[playerIndex].contactNumber = el
                }
              }}
              type="tel"
              placeholder="Enter contact number"
              className="w-full px-3 py-2 bg-gray-800/50 border border-gray-700 rounded-md text-white"
              disabled={!isRegistrationOpen}
              defaultValue={player.contactNumber}
              required={!isOptional}
            />
          </div>

          <div>
            <label className="block text-white mb-2">
              Email ID {!isOptional && <span className="text-red-400">*</span>}
            </label>
            <input
              ref={(el) => {
                if (formRefs.current.players[playerIndex]) {
                  formRefs.current.players[playerIndex].email = el
                }
              }}
              type="email"
              placeholder="Enter email address"
              className="w-full px-3 py-2 bg-gray-800/50 border border-gray-700 rounded-md text-white"
              disabled={!isRegistrationOpen}
              defaultValue={player.email}
              required={!isOptional}
            />
          </div>
        </div>

        <div>
          <label className="block text-white mb-2">
            Address {!isOptional && <span className="text-red-400">*</span>}
          </label>
          <textarea
            ref={(el) => {
              if (formRefs.current.players[playerIndex]) {
                formRefs.current.players[playerIndex].address = el
              }
            }}
            rows={3}
            placeholder="Enter full address"
            className="w-full px-3 py-2 bg-gray-800/50 border border-gray-700 rounded-md text-white"
            disabled={!isRegistrationOpen}
            defaultValue={player.address}
            required={!isOptional}
          ></textarea>
        </div>
      </div>
    )
  }

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

          {/* Hidden button to load test data - only visible in development */}
          {process.env.NODE_ENV === "development" && (
            <button
              onClick={loadDummyData}
              className="fixed bottom-4 right-4 bg-gray-800 text-white px-3 py-1 rounded-md text-xs opacity-50 hover:opacity-100 z-50"
            >
              Load Test Data
            </button>
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
                      {step === 2 && "Players 1-4"}
                      {step === 3 && "Players 5-8"}
                      {step === 4 && "Payment"}
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

              {/* Success message */}
              {submitSuccess && (
                <div className="bg-green-900/20 border border-green-900/30 rounded-lg p-4 mb-6">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-green-200 text-sm">
                      <span className="font-medium">Success!</span> Your registration has been submitted and saved to
                      our database.
                    </p>
                  </div>
                </div>
              )}

              {/* Error message */}
              {submitError && (
                <div className="bg-red-900/20 border border-red-900/30 rounded-lg p-4 mb-6">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <p className="text-red-200 text-sm">
                      <span className="font-medium">Error:</span> {submitError}
                    </p>
                  </div>
                </div>
              )}

              {/* Step 1: Team Information */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-md bg-red-900/20 text-red-400 border border-red-900/30">
                      <Users className="h-5 w-5" />
                    </div>
                    <h2 className="text-2xl font-semibold text-white">Team Information</h2>
                  </div>

                  <div className="p-6 border border-gray-800 rounded-lg bg-gray-900/30">
                    <div>
                      <label className="block text-white mb-2">
                        Team Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        ref={(el) => {
                          formRefs.current.teamName = el
                        }}
                        type="text"
                        placeholder="Enter your team name"
                        className="w-full px-3 py-2 bg-gray-800/50 border border-gray-700 rounded-md text-white"
                        disabled={!isRegistrationOpen}
                        defaultValue={formData.teamName}
                        required
                      />
                    </div>
                  </div>

                  <PlayerForm playerNumber={1} isOptional={false} />

                  <div className="bg-yellow-900/20 border border-yellow-900/30 rounded-lg p-4 mt-6">
                    <div className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <p className="text-yellow-200 text-sm">
                        <span className="font-medium">Important:</span> Once registered, player details cannot be
                        changed. Only the players in the registered list are allowed to play at the venue.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Players 1-4 */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-md bg-red-900/20 text-red-400 border border-red-900/30">
                      <Users className="h-5 w-5" />
                    </div>
                    <h2 className="text-2xl font-semibold text-white">Players 2-4 Details</h2>
                  </div>

                  <PlayerForm playerNumber={2} isOptional={false} />
                  <PlayerForm playerNumber={3} isOptional={false} />
                  <PlayerForm playerNumber={4} isOptional={false} />
                </div>
              )}

              {/* Step 3: Players 5-8 */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-md bg-red-900/20 text-red-400 border border-red-900/30">
                      <Users className="h-5 w-5" />
                    </div>
                    <h2 className="text-2xl font-semibold text-white">Players 5-8 Details</h2>
                  </div>

                  <PlayerForm playerNumber={5} isOptional={false} />
                  <PlayerForm playerNumber={6} isOptional={false} />
                  <PlayerForm playerNumber={7} isOptional={true} />
                  <PlayerForm playerNumber={8} isOptional={true} />
                </div>
              )}

              {/* Step 4: Payment */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-md bg-red-900/20 text-red-400 border border-red-900/30">
                      <Trophy className="h-5 w-5" />
                    </div>
                    <h2 className="text-2xl font-semibold text-white">Payment Details</h2>
                  </div>

                  <div className="p-6 border border-gray-800 rounded-lg bg-gray-900/30 space-y-6">
                    <div className="flex justify-between items-center pb-4 border-b border-gray-800">
                      <span className="text-white font-medium">Entry Fee:</span>
                      <span className="text-white font-bold">₹3600 per team</span>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
                      <div className="text-center">
                        <h3 className="text-white font-medium mb-3">Payment QR Code</h3>
                        <div className="bg-white p-2 rounded-lg inline-block">
                          <div className="w-40 h-40 bg-gray-200 flex items-center justify-center">
                            <span className="text-gray-500 text-xs">QR Code Placeholder</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4 w-full max-w-md">
                        <div>
                          <label className="block text-white mb-2">
                            Transaction ID <span className="text-red-400">*</span>
                          </label>
                          <input
                            ref={(el) => {
                              formRefs.current.payment.transactionId = el
                            }}
                            type="text"
                            placeholder="Enter transaction ID"
                            className="w-full px-3 py-2 bg-gray-800/50 border border-gray-700 rounded-md text-white"
                            disabled={!isRegistrationOpen}
                            defaultValue={formData.payment.transactionId}
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-white mb-2">
                            Upload Payment Screenshot <span className="text-red-400">*</span>
                          </label>
                          <div
                            className={`border-2 border-dashed ${fileError ? "border-red-500" : "border-gray-700"} rounded-lg p-4 text-center cursor-pointer`}
                            onClick={() => fileInputRef.current && fileInputRef.current.click()}
                          >
                            <div className="flex flex-col items-center justify-center gap-2">
                              {fileUploaded ? (
                                <>
                                  <CheckCircle className="h-8 w-8 text-green-500" />
                                  <p className="text-green-400">File uploaded successfully</p>
                                  <p className="text-gray-500 text-xs">{formData.payment.screenshot?.name}</p>
                                </>
                              ) : (
                                <>
                                  <Upload className="h-8 w-8 text-gray-400" />
                                  <p className="text-gray-300">Drag & drop or click to upload</p>
                                  <p className="text-gray-500 text-xs">JPG, PNG or PDF (Max 5MB)</p>
                                </>
                              )}
                            </div>
                            <input
                              ref={fileInputRef}
                              type="file"
                              className="hidden"
                              accept=".jpg,.jpeg,.png,.pdf"
                              disabled={!isRegistrationOpen}
                              onChange={handleFileUpload}
                              required
                            />
                          </div>
                          {fileError && <p className="text-red-500 text-sm mt-1">{fileError}</p>}
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-gray-800">
                      <div className="flex items-center gap-2 mb-4">
                        <input
                          ref={(el) => {
                            formRefs.current.terms = el
                          }}
                          type="checkbox"
                          id="terms"
                          className="w-4 h-4 bg-gray-800 border border-gray-700 rounded"
                          disabled={!isRegistrationOpen}
                          defaultChecked={formData.termsAccepted}
                          required
                        />
                        <label htmlFor="terms" className="text-gray-300 text-sm">
                          I confirm that all the information provided is accurate and I agree to the tournament rules
                          and regulations.
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation buttons */}
              <div className="flex justify-between pt-6 mt-6 border-t border-gray-800">
                <button
                  onClick={handlePrevStep}
                  disabled={currentStep === 1 || !isRegistrationOpen || isSubmitting}
                  className={`px-4 py-2 border border-gray-700 text-white rounded-md bg-transparent transition-colors ${
                    currentStep === 1 || !isRegistrationOpen || isSubmitting
                      ? "opacity-50 cursor-not-allowed text-gray-500"
                      : "hover:bg-gray-800"
                  }`}
                >
                  Previous
                </button>

                {currentStep < 4 ? (
                  <button
                    onClick={handleNextStep}
                    className={`px-4 py-2 bg-red-600 text-white rounded-md transition-colors ${
                      !isRegistrationOpen ? "opacity-50 cursor-not-allowed" : "hover:bg-red-700"
                    }`}
                    disabled={!isRegistrationOpen}
                  >
                    Continue
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={!isRegistrationOpen || isSubmitting}
                    className={`px-4 py-2 bg-red-600 text-white rounded-md transition-colors flex items-center gap-2 ${
                      !isRegistrationOpen || isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-red-700"
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Submit Registration"
                    )}
                  </button>
                )}
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
                <span className="text-white font-medium">₹3600</span>
              </div>
              <p className="text-gray-400 text-sm">
                Fee includes tournament entry, referee costs, venue hire, and team photos. Payment must be completed
                during registration.
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
