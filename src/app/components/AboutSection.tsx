import { Award } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-8 bg-white text-black">
      <div className="mx-auto max-w-7xl w-full px-4 py-8 flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1 flex justify-end">
          <img
            src="/images/portrait.png"
            alt="Sue Loney"
            className="w-3/4 h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl mb-4 text-primary">
            About{" "}
            <span className="glossy-text text-secondary font-bold">
              Sue Loney
            </span>
          </h2>
          <h3 className="text-xl font-semibold mb-3">
            Nova Scotia Court Transcriptionist
          </h3>
          {/* <p className="leading-relaxed mb-4">
            Before graduating from George Brown College as a court
            reporter/stenographer in 1998, Alex took the opportunity to sit in
            on various court proceedings at the Superior Court of Justice and
            gained employment as a scopist proofreading and editing transcripts
            for a court reporter who saw her potential.
          </p> */}
          <a
            href="#contact"
            className="inline-block bg-primary text-white px-6 py-3 rounded-md hover:bg-secondary transition-colors"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
