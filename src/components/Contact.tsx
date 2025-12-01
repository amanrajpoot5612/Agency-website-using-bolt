import React, { useState } from "react";
import { backend_uri } from "../config/config.js";
import { Send, AlertCircle, CheckCircle } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation.js";
import CountryCodePicker from "../ui/ConutryCode.js";

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
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

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
    setStatus("loading");
    setError("");

    try {
      const apiURL = `${backend_uri}/schedule-consultation`;
      const response = await fetch(apiURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unknown error");
      }

      console.log("data", data);
      

      setStatus("success");

      // setFormData({
      //   name: "",
      //   email: "",
      //   phone: "",
      //   projectType: "",
      //   budget: "",
      //   timeline: "",
      //   message: "",
      // });

      setTimeout(() => {
        setStatus("idle");
      }, 4000);
    } catch (err) {
      setStatus("error");
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong");
      }
      setTimeout(() => {
        setStatus("idle");
      }, 4000);
    }
  };
  return (
    <section
      ref={ref}
      id="contact"
      className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-20"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`mb-12 transition-all duration-700 ${
            isVisible ? "animate-fadeInUp" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-black">Get In</span>
            <span className="text-amber-800"> Touch</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Ready to start your next project? Let's talk about your ideas and
            how we can help bring them to life.
          </p>
        </div>

        <div
          className={`bg-white rounded-xl border border-gray-200 p-8 sm:p-12 transition-all duration-700 ${
            isVisible ? "animate-fadeInUp" : "opacity-0"
          }`}
          style={{ animationDelay: "0.2s" }}
        >
          {status === "success" && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-green-900">Message Sent!</h3>
                <p className="text-green-700 text-sm">
                  We'll get back to you as soon as possible.
                </p>
              </div>
            </div>
          )}

          {status === "error" && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-red-900">Error</h3>
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-800 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-800 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
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
              </div>
              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-800 transition-colors"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  Project Type
                </label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-800 transition-colors"
                >
                  <option value="" selected disabled>Select a project type</option>
                  <option value="basic-webiste">Basic Website</option>
                  <option value="business-website">Business Website</option>
                  <option value="landing-page">Landing Website</option>
                  <option value="e-commerce">E-Commerce</option>
                  <option value="web-application">Web Application</option>
                  <option value="saas-platform">SaaS Platform</option>
                  <option value="mobile-apps">Mobile App</option>
                  <option value="custom-solution">Custom Solution ( Not Sure)</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  Budget Range
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-800 transition-colors"
                >
                  <option value="" disabled selected>Select budget range</option>
                  <option value="$49 - $299">$49 - $299</option>
                  <option value="$300 - $999">$300 - $999</option>
                  <option value="$1,000 - $9,999">$1,000 - $9,999</option>
                  <option value="$10,000 - $29,999">$10,000 - $29,999</option>
                  <option value="$30,000 - $49,999">$30,000 - $49,999</option>
                  <option value="$50,000+">$50,000+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  Timeline
                </label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-800 transition-colors"
                >
                  <option value="" disabled selected>Select timeline</option>
                  <option value="ASAP">ASAP</option>
                  <option value="1-4 weeks">1-4 weeks</option>
                  <option value="1-3 months">1-3 months</option>
                  <option value="3-6 months">3-6 months</option>
                  <option value="6+ months">6+ months</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-black mb-2">
                Project Details
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-800 transition-colors resize-none"
                placeholder="Tell us about your project, goals, and any specific requirements..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-black text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
