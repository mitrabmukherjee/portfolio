import { FileText } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="get-in-touch" className="bg-secondary">
      <div className="mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8 items-center text-white">
        <div>
          <img
            src="/images/getaquote.jpg"
            alt="Get in touch"
            className="w-full h-64 object-cover object-top shadow"
          />
        </div>
        <div className="text-center md:text-left flex flex-col items-center md:items-start pb-4 md:pb-0">
          <h2 className="text-3xl font-normal mb-8 max-w-lg">
            Get in touch with{" "}
            <span className="text-4xl text-white font-bold">
            Deanna Copping
            </span>
          </h2>
          <a
            href="/order"
            className="inline-flex items-center gap-3 bg-transparent text-white border-2 border-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-primary transition-colors shadow-xl"
            style={{ boxShadow: "8px 8px 0px 0px rgba(0, 0, 0, 0.2)" }}
          >
            <FileText className="w-6 h-6" />
            ORDER A TRANSCRIPT
          </a>
        </div>
      </div>
    </section>
  );
}
