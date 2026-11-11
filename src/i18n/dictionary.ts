export type Lang = "ar" | "fr" | "en";

export type Copy = {
  dir: "rtl" | "ltr";
  metaTitle: string;
  skip: string;
  language: string;
  menuOpen: string;
  menuClose: string;
  menuLabel: string;
  nav: { href: string; label: string }[];
  call: string;
  callNow: string;
  callShort: string;
  whatsapp: string;
  whatsappShort: string;
  heroTitle: string;
  heroBody: string;
  heroAlt: string;
  trustLabel: string;
  trust: { title: string; body: string }[];
  offerTitle: string;
  offerBody: string;
  offers: Record<"16" | "20", { teeth: string; price: string; currency: string }>;
  bookOffer: string;
  disclaimer: string;
  warrantyTitle: string;
  warrantyBody: string;
  warrantySummary: string;
  warrantyDetails: string;
  shadeTitle: string;
  shadeBody: string;
  shadeGroup: string;
  shadeSelected: string;
  shadeNone: string;
  shadeDisclaimer: string;
  veneerTitle: string;
  veneerBody: string;
  veneerMore: string;
  veneerMoreBody: string;
  veneerAlt: string;
  veneerWide: string;
  veneerPortrait: string;
  whyTitle: string;
  features: { title: string; body: string }[];
  resultsTitle: string;
  resultsBody: string;
  resultsBefore: string;
  resultsAfter: string;
  formTitle: string;
  formBody: string;
  fullName: string;
  phone: string;
  phoneHelp: string;
  teeth: string;
  date: string;
  submit: string;
  submitting: string;
  formNote: string;
  formReady: string;
  formFallback: string;
  errors: { name: string; phone: string; teeth: string; date: string; datePast: string };
  locationTitle: string;
  address: string;
  directions: string;
  mapTitle: string;
  ctaTitle: string;
  ctaBody: string;
  instagram: string;
  facebook: string;
  copyright: string;
  whatsappGeneral: string;
  booking: {
    hello: string;
    name: string;
    phone: string;
    teeth: string;
    date: string;
    please: string;
    thanks: string;
  };
};

