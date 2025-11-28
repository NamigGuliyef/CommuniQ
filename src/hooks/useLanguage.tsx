import { createContext, useContext, useState, ReactNode } from "react";

type Language = "az" | "ru" | "en" | "pt";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  az: {
    // Hero Section

    'hero.title': 'Portuqaliyaya səyahətiniz burada başlayır ',
    'hero.subtitle': 'Fərdlərin və ailələrin Portuqaliyada yeni həyata təhlükəsiz, qanuni və rahat şəkildə başlamalarını təmin etməkdir. Biz müştərilərimizi viza müraciətindən tutmuş tam məskunlaşmaya qədər hər mərhələdə, hər bir ehtiyaca uyğun fərdi yanaşma ilə dəstəkləyirik.',
    'hero.vision': "Avropa İttifaqında relokasiya və immiqrasiya sahəsində ən etibarlı və peşəkar tərəfdaş olmaqdır. Biz sadəcə sənədləşmə işlərini yerinə yetirmirik — insanlara həyatlarında böyük bir keçid dövründə yol göstəririk.",
    'hero.cta': 'İmmiqrasiya strategiyası',
    "hero.ourvision": "Vizyonumuz",
    "hero.approadmap": "Yaşayış üçün həllər – xidmətlərin təsviri",

    // Navigation

    "nav.home": "Ana Səhifə",
    "nav.services": "Xidmətlər",
    "nav.visas": "Vizalar",
    "nav.investment": "İnvestisiya",
    "nav.education": "Təhsil",
    "nav.contact": "Əlaqə",

    // Facts
    // "facts.title": "Portuqaliya Faktları",
    "facts.safety": "Dünyada 7-ci ən təhlükəsiz ölkə",
    "facts.safety.desc": "Qlobal Sülh İndeksi 2024",
    "facts.europe": "Avropada 3-cü ən təhlükəsiz",
    "facts.europe.desc": "Avropa Təhlükəsizlik Reytinqi",
    "facts.welcoming": "Ən qonaqpərvər cəmiyyət",
    "facts.welcoming.desc": " Avropa Sosial Tədqiqatı, 2022",

    // Services
    "services.title": "Xidmətlərimiz",
    "services.subtitle":
      "Portuqaliyaya köçmə prosesinizdə sizə kömək edən tam xidmət paketi",
    "service.education": "Təhsil üzrə yönləndirmə",
    "service.medical": "Səhiyyə üzrə yönləndirmə",
    "service.bankacc": "Fərdi və korporativ bank hesablarının açılması",
    "service.realestate": "Daşınmaz əmlakla bağlı məsləhət",
    "service.investment": "Xüsusi seçilmiş investisiya imkanları",
    "service.structuring": "Korporativ strukturlaşdırma və məsləhət",
    "service.legalconsular": "Hüquqi və konsulluq sənədləşdirilməsinə dəstək",
    "service.community": "İcma və peşəkar şəbəkəyə inteqrasiya",
    "service.tour": "Tur paketi",

    "education.title": "Təhsil İstiqaməti",
    "education.subtitle":
      "Portuqaliya Avropanın ən nüfuzlu beynəlxalq məktəblərindən bəzilərinə çıxış imkanı təklif edir. Bu məktəblər məzunlarına Aİ (Avropa İttifaqı) universitetlərinə, ABŞ-dakı Ivy League universitetlərinə və Böyük Britaniyanın aparıcı universitetlərinə qəbul olmaq imkanı yaradır.",
    "education.title2": "Ən nüfuzlu beynəlxalq məktəblər:",
    "education.school1name":
      "St. Julian’s School – 1932-ci ildən fəaliyyət göstərən Avropanın ən qədim Britaniya məktəblərindən biri. Məzunları Oksford, LSE və UCL kimi universitetlərə qəbul olunur.",
    "education.school2name":
      "Carlucci American International School of Lisbon (CAISL) – IB (Beynəlxalq Bakalavriat) və Amerika tədris proqramları üzrə təhsil verən bir məktəbdir. Məzunları Harvard, MIT və Kolumbiya kimi universitetlərə qəbul olunur.",
    "education.school3name":
      "Oporto British School – Portuqaliyanın şimalında yerləşən və Kembric Universiteti tərəfindən akkreditasiya edilmiş yüksək səviyyəli bir təhsil müəssisəsidir.",

    "education.schoolsoffertitle": "Bu məktəblər aşağıdakıları təklif edir:",
    "education.schoolsoffer1": "IB, Britaniya və Amerika diplom proqramları",
    "education.schoolsoffer2": "100% ingilis dilində tədris",
    "education.schoolsoffer3":
      "Universitetə qəbul üzrə məsləhət xidmətləri və AP/SAT/IB imtahanlarına hazırlıq dəstəyi",
    "education.schoolsoffer4":
      "Böyük Britaniya, ABŞ və Aİ universitetlərinə qəbul faizi 90%-dən yuxarıdır",

    "uni.title": "Universitetlər",
    "uni.uni1name": "Lissabon Universiteti",
    "uni.uni1desc":
      "QS Dünya Universitet Reytinqində 2025-ci il üçün #262 yerdə qərarlaşıb.",
    "uni.uni2name": "NOVA Lissabon Universiteti",
    "uni.uni2desc":
      "“QS Top 50 Under 50” siyahısında yer alır. Portuqaliya immiqrantlar üçün ən mehriban cəmiyyətlərdən biri hesab olunur — digər Aİ ölkələri ilə müqayisədə irqçilik və ya ksenofobiya səviyyəsi çox aşağıdır. Mənbə: Avropa Sosial Tədqiqatı, 2022",
    "uni.uni3name": "Portuqaliyanın Katolik Universiteti",
    "uni.uni3desc":
      "Biznes və hüquq proqramlarına görə Financial Times tərəfindən qlobal reytinqdə yer alıb. İngilis dilində tədris olunan bakalavr və magistr proqramları mövcuddur: tibb, məlumat elmləri, mühəndislik və digər sahələr üzrə.",

    "health.title": "Səhiyyə üzrə yönləndirmə",
    "health.subtitle":
      "OECD Səhiyyə Statistikalarına əsasən, Portuqaliya Avropanın ən yaxşı dövlət səhiyyə sistemlərindən birinə malikdir — və onun özəl sektor şəbəkəsi daha da inkişaf etmiş səviyyədədir.",
    "health.title2": "Ən nüfuzlu özəl xəstəxana şəbəkələri",
    "health.subtitle2": " Top Özəl Xəstəxana Şəbəkələri",
    "health.hosp1name": "Hospital da Luz",
    "health.hosp1desc":
      "Ən müasir avadanlıqlarla təchiz olunmuş, beynəlxalq pasiyentlər üçün xidmət göstərən xəstəxanalar şəbəkəsi.",
    "health.hosp2name": "CUF Saúde",
    "health.hosp2desc":
      "Portuqaliyanın müxtəlif şəhərlərində 20-dən çox özəl xəstəxanadan ibarətdir, yüksək pasiyent məmnuniyyəti ilə seçilir.",
    "health.hosp3name": "Lusíadas Saúde",
    "health.hosp3desc":
      "Beynəlxalq JCI akkreditasiyasına malik, qlobal səhiyyə standartlarına cavab verən şəbəkədir.",

    "health.service": "Etibarlı, münasib və sürətli xidmətlər:",
    "health.service1":
      "Portuqaliya OECD reytinqinə görə Avropada səhiyyə üzrə ilk 10 ölkə sırasındadır.",
    "health.service2":
      "Əsas özəl şəbəkələr: Hospital da Luz, CUF, Lusíadas (JCI akkreditasiyalı).",
    "health.service3":
      "İngilis dilli həkimlər, qabaqcıl diaqnostika, ekspatlar üçün prioritet xidmət — əsas ixtisaslarda gözləmə siyahısı yoxdur.",
    "health.service4": "Ailələr üçün beynəlxalq əhatəli sığorta paketləri.",
    "health.service5":
      "Relokasiya dəstəyi ilə inteqrasiya olunmuş sistem: qeydiyyat, plan seçimi və inteqrasiya prosesində yardım.",

    "service.loan.title": "İpoteka və Kreditin Asanlaşdırılması",
    "service.loan.subtitle":
      "Bəzi müştərilər Portuqaliyada biznes fəaliyyəti qurmaq üçün yerli biznes kreditlərindən istifadə edib, eyni zamanda yaşayış icazəsinə müraciət edərək köç prosesini gəlirli bir investisiyaya çevirmişlər.",
    "service.loan.service1":
      "Biznes kredit proqramları vasitəsilə startap və ya genişlənmə kapitalına çıxış imkanı.",
    "service.loan.service2":
      "Biz sizin üçün biznes planı, maliyyə proqnozları və bank təqdimatlarını hazırlayırıq.",
    "service.loan.service3":
      "Portuqaliya dövlətinin maliyyələşdirmə proqramları, güzəştli kreditlər və sektor yönümlü təşviqlərdən yararlanmağa yardım edirik.",
    "service.loan.service4":
      "Girov, zəmanət və ödəniş cədvəli üçün tam hüquqi strukturlaşdırma təmin edirik.",
    "service.loan.service5":
      "Kafedən tutmuş daşınmaz əmlak layihələrinə, IT startaplarına, konsaltinq və pərakəndə ticarətə qədər müxtəlif sahələr üçün uyğundur.",
    "service.loan.business": "Biznes Sahibləri üçün",
    "service.loan.businessdesc": "Portuqaliyada daşınmaz əmlak sahibi olmaq və ya biznesinizi başlatmaq üçün ağıllı yol — bütün kapitalınızı riskə atmadan.",
    "service.loan.whytitle": "Niyə bu vacibdir?",
    "service.loan.whydesc":
      "Əksər müştərilər düşünür ki, Portuqaliyada ev almaq və ya şirkət açmaq üçün yüz minlərlə avro ilkin kapital tələb olunur. Amma bu belə deyil. Doğru dəstək və sənədlərlə yerli banklar layihənizin 70%-dək hissəsini maliyyələşdirə bilər — siz isə həm likvidliyi qoruyur, həm də yaşayış icazəsinə sahib olursunuz. İstər Lissabonda dənizkənarı mənzil, istər Portoda butik otel açmaq istəyirsinizsə — biz ipoteka prosesinin hər mərhələsində (hüquqi, maliyyə və strateji) sizi müşayiət edirik.",


    "service.business.title": "Biznes Sahibləri üçün",
    "service.business.subtitle": "Siz immiqrasiya və investisiya arasında seçim etməli deyilsiniz. Bizim köməyimizlə hər ikisini — uyğun, strateji və təhlükəsiz şəkildə həyata keçirə bilərsiniz.",
    "service.business.difference.title": "Bizi fərqləndirən nədir?",
    "service.business.difference.point1": "Portuqaliyanın aparıcı bankları ilə birbaşa əlaqələr — təsdiq müddətini xeyli azaldır.",
    "service.business.difference.point2": "İmmiqrasiya məqsədlərinə uyğun şəkildə kreditlərin strukturlaşdırılması.",
    "service.business.difference.point3": "Danışıqlar, müqavilə imzalanması və vəsaitin ayrılması zamanı tam iki dilli dəstək.",
    "service.business.difference.point4": "Komandamız sizin kredit, viza, daşınmaz əmlak və ya biznes layihənizi vahid proses çərçivəsində əlaqələndirir.",

    "service.business.storytitle": "Müştəri Uğur Hekayələri:",
    "service.business.story.point1": "4 nəfərlik bir ailə Cascaisdə €420,000 dəyərində ev aldı, cəmi €126,000 ilkin ödəniş etdi — və Golden Visa təsdiqi aldı.",
    "service.business.story.point2": "Azərbaycanlı sahibkar 0% faizli güzəştli kreditlə 5 il müddətinə €100,000 dəyərində pərakəndə ticarət layihəsini maliyyələşdirdi.",
    "service.business.story.point3": "Müştərilərimiz yerli nüfuzumuz və ilkin yoxlama prosesimiz sayəsində 15–20 gün ərzində təsdiq alıblar.",



    "service.bankacc.title": "Fərdi və Korporativ Bank Hesablarının Açılması",
    "service.bankacc.subtitle": "Niyə bu vacibdir? Portuqaliyada bank hesabı açmaq həm yaşayış icazəsi üçün, həm də gündəlik maliyyə fəaliyyətləri üçün kritik addımdır.",
    "service.bankacc.step1": "Golden Visa və D7 vizaları üçün tələb olunur;",
    "service.bankacc.step2": "Gəlir mənbəyini və maliyyə təminatını sübut edir;",
    "service.bankacc.step3": "Daşınmaz əmlak alışı, kommunal ödənişlər və sığorta əməliyyatlarını mümkün edir;",
    "service.bankacc.step4": "Biznes əməliyyatları üçün vacibdir — ödənişlər, əmək haqqı və vergi uyğunluğu.",

    "service.bankacc.offer.title": "Fərdi Hesablar — Biz nə təklif edirik:",
    "service.bankacc.offerstep1": "Fərdi və korporativ hesabların sürətli açılışı;",
    "service.bankacc.offerstep2": "Ən nüfuzlu banklarla birbaşa əlaqə: Millennium BCP, Novo Banco, Santander;",
    "service.bankacc.offerstep3": "KYC (Müştərini Tanı) sənədlərinin tam hazırlanması;",
    "service.bankacc.offerstep4": "İngilis dilli xidmət üçün əvvəlcədən təyin olunmuş əlaqə menecerləri;",
    "service.bankacc.offerstep5": "Şirkət qeydiyyatı və mühasibat uçotu ilə tam uyğun korporativ bank quruluşu;",
    "service.bankacc.offerstep6": "Standart zaman çərçivəsi: 5–7 iş günü.",


    "service.realestate.title": "Daşınmaz Əmlak üzrə Rəhbərlik",
    "service.realestate.subtitle": "Ağıllı al, daha yaxşı yaşa — və ya yuxuda olarkən belə gəlir gətirən portfel qur.",
    "service.realestate.title2": "Niyə Portuqaliyada daşınmaz əmlaka investisiya etməli?",
    "service.realestate.point1": "Portuqaliya həm həyat tərzi, həm də sərmayə baxımından Avropanın ən cəlbedici daşınmaz əmlak bazarlarından biridir.",
    "service.realestate.point2": "İstər əsas yaşayış evi, istər istirahət mənzili, istərsə də icarə gəliri gətirən investisiya axtarırsınız — mütəxəssislər komandamız sizə uyğun variantı tapmaqda, qiymətləndirməkdə və bağlama mərhələsində tam dəstək verir. ",
    "service.realestate.offer.title": "Biz nəyi təmin edirik:",
    "service.realestate.offerstep1": "Yaşayış icazəsinə uyğun daşınmaz əmlak variantlarının müəyyənləşdirilməsi (Golden Visa uyğun, D7 üçün icarə seçimləri və s.);",
    "service.realestate.offerstep2": "Lissabon, Porto, Algarve, Cascais, Setúbal və yüksələn dəyər zonaları üzrə axtarış;",
    "service.realestate.offerstep3": "Qapalı bazar təklifləri, inkişaf etdirici layihələr və endirimli aktivlərə çıxış;",
    "service.realestate.offerstep4": "Uzunmüddətli icarə gəliri, dəyər artımı və satış likvidliyinin qiymətləndirilməsi;",
    "service.realestate.offerstep5": "Əmlaka baxışların təşkili, danışıqlar, təkliflərin təqdimatı, hüquqi yoxlama və qeydiyyat;",
    "service.realestate.offerstep6": "Tam proses üzrə rəhbərlik: rezervasiya → CPCV → notarius → reyestr;",
    "service.realestate.offerstep7": " “Buy-to-let”, “co-living”, turizm kirayəsi lisenziyası və idarəetmə üzrə məsləhət.",


    "service.investment.special.title": "Xüsusi Seçilmiş İnvestisiya İmkanları",
    "service.investment.special.subtitle": "“Biz kirayəçilərlə və ya daşınmaz əmlak idarəçiliyi ilə məşğul olmaq istəmirdik. Fond investisiyası bizə həm təmiz investisiya, həm də sadə yaşayış icazəsi yolu təqdim etdi.”— Mərkəzi Asiyadan olan müştəri",
    "service.investment.special.question": "Niyə fond əsaslı Golden Visa investisiyaları?",
    "service.investment.special.point1": "Dövlət tərəfindən təsdiqlənmiş özəl kapital və vençur fondları;",
    "service.investment.special.point2": "Auditdən keçmiş və CMVM (Portuqaliya Qiymətli Kağızlar Bazarına Nəzarət Komissiyası) tərəfindən tənzimlənən strukturlar;",
    "service.investment.special.point3": "Portuqaliyanın Golden Visa qanunvericiliyinə tam uyğunluq;",
    "service.investment.special.point4": "Texnologiya, daşınmaz əmlak, enerji və innovasiya sektorlarında diversifikasiya imkanı;",
    "service.investment.special.point5": "Passiv gəlir və kapitalın dəyər artımı potensialı;",
    "service.investment.special.point6": "Ailə üzvləri üçün minimal fiziki iştirak tələbi ilə yaşayış icazəsi.",

    "service.investment.special.benefit.title": "Əsas Üstünlüklər:",
    "service.investment.special.benefit1": "Daşınmaz əmlak almağa ehtiyac yoxdur;",
    "service.investment.special.benefit2": "İdarəetmə, vergi və icarə məsuliyyəti yoxdur;",
    "service.investment.special.benefit3": "100% qanuni Golden Visa və 5 il ərzində vətəndaşlıq yolu;",
    "service.investment.special.benefit4": "Lisenziyalı peşəkarlar tərəfindən idarə olunur, fəaliyyət nəticələri ilə sübut edilmiş tarixçəyə malikdir;",
    "service.investment.special.benefit5": "Bəzi hallarda ilkin gəlir payı ilk 6–12 ay ərzində mümkündür.",


    "service.corporate.title": "Korporativ Strukturlaşdırma və Məsləhət Xidməti",
    "service.corporate.subtitle": "Sizin Avropa İttifaqında tam uyğun fəaliyyət göstərən biznes qurmaq üçün qapınız. İstər yeni şirkət açmaq, istər mövcud biznesinizi genişləndirmək istəyirsinizsə — biz sizə Portuqaliyada uğur qazanmaq üçün tam hüquqi və əməliyyat çərçivəsi təqdim edirik. ",
    "service.corporate.offer": "Biz nə təklif edirik:",
    "service.corporate.offerstep1": "Şirkət qeydiyyatı (LDA, SA və ya filial) – tam qanuni uyğunluqla;",
    "service.corporate.offerstep2": "Vergi səmərəliliyini artırmaq və Golden Visa proqramına uyğunluğu təmin etmək üçün strateji korporativ strukturlaşdırma;",
    "service.corporate.offerstep3": "NIF, ƏDV (VAT), sosial sığorta və korporativ bank hesablarının tam açılması;",
    "service.corporate.offerstep4": "Yerli əmək qanunvericiliyi, intellektual mülkiyyət qorunması və biznes lisenziyalaşdırılması üzrə məsləhət;",
    "service.corporate.offerstep5": "Etibarlı mühasiblər, hüquqşünaslar və maliyyə məsləhətçiləri ilə əlaqələr.",
    "service.corporate.whyimportant": "Niyə bu vacibdir:",
    "service.corporate.whyimportantpoint1": "Sizə Golden Visa və ya D7 yaşayış icazəsi qazandıran biznes qurun;",
    "service.corporate.whyimportantpoint2": "•	İlk gündən tam qanuni fəaliyyət – uyğunluq problemlərindən yayınmaq;",
    "service.corporate.whyimportantpoint3": "•	Vergiləri optimallaşdırmaq üçün ağıllı strukturlaşdırma;",
    "service.corporate.whyimportantpoint4": " •	Biznesinizi yerli və ya Avropa bazarında genişləndirmək imkanı.",


    "service.legal.title": "Hüquqi və Konsulluq Sənədləşdirilməsi Dəstəyi",
    "service.legal.offerTitle": "Biz nə təklif edirik:",
    "service.legal.offer1": "Viza, yaşayış və vətəndaşlıq üçün tələb olunan bütün sənədlərin hazırlanması;",
    "service.legal.offer2": "Təsdiqlənmiş tərcümələr, apostil və səfirliklərlə əlaqələndirmə;",
    "service.legal.offer3": "Etibarnamələr, andlı bəyanatlar və uyğunluq sənədlərinin hazırlanması və notarial təsdiqi;",
    "service.legal.offer4": "Yaşayış icazələrinin təsdiqlənməsi üçün AIMA (Portuqaliya Miqrasiya Agentliyi) ilə tam təmsilçilik;",
    "service.legal.offer5": "Konsulluqda görüşlərin təyin olunması və biometrik prosedurlar üzrə istiqamətləndirmə;",
    "service.legal.offer6": "Sənədlərin yenilənməsi, hüquqi sorğular və uyğunluq yoxlamaları üzrə davamlı dəstək.",

    "service.legal.whyTitle": "Niyə bu vacibdir:",

    "service.legal.why1": "Texniki səhvlər səbəbindən yaranan gecikmə və rədd hallarından yayınmaq;",
    "service.legal.why2": "Sənədlərin Portuqaliya hüquqi standartlarına tam uyğunluğunu təmin etmək;",
    "service.legal.why3": "Zaman itirməmək üçün bütün notarial, tərcümə və konsulluq mərhələlərini biz idarə edirik;",
    "service.legal.why4": "Portuqaliya və Azərbaycan daxilində etibarlı hüquqi nümayəndəlik.",

    "service.legal.footerText": "Hər forma. Hər möhür. Hər son tarix — hüquq komandamız tərəfindən idarə olunur.",



    "service.network.title": "İcma və Peşəkar Şəbəkəyə İntegrasiya",
    "service.network.subtitle": "Sadəcə köç etməyin — mənsub olun. Biz sizə Portuqaliyanın sosial, mədəni və peşəkar mühitinə inteqrasiya etməyə kömək edirik — beləliklə, siz özünüzü ziyarətçi kimi deyil, icmanın bir hissəsi kimi hiss edirsiniz.",
    "service.network.description": "Biz sizə Portuqaliyanın sosial, mədəni və peşəkar mühitinə inteqrasiya etməyə kömək edirik — beləliklə, siz özünüzü ziyarətçi kimi deyil, icmanın bir hissəsi kimi hiss edirsiniz.",

    "service.network.offerTitle": "Biz nə təklif edirik:",

    "service.network.offer1": "Ekspat dairələri, diaspor icmaları və biznes assosiasiyalarına tanışlıqlar;",
    "service.network.offer2": "Sənaye tədbirləri, startap mərkəzləri və investisiya forumlarına dəvətlər;",
    "service.network.offer3": "İngilis dilli peşəkarlarla əlaqələr: həkimlər, hüquqşünaslar, mentorlar;",
    "service.network.offer4": "Ailələr üçün dəstək: valideynlik qrupları, özəl məktəb icmaları, relokasiya görüşləri;",
    "service.network.offer5": "Gündəlik həyatla bağlı məsləhətlər: harada yaşamalı, alış-veriş etməli, əlaqə qurmalı və inkişaf etməli.",

    "service.network.benefitsTitle": "Üstünlüklər:",

    "service.network.benefit1": "Ailələr və sahibkarlar üçün daha sürətli sosial adaptasiya;",
    "service.network.benefit2": "Etibarlı peşəkar tövsiyələr — təcrübə yolu ilə deyil, doğrulanmış əlaqələrlə;",
    "service.network.benefit3": "Həqiqi insan əlaqələri, biznesin inkişafı və şəxsi rifah üçün təməl yaradır;",
    "service.network.benefit4": "İllərlə deyil, aylarla Portuqaliyada özünüzü evdə hiss edin.",



    "service.tour.title": "Tur Paketi",
    "service.tour.subtitle": "Portuqaliyanı turist kimi yox — gələcək eviniz kimi görün.",

    "service.tour.includedTitle": "Nə daxildir:",

    "service.tour.included1": "3–5 günlük bələdçi turu: Lissabon, Cascais, Porto, Setúbal və Algarve bölgələrini əhatə edir;",
    "service.tour.included2": "Daşınmaz əmlaka baxışlar (yaşayış və investisiya yönümlü), məktəblər, klinikalar və məhəllələr;",
    "service.tour.included3": "Bank görüşləri, daşınmaz əmlak təqdimatları və hüquqi konsultasiyalar;",
    "service.tour.included4": "Ekspat ailələri, biznes sahibləri və relokasiya mütəxəssisləri ilə görüşlər;",
    "service.tour.included5": "Hava limanından qarşılanma, otel tövsiyələri və istəyə görə şəxsi sürücü xidməti.",

    "service.tour.benefitsTitle": "Üstünlüklər:",

    "service.tour.benefit1": "İnvestisiya qərarını verməzdən əvvəl real təsəvvür əldə edin;",
    "service.tour.benefit2": "Məktəb, yaşayış və səhiyyə seçimlərini şəxsən yoxlayın;",
    "service.tour.benefit3": "Portuqaliyaya köçmüş insanlarla tanış olun və onların təcrübəsini öyrənin;",
    "service.tour.benefit4": "Bütün logistika bizdədir — siz sadəcə kəşf edin və suallarınızı verin.",


    // international schools
    "internationalSchools.title": "St. Julian’s School ",
    "internationalSchools.desc": "1932-ci ildən fəaliyyət göstərən Avropanın ən qədim Britaniya məktəblərindən biri. Məzunları Oksford, LSE və UCL kimi universitetlərə qəbul olunur.",
    "internationalSchools2.title": "Carlucci American International School of Lisbon (CAISL)",
    "internationalSchools2.desc": "IB (Beynəlxalq Bakalavriat) və Amerika tədris proqramları üzrə təhsil verən bir məktəbdir. Məzunları Harvard, MIT və Kolumbiya kimi universitetlərə qəbul olunur.",
    "internationalSchools3.title": "Oporto British School",
    "internationalSchools3.desc": "Portuqaliyanın şimalında yerləşən və Kembric Universiteti tərəfindən akkreditasiya edilmiş yüksək səviyyəli bir təhsil müəssisəsidir.",

    // Universities
    "universities.title": "Lissabon Universiteti",
    "universities.desc": "QS Dünya Universitet Reytinqində 2025-ci il üçün #262 yerdə qərarlaşıb.",
    "universities2.title": "NOVA Lissabon Universiteti",
    "universities2.desc": "“QS Top 50 Under 50” siyahısında yer alır.",
    "universities3.title": "Portuqaliyanın Katolik Universiteti",
    "universities3.desc": "Biznes və hüquq proqramlarına görə Financial Times tərəfindən qlobal reytinqdə yer alıb. İngilis dilində tədris olunan bakalavr və magistr proqramları mövcuddur: tibb, məlumat elmləri, mühəndislik və digər sahələr üzrə.",



    "testimonial.title": "Müştərilərimizin Rəyləri",
    "testimonial.desc": "Yüzlərlə ailənin niyə Portuqaliya səyahəti üçün CommuniQ-ya etibar etdiyini kəşf edin",

    "visa.d7": "D7 Viza (Passiv Gəlir Vizası)",
    "visa.keyfeatures": "Əsas Xüsusiyyətlər:",
    "visa.d7forwho1":
      "Passiv gəlirə sahib şəxslər: icarə, pensiya, royalti, faiz gəlirləri;",


    // Facts
    'fact.safety': 'Dünyada 7-ci ən təhlükəsiz ölkə',
    "fact.desc1": "Qlobal Sülh İndeksi 2024",
    "fact.desc2": "Avropa Təhlükəsizlik Reytinqi",
    "fact.desc3": "Avropa Sosial Sorğusu 2022",
    'fact.europe': 'Avropada 3-cü ən təhlükəsiz',
    'fact.welcoming': 'Ən qonaqpərvər cəmiyyətlərdən biri',


    "visa.d7forwho2": "Təqaüdçülər, daşınmaz əmlak sahibləri və investorlar.",
    "visa.d7forwho3": "Böyük məbləğdə investisiya tələb etmir;",
    "visa.d7forwho4": "Portuqaliyada tam hüquqi yaşayış icazəsi verir;",
    "visa.d7benefits1": "Şengen zonasında sərbəst hərəkət imkanı;",
    "visa.d7benefits2": "5 ildən sonra vətəndaşlıq hüququ;",

    "visa.d7benefits3":
      "Həyat yoldaşı və asılı uşaqları da viza proqramına daxildir.",

    "visa.d7dig": "D7 Viza (Rəqəmsal Köçəri Vizası)",
    "visa.d7digbenef1":
      "Etibarlı müqaviləsi olan freelancerlər və uzaqdan işləyənlər;",
    "visa.d7digbenef2": "Xarici müştərilərlə işləyən rəqəmsal köçərilər;",
    "visa.d7digbenef3":
      "Akademiklər, yaradıcı şəxslər və xidmət göstərən peşəkarlar.",
    "visa.d7digbenef4": "Uzaqdan işləyərək Portuqaliyada yaşamaq imkanı;",
    "visa.d7digbenef5":
      "Rəsmi əmək və ya xidmət müqaviləsinə əsaslanan qanuni qalma hüququ;",
    "visa.d7digbenef6": "Vətəndaşlığa aparan yol;",
    "visa.d7digbenef7":
      "Ailə üzvlərini də proqram daxilində gətirmək mümkündür;",
    "visa.d7digbenef8": "Köç və inteqrasiya üçün tam relokasiya dəstəyi.",

    "visa.goldenvisa": "Golden Visa",
    "visa.goldenvisaforwho1":
      "Avropa İttifaqı vətəndaşlığı və ya daimi yaşayış icazəsi əldə etmək istəyən şəxslər;",
    "visa.goldenvisaforwho2":
      "Elastik vergi rezidentliyi imkanına ehtiyacı olanlar;",
    "visa.goldenvisaforwho3":
      "Ailəsinin gələcəyini bir müraciətlə təmin etmək istəyən investorlar;",
    "visa.goldenvisaforwho4":
      "Sahibkarlar və yüksək gəlirli şəxslər (HNWIs) üçün Avropada qanuni “Plan B”.",
    "visa.goldenvisabenefits1":
      "Portuqaliyada ildə cəmi 7 gün qalmaq kifayətdir;",
    "visa.goldenvisabenefits2": "Vergi rezidentliyi məcburi deyil;",
    "visa.goldenvisabenefits3": "5 ildən sonra vətəndaşlıq müraciəti imkanı;",
    "visa.goldenvisabenefits4":
      "Bir investisiya bütün ailəni əhatə edir (məsələn, €500,000 investisiya fondu və ya €250,000 dövlət layihəsinə ianə);",
    "visa.goldenvisabenefits5":
      "Şengen zonasında sərbəst hərəkət və Avropada azadlıq təmin edir.",


    // Contact
    "contact.title": "Əlaqə",
    "contact.subtitle": "Sizin Portuqaliya səyahətinizə başlamağa hazırıq",
    "contact.form.title": "Mesaj Göndərin",
    "contact.form.desc": "Aşağıdakı formanı doldurun və 24 saat ərzində sizinlə əlaqə saxlayacağıq",
    "contact.form.visaType": "Viza Növü",
    "contact.form.selectVisa": "Maraqlandığınız viza növünü seçin",
    "contact.form.send": "Göndər",

    "contact.office": "Ofis",
    "contact.email": "Email",
    "contact.phone": "Telefon",
    "contact.hours": "Ofis saatları",
    "contact.monday": "Bazar ertəsi",
    "contact.friday": "Cümə",
    "contact.saturday": "Şənbə",
    "contact.location": "Ofis yeri",
    "contact.city": "Bakı, Azərbaycan",
    "contact.footer": "Portuqaliyaya köçən müştərilərə xidmət göstərir",

    "contact.ourlocation": "Ofisimizin Yeri",
    "contact.ourvisit": "Bizi ziyarət edin və ya məsləhətləşmə təyin edin",
    "contact.address": "Bakixanov qəsəbəsi, 105 Sülh küçəsi",
    "contact.googlemaps": "Google xəritələrində açın",

    // Footer
    "footer.tagline": "Portuqaliya immiqrasiya və köçürmə xidmətləri üçün etibarlı tərəfdaşınız.",
    "footer.services1": "Qızıl Viza Proqramı",
    "footer.services2": "D7 Viza Dəstəyi",
    "footer.services3": "Daşınmaz Əmlak Rəhbərliyi",
    "footer.services4": "Bank Quruluşu",
    "footer.services5": "Təhsil Xidmətləri",
    "footer.services6": "Səhiyyə Yönləndirməsi",

    "footer.rights": "Bütün hüquqlar qorunur.",


    // Pages
    "page.services.title": "Xidmətlərimiz",
    "page.visas.title": "Viza Növləri",


    "page.visas.subtitle": "Portuqaliyada və AB-də yaşamağın qanuni yolu. Bütün Şengen bölgəsində vizasız səyahət. Marşrutu seçin: gəlir əsaslı və ya investisiya əsaslı.",
    "page.investment.title": "İnvestisiya İmkanları",
    "page.investment.option": "İnvestisiya Seçimləri",
    "page.investment.optiondesc": "Niyə fond əsaslı Golden Visa investisiyaları? Texnologiya, daşınmaz əmlak, enerji və innovasiya sektorlarında diversifikasiyaya malik audit olunmuş, CMVM tərəfindən tənzimlənən strukturlar. Passiv gəlir və kapital artımı potensialı.",
    "page.investment.curated": "Seçilmiş İnvestisiya İmkanları",
    "page.investment.curated.desc": "Hökumət tərəfindən təsdiqlənmiş özəl kapital və risk kapitalı fondları. CMVM tərəfindən tənzimlənən strukturlar.",
    "page.investment.curated.tag1": "Daşınmaz əmlaka texniki xidmət göstərilmir",
    "page.investment.curated.tag2": "Peşəkar fond idarəetməsi",
    "page.investment.curated.tag3": "Şaxələndirilmiş portfellər",
    "page.investment.curated.tag4": "Erkən qaytarılma paylanmaları",
    "page.investment.curated.tag5": "Qızıl Viza yolu",


    "page.investment.estate": "Daşınmaz Əmlak İnvestisiyası",
    "page.investment.estate.desc": "Ən yaxşı yerlərdə Golden Visa uyğun əmlaklar. İpoteka dəstəyi ilə 70%-ə qədər maliyyələşdirmə.",
    "page.investment.estate.tag1": "Rezidentura ixtisası",
    "page.investment.estate.tag2": "Kirayə gəliri potensialı",
    "page.investment.estate.tag3": "Kapitalın artması",
    "page.investment.estate.tag4": "Bazardan kənar giriş",
    "page.investment.estate.tag5": "Tam həyat dövrü dəstəyi",


    "page.development.projects": "İnkişaf Layihələri",
    "page.development.projects.desc": "İnkişaf etməkdə olan dəyər zonalarında yeni tikinti və təmir layihələri.",
    "page.development.projects.tag1": "Tikintidən əvvəlki qiymət",
    "page.development.projects.tag2": "Fərdiləşdirmə seçimləri",
    "page.development.projects.tag3": "Müasir imkanlar",
    "page.development.projects.tag4": "İnkişaf etməkdə olan bazarlar",
    "page.development.projects.tag5": "İnkişaf tərəfdaşlıqları",


    "page.investment.region.title": "Əsas İnvestisiya Bölgələri",
    "page.investment.region.desc": "Portuqaliyanın ən çox axtarılan investisiya yerlərini araşdırın",
    "page.investment.city.desc1": "Zəngin tarixə və müasir şəraitə malik paytaxt",
    "page.investment.city.desc2": "UNESCO-nun Dünya İrsi Saytları ilə Mədəniyyət Mərkəzi",
    "page.investment.city.desc3": "Qızılı çimərlikləri olan sahil cənnəti",
    "page.investment.city.desc4": "Lissabon yaxınlığındakı zərif sahil şəhəri",
    "page.investment.city.desc5": "Təbii gözəlliyə malik şərab bölgəsi",
    "page.investment.city.price": "Qiymət Aralığı",


    "page.contact.subtitle": "Portuqaliya səyahətinizə başlamağa hazırsınız? Ekspert komandamızla əlaqə saxlayın",


    "page.investment.subtitle": "Portuqaliyanın inkişaf edən daşınmaz əmlak bazarında gəlirli investisiya imkanlarını kəşf edin",
    "page.education.title": "Təhsil və Səhiyyə",
    "page.education.subtitle": "Avropanın ən qonaqpərvər ölkələrindən birində dünya səviyyəli təhsil və tibbi xidmətlər təklif edən Portuqaliyanın beynəlxalq səviyyədə tanınmış universitetlərini və səhiyyə müəssisələrini kəşf edin.",
    "page.education.statistic.uni": "Universitetlər",
    "page.education.statistic.student": "Tələbələr",
    "page.education.statistic.employment": "Məşğulluq dərəcəsi",
    "page.education.statistic.health": "AB Səhiyyə",
    "page.education.top.uni": "Ən Yaxşı Universitetlər",
    "page.education.top.unidesc": "Portuqaliyanın dünya səviyyəli təhsil və tədqiqat imkanları təklif edən aparıcı müəssisələri",
    "page.education1.name": "Lissabon Universiteti",
    "page.education1.desc": "47.000-dən çox tələbəsi olan Portuqaliyanın ən böyük universiteti. 1911-ci ildən bəri tədqiqat və təhsil sahəsində mükəmməllik.",
    "page.education2.name": "Porto Universiteti",
    "page.education2.desc": "Mühəndislik və tibb proqramları ilə tanınan aparıcı dövlət universiteti. Güclü beynəlxalq tərəfdaşlıqlar.",
    "page.education3.name": "NOVA Universiteti Lissabon",
    "page.education3.desc": "İnnovativ proqramlara malik müasir universitet. Güclü biznes və iqtisadiyyat fakültələri.",
    "page.education.learn": "Daha çox",


    "page.education.journey": "Portuqaliyada təhsil səyahətinizə başlamağa hazırsınız?",
    "page.educatiom.journeydesc": "Universitetə ​​qəbul, məktəbə qəbul və səhiyyə qeydiyyatı üçün fərdiləşdirilmiş təlimatlar alın",
    "page.education.getstarted": "Bu gün başlayın",




    "page.contact.title": "Bizimlə Əlaqə Saxlayın",

    // Contact
    "contact.form.name": "Ad Soyad",
    "contact.form.email": "Email",
    "contact.form.phone": "Telefon",
    "contact.form.message": "Mesaj",
    "contact.form.submit": "Göndər",
    "contact.info.title": "Əlaqə Məlumatları",

    // Gallery Stats

    "gallery.title": "Portuqaliya Həyatı",
    "gallery.subtitle": "Portuqaliyada sizi gözləyən gözəlliyi, mədəniyyəti və həyat tərzini kəşf edin.",
    "stats.sunshine": "Günəşli Günlər",
    "stats.temperature": "Orta Temperatur",
    "stats.distance": "Portugaliyadakı Məsafə",
    "stats.time": "Lissabon vaxtı",
    "stats.hours": "gündə günəş işığı saatı",



    // Gallery Images
    "gallery.lisbon": "Tarixi Lissabon",
    "gallery.lisbon.desc": "Ənənəvi memarlıqla cazibədar məhəllələr",
    "gallery.coast": "Atlantik Sahili",
    "gallery.coast.desc": "Gözəl çimərliklər və sahil həyat tərzi",
    "gallery.modern": "Müasir Həyat",
    "gallery.modern.desc": "Müasir dizayn ənənəvi cazibə ilə birləşir",
    "gallery.community": "İctimai Həyat",
    "gallery.community.desc": "Canlı mədəniyyət və isti cəmiyyət",
  },

  ru:
  {
    "hero.title": "Ваше путешествие в Португалию начинается здесь",
    "hero.subtitle": "Наша миссия — обеспечить частным лицам и семьям безопасное, законное и комфортное начало новой жизни в Португалии. Мы сопровождаем клиентов на каждом этапе — от подачи заявки на визу до полной интеграции — с индивидуальным подходом под каждую потребность.",
    "hero.vision": "Стать самым надежным и профессиональным партнером в области релокации и иммиграции в Европейском Союзе. Мы не просто оформляем документы — мы сопровождаем людей в период важного жизненного перехода.",
    "hero.cta": "Иммиграционная стратегия",
    "hero.ourvision": "Наша Визия",
    "hero.approadmap": "Решения для проживания — описание услуг",

    "nav.home": "Главная",
    "nav.services": "Услуги",
    "nav.visas": "Визы",
    "nav.investment": "Инвестиции",
    "nav.education": "Образование",
    "nav.contact": "Контакты",

    "facts.safety": "7-я самая безопасная страна в мире",
    "facts.safety.desc": "Глобальный индекс мирa 2024",
    "facts.europe": "3-я по безопасности в Европе",
    "facts.europe.desc": "Европейский рейтинг безопасности",
    "facts.welcoming": "Самое гостеприимное общество",
    "facts.welcoming.desc": "Европейское социальное исследование, 2022",

    "services.title": "Наши услуги",
    "services.subtitle": "Полный комплекс услуг для вашего переезда в Португалию",
    "service.education": "Консультации по образованию",
    "service.medical": "Консультации по здравоохранению",
    "service.bankacc": "Открытие личных и корпоративных банковских счетов",
    "service.realestate": "Консультации по недвижимости",
    "service.investment": "Индивидуально подобранные инвестиционные возможности",
    "service.structuring": "Корпоративное структурирование и консультирование",
    "service.legalconsular": "Поддержка в юридической и консульской документации",
    "service.community": "Интеграция в сообщество и профессиональную сеть",
    "service.tour": "Тур-пакет",

    "education.title": "Образовательное направление",
    "education.subtitle": "Португалия предлагает доступ к лучшим международным школам Европы. Выпускники получают возможность поступать в университеты ЕС, Ivy League в США и ведущие университеты Великобритании.",
    "education.title2": "Самые престижные международные школы:",
    "education.school1name": "St. Julian’s School — одна из старейших британских школ Европы, основана в 1932 году. Выпускники поступают в Оксфорд, LSE, UCL.",
    "education.school2name": "Carlucci American International School of Lisbon (CAISL) — школа, обучающая по IB и американской программе. Выпускники поступают в Harvard, MIT и Columbia.",
    "education.school3name": "Oporto British School — престижное учебное заведение на севере Португалии, аккредитовано Кембриджским университетом.",

    "education.schoolsoffertitle": "Эти школы предлагают:",
    "education.schoolsoffer1": "IB, британские и американские программы",
    "education.schoolsoffer2": "100% обучение на английском языке",
    "education.schoolsoffer3": "Консультации по поступлению в университеты, подготовка к AP/SAT/IB",
    "education.schoolsoffer4": "Более 90% выпускников поступают в вузы Великобритании, США и ЕС",

    "uni.title": "Университеты",
    "uni.uni1name": "Лиссабонский университет",
    "uni.uni1desc": "Занимает #262 место в мировом рейтинге QS 2025.",
    "uni.uni2name": "Университет NOVA Лиссабона",
    "uni.uni2desc": "Входит в список «QS Top 50 Under 50». Португалия считается одной из самых дружелюбных стран для иммигрантов — уровень расизма и ксенофобии значительно ниже, чем в других странах ЕС. Источник: Европейское социальное исследование, 2022",
    "uni.uni3name": "Католический университет Португалии",
    "uni.uni3desc": "Отмечен Financial Times за программы в области бизнеса и права. Предлагает англоязычные бакалаврские и магистерские программы по медицине, data science, инженерии и др.",

    "health.title": "Консультации по здравоохранению",
    "health.subtitle": "По данным OECD, в Португалии одна из лучших государственных систем здравоохранения в Европе — а частный сектор развит ещё сильнее.",
    "health.title2": "Ведущие частные сети больниц",
    "health.subtitle2": "Топ частных медицинских сетей",
    "health.hosp1name": "Hospital da Luz",
    "health.hosp1desc": "Современная сеть больниц, обслуживающая международных пациентов.",
    "health.hosp2name": "CUF Saúde",
    "health.hosp2desc": "Более 20 частных больниц по всей стране, высокий уровень удовлетворенности пациентов.",
    "health.hosp3name": "Lusíadas Saúde",
    "health.hosp3desc": "Имеет аккредитацию JCI и соответствует международным стандартам качества.",

    "health.service": "Надёжные, доступные и быстрые услуги:",
    "health.service1": "Португалия входит в топ-10 стран Европы по качеству здравоохранения (OECD).",
    "health.service2": "Основные частные сети: Hospital da Luz, CUF, Lusíadas (JCI).",
    "health.service3": "Англоязычные врачи, современная диагностика, отсутствие очередей по ключевым направлениям.",
    "health.service4": "Международные страховые пакеты для семей.",
    "health.service5": "Полное сопровождение при регистрации, выборе плана и интеграции в систему здравоохранения.",

    "service.loan.title": "Помощь с ипотекой и кредитами",
    "service.loan.subtitle": "Некоторые клиенты использовали местные бизнес-кредиты для начала деятельности в Португалии и параллельно подавали на вид на жительство — превращая процесс релокации в прибыльную инвестицию.",
    "service.loan.service1": "Доступ к программам бизнес-кредитования для стартапов и расширения.",
    "service.loan.service2": "Мы готовим бизнес-планы, финансовые прогнозы и презентации для банков.",
    "service.loan.service3": "Помощь в получении государственных грантов, льготных кредитов и отраслевых субсидий.",
    "service.loan.service4": "Полное юридическое структурирование залога, гарантий и графиков платежей.",
    "service.loan.service5": "Подходит для проектов — от кафе и недвижимости до IT-стартапов и консалтинга.",
    "service.loan.business": "Для бизнес-владельцев",
    "service.loan.businessdesc": "Умный способ приобрести недвижимость или начать бизнес в Португалии — не рискуя всем капиталом.",
    "service.loan.whytitle": "Почему это важно?",
    "service.loan.whydesc": "Большинство считает, что покупка жилья или открытие бизнеса в Португалии требует сотни тысяч евро капитала. Но это не так: при правильном сопровождении банки могут профинансировать до 70% проекта — сохранив вашу ликвидность и обеспечив проживание. Независимо от того, ищете ли вы жильё в Кашкайше или хотите открыть бутик-отель в Порту, мы сопровождаем вас на всех этапах ипотеки.",


    "service.business.title": "Для владельцев бизнеса",
    "service.business.subtitle": "Вам не нужно выбирать между иммиграцией и инвестициями — с нами вы получите оба варианта стратегично и безопасно.",
    "service.business.difference.title": "Что нас отличает?",
    "service.business.difference.point1": "Прямые связи с ведущими банками Португалии — сокращаем сроки одобрения.",
    "service.business.difference.point2": "Структурирование кредитов согласно иммиграционным требованиям.",
    "service.business.difference.point3": "Полная двуязычная поддержка на переговорах, при подписании контрактов и выделении средств.",
    "service.business.difference.point4": "Мы объединяем весь процесс — кредит, визу, недвижимость и бизнес-проект в единый поток.",

    "service.business.storytitle": "Истории успеха:",
    "service.business.story.point1": "Семья из 4 человек купила дом в Кашкайше за €420 000, внесла всего €126 000 и получила Golden Visa.",
    "service.business.story.point2": "Азербайджанский предприниматель получил 0% льготный кредит на €100 000 сроком на 5 лет для розничного проекта.",
    "service.business.story.point3": "Клиенты получили одобрение за 15–20 дней благодаря нашим предварительным проверкам.",


    "service.bankacc.title": "Открытие личных и корпоративных счетов",
    "service.bankacc.subtitle": "Почему это важно? Банковский счет необходим как для ВНЖ, так и для ежедневных финансовых операций в Португалии.",
    "service.bankacc.step1": "Требуется для Golden Visa и D7;",
    "service.bankacc.step2": "Подтверждает источник дохода и финансовую состоятельность;",
    "service.bankacc.step3": "Необходим для покупки недвижимости, коммунальных платежей и страхования;",
    "service.bankacc.step4": "Критически важен для бизнеса — зарплаты, платежи, налоги.",

    "service.bankacc.offer.title": "Личные счета — что мы предлагаем:",
    "service.bankacc.offerstep1": "Быстрое открытие личных и корпоративных счетов;",
    "service.bankacc.offerstep2": "Прямой доступ к ведущим банкам: Millennium BCP, Novo Banco, Santander;",
    "service.bankacc.offerstep3": "Полная подготовка KYC-документов;",
    "service.bankacc.offerstep4": "Персональные менеджеры с англоязычным обслуживанием;",
    "service.bankacc.offerstep5": "Корпоративная структура, полностью соответствующая требованиям бизнеса;",
    "service.bankacc.offerstep6": "Стандартный срок: 5–7 рабочих дней.",

    "service.realestate.title": "Руководство по недвижимости",
    "service.realestate.subtitle": "Покупайте умно, живите лучше — создавайте портфель, который приносит доход даже во сне.",
    "service.realestate.title2": "Почему стоит инвестировать в недвижимость Португалии?",
    "service.realestate.point1": "Португалия — один из самых привлекательных рынков Европы по уровню жизни и доходности инвестиций.",
    "service.realestate.point2": "Нужен ли вам дом, курортная недвижимость или объект для аренды — мы подберём и полностью сопроводим сделку.",
    "service.realestate.offer.title": "Что мы обеспечиваем:",
    "service.realestate.offerstep1": "Подбор недвижимости, подходящей для ВНЖ (Golden Visa, D7);",
    "service.realestate.offerstep2": "Поиск в Лиссабоне, Порту, Алгарве, Кашкайше, Сетубале и растущих регионах;",
    "service.realestate.offerstep3": "Доступ к закрытым предложениям, девелоперским проектам и активам со скидкой;",
    "service.realestate.offerstep4": "Оценка доходности аренды, роста стоимости и ликвидности;",
    "service.realestate.offerstep5": "Организация просмотров, переговоры, юридическая проверка;",
    "service.realestate.offerstep6": "Полное сопровождение: резерв → CPCV → нотариус → регистрация;",
    "service.realestate.offerstep7": "Консультации по buy-to-let, co-living, лицензии AL и управлению недвижимостью.",


    "service.investment.special.title": "Отобранные инвестиционные возможности",
    "service.investment.special.subtitle": "«Мы не хотели заниматься арендаторами или управлением недвижимостью. Фондовая инвестиция дала нам чистый пассивный доход и простой путь к ВНЖ.» — клиент из Центральной Азии",
    "service.investment.special.question": "Почему фондовые инвестиции для Golden Visa?",
    "service.investment.special.point1": "Фонды, утвержденные государством;",
    "service.investment.special.point2": "Аудированные и регулируемые CMVM структуры;",
    "service.investment.special.point3": "Полное соответствие законодательству Golden Visa;",
    "service.investment.special.point4": "Диверсификация по секторам: технологии, недвижимость, энергия, инновации;",
    "service.investment.special.point5": "Пассивный доход и рост капитала;",
    "service.investment.special.point6": "ВНЖ для всей семьи при минимальном требовании по пребыванию.",

    "service.investment.special.benefit.title": "Основные преимущества:",
    "service.investment.special.benefit1": "Не требуется покупка недвижимости;",
    "service.investment.special.benefit2": "Нет управления, налоговой нагрузки и ответственности по аренде;",
    "service.investment.special.benefit3": "100% законный путь к Golden Visa и гражданству за 5 лет;",
    "service.investment.special.benefit4": "Управляется лицензированными профессионалами;",
    "service.investment.special.benefit5": "В некоторых случаях возможны ранние выплаты (6–12 месяцев).",


    "service.corporate.title": "Корпоративное структурирование",
    "service.corporate.subtitle": "Ваш доступ к созданию бизнеса в ЕС с полной юридической соответствией. Подходит как для открытия новой компании, так и для расширения существующей.",
    "service.corporate.offer": "Что мы предлагаем:",
    "service.corporate.offerstep1": "Регистрация компаний (LDA, SA, филиалы) — полностью легально;",
    "service.corporate.offerstep2": "Стратегическое структурирование для оптимизации налогов и соответствия Golden Visa;",
    "service.corporate.offerstep3": "Открытие NIF, VAT, соцстрахования и корпоративных счетов;",
    "service.corporate.offerstep4": "Консультации по трудовому праву, интеллектуальной собственности и лицензированию;",
    "service.corporate.offerstep5": "Доступ к проверенным бухгалтерам, юристам и финансовым экспертам.",
    "service.corporate.whyimportant": "Почему это важно:",
    "service.corporate.whyimportantpoint1": "Создайте бизнес, который даёт право на ВНЖ (Golden Visa или D7);",
    "service.corporate.whyimportantpoint2": "Полная юридическая соответствие с первого дня;",
    "service.corporate.whyimportantpoint3": "Оптимизация налогов;",
    "service.corporate.whyimportantpoint4": "Возможность масштабироваться на рынке ЕС.",


    "service.legal.title": "Юридическая и консульская поддержка",
    "service.legal.offerTitle": "Что мы предлагаем:",
    "service.legal.offer1": "Подготовка всех документов для виз, ВНЖ и гражданства;",
    "service.legal.offer2": "Заверенные переводы, апостиль и взаимодействие с консульствами;",
    "service.legal.offer3": "Подготовка доверенностей, деклараций и нотариальных документов;",
    "service.legal.offer4": "Полное представительство в AIMA для подтверждения ВНЖ;",
    "service.legal.offer5": "Запись в консульство и сопровождение биометрии;",
    "service.legal.offer6": "Продление документов, юридические запросы и проверки на соответствие.",

    "service.legal.whyTitle": "Почему это важно:",
    "service.legal.why1": "Избежать задержек и отказов из-за технических ошибок;",
    "service.legal.why2": "Обеспечить полное соответствие португальским юридическим стандартам;",
    "service.legal.why3": "Экономия времени — все нотариальные и консульские этапы берём на себя;",
    "service.legal.why4": "Надёжное юридическое сопровождение в Португалии и Азербайджане.",

    "service.legal.footerText": "Каждая форма. Каждый штамп. Каждый срок — под контролем нашей юридической команды.",


    "service.network.title": "Интеграция в сообщество и профессиональную сеть",
    "service.network.subtitle": "Не просто переезжайте — станьте частью общества. Мы помогаем вам интегрироваться в социальную, культурную и профессиональную среду Португалии.",
    "service.network.description": "Мы помогаем вам стать частью местного сообщества, культурной и профессиональной среды — чтобы вы чувствовали себя не посетителем, а жителем.",

    "service.network.offerTitle": "Что мы предлагаем:",
    "service.network.offer1": "Знакомство с экспат-группами, диаспорами и бизнес-ассоциациями;",
    "service.network.offer2": "Приглашения на отраслевые мероприятия, стартап-центры и инвестиционные форумы;",
    "service.network.offer3": "Доступ к англоязычным специалистам: врачам, юристам, менторам;",
    "service.network.offer4": "Поддержка для семей: родительские группы, частные школы, встречи релокации;",
    "service.network.offer5": "Советы по повседневной жизни: где жить, покупать, общаться и развиваться.",

    "service.network.benefitsTitle": "Преимущества:",
    "service.network.benefit1": "Быстрая социальная адаптация для семей и предпринимателей;",
    "service.network.benefit2": "Проверенные профессиональные рекомендации;",
    "service.network.benefit3": "Настоящие связи для развития бизнеса и личного благополучия;",
    "service.network.benefit4": "Чувствуйте себя как дома уже через несколько месяцев, а не лет.",


    "service.tour.title": "Тур-пакет",
    "service.tour.subtitle": "Посмотрите на Португалию не как турист — а как на будущий дом.",

    "service.tour.includedTitle": "Что включено:",
    "service.tour.included1": "3–5-дневный тур: Лиссабон, Кашкайш, Порту, Сетубал, Алгарве;",
    "service.tour.included2": "Просмотры недвижимости, школ, клиник и районов;",
    "service.tour.included3": "Встречи в банках, презентации объектов и юридические консультации;",
    "service.tour.included4": "Встречи с экспатами, предпринимателями и специалистами по релокации;",
    "service.tour.included5": "Встреча в аэропорту, рекомендации по отелям, при желании — личный водитель.",

    "service.tour.benefitsTitle": "Преимущества:",
    "service.tour.benefit1": "Примите инвестиционное решение на основе реального опыта;",
    "service.tour.benefit2": "Лично проверьте школы, районы, здравоохранение;",
    "service.tour.benefit3": "Познакомьтесь с теми, кто уже переехал;",
    "service.tour.benefit4": "Всю логистику берём на себя — вы просто исследуете.",


    "internationalSchools.title": "St. Julian’s School",
    "internationalSchools.desc": "Основана в 1932 году — одна из старейших британских школ Европы. Выпускники: Оксфорд, LSE, UCL.",
    "internationalSchools2.title": "Carlucci American International School of Lisbon (CAISL)",
    "internationalSchools2.desc": "Школа с программами IB и американским стандартом. Выпускники: Harvard, MIT, Columbia.",
    "internationalSchools3.title": "Oporto British School",
    "internationalSchools3.desc": "Премиальная школа на севере Португалии, аккредитована Cambridge University.",

    "universities.title": "Лиссабонский университет",
    "universities.desc": "Занимает #262 место в QS 2025.",
    "universities2.title": "NOVA Университет Лиссабона",
    "universities2.desc": "Входит в рейтинг «QS Top 50 Under 50».",
    "universities3.title": "Католический университет Португалии",
    "universities3.desc": "Отмечен Financial Times за образование в бизнесе и праве. Англоязычные программы по медицине, инженерии, data science и др.",

    "testimonial.title": "Отзывы наших клиентов",
    "testimonial.desc": "Узнайте, почему сотни семей доверяют CommuniQ поездку в Португалию",


    "visa.d7": "Виза D7 (Пассивный доход)",
    "visa.keyfeatures": "Основные особенности:",
    "visa.d7forwho1": "Лица с пассивным доходом: аренда, пенсия, роялти, проценты;",
    "fact.safety": "7-я самая безопасная страна в мире",
    "fact.desc1": "Глобальный индекс мира 2024",
    "fact.desc2": "Европейский рейтинг безопасности",
    "fact.desc3": "Европейское социальное исследование 2022",
    "fact.europe": "3-я по безопасности в Европе",
    "fact.welcoming": "Одно из самых гостеприимных обществ",

    "visa.d7forwho2": "Пенсионеры, владельцы недвижимости и инвесторы.",
    "visa.d7forwho3": "Не требует крупных инвестиций;",
    "visa.d7forwho4": "Дает полноценный ВНЖ в Португалии;",
    "visa.d7benefits1": "Свободное передвижение в Шенгенской зоне;",
    "visa.d7benefits2": "Право на гражданство через 5 лет;",
    "visa.d7benefits3": "Супруг и дети также включаются в программу.",

    "visa.d7dig": "D7 Digital Nomad (Виза для цифровых кочевников)",
    "visa.d7digbenef1": "Фрилансеры и удалённые сотрудники с контрактом;",
    "visa.d7digbenef2": "Цифровые кочевники, работающие на иностранных клиентов;",
    "visa.d7digbenef3": "Академики, творческие специалисты и профессионалы услуг;",
    "visa.d7digbenef4": "Возможность жить в Португалии, работая удаленно;",
    "visa.d7digbenef5": "Законное право проживания при наличии контракта;",
    "visa.d7digbenef6": "Путь к гражданству;",
    "visa.d7digbenef7": "Можно привезти семью;",
    "visa.d7digbenef8": "Полная поддержка по релокации.",

    "visa.goldenvisa": "Golden Visa",
    "visa.goldenvisaforwho1": "Желающие получить гражданство ЕС или ПМЖ;",
    "visa.goldenvisaforwho2": "Нуждающиеся в гибкой налоговой резидентности;",
    "visa.goldenvisaforwho3": "Инвесторы, желающие обеспечить будущее семьи одной заявкой;",
    "visa.goldenvisaforwho4": "Предприниматели и состоятельные лица (HNWI).",

    "visa.goldenvisabenefits1": "Достаточно 7 дней пребывания в год;",
    "visa.goldenvisabenefits2": "Налоговое резидентство не требуется;",
    "visa.goldenvisabenefits3": "Гражданство через 5 лет;",
    "visa.goldenvisabenefits4": "Одна инвестиция охватывает всю семью (например, фонд €500 000 или пожертвование €250 000);",
    "visa.goldenvisabenefits5": "Свободное передвижение по Шенгену и Европе.",

    "contact.title": "Контакты",
    "contact.subtitle": "Готовы начать своё путешествие в Португалию",
    "contact.form.title": "Отправить сообщение",
    "contact.form.desc": "Заполните форму ниже, и мы свяжемся с вами в течение 24 часов",
    "contact.form.visaType": "Тип визы",
    "contact.form.selectVisa": "Выберите интересующий тип визы",
    "contact.form.send": "Отправить",

    "contact.office": "Офис",
    "contact.email": "Email",
    "contact.phone": "Телефон",
    "contact.hours": "Рабочие часы",
    "contact.monday": "Понедельник",
    "contact.friday": "Пятница",
    "contact.saturday": "Суббота",
    "contact.location": "Местоположение",
    "contact.city": "Баку, Азербайджан",
    "contact.footer": "Обслуживаем клиентов, переезжающих в Португалию",

    "contact.ourlocation": "Наш офис",
    "contact.ourvisit": "Посетите нас или запишитесь на консультацию",
    "contact.address": "Бахиханов, ул. Сулх 105",
    "contact.googlemaps": "Открыть в Google Maps",

    "footer.tagline": "Ваш надежный партнер по иммиграции и релокации в Португалию.",
    "footer.services1": "Программа Golden Visa",
    "footer.services2": "Поддержка D7",
    "footer.services3": "Руководство по недвижимости",
    "footer.services4": "Банковская инфраструктура",
    "footer.services5": "Образовательные услуги",
    "footer.services6": "Медицинские консультации",
    "footer.rights": "Все права защищены.",

    "page.services.title": "Наши услуги",
    "page.visas.title": "Типы виз",

    "page.visas.subtitle": "Законный путь к проживанию в Португалии и ЕС. Свободное путешествие по Шенгену. Выберите маршрут: доход или инвестиции.",
    "page.investment.title": "Инвестиционные возможности",
    "page.investment.option": "Инвестиционные варианты",
    "page.investment.optiondesc": "Почему фондовые инвестиции? Диверсификация в технологии, недвижимость, энергию. Аудированные и регулируемые CMVM структуры. Пассивный доход и рост капитала.",
    "page.investment.curated": "Отобранные инвестиции",
    "page.investment.curated.desc": "Фонды, утвержденные государством и регулируемые CMVM.",
    "page.investment.curated.tag1": "Нет обслуживания недвижимости",
    "page.investment.curated.tag2": "Профессиональное управление",
    "page.investment.curated.tag3": "Диверсифицированные портфели",
    "page.investment.curated.tag4": "Ранние выплаты",
    "page.investment.curated.tag5": "Путь к Golden Visa",

    "page.investment.estate": "Инвестиции в недвижимость",
    "page.investment.estate.desc": "Лучшие объекты, подходящие для Golden Visa. До 70% финансирования по ипотеке.",
    "page.investment.estate.tag1": "Квалификация для резиденции",
    "page.investment.estate.tag2": "Потенциал аренды",
    "page.investment.estate.tag3": "Рост капитала",
    "page.investment.estate.tag4": "Доступ к закрытым сделкам",
    "page.investment.estate.tag5": "Полное сопровождение.",

    "page.development.projects": "Проекты застройки",
    "page.development.projects.desc": "Новые проекты в развивающихся районах.",
    "page.development.projects.tag1": "Цены на ранних этапах",
    "page.development.projects.tag2": "Возможности кастомизации",
    "page.development.projects.tag3": "Современная инфраструктура",
    "page.development.projects.tag4": "Развивающиеся рынки",
    "page.development.projects.tag5": "Партнерство с застройщиками",

    "page.investment.region.title": "Основные инвестиционные регионы",
    "page.investment.region.desc": "Изучите самые востребованные инвестиционные локации",
    "page.investment.city.desc1": "Столица с богатой историей и современной инфраструктурой",
    "page.investment.city.desc2": "Культурный центр с объектами ЮНЕСКО",
    "page.investment.city.desc3": "Побережье с золотыми пляжами",
    "page.investment.city.desc4": "Элегантный приморский город рядом с Лиссабоном",
    "page.investment.city.desc5": "Природная красота винодельческого региона",
    "page.investment.city.price": "Ценовой диапазон",

    "page.contact.subtitle": "Готовы начать путешествие в Португалию? Свяжитесь с нашей экспертной командой",
    "page.investment.subtitle": "Откройте прибыльные возможности на растущем рынке недвижимости Португалии",
    "page.education.title": "Образование и здравоохранение",
    "page.education.subtitle": "Откройте международно признанные университеты и ведущие клиники Португалии — одной из самых гостеприимных стран Европы.",
    "page.education.statistic.uni": "Университеты",
    "page.education.statistic.student": "Студенты",
    "page.education.statistic.employment": "Уровень трудоустройства",
    "page.education.statistic.health": "Здравоохранение ЕС",
    "page.education.top.uni": "Лучшие университеты",
    "page.education.top.unidesc": "Ведущие учебные и исследовательские учреждения Португалии",
    "page.education1.name": "Лиссабонский университет",
    "page.education1.desc": "Более 47 000 студентов. Основан в 1911 году. Один из самых крупных университетов страны.",
    "page.education2.name": "Университет Порту",
    "page.education2.desc": "Известен инженерными и медицинскими программами. Сильные международные партнерства.",
    "page.education3.name": "NOVA Университет Лиссабона",
    "page.education3.desc": "Современный университет с инновационными программами. Сильные факультеты бизнеса и экономики.",
    "page.education.learn": "Узнать больше",

    "page.education.journey": "Готовы начать образовательный путь в Португалии?",
    "page.educatiom.journeydesc": "Получите индивидуальные рекомендации по поступлению и регистрации",
    "page.education.getstarted": "Начать сегодня",

    "page.contact.title": "Свяжитесь с нами",

    "contact.form.name": "ФИО",
    "contact.form.email": "Email",
    "contact.form.phone": "Телефон",
    "contact.form.message": "Сообщение",
    "contact.form.submit": "Отправить",
    "contact.info.title": "Контактная информация",

    "gallery.title": "Жизнь в Португалии",
    "gallery.subtitle": "Откройте красоту, культуру и образ жизни Португалии.",
    "stats.sunshine": "Солнечные дни",
    "stats.temperature": "Средняя температура",
    "stats.distance": "Расстояние в Португалии",
    "stats.time": "Время в Лиссабоне",
    "stats.hours": "часов солнечного света в день",

    "gallery.lisbon": "Исторический Лиссабон",
    "gallery.lisbon.desc": "Очаровательные кварталы с традиционной архитектурой",
    "gallery.coast": "Атлантическое побережье",
    "gallery.coast.desc": "Прекрасные пляжи и прибрежный образ жизни",
    "gallery.modern": "Современная жизнь",
    "gallery.modern.desc": "Сочетание современных решений и традиционной эстетики",
    "gallery.community": "Общественная жизнь",
    "gallery.community.desc": "Живописная культура и тёплое сообщество"
  },

  en:

  {
    "hero.title": "Your journey to Portugal begins here",
    "hero.subtitle": "Our mission is to ensure that individuals and families can start a new life in Portugal safely, legally, and comfortably. We support clients at every stage — from visa application to full settlement — with a personalized approach tailored to every need.",
    "hero.vision": "To become the most reliable and professional partner in relocation and immigration across the European Union. We don’t just process paperwork — we guide people through one of the most important transitions of their lives.",
    "hero.cta": "Immigration Strategy",
    "hero.ourvision": "Our Vision",
    "hero.approadmap": "Residence Solutions — Service Overview",

    "nav.home": "Home",
    "nav.services": "Services",
    "nav.visas": "Visas",
    "nav.investment": "Investment",
    "nav.education": "Education",
    "nav.contact": "Contact",

    "facts.safety": "7th safest country in the world",
    "facts.safety.desc": "Global Peace Index 2024",
    "facts.europe": "3rd safest in Europe",
    "facts.europe.desc": "European Safety Ranking",
    "facts.welcoming": "Most welcoming society",
    "facts.welcoming.desc": "European Social Survey, 2022",

    "services.title": "Our Services",
    "services.subtitle": "A complete suite of services to support your relocation to Portugal",
    "service.education": "Education guidance",
    "service.medical": "Healthcare guidance",
    "service.bankacc": "Opening personal and corporate bank accounts",
    "service.realestate": "Real estate consultation",
    "service.investment": "Curated investment opportunities",
    "service.structuring": "Corporate structuring and advisory",
    "service.legalconsular": "Legal and consular documentation support",
    "service.community": "Community and professional network integration",
    "service.tour": "Relocation Tour Package",

    "education.title": "Education Pathway",
    "education.subtitle": "Portugal offers access to some of the most prestigious international schools in Europe. Their graduates gain entry to EU universities, Ivy League institutions in the US, and leading universities in the UK.",
    "education.title2": "Top International Schools:",
    "education.school1name": "St. Julian’s School — one of Europe’s oldest British schools, established in 1932. Graduates attend Oxford, LSE, UCL.",
    "education.school2name": "Carlucci American International School of Lisbon (CAISL) — an IB and American curriculum school. Graduates attend Harvard, MIT, Columbia.",
    "education.school3name": "Oporto British School — a prestigious institution in northern Portugal accredited by Cambridge University.",

    "education.schoolsoffertitle": "These schools offer:",
    "education.schoolsoffer1": "IB, British, and American curriculum programs",
    "education.schoolsoffer2": "100% English-language instruction",
    "education.schoolsoffer3": "University counseling and preparation for AP/SAT/IB exams",
    "education.schoolsoffer4": "Over 90% university acceptance rate in the UK, USA, and EU",

    "uni.title": "Universities",
    "uni.uni1name": "University of Lisbon",
    "uni.uni1desc": "Ranked #262 in the QS World University Rankings 2025.",
    "uni.uni2name": "NOVA University Lisbon",
    "uni.uni2desc": "Listed in the “QS Top 50 Under 50”. Portugal is considered one of the most immigrant-friendly societies — with significantly lower levels of racism and xenophobia compared to other EU countries. Source: European Social Survey, 2022",
    "uni.uni3name": "Catholic University of Portugal",
    "uni.uni3desc": "Recognized by the Financial Times for its business and law programs. Offers English-taught bachelor's and master’s degrees in medicine, data science, engineering, and more.",

    "health.title": "Healthcare Guidance",
    "health.subtitle": "According to OECD data, Portugal has one of the best public healthcare systems in Europe — and an even more advanced private healthcare sector.",
    "health.title2": "Leading Private Hospital Networks",
    "health.subtitle2": "Top Private Healthcare Networks",
    "health.hosp1name": "Hospital da Luz",
    "health.hosp1desc": "A modern hospital network serving international patients.",
    "health.hosp2name": "CUF Saúde",
    "health.hosp2desc": "A network of 20+ private hospitals nationwide with high patient satisfaction ratings.",
    "health.hosp3name": "Lusíadas Saúde",
    "health.hosp3desc": "Accredited by JCI and compliant with global healthcare standards.",

    "health.service": "Reliable, affordable, and fast services:",
    "health.service1": "Portugal ranks among Europe’s top 10 healthcare systems (OECD).",
    "health.service2": "Major private networks: Hospital da Luz, CUF, Lusíadas (JCI-accredited).",
    "health.service3": "English-speaking doctors, advanced diagnostics, no waiting lists for key specialties.",
    "health.service4": "International insurance packages for families.",
    "health.service5": "Full assistance with registration, plan selection, and integration into the healthcare system.",

    "service.loan.title": "Mortgage & Business Loan Assistance",
    "service.loan.subtitle": "Some clients used local business loans to launch companies in Portugal while simultaneously applying for residency — turning relocation into a profitable investment.",
    "service.loan.service1": "Access to business loan programs for startups and expansion.",
    "service.loan.service2": "Preparation of business plans, financial forecasts, and bank presentations.",
    "service.loan.service3": "Assistance with government funding programs, subsidized loans, and sector-based incentives.",
    "service.loan.service4": "Full legal structuring of collateral, guarantees, and payment schedules.",
    "service.loan.service5": "Suitable for cafés, real estate projects, IT startups, consulting, and retail businesses.",
    "service.loan.business": "For Business Owners",
    "service.loan.businessdesc": "A smart way to acquire real estate or start a business in Portugal — without risking all your capital.",
    "service.loan.whytitle": "Why it matters",
    "service.loan.whydesc": "Most people think buying property or starting a business in Portugal requires hundreds of thousands of euros. But this is not true: with the right support, banks may finance up to 70% of your project — helping you maintain liquidity while obtaining residency. Whether you're purchasing a home in Cascais or opening a boutique hotel in Porto, we guide you through every step.",

    "service.business.title": "For Business Owners",
    "service.business.subtitle": "No need to choose between immigration and investment — with us, you can achieve both strategically and safely.",
    "service.business.difference.title": "What sets us apart?",
    "service.business.difference.point1": "Direct partnerships with leading Portuguese banks — reducing approval time.",
    "service.business.difference.point2": "Structuring loans based on immigration requirements.",
    "service.business.difference.point3": "Full bilingual support during negotiations, contract signing, and fund allocation.",
    "service.business.difference.point4": "We coordinate your credit, visa, real estate, and business project within one unified process.",

    "service.business.storytitle": "Success Stories:",
    "service.business.story.point1": "A family of four bought a €420,000 home in Cascais with only €126,000 down payment — and received Golden Visa approval.",
    "service.business.story.point2": "An Azerbaijani entrepreneur secured a €100,000 interest-free loan for 5 years for a retail project.",
    "service.business.story.point3": "Clients received approval in 15–20 days thanks to our preliminary screening.",

    "service.bankacc.title": "Opening Personal & Corporate Bank Accounts",
    "service.bankacc.subtitle": "Why is this important? A bank account is essential for residency and day-to-day financial operations in Portugal.",
    "service.bankacc.step1": "Required for Golden Visa and D7;",
    "service.bankacc.step2": "Proves income sources and financial stability;",
    "service.bankacc.step3": "Necessary for property purchase, utilities, and insurance;",
    "service.bankacc.step4": "Critical for business — payments, payroll, and tax compliance.",

    "service.bankacc.offer.title": "Personal Accounts — What We Provide:",
    "service.bankacc.offerstep1": "Fast opening of personal and corporate accounts;",
    "service.bankacc.offerstep2": "Direct access to top banks: Millennium BCP, Novo Banco, Santander;",
    "service.bankacc.offerstep3": "Complete preparation of KYC documentation;",
    "service.bankacc.offerstep4": "Pre-assigned English-speaking relationship managers;",
    "service.bankacc.offerstep5": "Corporate bank structuring aligned with company registration and accounting;",
    "service.bankacc.offerstep6": "Standard timeline: 5–7 business days.",

    "service.realestate.title": "Real Estate Guidance",
    "service.realestate.subtitle": "Buy smart, live better — or build a portfolio that earns even while you sleep.",
    "service.realestate.title2": "Why invest in Portuguese real estate?",
    "service.realestate.point1": "Portugal is one of Europe’s most attractive real estate markets for both lifestyle and investment.",
    "service.realestate.point2": "Whether you need a primary home, vacation property, or rental investment — our specialists find, evaluate, and manage the entire transaction.",
    "service.realestate.offer.title": "What we provide:",
    "service.realestate.offerstep1": "Identification of properties eligible for residency (Golden Visa, D7 rental options);",
    "service.realestate.offerstep2": "Property search in Lisbon, Porto, Algarve, Cascais, Setúbal, and high-growth areas;",
    "service.realestate.offerstep3": "Access to off-market listings, developer projects, and discounted assets;",
    "service.realestate.offerstep4": "Evaluation of rental yields, appreciation potential, and exit liquidity;",
    "service.realestate.offerstep5": "Organizing viewings, negotiations, legal checks, and registration;",
    "service.realestate.offerstep6": "Full process management: reservation → CPCV → notary → registry;",
    "service.realestate.offerstep7": "Advice on buy-to-let, co-living, rental licenses (AL), and property management.",

    "service.investment.special.title": "Curated Investment Opportunities",
    "service.investment.special.subtitle": "“We didn’t want to deal with tenants or property management. A fund investment gave us passive income and a simple path to residency.” — Client from Central Asia",
    "service.investment.special.question": "Why choose Golden Visa fund investments?",
    "service.investment.special.point1": "Government-approved private equity and venture funds;",
    "service.investment.special.point2": "Audited and CMVM-regulated structures;",
    "service.investment.special.point3": "Full compliance with Golden Visa regulations;",
    "service.investment.special.point4": "Diversification across tech, real estate, energy, and innovation;",
    "service.investment.special.point5": "Passive income and capital appreciation;",
    "service.investment.special.point6": "Residency for the entire family with minimal stay requirements.",

    "service.investment.special.benefit.title": "Key Benefits:",
    "service.investment.special.benefit1": "No property purchase required;",
    "service.investment.special.benefit2": "No management, tax, or rental responsibilities;",
    "service.investment.special.benefit3": "100% legal path to Golden Visa and citizenship in 5 years;",
    "service.investment.special.benefit4": "Managed by licensed professionals with proven track records;",
    "service.investment.special.benefit5": "Early distributions possible in some cases (6–12 months).",

    "service.corporate.title": "Corporate Structuring",
    "service.corporate.subtitle": "Your gateway to establishing a fully compliant business in the European Union — whether launching a new company or expanding your current one.",
    "service.corporate.offer": "What we offer:",
    "service.corporate.offerstep1": "Company registration (LDA, SA, or branch) with full legal compliance;",
    "service.corporate.offerstep2": "Strategic structuring to optimize taxes and meet Golden Visa requirements;",
    "service.corporate.offerstep3": "Obtaining NIF, VAT, social security, and opening corporate bank accounts;",
    "service.corporate.offerstep4": "Guidance on labor law, intellectual property, and business licensing;",
    "service.corporate.offerstep5": "Connections to trusted accountants, lawyers, and financial advisors.",
    "service.corporate.whyimportant": "Why it matters:",
    "service.corporate.whyimportantpoint1": "Build a business that qualifies for residency (Golden Visa or D7);",
    "service.corporate.whyimportantpoint2": "Full legal compliance from day one;",
    "service.corporate.whyimportantpoint3": "Smarter tax optimization;",
    "service.corporate.whyimportantpoint4": "Scalability in local and EU markets.",

    "service.legal.title": "Legal & Consular Support",
    "service.legal.offerTitle": "What we offer:",
    "service.legal.offer1": "Preparation of all documents for visas, residency permits, and citizenship;",
    "service.legal.offer2": "Certified translations, apostilles, and coordination with embassies;",
    "service.legal.offer3": "Preparation of power-of-attorney, sworn declarations, and notarized documents;",
    "service.legal.offer4": "Full representation with AIMA for residency approval;",
    "service.legal.offer5": "Consulate appointment scheduling and biometric support;",
    "service.legal.offer6": "Document renewals, legal inquiries, and compliance checks.",

    "service.legal.whyTitle": "Why it matters:",
    "service.legal.why1": "Avoid delays or rejections due to technical mistakes;",
    "service.legal.why2": "Ensure full compliance with Portuguese legal standards;",
    "service.legal.why3": "Save time — we manage all notary, translation, and consular steps;",
    "service.legal.why4": "Reliable legal representation in Portugal and Azerbaijan.",

    "service.legal.footerText": "Every form. Every stamp. Every deadline — handled by our legal team.",

    "service.network.title": "Community & Professional Network Integration",
    "service.network.subtitle": "Don’t just move — belong. We help you integrate into Portugal’s social, cultural, and professional environment.",
    "service.network.description": "We help you become part of Portugal’s social, cultural, and professional community — so you feel like a resident, not a visitor.",

    "service.network.offerTitle": "What we offer:",
    "service.network.offer1": "Introductions to expat circles, diaspora groups, and business associations;",
    "service.network.offer2": "Invitations to industry events, startup hubs, and investment forums;",
    "service.network.offer3": "Connections to English-speaking professionals: doctors, lawyers, mentors;",
    "service.network.offer4": "Support for families: parenting groups, private school communities, relocation meetings;",
    "service.network.offer5": "Daily-life guidance: where to live, shop, connect, and grow.",

    "service.network.benefitsTitle": "Benefits:",
    "service.network.benefit1": "Faster social adaptation for families and entrepreneurs;",
    "service.network.benefit2": "Trusted professional recommendations;",
    "service.network.benefit3": "Real human connections for business and personal well-being;",
    "service.network.benefit4": "Feel at home in months instead of years.",

    "service.tour.title": "Relocation Tour Package",
    "service.tour.subtitle": "Discover Portugal not as a tourist — but as your future home.",

    "service.tour.includedTitle": "What’s Included:",
    "service.tour.included1": "3–5 day guided tour: Lisbon, Cascais, Porto, Setúbal, Algarve;",
    "service.tour.included2": "Property viewings (residential and investment), schools, clinics, neighborhoods;",
    "service.tour.included3": "Bank meetings, real estate presentations, and legal consultations;",
    "service.tour.included4": "Meetings with expat families, entrepreneurs, and relocation specialists;",
    "service.tour.included5": "Airport pickup, hotel recommendations, and optional private driver service.",

    "service.tour.benefitsTitle": "Benefits:",
    "service.tour.benefit1": "Understand the investment landscape before making a decision;",
    "service.tour.benefit2": "Evaluate education, healthcare, and living areas first-hand;",
    "service.tour.benefit3": "Learn directly from those who have already relocated;",
    "service.tour.benefit4": "We handle all logistics — you simply explore.",

    "internationalSchools.title": "St. Julian’s School",
    "internationalSchools.desc": "Established in 1932 — one of Europe’s oldest British schools. Graduates: Oxford, LSE, UCL.",
    "internationalSchools2.title": "Carlucci American International School of Lisbon (CAISL)",
    "internationalSchools2.desc": "IB and American curriculum school. Graduates: Harvard, MIT, Columbia.",
    "internationalSchools3.title": "Oporto British School",
    "internationalSchools3.desc": "Premium school in northern Portugal accredited by Cambridge University.",

    "universities.title": "University of Lisbon",
    "universities.desc": "Ranked #262 in QS 2025.",
    "universities2.title": "NOVA University Lisbon",
    "universities2.desc": "Included in the “QS Top 50 Under 50”.",
    "universities3.title": "Catholic University of Portugal",
    "universities3.desc": "Recognized by Financial Times for business and law education. Offers English-taught programs in medicine, engineering, data science, and more.",

    "testimonial.title": "Client Testimonials",
    "testimonial.desc": "Discover why hundreds of families trust CommuniQ with their relocation to Portugal",

    "visa.d7": "D7 Visa (Passive Income)",
    "visa.keyfeatures": "Key Features:",
    "visa.d7forwho1": "Individuals with passive income: rental income, pensions, royalties, interest earnings;",
    "fact.safety": "7th safest country in the world",
    "fact.desc1": "Global Peace Index 2024",
    "fact.desc2": "European Safety Ranking",
    "fact.desc3": "European Social Survey 2022",
    "fact.europe": "3rd safest in Europe",
    "fact.welcoming": "One of the most welcoming societies",

    "visa.d7forwho2": "Retirees, property owners, and investors.",
    "visa.d7forwho3": "Does not require large investments;",
    "visa.d7forwho4": "Provides full legal residency in Portugal;",
    "visa.d7benefits1": "Visa-free travel across the Schengen area;",
    "visa.d7benefits2": "Eligibility for citizenship after 5 years;",
    "visa.d7benefits3": "Spouse and dependent children can join the program.",

    "visa.d7dig": "D7 Digital Nomad Visa",
    "visa.d7digbenef1": "Freelancers and remote workers with valid contracts;",
    "visa.d7digbenef2": "Digital nomads working with foreign clients;",
    "visa.d7digbenef3": "Academics, creatives, and service professionals;",
    "visa.d7digbenef4": "Live in Portugal while working remotely;",
    "visa.d7digbenef5": "Legal right to reside with employment or service contracts;",
    "visa.d7digbenef6": "Pathway to citizenship;",
    "visa.d7digbenef7": "Family reunification available;",
    "visa.d7digbenef8": "Full relocation support.",

    "visa.goldenvisa": "Golden Visa",
    "visa.goldenvisaforwho1": "Individuals seeking EU citizenship or permanent residency;",
    "visa.goldenvisaforwho2": "Those needing flexible tax residency options;",
    "visa.goldenvisaforwho3": "Investors securing their family’s future with one application;",
    "visa.goldenvisaforwho4": "Entrepreneurs and high-net-worth individuals (HNWI).",

    "visa.goldenvisabenefits1": "Only 7 days per year required in Portugal;",
    "visa.goldenvisabenefits2": "Tax residency is optional;",
    "visa.goldenvisabenefits3": "Citizenship after 5 years;",
    "visa.goldenvisabenefits4": "One investment covers the entire family (€500,000 fund or €250,000 donation);",
    "visa.goldenvisabenefits5": "Visa-free travel and freedom across the Schengen zone.",

    "contact.title": "Contact",
    "contact.subtitle": "Ready to begin your journey to Portugal?",
    "contact.form.title": "Send a Message",
    "contact.form.desc": "Fill out the form below and we will contact you within 24 hours",
    "contact.form.visaType": "Visa Type",
    "contact.form.selectVisa": "Select your visa type",
    "contact.form.send": "Send",

    "contact.office": "Office",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.hours": "Office Hours",
    "contact.monday": "Monday",
    "contact.friday": "Friday",
    "contact.saturday": "Saturday",
    "contact.location": "Location",
    "contact.city": "Baku, Azerbaijan",
    "contact.footer": "Supporting clients relocating to Portugal",

    "contact.ourlocation": "Our Office",
    "contact.ourvisit": "Visit us or book a consultation",
    "contact.address": "Bakikhanov, 105 Sulh Street",
    "contact.googlemaps": "Open in Google Maps",

    "footer.tagline": "Your trusted partner for immigration and relocation to Portugal.",
    "footer.services1": "Golden Visa Program",
    "footer.services2": "D7 Visa Support",
    "footer.services3": "Real Estate Guidance",
    "footer.services4": "Banking Setup",
    "footer.services5": "Education Services",
    "footer.services6": "Healthcare Guidance",
    "footer.rights": "All rights reserved.",

    "page.services.title": "Our Services",
    "page.visas.title": "Visa Types",

    "page.visas.subtitle": "A legal pathway to residency in Portugal and the EU. Visa-free travel across the Schengen area. Choose your route: income-based or investment-based.",
    "page.investment.title": "Investment Opportunities",
    "page.investment.option": "Investment Options",
    "page.investment.optiondesc": "Why fund-based Golden Visa investments? Diversification across technology, real estate, energy, and innovation. Audited and CMVM-regulated structures. Passive income and capital growth.",
    "page.investment.curated": "Curated Investment Options",
    "page.investment.curated.desc": "Government-approved private equity and venture capital funds regulated by CMVM.",
    "page.investment.curated.tag1": "No property management required",
    "page.investment.curated.tag2": "Professional fund management",
    "page.investment.curated.tag3": "Diversified portfolios",
    "page.investment.curated.tag4": "Early return distributions",
    "page.investment.curated.tag5": "Golden Visa eligibility",

    "page.investment.estate": "Real Estate Investment",
    "page.investment.estate.desc": "Golden Visa-eligible properties in prime locations. Up to 70% mortgage financing.",
    "page.investment.estate.tag1": "Residency qualification",
    "page.investment.estate.tag2": "Rental income potential",
    "page.investment.estate.tag3": "Capital appreciation",
    "page.investment.estate.tag4": "Off-market access",
    "page.investment.estate.tag5": "Full lifecycle support",

    "page.development.projects": "Development Projects",
    "page.development.projects.desc": "New builds and renovation projects in high-growth areas.",
    "page.development.projects.tag1": "Pre-construction pricing",
    "page.development.projects.tag2": "Customization options",
    "page.development.projects.tag3": "Modern amenities",
    "page.development.projects.tag4": "Emerging markets",
    "page.development.projects.tag5": "Developer partnerships",

    "page.investment.region.title": "Key Investment Regions",
    "page.investment.region.desc": "Explore Portugal’s most sought-after investment locations",
    "page.investment.city.desc1": "The capital city with rich history and modern lifestyle",
    "page.investment.city.desc2": "A cultural hub with UNESCO World Heritage Sites",
    "page.investment.city.desc3": "A coastal paradise with golden beaches",
    "page.investment.city.desc4": "An elegant seaside town near Lisbon",
    "page.investment.city.desc5": "A wine region known for natural beauty",
    "page.investment.city.price": "Price Range",

    "page.contact.subtitle": "Ready to begin your journey to Portugal? Contact our expert team",
    "page.investment.subtitle": "Discover profitable opportunities in Portugal’s growing real estate market",
    "page.education.title": "Education & Healthcare",
    "page.education.subtitle": "Explore internationally recognized universities and leading medical institutions in one of Europe’s most welcoming countries.",
    "page.education.statistic.uni": "Universities",
    "page.education.statistic.student": "Students",
    "page.education.statistic.employment": "Employment Rate",
    "page.education.statistic.health": "EU Healthcare",
    "page.education.top.uni": "Top Universities",
    "page.education.top.unidesc": "Portugal’s leading academic and research institutions",
    "page.education1.name": "University of Lisbon",
    "page.education1.desc": "Over 47,000 students. Founded in 1911. One of the country’s largest universities.",
    "page.education2.name": "University of Porto",
    "page.education2.desc": "Leading institution known for engineering and medical programs. Strong global partnerships.",
    "page.education3.name": "NOVA University Lisbon",
    "page.education3.desc": "A modern university with innovative programs. Strong business and economics faculties.",
    "page.education.learn": "Learn More",

    "page.education.journey": "Ready to begin your education journey in Portugal?",
    "page.educatiom.journeydesc": "Receive personalized guidance for admissions, school placement, and healthcare registration",
    "page.education.getstarted": "Get Started",

    "page.contact.title": "Contact Us",

    "contact.form.name": "Full Name",
    "contact.form.email": "Email",
    "contact.form.phone": "Phone",
    "contact.form.message": "Message",
    "contact.form.submit": "Submit",
    "contact.info.title": "Contact Information",

    "gallery.title": "Life in Portugal",
    "gallery.subtitle": "Discover the beauty, culture, and lifestyle that await you in Portugal.",
    "stats.sunshine": "Sunny Days",
    "stats.temperature": "Average Temperature",
    "stats.distance": "Distance in Portugal",
    "stats.time": "Lisbon Time",
    "stats.hours": "hours of sunlight per day",

    "gallery.lisbon": "Historic Lisbon",
    "gallery.lisbon.desc": "Charming neighborhoods with traditional architecture",
    "gallery.coast": "Atlantic Coast",
    "gallery.coast.desc": "Beautiful beaches and coastal lifestyle",
    "gallery.modern": "Modern Living",
    "gallery.modern.desc": "Contemporary design blended with traditional charm",
    "gallery.community": "Community Life",
    "gallery.community.desc": "Vibrant culture and a warm community"
  },


  pt:

  {
    "hero.title": "A sua jornada para Portugal começa aqui",
    "hero.subtitle": "A nossa missão é garantir que indivíduos e famílias iniciem uma nova vida em Portugal de forma segura, legal e confortável. Acompanhamos os clientes em todas as etapas — desde o pedido de visto até à plena integração — com uma abordagem personalizada para cada necessidade.",
    "hero.vision": "Tornar-nos o parceiro mais confiável e profissional na área de relocalização e imigração na União Europeia. Não tratamos apenas de documentos — acompanhamos pessoas numa importante transição de vida.",
    "hero.cta": "Estratégia de Imigração",
    "hero.ourvision": "A Nossa Visão",
    "hero.approadmap": "Soluções de Residência — Descrição dos Serviços",

    "nav.home": "Início",
    "nav.services": "Serviços",
    "nav.visas": "Vistos",
    "nav.investment": "Investimentos",
    "nav.education": "Educação",
    "nav.contact": "Contacto",

    "facts.safety": "7.º país mais seguro do mundo",
    "facts.safety.desc": "Índice Global da Paz 2024",
    "facts.europe": "3.º mais seguro na Europa",
    "facts.europe.desc": "Classificação Europeia de Segurança",
    "facts.welcoming": "A sociedade mais acolhedora",
    "facts.welcoming.desc": "Inquérito Social Europeu, 2022",

    "services.title": "Os Nossos Serviços",
    "services.subtitle": "Serviços completos para apoiar a sua mudança para Portugal",
    "service.education": "Consultoria educacional",
    "service.medical": "Consultoria de saúde",
    "service.bankacc": "Abertura de contas bancárias pessoais e corporativas",
    "service.realestate": "Consultoria imobiliária",
    "service.investment": "Oportunidades de investimento personalizadas",
    "service.structuring": "Estruturação corporativa e consultoria",
    "service.legalconsular": "Apoio jurídico e documental consular",
    "service.community": "Integração na comunidade e rede profissional",
    "service.tour": "Pacote de visita de relocalização",

    "education.title": "Direção Educacional",
    "education.subtitle": "Portugal oferece acesso a algumas das escolas internacionais mais prestigiadas da Europa. Os diplomados podem ingressar em universidades da UE, Ivy League nos EUA e nas melhores universidades do Reino Unido.",
    "education.title2": "As escolas internacionais mais prestigiadas:",
    "education.school1name": "St. Julian’s School — uma das mais antigas escolas britânicas da Europa, fundada em 1932. Diplomados ingressam em Oxford, LSE, UCL.",
    "education.school2name": "Carlucci American International School of Lisbon (CAISL) — escola com programas IB e currículo americano. Diplomados ingressam em Harvard, MIT e Columbia.",
    "education.school3name": "Oporto British School — instituição de prestígio no norte de Portugal, acreditada pela Universidade de Cambridge.",

    "education.schoolsoffertitle": "Estas escolas oferecem:",
    "education.schoolsoffer1": "Programas IB, britânicos e americanos",
    "education.schoolsoffer2": "Ensino 100% em inglês",
    "education.schoolsoffer3": "Consultoria universitária, preparação para AP/SAT/IB",
    "education.schoolsoffer4": "Mais de 90% dos diplomados ingressam em universidades do Reino Unido, EUA e UE",

    "uni.title": "Universidades",
    "uni.uni1name": "Universidade de Lisboa",
    "uni.uni1desc": "Classificada em #262 no ranking QS 2025.",
    "uni.uni2name": "Universidade NOVA de Lisboa",
    "uni.uni2desc": "Incluída na lista «QS Top 50 Under 50». Portugal é um dos países mais acolhedores para imigrantes — níveis de racismo e xenofobia significativamente inferiores aos de outros países da UE. Fonte: Inquérito Social Europeu, 2022",
    "uni.uni3name": "Universidade Católica Portuguesa",
    "uni.uni3desc": "Reconhecida pelo Financial Times pelos seus programas nas áreas de negócios e direito. Oferece programas em inglês em medicina, data science, engenharia e muito mais.",

    "health.title": "Consultoria de Saúde",
    "health.subtitle": "Segundo a OCDE, Portugal possui um dos melhores sistemas públicos de saúde da Europa — e o setor privado é ainda mais avançado.",
    "health.title2": "Principais Redes Privadas de Hospitais",
    "health.subtitle2": "Top redes privadas de saúde",
    "health.hosp1name": "Hospital da Luz",
    "health.hosp1desc": "Rede moderna de hospitais com atendimento internacional.",
    "health.hosp2name": "CUF Saúde",
    "health.hosp2desc": "Mais de 20 hospitais privados em todo o país, com elevados índices de satisfação.",
    "health.hosp3name": "Lusíadas Saúde",
    "health.hosp3desc": "Acreditado pela JCI e alinhado com padrões internacionais de qualidade.",

    "health.service": "Serviços fiáveis, acessíveis e rápidos:",
    "health.service1": "Portugal está entre os 10 melhores sistemas de saúde da Europa (OCDE).",
    "health.service2": "Principais redes privadas: Hospital da Luz, CUF, Lusíadas (JCI).",
    "health.service3": "Médicos que falam inglês, diagnóstico moderno, ausência de filas para áreas essenciais.",
    "health.service4": "Pacotes de seguros internacionais para famílias.",
    "health.service5": "Acompanhamento completo no registo, seleção de planos e integração no sistema de saúde.",

    "service.loan.title": "Apoio em Créditos e Hipotecas",
    "service.loan.subtitle": "Alguns clientes utilizaram créditos empresariais locais para iniciar atividades em Portugal enquanto solicitavam residência — transformando a relocalização numa oportunidade de investimento lucrativo.",
    "service.loan.service1": "Acesso a programas de crédito empresarial para startups e expansão.",
    "service.loan.service2": "Preparação de planos de negócios, previsões financeiras e apresentações para bancos.",
    "service.loan.service3": "Apoio na obtenção de subsídios estatais, créditos bonificados e incentivos setoriais.",
    "service.loan.service4": "Estruturação legal completa de garantias, colaterais e planos de pagamento.",
    "service.loan.service5": "Ideal para projetos — desde cafés e imóveis até startups de TI e consultorias.",
    "service.loan.business": "Para Empresários",
    "service.loan.businessdesc": "Uma forma inteligente de adquirir imóveis ou iniciar um negócio em Portugal — sem arriscar todo o capital.",
    "service.loan.whytitle": "Por que é importante?",
    "service.loan.whydesc": "Muitos acreditam que comprar um imóvel ou iniciar um negócio em Portugal exige centenas de milhares de euros. Mas não é verdade: com a orientação correta, os bancos podem financiar até 70% do projeto — preservando liquidez e garantindo residência. Seja para comprar uma casa em Cascais ou abrir um boutique hotel no Porto, acompanhamos todas as etapas.",

    "service.business.title": "Para Proprietários de Empresas",
    "service.business.subtitle": "Não precisa escolher entre imigração e investimento — connosco obtém ambos de forma estratégica e segura.",
    "service.business.difference.title": "O que nos distingue?",
    "service.business.difference.point1": "Relações diretas com os principais bancos portugueses — reduzimos o tempo de aprovação.",
    "service.business.difference.point2": "Estruturação de créditos de acordo com requisitos de imigração.",
    "service.business.difference.point3": "Apoio bilingue completo em negociações, assinatura de contratos e desembolso de fundos.",
    "service.business.difference.point4": "Unificamos todo o processo — crédito, visto, imóveis e projeto empresarial.",

    "service.business.storytitle": "Histórias de Sucesso:",
    "service.business.story.point1": "Família de 4 pessoas comprou casa em Cascais por €420.000 com apenas €126.000 de entrada — obtendo o Golden Visa.",
    "service.business.story.point2": "Empresário do Azerbaijão obteve crédito bonificado a 0% de €100.000 por 5 anos para um projeto de retalho.",
    "service.business.story.point3": "Clientes receberam aprovação em 15–20 dias graças às nossas verificações preliminares.",

    "service.bankacc.title": "Abertura de Contas Bancárias Pessoais e Empresariais",
    "service.bankacc.subtitle": "Porque é importante? Uma conta bancária é essencial para a residência e para operações financeiras do dia a dia em Portugal.",
    "service.bankacc.step1": "Necessária para Golden Visa e D7;",
    "service.bankacc.step2": "Comprova fonte de rendimento e estabilidade financeira;",
    "service.bankacc.step3": "Necessária para compra de imóveis, serviços públicos e seguros;",
    "service.bankacc.step4": "Crítica para empresas — salários, pagamentos, impostos.",

    "service.bankacc.offer.title": "Contas Pessoais — O que oferecemos:",
    "service.bankacc.offerstep1": "Abertura rápida de contas pessoais e corporativas;",
    "service.bankacc.offerstep2": "Acesso direto aos bancos líderes: Millennium BCP, Novo Banco, Santander;",
    "service.bankacc.offerstep3": "Preparação completa de documentos KYC;",
    "service.bankacc.offerstep4": "Gestores pessoais que falam inglês;",
    "service.bankacc.offerstep5": "Estruturação bancária alinhada com requisitos empresariais;",
    "service.bankacc.offerstep6": "Prazo padrão: 5–7 dias úteis.",

    "service.realestate.title": "Consultoria Imobiliária",
    "service.realestate.subtitle": "Compre com inteligência, viva melhor — ou construa um portefólio que gere rendimento passivo.",
    "service.realestate.title2": "Porque investir no mercado imobiliário português?",
    "service.realestate.point1": "Portugal é um dos mercados imobiliários mais atrativos da Europa.",
    "service.realestate.point2": "Quer precise de casa própria, imóvel de férias ou investimento — encontramos e acompanhamos todo o processo.",
    "service.realestate.offer.title": "O que garantimos:",
    "service.realestate.offerstep1": "Seleção de imóveis elegíveis para residência (Golden Visa, D7);",
    "service.realestate.offerstep2": "Pesquisa em Lisboa, Porto, Algarve, Cascais, Setúbal e zonas de crescimento;",
    "service.realestate.offerstep3": "Acesso a oportunidades exclusivas, projetos de desenvolvedores e ativos com desconto;",
    "service.realestate.offerstep4": "Avaliação de rentabilidade, valorização e liquidez;",
    "service.realestate.offerstep5": "Organização de visitas, negociações e verificação legal;",
    "service.realestate.offerstep6": "Acompanhamento completo: reserva → CPCV → notário → registo;",
    "service.realestate.offerstep7": "Consultoria em buy-to-let, co-living, licenças AL e gestão de imóveis.",

    "service.investment.special.title": "Oportunidades de Investimento Selecionadas",
    "service.investment.special.subtitle": "“Não queríamos lidar com inquilinos ou gestão de imóveis. O investimento em fundos deu-nos rendimento passivo e um caminho simples para residência.” — cliente da Ásia Central",
    "service.investment.special.question": "Porquê escolher fundos para o Golden Visa?",
    "service.investment.special.point1": "Fundos aprovados pelo governo;",
    "service.investment.special.point2": "Estruturas auditadas e reguladas pela CMVM;",
    "service.investment.special.point3": "Total conformidade com requisitos do Golden Visa;",
    "service.investment.special.point4": "Diversificação: tecnologia, imobiliário, energia, inovação;",
    "service.investment.special.point5": "Rendimento passivo e valorização de capital;",
    "service.investment.special.point6": "Residência para toda a família com baixa exigência de estadia.",

    "service.investment.special.benefit.title": "Principais Benefícios:",
    "service.investment.special.benefit1": "Não requer compra de imóveis;",
    "service.investment.special.benefit2": "Sem gestão, impostos ou responsabilidades de arrendamento;",
    "service.investment.special.benefit3": "Caminho legal para Golden Visa e cidadania em 5 anos;",
    "service.investment.special.benefit4": "Gerido por profissionais licenciados;",
    "service.investment.special.benefit5": "Possibilidade de pagamentos antecipados (6–12 meses).",

    "service.corporate.title": "Estruturação Corporativa",
    "service.corporate.subtitle": "O seu acesso à criação de empresas na UE com plena conformidade legal. Ideal para novos negócios ou expansão de empresas existentes.",
    "service.corporate.offer": "O que oferecemos:",
    "service.corporate.offerstep1": "Registo de empresas (LDA, SA, sucursais);",
    "service.corporate.offerstep2": "Estratégias fiscais otimizadas e conformes ao Golden Visa;",
    "service.corporate.offerstep3": "Abertura de NIF, IVA, segurança social e contas corporativas;",
    "service.corporate.offerstep4": "Consultoria em direito laboral, propriedade intelectual e licenciamento;",
    "service.corporate.offerstep5": "Acesso a contabilistas, advogados e consultores confiáveis.",
    "service.corporate.whyimportant": "Por que é importante:",
    "service.corporate.whyimportantpoint1": "Crie um negócio que garanta direito a residência (Golden Visa ou D7);",
    "service.corporate.whyimportantpoint2": "Conformidade legal total desde o primeiro dia;",
    "service.corporate.whyimportantpoint3": "Otimização fiscal;",
    "service.corporate.whyimportantpoint4": "Capacidade de expansão no mercado europeu.",

    "service.legal.title": "Apoio Jurídico e Consular",
    "service.legal.offerTitle": "O que oferecemos:",
    "service.legal.offer1": "Preparação de documentos para vistos, residência e cidadania;",
    "service.legal.offer2": "Traduções certificadas, apostilas e coordenação com consulados;",
    "service.legal.offer3": "Procurações, declarações e documentos notariais;",
    "service.legal.offer4": "Representação completa junto à AIMA para aprovação de residência;",
    "service.legal.offer5": "Agendamento consular e apoio na biometria;",
    "service.legal.offer6": "Renovação de documentos, pedidos jurídicos e verificações de conformidade.",

    "service.legal.whyTitle": "Por que é importante:",
    "service.legal.why1": "Evitar atrasos e rejeições devido a erros técnicos;",
    "service.legal.why2": "Garantir total conformidade com normas jurídicas portuguesas;",
    "service.legal.why3": "Economia de tempo — tratamos todos os processos notariais e consulares;",
    "service.legal.why4": "Acompanhamento jurídico fiável em Portugal e no Azerbaijão.",

    "service.legal.footerText": "Cada formulário. Cada carimbo. Cada prazo — sob controlo da nossa equipa jurídica.",

    "service.network.title": "Integração na Comunidade e Rede Profissional",
    "service.network.subtitle": "Não se limite a mudar — integre-se. Ajudamos a inserir-se no ambiente social, cultural e profissional de Portugal.",
    "service.network.description": "Ajudamos a tornar-se parte da comunidade local — para que se sinta residente, não visitante.",

    "service.network.offerTitle": "O que oferecemos:",
    "service.network.offer1": "Introdução a grupos de expatriados, diásporas e associações empresariais;",
    "service.network.offer2": "Convites para eventos setoriais, hubs de startups e fóruns de investimento;",
    "service.network.offer3": "Acesso a profissionais que falam inglês: médicos, advogados, mentores;",
    "service.network.offer4": "Apoio para famílias: grupos de pais, escolas privadas, encontros de relocalização;",
    "service.network.offer5": "Orientação para a vida diária: onde viver, comprar, socializar e evoluir.",

    "service.network.benefitsTitle": "Benefícios:",
    "service.network.benefit1": "Adaptação social rápida para famílias e empresários;",
    "service.network.benefit2": "Recomendações profissionais confiáveis;",
    "service.network.benefit3": "Relações reais para crescimento pessoal e profissional;",
    "service.network.benefit4": "Sinta-se em casa em meses, não anos.",

    "service.tour.title": "Pacote de Visita de Relocalização",
    "service.tour.subtitle": "Veja Portugal não como turista — mas como o seu futuro lar.",

    "service.tour.includedTitle": "Inclui:",
    "service.tour.included1": "Tour de 3–5 dias: Lisboa, Cascais, Porto, Setúbal, Algarve;",
    "service.tour.included2": "Visitas a imóveis, escolas, clínicas e bairros;",
    "service.tour.included3": "Reuniões em bancos, apresentações imobiliárias e consultas jurídicas;",
    "service.tour.included4": "Encontros com expatriados, empresários e especialistas em relocalização;",
    "service.tour.included5": "Receção no aeroporto, recomendações de hotéis, opção de motorista privado.",

    "service.tour.benefitsTitle": "Benefícios:",
    "service.tour.benefit1": "Tome decisões de investimento com base em experiência real;",
    "service.tour.benefit2": "Avalie escolas, bairros e serviços de saúde pessoalmente;",
    "service.tour.benefit3": "Conheça pessoas que já se mudaram;",
    "service.tour.benefit4": "Tratamos de toda a logística — explore sem preocupações.",

    "internationalSchools.title": "St. Julian’s School",
    "internationalSchools.desc": "Fundada em 1932 — uma das mais antigas escolas britânicas da Europa. Diplomados: Oxford, LSE, UCL.",
    "internationalSchools2.title": "Carlucci American International School of Lisbon (CAISL)",
    "internationalSchools2.desc": "Escola com programas IB e currículo americano. Diplomados: Harvard, MIT, Columbia.",
    "internationalSchools3.title": "Oporto British School",
    "internationalSchools3.desc": "Escola premiada no norte de Portugal, acreditada pela Cambridge University.",

    "universities.title": "Universidade de Lisboa",
    "universities.desc": "Classificada em #262 no QS 2025.",
    "universities2.title": "Universidade NOVA de Lisboa",
    "universities2.desc": "Incluída na lista «QS Top 50 Under 50».",
    "universities3.title": "Universidade Católica Portuguesa",
    "universities3.desc": "Reconhecida pelo Financial Times nas áreas de negócios e direito. Oferece programas em inglês em medicina, engenharia, data science e outras áreas.",

    "testimonial.title": "Testemunhos dos Nossos Clientes",
    "testimonial.desc": "Saiba por que centenas de famílias confiam na CommuniQ para a sua mudança para Portugal",

    "visa.d7": "Visto D7 (Rendimento Passivo)",
    "visa.keyfeatures": "Características principais:",
    "visa.d7forwho1": "Pessoas com rendimentos passivos: arrendamento, pensões, royalties, juros;",
    "fact.safety": "7.º país mais seguro do mundo",
    "fact.desc1": "Índice Global da Paz 2024",
    "fact.desc2": "Classificação Europeia de Segurança",
    "fact.desc3": "Inquérito Social Europeu, 2022",
    "fact.europe": "3.º mais seguro na Europa",
    "fact.welcoming": "Uma das sociedades mais acolhedoras",

    "visa.d7forwho2": "Reformados, proprietários de imóveis e investidores.",
    "visa.d7forwho3": "Não exige grandes investimentos;",
    "visa.d7forwho4": "Garante residência legal completa em Portugal;",
    "visa.d7benefits1": "Livre circulação na zona Schengen;",
    "visa.d7benefits2": "Caminho para cidadania após 5 anos;",
    "visa.d7benefits3": "Cônjuge e filhos dependentes incluídos.",

    "visa.d7dig": "Visto D7 Digital Nomad",
    "visa.d7digbenef1": "Freelancers e trabalhadores remotos com contrato;",
    "visa.d7digbenef2": "Nómadas digitais que trabalham para clientes estrangeiros;",
    "visa.d7digbenef3": "Académicos, criativos e prestadores de serviços;",
    "visa.d7digbenef4": "Viver em Portugal trabalhando remotamente;",
    "visa.d7digbenef5": "Direito legal de residir mediante contrato;",
    "visa.d7digbenef6": "Caminho para cidadania;",
    "visa.d7digbenef7": "Possibilidade de trazer a família;",
    "visa.d7digbenef8": "Apoio completo de relocalização.",

    "visa.goldenvisa": "Golden Visa",
    "visa.goldenvisaforwho1": "Quem procura cidadania da UE ou residência permanente;",
    "visa.goldenvisaforwho2": "Quem precisa de flexibilidade fiscal;",
    "visa.goldenvisaforwho3": "Investidores que pretendem proteger o futuro da família com uma única candidatura;",
    "visa.goldenvisaforwho4": "Empresários e indivíduos de elevado património (HNWI).",

    "visa.goldenvisabenefits1": "Apenas 7 dias por ano obrigatórios em Portugal;",
    "visa.goldenvisabenefits2": "Residência fiscal opcional;",
    "visa.goldenvisabenefits3": "Cidadania após 5 anos;",
    "visa.goldenvisabenefits4": "Um investimento para toda a família (€500.000 em fundos ou €250.000 em doação);",
    "visa.goldenvisabenefits5": "Livre circulação na Europa e zona Schengen.",

    "contact.title": "Contacto",
    "contact.subtitle": "Pronto para iniciar a sua jornada para Portugal?",
    "contact.form.title": "Enviar Mensagem",
    "contact.form.desc": "Preencha o formulário abaixo e entraremos em contacto em até 24 horas",
    "contact.form.visaType": "Tipo de visto",
    "contact.form.selectVisa": "Selecione o tipo de visto",
    "contact.form.send": "Enviar",

    "contact.office": "Escritório",
    "contact.email": "Email",
    "contact.phone": "Telefone",
    "contact.hours": "Horário de atendimento",
    "contact.monday": "Segunda-feira",
    "contact.friday": "Sexta-feira",
    "contact.saturday": "Sábado",
    "contact.location": "Localização",
    "contact.city": "Baku, Azerbaijão",
    "contact.footer": "Apoiamos clientes que se mudam para Portugal",

    "contact.ourlocation": "O Nosso Escritório",
    "contact.ourvisit": "Visite-nos ou marque uma consulta",
    "contact.address": "Bakikhanov, Rua Sulh 105",
    "contact.googlemaps": "Abrir no Google Maps",

    "footer.tagline": "O seu parceiro confiável em imigração e relocalização para Portugal.",
    "footer.services1": "Programa Golden Visa",
    "footer.services2": "Apoio ao Visto D7",
    "footer.services3": "Consultoria Imobiliária",
    "footer.services4": "Infraestrutura Bancária",
    "footer.services5": "Serviços Educacionais",
    "footer.services6": "Consultoria de Saúde",
    "footer.rights": "Todos os direitos reservados.",

    "page.services.title": "Os Nossos Serviços",
    "page.visas.title": "Tipos de Vistos",

    "page.visas.subtitle": "Caminhos legais para residência em Portugal e na UE. Circulação livre no espaço Schengen. Escolha a sua via: rendimento ou investimento.",
    "page.investment.title": "Oportunidades de Investimento",
    "page.investment.option": "Opções de Investimento",
    "page.investment.optiondesc": "Porquê investimentos em fundos? Diversificação em tecnologia, imóveis, energia. Estruturas auditadas e reguladas pela CMVM. Rendimento passivo e valorização.",
    "page.investment.curated": "Investimentos Selecionados",
    "page.investment.curated.desc": "Fundos aprovados pelo governo e regulados pela CMVM.",
    "page.investment.curated.tag1": "Sem gestão de imóveis",
    "page.investment.curated.tag2": "Gestão profissional",
    "page.investment.curated.tag3": "Portefólios diversificados",
    "page.investment.curated.tag4": "Pagamentos antecipados",
    "page.investment.curated.tag5": "Elegível para Golden Visa",

    "page.investment.estate": "Investimento Imobiliário",
    "page.investment.estate.desc": "Imóveis elegíveis para Golden Visa. Até 70% de financiamento hipotecário.",
    "page.investment.estate.tag1": "Elegibilidade para residência",
    "page.investment.estate.tag2": "Potencial de arrendamento",
    "page.investment.estate.tag3": "Valorização do capital",
    "page.investment.estate.tag4": "Acesso exclusivo",
    "page.investment.estate.tag5": "Acompanhamento completo.",

    "page.development.projects": "Projetos de Construção",
    "page.development.projects.desc": "Novos projetos em regiões emergentes.",
    "page.development.projects.tag1": "Preços de pré-lançamento",
    "page.development.projects.tag2": "Personalização disponível",
    "page.development.projects.tag3": "Infraestrutura moderna",
    "page.development.projects.tag4": "Mercados de crescimento",
    "page.development.projects.tag5": "Parcerias com construtoras",

    "page.investment.region.title": "Principais Regiões de Investimento",
    "page.investment.region.desc": "Explore as localizações de investimento mais procuradas",
    "page.investment.city.desc1": "Capital com história rica e infraestrutura moderna",
    "page.investment.city.desc2": "Centro cultural com património da UNESCO",
    "page.investment.city.desc3": "Costa com praias douradas",
    "page.investment.city.desc4": "Cidade costeira elegante perto de Lisboa",
    "page.investment.city.desc5": "Região vinícola de grande beleza natural",
    "page.investment.city.price": "Intervalo de preços",

    "page.contact.subtitle": "Pronto para iniciar a sua jornada para Portugal? Contacte a nossa equipa especializada",
    "page.investment.subtitle": "Descubra oportunidades rentáveis no crescente mercado imobiliário de Portugal",
    "page.education.title": "Educação e Saúde",
    "page.education.subtitle": "Explore universidades reconhecidas internacionalmente e clínicas de referência num dos países mais acolhedores da Europa.",
    "page.education.statistic.uni": "Universidades",
    "page.education.statistic.student": "Estudantes",
    "page.education.statistic.employment": "Taxa de Emprego",
    "page.education.statistic.health": "Sistema de Saúde da UE",
    "page.education.top.uni": "Principais Universidades",
    "page.education.top.unidesc": "Instituições líderes de ensino e investigação em Portugal",
    "page.education1.name": "Universidade de Lisboa",
    "page.education1.desc": "Mais de 47.000 estudantes. Fundada em 1911. Uma das maiores universidades do país.",
    "page.education2.name": "Universidade do Porto",
    "page.education2.desc": "Reconhecida pelos seus programas de engenharia e medicina. Fortes parcerias internacionais.",
    "page.education3.name": "Universidade NOVA de Lisboa",
    "page.education3.desc": "Universidade moderna com programas inovadores. Forte nas áreas de negócios e economia.",
    "page.education.learn": "Saber mais",

    "page.education.journey": "Pronto para iniciar o seu percurso educacional em Portugal?",
    "page.educatiom.journeydesc": "Receba orientação personalizada para candidaturas e registos",
    "page.education.getstarted": "Começar agora",

    "page.contact.title": "Contacte-nos",

    "contact.form.name": "Nome completo",
    "contact.form.email": "Email",
    "contact.form.phone": "Telefone",
    "contact.form.message": "Mensagem",
    "contact.form.submit": "Enviar",
    "contact.info.title": "Informações de Contacto",

    "gallery.title": "Vida em Portugal",
    "gallery.subtitle": "Descubra a beleza, cultura e estilo de vida de Portugal.",
    "stats.sunshine": "Dias de sol",
    "stats.temperature": "Temperatura média",
    "stats.distance": "Distâncias em Portugal",
    "stats.time": "Hora em Lisboa",
    "stats.hours": "horas de luz solar por dia",

    "gallery.lisbon": "Lisboa Histórica",
    "gallery.lisbon.desc": "Bairros encantadores com arquitetura tradicional",
    "gallery.coast": "Costa Atlântica",
    "gallery.coast.desc": "Praias magníficas e estilo de vida costeiro",
    "gallery.modern": "Vida Moderna",
    "gallery.modern.desc": "Integração entre design contemporâneo e estética tradicional",
    "gallery.community": "Vida Comunitária",
    "gallery.community.desc": "Cultura vibrante e comunidade acolhedora"
  }



};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("communiq-language");
      return (saved as Language) || "en";
    }
    return "en";
  });

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("communiq-language", lang);
    }
  };

  const t = (key: string): string => {
    const translation =
      translations[language]?.[
      key as keyof (typeof translations)[typeof language]
      ];
    return translation || key;
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleSetLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
