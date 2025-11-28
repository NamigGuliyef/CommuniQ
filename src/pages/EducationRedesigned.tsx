import hospitalCuf from '@/assets/hospital-cuf.jpg';
import hospitalLusiadas from '@/assets/hospital-lusiadas.jpg';
import hospitalLuz from '@/assets/hospital-luz.jpg';
import universityLisbon from '@/assets/university-lisbon.jpg';
import universityNova from '@/assets/university-nova.jpg';
import universityPorto from '@/assets/university-porto.jpg';
import EducationModal from '@/components/EducationModal';
import Footer from '@/components/Layout/Footer';
import Header from '@/components/Layout/Header';
import SectionBanner from '@/components/SectionBanner';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/hooks/useLanguage';
import {
  ArrowRight,
  Award,
  ExternalLink,
  GraduationCap,
  Star,
  Trophy,
  Users
} from 'lucide-react';
import { useState } from 'react';

const EducationRedesigned = () => {
  const { t } = useLanguage();
  const [modalId, setModalId] = useState(null);

  const universities = [
    {
      name: t("page.education1.name"),
      shortName: 'ULisboa',
      description: t("page.education1.desc"),
      ranking: '#1 in Portugal',
      icon: GraduationCap,
      image: universityLisbon,
      students: '47,000+',
      founded: 1911,
      color: 'from-blue-500 to-blue-700'
    },
    {
      name: t("page.education2.name"),
      shortName: 'U.Porto',
      description: t("page.education2.desc"),
      ranking: '#2 in Portugal',
      icon: Award,
      image: universityPorto,
      students: '32,000+',
      founded: 1911,
      color: 'from-primary to-green-700'
    },
    {
      name: t("page.education3.name"),
      shortName: 'NOVA',
      description: t("page.education3.desc"),
      ranking: 'Top 3 in Portugal',
      icon: Star,
      image: universityNova,
      students: '20,000+',
      founded: 1973,
      color: 'from-purple-500 to-purple-700'
    }
  ];

  const hospitals = [
    {
      name: 'Hospital da Luz',
      description: 'Premium private healthcare with international standards',
      image: hospitalLuz,
      specialties: ['Cardiology', 'Oncology', 'Neurology', 'Orthopedics'],
      locations: 'Lisbon, Porto, Aveiro',
      color: 'from-emerald-500 to-emerald-700'
    },
    {
      name: 'Hospital CUF',
      description: 'Leading healthcare network across Portugal',
      image: hospitalCuf,
      specialties: ['Surgery', 'Pediatrics', 'Maternity', 'Emergency'],
      locations: 'Multiple cities',
      color: 'from-blue-500 to-cyan-700'
    },
    {
      name: 'Hospital Lusíadas',
      description: 'Excellence in medical care and patient experience',
      image: hospitalLusiadas,
      specialties: ['Diagnostics', 'Rehabilitation', 'Psychiatry', 'Dermatology'],
      locations: 'Lisbon, Porto, Albufeira',
      color: 'from-rose-500 to-pink-700'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <Header />

      <main className="pt-16">
        <SectionBanner
          title={t('education.title')}
          subtitle={t("page.education.subtitle")}
        />

        {/* Statistics Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">20+</div>
                <div className="text-sm text-muted-foreground">{t("page.education.statistic.uni")}</div>
              </div>

              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">300k+</div>
                <div className="text-sm text-muted-foreground">{t("page.education.statistic.student")}</div>
              </div>

              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">95%</div>
                <div className="text-sm text-muted-foreground">{t("page.education.statistic.employment")}</div>
              </div>

              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">#3</div>
                <div className="text-sm text-muted-foreground">{t("page.education.statistic.health")}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Universities Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                {t('page.education.top.uni')}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t('page.education.top.unidesc')}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {universities.map((university, index) => {
                const IconComponent = university.icon;

                return (
                  <Card
                    key={index}
                    className="group flex flex-col hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 bg-gradient-to-br from-card to-card/80"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={university.image}
                        alt={university.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                      <div className="absolute top-4 right-4">
                        <Badge className={`bg-gradient-to-r ${university.color} text-white border-0`}>
                          {university.ranking}
                        </Badge>
                      </div>

                      <div className="absolute bottom-4 left-4 text-white">
                        <div className="font-bold text-lg">{university.shortName}</div>
                        <div className="text-sm opacity-90">Est. {university.founded}</div>
                      </div>
                    </div>

                    <CardHeader className="pb-4">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${university.color} rounded-xl flex items-center justify-center shadow-lg`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>

                        <div className="flex-1">
                          <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                            {university.name}
                          </CardTitle>

                          <div className="flex items-center gap-2 mt-2">
                            <Users className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">
                              {university.students} {t("page.education.statistic.student")}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    {/* >>> ƏSAS DÜZƏLİŞ: CardContent FLEX-COL + MT-AUTO <<< */}
                    <CardContent className="flex flex-col h-[150px]">
                      <CardDescription className="text-muted-foreground leading-relaxed">
                        {university.description}
                      </CardDescription>

                      <Button
                        onClick={() => setModalId(index)}
                        variant="outline"
                        className="w-full mt-auto group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        {t('page.education.learn')}
                      </Button>
                    </CardContent>
                  </Card>

                );
              })}
            </div>
          </div>
        </section>

        {/* FIXED MODAL SECTION */}
        <EducationModal
          isOpen={modalId !== null}
          onClose={() => setModalId(null)}
          university={modalId !== null ? universities[modalId] : null}
        />

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-12 text-center text-primary-foreground">
              <Trophy className="w-16 h-16 mx-auto mb-6 text-portugal-gold" />

              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                {t("page.education.journey")}
              </h3>

              <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                {t("page.educatiom.journeydesc")}
              </p>

              <Button
                size="lg"
                variant="secondary"
                className="bg-portugal-gold hover:bg-portugal-gold/90 text-portugal-gold-foreground font-semibold px-8 py-6"
                onClick={() => (window.location.href = '/contact')}
              >
                {t("page.education.getstarted")}

                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default EducationRedesigned;