const ar: Copy = {
  dir: "rtl",
  metaTitle: "Prestige Oral | تجميل الأسنان والفينير المركب في تمارة",
  skip: "انتقل إلى الحجز",
  language: "اختيار اللغة",
  menuOpen: "فتح القائمة",
  menuClose: "إغلاق القائمة",
  menuLabel: "القائمة",
  nav: [
    { href: "#top", label: "الرئيسية" },
    { href: "#offer", label: "العرض" },
    { href: "#why", label: "المميزات" },
    { href: "#results", label: "النتائج" },
    { href: "#location", label: "موقعنا" },
  ],
  call: "اتصل بنا",
  callNow: "اتصل بنا الآن",
  callShort: "اتصال",
  whatsapp: "احجز موعدك عبر واتساب",
  whatsappShort: "واتساب",
  heroTitle: "ابتسامتك الجديدة تبدأ من هنا",
  heroBody: "اكتشف عرضنا الخاص على تجميل الأسنان بالفينير المركب للحصول على ابتسامة طبيعية وجذابة.",
  heroAlt: "ابتسامة في إضاءة طبيعية",
  trustLabel: "مؤشرات الثقة",
  trust: [
    { title: "ضمان لمدة عامين", body: "حسب شروط العيادة، وليس تغطية تلقائية لكل علاج." },
    { title: "اختيار درجة البياض", body: "تختار درجة مبدئية، والطبيب يؤكد المناسبة." },
    { title: "مواعيد مرنة", body: "نرتب الموعد معك عبر واتساب أو الهاتف." },
  ],
  offerTitle: "عرض خاص لفترة محدودة",
  offerBody: "اكتشف عروضنا الخاصة على تجميل الأسنان بالفينير المركب.",
  offers: {
    "16": { teeth: "16 سناً", price: "2,000", currency: "درهم" },
    "20": { teeth: "20 سناً", price: "2,300", currency: "درهم" },
  },
  bookOffer: "احجز هذا العرض",
  disclaimer: "يتم تحديد العلاج المناسب وعدد الأسنان بعد استشارة الطبيب وتقييم الحالة.",
  warrantyTitle: "ضمان لمدة عامين",
  warrantyBody: "نحرص على جودة العلاج ومتابعة النتائج وفق شروط الضمان المعتمدة في العيادة.",
  warrantySummary: "شروط الضمان",
  warrantyDetails:
    "النص الرسمي لشروط الضمان لم يُعتمد بعد من العيادة. يوضح الطبيب الشروط أثناء الاستشارة. الضمان ليس تغطية تلقائية لكل علاج.",
  shadeTitle: "اختر درجة بياض ابتسامتك",
  shadeBody: "يمكنك اختيار الدرجة التي تفضلها، وسيقوم الطبيب بمساعدتك على تحديد الدرجة المناسبة لابتسامتك.",
  shadeGroup: "درجة البياض",
  shadeSelected: "الدرجة المختارة",
  shadeNone: "لم يتم الاختيار",
  shadeDisclaimer: "الدرجة النهائية تعتمد على تقييم الطبيب وتوصيته، واختيارك هنا ليس ضماناً للنتيجة.",
  veneerTitle: "ما هو الفينير المركب؟",
  veneerBody:
    "الفينير المركب هو إجراء تجميلي للأسنان يهدف إلى تحسين مظهر الابتسامة من خلال وضع مادة تجميلية على سطح الأسنان، حسب تقييم الطبيب.",
  veneerMore: "تعرف على المزيد",
  veneerMoreBody: "يختلف عدد الأسنان والدرجة المناسبة من شخص لآخر. الخطوة الأولى استشارة في العيادة، لا حجز علاج مؤكد من الصفحة.",
  veneerAlt: "قشرة تجميلية شفافة",
  veneerWide: "تطبيق الفينير المركب",
  veneerPortrait: "ابتسامة بعد الفينير المركب",
  whyTitle: "لماذا تختار Prestige Oral؟",
  features: [
    { title: "مواد عالية الجودة", body: "يختار الطبيب المادة المناسبة لحالتك." },
    { title: "متابعة شخصية", body: "نتواصل معك من الاستشارة إلى ما بعدها." },
    { title: "الاهتمام براحة المريض", body: "نشرح الخطوات ونراعي راحتك أثناء الزيارة." },
  ],
  resultsTitle: "قبل وبعد",
  resultsBody: "نتائج حقيقية من مرضى العيادة. كل حالة تختلف، والنتيجة تُحدد بعد الاستشارة.",
  resultsBefore: "قبل",
  resultsAfter: "بعد",
  formTitle: "احجز موعدك الآن",
  formBody: "املأ المعلومات التالية وسنتواصل معك عبر واتساب لتأكيد موعدك.",
  fullName: "الاسم الكامل",
  phone: "رقم الهاتف",
  phoneHelp: "رقم مغربي، جوال أو ثابت.",
  teeth: "عدد الأسنان",
  date: "التاريخ المفضل للحجز",
  submit: "إرسال الطلب عبر واتساب",
  submitting: "جارٍ التجهيز",
  formNote: "فتح واتساب لا يؤكد الموعد. العيادة ترد عليك بعد التحقق من التاريخ.",
  formReady: "تم تجهيز طلب الحجز. يرجى إرسال الرسالة عبر واتساب وانتظار تأكيد العيادة.",
  formFallback: "إذا لم تُفتح واتساب، اضغط هنا",
  errors: {
    name: "أدخل الاسم الكامل.",
    phone: "أدخل رقم هاتف مغربي صحيح، مثل 0612345678.",
    teeth: "اختر عدد الأسنان.",
    date: "اختر التاريخ المفضل.",
    datePast: "اختر تاريخاً من اليوم أو بعده.",
  },
  locationTitle: "موقعنا",
  address: "622 شارع مولاي علي الشريف، تمارة، المغرب",
  directions: "احصل على الاتجاهات",
  mapTitle: "خريطة عيادة Prestige Oral في تمارة",
  ctaTitle: "جاهز لابتسامتك الجديدة؟",
  ctaBody: "تواصل معنا الآن لحجز استشارتك ومعرفة العلاج الأنسب لك.",
  instagram: "إنستغرام",
  facebook: "فيسبوك",
  copyright: "© 2026 Prestige Oral. جميع الحقوق محفوظة.",
  whatsappGeneral: "مرحباً، أرغب في حجز موعد في عيادة Prestige Oral بتمارة بخصوص تجميل الأسنان بالفينير المركب.",
  booking: {
    hello: "السلام عليكم، أريد حجز موعد في Prestige Oral.",
    name: "الاسم الكامل",
    phone: "رقم الهاتف",
    teeth: "عدد الأسنان",
    date: "التاريخ المفضل",
    please: "المرجو التواصل معي لتأكيد الموعد.",
    thanks: "شكراً لكم.",
  },
};

