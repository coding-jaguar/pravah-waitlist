import { NextResponse } from "next/server";
import { Waitlist } from "@/lib/models/Waitlist";
import { connectDB } from "@/lib/models/mongoose";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email, firstName, currentEnergyLevel, location, consentToUpdate, goal } = body;

        if (!email) {
            return NextResponse.json({ error: "Email is required" }, { status: 400 });
        }

        await connectDB();

        const entry = await Waitlist.create({
            email,
            firstName,
            currentEnergyLevel,
            location,
            consentToUpdate,
            goal,
        });

        return NextResponse.json({ ok: true, entry });
    } catch (err: unknown) {
        console.error("Waitlist error:", err);
        // Handle duplicate email nicely
        if (typeof err === "object" && err && "code" in err && (err as any).code === 11000) {
            return NextResponse.json({ error: "This email is already on the waitlist." }, { status: 409 });
        }

        let errorMessage = "Internal server error";
        if (err instanceof Error) {
            errorMessage = err.message;
        }
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}
