// Updated ServiceModal with reusable props
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog';

interface UniversityItem {
  title: string;
  description: string;
}

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
}

const ServiceModal = ({
  isOpen,
  onClose,
  title,
  content
}: ServiceModalProps) => {

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="relative">
          <div className="flex items-start justify-between">
            <div>
              <DialogTitle className="text-2xl md:text-3xl font-bold text-primary mb-2">
                {title}
              </DialogTitle>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-8 mt-6">
          {content}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceModal;
