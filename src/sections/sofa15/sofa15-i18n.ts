import { useTranslate } from 'src/locales';

// ----------------------------------------------------------------------
// SOFA15 — ART DECO GATSBY — full multi-language content dictionary
// ----------------------------------------------------------------------

const en = {
  nav: {
    home: 'Home',
    story: 'Heritage',
    collections: 'Collections',
    products: 'Pieces',
    gallery: 'Galleries',
    testimonials: 'Patrons',
    faqs: 'Inquiries',
    contact: 'Contact',
  },
  hero: {
    badge: 'Maison Gatsby · Timeless luxury since 1925',
    title1: 'Where every sofa',
    titleHighlight: 'whispers',
    title2: 'opulence',
    subtitle:
      'Hand-tufted velvet, gilded frames, and geometric lines inspired by the golden age. Each piece is a statement — a legacy of 1920s glamour, reimagined for today.',
    ctaPrimary: 'Explore collections',
    ctaSecondary: 'Visit the atelier',
    badgeNumber: '1925',
    badgeLabel: 'year of the first Gatsby piece',
    promos: [
      { label: 'Hand-tufted velvet', text: 'Italian silk-blend weave' },
      { label: 'Gilded solid brass', text: 'Gold-leaf finished frames' },
      { label: 'Lifetime guarantee', text: 'Frame & upholstery covered' },
    ],
  },
  marquee: ['OPULENCE', 'GILDED AGE', 'ART DECO', 'TIMELESS', 'PROHIBITION GLAMOUR', 'BESPOKE', 'GEOMETRIC LUXURY', 'SINCE 1925'],
  story: {
    kicker: 'Our heritage',
    title: 'Three pillars of the Gatsby legacy',
    items: [
      { title: 'Born in the jazz age', text: 'Maison Gatsby opened its doors in 1925 Paris, crafting sofas for the grandest hotels and the most discerning salons of the era.' },
      { title: 'Geometric by design', text: 'Every line, curve, and angle follows the art deco principle — bold geometry, sunburst motifs, and unapologetic symmetry.' },
      { title: 'Gilded to perfection', text: 'Solid brass frames are hand-finished with 24-karat gold leaf, just as they were a century ago. No shortcuts, ever.' },
    ],
  },
  collections: {
    kicker: 'Collections',
    title: 'Four chapters of golden-era glamour',
    subtitle: 'Each collection captures a distinct facet of art deco — from emerald velvet to gilded black, every series tells a story.',
    viewLabel: 'View collection',
    items: [
      { title: 'Emerald', tagline: 'Green velvet · Brass frame', description: 'Deep emerald velvet with gilded brass frames. The crown jewel of the collection — pure 1920s hotel lobby.' },
      { title: 'Onyx', tagline: 'Black velvet · Gold leaf', description: 'Matte black velvet with 24K gold-leaf accents. Dramatic, bold, and unapologetically luxurious.' },
      { title: 'Champagne', tagline: 'Ivory boucle · Bronze', description: 'Ivory bouclé with antique bronze frames. Soft, luminous, and effortlessly elegant.' },
      { title: 'Burgundy', tagline: 'Wine velvet · Brass', description: 'Deep burgundy velvet with burnished brass. Warm, intimate, and richly romantic.' },
    ],
    countSuffix: 'pieces',
  },
  products: {
    kicker: 'Signature pieces',
    title: 'The most coveted sofas in the maison',
    addLabel: 'Enquire now',
    items: [
      { name: 'Emerald Grand 3-Seater', fabric: 'Silk velvet · Brass frame', badge: 'Iconic' },
      { name: 'Onyx Chaise Lounge', fabric: 'Black velvet · Gold leaf', badge: 'New' },
      { name: 'Champagne Loveseat', fabric: 'Boucle · Bronze frame', badge: '' },
      { name: 'Burgundy Armchair', fabric: 'Wine velvet · Brass', badge: 'Limited' },
      { name: 'Gatsby Modular Sectional', fabric: 'Emerald velvet · Brass', badge: 'Bespoke' },
      { name: 'Diamond Tufted Daybed', fabric: 'Ivory velvet · Gold', badge: '' },
    ],
  },
  stats: {
    items: [
      { label: 'Years of gilded craftsmanship' },
      { label: 'Hand-tufted pieces delivered' },
      { label: 'Master artisans per sofa' },
      { label: 'Luxury hotels furnished' },
    ],
  },
  steps: {
    kicker: 'The atelier process',
    title: 'From sketch to sofa in four gilded steps',
    items: [
      { title: 'Consultation', text: 'A private consultation with our design atelier — we discuss your space, style, and the statement you wish to make.' },
      { title: 'Hand-tufting', text: 'Master artisans hand-tuft every inch of velvet, following techniques unchanged since 1925. No machines, no shortcuts.' },
      { title: 'Gilding', text: 'Solid brass frames are hand-finished with 24-karat gold leaf, applied in delicate layers for a finish that lasts generations.' },
      { title: 'White-glove delivery', text: 'Your piece arrives by white-glove courier, professionally installed, with a lifetime guarantee certificate.' },
    ],
  },
  gallery: {
    kicker: 'Galleried interiors',
    title: 'Where Gatsby pieces come alive',
    captions: [
      'Grand Hotel Paris · Emerald Grand',
      'Private penthouse · Onyx Chaise',
      'Boutique hotel lobby · Champagne Loveseat',
      'Heritage salon · Burgundy Armchair',
      'Rooftop lounge · Gatsby Modular',
      'Art deco residence · Diamond Daybed',
    ],
  },
  testimonials: {
    kicker: 'Our patrons',
    title: 'Words from those who live with Gatsby',
    items: [
      { name: 'Isabelle Moreau', role: 'Interior architect · Paris', quote: 'The Emerald Grand is the soul of every room I place it in. The velvet catches light like nothing else — my clients are speechless every time.' },
      { name: 'James Whitfield', role: 'Hotelier · London', quote: 'We furnished our entire lobby with Maison Gatsby. Five years later, the brass still gleams and the velvet still looks new. Worth every penny.' },
      { name: 'Sophia Chen', role: 'Private collector · Shanghai', quote: 'The bespoke process was extraordinary. They hand-tufted a custom emerald sectional for my penthouse — it is a sculpture you can sit on.' },
    ],
  },
  faqs: {
    kicker: 'Inquiries',
    title: 'Questions from our discerning patrons',
    items: [
      { question: 'Are the frames real gold or gold-plated?', answer: 'Our frames are solid brass, hand-finished with genuine 24-karat gold leaf. The gilding process takes 3-5 days per piece and produces a finish that deepens beautifully with age.' },
      { question: 'Can I commission a fully bespoke piece?', answer: 'Absolutely. Our atelier welcomes bespoke commissions — choose your velvet color, frame finish, dimensions, and tufting pattern. Lead time is 10-14 weeks.' },
      { question: 'How do I care for the velvet and gilding?', answer: 'Velvet should be professionally cleaned annually. Brass frames need only a soft dry cloth — the gold leaf is sealed and requires no polishing.' },
      { question: 'What is the lead time for in-stock pieces?', answer: 'In-stock pieces are delivered within 2-3 weeks via white-glove courier, including professional installation and a lifetime guarantee certificate.' },
      { question: 'Do you offer international delivery?', answer: 'Yes, we ship worldwide with insured white-glove service. International orders include customs handling and on-site installation by our partner teams.' },
    ],
  },
  cta: {
    kicker: 'Begin the conversation',
    title: 'Commission your own piece of the golden age',
    subtitle: 'Schedule a private consultation with our atelier. We will guide you through fabric, finish, and form — crafting a sofa worthy of your space.',
    primary: 'Book a private consultation',
    secondary: 'Call the atelier: +33 1 42 86 25 25',
  },
  footerBits: {
    ratingSuffix: 'rating',
  },
};

