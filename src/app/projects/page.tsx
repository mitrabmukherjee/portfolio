import ReachOutSection from "@/app/components/ReachOutSection";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-secondary py-4">
        <div className="mx-auto max-w-7xl w-full px-4">
          <h1 className="text-3xl md:text-4xl font-normal text-white text-center font-alice">
            Projects
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative bg-white py-16">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: "url('/images/innerbg.avif')",
            backgroundPosition: "left center",
          }}
        />

        <div className="relative mx-auto max-w-7xl w-full px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* AutoSteamYARA */}
            <div className="bg-tertiary rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-primary mb-2">
                AutoSteamYARA
              </h2>
              <p className="text-black mb-4">
                Automated YARA rule generation and malware detection using AI/ML.
                The system learns patterns from malicious binaries and security
                telemetry to generate robust detection rules and improve threat
                coverage.
              </p>
              <div className="text-sm font-semibold text-secondary">
                Tech: Python, Machine Learning
              </div>
            </div>

            {/* Deepfake Detection */}
            <div className="bg-tertiary rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-primary mb-2">
                Deepfake Detection
              </h2>
              <p className="text-black mb-4">
                Deep learning system to detect deepfake images and videos.
                Combines convolutional neural networks with artefact analysis to
                distinguish manipulated media from authentic content.
              </p>
              <div className="text-sm font-semibold text-secondary">
                Tech: Python, CNN, Deep Learning
              </div>
            </div>
          </div>
        </div>
      </div>

      <ReachOutSection />
    </div>
  );
}

