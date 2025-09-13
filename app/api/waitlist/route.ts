import { NextResponse } from "next/server";
import { Waitlist } from "@/lib/models/Waitlist";
import { connectDB } from "@/lib/models/mongoose";

function isDuplicateKeyError(err: unknown): err is { code: 11000 } {
    return (
        typeof err === "object" &&
        err !== null &&
        "code" in err &&
        (err as { code?: unknown }).code === 11000
    );
}

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
        if (isDuplicateKeyError(err)) {
            return NextResponse.json({ error: "This email is already on the waitlist." }, { status: 409 });
        }

        let errorMessage = "Internal server error";
        if (err instanceof Error) {
            errorMessage = err.message;
        }
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}
