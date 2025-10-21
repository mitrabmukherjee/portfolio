import { Check, CheckCircle } from "lucide-react";

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
    "Ontario and Superior Court Transcription",
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="mx-auto max-w-6xl w-full px-4">
        <h2 className="text-2xl md:text-4xl font-semibold mb-8 text-center text-secondary">
          Transcription Services Provided by Sue Loney
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800">
          {services.map((s, index) => (
            <div
              key={s}
              className={`p-2 bg-primary rounded-lg border hover:bg-secondary text-white flex items-center justify-center gap-3 ${
                index === services.length - 1 && services.length % 2 === 1
                  ? "sm:col-start-1 sm:col-end-3 sm:justify-self-center sm:max-w-xl w-xl"
                  : ""
              }`}
            >
              <Check className="w-7 h-7" />
              <span>{s}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