const fr: Copy = {
  dir: "ltr",
  metaTitle: "Prestige Oral | Facettes composites à Témara",
  skip: "Aller à la réservation",
  language: "Choisir la langue",
  menuOpen: "Ouvrir le menu",
  menuClose: "Fermer le menu",
  menuLabel: "Menu",
  nav: [
    { href: "#top", label: "Accueil" },
    { href: "#offer", label: "Offre" },
    { href: "#why", label: "Atouts" },
    { href: "#results", label: "Résultats" },
    { href: "#location", label: "Adresse" },
  ],
  call: "Appeler",
  callNow: "Nous appeler",
  callShort: "Appel",
  whatsapp: "Réserver sur WhatsApp",
  whatsappShort: "WhatsApp",
  heroTitle: "Votre nouveau sourire commence ici",
  heroBody: "Découvrez notre offre sur les facettes composites pour un sourire naturel et harmonieux.",
  heroAlt: "Sourire en lumière naturelle",
  trustLabel: "Repères de confiance",
  trust: [
    { title: "Garantie de deux ans", body: "Selon les conditions de la clinique, pas une couverture automatique." },
    { title: "Choix de la teinte", body: "Vous indiquez une préférence, le dentiste confirme." },
    { title: "Horaires souples", body: "Le rendez-vous se fixe par WhatsApp ou par téléphone." },
  ],
  offerTitle: "Offre spéciale pour une durée limitée",
  offerBody: "Découvrez nos offres sur les facettes composites.",
  offers: {
    "16": { teeth: "16 dents", price: "2 000", currency: "DH" },
    "20": { teeth: "20 dents", price: "2 300", currency: "DH" },
  },
  bookOffer: "Réserver cette offre",
  disclaimer: "Le soin et le nombre de dents sont décidés après consultation et évaluation du médecin.",
  warrantyTitle: "Garantie de deux ans",
  warrantyBody: "Nous suivons la qualité du soin et le résultat selon les conditions de garantie de la clinique.",
  warrantySummary: "Conditions de garantie",
  warrantyDetails:
    "Le texte officiel des conditions n'a pas encore été fourni par la clinique. Le dentiste les explique en consultation. La garantie ne couvre pas automatiquement chaque soin.",
  shadeTitle: "Choisissez la blancheur de votre sourire",
  shadeBody: "Indiquez la teinte que vous préférez. Le dentiste vous aidera à choisir celle qui convient.",
  shadeGroup: "Teinte",
  shadeSelected: "Teinte choisie",
  shadeNone: "Aucun choix",
  shadeDisclaimer: "La teinte finale dépend de l'évaluation du dentiste. Ce choix n'est pas une garantie.",
  veneerTitle: "Qu'est-ce qu'une facette composite ?",
  veneerBody:
    "C'est un soin esthétique qui améliore l'apparence du sourire en posant un matériau cosmétique sur la surface des dents, selon l'évaluation du médecin.",
  veneerMore: "En savoir plus",
  veneerMoreBody:
    "Le nombre de dents et la teinte varient selon chaque personne. La première étape est une consultation, pas un soin confirmé depuis cette page.",
  veneerAlt: "Facette cosmétique translucide",
  veneerWide: "Pose d'une facette composite",
  veneerPortrait: "Sourire après les facettes",
  whyTitle: "Pourquoi choisir Prestige Oral ?",
  features: [
    { title: "Matériaux de qualité", body: "Le dentiste choisit le matériau adapté à votre cas." },
    { title: "Suivi personnel", body: "Nous restons en contact de la consultation jusqu'après le soin." },
    { title: "Confort du patient", body: "Nous expliquons les étapes et veillons à votre confort." },
  ],
  resultsTitle: "Avant et après",
  resultsBody: "Résultats réels de patients de la clinique. Chaque cas est différent et se décide après consultation.",
  resultsBefore: "Avant",
  resultsAfter: "Après",
  formTitle: "Réservez votre rendez-vous",
  formBody: "Remplissez ces informations. Nous vous contactons sur WhatsApp pour confirmer.",
  fullName: "Nom complet",
  phone: "Téléphone",
  phoneHelp: "Numéro marocain, mobile ou fixe.",
  teeth: "Nombre de dents",
  date: "Date souhaitée",
  submit: "Envoyer la demande sur WhatsApp",
  submitting: "Préparation",
  formNote: "Ouvrir WhatsApp ne confirme pas le rendez-vous. La clinique répond après vérification de la date.",
  formReady: "La demande est prête. Envoyez le message sur WhatsApp et attendez la confirmation de la clinique.",
  formFallback: "Si WhatsApp ne s'ouvre pas, cliquez ici",
  errors: {
    name: "Indiquez le nom complet.",
    phone: "Indiquez un numéro marocain valide, par exemple 0612345678.",
    teeth: "Choisissez le nombre de dents.",
    date: "Choisissez une date.",
    datePast: "Choisissez aujourd'hui ou une date à venir.",
  },
  locationTitle: "Notre adresse",
  address: "622 Avenue Moulay Ali Chrif, Témara, Maroc",
  directions: "Obtenir l'itinéraire",
  mapTitle: "Carte de Prestige Oral à Témara",
  ctaTitle: "Prêt pour votre nouveau sourire ?",
  ctaBody: "Contactez-nous pour réserver votre consultation et connaître le soin adapté.",
  instagram: "Instagram",
  facebook: "Facebook",
  copyright: "© 2026 Prestige Oral. Tous droits réservés.",
  whatsappGeneral: "Bonjour, je souhaite prendre rendez-vous à Prestige Oral à Témara pour les facettes composites.",
  booking: {
    hello: "Bonjour, je souhaite prendre rendez-vous à Prestige Oral.",
    name: "Nom complet",
    phone: "Téléphone",
    teeth: "Nombre de dents",
    date: "Date souhaitée",
    please: "Merci de me contacter pour confirmer le rendez-vous.",
    thanks: "Merci.",
  },
};

