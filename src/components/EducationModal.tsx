import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useLanguage } from '@/hooks/useLanguage';
import { Building, Clock, GraduationCap, Heart, Plane, Star, Users } from 'lucide-react';

interface EducationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EducationModal = ({ isOpen, onClose }: EducationModalProps) => {
  const { t } = useLanguage();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="relative">
          <div className="flex items-start justify-between">
            <div>
              <DialogTitle className="text-2xl md:text-3xl font-bold text-primary mb-2">
                Education Information
              </DialogTitle>
              <DialogDescription className="text-lg text-muted-foreground">
                Discover the perfect visa option for your Portuguese adventure. Expert guidance every step of the way.
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6 mt-6">
          {/* Why Portugal Section */}
          <div className="bg-gradient-to-r from-tile-cream to-background p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <Heart className="w-5 h-5 text-portugal-gold" />
              Why Choose Portugal?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                <Badge variant="secondary">🏆 7th Safest Country</Badge>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">🌍 EU Citizenship</Badge>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">💰 Tax Benefits</Badge>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary to-ocean p-6 rounded-xl text-white text-center">
            <h3 className="text-xl font-semibold mb-2">Ready to Start Your Portugal Journey?</h3>
            <p className="text-white/90 mb-4">Get personalized guidance from our visa experts</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                variant="secondary"
                size="lg"
                onClick={() => {
                  onClose();
                  window.location.href = '/contact';
                }}
                className="bg-white text-primary hover:bg-white/90"
              >
                <GraduationCap className="w-4 h-4 mr-2" />
                Get Free Consultation
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
                onClick={() => {
                  onClose();
                  window.location.href = '/visas';
                }}
              >
                Explore All Visas
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EducationModal;
