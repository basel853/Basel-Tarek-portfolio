import { X, Mail, Phone, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "email" | "phone" | "kaggle";
}

export default function ContactModal({ isOpen, onClose, type }: ContactModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-card border border-border rounded-lg p-8 max-w-md w-full mx-4 shadow-lg">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 hover:bg-secondary rounded-lg transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {type === "email" ? (
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Mail className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold">Send Me an Email</h3>
            </div>

            <div className="space-y-3">
              <p className="text-muted-foreground">
                You can reach me at:
              </p>
              <a
                href="mailto:baseltarek226@gmail.com"
                className="block p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
              >
                <p className="font-semibold text-primary">baseltarek226@gmail.com</p>
              </a>
            </div>

            <div className="space-y-3">
              <p className="text-sm text-muted-foreground mb-3">
                Or download my CV to learn more about my experience:
              </p>
              <div className="flex gap-2">
                <a href="/Basel_Tarek_Osman_CV.docx" download className="flex-1">
                  <Button size="sm" variant="outline" className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    CV (Word)
                  </Button>
                </a>
                <a href="/Basel_Tarek_Osman_ATS_CV.pdf" target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button size="sm" variant="outline" className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    CV (PDF)
                  </Button>
                </a>
              </div>
            </div>

            <Button
              onClick={onClose}
              className="w-full"
            >
              Close
            </Button>
          </div>
        ) : type === "phone" ? (
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Phone className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold">Call Me</h3>
            </div>

            <div className="space-y-3">
              <p className="text-muted-foreground">
                You can reach me by phone at:
              </p>
              <a
                href="tel:+201025813806"
                className="block p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
              >
                <p className="font-semibold text-primary text-lg">+20 102-581-3806</p>
              </a>
            </div>

            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Available for calls and WhatsApp messages
              </p>
            </div>

            <Button
              onClick={onClose}
              className="w-full"
            >
              Close
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.825 23.859c-.022.137-.207.274-.348.274h-2.882c-.348 0-.555-.348-.555-.829V.829C14.04.348 14.247 0 14.595 0h2.882c.141 0 .326.137.348.274.274 1.781.829 5.378 2.329 8.395 1.5 3.017 4.379 6.209 6.708 8.395-2.329 2.186-5.208 5.378-6.708 8.395-1.5 3.017-2.055 6.614-2.329 8.395z"/>
              </svg>
              <h3 className="text-2xl font-bold">Visit Kaggle</h3>
            </div>

            <div className="space-y-3">
              <p className="text-muted-foreground">
                Check out my Kaggle profile:
              </p>
              <a
                href="https://www.kaggle.com/baseltarek"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
              >
                <p className="font-semibold text-primary">kaggle.com/baseltarek</p>
                <p className="text-xs text-muted-foreground mt-1">Kaggle Expert - Data Science & ML</p>
              </a>
            </div>

            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">
                View my competitions, datasets, and notebooks on Kaggle.
              </p>
            </div>

            <Button
              onClick={onClose}
              className="w-full"
            >
              Close
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
