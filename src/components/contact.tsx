import { ContactForm } from "./contact-form";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Contact = () => (
  <section id="contact" className="py-24 px-4 sm:px-6 border-t border-white/6">
    <div className="mx-auto max-w-5xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Left: info */}
        <div>
          <Badge
            variant="outline"
            className="mb-4 border-white/10 bg-white/5 text-white/50 text-xs"
          >
            Contact
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Get in touch
          </h2>
          <p className="text-white/40 text-sm leading-relaxed mb-10 max-w-sm">
            Have questions? I'd love to hear from you. Send me a message and
            I'll respond as soon as possible.
          </p>

          <div className="space-y-7">
            {/* Email */}
            <div>
              <p className="text-xs font-semibold text-white mb-1">Email</p>
              <p className="text-white/40 text-sm">
                altair@alessandro-argenziano.com
              </p>
            </div>

            {/* Socials */}
            <div>
              <p className="text-xs font-semibold text-white mb-2">Social</p>

              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/alessandro-arg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition"
                >
                  <FaGithub size={20} />
                </a>

                <a
                  href="https://www.linkedin.com/in/alessandro-argenziano"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right: form */}
        <ContactForm />
      </div>
    </div>
  </section>
);
