// Updated ServiceModal with reusable props
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useLanguage } from '@/hooks/useLanguage';
import { Star } from 'lucide-react';

interface UniversityItem {
  title: string;
  description: string;
}

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  universities: UniversityItem[];
  universityImages: { src: string; alt: string }[];
  quote?: string;
  quoteSource?: string;
}

const ServiceModal = ({
  isOpen,
  onClose,
  universities,
  universityImages,
  quote,
  quoteSource,
}: ServiceModalProps) => {
  const { t } = useLanguage();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="relative">
          <div className="flex items-start justify-between">
            <div>
              <DialogTitle className="text-2xl md:text-3xl font-bold text-primary mb-2">
                Service Information
              </DialogTitle>
              <DialogDescription className="text-lg text-muted-foreground">
                Discover the perfect visa option for your Portuguese adventure. Expert guidance every step of the way.
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-8 mt-6">
          {/* Universities Section */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Text List */}
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Universities:</h4>

                <ul className="space-y-2 text-sm">
                  {universities.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-portugal-gold mt-0.5 flex-shrink-0" />
                      <span>
                        {item.title} - {item.description}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Images */}
              <div className="space-y-2">
                {universityImages.map((img, index) => (
                  <img
                    key={index}
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-20 object-cover rounded-lg"
                  />
                ))}
              </div>
            </div>

            {(quote || quoteSource) && (
              <div className="bg-tile-cream p-3 rounded-lg">
                {quote && (
                  <p className="text-sm italic text-center text-muted-foreground">"{quote}"</p>
                )}
                {quoteSource && (
                  <p className="text-xs text-center text-muted-foreground mt-1">{quoteSource}</p>
                )}
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceModal;
