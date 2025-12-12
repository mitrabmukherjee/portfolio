import { CheckCircle } from "lucide-react";

export default function ServicesSection() {
  const services = [
    "BAIL HEARINGS",
    "11(b) APPLICATIONS",
    "PRELIMINARY HEARINGS",
    "TRIAL PROCEEDINGS",
    "MOTIONS",
    "GUILTY PLEAS",
    "APPEALS",
    "DISCOVERY PROCEEDINGS",
    "REASONS FOR SENTENCE",
    "REASONS FOR JUDGMENT",
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="mx-auto max-w-6xl w-full px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-secondary">
          Transcription Services Provided
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-800">
          {services.map((s) => (
            <div
              key={s}
              className="p-6 bg-tertiary rounded-xl shadow-md flex items-center gap-4"
            >
              <CheckCircle className="w-8 h-8 text-secondary flex-shrink-0" />
              <span className="text-lg font-medium text-primary">{s}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