export type Sofa15Content = typeof en;

const vi: Sofa15Content = {
  nav: {
    home: 'Trang chủ',
    story: 'Di sản',
    collections: 'Bộ sưu tập',
    products: 'Tác phẩm',
    gallery: 'Không gian',
    testimonials: 'Khách hàng',
    faqs: 'Câu hỏi',
    contact: 'Liên hệ',
  },
  hero: {
    badge: 'Maison Gatsby · Hào quang vĩnh cửu từ 1925',
    title1: 'Nơi mỗi bộ sofa',
    titleHighlight: 'thì thầm',
    title2: 'sự xa hoa',
    subtitle:
      'Velvet khâu tay, khung mạ vàng, và đường nét hình học lấy cảm hứng từ thời kỳ hoàng kim. Mỗi tác phẩm là một tuyên ngôn — di sản hào nhoáng thập niên 1920, tái hiện cho hôm nay.',
    ctaPrimary: 'Khám phá bộ sưu tập',
    ctaSecondary: 'Ghé xưởng tại',
    badgeNumber: '1925',
    badgeLabel: 'năm tác phẩm Gatsby đầu tiên ra đời',
    promos: [
      { label: 'Velvet khâu tay', text: 'Dệt tơ Ý pha trộn' },
      { label: 'Khung đồng mạ vàng', text: 'Khung lá vàng 24K' },
      { label: 'Bảo hành trọn đời', text: 'Bao khung và bọc vải' },
    ],
  },
  marquee: ['XA HOA', 'KỶ NGUYÊN VÀNG', 'ART DECO', 'VỈNH CỬU', 'HÀO NHOÁNG', 'ĐỊNH CHẾ', 'LUXURY HÌNH HỌC', 'TỪ 1925'],
  story: {
    kicker: 'Di sản của chúng tôi',
    title: 'Ba trụ cột của di sản Gatsby',
    items: [
      { title: 'Sinh ra trong kỷ nguyên jazz', text: 'Maison Gatsby mở cửa tại Paris năm 1925, chế tác sofa cho những khách sạn lộng lẫy và những phòng tiệc tinh tế nhất thời bấy giờ.' },
      { title: 'Hình học trong từng đường nét', text: 'Mỗi đường thẳng, cong, và góc cạnh đều tuân theo nguyên tắc art deco — hình học táo bạo, họa tiết tia nắng, và sự đối xứng không né tránh.' },
      { title: 'Mạ vàng hoàn hảo', text: 'Khung đồng đặc được hoàn thiện thủ công bằng lá vàng 24K, đúng như cách làm một thế kỷ trước. Không tắt đường, không bao giờ.' },
    ],
  },
  collections: {
    kicker: 'Bộ sưu tập',
    title: 'Bốn chương của hào quang hoàng kim',
    subtitle: 'Mỗi bộ sưu tập nắm bắt một khía cạnh riêng của art deco — từ velvet lục bảo đến đen mạ vàng, mỗi series kể một câu chuyện.',
    viewLabel: 'Xem bộ sưu tập',
    items: [
      { title: 'Emerald', tagline: 'Velvet lục · Khung đồng', description: 'Velvet lục bảo sâu với khung đồng mạ vàng. Viên ngọc quý của bộ sưu tập — đúng chất sảnh khách sạn thập niên 1920.' },
      { title: 'Onyx', tagline: 'Velvet đen · Lá vàng', description: 'Velvet đen mờ với điểm nhấn lá vàng 24K. Kịch tính, táo bạo, và xa hoa không né tránh.' },
      { title: 'Champagne', tagline: 'Boucle ngà · Đồng đỏ', description: 'Boucle ngà với khung đồng đỏ cổ. Mềm mại, sáng tỏ, và thanh lịch đầy nhẹ nhàng.' },
      { title: 'Burgundy', tagline: 'Velvet rượu · Đồng', description: 'Velvet rượu vang đậm với đồng cháy. Ấm áp, riêng tư, và lãng mạn phong phú.' },
    ],
    countSuffix: 'tác phẩm',
  },
  products: {
    kicker: 'Tác phẩm biểu tượng',
    title: 'Những sofa được khao khát nhất maison',
    addLabel: 'Liên hệ đặt',
    items: [
      { name: 'Emerald Grand 3 chỗ', fabric: 'Silk velvet · Khung đồng', badge: 'Biểu tượng' },
      { name: 'Onyx Chaise Lounge', fabric: 'Velvet đen · Lá vàng', badge: 'Mới' },
      { name: 'Champagne Loveseat', fabric: 'Boucle · Khung đồng đỏ', badge: '' },
      { name: 'Burgundy Armchair', fabric: 'Velvet rượu · Đồng', badge: 'Giới hạn' },
      { name: 'Gatsby Modular Sectional', fabric: 'Velvet lục · Đồng', badge: 'Định chế' },
      { name: 'Diamond Tufted Daybed', fabric: 'Velvet ngà · Vàng', badge: '' },
    ],
  },
  stats: {
    items: [
      { label: 'Năm thủ công mạ vàng' },
      { label: 'Tác phẩm khâu tay đã giao' },
      { label: 'Nghệ nhân mỗi bộ sofa' },
      { label: 'Khách sạn xa xị đã trang bị' },
    ],
  },
  steps: {
    kicker: 'Quy trình xưởng',
    title: 'Từ phác thảo đến sofa trong bốn bước mạ vàng',
    items: [
      { title: 'Tư vấn', text: 'Tư vấn riêng với xưởng thiết kế — thảo luận không gian, phong cách, và tuyên ngôn bạn muốn thể hiện.' },
      { title: 'Khâu tay', text: 'Nghệ nhân lành tay khâu từng inch velvet, theo kỹ thuật không đổi từ 1925. Không máy móc, không tắt đường.' },
      { title: 'Mạ vàng', text: 'Khung đồng đặc được hoàn thiện lá vàng 24K, phủ từng lớp mỏng cho bề mặt tồn tại nhiều thế hệ.' },
      { title: 'Giao hàng white-glove', text: 'Tác phẩm đến bằng dịch vụ white-glove, lắp đặt chuyên nghiệp, kèm chứng nhận bảo hành trọn đời.' },
    ],
  },
  gallery: {
    kicker: 'Không gian nội thất',
    title: 'Nơi tác phẩm Gatsby sống dậy',
    captions: [
      'Grand Hotel Paris · Emerald Grand',
      'Penthouse riêng · Onyx Chaise',
      'Sảnh khách sạn boutique · Champagne Loveseat',
      'Salon di sản · Burgundy Armchair',
      'Lounge sân thượng · Gatsby Modular',
      'Căn hộ art deco · Diamond Daybed',
    ],
  },
  testimonials: {
    kicker: 'Khách hàng của chúng tôi',
    title: 'Lời từ những người sống cùng Gatsby',
    items: [
      { name: 'Isabelle Moreau', role: 'Kiến trúc sư nội thất · Paris', quote: 'Emerald Grand là linh hồn mỗi căn phòng tôi đặt nó. Velvet bắt sáng như không gì sánh — khách hàng tôi đều lặng đi mỗi lần.' },
      { name: 'James Whitfield', role: 'Chủ khách sạn · London', quote: 'Chúng tôi trang bị toàn bộ sảnh bằng Maison Gatsby. Năm năm sau, đồng vẫn sáng và velvet vẫn như mới. Đáng từng đồng.' },
      { name: 'Sophia Chen', role: 'Nhà sưu tầm · Shanghai', quote: 'Quy trình định chế phi thường. Họ khâu tay một sectional lục bảo riêng cho penthouse — đó là điêu khắc bạn có thể ngồi.' },
    ],
  },
  faqs: {
    kicker: 'Câu hỏi',
    title: 'Thắc mắc từ khách hàng tinh tế',
    items: [
      { question: 'Khung là vàng thật hay mạ vàng?', answer: 'Khung là đồng đặc, hoàn thiện thủ công bằng lá vàng 24K thật. Quá trình mạ mất 3-5 ngày mỗi tác phẩm và tạo bề mặt đẹp dần theo thời gian.' },
      { question: 'Tôi có thể đặt một tác phẩm hoàn toàn riêng không?', answer: 'Hoàn toàn. Xưởng chào đón đơn định chế — chọn màu velvet, màu khung, kích thước, và họa tiết khâu. Thời gian 10-14 tuần.' },
      { question: 'Cách chăm sóc velvet và mạ vàng?', answer: 'Velvet nên giặt khô chuyên nghiệp hàng năm. Khung đồng chỉ cần khăn mềm khô — lá vàng đã được phủ seal không cần đánh bóng.' },
      { question: 'Thời gian giao cho hàng có sẵn?', answer: 'Hàng có sẵn giao trong 2-3 tuần qua dịch vụ white-glove, bao gồm lắp đặt chuyên nghiệp và chứng nhận bảo hành trọn đời.' },
      { question: 'Có giao hàng quốc tế không?', answer: 'Có, giao toàn cầu với dịch vụ white-glove có bảo hiểm. Đơn quốc tế bao gồm thủ tục hải quan và lắp đặt tại chỗ bởi đội ngũ đối tác.' },
    ],
  },
  cta: {
    kicker: 'Bắt đầu cuộc trò chuyện',
    title: 'Định chế tác phẩm hoàng kim của riêng bạn',
    subtitle: 'Đặt tư vấn riêng với xưởng. Chúng tôi sẽ hướng dẫn vải, màu, và dáng — chế tác sofa xứng đáng không gian của bạn.',
    primary: 'Đặt tư vấn riêng',
    secondary: 'Gọi xưởng: +33 1 42 86 25 25',
  },
  footerBits: {
    ratingSuffix: 'đánh giá',
  },
};

