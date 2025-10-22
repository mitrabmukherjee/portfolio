-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "styleOfCause" TEXT,
    "crownCounselName" TEXT,
    "defenceCounselName" TEXT,
    "courtFileNumber" TEXT,
    "courtLocation" TEXT,
    "preferredACT" TEXT,
    "copyType" TEXT,
    "numberOfCopies" INTEGER,
    "emailCopy" TEXT,
    "quoteRequired" TEXT,
    "dueDate" TEXT,
    "preferredContactMethod" TEXT,
    "additionalComments" TEXT,
    "usedForAppeal" TEXT,
    "appealNumber" TEXT,
    "orderingPartyName" TEXT,
    "companyName" TEXT,
    "designation" TEXT,
    "streetAddress" TEXT,
    "city" TEXT,
    "province" TEXT,
    "postalCode" TEXT,
    "officeNumber" TEXT,
    "cellNumber" TEXT,
    "emailAddress" TEXT,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProceedingDate" (
    "id" TEXT NOT NULL,
    "date" TEXT,
    "justiceName" TEXT,
    "orderId" TEXT NOT NULL,

    CONSTRAINT "ProceedingDate_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProceedingDate" ADD CONSTRAINT "ProceedingDate_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE CASCADE ON UPDATE CASCADE;
