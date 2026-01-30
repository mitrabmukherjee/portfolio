export default function AboutSection() {
  return (
    <section id="about" className="py-8 bg-white text-black">
      <div className="mx-auto max-w-7xl w-full px-4 py-8 flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1 flex justify-center md:justify-end ">
          <img
            src="/images/Deanna-Copping-Photo.png"
            alt="Deanna Copping"
            className="w-3/5 h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl mb-4 text-primary">
            About{" "}
            <span className="glossy-text text-secondary font-bold">
              Deanna Copping
            </span>
          </h2>
          <h3 className="text-xl font-semibold mb-3">
            Ontario Authorized Court Transcriptionist
          </h3>
          <p className="leading-relaxed mb-4">
            My name is Deanna Copping and I am an Authorized Court Transcriptionist with a focused practice in criminal proceedings, including Charter applications and appellate work. Since becoming authorized in 2021, I have worked extensively on complex and high-stakes matters, producing certified transcripts that meet the exacting standards required by counsel and the courts.
          </p>
          <a
            href="#contact"
            className="inline-block bg-secondary text-white px-6 py-3 rounded-md hover:bg-primary transition-colors"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
