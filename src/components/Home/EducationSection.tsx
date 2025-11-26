import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Star, Globe, Award } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import universityLisbon from '@/assets/university-lisbon.jpg';
import universityPorto from '@/assets/university-porto.jpg';
import universityNova from '@/assets/university-nova.jpg';
import universityCatholic from '@/assets/university-catholic.jpg';

const EducationSection = () => {
  const { t } = useLanguage();

  const schools = [
    {
      name: t('education.school1name'),
      description: t('education.school1desc'),
      ranking: 'British Heritage',
      icon: GraduationCap,
      image: universityLisbon
    },
    {
      name: t('education.school2name'),
      description: t('education.school2desc'),
      ranking: 'American Excellence',
      icon: Award,
      image: universityPorto
    },
    {
      name: t('education.school3name'),
      description: t('education.school3desc'),
      ranking: 'Cambridge Accredited',
      icon: Star,
      image: universityNova
    }
  ];

  const universities = [
    {
      name: t('uni.uni1name'),
      description: t('uni.uni1desc'),
      ranking: '#262 QS World Ranking',
      icon: GraduationCap,
      image: universityLisbon
    },
    {
      name: t('uni.uni2name'),
      description: t('uni.uni2desc'),
      ranking: 'QS Top 50 Under 50',
      icon: Star,
      image: universityNova
    },
    {
      name: t('uni.uni3name'),
      description: t('uni.uni3desc'),
      ranking: 'FT Global Rankings',
      icon: Globe,
      image: universityCatholic
    },
    // {
    //   name: 'University of Porto',
    //   description: 'Leading public university known for engineering and medical programs. Strong research excellence.',
    //   ranking: '#2 in Portugal',
    //   icon: Award,
    //   image: universityPorto
    // },
    // {
    //   name: 'University of Coimbra',
    //   description: 'UNESCO World Heritage site. One of Europe\'s oldest universities, founded in 1290.',
    //   ranking: 'Historic Excellence',
    //   icon: GraduationCap,
    //   image: universityCoimbra
    // },
    // {
    //   name: 'ISCTE Business School',
    //   description: 'Leading business school with international accreditation. Strong corporate connections.',
    //   ranking: 'Top Business School',
    //   icon: Award,
    //   image: universityIscte
    // }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            {t('education.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('education.subtitle')}
          </p>
        </div>

        {/* International Schools Section */}
       <div className="mb-16">
  <h3 className="text-3xl font-bold text-primary mb-10 text-center">
    {t('education.title2')}
  </h3>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
    {schools.map((school, index) => {
      const IconComponent = school.icon;
      return (
        <Card
          key={index}
          className="overflow-hidden group border-0 bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300"
        >
          {/* IMAGE */}
          <div className="h-48 relative overflow-hidden">
            <img
              src={school.image}
              alt={school.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition duration-500"></div>
          </div>

          {/* HEADER */}
          <CardHeader className="pb-0">
            <div className="flex items-start gap-3">
              {/* ICON */}
              <div className="w-12 h-12 bg-primary/90 rounded-xl flex items-center justify-center shadow-md">
                <IconComponent className="w-6 h-6 text-white" />
              </div>

              <div className="flex-1 space-y-1">
                {/* TITLE */}
                <CardTitle className="text-lg font-semibold text-foreground leading-tight">
                  {school.name}
                </CardTitle>

                {/* BADGE */}
                <span className="text-xs text-portugal-gold font-semibold bg-portugal-gold/10 px-2 py-1 rounded-full inline-block">
                  {school.ranking}
                </span>
              </div>
            </div>
          </CardHeader>

          {/* DESCRIPTION */}
          <CardContent className="pt-4 pb-6">
            <CardDescription className="text-muted-foreground leading-relaxed text-sm">
              {school.description}
            </CardDescription>
          </CardContent>
        </Card>
      );
    })}
  </div>
</div>


        {/* Universities Section */}
        <div>
          <h3 className="text-3xl font-bold text-primary mb-6 text-center">{t('uni.title')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {universities.map((university, index) => {
              const IconComponent = university.icon;
              return (
                <Card
                  key={index}
                  className="hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden group border-0 bg-gradient-to-br from-card via-card to-card/90 shadow-lg"
                >
                  <div className="h-48 relative overflow-hidden">
                    <img
                      src={university.image}
                      alt={university.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Overlay that fades out on hover */}
                    <div className="absolute inset-0 bg-black bg-opacity-45 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none"></div>
                  </div>

                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary via-ocean to-primary/80 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                          {university.name}
                        </CardTitle>
                        <div className="text-sm text-portugal-gold font-semibold bg-portugal-gold/10 px-2 py-1 rounded-full mt-1 inline-block">
                          {university.ranking}
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <CardDescription className="text-muted-foreground">
                      {university.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
