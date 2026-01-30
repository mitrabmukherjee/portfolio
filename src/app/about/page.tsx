import Image from "next/image";
import ReachOutSection from "@/app/components/ReachOutSection";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-secondary py-4">
        <div className="mx-auto max-w-7xl w-full px-4">
          <h1 className="text-3xl md:text-4xl text-white text-center font-alice">
            About Deanna Copping
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
                  src="/images/Deanna-Copping-Photo.png"
                  alt="Deanna Copping"
                  width={300}
                  height={300}
                  className="rounded-full border-4 border-primary object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Title and ID */}
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Ontario Authorized Court Transcriptionist
              </h2>
            </div>

            {/* Biography Content */}
            <div className="prose prose-lg max-w-4xl text-black leading-relaxed space-y-4">
              <p>
                My name is Deanna Copping and I am an Authorized Court Transcriptionist with a focused practice in criminal proceedings, including Charter applications and appellate work. Since becoming authorized in 2021, I have worked extensively on complex and high-stakes matters, producing certified transcripts that meet the exacting standards required by counsel and the courts.
              </p>
              <p>
                Prior to authorization, my work centered on transcribing police interviews and body-worn camera footage—experience that sharpened my ability to navigate difficult audio, sensitive content, and nuanced evidentiary records. That foundation continues to inform my transcription approach today, particularly in serious criminal matters where accuracy and context are critical.
              </p>
              <p>
                My practice is primarily criminal in scope, including murder and other high-profile cases, as well as Charter litigation and appeals. I also have experience with civil and family proceedings. I am comfortable managing large records, time-sensitive filings, and matters where precision is not optional but essential.
              </p>
              <p>
                I work collaboratively with court services and production teams to ensure that each order is completed efficiently, accurately, and in full compliance with applicable rules and filing requirements. Clear communication, respect for deadlines, and consistency in the final product are central to how I work. Counsel can expect a professional, straightforward process from start to finish.
              </p>
              <p>
                I chose this field out of a longstanding interest in the legal system and a desire to contribute meaningfully to it. Court transcription is work that demands discipline, judgment, and attention to detail—qualities I bring to every file. My goal on every matter is straightforward: to provide a dependable record that counsel can rely on with confidence.
              </p>
            </div>

            {/* Order Button */}
            <div className="flex justify-center">
              <div className="relative">
                {/* Pulse animation rings using CSS */}
                <div className="absolute inset-0 rounded-lg border border-secondary pulse-ring-1" />
                <div className="absolute inset-0 rounded-lg border border-secondary pulse-ring-2" />
                <div className="absolute inset-0 rounded-lg border border-secondary pulse-ring-3" />

                <a
                  href="/order"
                  className="relative inline-flex items-center gap-3 bg-secondary hover:bg-primary text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl z-10"
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