const fr: Sofa15Content = {
  nav: {
    home: 'Accueil',
    story: 'Héritage',
    collections: 'Collections',
    products: 'Pièces',
    gallery: 'Galerie',
    testimonials: 'Clients',
    faqs: 'Questions',
    contact: 'Contact',
  },
  hero: {
    badge: 'Maison Gatsby · Luxe intemporel depuis 1925',
    title1: 'Où chaque canapé',
    titleHighlight: 'murmure',
    title2: 'l\'opulence',
    subtitle:
      'Velours capitonné à la main, cadres dorés et lignes géométriques inspirées de l\'âge d\'or. Chaque pièce est une affirmation — un héritage du glamour des années 1920, réinventé aujourd\'hui.',
    ctaPrimary: 'Découvrir les collections',
    ctaSecondary: 'Visiter l\'atelier',
    badgeNumber: '1925',
    badgeLabel: 'année de la première pièce Gatsby',
    promos: [
      { label: 'Velours capitonné main', text: 'Tissage soie italienne' },
      { label: 'Laiton massif doré', text: 'Cadres feuille d\'or 24K' },
      { label: 'Garantie à vie', text: 'Structure et tissu couverts' },
    ],
  },
  marquee: ['OPULENCE', 'ÂGE D\'OR', 'ART DÉCO', 'INTEMPOREL', 'GLAMOUR', 'SUR-MESURE', 'LUXE GÉOMÉTRIQUE', 'DEPUIS 1925'],
  story: {
    kicker: 'Notre héritage',
    title: 'Trois piliers de l\'héritage Gatsby',
    items: [
      { title: 'Né à l\'ère du jazz', text: 'Maison Gatsby a ouvert ses portes à Paris en 1925, créant des canapés pour les plus grands hôtels et les salons les plus exigeants de l\'époque.' },
      { title: 'Géométrique par design', text: 'Chaque ligne, courbe et angle suit le principe art déco — géométrie audacieuse, motifs en éventail et symétrie sans compromis.' },
      { title: 'Doré à la perfection', text: 'Les cadres en laiton massif sont finis à la main avec de la feuille d\'or 24 carats, comme il y a un siècle. Aucun raccourci, jamais.' },
    ],
  },
  collections: {
    kicker: 'Collections',
    title: 'Quatre chapitres de glamour de l\'âge d\'or',
    subtitle: 'Chaque collection capture une facette distincte de l\'art déco — du velours émeraude au noir doré, chaque série raconte une histoire.',
    viewLabel: 'Voir la collection',
    items: [
      { title: 'Emerald', tagline: 'Velours vert · Laiton', description: 'Velours émeraude profond avec cadres en laiton doré. Le joyau de la collection — pur hall d\'hôtel des années 1920.' },
      { title: 'Onyx', tagline: 'Velours noir · Or 24K', description: 'Velours noir mat avec accents en feuille d\'or 24K. Dramatique, audacieux et luxueusement sans complexe.' },
      { title: 'Champagne', tagline: 'Boucle ivoire · Bronze', description: 'Boucle ivoire avec cadres en bronze antique. Doux, lumineux et élégamment facile.' },
      { title: 'Burgundy', tagline: 'Velours bordeaux · Laiton', description: 'Velours bordeaux profond avec laiton bruni. Chaud, intime et richement romantique.' },
    ],
    countSuffix: 'pièces',
  },
  products: {
    kicker: 'Pièces signature',
    title: 'Les canapés les plus convoités de la maison',
    addLabel: 'Demander un devis',
    items: [
      { name: 'Emerald Grand 3 places', fabric: 'Velours soie · Laiton', badge: 'Icône' },
      { name: 'Onyx Chaise Lounge', fabric: 'Velours noir · Or 24K', badge: 'Nouveau' },
      { name: 'Champagne Loveseat', fabric: 'Boucle · Bronze', badge: '' },
      { name: 'Burgundy Fauteuil', fabric: 'Velours bordeaux · Laiton', badge: 'Édition limitée' },
      { name: 'Gatsby Modular', fabric: 'Velours émeraude · Laiton', badge: 'Sur-mesure' },
      { name: 'Diamond capitonné', fabric: 'Velours ivoire · Or', badge: '' },
    ],
  },
  stats: {
    items: [
      { label: 'Années de savoir-faire doré' },
      { label: 'Pièces capitonnées livrées' },
      { label: 'Artisans par canapé' },
      { label: 'Hôtels de luxe équipés' },
    ],
  },
  steps: {
    kicker: 'Le processus d\'atelier',
    title: 'Du croquis au canapé en quatre étapes dorées',
    items: [
      { title: 'Consultation', text: 'Consultation privée avec notre atelier de design — nous discutons de votre espace, style et de la déclaration que vous souhaitez faire.' },
      { title: 'Capitonnage main', text: 'Des artisans maîtres capitonnent chaque centimètre de velours, suivant des techniques inchangées depuis 1925. Aucune machine.' },
      { title: 'Dorure', text: 'Les cadres en laiton massif sont finis à la feuille d\'or 24 carats, appliquée en couches délicates pour un fini qui dure des générations.' },
      { title: 'Livraison gants blancs', text: 'Votre pièce arrive par coursier gants blancs, installée professionnellement, avec certificat de garantie à vie.' },
    ],
  },
  gallery: {
    kicker: 'Intérieurs galerisés',
    title: 'Où les pièces Gatsby prennent vie',
    captions: [
      'Grand Hôtel Paris · Emerald Grand',
      'Penthouse privé · Onyx Chaise',
      'Hall d\'hôtel boutique · Champagne',
      'Salon patrimonial · Burgundy',
      'Lounge toit-terrasse · Gatsby Modular',
      'Résidence art déco · Diamond Daybed',
    ],
  },
  testimonials: {
    kicker: 'Nos clients',
    title: 'Paroles de ceux qui vivent avec Gatsby',
    items: [
      { name: 'Isabelle Moreau', role: 'Architecte d\'intérieur · Paris', quote: 'L\'Emerald Grand est l\'âme de chaque pièce où je le place. Le velours capte la lumière comme rien d\'autre — mes clients sont à chaque fois sans voix.' },
      { name: 'James Whitfield', role: 'Hôtelier · Londres', quote: 'Nous avons meublé tout notre hall avec Maison Gatsby. Cinq ans plus tard, le laiton brille encore et le velours paraît neuf. Ça vaut chaque penny.' },
      { name: 'Sophia Chen', role: 'Collectionneuse · Shanghai', quote: 'Le processus sur-mesure a été extraordinaire. Ils ont capitonné un sectional émeraude pour mon penthouse — c\'est une sculpture sur laquelle on s\'assoit.' },
    ],
  },
  faqs: {
    kicker: 'Questions',
    title: 'Questions de nos clients exigeants',
    items: [
      { question: 'Les cadres sont-ils en or réel ou plaqué ?', answer: 'Nos cadres sont en laiton massif, fini à la main avec de la véritable feuille d\'or 24 carats. La dorure prend 3 à 5 jours par pièce et produit un fini qui se sublime avec l\'âge.' },
      { question: 'Puis-je commander une pièce entièrement sur-mesure ?', answer: 'Absolument. Notre atelier accueille les commandes sur-mesure — choisissez couleur de velours, fini du cadre, dimensions et motif de capitonnage. Délai de 10 à 14 semaines.' },
      { question: 'Comment entretenir le velours et la dorure ?', answer: 'Le velours doit être nettoyé professionnellement chaque année. Les cadres en laiton n\'ont besoin que d\'un chiffon doux sec — la feuille d\'or est scellée et ne nécessite aucun polissage.' },
      { question: 'Quel est le délai pour les pièces en stock ?', answer: 'Les pièces en stock sont livrées sous 2 à 3 semaines par coursier gants blancs, incluant installation professionnelle et certificat de garantie à vie.' },
      { question: 'Proposez-vous la livraison internationale ?', answer: 'Oui, nous expédions mondialement avec service gants blancs assuré. Les commandes internationales incluent le dédouanement et l\'installation sur site par nos équipes partenaires.' },
    ],
  },
  cta: {
    kicker: 'Engagez la conversation',
    title: 'Commandez votre pièce de l\'âge d\'or',
    subtitle: 'Planifiez une consultation privée avec notre atelier. Nous vous guiderons à travers tissu, fini et forme — créant un canapé digne de votre espace.',
    primary: 'Réserver une consultation privée',
    secondary: 'Appeler l\'atelier : +33 1 42 86 25 25',
  },
  footerBits: {
    ratingSuffix: 'avis',
  },
};

