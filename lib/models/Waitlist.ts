import { Schema, model, models } from "mongoose";

const WaitlistSchema = new Schema(
    {
        email: { type: String, required: true, unique: true },
        firstName: { type: String },
        currentEnergyLevel: { type: Number }, // 1-10 scale
        location: { type: String },
        consentToUpdate: { type: Boolean, default: false },
        goal: { type: String },
    },
    { timestamps: true } // adds createdAt + updatedAt
);

export const Waitlist =
    models.Waitlist || model("Waitlist", WaitlistSchema);
