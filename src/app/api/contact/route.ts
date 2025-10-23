import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { sendMail1, sendMail2 } from "@/mail/sendMail";
import { z } from "zod";

const contactSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  phone: z.string().min(1, "Phone number is required"),
  email: z.string().email("Invalid email address"),
  requirement: z.string().optional(),
  comments: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validationResult = contactSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation error",
          errors: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { fullName, phone, email, requirement, comments } = validationResult.data;
    const contact = await prisma.contact.create({
      data: {
        fullName,
        phone,
        email,
        requirement: requirement || null,
        comments: comments || null,
      },
    });

    const subject = `New Contact Form Submission - ${fullName}`;
    const htmlContent = `
      <h2>New Contact Form Submission</h2>
      
      <h3>Contact Information</h3>
      <p><strong>Full Name:</strong> ${fullName}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      
      <h3>Inquiry Details</h3>
      <p><strong>Requirement:</strong> ${requirement || "Not specified"}</p>
      ${comments ? `<p><strong>Additional Comments:</strong> ${comments}</p>` : ""}
      
      <hr>
      <p><em>This form was submitted on ${new Date().toLocaleString()}</em></p>
    `;
    sendMail1(htmlContent, email, subject);
    sendMail2(htmlContent, email, subject, fullName);

    return NextResponse.json(
      {
        success: true,
        message: "Contact form submitted successfully",
        data: contact,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to submit contact form",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const contacts = await prisma.contact.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(
      {
        success: true,
        data: contacts,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching contacts:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch contacts",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