const cn: Sofa15Content = {
  nav: {
    home: '首页',
    story: '传承',
    collections: '系列',
    products: '作品',
    gallery: '空间',
    testimonials: '客户',
    faqs: '问答',
    contact: '联系我们',
  },
  hero: {
    badge: 'Maison Gatsby · 自1925年的永恒奢华',
    title1: '每张沙发',
    titleHighlight: '低语着',
    title2: '奢华',
    subtitle:
      '手工绗缝天鹅绒、镀金框架、源自黄金时代的几何线条。每一件都是宣言——1920年代魅力的传承，为今日重新演绎。',
    ctaPrimary: '探索系列',
    ctaSecondary: '参观工坊',
    badgeNumber: '1925',
    badgeLabel: '首件Gatsby作品诞生之年',
    promos: [
      { label: '手工绗缝天鹅绒', text: '意大利丝混编织' },
      { label: '实心黄铜镀金', text: '24K金箔框架' },
      { label: '终身保修', text: '框架与面料全包' },
    ],
  },
  marquee: ['奢华', '镀金时代', '装饰艺术', '永恒', '禁忌魅力', '定制', '几何奢华', '自1925年'],
  story: {
    kicker: '我们的传承',
    title: 'Gatsby传承的三大支柱',
    items: [
      { title: '诞生于爵士时代', text: 'Maison Gatsby于1925年在巴黎开业,为当时最宏伟的酒店和最挑剔的沙龙制作沙发。' },
      { title: '几何设计', text: '每条线、每个弧度和角度都遵循装饰艺术原则——大胆的几何、扇形图案和无懈可击的对称。' },
      { title: '镀金至臻', text: '实心黄铜框架手工饰以24K金箔,一如百年前。绝无捷径,从不妥协。' },
    ],
  },
  collections: {
    kicker: '系列',
    title: '黄金时代魅力的四个篇章',
    subtitle: '每个系列捕捉装饰艺术的独特一面——从祖母绿天鹅绒到镀金黑色,每个系列讲述一个故事。',
    viewLabel: '查看系列',
    items: [
      { title: 'Emerald 祖母绿', tagline: '绿天鹅绒 · 黄铜框架', description: '深邃祖母绿天鹅绒配镀金黄铜框架。系列皇冠明珠——纯正1920年代酒店大堂风格。' },
      { title: 'Onyx 玛瑙黑', tagline: '黑天鹅绒 · 24K金箔', description: '哑光黑天鹅绒配24K金箔点缀。戏剧性、大胆、不妥协的奢华。' },
      { title: 'Champagne 香槟', tagline: '象牙白布料 · 古铜', description: '象牙白布料配古铜框架。柔和、明亮、优雅从容。' },
      { title: 'Burgundy 勃艮第', tagline: '酒红天鹅绒 · 黄铜', description: '深邃酒红天鹅绒配磨砂黄铜。温暖、私密、浓郁浪漫。' },
    ],
    countSuffix: '件',
  },
  products: {
    kicker: '标志性作品',
    title: '工坊中最令人向往的沙发',
    addLabel: '立即咨询',
    items: [
      { name: 'Emerald Grand 三人座', fabric: '丝绒 · 黄铜框架', badge: '经典' },
      { name: 'Onyx 躺椅', fabric: '黑天鹅绒 · 24K金箔', badge: '新品' },
      { name: 'Champagne 双人座', fabric: '布料 · 古铜框架', badge: '' },
      { name: 'Burgundy 扶手椅', fabric: '酒红天鹅绒 · 黄铜', badge: '限量' },
      { name: 'Gatsby 模块组合', fabric: '祖母绿天鹅绒 · 黄铜', badge: '定制' },
      { name: 'Diamond 绗缝榻', fabric: '象牙天鹅绒 · 金', badge: '' },
    ],
  },
  stats: {
    items: [
      { label: '年镀金工艺传承' },
      { label: '件手工绗缝作品交付' },
      { label: '位工匠完成每张沙发' },
      { label: '家豪华酒店选用' },
    ],
  },
  steps: {
    kicker: '工坊流程',
    title: '从草图到沙发,四步镀金之旅',
    items: [
      { title: '咨询', text: '与我们的设计工坊进行私密咨询——讨论您的空间、风格和您想表达的宣言。' },
      { title: '手工绗缝', text: '工匠大师手工绗缝每一寸天鹅绒,遵循自1925年不变的技术。无机器,无捷径。' },
      { title: '镀金', text: '实心黄铜框架手工饰以24K金箔,逐层精细涂抹,造就可传承数代的饰面。' },
      { title: '白手套配送', text: '您的作品由白手套专员送达,专业安装,附终身保修证书。' },
    ],
  },
  gallery: {
    kicker: '空间展示',
    title: 'Gatsby作品焕发生机之处',
    captions: [
      '巴黎大酒店 · Emerald Grand',
      '私人顶层公寓 · Onyx 躺椅',
      '精品酒店大堂 · Champagne 双人座',
      '传世沙龙 · Burgundy 扶手椅',
      '屋顶酒廊 · Gatsby 模块组合',
      '装饰艺术住宅 · Diamond 榻',
    ],
  },
  testimonials: {
    kicker: '我们的客户',
    title: '与Gatsby共处者的感言',
    items: [
      { name: 'Isabelle Moreau', role: '室内建筑师 · 巴黎', quote: 'Emerald Grand是我放置它的每个空间的灵魂。天鹅绒捕捉光线的方式无与伦比——我的客户每次都惊叹不已。' },
      { name: 'James Whitfield', role: '酒店经营者 · 伦敦', quote: '我们用Maison Gatsby布置了整个大堂。五年后,黄铜依然闪耀,天鹅绒依然如新。物超所值。' },
      { name: 'Sophia Chen', role: '私人收藏家 · 上海', quote: '定制过程非凡。他们为我的顶层公寓手工绗缝了祖母绿组合沙发——这是一件可以坐的雕塑。' },
    ],
  },
  faqs: {
    kicker: '咨询',
    title: '尊贵客户的常见问题',
    items: [
      { question: '框架是真金还是镀金?', answer: '我们的框架是实心黄铜,手工饰以真正的24K金箔。镀金过程每件需3-5天,产生随岁月愈发醇美的饰面。' },
      { question: '我可以定制完全 bespoke 的作品吗?', answer: '当然。我们的工坊欢迎定制委托——选择天鹅绒颜色、框架饰面、尺寸和绗缝图案。交货期10-14周。' },
      { question: '如何保养天鹅绒和镀金?', answer: '天鹅绒应每年专业干洗。黄铜框架只需柔软干布擦拭——金箔已密封,无需抛光。' },
      { question: '现货交货期多长?', answer: '现货通过白手套专员在2-3周内送达,包括专业安装和终身保修证书。' },
      { question: '你们提供国际配送吗?', answer: '是的,我们通过保险白手套服务全球发货。国际订单包括清关和由合作伙伴团队现场安装。' },
    ],
  },
  cta: {
    kicker: '开启对话',
    title: '定制属于您的黄金时代作品',
    subtitle: '预约与工坊的私密咨询。我们将引导您选择面料、饰面和造型——打造配得上您空间的沙发。',
    primary: '预约私密咨询',
    secondary: '致电工坊:+33 1 42 86 25 25',
  },
  footerBits: {
    ratingSuffix: '评分',
  },
};

