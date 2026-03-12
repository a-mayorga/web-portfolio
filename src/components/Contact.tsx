import FadeInSection from "./FadeInSection"

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-[calc(100dvh-3.5rem)] flex flex-col justify-center items-center px-6 text-center"
    >
      <FadeInSection>

        <div className="max-w-2xl w-full">

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's build something great.
          </h2>

          <p className="text-gray-400 mb-10">
            I'm always interested in discussing new projects,
            freelance opportunities, or full-time roles.
          </p>

          <div className="flex justify-center gap-6">

            <a
              href="https://github.com/YOUR_GITHUB"
              target="_blank"
              className="border border-white/20 px-6 py-3 rounded-lg hover:bg-white/10 transition text-sm font-medium"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/YOUR_LINKEDIN"
              target="_blank"
              className="border border-white/20 px-6 py-3 rounded-lg hover:bg-white/10 transition text-sm font-medium"
            >
              LinkedIn
            </a>

            <a
              href="mailto:your@email.com"
              className="border border-white/20 px-6 py-3 rounded-lg hover:bg-white/10 transition text-sm font-medium"
            >
              Email
            </a>

          </div>

        </div>

      </FadeInSection>
    </section>
  )
}

