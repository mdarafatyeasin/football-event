// convex/schema.ts
import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
  registrations: defineTable({
    teamName: v.string(),

    players: v.array(
      v.object({
        fullName: v.string(),
        age: v.string(), // or v.number() if validated/converted
        contactNumber: v.string(),
        email: v.string(),
        address: v.string(),
      })
    ),

    payment: v.object({
      transactionId: v.string(),
      screenshotUrl: v.optional(v.string()), // use if screenshot is uploaded
    }),

    termsAccepted: v.boolean(),

    createdAt: v.number(), // timestamp in milliseconds
  }),
});
