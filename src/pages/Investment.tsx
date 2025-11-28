import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { useLanguage } from "@/hooks/useLanguage";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Building, TrendingUp, Home } from "lucide-react";
import SectionBanner from "@/components/SectionBanner";

const Investment = () => {
  const { t } = useLanguage();

  const regions = [
    {
      name: "Lisbon",
      description: t("page.investment.city.desc1"),
      priceRange: "€400k - €2M+",
    },
    {
      name: "Porto",
      description: t("page.investment.city.desc2"),
      priceRange: "€250k - €1.5M",
    },
    {
      name: "Algarve",
      description: t("page.investment.city.desc3"),
      priceRange: "€300k - €3M+",
    },
    {
      name: "Cascais",
      description: t("page.investment.city.desc4"),
      priceRange: "€500k - €4M+",
    },
    {
      name: "Setúbal",
      description: t("page.investment.city.desc5"),
      priceRange: "€200k - €1M",
    },
  ];

  const investmentTypes = [
    {
      icon: TrendingUp,
      title: t("page.investment.curated"),
      description: t("page.investment.curated.desc"),
      benefits: [
        t("page.investment.curated.tag1"),
        t("page.investment.curated.tag2"),
        t("page.investment.curated.tag3"),
        t("page.investment.curated.tag4"),
        t("page.investment.curated.tag5"),
      ],
    },
    {
      icon: Building,
      title: t("page.investment.estate"),
      description: t("page.investment.estate.desc"),
      benefits: [
        t("page.investment.estate.tag1"),
        t("page.investment.estate.tag2"),
        t("page.investment.estate.tag3"),
        t("page.investment.estate.tag4"),
        t("page.investment.estate.tag5"),
      ],
    },
    {
      icon: Home,
      title: t("page.development.projects"),
      description: t("page.development.projects.desc"),
      benefits: [
        t("page.development.projects.tag1"),
        t("page.development.projects.tag2"),
        t("page.development.projects.tag3"),
        t("page.development.projects.tag4"),
        t("page.development.projects.tag5"),
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <SectionBanner
          title={t("page.investment.title")}
          subtitle={t("page.investment.subtitle")}
        />

        {/* Investment Types */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                {t("page.investment.option")}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t("page.investment.optiondesc")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {investmentTypes.map((investment, index) => {
                const IconComponent = investment.icon;
                return (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-shadow duration-300"
                  >
                    <CardHeader>
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-ocean rounded-lg flex items-center justify-center mb-4">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl text-foreground">
                        {investment.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {investment.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {investment.benefits.map((benefit, i) => (
                          <Badge
                            key={i}
                            variant="secondary"
                            className="mr-2 mb-2"
                          >
                            {benefit}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Regions */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                {t("page.investment.region.title")}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t("page.investment.region.desc")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regions.map((region, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow duration-300"
                >
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-5 h-5 text-primary" />
                      <CardTitle className="text-xl text-foreground">
                        {region.name}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-muted-foreground">
                      {region.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">
                          {t("page.investment.city.price")}
                        </h4>
                        <span className="text-lg font-bold text-primary">
                          {region.priceRange}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Investment;
