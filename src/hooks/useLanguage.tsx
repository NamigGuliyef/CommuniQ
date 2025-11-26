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
    "service.corporate.whyimportantpoint1":"Sizə Golden Visa və ya D7 yaşayış icazəsi qazandıran biznes qurun;",
    "service.corporate.whyimportantpoint2":"•	İlk gündən tam qanuni fəaliyyət – uyğunluq problemlərindən yayınmaq;",
    "service.corporate.whyimportantpoint3":"•	Vergiləri optimallaşdırmaq üçün ağıllı strukturlaşdırma;",
    "service.corporate.whyimportantpoint4":" •	Biznesinizi yerli və ya Avropa bazarında genişləndirmək imkanı.",


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



    "visa.d7": "D7 Viza (Passiv Gəlir Vizası)",
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

    // Gallery
    "gallery.title": "Portuqaliya Həyatı",

    // Contact
    "contact.title": "Əlaqə",
    "contact.subtitle": "Sizin Portuqaliya səyahətinizə başlamağa hazırıq",
    "contact.form.title": "Mesaj Göndərin",
    "contact.form.send": "Göndər",
    "contact.phone": "Telefon",
    "contact.office": "Ofis",

    // Pages
    "page.services.title": "Xidmətlərimiz",
    "page.visas.title": "Viza Növləri",
    "page.investment.title": "İnvestisiya İmkanları",
    "page.education.title": "Təhsil və Səhiyyə",
    "page.contact.title": "Bizimlə Əlaqə Saxlayın",

    // Contact
    "contact.form.name": "Ad Soyad",
    "contact.form.email": "Email",
    "contact.form.phone": "Telefon",
    "contact.form.message": "Mesaj",
    "contact.form.submit": "Göndər",
    "contact.info.title": "Əlaqə Məlumatları",

    // Gallery Stats
    "stats.sunshine": "Günəşli Günlər",
    "stats.temperature": "Orta Temperatur",
    "stats.distance": "Portugaliyadakı Məsafə",
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
  ru: {
    
  "hero.title": "Ваше путешествие в Португалию начинается здесь",
  "hero.subtitle": "Наша миссия — обеспечить безопасное, законное и комфортное начало новой жизни в Португалии для частных лиц и семей. Мы сопровождаем клиентов на каждом этапе — от подачи визы до полной интеграции — предлагая индивидуальный подход под каждую потребность.",
  "hero.vision": "Наша цель — стать самым надежным и профессиональным партнером в сфере релокации и иммиграции в ЕС. Мы не просто оформляем документы — мы сопровождаем людей в одном из важнейших этапов их жизни.",
  "hero.cta": "Иммиграционная стратегия",
  "hero.ourvision": "Наша Визия",
  "hero.approadmap": "Решения для проживания – описание услуг",

  "nav.home": "Главная",
  "nav.services": "Услуги",
  "nav.visas": "Визы",
  "nav.investment": "Инвестиции",
  "nav.education": "Образование",
  "nav.contact": "Контакты",

  "facts.safety": "7-я самая безопасная страна в мире",
  "facts.safety.desc": "Глобальный индекс мира 2024",
  "facts.europe": "3-я по безопасности в Европе",
  "facts.europe.desc": "Рейтинг безопасности Европы",
  "facts.welcoming": "Самое гостеприимное общество",
  "facts.welcoming.desc": "Европейское социальное исследование, 2022",

  "services.title": "Наши услуги",
  "services.subtitle": "Полный пакет услуг, помогающий вам в процессе переезда в Португалию",
  "service.education": "Консультация по образованию",
  "service.medical": "Консультация по здравоохранению",
  "service.bankacc": "Открытие личных и корпоративных банковских счетов",
  "service.realestate": "Консультации по недвижимости",
  "service.investment": "Специально отобранные инвестиционные возможности",
  "service.structuring": "Корпоративное структурирование и консультации",
  "service.legalconsular": "Поддержка в юридическом и консульском оформлении",
  "service.community": "Интеграция в местное сообщество и профессиональные сети",
  "service.tour": "Тур-пакет",

  "education.title": "Образовательное направление",
  "education.subtitle": "Португалия предлагает доступ к одними из самых престижных международных школ Европы. Их выпускники поступают в университеты ЕС, американские Ivy League и ведущие вузы Великобритании.",
  "education.title2": "Самые престижные международные школы:",
  "education.school1name": "St. Julian’s School – одна из старейших британских школ в Европе (основана в 1932 году). Выпускники поступают в Оксфорд, LSE и UCL.",
  "education.school2name": "Carlucci American International School of Lisbon (CAISL) – школа с программами IB и американским учебным планом. Выпускники поступают в Harvard, MIT и Columbia.",
  "education.school3name": "Oporto British School – престижная школа на севере Португалии, аккредитованная Кембриджским университетом.",

  "education.schoolsoffertitle": "Эти школы предлагают:",
  "education.schoolsoffer1": "IB, британские и американские дипломные программы",
  "education.schoolsoffer2": "Обучение 100% на английском языке",
  "education.schoolsoffer3": "Консультации по поступлению в университеты и поддержка подготовки к AP/SAT/IB",
  "education.schoolsoffer4": "Более 90% выпускников поступают в университеты Великобритании, США и ЕС",

  "uni.title": "Университеты",
  "uni.uni1name": "Лиссабонский университет",
  "uni.uni1desc": "Занимает 262 место в рейтинге QS 2025.",
  "uni.uni2name": "Университет NOVA Лиссабона",
  "uni.uni2desc": "Входит в список “QS Top 50 Under 50”. Португалия считается одной из самых дружелюбных стран Европы для иммигрантов — уровень расизма и ксенофобии значительно ниже, чем в других странах ЕС. Источник: ESS 2022.",
  "uni.uni3name": "Католический университет Португалии",
  "uni.uni3desc": "Высоко оценен в глобальном рейтинге Financial Times за бизнес и право. Доступны англоязычные программы по медицине, data science, инженерии и другим направлениям.",

  "health.title": "Руководство по системе здравоохранения",
  "health.subtitle": "По данным OECD Health Statistics, Португалия обладает одной из лучших государственных систем здравоохранения в Европе, а частный сектор развит еще сильнее.",
  "health.title2": "Ведущие частные больничные сети",
  "health.subtitle2": "Топ частных медицинских сетей",
  "health.hosp1name": "Hospital da Luz",
  "health.hosp1desc": "Современные клиники с оборудованием последнего поколения и услугами для международных пациентов.",
  "health.hosp2name": "CUF Saúde",
  "health.hosp2desc": "Более 20 частных больниц по всей стране, высокие показатели удовлетворенности пациентов.",
  "health.hosp3name": "Lusíadas Saúde",
  "health.hosp3desc": "Имеет международную аккредитацию JCI и соответствует мировым медицинским стандартам.",

  "health.service": "Надежные, доступные и быстрые услуги:",
  "health.service1": "По рейтингу OECD Португалия входит в топ-10 стран Европы по качеству медицины.",
  "health.service2": "Ключевые частные сети: Hospital da Luz, CUF, Lusíadas (аккредитация JCI).",
  "health.service3": "Англоязычные врачи, передовая диагностика, приоритетное обслуживание экспатов — отсутствие очередей в основных специализациях.",
  "health.service4": "Международные страховые пакеты для семей.",
  "health.service5": "И интегрированная система сопровождения: регистрация, подбор планов и поддержка на всех этапах.",

  "service.loan.title": "Содействие в ипотеке и кредитовании",
  "service.loan.subtitle": "Некоторые клиенты использовали местные бизнес-кредиты для запуска бизнеса в Португалии и одновременно подали на ВНЖ — превратив переезд в выгодную инвестицию.",
  "service.loan.service1": "Доступ к стартовому или расширенному капиталу через бизнес-кредитные программы.",
  "service.loan.service2": "Мы подготавливаем бизнес-план, финансовые прогнозы и презентации для банков.",
  "service.loan.service3": "Помогаем воспользоваться государственными грантами, льготными кредитами и отраслевыми программами финансирования.",
  "service.loan.service4": "Полное юридическое сопровождение для залога, гарантий и графика платежей.",
  "service.loan.service5": "Подходит для различных сфер: от кафе и недвижимости до IT-стартапов и консалтинга.",
  "service.loan.business": "Для владельцев бизнеса",
  "service.loan.businessdesc": "Разумный способ приобрести недвижимость или начать бизнес в Португалии — без риска потери ликвидности.",
  "service.loan.whytitle": "Почему это важно?",
  "service.loan.whydesc": "Большинство клиентов думают, что для покупки жилья или открытия компании в Португалии требуются сотни тысяч евро первоначального капитала. Но это не так. С правильной подготовкой местные банки могут финансировать до 70% проекта — сохраняя вашу ликвидность и помогая получить ВНЖ. Хотите купить квартиру у моря в Лиссабоне или открыть бутик-отель в Порту? Мы сопровождаем вас на каждом этапе ипотечного процесса — юридически, финансово и стратегически.",

  "service.business.title": "Для владельцев бизнеса",
  "service.business.subtitle": "Вам не нужно выбирать между иммиграцией и инвестициями — с нами вы можете реализовать оба направления безопасно и стратегически.",
  "service.business.difference.title": "Что нас отличает?",
  "service.business.difference.point1": "Прямые связи с ведущими банками Португалии — значительно ускоряют получение одобрения.",
  "service.business.difference.point2": "Структурирование кредитов в соответствии с иммиграционными целями.",
  "service.business.difference.point3": "Полная двуязычная поддержка при переговорах, подписании контрактов и перечислении средств.",
  "service.business.difference.point4": "Наша команда координирует кредит, визу, недвижимость и бизнес-проект в едином процессе.",

  "service.business.storytitle": "Истории успеха клиентов:",
  "service.business.story.point1": "Семья из 4 человек приобрела дом в Кашкайше за €420,000, заплатив всего €126,000 первоначально — и получила Golden Visa.",
  "service.business.story.point2": "Азербайджанский предприниматель получил льготный кредит под 0% на сумму €100,000 сроком на 5 лет для ритейл-проекта.",
  "service.business.story.point3": "Наши клиенты получают одобрение в течение 15–20 дней благодаря нашей репутации и предварительной проверке документов.",

  "service.bankacc.title": "Открытие Личных и Корпоративных Банковских Счетов",
  "service.bankacc.subtitle": "Почему это важно? Открытие счета в Португалии критически важно как для ВНЖ, так и для ежедневных финансовых операций.",
  "service.bankacc.step1": "Требуется для Golden Visa и D7;",
  "service.bankacc.step2": "Подтверждает источник дохода и финансовую устойчивость;",
  "service.bankacc.step3": "Позволяет оплачивать недвижимость, коммунальные услуги и страховки;",
  "service.bankacc.step4": "Необходимо для бизнес-операций — платежей, зарплат и налоговой отчетности.",

  "service.bankacc.offer.title": "Личные счета — что мы предлагаем:",
  "service.bankacc.offerstep1": "Быстрое открытие личных и корпоративных счетов;",
  "service.bankacc.offerstep2": "Прямые связи с ведущими банками: Millennium BCP, Novo Banco, Santander;",
  "service.bankacc.offerstep3": "Полная подготовка KYC-документов;",
  "service.bankacc.offerstep4": "Предварительно назначенные англоязычные менеджеры обслуживания;",
  "service.bankacc.offerstep5": "Корпоративные банковские решения, полностью совместимые с регистрацией компании и бухгалтерией;",
  "service.bankacc.offerstep6": "Стандартный срок: 5–7 рабочих дней.",

  "service.realestate.title": "Руководство по недвижимости",
  "service.realestate.subtitle": "Покупайте умно, живите лучше — создавайте портфель, который приносит доход даже во сне.",
  "service.realestate.title2": "Почему стоит инвестировать в недвижимость Португалии?",
  "service.realestate.point1": "Португалия — один из самых привлекательных рынков Европы для жизни и инвестиций.",
  "service.realestate.point2": "Ищете ли вы жилье, дом для отдыха или объект под аренду — наша команда поможет найти подходящий вариант, оценить его и сопровождать сделку полностью.",
  "service.realestate.offer.title": "Что мы обеспечиваем:",
  "service.realestate.offerstep1": "Подбор объектов, соответствующих требованиям ВНЖ (Golden Visa, аренда для D7 и др.);",
  "service.realestate.offerstep2": "Поиск по Лиссабону, Порту, Алгарве, Кашкайшу, Сетубалу и растущим ценовым зонам;",
  "service.realestate.offerstep3": "Доступ к закрытым предложениям, застройщикам и дисконтным активам;",
  "service.realestate.offerstep4": "Оценка долгосрочной доходности, роста стоимости и ликвидности;",
  "service.realestate.offerstep5": "Организация просмотров, переговоры, подача предложений, юридическая проверка и регистрация;",
  "service.realestate.offerstep6": "Полное сопровождение процесса: резерв → CPCV → нотариус → реестр;",
  "service.realestate.offerstep7": "Консультации по buy-to-let, co-living, туристической лицензии и управлению.",

  "service.investment.special.title": "Специально отобранные инвестиционные возможности",
  "service.investment.special.subtitle": "«Мы не хотели заниматься арендаторами и управлением недвижимостью. Фондовая инвестиция дала нам чистый инвестиционный путь и простой способ получить ВНЖ». — Клиент из Центральной Азии",
  "service.investment.special.question": "Почему фондовые инвестиции для Golden Visa?",
  "service.investment.special.point1": "Государственно одобренные фонды частного капитала и венчурные фонды;",
  "service.investment.special.point2": "Аудируемые структуры под надзором CMVM — Комиссии по рынку ценных бумаг Португалии;",
  "service.investment.special.point3": "Полное соответствие законодательству Golden Visa;",
  "service.investment.special.point4": "Диверсификация в технологии, недвижимость, энергетику и инновации;",
  "service.investment.special.point5": "Пассивный доход и потенциал роста капитала;",
  "service.investment.special.point6": "Минимальные требования физического пребывания для всей семьи.",

  "service.investment.special.benefit.title": "Основные преимущества:",
  "service.investment.special.benefit1": "Нет необходимости покупать недвижимость;",
  "service.investment.special.benefit2": "Нет ответственности за управление, налоги или аренду;",
  "service.investment.special.benefit3": "Полностью законный путь к Golden Visa и гражданству за 5 лет;",
  "service.investment.special.benefit4": "Управление лицензированными профессионалами с доказанной доходностью;",
  "service.investment.special.benefit5": "В некоторых случаях ранние выплаты возможны уже через 6–12 месяцев.",

  "service.corporate.title": "Корпоративное структурирование и консультации",
  "service.corporate.subtitle": "Ваш путь к созданию полностью законного бизнеса в ЕС. Хотите открыть новую компанию или расширить существующий бизнес — мы обеспечим полный юридический и операционный фундамент для успеха в Португалии.",
  "service.corporate.offer": "Что мы предлагаем:",
  "service.corporate.offerstep1": "Регистрация компании (LDA, SA или филиал) — с полной юридической соответствием;",
  "service.corporate.offerstep2": "Стратегическое структурирование бизнеса для налоговой оптимизации и соответствия Golden Visa;",
  "service.corporate.offerstep3": "Полное оформление NIF, НДС, социальной защиты и корпоративного банковского счета;",
  "service.corporate.offerstep4": "Консультации по трудовому праву, защите интеллектуальной собственности и лицензированию бизнеса;",
  "service.corporate.offerstep5": "Связи с надежными бухгалтерами, юристами и финансовыми консультантами.",
  "service.corporate.whyimportant": "Почему это важно:",
  "service.corporate.whyimportantpoint1": "Постройте бизнес, который квалифицирует вас для Golden Visa или ВНЖ D7;",
  "service.corporate.whyimportantpoint2": "Полностью законная деятельность с первого дня — избегайте проблем соответствия;",
  "service.corporate.whyimportantpoint3": "Налоговая оптимизация через умное структурирование;",
  "service.corporate.whyimportantpoint4": "Возможность расширения бизнеса локально или на рынке ЕС.",

  "service.legal.title": "Юридическая и консульская поддержка",
  "service.legal.offerTitle": "Что мы предлагаем:",
  "service.legal.offer1": "Подготовка всех необходимых документов для визы, ВНЖ и гражданства;",
  "service.legal.offer2": "Заверенные переводы, апостиль и координация с посольствами;",
  "service.legal.offer3": "Подготовка и нотариальное заверение доверенностей, заявлений под присягой и документов соответствия;",
  "service.legal.offer4": "Полное представительство в AIMA (иммиграционное агентство Португалии) для одобрения ВНЖ;",
  "service.legal.offer5": "Назначение консульских встреч и поддержка по биометрии;",
  "service.legal.offer6": "Постоянная поддержка по продлению документов, юридическим вопросам и проверкам соответствия.",

  "service.legal.whyTitle": "Почему это важно:",
  "service.legal.why1": "Избегайте задержек и отказов из-за технических ошибок;",
  "service.legal.why2": "Ваши документы будут соответствовать юридическим стандартам Португалии;",
  "service.legal.why3": "Экономьте время — мы берем на себя весь нотариальный, переводческий и консульский процесс;",
  "service.legal.why4": "Надежное юридическое представительство в Португалии и Азербайджане.",

  "service.legal.footerText": "Каждая форма. Каждый штамп. Каждый срок — под контролем нашей юридической команды.",

  "service.network.title": "Интеграция в сообщество и профессиональные сети",
  "service.network.subtitle": "Не просто переезжайте — станьте частью сообщества.",
  "service.network.description": "Мы помогаем вам интегрироваться в социальную, культурную и профессиональную среду Португалии — чтобы вы чувствовали себя не гостем, а частью местного общества.",

  "service.network.offerTitle": "Что мы предлагаем:",
  "service.network.offer1": "Знакомства с экспат-кругами, диаспорами и бизнес-ассоциациями;",
  "service.network.offer2": "Приглашения на отраслевые мероприятия, стартап-хабы и инвестиционные форумы;",
  "service.network.offer3": "Контакты с англоязычными специалистами: врачи, юристы, наставники;",
  "service.network.offer4": "Поддержка семей: клубы для родителей, частные школьные сообщества, встречи по релокации;",
  "service.network.offer5": "Советы по повседневной жизни: где жить, делать покупки, строить связи и развиваться.",

  "service.network.benefitsTitle": "Преимущества:",
  "service.network.benefit1": "Быстрая социальная адаптация для семей и предпринимателей;",
  "service.network.benefit2": "Достоверные профессиональные рекомендации — без проб и ошибок;",
  "service.network.benefit3": "Настоящие человеческие связи — основа для развития бизнеса и личного благополучия;",
  "service.network.benefit4": "Чувствуйте себя как дома не через годы, а через месяцы.",

  "service.tour.title": "Тур-пакет",
  "service.tour.subtitle": "Посмотрите на Португалию не как турист — а как на будущий дом.",

  "service.tour.includedTitle": "Что входит:",

  "service.tour.included1": "3–5-дневный тур с гидом: Лиссабон, Кашкайш, Порту, Сетубал и Алгарве;",
  "service.tour.included2": "Объезды недвижимости (жилой и инвестиционной), школы, клиники и районы;",
  "service.tour.included3": "Банковские встречи, презентации недвижимости и юридические консультации;",
  "service.tour.included4": "Встречи с экспат-семьями, владельцами бизнеса и специалистами по релокации;",
  "service.tour.included5": "Трансфер из аэропорта, рекомендации по отелям и по желанию — личный водитель.",

  "service.tour.benefitsTitle": "Преимущества:",
  "service.tour.benefit1": "Получите реальное понимание перед инвестированием;",
  "service.tour.benefit2": "Лично оцените варианты школ, жилья и здравоохранения;",
  "service.tour.benefit3": "Познакомьтесь с людьми, которые уже переехали, и узнайте их опыт;",
  "service.tour.benefit4": "Мы берем на себя всю логистику — вы просто исследуйте и задавайте вопросы.",




    "visa.d7": "Виза D7 (Пассивный Доход)",
    "visa.d7forwho1":
      "Лица, имеющие пассивный доход: аренда, пенсия, роялти, проценты;",


    // Facts
    'fact.safety': '7-я самая безопасная страна в мире',
    "fact.desc1": "Глобальный индекс мира 2024",
    "fact.desc2": "Европейские рейтинги безопасности",
    "fact.desc3": "Европейский социальный опрос 2022",
    'fact.europe': '3-я самая безопасная в Европе',
    'fact.welcoming': 'Одно из самых гостеприимных обществ',


    "visa.d7forwho2": "Пенсионеры, владельцы недвижимости, инвесторы.",
    "visa.d7forwho3": "Не требует крупных инвестиций;",
    "visa.d7forwho4": "Полноценный законный вид на жительство в Португалии;",
    "visa.d7benefits1": "Свободное передвижение по Шенгенской зоне;",
    "visa.d7benefits2": "Возможность получения гражданства через 5 лет;",
    "visa.d7benefits3": "Включает супруга и несовершеннолетних детей.",

    "visa.d7dig": "Виза D7 (Виза Цифрового Кочевника)",

    "visa.d7digbenef1":
      "Фрилансеры и удалённые сотрудники с действующими контрактами;",
    "visa.d7digbenef2":
      "Цифровые кочевники, работающие с иностранными клиентами;",
    "visa.d7digbenef3": "Учёные, творческие специалисты и поставщики услуг.",
    "visa.d7digbenef4": "Возможность жить в Португалии, работая дистанционно;",
    "visa.d7digbenef5":
      "Законное пребывание на основании трудового или сервисного договора;",


    "visa.d7digbenef6": "Путь к гражданству Португалии;",
    "visa.d7digbenef7": "Возможность включить членов семьи;",
    "visa.d7digbenef8": "Полная поддержка при релокации и адаптации.",

    "visa.goldenvisa": "Golden Visa (Золотая Виза)",

    "visa.goldenvisaforwho1":
      "Для лиц, желающих получить гражданство ЕС или постоянный ВНЖ;",
    "visa.goldenvisaforwho2":
      "Для тех, кому важна гибкая налоговая резиденция;",
    "visa.goldenvisaforwho3":
      "Для инвесторов, стремящихся обеспечить будущее своей семьи одной заявкой;",
    "visa.goldenvisaforwho4":
      "Для предпринимателей и состоятельных лиц (HNWIs), ищущих законный “план B” в Европе.",
    "visa.goldenvisabenefits1":
      "Требуется всего 7 дней пребывания в год в Португалии;",
    "visa.goldenvisabenefits2": "Налоговое резидентство не обязательно;",
    "visa.goldenvisabenefits3":
      "Возможность подачи на гражданство через 5 лет;",
    "visa.goldenvisabenefits4":
      "Одна инвестиция покрывает всю семью (например, €500,000 в инвестиционные фонды или €250,000 в государственные проекты);",
    "visa.goldenvisabenefits5":
      "Полный доступ к Шенгенской зоне и свободное передвижение по Европе.",

    // Gallery
    "gallery.title": "Жизнь в Португалии",

    // Healthcare
    "healthcare.title": "Система Здравоохранения",

    // Contact
    "contact.title": "Контакты",
    "contact.subtitle": "Готовы начать ваше путешествие в Португалию",
    "contact.form.title": "Отправить Сообщение",
    "contact.form.send": "Отправить",
    "contact.phone": "Телефон",
    "contact.office": "Офис",

    // Pages
    "page.services.title": "Наши Услуги",
    "page.visas.title": "Типы Виз",
    "page.investment.title": "Инвестиционные Возможности",
    "page.education.title": "Образование и Здравоохранение",
    "page.contact.title": "Свяжитесь с Нами",

    // Contact
    "contact.form.name": "Имя Фамилия",
    "contact.form.email": "Email",
    "contact.form.phone": "Телефон",
    "contact.form.message": "Сообщение",
    "contact.form.submit": "Отправить",
    "contact.info.title": "Контактная Информация",

    // Gallery Stats
    "stats.sunshine": "Дней Солнца",
    "stats.temperature": "Средняя Температура",
    "stats.distance": "Расстояние до Португалии",
    "stats.hours": "часов солнечного света в день",

    // Gallery Images
    "gallery.lisbon": "Исторический Лиссабон",
    "gallery.lisbon.desc": "Очаровательные районы с традиционной архитектурой",
    "gallery.coast": "Атлантическое Побережье",
    "gallery.coast.desc": "Красивые пляжи и прибрежный образ жизни",
    "gallery.modern": "Современная Жизнь",
    "gallery.modern.desc":
      "Современный дизайн сочетается с традиционным шармом",
    "gallery.community": "Общественная Жизнь",
    "gallery.community.desc": "Яркая культура и теплое сообщество",
  },

  pt: {
    'hero.title': 'A sua jornada para Portugal começa aqui',
    'hero.subtitle': 'Assegurar que indivíduos e famílias iniciem uma nova vida em Portugal — de forma segura, legal e confortável. Apoiamos os nossos clientes em cada etapa, desde o pedido de visto até à instalação completa no país, com uma abordagem personalizada adaptada a cada necessidade.',
    'hero.vision': "Tornar-se o parceiro mais confiável e profissional na área de realocação e imigração em toda a União Europeia. Não lidamos apenas com burocracia — guiamos as pessoas por uma grande transição em suas vidas.",
    'hero.cta': 'Estratégia de imigração',
    "hero.ourvision": "Nossa Visão",
    "hero.approadmap": "Soluções de residência – descrições de serviços",
    // Navigation
    'nav.home': 'Início',
    'nav.services': 'Serviços',
    'nav.visas': 'Vistos',
    'nav.investment': 'Investimento',
    'nav.education': 'Educação',
    'nav.contact': 'Contato',

    // Facts
    'fact.safety': '7º país mais seguro do mundo',
    "fact.desc1": "Índice Global da Paz 2024",
    "fact.desc2": "Classificações de Segurança na Europa",
    "fact.desc3": "Pesquisa Social Europeia 2022",
    'fact.europe': '3º mais seguro na Europa',
    'fact.welcoming': 'Uma das sociedades mais acolhedoras',

    // Services
    'services.title': 'Nossos Serviços',
    'services.subtitle': 'Pacote completo de serviços para ajudá-lo no processo de mudança para Portugal',
    'service.education': "Orientação educacional",
    'service.medical': "Orientação em saúde",
    'service.loan': "Facilitação de hipotecas e empréstimos",
    'service.bankacc': "Abertura de contas bancárias individuais e empresariais",
    'service.realestate': "Consultoria imobiliária",
    'service.investment': "Oportunidades de investimento selecionadas",
    'service.structuring': "Estruturação corporativa e consultoria",
    'service.legalconsular': "Apoio em documentação legal e consular",
    'service.community': "Integração na comunidade e em redes profissionais",
    'service.tour': "Pacote turístico",

    'education.title': 'Orientação Educacional',
    'education.subtitle': 'Portugal oferece acesso a algumas das escolas internacionais mais conceituadas da Europa, com caminhos para universidades da UE, da Ivy League nos EUA e para as principais universidades do Reino Unido.',
    'education.title2': 'Principais Escolas Internacionais:',
    'education.school1name': "St. Julian’s School",
    'education.school1desc': "uma das escolas britânicas mais antigas da Europa (fundada em 1932), cujos ex-alunos foram admitidos em Oxford, LSE e UCL.",
    'education.school2name': "Carlucci American International School of Lisbon (CAISL)",
    'education.school2desc': "oferece os currículos IB (Bacharelato Internacional) e americano. Seus ex-alunos ingressaram em Harvard, MIT e Columbia.",
    'education.school3name': "Oporto British School",
    'education.school3desc': "uma instituição de alto nível no norte de Portugal, credenciada pela Universidade de Cambridge.",

    'uni.title': "Universidades",
    'uni.uni1name': "Universidade de Lisboa",
    'uni.uni1desc': "Classificada em #262 no QS World University Rankings 2025.",
    'uni.uni2name': "Universidade NOVA de Lisboa",
    'uni.uni2desc': "Incluída na lista “QS Top 50 Under 50”. Portugal é uma das sociedades mais acolhedoras para imigrantes, com baixos níveis de racismo e xenofobia em comparação com outros países da UE. Fonte: European Social Survey, 2022",
    'uni.uni3name': "Universidade Católica Portuguesa",
    'uni.uni3desc': "Reconhecida mundialmente pelo Financial Times pelos seus programas de negócios e direito. Programas de Licenciatura e Mestrado ministrados em inglês disponíveis em Medicina, Ciência de Dados, Engenharia e muito mais.",

    'health.title': "Orientação em Saúde",
    'health.subtitle': "De acordo com as estatísticas da OCDE, Portugal possui um dos melhores sistemas públicos de saúde da Europa — e a sua rede privada é ainda mais avançada.",
    'health.title2': "Principais redes hospitalares privadas:",
    'health.hosp1name': "Hospital da Luz",
    'health.hosp1desc': "Instalações de última geração e atendimento internacional ao paciente.",
    'health.hosp2name': "CUF Saúde",
    'health.hosp2desc': "Mais de 20 hospitais privados em todo o país com altos níveis de satisfação dos pacientes.",
    'health.hosp3name': "Lusíadas Saúde",
    'health.hosp3desc': "Rede acreditada pela JCI, com padrões globais de qualidade.",

    // Gallery
    'gallery.title': 'Vida em Portugal',


    "visa.d7": "Visto D7 (Rendimento Passivo)",
    "visa.d7forwho1": "Indivíduos com rendimentos passivos: rendas, pensões, royalties, juros;",

    "visa.d7forwho2": "Reformados, proprietários de imóveis e investidores.",
    "visa.d7forwho3": "Não exige grandes investimentos;",
    "visa.d7forwho4": "Garante residência legal completa em Portugal;",
    "visa.d7benefits1": "Livre circulação no espaço Schengen;",
    "visa.d7benefits2": "Direito à cidadania após 5 anos;",
    "visa.d7benefits3": "Inclui o cônjuge e filhos dependentes.",

    "visa.d7dig": "Visto D7 (Visto Nómada Digital)",
    "visa.d7digbenef1": "Freelancers e trabalhadores remotos com contratos válidos;",
    "visa.d7digbenef2": "Nómadas digitais que prestam serviços a clientes estrangeiros;",
    "visa.d7digbenef3": "Académicos, criativos e prestadores de serviços.",
    "visa.d7digbenef4": "Viver em Portugal enquanto trabalha remotamente;",
    "visa.d7digbenef5": "Estadia legal baseada em contrato de trabalho ou prestação de serviços;",

    "visa.d7digbenef6": "Caminho para a cidadania portuguesa;",
    "visa.d7digbenef7": "Inclui a família;",
    "visa.d7digbenef8": "Apoio total de realocação e integração.",

    "visa.goldenvisa": "Golden Visa (Visto Gold)",

    "visa.goldenvisaforwho1": "Indivíduos que procuram cidadania da UE ou residência permanente;",
    "visa.goldenvisaforwho2": "Aqueles que desejam uma residência fiscal flexível;",
    "visa.goldenvisaforwho3": "Investidores que pretendem garantir o futuro da família num único pedido;",
    "visa.goldenvisaforwho4": "Empreendedores e indivíduos de elevado património (HNWIs) que procuram um “Plano B” legal na Europa.",
    "visa.goldenvisabenefits1": "Apenas 7 dias de permanência por ano em Portugal;",
    "visa.goldenvisabenefits2": "Sem obrigação de residência fiscal;",
    "visa.goldenvisabenefits3": "Possibilidade de cidadania após 5 anos;",
    "visa.goldenvisabenefits4": "Um investimento abrange toda a família (ex.: €500.000 em fundos de investimento ou €250.000 em doações a projetos estatais);",
    "visa.goldenvisabenefits5": "Acesso total ao Espaço Schengen e liberdade de circulação na Europa.",


    // Healthcare
    'healthcare.title': 'Sistema de Saúde',

    // Contact
    'contact.title': 'Entre em Contato',
    'contact.subtitle': 'Pronto para começar sua jornada em Portugal',
    'contact.form.title': 'Envie uma Mensagem',
    'contact.form.send': 'Enviar Mensagem',
    'contact.phone': 'Telefone',
    'contact.office': 'Escritório',

    // Pages
    'page.services.title': 'Nossos Serviços',
    'page.visas.title': 'Tipos de Visto',
    'page.investment.title': 'Oportunidades de Investimento',
    'page.education.title': 'Educação e Saúde',
    'page.contact.title': 'Entre em Contato',

    // Contact
    'contact.form.name': 'Nome Completo',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Telefone',
    'contact.form.message': 'Mensagem',
    'contact.form.submit': 'Enviar',
    'contact.info.title': 'Informações de Contato',

    // Gallery Stats
    'stats.sunshine': 'Dias de Sol',
    'stats.temperature': 'Temperatura Média',
    'stats.distance': 'Distância até Portugal',
    'stats.hours': 'horas de luz solar por dia',

    // Gallery Images
    'gallery.lisbon': 'Lisboa Histórica',
    'gallery.lisbon.desc': 'Bairros encantadores com arquitetura tradicional',
    'gallery.coast': 'Costa Atlântica',
    'gallery.coast.desc': 'Belas praias e estilo de vida costeiro',
    'gallery.modern': 'Vida Moderna',
    'gallery.modern.desc': 'Design contemporâneo encontra charme tradicional',
    'gallery.community': 'Vida Comunitária',
    'gallery.community.desc': 'Cultura vibrante e comunidade calorosa',
  },
  en: {
    'hero.title': 'Your journey to Portugal begins here',
    'hero.subtitle': 'Ensuring that individuals and families start a new life in Portugal — safely, legally, and comfortably. We support our clients at every step, from the visa application to complete settlement in the country, with a personalised approach tailored to each need.',
    'hero.vision': "To become the most reliable and professional partner in the field of relocation and immigration across the European Union. We do not just handle bureaucracy — we guide people through a major transition in their lives.",
    'hero.cta': 'Immigration strategy',
    "hero.ourvision": "Our Vision",
    "hero.approadmap": "Residence solutions – service descriptions",

    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.visas': 'Visas',
    'nav.investment': 'Investment',
    'nav.education': 'Education',
    'nav.contact': 'Contact',


    "fact.safety": '7th safest country in the world',
    "fact.europe": '3rd safest in Europe',
    "fact.desc1": "Global Peace Index 2024",
    "fact.desc2": "European Safety Rankings",
    "fact.desc3": "European Social Survey 2022",
    "fact.welcoming": 'Most Welcoming Society',
    // Facts

    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'A complete service package to help you with your relocation process to Portugal',
    'service.education': "Educational guidance",
    'service.medical': "Healthcare guidance",
    'service.loan': "Facilitation of mortgages and loans",
    'service.bankacc': "Opening of individual and corporate bank accounts",
    'service.realestate': "Real estate consulting",
    'service.investment': "Selected investment opportunities",
    'service.structuring': "Corporate structuring and consultancy",
    'service.legalconsular': "Support with legal and consular documentation",
    'service.community': "Integration into the community and professional networks",
    'service.tour': "Tour package",

    // Education
    'education.title': 'Educational Guidance',
    'education.subtitle': 'Portugal offers access to some of the most prestigious international schools in Europe, with pathways to EU universities, Ivy League universities in the USA, and top universities in the UK.',
    'education.title2': 'Top International Schools:',
    'education.school1name': "St. Julian’s School",
    'education.school1desc': "One of the oldest British schools in Europe (founded in 1932), with alumni admitted to Oxford, LSE, and UCL.",
    'education.school2name': "Carlucci American International School of Lisbon (CAISL)",
    'education.school2desc': "Offers the IB (International Baccalaureate) and American curricula. Alumni have entered Harvard, MIT, and Columbia.",
    'education.school3name': "Oporto British School",
    'education.school3desc': "A high-level institution in northern Portugal accredited by the University of Cambridge.",

    // Universities
    'uni.title': "Universities",
    'uni.uni1name': "University of Lisbon",
    'uni.uni1desc': "Ranked #262 in the QS World University Rankings 2025.",
    'uni.uni2name': "NOVA University Lisbon",
    'uni.uni2desc': "Included in the “QS Top 50 Under 50” list. Portugal is one of the most welcoming societies for immigrants, with low levels of racism and xenophobia compared to other EU countries. Source: European Social Survey, 2022",
    'uni.uni3name': "Portuguese Catholic University",
    'uni.uni3desc': "Recognised globally by the Financial Times for its business and law programs. Bachelor’s and Master’s degrees taught in English available in Medicine, Data Science, Engineering, and more.",

    // Health
    'health.title': "Healthcare Guidance",
    'health.subtitle': "According to OECD statistics, Portugal has one of the best public healthcare systems in Europe — and its private network is even more advanced.",
    'health.title2': "Top private hospital networks:",
    'health.hosp1name': "Hospital da Luz",
    'health.hosp1desc': "State-of-the-art facilities with international patient services.",
    'health.hosp2name': "CUF Saúde",
    'health.hosp2desc': "Over 20 private hospitals throughout the country with high patient satisfaction.",
    'health.hosp3name': "Lusíadas Saúde",
    'health.hosp3desc': "A JCI-accredited network meeting global healthcare standards.",

    // Gallery
    'gallery.title': 'Life in Portugal',

    // Visa D7 Passive
    "visa.d7": "D7 Visa (Passive Income)",
    "visa.d7forwho1": "Individuals with passive income: rents, pensions, royalties, interest;",
    "visa.d7forwho2": "Retirees, property owners, and investors.",
    "visa.d7forwho3": "Does not require large investments;",
    "visa.d7forwho4": "Grants full legal residency in Portugal;",
    "visa.d7benefits1": "Free movement within the Schengen area;",
    "visa.d7benefits2": "Eligibility for citizenship after 5 years;",
    "visa.d7benefits3": "Includes spouse and dependent children.",

    // Visa D7 Digital Nomad
    "visa.d7dig": "D7 Visa (Digital Nomad Visa)",
    "visa.d7digbenef1": "Freelancers and remote workers with valid contracts;",
    "visa.d7digbenef2": "Digital nomads serving foreign clients;",
    "visa.d7digbenef3": "Academics, creatives, and service providers.",
    "visa.d7digbenef4": "Live in Portugal while working remotely;",
    "visa.d7digbenef5": "Legal stay based on employment or service contract;",
    "visa.d7digbenef6": "Pathway to Portuguese citizenship;",
    "visa.d7digbenef7": "Family inclusion available;",
    "visa.d7digbenef8": "Full relocation and integration support.",

    // Golden Visa
    "visa.goldenvisa": "Golden Visa",
    "visa.goldenvisaforwho1": "Individuals seeking EU citizenship or permanent residency;",
    "visa.goldenvisaforwho2": "Those who want flexible tax residency;",
    "visa.goldenvisaforwho3": "Investors aiming to secure their family's future with a single application;",
    "visa.goldenvisaforwho4": "Entrepreneurs and high-net-worth individuals seeking a legal “Plan B” in Europe.",
    "visa.goldenvisabenefits1": "Only 7 days of stay per year in Portugal required;",
    "visa.goldenvisabenefits2": "Tax residency is not mandatory;",
    "visa.goldenvisabenefits3": "Citizenship eligibility after 5 years;",
    "visa.goldenvisabenefits4": "One investment covers the whole family (e.g., €500,000 investment fund or €250,000 donation to public projects);",
    "visa.goldenvisabenefits5": "Free movement in the Schengen zone and European mobility.",

    // Contact
    'contact.title': 'Contact',
    'contact.subtitle': 'We are ready to start your journey to Portugal',
    'contact.form.title': 'Send a Message',
    'contact.form.send': 'Send',
    'contact.phone': 'Phone',
    'contact.office': 'Office',

    // Pages
    'page.services.title': 'Our Services',
    'page.visas.title': 'Visa Types',
    'page.investment.title': 'Investment Opportunities',
    'page.education.title': 'Education & Healthcare',
    'page.contact.title': 'Contact Us',

    // Contact Form
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send',
    'contact.info.title': 'Contact Information',

    // Gallery Stats
    'stats.sunshine': 'Sunny Days',
    'stats.temperature': 'Average Temperature',
    'stats.distance': 'Distance to Portugal',
    'stats.hours': 'hours of sunlight per day',

    // Gallery Images
    'gallery.lisbon': 'Historic Lisbon',
    'gallery.lisbon.desc': 'Charming neighbourhoods with traditional architecture',
    'gallery.coast': 'Atlantic Coast',
    'gallery.coast.desc': 'Beautiful beaches and coastal lifestyle',
    'gallery.modern': 'Modern Life',
    'gallery.modern.desc': 'Modern design blending with traditional charm',
    'gallery.community': 'Community Life',
    'gallery.community.desc': 'Vibrant culture and warm community',
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
