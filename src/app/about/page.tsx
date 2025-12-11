import Image from "next/image";
import ReachOutSection from "@/app/components/ReachOutSection";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-secondary py-4">
        <div className="mx-auto max-w-7xl w-full px-4">
          <h1 className="text-3xl md:text-4xl text-white text-center font-alice">
            About Sue Loney
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative bg-white py-16">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-bottom-left bg-no-repeat opacity-100"
          style={{
            backgroundImage: "url('/images/innerbg.jpg')",
            backgroundPosition: "left center",
          }}
        />

        <div className="relative mx-auto max-w-7xl w-full px-4">
          <div className="flex flex-col items-center text-center space-y-8">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <div className="relative w-[300px] h-[300px]">
                <Image
                  src="/images/Sue-Loney-Potrait.png"
                  alt="Sue Loney"
                  width={300}
                  height={300}
                  className="rounded-full border-4 border-primary object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Title and ID */}
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Nova Scotia Court Transcriptionist
              </h2>
            </div>

            {/* Biography Content */}
            <div className="prose prose-lg max-w-4xl text-black leading-relaxed space-y-4">
              <p className="">
                Sue Loney served as a court reporter in a private reporting
                service for 13 years, working both in-office and at remote
                locations for various proceedings such as coroner&apos;s inquests,
                mediations, and in-custody examinations. In this role, she
                transcribed all proceedings when transcripts were ordered. Upon
                joining Videoplus, she successfully completed the Nova Scotia
                Court Transcriber Certification Program and has been
                transcribing court proceedings exclusively since then.
              </p>
              <p className="">
                Outside of her professional work, Sue enjoys spending time
                outdoors, often with her horse, Sadie, and finds balance through
                her love of riding and all things equine.
              </p>
            </div>

            {/* Order Button */}
            <div className="flex justify-center">
              <div className="relative">
                {/* Pulse animation rings using CSS */}
                <div className="absolute inset-0 rounded-lg border border-primary pulse-ring-1" />
                <div className="absolute inset-0 rounded-lg border border-primary pulse-ring-2" />
                <div className="absolute inset-0 rounded-lg border border-primary pulse-ring-3" />

                <a
                  href="/order"
                  className="relative inline-flex items-center gap-3 bg-primary hover:bg-secondary text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl z-10"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  ORDER A TRANSCRIPT
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ReachOutSection />
    </div>
  );
}
