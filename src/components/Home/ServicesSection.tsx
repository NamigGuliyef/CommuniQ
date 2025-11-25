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
import banking from "@/assets/Individual_Corporate_Banking_Setup.png";
import investment from "@/assets/investment_special.png";



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

      case 3:
        return (
          <div className="space-y-10">

            {/* ==== BUSINESS OWNERS SECTION ==== */}
            <div className="space-y-4">

              <h4 className="font-semibold text-lg text-foreground">
                {t("service.business.difference.title")}
              </h4>

              <ul className="space-y-2 text-sm leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-portugal-gold text-lg leading-none">•</span>
                  <span>{t("service.business.difference.point1")}</span>
                </li>

                <li className="flex items-start gap-2">
                  <span className="text-portugal-gold text-lg leading-none">•</span>
                  <span>{t("service.business.difference.point2")}</span>
                </li>

                <li className="flex items-start gap-2">
                  <span className="text-portugal-gold text-lg leading-none">•</span>
                  <span>{t("service.business.difference.point3")}</span>
                </li>

                <li className="flex items-start gap-2">
                  <span className="text-portugal-gold text-lg leading-none">•</span>
                  <span>{t("service.business.difference.point4")}</span>
                </li>
              </ul>
            </div>

            {/* ==== REAL ESTATE BUYERS SECTION ==== */}
            <div className="space-y-4">
              <h3 className="font-bold text-xl text-foreground">
                {t("service.business.storytitle")}
              </h3>

              <ul className="space-y-2 text-sm leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-portugal-gold text-lg leading-none">•</span>
                  <span>{t("service.business.story.point1")}</span>
                </li>

                <li className="flex items-start gap-2">
                  <span className="text-portugal-gold text-lg leading-none">•</span>
                  <span>{t("service.business.story.point2")}</span>
                </li>

                <li className="flex items-start gap-2">
                  <span className="text-portugal-gold text-lg leading-none">•</span>
                  <span>{t("service.business.story.point3")}</span>
                </li>
              </ul>
            </div>

          </div>
        );


      case 4:

        return (
          <div className="space-y-10">

            {/* ==== TOP IMAGE SECTION (şəkildəki şahmat blokları) ==== */}
            <div className="w-full flex justify-center">
              <img
                src={banking}
                alt="Banking Setup"
                className="max-w-xs w-90 h-32 rounded-md"
              />
            </div>


            {/* ==== WHY IT MATTERS SECTION ==== */}
            <div className="space-y-4">

              <ul className="space-y-2 text-sm leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-portugal-gold text-lg leading-none">•</span>
                  <span>{t("service.bankacc.step1")}</span>
                </li>

                <li className="flex items-start gap-2">
                  <span className="text-portugal-gold text-lg leading-none">•</span>
                  <span>{t("service.bankacc.step2")}</span>
                </li>

                <li className="flex items-start gap-2">
                  <span className="text-portugal-gold text-lg leading-none">•</span>
                  <span>{t("service.bankacc.step3")}</span>
                </li>

                <li className="flex items-start gap-2">
                  <span className="text-portugal-gold text-lg leading-none">•</span>
                  <span>{t("service.bankacc.step4")}</span>
                </li>
              </ul>
            </div>

            {/* ==== WHAT WE OFFER SECTION ==== */}
            <div className="space-y-4">
              <h3 className="font-bold text-xl text-foreground">
                {t("service.bankacc.offer.title")} {/* Individual Accounts – What We Offer */}
              </h3>

              <ul className="space-y-2 text-sm leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-portugal-gold text-lg leading-none">•</span>
                  <span>{t("service.bankacc.offerstep1")}</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-portugal-gold text-lg leading-none">•</span>
                  <span>{t("service.bankacc.offerstep2")}</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-portugal-gold text-lg leading-none">•</span>
                  <span>{t("service.bankacc.offerstep3")}</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-portugal-gold text-lg leading-none">•</span>
                  <span>{t("service.bankacc.offerstep4")}</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-portugal-gold text-lg leading-none">•</span>
                  <span>{t("service.bankacc.offerstep5")}</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-portugal-gold text-lg leading-none">•</span>
                  <span>{t("service.bankacc.offerstep6")}</span>
                </li>
              </ul>
            </div>

          </div>
        );

      case 5:
        return (
          <div className="space-y-10">

            {/* ==== TOP TITLE ==== */}
            <h2 className="text-2xl font-bold text-[#1A4A2E] text-center">
              {t("service.realestate.title2")} {/* Real Estate Guidance */}
            </h2>

            {/* ==== WHY REAL ESTATE SECTION ==== */}
            <div className="space-y-4">

              <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-portugal-gold text-lg leading-none">•</span>
                  <span>{t("service.realestate.point1")}</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-portugal-gold text-lg leading-none">•</span>
                  <span>{t("service.realestate.point2")}</span>
                </li>
              </ul>
            </div>

            {/* ==== SECTION TITLE 2 (What we help you do?) ==== */}
            <h3 className="font-semibold text-lg text-foreground">
              {t("service.realestate.offer.title")}
            </h3>

            {/* ==== WE HELP YOU SECTION ==== */}
            <div className="space-y-2 text-sm leading-relaxed text-muted-foreground">
              <ul className="space-y-2">

                <li className="flex items-start gap-3">
                  <span className="text-portugal-gold text-lg leading-none">•</span>
                  <span>{t("service.realestate.offerstep1")}</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-portugal-gold text-lg leading-none">•</span>
                  <span>{t("service.realestate.offerstep2")}</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-portugal-gold text-lg leading-none">•</span>
                  <span>{t("service.realestate.offerstep3")}</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-portugal-gold text-lg leading-none">•</span>
                  <span>{t("service.realestate.offerstep4")}</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-portugal-gold text-lg leading-none">•</span>
                  <span>{t("service.realestate.offerstep5")}</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-portugal-gold text-lg leading-none">•</span>
                  <span>{t("service.realestate.offerstep6")}</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-portugal-gold text-lg leading-none">•</span>
                  <span>{t("service.realestate.offerstep7")}</span>
                </li>

              </ul>
            </div>

          </div>
        );

      case 6:
        return (
          <div className="space-y-10">



            {/* ==== WHY FUND-BASED SECTION ==== */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg text-foreground">
                {t("service.investment.special.question")} {/* Why fund-based Golden Visa investments? */}
              </h3>

              <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-portugal-gold text-lg leading-none">•</span>
                  <span>{t("service.investment.special.point1")}</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-portugal-gold text-lg leading-none">•</span>
                  <span>{t("service.investment.special.point2")}</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-portugal-gold text-lg leading-none">•</span>
                  <span>{t("service.investment.special.point3")}</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-portugal-gold text-lg leading-none">•</span>
                  <span>{t("service.investment.special.point4")}</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-portugal-gold text-lg leading-none">•</span>
                  <span>{t("service.investment.special.point5")}</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-portugal-gold text-lg leading-none">•</span>
                  <span>{t("service.investment.special.point6")}</span>
                </li>
              </ul>
            </div>

            {/* ==== RIGHT-SIDE IMAGE BLOCK (kitab şəkilləri) ==== */}
            <div className="w-full flex justify-end pr-4">
              <img
                src={investment}
                alt="Investment Visual"
                className=" "
              />
            </div>

            {/* ==== TOP BENEFITS SECTION ==== */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg text-foreground">
                {t("service.investment.special.benefit.title")} {/* Top Benefits */}
              </h3>

              <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-portugal-gold text-lg leading-none">•</span>
                  <span>{t("service.investment.special.benefit1")}</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-portugal-gold text-lg leading-none">•</span>
                  <span>{t("service.investment.special.benefit2")}</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-portugal-gold text-lg leading-none">•</span>
                  <span>{t("service.investment.special.benefit3")}</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-portugal-gold text-lg leading-none">•</span>
                  <span>{t("service.investment.special.benefit4")}</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-portugal-gold text-lg leading-none">•</span>
                  <span>{t("service.investment.special.benefit5")}</span>
                </li>
              </ul>
            </div>

          </div>
        );

      case 7:

        return (
          <div className="space-y-10">

       
            {/* ==== WHAT WE OFFER SECTION ==== */}
            <h3 className="font-semibold text-lg text-foreground">
              {t("service.corporate.offer")} {/* What We Offer? */}
            </h3>

            <div className="space-y-4">
              <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">

                <li className="flex items-start gap-3">
                  <span className="text-portugal-gold text-lg leading-none">•</span>
                  <span>{t("service.corporate.offerstep1")}</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-portugal-gold text-lg leading-none">•</span>
                  <span>{t("service.corporate.offerstep2")}</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-portugal-gold text-lg leading-none">•</span>
                  <span>{t("service.corporate.offerstep3")}</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-portugal-gold text-lg leading-none">•</span>
                  <span>{t("service.corporate.offerstep4")}</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-portugal-gold text-lg leading-none">•</span>
                  <span>{t("service.corporate.offerstep5")}</span>
                </li>

              </ul>
            </div>

            {/* ==== WHY IT MATTERS SECTION ==== */}
            <h3 className="font-semibold text-lg text-foreground">
              {t("service.corporate.whyimportant")} {/* Why it matters? */}
            </h3>

            <div className="space-y-2 text-sm leading-relaxed text-muted-foreground">
              <ul className="space-y-2">

                <li className="flex items-start gap-3">
                  <span className="text-portugal-gold text-lg leading-none">•</span>
                  <span>{t("service.corporate.whyimportantpoint1")}</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-portugal-gold text-lg leading-none">•</span>
                  <span>{t("service.corporate.whyimportantpoint2")}</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-portugal-gold text-lg leading-none">•</span>
                  <span>{t("service.corporate.whyimportantpoint3")}</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-portugal-gold text-lg leading-none">•</span>
                  <span>{t("service.corporate.whyimportantpoint4")}</span>
                </li>

              </ul>
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
      title: t("education.title"),
      description: t("education.subtitle")
    },
    {
      icon: Heart,
      title: t("health.title"),
      description: t("health.subtitle")
    },
    {
      icon: CreditCard,
      title: t("service.loan.title"),
      description: t("service.loan.subtitle")
    },
    {
      icon: Building,
      title: t("service.business.title"),
      description: t("service.business.subtitle")
    },
    {
      icon: Home,
      title: t("service.bankacc.title"),
      description: t("service.bankacc.subtitle")
    },
    {
      icon: TrendingUp,
      title: t("service.realestate.title"),
      description: t("service.realestate.subtitle")
    },
    {
      icon: Scale,
      title: t("service.investment.special.title"),
      description: t("service.investment.special.subtitle")
    },
    {
      icon: FileText,
      title: t("service.corporate.title"),
      description: t("service.corporate.subtitle")
    },  
    {
      icon: Users,
      title: t("service.community.title"),
      description: t("service.community.subtitle")
    },
    {
      icon: MapPin,
      title: t("service.tour.title"),
      description: t("service.tour.subtitle")
    }

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
                className={`relative transition-all duration-500 ease-out border-0 bg-gradient-to-br from-card via-card to-card/90 shadow-lg cursor-pointer transform-gpu ${isExpanded ? "z-20" : "hover:shadow-xl hover:scale-[1.02]"
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
                    className={`text-xl transition-colors duration-300 ${isExpanded ? "text-primary" : "text-foreground"
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
                    className={`absolute inset-0 transition-all duration-500 ease-out overflow-y-auto rounded-xl bg-gradient-to-br from-tile-cream/95 to-background/95 p-6 ${isExpanded
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
