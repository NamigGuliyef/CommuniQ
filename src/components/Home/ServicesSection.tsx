import portugalArchitecture from "@/assets/portugal-architecture.jpg";
import universityLisbon from "@/assets/university-lisbon.jpg";
import universityNova from "@/assets/university-nova.jpg";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";
import {
  Building,
  CheckCircle,
  CreditCard,
  FileText,
  GraduationCap,
  Heart,
  Home,
  MapPin,
  Scale,
  TrendingUp,
  Users,
} from "lucide-react";
import { useState } from "react";
import ServiceModal from "../ServiceModal";
import { Button } from "../ui/button";

import campus from "@/assets/campus.jpeg";
import carnival from "@/assets/Carnival.jpg";
import tasis from "@/assets/TASIS.jpg";

const ServicesSection = ({ cartStyle }: { cartStyle: 1 | 2 }) => {
  const { t } = useLanguage();
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [modalId, setModalId] = useState(null);

  const getDetailedContent = (index: number) => {
    switch (index) {
      case 0:
        return (
          <div className="space-y-6">
            {/* TOP SECTION */}
            <h4 className="font-semibold text-lg">{t("education.title2")}</h4>
            <div className="space-y-6">
              {/* ------------- ROW 1: St. Julian’s ------------- */}
              <div className="grid grid-cols-2 gap-6 items-start">
                <div className="space-y-4">
                  <ul className="space-y-2 text-sm leading-relaxed">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-portugal-gold mt-0.5 flex-shrink-0" />
                      <span>{t("education.school1name")}</span>
                    </li>
                  </ul>
                </div>

                <img
                  src={campus}
                  className="w-full h-24 object-cover rounded"
                  alt="St. Julian’s School"
                />
              </div>

              {/* ------------- ROW 2: CAISL ------------- */}
              <div className="grid grid-cols-2 gap-6 items-start">
                <div className="space-y-2 text-sm leading-relaxed">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-portugal-gold mt-0.5 flex-shrink-0" />
                    <span>{t("education.school2name")}</span>
                  </li>
                </div>

                <img
                  src={tasis}
                  className="w-full h-24 object-cover rounded"
                  alt="CAISL"
                />
              </div>

              {/* ------------- ROW 3: Oporto British School ------------- */}
              <div className="grid grid-cols-2 gap-6 items-start">
                <div className="space-y-2 text-sm leading-relaxed">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-portugal-gold mt-0.5 flex-shrink-0" />
                    <span>{t("education.school3name")}</span>
                  </li>
                </div>

                <img
                  src={carnival}
                  className="w-full h-24 object-cover rounded"
                  alt="Oporto British School"
                />
              </div>

              {/* ------------- SECOND TITLE + LIST ------------- */}
              <div>
                <h4 className="font-semibold text-lg mt-6 mb-4">
                  {t("education.schoolsoffertitle")}
                </h4>

                <ul className="space-y-4 text-sm leading-relaxed">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-portugal-gold mt-0.5 flex-shrink-0" />
                    <span>{t("education.schoolsoffer1")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-portugal-gold mt-0.5 flex-shrink-0" />
                    <span>{t("education.schoolsoffer2")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-portugal-gold mt-0.5 flex-shrink-0" />
                    <span>{t("education.schoolsoffer3")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-portugal-gold mt-0.5 flex-shrink-0" />
                    <span>{t("education.schoolsoffer4")}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-8">
            {/* PAGE TITLE */}
            <h3 className="text-center font-semibold text-xl text-foreground">
              {t("health.title2")}
            </h3>

            {/* CONTENT BLOCK */}
            <div className="space-y-8">
              {/* SECTION 1 – TOP PRIVATE HOSPITAL NETWORKS */}
              <div className="space-y-4">
                <h4 className="font-semibold text-lg text-foreground">
                  {t("health.subtitle2")}
                </h4>

                <ul className="space-y-3 text-sm leading-relaxed">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-portugal-gold mt-0.5 flex-shrink-0" />
                    <span>
                      <strong> {t("health.hosp1name")}</strong> -{" "}
                      {t("health.hosp1desc")}
                    </span>
                  </li>

                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-portugal-gold mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>{t("health.hosp2name")}</strong> –{" "}
                      {t("health.hosp2desc")}
                    </span>
                  </li>

                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-portugal-gold mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>{t("health.hosp3name")}</strong> –{" "}
                      {t("health.hosp3desc")}
                    </span>
                  </li>
                </ul>
              </div>

              {/* SECTION 2 – TRUSTED, AFFORDABLE, AND FAST */}
              <div className="space-y-4">
                <h4 className="font-semibold text-lg text-foreground">
                  {t("health.service")}
                </h4>

                <ul className="space-y-3 text-sm leading-relaxed">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-portugal-gold mt-0.5 flex-shrink-0" />
                    <span>{t("health.service1")}</span>
                  </li>

                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-portugal-gold mt-0.5 flex-shrink-0" />
                    <span>{t("health.service2")}</span>
                  </li>

                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-portugal-gold mt-0.5 flex-shrink-0" />
                    <span>{t("health.service3")}</span>
                  </li>

                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-portugal-gold mt-0.5 flex-shrink-0" />
                    <span>{t("health.service4")}</span>
                  </li>

                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-portugal-gold mt-0.5 flex-shrink-0" />
                    <span>{t("health.service5")}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-8">
            {/* ==== BULLET LIST SECTION ==== */}
            <div className="space-y-2">
              <ul className="space-y-2 text-sm leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-portugal-gold mt-1.5 text-base">•</span>
                  <span>{t("service.loan.service1")}</span>
                </li>

                <li className="flex items-start gap-2">
                  <span className="text-portugal-gold mt-1.5 text-base">•</span>
                  <span>{t("service.loan.service2")}</span>
                </li>

                <li className="flex items-start gap-2">
                  <span className="text-portugal-gold mt-1.5 text-base">•</span>
                  <span>{t("service.loan.service3")}</span>
                </li>

                <li className="flex items-start gap-2">
                  <span className="text-portugal-gold mt-1.5 text-base">•</span>
                  <span>{t("service.loan.service4")}</span>
                </li>

                <li className="flex items-start gap-2">
                  <span className="text-portugal-gold mt-1.5 text-base">•</span>
                  <span>{t("service.loan.service5")}</span>
                </li>
              </ul>
            </div>

            {/* ==== TOP TEXT SECTION ==== */}
            <div className="space-y-4">
              <h3 className="font-semibold text-xl text-foreground">
                {t("service.loan.business")} {/* Biznes Sahibləri üçün */}
              </h3>

              <p className="text-sm leading-relaxed text-muted-foreground">
                {t("service.loan.businessdesc")}
                {/* Portuqaliyada daşınmaz əmlak sahibi olmaq... */}
              </p>

              <h4 className="font-semibold text-lg text-foreground">
                {t("service.loan.whytitle")}
                {/* Niyə bu vacibdir? */}
              </h4>

              <p className="text-sm leading-relaxed text-muted-foreground">
                {t("service.loan.whydesc")}
                {/* Əksər müştərilər düşünür ki... */}
              </p>

            </div>
          </div>
        );

      default:
        return (
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-portugal-gold" />
              <span className="font-medium">
                Expert consultation and guidance
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-portugal-gold" />
              <span className="font-medium">Personalized service approach</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-portugal-gold" />
              <span className="font-medium">
                End-to-end support throughout the process
              </span>
            </div>
          </div>
        );
    }
  };

  const services = [
    {
      icon: GraduationCap,
      title: t("service.education"),
      description: t("education.subtitle"),
    },
    {
      icon: Heart,
      title: t("health.title"),
      description: t("health.subtitle"),
    },
    {
      icon: CreditCard,
      title: t("service.loan.title"),
      description: t("service.loan.subtitle"),
    },
    {
      icon: Building,
      title: t("service.bankacc"),
      description:
        "Account opening process, bank connections, ready in 5-7 days",
    },
    {
      icon: Home,
      title: t("service.realestate"),
      description:
        "Golden Visa eligible properties, regions (Lisbon, Porto, Algarve), complete process steps",
    },
    {
      icon: TrendingUp,
      title: t("service.investment"),
      description: "Government-approved funds, advantages, investment types",
    },
    {
      icon: Scale,
      title: t("service.structuring"),
      description:
        "Company registration, tax optimization, Golden Visa eligible business structure",
    },
    {
      icon: FileText,
      title: t("service.legalconsular"),
      description:
        "Document preparation, translation, AIMA/consular procedures",
    },
    {
      icon: Users,
      title: t("service.community"),
      description: "Expat networks, business and family support",
    },
    {
      icon: MapPin,
      title: t("service.tour"),
      description:
        "3-5 day tour, property viewings, school/clinic visits, meetings",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-background to-tile-cream"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            {t("services.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("services.subtitle")}
          </p>
        </div>
        <ServiceModal
          isOpen={modalId === 0 || Boolean(modalId)}
          onClose={() => setModalId(null)}
          universities={[
            {
              title: "University of Lisbon",
              description: "Ranked #262 in QS 2025",
            },
            {
              title: "NOVA University Lisbon",
              description: "Featured in QS Top 50 Under 50",
            },
          ]}
          universityImages={[
            { src: universityLisbon, alt: "University of Lisbon" },
            { src: universityNova, alt: "NOVA University" },
          ]}
          quote="One of the most welcoming societies for immigrants"
          quoteSource="European Social Survey, 2022"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isExpanded = expandedCard === index;
            return (
              <Card
                key={index}
                className={`relative transition-all duration-500 ease-out border-0 bg-gradient-to-br from-card via-card to-card/90 shadow-lg cursor-pointer transform-gpu ${
                  isExpanded ? "z-20" : "hover:shadow-xl hover:scale-[1.02]"
                }`}
                onMouseEnter={() => setExpandedCard(index)}
                onMouseLeave={() => setExpandedCard(null)}
                style={{ minHeight: "200px" }}
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-primary via-ocean to-primary/80 rounded-xl flex items-center justify-center mb-4 shadow-lg transition-shadow duration-300">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle
                    className={`text-xl transition-colors duration-300 ${
                      isExpanded ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
                {cartStyle === 2 && (
                  <Button
                    variant="link"
                    className="my-2"
                    onClick={() => setModalId(index)}
                  >
                    Show more
                  </Button>
                )}
                {cartStyle === 1 && (
                  <div
                    className={`absolute inset-0 transition-all duration-500 ease-out overflow-y-auto rounded-xl bg-gradient-to-br from-tile-cream/95 to-background/95 p-6 ${
                      isExpanded
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 pointer-events-none translate-y-4"
                    }`}
                  >
                    {getDetailedContent(index)}
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
