"use client";
import { Phone, Mail, Share2, Facebook, Loader2, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";
import ReachOutSection from "@/app/components/ReachOutSection";
import { toast } from "sonner";
import { useReCaptcha } from "@/app/components/ReCaptchaProvider";

interface ContactInfoItem {
  icon: string;
  title: string;
  content?: string;
  socialLinks?: Array<{
    icon: string;
    href: string;
    ariaLabel: string;
  }>;
}

interface ContactPageContent {
  header: {
    title: string;
  };
  sectionHeader: {
    title: string;
  };
  contactInfo: ContactInfoItem[];
}

type FieldErrors = Partial<Record<keyof typeof initialFormData, string>>;

const initialFormData = {
  fullName: "",
  phone: "",
  email: "",
  requirement: "",
  comments: "",
};

export default function ContactPage() {
  const executeRecaptcha = useReCaptcha();
  const [content, setContent] = useState<ContactPageContent | null>(null);
  const [contentLoading, setContentLoading] = useState<boolean>(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    const fetchContent = async () => {
      setContentLoading(true);
      const response = await fetch("/content/contact-page.json");
      const data = await response.json();
      setContent(data);
      setContentLoading(false);
    };
    fetchContent();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const name = e.target.name as keyof FieldErrors;
    setFormData({ ...formData, [name]: e.target.value });
    if (fieldErrors[name]) setFieldErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = (): boolean => {
    const errors: FieldErrors = {};
    if (!formData.fullName.trim()) errors.fullName = "Full name is required.";
    if (!formData.phone.trim()) errors.phone = "Phone number is required.";
    if (!formData.email.trim()) errors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address.";
    }
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    if (!executeRecaptcha) {
      toast.error("reCAPTCHA not ready. Please try again.");
      return;
    }

    setIsSubmitting(true);
    try {
      const recaptchaToken = await executeRecaptcha("contact_form_submit");

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, recaptchaToken }),
      });
      const result = await response.json();
      if (result.success) {
        toast.success("Your message has been sent successfully!");
        setFormData(initialFormData);
        setFieldErrors({});
      } else {
        const msg = result.error
          ? `${result.message}: ${result.error}`
          : result.message || "Failed to send message. Please try again.";
        toast.error(msg);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(
        "There was an error sending your message. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!content || contentLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-12 h-12 text-secondary animate-spin" />
          <p className="text-lg text-gray-600 font-alice">Loading content...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Espresso spacer so content is not hidden under fixed navbar */}
      <div className="bg-primary pt-24 md:pt-28" aria-hidden />
      {/* Page Header - dark zone for navbar text */}
      <div className="navbar-dark-zone bg-primary py-10 md:py-12 font-alice">
        <div className="mx-auto max-w-7xl w-full px-4">
          <h1 className="text-4xl md:text-5xl font-normal text-white text-center">
            {content.header.title}
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative bg-white py-16 md:py-20 tech-grid">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -left-32 top-40 w-96 h-96 bg-gradient-to-r from-primary/5 to-transparent rounded-full blur-3xl" />
          <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-gradient-to-l from-secondary/5 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl w-full px-4">
          {/* Section Header - dark zone for navbar text */}
          <div className="navbar-dark-zone bg-primary text-white py-5 px-6 rounded-t-2xl border-b border-white/10">
            <span className="tech-label text-secondary/90 block text-center mb-1">form</span>
            <h2 className="text-xl md:text-2xl font-bold text-center font-mono">
              {content.sectionHeader.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-tertiary rounded-b-2xl overflow-hidden shadow-xl">
            {/* Left Column - Contact Information */}
            <div className="p-8 md:p-10 bg-tertiary">
              <div className="space-y-8">
                {content.contactInfo.map((item, index) => {
                  const IconComponent =
                    item.icon === "Phone"
                      ? Phone
                      : item.icon === "Mail"
                      ? Mail
                      : item.icon === "Share2"
                      ? Share2
                      : Phone;

                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-primary mb-2">
                          {item.title}
                        </h3>
                        {item.content && (
                          <p
                            className={`${
                              item.title === "Call Us"
                                ? "text-xl font-bold"
                                : "text-lg"
                            } text-black`}
                          >
                            {item.content}
                          </p>
                        )}
                        {item.socialLinks && (
                          <div className="flex gap-3">
                            {item.socialLinks.map((social, socialIndex) => {
                              const SocialIcon =
                                social.icon === "Facebook"
                                  ? Facebook
                                  : social.icon === "Linkedin"
                                  ? Linkedin
                                  : Facebook;

                              return (
                                <a
                                  key={socialIndex}
                                  href={social.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="w-10 h-10 bg-transparent border-1 border-black hover:bg-gray-100 flex items-center justify-center text-black transition-colors duration-300"
                                  aria-label={social.ariaLabel}
                                >
                                  <SocialIcon className="w-5 h-5" />
                                </a>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-tertiary p-8 md:p-10">
              <div className="relative p-6 md:p-8 bg-white rounded-2xl shadow-sm border border-primary/10 overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 tech-accent-bar" aria-hidden />
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      aria-invalid={!!fieldErrors.fullName}
                      aria-describedby={fieldErrors.fullName ? "fullName-error" : undefined}
                      className={`w-full px-4 py-3.5 border-2 rounded-xl bg-white text-slate-800 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-shadow disabled:opacity-70 ${
                        fieldErrors.fullName ? "border-red-500" : "border-primary/20"
                      }`}
                      placeholder="Full Name*"
                    />
                    {fieldErrors.fullName && (
                      <p id="fullName-error" className="mt-1 text-sm text-red-600">{fieldErrors.fullName}</p>
                    )}
                  </div>

                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      aria-invalid={!!fieldErrors.phone}
                      className={`w-full px-4 py-3.5 border-2 rounded-xl bg-white text-slate-800 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-shadow disabled:opacity-70 ${
                        fieldErrors.phone ? "border-red-500" : "border-primary/20"
                      }`}
                      placeholder="Phone Number*"
                    />
                    {fieldErrors.phone && (
                      <p className="mt-1 text-sm text-red-600">{fieldErrors.phone}</p>
                    )}
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      aria-invalid={!!fieldErrors.email}
                      className={`w-full px-4 py-3.5 border-2 rounded-xl bg-white text-slate-800 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-shadow disabled:opacity-70 ${
                        fieldErrors.email ? "border-red-500" : "border-primary/20"
                      }`}
                      placeholder="Email*"
                    />
                    {fieldErrors.email && (
                      <p className="mt-1 text-sm text-red-600">{fieldErrors.email}</p>
                    )}
                  </div>

                  <div>
                    <textarea
                      name="comments"
                      value={formData.comments}
                      onChange={handleChange}
                      rows={4}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3.5 border-2 border-primary/20 rounded-xl bg-white text-slate-800 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-shadow resize-none disabled:opacity-70"
                      placeholder="Additional Comments"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-secondary text-white hover:text-primary font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-lg active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" aria-hidden />
                        Sending...
                      </>
                    ) : (
                      "SUBMIT"
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ReachOutSection />
    </div>
  );
}
