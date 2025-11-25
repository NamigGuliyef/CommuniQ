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
    "hero.title": "Portuqaliyaya səyahətiniz burada başlayır ",
    "hero.subtitle":
      "Fərdlərin və ailələrin Portuqaliyada yeni həyata təhlükəsiz, qanuni və rahat şəkildə başlamalarını təmin etməkdir. Biz müştərilərimizi viza müraciətindən tutmuş tam məskunlaşmaya qədər hər mərhələdə, hər bir ehtiyaca uyğun fərdi yanaşma ilə dəstəkləyirik.",
    "hero.vision":
      "Avropa İttifaqında relokasiya və immiqrasiya sahəsində ən etibarlı və peşəkar tərəfdaş olmaqdır. Biz sadəcə sənədləşmə işlərini yerinə yetirmirik — insanlara həyatlarında böyük bir keçid dövründə yol göstəririk.",
    "hero.cta": "İmmiqrasiya strategiyası",
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
    "service.loan.whytitle":"Niyə bu vacibdir?",
    "service.loan.whydesc":
      "Əksər müştərilər düşünür ki, Portuqaliyada ev almaq və ya şirkət açmaq üçün yüz minlərlə avro ilkin kapital tələb olunur. Amma bu belə deyil. Doğru dəstək və sənədlərlə yerli banklar layihənizin 70%-dək hissəsini maliyyələşdirə bilər — siz isə həm likvidliyi qoruyur, həm də yaşayış icazəsinə sahib olursunuz. İstər Lissabonda dənizkənarı mənzil, istər Portoda butik otel açmaq istəyirsinizsə — biz ipoteka prosesinin hər mərhələsində (hüquqi, maliyyə və strateji) sizi müşayiət edirik.",


    "visa.d7": "D7 Viza (Passiv Gəlir Vizası)",
    "visa.d7forwho1":
      "Passiv gəlirə sahib şəxslər: icarə, pensiya, royalti, faiz gəlirləri;",
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
    "hero.subtitle":
      "Обеспечить, чтобы люди и семьи начали новую жизнь в Португалии — безопасно, законно и комфортно. Мы сопровождаем наших клиентов на каждом этапе — от подачи заявления на визу до полной адаптации — с индивидуальным подходом, учитывающим каждую потребность.",
    "hero.vision":
      "Стать самым надёжным и профессиональным партнёром в сфере релокации и иммиграции во всём Европейском союзе. Мы не просто занимаемся оформлением документов — мы помогаем людям пройти через серьёзные жизненные перемены.",
    "hero.cta": "Иммиграционная стратегия",
    "hero.ourvision": "Наше видение",
    "hero.approadmap": "Решения для проживания – описание услуг",

    // Navigation
    "nav.home": "Главная",
    "nav.services": "Услуги",
    "nav.visas": "Визы",
    "nav.investment": "Инвестиции",
    "nav.education": "Образование",
    "nav.contact": "Контакты",
    // Facts
    "facts.title": "Факты о Португалии",
    "facts.safety": "7-я самая безопасная страна в мире",
    "facts.europe": "3-я самая безопасная в Европе",
    "facts.welcoming": "Одно из самых гостеприимных обществ для иммигрантов",

    // Services
    "services.title": "Наши Услуги",
    "services.subtitle":
      "Полный пакет услуг для помощи в процессе переезда в Португалию",
    "service.education": "Ознакомление с системой образования",
    "service.medical": "Ознакомление с системой здравоохранения",
    "service.loan": "Содействие в получении ипотеки и кредитов",
    "service.bankacc":
      "Организация банковского обслуживания для частных лиц и компаний",
    "service.realestate": "Консультации по вопросам недвижимости",
    "service.investment": "Специально подобранные инвестиционные возможности",
    "service.structuring": "Структурирование компаний и консультирование",
    "service.legalconsular":
      "Поддержка в оформлении юридических и консульских документов",
    "service.community":
      "Интеграция в местное сообщество и профессиональную среду",
    "service.tour": "Туристический пакет",

    "education.title": "Образовательная ориентация",
    "education.subtitle":
      "Португалия предоставляет доступ к некоторым из самых престижных международных школ Европы. Эти школы открывают пути для поступления в университеты ЕС, в вузы Лиги Плюща в США, а также в ведущие университеты Великобритании.",
    "education.title2": "Лучшие международные школы:",
    "education.school1name": "St. Julian’s School",
    "education.school1desc":
      "одна из старейших британских школ в Европе (основана в 1932 году). Ее выпускники поступают в Оксфорд, Лондонскую школу экономики (LSE) и Университетский колледж Лондона (UCL).",
    "education.school2name":
      "Carlucci American International School of Lisbon (CAISL)",
    "education.school2desc":
      "школа, предлагающая программы международного бакалавриата (IB) и американский учебный план. Выпускники этой школы поступают в Гарвард, Массачусетский технологический институт (MIT) и Колумбийский университет.",
    "education.school3name": "Oporto British School",
    "education.school3desc":
      "престижное учебное заведение на севере Португалии, аккредитованное Кембриджским университетом.",

    "uni.title": "Университеты",
    "uni.uni1name": "Лиссабонский университет",
    "uni.uni1desc":
      "занимает 262-е место в мировом рейтинге QS World University Rankings 2025.",
    "uni.uni2name": "Университет NOVA в Лиссабоне",
    "uni.uni2desc":
      "входит в список “QS Top 50 Under 50”. Португалия считается одним из самых дружелюбных обществ для иммигрантов, с низким уровнем расизма и ксенофобии по сравнению с другими странами ЕС. Источник: European Social Survey, 2022",
    "uni.uni3name": "Католический университет Португалии",
    "uni.uni3desc":
      "включён в глобальный рейтинг Financial Times за свои программы в области бизнеса и права. Доступны бакалаврские и магистерские программы на английском языке: медицина, наука о данных, инженерия и другие направления.",

    "health.title": "Ориентация в системе здравоохранения",
    "health.subtitle":
      "Согласно статистике OECD, Португалия обладает одной из лучших государственных систем здравоохранения в Европе — а её частная сеть ещё более развита.",
    "health.title2": "Ведущие частные госпитальные сети:",
    "health.hosp1name": "Hospital da Luz",
    "health.hosp1desc":
      "Современные клиники с международным обслуживанием пациентов.",
    "health.hosp2name": "CUF Saúde",
    "health.hosp2desc":
      "Более 20 частных больниц по всей Португалии с высоким уровнем удовлетворённости пациентов.",
    "health.hosp3name": "Lusíadas Saúde",
    "health.hosp3desc":
      "Сеть, аккредитованная JCI, соответствующая международным стандартам медицинского обслуживания.",

    "visa.d7": "Виза D7 (Пассивный Доход)",
    "visa.d7forwho1":
      "Лица, имеющие пассивный доход: аренда, пенсия, роялти, проценты;",
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
    "hero.title": "A sua jornada para Portugal começa aqui",
    "hero.subtitle":
      "Assegurar que indivíduos e famílias iniciem uma nova vida em Portugal — de forma segura, legal e confortável. Apoiamos os nossos clientes em cada etapa, desde o pedido de visto até à instalação completa no país, com uma abordagem personalizada adaptada a cada necessidade.",
    "hero.vision":
      "Tornar-se o parceiro mais confiável e profissional na área de realocação e imigração em toda a União Europeia. Não lidamos apenas com burocracia — guiamos as pessoas por uma grande transição em suas vidas.",
    "hero.cta": "Estratégia de imigração",
    "hero.ourvision": "Nossa Visão",
    "hero.approadmap": "Soluções de residência – descrições de serviços",
    // Navigation
    "nav.home": "Início",
    "nav.services": "Serviços",
    "nav.visas": "Vistos",
    "nav.investment": "Investimento",
    "nav.education": "Educação",
    "nav.contact": "Contato",

    // Facts
    "facts.title": "Fatos sobre Portugal",
    "facts.safety": "7º país mais seguro do mundo",
    "facts.europe": "3º mais seguro na Europa",
    "facts.welcoming": "Uma das sociedades mais acolhedoras para imigrantes",

    // Services
    "services.title": "Nossos Serviços",
    "services.subtitle":
      "Pacote completo de serviços para ajudá-lo no processo de mudança para Portugal",
    "service.education": "Orientação educacional",
    "service.medical": "Orientação em saúde",
    "service.loan": "Facilitação de hipotecas e empréstimos",
    "service.bankacc":
      "Abertura de contas bancárias individuais e empresariais",
    "service.realestate": "Consultoria imobiliária",
    "service.investment": "Oportunidades de investimento selecionadas",
    "service.structuring": "Estruturação corporativa e consultoria",
    "service.legalconsular": "Apoio em documentação legal e consular",
    "service.community": "Integração na comunidade e em redes profissionais",
    "service.tour": "Pacote turístico",

    "education.title": "Orientação Educacional",
    "education.subtitle":
      "Portugal oferece acesso a algumas das escolas internacionais mais conceituadas da Europa, com caminhos para universidades da UE, da Ivy League nos EUA e para as principais universidades do Reino Unido.",
    "education.title2": "Principais Escolas Internacionais:",
    "education.school1name": "St. Julian’s School",
    "education.school1desc":
      "uma das escolas britânicas mais antigas da Europa (fundada em 1932), cujos ex-alunos foram admitidos em Oxford, LSE e UCL.",
    "education.school2name":
      "Carlucci American International School of Lisbon (CAISL)",
    "education.school2desc":
      "oferece os currículos IB (Bacharelato Internacional) e americano. Seus ex-alunos ingressaram em Harvard, MIT e Columbia.",
    "education.school3name": "Oporto British School",
    "education.school3desc":
      "uma instituição de alto nível no norte de Portugal, credenciada pela Universidade de Cambridge.",

    "uni.title": "Universidades",
    "uni.uni1name": "Universidade de Lisboa",
    "uni.uni1desc":
      "Classificada em #262 no QS World University Rankings 2025.",
    "uni.uni2name": "Universidade NOVA de Lisboa",
    "uni.uni2desc":
      "Incluída na lista “QS Top 50 Under 50”. Portugal é uma das sociedades mais acolhedoras para imigrantes, com baixos níveis de racismo e xenofobia em comparação com outros países da UE. Fonte: European Social Survey, 2022",
    "uni.uni3name": "Universidade Católica Portuguesa",
    "uni.uni3desc":
      "Reconhecida mundialmente pelo Financial Times pelos seus programas de negócios e direito. Programas de Licenciatura e Mestrado ministrados em inglês disponíveis em Medicina, Ciência de Dados, Engenharia e muito mais.",

    "health.title": "Orientação em Saúde",
    "health.subtitle":
      "De acordo com as estatísticas da OCDE, Portugal possui um dos melhores sistemas públicos de saúde da Europa — e a sua rede privada é ainda mais avançada.",
    "health.title2": "Principais redes hospitalares privadas:",
    "health.hosp1name": "Hospital da Luz",
    "health.hosp1desc":
      "Instalações de última geração e atendimento internacional ao paciente.",
    "health.hosp2name": "CUF Saúde",
    "health.hosp2desc":
      "Mais de 20 hospitais privados em todo o país com altos níveis de satisfação dos pacientes.",
    "health.hosp3name": "Lusíadas Saúde",
    "health.hosp3desc":
      "Rede acreditada pela JCI, com padrões globais de qualidade.",

    // Gallery
    "gallery.title": "Vida em Portugal",

    "visa.d7": "Visto D7 (Rendimento Passivo)",
    "visa.d7forwho1":
      "Indivíduos com rendimentos passivos: rendas, pensões, royalties, juros;",
    "visa.d7forwho2": "Reformados, proprietários de imóveis e investidores.",
    "visa.d7forwho3": "Não exige grandes investimentos;",
    "visa.d7forwho4": "Garante residência legal completa em Portugal;",
    "visa.d7benefits1": "Livre circulação no espaço Schengen;",
    "visa.d7benefits2": "Direito à cidadania após 5 anos;",
    "visa.d7benefits3": "Inclui o cônjuge e filhos dependentes.",

    "visa.d7dig": "Visto D7 (Visto Nómada Digital)",
    "visa.d7digbenef1":
      "Freelancers e trabalhadores remotos com contratos válidos;",
    "visa.d7digbenef2":
      "Nómadas digitais que prestam serviços a clientes estrangeiros;",
    "visa.d7digbenef3": "Académicos, criativos e prestadores de serviços.",
    "visa.d7digbenef4": "Viver em Portugal enquanto trabalha remotamente;",
    "visa.d7digbenef5":
      "Estadia legal baseada em contrato de trabalho ou prestação de serviços;",
    "visa.d7digbenef6": "Caminho para a cidadania portuguesa;",
    "visa.d7digbenef7": "Inclui a família;",
    "visa.d7digbenef8": "Apoio total de realocação e integração.",

    "visa.goldenvisa": "Golden Visa (Visto Gold)",
    "visa.goldenvisaforwho1":
      "Indivíduos que procuram cidadania da UE ou residência permanente;",
    "visa.goldenvisaforwho2":
      "Aqueles que desejam uma residência fiscal flexível;",
    "visa.goldenvisaforwho3":
      "Investidores que pretendem garantir o futuro da família num único pedido;",
    "visa.goldenvisaforwho4":
      "Empreendedores e indivíduos de elevado património (HNWIs) que procuram um “Plano B” legal na Europa.",
    "visa.goldenvisabenefits1":
      "Apenas 7 dias de permanência por ano em Portugal;",
    "visa.goldenvisabenefits2": "Sem obrigação de residência fiscal;",
    "visa.goldenvisabenefits3": "Possibilidade de cidadania após 5 anos;",
    "visa.goldenvisabenefits4":
      "Um investimento abrange toda a família (ex.: €500.000 em fundos de investimento ou €250.000 em doações a projetos estatais);",
    "visa.goldenvisabenefits5":
      "Acesso total ao Espaço Schengen e liberdade de circulação na Europa.",

    // Healthcare
    "healthcare.title": "Sistema de Saúde",

    // Contact
    "contact.title": "Entre em Contato",
    "contact.subtitle": "Pronto para começar sua jornada em Portugal",
    "contact.form.title": "Envie uma Mensagem",
    "contact.form.send": "Enviar Mensagem",
    "contact.phone": "Telefone",
    "contact.office": "Escritório",

    // Pages
    "page.services.title": "Nossos Serviços",
    "page.visas.title": "Tipos de Visto",
    "page.investment.title": "Oportunidades de Investimento",
    "page.education.title": "Educação e Saúde",
    "page.contact.title": "Entre em Contato",

    // Contact
    "contact.form.name": "Nome Completo",
    "contact.form.email": "Email",
    "contact.form.phone": "Telefone",
    "contact.form.message": "Mensagem",
    "contact.form.submit": "Enviar",
    "contact.info.title": "Informações de Contato",

    // Gallery Stats
    "stats.sunshine": "Dias de Sol",
    "stats.temperature": "Temperatura Média",
    "stats.distance": "Distância até Portugal",
    "stats.hours": "horas de luz solar por dia",

    // Gallery Images
    "gallery.lisbon": "Lisboa Histórica",
    "gallery.lisbon.desc": "Bairros encantadores com arquitetura tradicional",
    "gallery.coast": "Costa Atlântica",
    "gallery.coast.desc": "Belas praias e estilo de vida costeiro",
    "gallery.modern": "Vida Moderna",
    "gallery.modern.desc": "Design contemporâneo encontra charme tradicional",
    "gallery.community": "Vida Comunitária",
    "gallery.community.desc": "Cultura vibrante e comunidade calorosa",
  },
  en: {
    "hero.title": "Your journey to Portugal starts here",
    "hero.subtitle":
      "Ensuring individuals and families start a new life in Portugal — safely, legally, and comfortably. We support our clients at every step, from visa application to full settlement in the country, with a personalized approach tailored to each need.",
    "hero.vision":
      "To become the most trusted and professional partner in relocation and immigration across the European Union. We don't just handle paperwork — we guide people through a major life transition.",
    "hero.cta": "Immigration Strategy",
    "hero.ourvision": "Our Vision",
    "hero.approadmap": "Residence Solutions – Service Descriptions",
    // Navigation
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.visas": "Visas",
    "nav.investment": "Investment",
    "nav.education": "Education",
    "nav.contact": "Contact",

    // Facts
    "facts.title": "Portugal Facts",
    "facts.safety": "7th safest country in the world",
    "facts.europe": "3rd safest in Europe",
    "facts.welcoming": "One of the most welcoming societies for immigrants",

    // Services
    "services.title": "Our Services",
    "services.subtitle":
      "Complete service package to help you with your Portugal relocation process",

    // Gallery
    "gallery.title": "Portugal Life",

    // Education
    "education.title": "Education in Portugal",

    // Healthcare
    "healthcare.title": "Healthcare System",

    // Contact
    "contact.title": "Contact Us",
    "contact.subtitle": "Ready to start your Portugal journey",
    "contact.form.title": "Send a Message",
    "contact.form.send": "Send Message",
    "contact.phone": "Phone",
    "contact.office": "Office",

    // Pages
    "page.services.title": "Our Services",
    "page.visas.title": "Visa Types",
    "page.investment.title": "Investment Opportunities",
    "page.education.title": "Education & Healthcare",
    "page.contact.title": "Get in Touch",

    // Contact
    "contact.form.name": "Full Name",
    "contact.form.email": "Email",
    "contact.form.phone": "Phone",
    "contact.form.message": "Message",
    "contact.form.submit": "Send",
    "contact.info.title": "Contact Information",

    // Gallery Stats
    "stats.sunshine": "Days of Sunshine",
    "stats.temperature": "Average Temperature",
    "stats.distance": "Distance to Portugal",
    "stats.hours": "hours of sunlight per day",

    // Gallery Images
    "gallery.lisbon": "Historic Lisbon",
    "gallery.lisbon.desc":
      "Charming neighborhoods with traditional architecture",
    "gallery.coast": "Atlantic Coast",
    "gallery.coast.desc": "Beautiful beaches and coastal lifestyle",
    "gallery.modern": "Modern Living",
    "gallery.modern.desc": "Contemporary design meets traditional charm",
    "gallery.community": "Community Life",
    "gallery.community.desc": "Vibrant culture and warm community",
  },
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
