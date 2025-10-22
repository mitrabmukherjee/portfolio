import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

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