const ar: Sofa15Content = {
  nav: {
    home: 'الرئيسية',
    story: 'الإرث',
    collections: 'المجموعات',
    products: 'القطع',
    gallery: 'المعرض',
    testimonials: 'العملاء',
    faqs: 'الأسئلة',
    contact: 'تواصل معنا',
  },
  hero: {
    badge: 'ميزون غاتسبي · فخامة خالدة منذ 1925',
    title1: 'حيث كل أريكة',
    titleHighlight: 'تهمس',
    title2: 'بالترف',
    subtitle:
      'مخمل مبطّن يدوياً، إطارات مذهبة، وخطوط هندسية مستوحاة من العصر الذهبي. كل قطعة هي بيان — إرث من مجد العشرينيات، أعيد تصوره لليوم.',
    ctaPrimary: 'استكشف المجموعات',
    ctaSecondary: 'زر الورشة',
    badgeNumber: '1925',
    badgeLabel: 'سنة أول قطعة غاتسبي',
    promos: [
      { label: 'مخمل مبطّن يدوياً', text: 'نسيج حرير إيطالي مخلوط' },
      { label: 'نحاس مصمت مذهب', text: 'إطارات بأوراق ذهب 24 قيراط' },
      { label: 'ضمان مدى الحياة', text: 'يغطي الإطار والتنجيد' },
    ],
  },
  marquee: ['ترف', 'العصر الذهبي', 'آرت ديكو', 'خالد', 'مجد محظور', 'تفصيل خاص', 'فخامة هندسية', 'منذ 1925'],
  story: {
    kicker: 'إرثنا',
    title: 'ثلاث ركائز لإرث غاتسبي',
    items: [
      { title: 'وُلد في عصر الجاز', text: 'افتتحت ميزون غاتسبي أبوابها في باريس عام 1925، تصنع أرائك لأفخم الفنادق وأكثر الصالونات تطلباً في ذلك العصر.' },
      { title: 'هندسي بالتصميم', text: 'كل خط ومنحنى وزاوية يتبع مبدأ آرت ديكو — هندسة جريئة، زخارف شمسية، وتناظر بلا تنازل.' },
      { title: 'مذهب للكمال', text: 'الإطارات النحاسية المصمتة تُنهى يدوياً بأوراق ذهب 24 قيراط، تماماً كما كان قبل قرن. لا اختصارات، أبداً.' },
    ],
  },
  collections: {
    kicker: 'المجموعات',
    title: 'أربعة فصول من مجد العصر الذهبي',
    subtitle: 'كل مجموعة تلتقط جانباً مميزاً من آرت ديكو — من المخمل الزمردي إلى الأسود المذهب، كل سلسلة تروي قصة.',
    viewLabel: 'عرض المجموعة',
    items: [
      { title: 'زمرد', tagline: 'مخمل أخضر · إطار نحاسي', description: 'مخمل زمردي عميق بإطارات نحاسية مذهبة. جوهرة المجموعة — بهجة بهو فندق من العشرينيات.' },
      { title: 'جزع', tagline: 'مخمل أسود · أوراق ذهب', description: 'مخمل أسود مطفي بلمسات أوراق ذهب 24 قيراط. درامي، جريء، وفخامة بلا اعتذار.' },
      { title: 'شمبانيا', tagline: 'بوكليه عاجي · برونز', description: 'بوكليه عاجي بإطارات برونزية قديمة. ناعم، مضيء، وأناقة بلا جهد.' },
      { title: 'خمري', tagline: 'مخمل خمري · نحاس', description: 'مخمل خمري عميق بنحاس مصقول. دافئ، حميمي، ورومانسي ثري.' },
    ],
    countSuffix: 'قطعة',
  },
  products: {
    kicker: 'القطع المميزة',
    title: 'الأكثر طلباً في الدار',
    addLabel: 'استفسر الآن',
    items: [
      { name: 'زمرد الكبرى 3 مقاعد', fabric: 'مخمل حريري · نحاس', badge: 'أيقونة' },
      { name: 'جزع صالة طويلة', fabric: 'مخمل أسود · ذهب 24K', badge: 'جديد' },
      { name: 'شمبانيا مقعدين', fabric: 'بوكليه · برونز', badge: '' },
      { name: 'خمري كرسي بذراعين', fabric: 'مخمل خمري · نحاس', badge: 'محدود' },
      { name: 'غاتسبي موديولار', fabric: 'مخمل زمردي · نحاس', badge: 'تفصيل خاص' },
      { name: 'دايموند مبطّن', fabric: 'مخمل عاجي · ذهب', badge: '' },
    ],
  },
  stats: {
    items: [
      { label: 'سنة من الحرفية المذهبة' },
      { label: 'قطعة مبطّنة يدوياً تم تسليمها' },
      { label: 'حرفي لكل أريكة' },
      { label: 'فندق فاخر تم تأثيثه' },
    ],
  },
  steps: {
    kicker: 'عملية الورشة',
    title: 'من الرسم إلى الأريكة في أربع خطوات مذهبة',
    items: [
      { title: 'استشارة', text: 'استشارة خاصة مع ورشة التصميم — نناقش مساحتك وأسلوبك والبيان الذي ترغب في تقديمه.' },
      { title: 'تبطين يدوي', text: 'حرفيون مهرة يبطّنون كل بوصة من المخمل، باتباع تقنيات لم تتغير منذ 1925. لا آلات، لا اختصارات.' },
      { title: 'تذهيب', text: 'الإطارات النحاسية المصمتة تُنهى يدوياً بأوراق ذهب 24 قيراط، تُطبّق في طبقات رقيقة للمسة تدوم أجيالاً.' },
      { title: 'توصيل بالقفازات البيضاء', text: 'تصلك قطعتك عبر موصل بالقفازات البيضاء، تُركّب احترافياً، مع شهادة ضمان مدى الحياة.' },
    ],
  },
  gallery: {
    kicker: 'الديكورات المعروضة',
    title: 'حيث تأتي قطع غاتسبي إلى الحياة',
    captions: [
      'الفندق الكبير باريس · زمرد الكبرى',
      'شقة بنتهاوس خاصة · جزع',
      'بهو فندق بوتيك · شمبانيا',
      'صالون تراثي · خمري',
      'صالة السطح · غاتسبي موديولار',
      'سكن آرت ديكو · دايموند',
    ],
  },
  testimonials: {
    kicker: 'عملاؤنا',
    title: 'كلمات من يعيشون مع غاتسبي',
    items: [
      { name: 'إيزابيل مورو', role: 'مهندسة ديكور داخلي · باريس', quote: 'زمرد الكبرى هو روح كل غرفة أضعها فيها. المخمل يلتقط الضوء كشيء لا يُضاهى — عملاؤي يصمتون كل مرة.' },
      { name: 'جيمس ويتفيلد', role: 'صاحب فندق · لندن', quote: 'أثثنا بهو الفندق بالكامل بميزون غاتسبي. بعد خمس سنوات، النحاس لا يزال يلمع والمخمل يبدو جديداً. يستحق كل قرش.' },
      { name: 'صوفيا تشن', role: 'جامعة قطع · شنغهاي', quote: 'كانت عملية التفصيل استثنائية. بطّنوا يدوياً أريكة زمرديه لشقتي — إنه منحوتة يمكنك الجلوس عليها.' },
    ],
  },
  faqs: {
    kicker: 'استفسارات',
    title: 'أسئلة من عملائنا المميزين',
    items: [
      { question: 'هل الإطارات ذهب حقيقي أم مذهب؟', answer: 'إطاراتنا من النحاس المصمت، منتهية يدوياً بأوراق ذهب 24 قيراط حقيقية. عملية التذهيب تستغرق 3-5 أيام لكل قطعة وتنتج لمسة تزداد جمالاً مع العمر.' },
      { question: 'هل يمكنني طلب قطعة تفصيلية بالكامل؟', answer: 'بالتأكيد. ورشتنا ترحب بطلبات التفصيل — اختر لون المخمل، نهاية الإطار، الأبعاد، ونمط التبطين. مدة التسليم 10-14 أسبوعاً.' },
      { question: 'كيف أعتني بالمخمل والتذهيب؟', answer: 'يجب تنظيف المخمل احترافياً سنوياً. إطارات النحاس تحتاج فقط قطعة قماش جافة ناعمة — أوراق الذهب مغلقة ولا تحتاج صقل.' },
      { question: 'كم تستغرق مدة التسليم للقطع المتوفرة؟', answer: 'القطع المتوفرة تُسلّم خلال 2-3 أسابيع عبر موصل بالقفازات البيضاء، شاملة التركيب الاحترافي وشهادة ضمان مدى الحياة.' },
      { question: 'هل تقدمون توصيلاً دولياً؟', answer: 'نعم، نشحن عالمياً بخدمة القفازات البيضاء المؤمنة. الطلبات الدولية تشمل التخليص الجمركي والتركيب في الموقع بواسطة فرق شركائنا.' },
    ],
  },
  cta: {
    kicker: 'ابدأ المحادثة',
    title: 'اطلب قطعتك من العصر الذهبي',
    subtitle: 'احجز استشارة خاصة مع ورشتنا. سنرشدك عبر القماش والنهائية والشكل — نصنع أريكة تليق بمساحتك.',
    primary: 'احجز استشارة خاصة',
    secondary: 'اتصل بالورشة: +33 1 42 86 25 25',
  },
  footerBits: {
    ratingSuffix: 'تقييم',
  },
};

export const SOFA15_CONTENT = { en, vi, fr, cn, ar };

export function useSofa15Content() {
  const { currentLang } = useTranslate();
  return SOFA15_CONTENT[currentLang.value as keyof typeof SOFA15_CONTENT] ?? SOFA15_CONTENT.en;
}
