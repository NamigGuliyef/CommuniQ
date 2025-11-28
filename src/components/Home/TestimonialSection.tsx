import { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Star } from 'lucide-react';
import mariaImg from '@/assets/testimonial-maria.jpg';
import joaoImg from '@/assets/testimonial-joao.jpg';
import annaImg from '@/assets/testimonial-anna.jpg';
import ahmedImg from '@/assets/testimonial-ahmed.jpg';
import elenaImg from '@/assets/testimonial-elena.jpg';
import davidImg from '@/assets/testimonial-david.jpg';
import sophieImg from '@/assets/testimonial-sophie.jpg';

const TestimonialSection = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      id: 1,
      name: 'Maria Santos',
      avatar: mariaImg,
      rating: 5,
      comment: 'CommuniQ Portuqaliyaya köçməyimizi çox asanlaşdırdı. Onların viza məsləhətləri əla idi və biz buradakı yeni həyatımızdan çox məmnunuq.'
    },
    {
      id: 2,
      name: 'João Silva',
      avatar: joaoImg,
      rating: 5,
      comment: 'Başdan sona peşəkar xidmət. Onlar bütün sənədlərimizi mükəmməl idarə etdilər və hər addımda bizə yol göstərdilər.'
    },
    {
      id: 3,
      name: 'Anna Kowalski',
      avatar: annaImg,
      rating: 5,
      comment: 'İnvestisiya məsləhətləri inanılmaz dəyərli idi. Mükəmməl əmlak tapdıq və heç bir stress olmadan Qızıl Vizamızı aldıq.'
    },
    {
      id: 4,
      name: 'Ahmed Hassan',
      avatar: ahmedImg,
      rating: 4,
      comment: 'Köçmə prosesinə əla dəstək. Komanda suallarımızı cavablamaq üçün həmişə hazır idi.'
    },
    {
      id: 5,
      name: 'Elena Rodriguez',
      avatar: elenaImg,
      rating: 5,
      comment: 'CommuniQ bizə Portuqaliya səhiyyə sistemini mükəmməl başa düşməyə kömək etdi. Yeni həyatımıza tamamilə hazır hiss edirik.'
    },
    {
      id: 6,
      name: 'David Thompson',
      avatar: davidImg,
      rating: 5,
      comment: 'Viza müraciətindən uşaqlarımız üçün məktəb tapmağa qədər hər şeyi əhatə etdilər. Həqiqətən hərtərəfli xidmət.'
    },
    {
      id: 7,
      name: 'Sophie Martin',
      avatar: sophieImg,
      rating: 4,
      comment: 'CommuniQ ilə işləmək böyük təcrübə idi. Onlar mürəkkəb immiqrasiya prosesini sadə və aydın etdilər.'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}
      />
    ));
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("testimonial.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("testimonial.desc")}
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <Card className="h-full bg-card hover:shadow-lg transition-all duration-300 border border-border">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-center gap-4 mb-4">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                          <AvatarFallback className="bg-primary/10 text-primary">
                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                          <div className="flex gap-1 mt-1">
                            {renderStars(testimonial.rating)}
                          </div>
                        </div>
                      </div>
                      <blockquote className="text-muted-foreground leading-relaxed flex-grow">
                        "{testimonial.comment}"
                      </blockquote>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="relative -left-0 -translate-y-0" />
              <CarouselNext className="relative -right-0 -translate-y-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;