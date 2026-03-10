export default function AboutSection() {
  return (
    <section id="about" className="py-8 bg-white text-black">
      <div className="mx-auto max-w-7xl w-full px-4 py-8 flex flex-col md:flex-row gap-8 items-center">
        
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl mb-4 text-primary">
            About{" "}
            <span className="glossy-text text-secondary font-bold">
              Mitra Brinda Mukherjee
            </span>
          </h2>
          <h3 className="text-xl font-semibold mb-3">
            AI-ML Developer
          </h3>
          <p className="leading-relaxed mb-4">
            My name is Mitra Brinda Mukherjee and I am an AI-ML Developer
            passionate about applying machine learning and deep learning to
            real-world problems. I enjoy building end-to-end systems, from data
            preparation and modelling through to deployment and evaluation.
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