const en: Copy = {
  dir: "ltr",
  metaTitle: "Prestige Oral | Composite veneers in Témara",
  skip: "Skip to booking",
  language: "Choose language",
  menuOpen: "Open menu",
  menuClose: "Close menu",
  menuLabel: "Menu",
  nav: [
    { href: "#top", label: "Home" },
    { href: "#offer", label: "Offer" },
    { href: "#why", label: "Why us" },
    { href: "#results", label: "Results" },
    { href: "#location", label: "Location" },
  ],
  call: "Call us",
  callNow: "Call us now",
  callShort: "Call",
  whatsapp: "Book on WhatsApp",
  whatsappShort: "WhatsApp",
  heroTitle: "Your new smile starts here",
  heroBody: "Discover our special offer on composite veneers for a natural, attractive smile.",
  heroAlt: "A smile in natural light",
  trustLabel: "Trust points",
  trust: [
    { title: "Two-year warranty", body: "Under the clinic's terms, not automatic cover for every treatment." },
    { title: "Choose a shade", body: "You pick a starting shade. The dentist confirms it." },
    { title: "Flexible appointments", body: "We arrange the visit by WhatsApp or phone." },
  ],
  offerTitle: "Limited-time special offer",
  offerBody: "See our offers for composite veneers.",
  offers: {
    "16": { teeth: "16 teeth", price: "2,000", currency: "MAD" },
    "20": { teeth: "20 teeth", price: "2,300", currency: "MAD" },
  },
  bookOffer: "Book this offer",
  disclaimer: "The right treatment and number of teeth are decided after the dentist reviews your case.",
  warrantyTitle: "Two-year warranty",
  warrantyBody: "We follow treatment quality and results under the clinic's warranty terms.",
  warrantySummary: "Warranty terms",
  warrantyDetails:
    "The clinic has not yet supplied the official warranty text. The dentist explains the terms during the consultation. The warranty is not automatic cover for every treatment.",
  shadeTitle: "Choose your smile shade",
  shadeBody: "Pick the shade you prefer. The dentist will help you find the one that suits your smile.",
  shadeGroup: "Shade",
  shadeSelected: "Selected shade",
  shadeNone: "None selected",
  shadeDisclaimer: "The final shade depends on the dentist's assessment. This choice is not a guarantee.",
  veneerTitle: "What are composite veneers?",
  veneerBody:
    "A cosmetic treatment that improves the look of a smile by placing a cosmetic material on the tooth surface, based on the dentist's assessment.",
  veneerMore: "Learn more",
  veneerMoreBody:
    "The number of teeth and the right shade differ from person to person. The first step is a consultation, not a confirmed treatment from this page.",
  veneerAlt: "A translucent cosmetic shell",
  veneerWide: "Applying a composite veneer",
  veneerPortrait: "A smile after composite veneers",
  whyTitle: "Why choose Prestige Oral?",
  features: [
    { title: "Quality materials", body: "The dentist chooses the material that fits your case." },
    { title: "Personal follow-up", body: "We stay in touch from the consultation onward." },
    { title: "Patient comfort", body: "We explain each step and look after your comfort." },
  ],
  resultsTitle: "Before and after",
  resultsBody: "Real results from clinic patients. Every case is different and is decided after a consultation.",
  resultsBefore: "Before",
  resultsAfter: "After",
  formTitle: "Book your appointment",
  formBody: "Fill in these details. We will contact you on WhatsApp to confirm.",
  fullName: "Full name",
  phone: "Phone number",
  phoneHelp: "A Moroccan mobile or landline number.",
  teeth: "Number of teeth",
  date: "Preferred date",
  submit: "Send the request on WhatsApp",
  submitting: "Preparing",
  formNote: "Opening WhatsApp does not confirm the appointment. The clinic replies after checking the date.",
  formReady: "Your request is ready. Send the WhatsApp message and wait for the clinic to confirm.",
  formFallback: "If WhatsApp did not open, tap here",
  errors: {
    name: "Enter your full name.",
    phone: "Enter a valid Moroccan number, for example 0612345678.",
    teeth: "Choose the number of teeth.",
    date: "Choose a date.",
    datePast: "Choose today or a future date.",
  },
  locationTitle: "Our location",
  address: "622 Avenue Moulay Ali Chrif, Témara, Morocco",
  directions: "Get directions",
  mapTitle: "Map of Prestige Oral in Témara",
  ctaTitle: "Ready for your new smile?",
  ctaBody: "Contact us to book your consultation and find the right treatment.",
  instagram: "Instagram",
  facebook: "Facebook",
  copyright: "© 2026 Prestige Oral. All rights reserved.",
  whatsappGeneral: "Hello, I would like to book an appointment at Prestige Oral in Témara for composite veneers.",
  booking: {
    hello: "Hello, I would like to book an appointment at Prestige Oral.",
    name: "Full name",
    phone: "Phone",
    teeth: "Number of teeth",
    date: "Preferred date",
    please: "Please contact me to confirm the appointment.",
    thanks: "Thank you.",
  },
};

export const dictionary: Record<Lang, Copy> = { ar, fr, en };

export const languageOptions: { id: Lang; label: string }[] = [
  { id: "en", label: "EN" },
  { id: "fr", label: "FR" },
  { id: "ar", label: "AR" },
];
