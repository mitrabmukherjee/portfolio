export default function AboutPage() {
  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden">

      {/* Background 3D / Network Effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -left-32 top-40 w-96 h-96 bg-gradient-to-r from-blue-200 to-transparent rounded-full blur-3xl" />
        <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-gradient-to-l from-blue-100 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Content Wrapper */}
      <div className="relative max-w-6xl mx-auto px-8 py-24">

        {/* Push content slightly right */}
        <div className="md:ml-32 space-y-16 max-w-3xl">

          {/* Heading */}
          <div className="space-y-6">
          <h1 className="text-5xl font-bold tracking-tight text-primary">
              AI–ML Developer
            </h1>
            <p className="text-lg leading-relaxed text-gray-700">
              Expertise in building intelligent systems focused on real-world
              AI applications, automated malware analysis, deepfake detection,
              and explainable machine learning solutions.
            </p>
          </div>

          {/* Section 1 */}
          <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">
              Applied ML & Deep Learning Focus
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
              <li>Automated YARA rule generation for malware detection</li>
              <li>Deep learning pipelines for deepfake identification (CNNs)</li>
              <li>Automated systems for promoter identification (CEFs)</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">"
              Responsible & Explainable AI
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
              <li>Detecting misuse of AI with robust & explainable models</li>
              <li>Combining detection, motivation & explainability frameworks</li>
              <li>Collaborative research and model evaluation practices</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary">
              Commitment to Quality & Collaboration
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Dedicated to structured collaboration, strategic thinking,
              and delivering high-impact AI solutions through effective teamwork
              and research-driven development.
            </p>
          </div>

          {/* Button */}
          <div>
          <a
            href="/projects"
            className="inline-block px-8 py-3 rounded-full font-semibold 
                        bg-primary text-white 
                        shadow-md transition duration-300 
                        hover:bg-secondary hover:text-white
                        hover:opacity-90 hover:scale-105
                        border-2 border-primary"
            >
              VIEW PROJECTS
          </a>
          </div>

        </div>
      </div>
    </section>
  );
}