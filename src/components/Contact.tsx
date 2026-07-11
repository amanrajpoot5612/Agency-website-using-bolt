import React, { useState } from "react";
import { Send, AlertCircle, CheckCircle } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation.js";
import { useLeadSubmission } from "../hooks/useLeadSubmission";

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  });
  const { status, error, submit } = useLeadSubmission();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (await submit(formData)) {
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        budget: "",
        timeline: "",
        message: "",
      });

    }
  };
  return (
    <section
      ref={ref}
      id="contact"
      className="min-h-screen bg-gradient-to-b from-navy-950 to-navy-900 py-20"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`mb-12 transition-all duration-700 ${
            isVisible ? "animate-fadeInUp" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-white">Get In</span>
            <span className="text-cyan-400"> Touch</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Ready to start your next project? Let's talk about your ideas and
            how we can help bring them to life.
          </p>
        </div>

        <div
          className={`bg-navy-900 rounded-xl border border-cyan-400/30 p-8 sm:p-12 transition-all duration-700 ${
            isVisible ? "animate-fadeInUp" : "opacity-0"
          }`}
          style={{ animationDelay: "0.2s" }}
        >
          {status === "success" && (
            <div className="mb-6 p-4 bg-green-900/30 border border-green-500/50 rounded-lg flex gap-3" aria-live="polite">
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-green-300">Message Sent!</h3>
                <p className="text-green-300 text-sm">
                  Thanks for reaching out — we'll reply within one business day.
                </p>
              </div>
            </div>
          )}

          {status === "error" && (
            <div className="mb-6 p-4 bg-red-900/30 border border-red-500/50 rounded-lg flex gap-3" aria-live="assertive">
              <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-red-300">Error</h3>
                <p className="text-red-300 text-sm">{error}</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="home-name" className="block text-sm font-semibold text-white mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="home-name"
                  autoComplete="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-cyan-400/30 rounded-lg bg-navy-950 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="home-email" className="block text-sm font-semibold text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="home-email"
                  autoComplete="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-cyan-400/30 rounded-lg bg-navy-950 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  Country Code
                </label>
                <CountryCodePicker></CountryCodePicker>
                <input
                  type=""
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-800 transition-colors"
                  placeholder="Your phone number"
                />
              </div> */}
              <div>
                <label htmlFor="home-phone" className="block text-sm font-semibold text-white mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="home-phone"
                  autoComplete="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-cyan-400/30 rounded-lg bg-navy-950 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label htmlFor="home-project-type" className="block text-sm font-semibold text-white mb-2">
                  Project Type
                </label>
                <select
                  name="projectType"
                  id="home-project-type"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-cyan-400/30 rounded-lg bg-navy-950 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                >
                  <option value="" disabled>Select a project type</option>
                  <option value="basic-website">Basic Website</option>
                  <option value="business-website">Business Website</option>
                  <option value="landing-page">Landing Page</option>
                  <option value="e-commerce">E-Commerce</option>
                  <option value="web-application">Web Application</option>
                  <option value="saas-platform">SaaS Platform</option>
                  <option value="mobile-app">Mobile App</option>
                  <option value="custom-solution">Custom Solution</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="home-budget" className="block text-sm font-semibold text-white mb-2">
                  Budget Range
                </label>
                <select
                  name="budget"
                  id="home-budget"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-cyan-400/30 rounded-lg bg-navy-950 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                >
                  <option value="" disabled>Select budget range</option>
                  <option value="₹8,000 - ₹15,000">₹8,000 - ₹15,000</option>
                  <option value="₹18,000 - ₹35,000">₹18,000 - ₹35,000</option>
                  <option value="₹25,000 - ₹80,000">₹25,000 - ₹80,000</option>
                  <option value="₹80,000+">₹80,000+</option>
                </select>
              </div>
              <div>
                <label htmlFor="home-timeline" className="block text-sm font-semibold text-white mb-2">
                  Timeline
                </label>
                <select
                  name="timeline"
                  id="home-timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-cyan-400/30 rounded-lg bg-navy-950 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                >
                  <option value="" disabled>Select timeline</option>
                  <option value="ASAP">ASAP</option>
                  <option value="1-4 weeks">1-4 weeks</option>
                  <option value="1-3 months">1-3 months</option>
                  <option value="3-6 months">3-6 months</option>
                  <option value="6+ months">6+ months</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="home-message" className="block text-sm font-semibold text-white mb-2">
                Project Details
              </label>
              <textarea
                name="message"
                id="home-message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2 border border-cyan-400/30 rounded-lg bg-navy-950 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                placeholder="Tell us about your project, goals, and any specific requirements..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-cyan-400 text-navy-950 py-3 px-6 rounded-lg font-semibold hover:bg-cyan-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {status === "loading" ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export { Contact };
