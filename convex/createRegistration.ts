// convex/functions/createRegistration.ts
import { mutation } from './_generated/server';
import { v } from 'convex/values';

export const createRegistration = mutation({
  args: {
    teamName: v.string(),
    players: v.array(
      v.object({
        fullName: v.string(),
        age: v.string(), // Or v.number() if age is numeric
        contactNumber: v.string(),
        email: v.string(),
        address: v.string(),
      })
    ),
    payment: v.object({
      transactionId: v.string(),
      screenshotUrl: v.optional(v.string()), // Optional if not uploaded
    }),
    termsAccepted: v.boolean(),
  },
  handler: async (ctx, args) => {
    const result = await ctx.db.insert('registrations', {
      ...args,
      createdAt: Date.now(),
    });

    return {
      success: true,
      registrationId: result,
    };
  },
});
