import { google } from "@ai-sdk/google"
import { generateText } from "ai"

export async function GET() {
    return Response.json({
        success: true,
        messsage: "THANK YOU",

    }, { status: 200 })
}

export async function POST(req: Request) {
    try {
        const { type, role, level, techstack, ammount } = await req.json();

        const { text: question } = await generateText({

            model: google("gemini-2.0-flash-001"),

            prompt: `
Generate ${ammount} interview questions in JSON array format.

Details:
Company Type or Domain: ${type}
Job Role: ${role}
Seniority Level: ${level}
Required Tech Stack: ${techstack}

Instructions:
Return only a valid JSON array of strings.
Each element must be a single interview question ending with a period.
Do not include numbering, bullets, slashes, or any special characters.
Include a mix of technical, problem-solving, and behavioral questions.
Tailor technical questions specifically to the given tech stack.
Align behavioral questions with the company type or domain.
Make questions progressively harder based on the seniority level.
Ensure the questions sound natural when read aloud by a voice assistant.
`
        });
        return Response.json({
            success: true,
            messsage: "THANK YOU",

        }, { status: 200 })
    } catch (error) {
        console.error(error)
        return Response.json({
            success: false,
            error

        }, { status: 500 })
    }
}