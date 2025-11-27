import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, DollarSign, Laptop, Star } from 'lucide-react';
import SectionBanner from '@/components/SectionBanner';

const Visas = () => {
  const { t } = useLanguage();

  const visaTypes = [
    {
      icon: Star,
      title: t('visa.d7'),
      // subtitle: 'For investors seeking EU citizenship or permanent residency',
      features: [
        t("visa.d7forwho1"),
        t("visa.d7forwho2"),
        t("visa.d7forwho3"),
        t("visa.d7forwho4"),
        t("visa.d7benefits1"),
        t("visa.d7benefits2"),
        t("visa.d7benefits3"),
      ],
      // process: [
      //   'Investment selection',
      //   'Fund/donation transfer',
      //   'Document preparation',
      //   'Application submission',
      //   'Residence card issuance'
      // ],
      color: 'from-yellow-500 to-orange-600'
    },

    {
      icon: Laptop,
      title: t('visa.d7dig'),
      // subtitle: 'For freelancers and remote workers with valid contracts',
      features: [
        t("visa.d7digbenef1"),
        t("visa.d7digbenef2"),
        t("visa.d7digbenef3"),
        t("visa.d7digbenef4"),
        t("visa.d7digbenef5"),
        t("visa.d7digbenef6"),
        t("visa.d7digbenef7"),
        t("visa.d7digbenef8"),
      ],
      // process: [
      //   'Remote work proof',
      //   'Valid contracts with foreign clients',
      //   'Income verification',
      //   'Health insurance',
      //   'Application and approval'
      // ],
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: DollarSign,
      title: t('visa.goldenvisa'),
      // subtitle: 'For individuals with passive income: rent, pension, royalties, interest',
      features: [
        t("visa.goldenvisaforwho1"),
        t("visa.goldenvisaforwho2"),
        t("visa.goldenvisaforwho3"),
        t("visa.goldenvisaforwho4"),
        t("visa.goldenvisabenefits1"),
        t("visa.goldenvisabenefits2"),
        t("visa.goldenvisabenefits3"),
        t("visa.goldenvisabenefits4"),
        t("visa.goldenvisabenefits5"),
      ],
      // process: [
      //   'Income documentation',
      //   'Criminal background check',
      //   'Health insurance',
      //   'Accommodation proof',
      //   'Application submission'
      // ],
      color: 'from-green-500 to-emerald-600'
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <SectionBanner
          title={t('page.visas.title')}
          subtitle={t('page.visas.subtitle')}
        />

        {/* Visa Types */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {visaTypes.map((visa, index) => {
                const IconComponent = visa.icon;
                return (
                  <Card key={index} className="hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className={`h-2 bg-gradient-to-r ${visa.color}`}></div>
                    <CardHeader>
                      <div className={`w-12 h-12 bg-gradient-to-br ${visa.color} rounded-lg flex items-center justify-center mb-4`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl text-foreground">{visa.title}</CardTitle>
                      {/* <CardDescription className="text-muted-foreground">{visa.subtitle}</CardDescription> */}
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">{t('visa.keyfeatures')}</h4>
                        <div className="space-y-2">
                          {visa.features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* <div>
                        <h4 className="font-semibold text-foreground mb-3">Process Steps</h4>
                        <div className="space-y-2">
                          {visa.process.map((step, i) => (
                            <Badge key={i} variant="outline" className="mr-2 mb-2">
                              {i + 1}. {step}
                            </Badge>
                          ))}
                        </div>
                      </div> */}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Visas;
