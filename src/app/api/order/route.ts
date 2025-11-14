import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { sendMail1, sendMail2 } from "@/mail/sendMail";
import { format } from "date-fns";
import { z } from "zod";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { proceedingDates, ...orderData } = body;
    const order = await prisma.order.create({
      data: {
        styleOfCause: orderData.styleOfCause,
        crownCounselName: orderData.crownCounselName,
        defenceCounselName: orderData.defenceCounselName,
        courtFileNumber: orderData.courtFileNumber,
        courtLocation: orderData.courtLocation,
        preferredACT: orderData.preferredACT,
        copyType: orderData.copyType,
        numberOfCopies: orderData.numberOfCopies,
        emailCopy: orderData.emailCopy,
        quoteRequired: orderData.quoteRequired,
        dueDate: orderData.dueDate,
        preferredContactMethod: orderData.preferredContactMethod,
        additionalComments: orderData.additionalComments,
        usedForAppeal: orderData.usedForAppeal,
        appealNumber: orderData.appealNumber,
        hasPublicationBan: orderData.hasPublicationBan,
        publicationBanDetails: orderData.publicationBanDetails,
        orderingPartyName: orderData.orderingPartyName,
        companyName: orderData.companyName,
        designation: orderData.designation,
        streetAddress: orderData.streetAddress,
        city: orderData.city,
        province: orderData.province,
        postalCode: orderData.postalCode,
        officeNumber: orderData.officeNumber,
        cellNumber: orderData.cellNumber,
        emailAddress: orderData.emailAddress,
        proceedingDates: proceedingDates
          ? {
              create: proceedingDates.map((pd: any) => ({
                date: pd.date,
                justiceName: pd.justiceName,
              })),
            }
          : undefined,
      },
      include: {
        proceedingDates: true,
      },
    });
    const formatProceedingDates = (dates: any[]) => {
      if (!dates || dates.length === 0) return "Not specified";
      return dates
        .map((pd) => `${pd.date || "N/A"} - ${pd.justiceName || "N/A"}`)
        .join("<br/>");
    };
    const isEmail = (input: string) =>
      z.string().email().safeParse(input).success;

    const subject = `PROJECT TICKET ID - VPCTONS - ${
      orderData.styleOfCause || "N/A"
    } - DUE BY ${
      orderData.dueDate
        ? format(new Date(orderData.dueDate), "MMMM d yyyy")
        : "Not specified"
    }`;
    const htmlContent = `
      <h2>New Court Order Form Submission</h2>
      <h3>Case Details</h3>
      <p><strong>Style of Cause:</strong> ${
        orderData.styleOfCause || "Not specified"
      }</p>
      <p><strong>Proceeding Dates:</strong><br/>${formatProceedingDates(
        order.proceedingDates
      )}</p>
      <p><strong>Crown Counsel Name:</strong> ${
        orderData.crownCounselName || "Not specified"
      }</p>
      <p><strong>Defence Counsel Name:</strong> ${
        orderData.defenceCounselName || "Not specified"
      }</p>
      <p><strong>Court File Number:</strong> ${
        orderData.courtFileNumber || "Not specified"
      }</p>
      <p><strong>Court Location:</strong> ${
        orderData.courtLocation || "Not specified"
      }</p>
      
      <h3>Order Details</h3>
      <p><strong>Preferred ACT:</strong> ${
        orderData.preferredACT || "Not specified"
      }</p>
      <p><strong>Copy Type:</strong> ${
        orderData.copyType || "Not specified"
      }</p>
      <p><strong>Number of Copies:</strong> ${
        orderData.numberOfCopies || "Not specified"
      }</p>
      <p><strong>Email Copy:</strong> ${
        orderData.emailCopy || "Not specified"
      }</p>
      <p><strong>Quote Required:</strong> ${
        orderData.quoteRequired || "Not specified"
      }</p>
      <p><strong>Due Date:</strong> ${
        orderData.dueDate
          ? new Date(orderData.dueDate).toLocaleDateString()
          : "Not specified"
      }</p>
      <p><strong>Preferred Contact Method:</strong> ${
        orderData.preferredContactMethod || "Not specified"
      }</p>
      <p><strong>Additional Comments:</strong> ${
        orderData.additionalComments || "None"
      }</p>
      <p><strong>Used for Appeal:</strong> ${
        orderData.usedForAppeal || "Not specified"
      }</p>
      ${
        orderData.appealNumber
          ? `<p><strong>Appeal Number:</strong> ${orderData.appealNumber}</p>`
          : ""
      }
      <p><strong>Does this matter have a publication ban?</strong> ${
        orderData.hasPublicationBan || "Not specified"
      }</p>
      ${
        orderData.publicationBanDetails
          ? `<p><strong>Publication Ban Details:</strong> ${orderData.publicationBanDetails}</p>`
          : ""
      }
      
      <h3>Ordering Party Details</h3> 
      <p><strong>Name:</strong> ${
        orderData.orderingPartyName || "Not specified"
      }</p>
      <p><strong>Company Name:</strong> ${
        orderData.companyName || "Not specified"
      }</p>
      <p><strong>Designation:</strong> ${
        orderData.designation || "Not specified"
      }</p>
      <p><strong>Street Address:</strong> ${
        orderData.streetAddress || "Not specified"
      }</p>
      <p><strong>City:</strong> ${orderData.city || "Not specified"}</p>
      <p><strong>Province:</strong> ${orderData.province || "Not specified"}</p>
      <p><strong>Postal Code:</strong> ${
        orderData.postalCode || "Not specified"
      }</p>
      <p><strong>Office Number:</strong> ${
        orderData.officeNumber || "Not specified"
      }</p>
      <p><strong>Cell Number:</strong> ${
        orderData.cellNumber || "Not specified"
      }</p>
      <p><strong>Email Address:</strong> ${
        orderData.emailAddress || "Not specified"
      }</p>
      
      <hr>
      <p><em>This form was submitted on ${new Date().toLocaleString()}</em></p>
    `;
    if (orderData.emailAddress) {
      sendMail1(htmlContent, orderData.emailAddress, subject);
      sendMail2(
        htmlContent,
        orderData.emailAddress,
        subject,
        orderData.orderingPartyName || "Order Form Submitter"
      );
    }
    if (orderData.emailCopy && isEmail(orderData.emailCopy)) {
      sendMail1(htmlContent, orderData.emailCopy, subject);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Order created successfully",
        data: order,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating order:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to create order",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const orders = await prisma.order.findMany({
      include: {
        proceedingDates: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(
      {
        success: true,
        data: orders,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching orders:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch orders",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
