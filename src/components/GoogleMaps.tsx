import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';

const GoogleMaps = () => {
   const { t } = useLanguage();
  const offices = [
    {
      name: 'CommuniQ Baku Office',
      address: t("contact.address"),
      coordinates: "40.4167399045736,49.96008263956357",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d16572.678835046096!2d49.96008263956357!3d40.4167399045736!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403063002cba98d9:0x5e052f5a3eb634c6!2sMcDonald's (McCafe/McAuto)!5e1!3m2!1str!2saz!4v1763998643845!5m2!1str!2saz"
    }
  ];

  const openInMaps = (coordinates: string) => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${coordinates}`, '_blank');
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-foreground mb-2">{t("contact.ourlocation")}</h3>
        <p className="text-muted-foreground">{t("contact.ourvisit")}</p>
      </div>

      {offices.map((office, index) => (
        <Card key={index} className="overflow-hidden">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              {office.name}
            </CardTitle>
            <p className="text-sm text-muted-foreground">{office.address}</p>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="aspect-video w-full rounded-lg overflow-hidden">
              <iframe
                src={office.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Map of ${office.name}`}
              />
            </div>

            <Button
              onClick={() => openInMaps(office.coordinates)}
              className="w-full"
              variant="outline"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
         {t("contact.googlemaps")}
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default GoogleMaps;
