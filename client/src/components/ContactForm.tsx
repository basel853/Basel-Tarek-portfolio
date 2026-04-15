import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { toast } from "sonner";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Create mailto link with form data
      const mailtoLink = `mailto:baseltarek226@gmail.com?subject=${encodeURIComponent(
        `New Message from ${formData.name}: ${formData.subject}`
      )}&body=${encodeURIComponent(
        `From: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;

      // Open default email client
      window.location.href = mailtoLink;

      // Show success message
      toast.success("Opening your email client...");
      setSubmitted(true);

      // Reset form after 2 seconds
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setSubmitted(false);
      }, 2000);
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="John Doe"
            className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="your.email@example.com"
            className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
          />
        </div>

        {/* Subject Field */}
        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            placeholder="Project Inquiry"
            className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
          />
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Tell me about your project or inquiry..."
            rows={5}
            className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors resize-none"
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          size="lg"
          disabled={loading || submitted}
          className="w-full"
        >
          {loading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
          {submitted && <CheckCircle className="w-4 h-4 mr-2" />}
          {!loading && !submitted && <Mail className="w-4 h-4 mr-2" />}
          {loading ? "Sending..." : submitted ? "Message Ready!" : "Send Message"}
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          Your default email client will open with your message pre-filled. Simply click send to contact me.
        </p>
      </form>

      {/* Contact Info Cards */}
      <div className="grid md:grid-cols-2 gap-4 mt-8">
        <div className="bg-card p-4 rounded-lg border border-border hover:border-primary/50 transition-colors">
          <div className="flex items-center gap-3">
            <Mail className="w-6 h-6 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <a href="mailto:baseltarek226@gmail.com" className="font-semibold hover:text-primary transition-colors">
                baseltarek226@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="bg-card p-4 rounded-lg border border-border hover:border-primary/50 transition-colors">
          <div className="flex items-center gap-3">
            <Phone className="w-6 h-6 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Phone Number</p>
              <a href="tel:+201025813806" className="font-semibold hover:text-primary transition-colors">
                +20 102-581-3806
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
