import { google } from "googleapis"
import { NextResponse } from "next/server"

// Google Sheets API configuration
const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"]

// This would be stored securely in environment variables
const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n")
const GOOGLE_CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL
const GOOGLE_SHEET_ID = process.env.GOOGLE_SHEET_ID

export async function POST(request: Request) {
  try {
    const formData = await request.json()

    // Log the received data
    console.log("Received form data:", formData)

    // Check if Google credentials are available
    if (!GOOGLE_PRIVATE_KEY || !GOOGLE_CLIENT_EMAIL || !GOOGLE_SHEET_ID) {
      console.error("Missing Google API credentials")
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 })
    }

    // Authenticate with Google
    const auth = new google.auth.JWT({
      email: GOOGLE_CLIENT_EMAIL,
      key: GOOGLE_PRIVATE_KEY,
      scopes: SCOPES,
    })

    const sheets = google.sheets({ version: "v4", auth })

    // Format the data for Google Sheets
    // Each player will be a separate row in the sheet
    const players = formData.players
      .map((player: any, index: number) => {
        return [
          formData.teamName, // Team Name
          index === 0 ? "Captain" : `Player ${index + 1}`, // Role
          player.fullName, // Full Name
          player.age, // Age
          player.contactNumber, // Contact Number
          player.email, // Email
          player.address, // Address
          formData.payment.transactionId, // Transaction ID
          new Date().toISOString(), // Registration Date
        ]
      })
      .filter((player: any[]) => player[2]) // Only include players with names

    // Append data to the Google Sheet
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: GOOGLE_SHEET_ID,
      range: "Sheet1!A:I", // Adjust based on your sheet structure
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: players,
      },
    })

    console.log("Data appended to Google Sheet:", response.data)

    return NextResponse.json({
      success: true,
      message: "Registration data saved to Google Sheets successfully",
    })
  } catch (error) {
    console.error("Error saving to Google Sheets:", error)
    return NextResponse.json({ error: "Failed to save registration data" }, { status: 500 })
  }
}
