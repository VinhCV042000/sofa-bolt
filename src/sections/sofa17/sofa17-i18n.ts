import { useTranslate } from 'src/locales';

// ----------------------------------------------------------------------
// SOFA17 — MOROCCAN RIAD — full multi-language content dictionary
// ----------------------------------------------------------------------

const en = {
  nav: {
    home: 'Home',
    story: 'Heritage',
    collections: 'Collections',
    products: 'Pieces',
    gallery: 'Riads',
    testimonials: 'Guests',
    faqs: 'Inquiries',
    contact: 'Contact',
  },
  hero: {
    badge: 'Dar Zellige · Marrakech craftsmanship since 1958',
    title1: 'Where every sofa',
    titleHighlight: 'whispers',
    title2: 'a thousand-year tale',
    subtitle:
      'Hand-woven textiles, carved cedar frames, and zellige-inspired patterns from the heart of the Medina. Each piece carries the soul of a Moroccan riad — warm, intimate, and timeless.',
    ctaPrimary: 'Explore collections',
    ctaSecondary: 'Visit the souk',
    badgeNumber: '1958',
    badgeLabel: 'year the first Dar Zellige sofa was carved in the Medina',
    promos: [
      { label: 'Hand-woven textiles', text: 'Souk-dyed wool & silk' },
      { label: 'Carved cedar frames', text: 'Atlas Mountain cedar' },
      { label: 'Master artisans', text: '3 generations of craft' },
      { label: 'Bespoke commissions', text: 'Tailored to your riad' },
    ],
  },
  marquee: ['Zellige', 'Riad', 'Souk', 'Atlas', 'Saffron', 'Teal', 'Cedar', 'Henna', 'Marrakech', 'Berber'],
  story: {
    kicker: 'Our heritage',
    title: 'Three pillars of the Marrakech soul',
    items: [
      { title: 'Born in the Medina', text: 'Dar Zellige began in 1958 when Maâlem Hassan carved his first sofa frame from Atlas cedar in a tiny workshop in the Medina. Three generations later, his bench still stands.' },
      { title: 'Dyed in the souk', text: 'Every textile is hand-woven and dyed in the Marrakech souk using saffron, henna, and indigo — natural pigments unchanged for a thousand years. No synthetic colors, ever.' },
      { title: 'Patterned by zellige', text: 'Our designs draw from the geometric art of zellige mosaic — each pattern a meditation, each angle a prayer. The riad is our canvas; geometry, our language.' },
    ],
  },
  collections: {
    kicker: 'Collections',
    title: 'Four chapters of riad living',
    subtitle: 'Each collection captures a different corner of the Moroccan day — from the cool shade of a courtyard to the amber glow of a lantern-lit evening.',
    viewLabel: 'Discover collection',
    items: [
      { title: 'Cour', tagline: 'Teal · Wool · Cedar', description: 'Deep teal hand-woven wool on carved cedar frames. The cool serenity of a riad courtyard at dawn, captured in comfort.' },
      { title: 'Souk', tagline: 'Saffron · Silk · Brass', description: 'Warm saffron silk with brass-accented frames. The vibrant energy of the Marrakech souk, alive in your living room.' },
      { title: 'Atlas', tagline: 'Ruby · Wool · Olive', description: 'Rich ruby wool on reclaimed olive wood. The deep warmth of a mountain evening, fireside and timeless.' },
      { title: 'Lantern', tagline: 'Cream · Boucle · Lantern', description: 'Cream boucle with brass lantern details. The amber glow of a lantern-lit terrace, suspended in time.' },
    ],
    countSuffix: 'pieces',
  },
  products: {
    kicker: 'Signature pieces',
    title: 'The most treasured sofas in the Medina',
    addLabel: 'Enquire now',
    items: [
      { name: 'Marrakech 3-Seater', fabric: 'Teal wool · Cedar', badge: 'Iconic' },
      { name: 'Riad Loveseat', fabric: 'Saffron silk · Brass', badge: 'New' },
      { name: 'Atlas Lounge Chair', fabric: 'Ruby wool · Olive', badge: '' },
      { name: 'Souk Daybed', fabric: 'Cream boucle · Brass', badge: 'Limited' },
      { name: 'Zellige Modular', fabric: 'Multicolor · Cedar', badge: 'Bespoke' },
      { name: 'Berber Bench', fabric: 'Natural wool · Olive', badge: '' },
    ],
  },
  stats: {
    items: [
      { label: 'Years of Medina craftsmanship' },
      { label: 'Hand-carved pieces delivered' },
      { label: 'Master artisans per piece' },
      { label: 'Riads furnished worldwide' },
    ],
  },
  steps: {
    kicker: 'The artisan process',
    title: 'From souk to sofa in four mystical steps',
    items: [
      { title: 'Consultation', text: 'A conversation with our maâlem — we discuss your space, your story, and the riad atmosphere you wish to bring home.' },
      { title: 'Hand-weaving', text: 'Artisans hand-weave and dye every textile in the souk using saffron, henna, and indigo — natural pigments unchanged for a thousand years.' },
      { title: 'Cedar carving', text: 'Master carvers shape each frame from Atlas Mountain cedar, following techniques passed down through three generations of the same family.' },
      { title: 'Riad delivery', text: 'Your sofa arrives with white-glove care, professionally placed, with a lifetime craftsmanship guarantee from our atelier.' },
    ],
  },
  gallery: {
    kicker: 'Riads & homes',
    title: 'Where Dar Zellige pieces come to life',
    captions: [
      'Riad courtyard · Marrakech 3-Seater',
      'Medina salon · Riad Loveseat',
      'Terrace lounge · Atlas Lounge Chair',
      'Garden retreat · Souk Daybed',
      'Poolside villa · Zellige Modular',
      'Mountain lodge · Berber Bench',
    ],
  },
  testimonials: {
    kicker: 'Our guests',
    title: 'Words from those who live with Zellige',
    items: [
      { name: 'Yasmine Alaoui', role: 'Interior designer · Marrakech', quote: 'The Cour collection is like bringing the serenity of a riad courtyard indoors. My clients say their home finally feels like a Marrakech retreat.' },
      { name: 'James Whitfield', role: 'Villa owner · Tangier', quote: 'We furnished our entire terrace with Dar Zellige. Six years of sun, guests, and Atlas winds — and the cedar frames still look like the day they were carved.' },
      { name: 'Sofia Caruso', role: 'Architect · Milan', quote: 'The zellige-inspired patterns are extraordinary. Each sofa is a piece of geometric art. My Milan clients now have a fragment of the Medina in their loft.' },
    ],
  },
  faqs: {
    kicker: 'Inquiries',
    title: 'Questions from our riad guests',
    items: [
      { question: 'Are the textiles suitable for outdoor use?', answer: 'Our hand-woven textiles are crafted for indoor and covered outdoor spaces. For full sun and rain exposure, we recommend the Atlas collection with treated olive wood frames.' },
      { question: 'How is the cedar wood sourced?', answer: 'All cedar is sustainably harvested from the Atlas Mountains, working with cooperatives that replant for every tree used. Each frame carries a certificate of origin.' },
      { question: 'Can I commission a custom piece?', answer: 'With pleasure. Our maâlem welcomes bespoke commissions — choose your textile, frame, dimensions, and zellige pattern. Lead time is 10-14 weeks.' },
      { question: 'How do I care for the textiles and wood?', answer: 'Wool and silk covers are removable and professionally dry-clean only. Cedar frames need only an occasional wipe with a damp cloth and natural beeswax once a year.' },
      { question: 'Do you ship internationally?', answer: 'Yes, we ship worldwide with insured white-glove service. International orders include customs handling and professional installation by our partner teams.' },
    ],
  },
  cta: {
    kicker: 'Begin the journey',
    title: 'Bring the soul of Marrakech home',
    subtitle: 'Schedule a private consultation with our maâlem in the Medina. We will help you choose textile, wood, and pattern — crafting a sofa that carries your story.',
    primary: 'Book a private consultation',
    secondary: 'Call the atelier: +212 524 38 39 40',
  },
  footerBits: {
    ratingSuffix: 'rating',
  },
};

export type Sofa17Content = typeof en;

const vi: Sofa17Content = {
  nav: {
    home: 'Trang chủ',
    story: 'Di sản',
    collections: 'Bộ sưu tập',
    products: 'Tác phẩm',
    gallery: 'Riad',
    testimonials: 'Khách hàng',
    faqs: 'Câu hỏi',
    contact: 'Liên hệ',
  },
  hero: {
    badge: 'Dar Zellige · Thủ công Marrakech từ 1958',
    title1: 'Nơi mỗi bộ sofa',
    titleHighlight: 'thì thầm',
    title2: 'câu chuyện ngàn năm',
    subtitle:
      'Vải đan tay, khung gỗ tuyết tùng điêu khắc và họa tiết zellige từ trái tim Medina. Mỗi tác phẩm mang linh hồn riad Maroc — ấm áp, thân mật, và vĩnh cửu.',
    ctaPrimary: 'Khám phá bộ sưu tập',
    ctaSecondary: 'Ghé souk',
    badgeNumber: '1958',
    badgeLabel: 'năm bộ sofa Dar Zellige đầu tiên được điêu khắc tại Medina',
    promos: [
      { label: 'Vải đan tay', text: 'Len & lụa nhuộm souk' },
      { label: 'Khung tuyết tùng điêu khắc', text: 'Tuyết tùng núi Atlas' },
      { label: 'Nghệ nhân bậc thầy', text: '3 thế hệ thủ công' },
      { label: 'Định chế riêng', text: 'Theo riad của bạn' },
    ],
  },
  marquee: ['Zellige', 'Riad', 'Souk', 'Atlas', 'Nghệ', 'Xanh Teal', 'Tuyết tùng', 'Henna', 'Marrakech', 'Berber'],
  story: {
    kicker: 'Di sản của chúng tôi',
    title: 'Ba trụ cột của tâm hồn Marrakech',
    items: [
      { title: 'Sinh ra tại Medina', text: 'Dar Zellige bắt đầu năm 1958 khi Maâlem Hassan điêu khắc khung sofa đầu tiên từ gỗ tuyết tùng Atlas trong xưởng nhỏ tại Medina. Ba thế hệ sau, băng ghế của ông vẫn còn đó.' },
      { title: 'Nhuộm tại souk', text: 'Mỗi tấm vải được đan tay và nhuộm tại souk Marrakech bằng nghệ, henna, và chàm — sắc tố tự nhiên không đổi suốt ngàn năm. Không màu tổng hợp, bao giờ.' },
      { title: 'Họa tiết zellige', text: 'Thiết kế của chúng tôi lấy từ nghệ thuật hình học zellige — mỗi họa tiết một thiền định, mỗi góc một lời cầu. Riad là canvas, hình học là ngôn ngữ.' },
    ],
  },
  collections: {
    kicker: 'Bộ sưu tập',
    title: 'Bốn chương của cuộc sống riad',
    subtitle: 'Mỗi bộ sưu tập nắm bắt một góc khác nhau trong ngày Maroc — từ bóng mát mát của sân trong đến ánh hổ phách của đêm đèn lồng.',
    viewLabel: 'Khám phá bộ sưu tập',
    items: [
      { title: 'Cour', tagline: 'Teal · Len · Tuyết tùng', description: 'Len teal đan tay trên khung tuyết tùng điêu khắc. Sự thanh bình của sân riad lúc bình minh, giữ trọn trong sự thoải mái.' },
      { title: 'Souk', tagline: 'Nghệ · Lụa · Đồng', description: 'Lụa nghệ ấm với khung mạ đồng. Năng lượng sôi động của souk Marrakech, sống động trong phòng khách.' },
      { title: 'Atlas', tagline: 'Ruby · Len · Olive', description: 'Len ruby đậm trên gỗ olive tái chế. Sưởi ấm của buổi tối núi, bên lửa và vĩnh cửu.' },
      { title: 'Lantern', tagline: 'Kem · Boucle · Lồng', description: 'Boucle kem với chi tiết lồng đồng. Ánh hổ phách của sân lồng, ngưng đọng trong thời gian.' },
    ],
    countSuffix: 'tác phẩm',
  },
  products: {
    kicker: 'Tác phẩm biểu tượng',
    title: 'Những sofa được trân quý nhất tại Medina',
    addLabel: 'Liên hệ đặt',
    items: [
      { name: 'Marrakech 3 chỗ', fabric: 'Len teal · Tuyết tùng', badge: 'Biểu tượng' },
      { name: 'Riad Loveseat', fabric: 'Lụa nghệ · Đồng', badge: 'Mới' },
      { name: 'Atlas Lounge Chair', fabric: 'Len ruby · Olive', badge: '' },
      { name: 'Souk Daybed', fabric: 'Boucle kem · Đồng', badge: 'Giới hạn' },
      { name: 'Zellige Modular', fabric: 'Đa sắc · Tuyết tùng', badge: 'Định chế' },
      { name: 'Berber Bench', fabric: 'Len tự nhiên · Olive', badge: '' },
    ],
  },
  stats: {
    items: [
      { label: 'Năm thủ công Medina' },
      { label: 'Tác phẩm điêu khắc tay đã giao' },
      { label: 'Nghệ nhân bậc thầy mỗi tác phẩm' },
      { label: 'Riad đã trang bị trên toàn cầu' },
    ],
  },
  steps: {
    kicker: 'Quy trình nghệ nhân',
    title: 'Từ souk đến sofa trong bốn bước huyền bí',
    items: [
      { title: 'Tư vấn', text: 'Trò chuyện với maâlem — thảo luận không gian, câu chuyện, và không khí riad bạn muốn mang về nhà.' },
      { title: 'Đan tay', text: 'Nghệ nhân đan và nhuộm mỗi tấm vải tại souk bằng nghệ, henna, và chàm — sắc tố tự nhiên không đổi ngàn năm.' },
      { title: 'Điêu khắc tuyết tùng', text: 'Nghệ nhân điêu khắc khung từ tuyết tùng núi Atlas, theo kỹ thuật truyền ba thế hệ cùng gia đình.' },
      { title: 'Giao hàng riad', text: 'Sofa đến với dịch vụ white-glove, đặt chuyên nghiệp, kèm bảo hành thủ công trọn đời từ xưởng.' },
    ],
  },
  gallery: {
    kicker: 'Riad & nhà ở',
    title: 'Nơi tác phẩm Dar Zellige sống dậy',
    captions: [
      'Sân riad · Marrakech 3 chỗ',
      'Phòng Medina · Riad Loveseat',
      'Sân thượng · Atlas Lounge Chair',
      'Vườn retreat · Souk Daybed',
      'Biệt thự hồ bơi · Zellige Modular',
      'Nhà núi · Berber Bench',
    ],
  },
  testimonials: {
    kicker: 'Khách hàng của chúng tôi',
    title: 'Lời từ những người sống cùng Zellige',
    items: [
      { name: 'Yasmine Alaoui', role: 'Nhà thiết kế nội thất · Marrakech', quote: 'Bộ sưu tập Cour như mang sự thanh bình của sân riad vào nhà. Khách hàng tôi nói nhà họ cuối cùng cảm thấy như retreat Marrakech.' },
      { name: 'James Whitfield', role: 'Chủ biệt thự · Tangier', quote: 'Chúng tôi trang bị cả sân thượng bằng Dar Zellige. Sáu năm nắng, khách, và gió Atlas — khung tuyết tùng vẫn như ngày mới điêu khắc.' },
      { name: 'Sofia Caruso', role: 'Kiến trúc sư · Milan', quote: 'Họa tiết zellige phi thường. Mỗi sofa là tác phẩm hình học. Khách Milan tôi giờ có một phần Medina trong loft.' },
    ],
  },
  faqs: {
    kicker: 'Câu hỏi',
    title: 'Thắc mắc từ khách hàng riad',
    items: [
      { question: 'Vải có dùng ngoài trời được không?', answer: 'Vải đan tay của chúng tôi dành cho không gian trong nhà và ngoài trời có mái che. Cho tiếp xúc trực tiếp nắng và mưa, chúng tôi đề xuất bộ sưu tập Atlas với khung gỗ olive đã xử lý.' },
      { question: 'Gỗ tuyết tùng được lấy từ đâu?', answer: 'Tất cả tuyết tùng khai thác bền vững từ núi Atlas, hợp tác với các hợp tác xã trồng lại mỗi cây đã dùng. Mỗi khung có chứng nhận nguồn gốc.' },
      { question: 'Tôi có thể đặt tác phẩm riêng không?', answer: 'Rất hân hạnh. Maâlem chào đón đơn định chế — chọn vải, khung, kích thước, và họa tiết zellige. Thời gian 10-14 tuần.' },
      { question: 'Cách chăm sóc vải và gỗ?', answer: 'Vỏ len và lụa tháo rời và chỉ giặt khô chuyên nghiệp. Khung tuyết tùng chỉ cần lau khăn ẩm và sáp ong tự nhiên mỗi năm một lần.' },
      { question: 'Có giao hàng quốc tế không?', answer: 'Có, giao toàn cầu với dịch vụ white-glove có bảo hiểm. Đơn quốc tế bao gồm thủ tục hải quan và lắp đặt chuyên nghiệp bởi đội ngũ đối tác.' },
    ],
  },
  cta: {
    kicker: 'Bắt đầu hành trình',
    title: 'Mang linh hồn Marrakech về nhà',
    subtitle: 'Đặt tư vấn riêng với maâlem tại Medina. Chúng tôi sẽ giúp bạn chọn vải, gỗ, và họa tiết — chế tác sofa mang câu chuyện của bạn.',
    primary: 'Đặt tư vấn riêng',
    secondary: 'Gọi xưởng: +212 524 38 39 40',
  },
  footerBits: {
    ratingSuffix: 'đánh giá',
  },
};

const fr: Sofa17Content = {
  nav: {
    home: 'Accueil',
    story: 'Héritage',
    collections: 'Collections',
    products: 'Pièces',
    gallery: 'Riads',
    testimonials: 'Clients',
    faqs: 'Questions',
    contact: 'Contact',
  },
  hero: {
    badge: 'Dar Zellige · Artisanat Marrakech depuis 1958',
    title1: 'Où chaque canapé',
    titleHighlight: 'murmure',
    title2: 'un conte millénaire',
    subtitle:
      'Tissus tissés main, cadres en cèdre sculpté et motifs zellige du cœur de la Médina. Chaque pièce porte l\'âme d\'un riad marocain — chaleureuse, intime, intemporelle.',
    ctaPrimary: 'Découvrir les collections',
    ctaSecondary: 'Visiter le souk',
    badgeNumber: '1958',
    badgeLabel: 'année du premier canapé Dar Zellige sculpté dans la Médina',
    promos: [
      { label: 'Tissus tissés main', text: 'Laine & soie teintes au souk' },
      { label: 'Cadres cèdre sculpté', text: 'Cèdre des monts Atlas' },
      { label: 'Artisans maîtres', text: '3 générations de savoir-faire' },
      { label: 'Commandes sur-mesure', text: 'Adaptées à votre riad' },
    ],
  },
  marquee: ['Zellige', 'Riad', 'Souk', 'Atlas', 'Safran', 'Sarcelle', 'Cèdre', 'Henné', 'Marrakech', 'Berbère'],
  story: {
    kicker: 'Notre héritage',
    title: 'Trois piliers de l\'âme de Marrakech',
    items: [
      { title: 'Né dans la Médina', text: 'Dar Zellige a vu le jour en 1958 lorsque Maâlem Hassan a sculpté son premier cadre de canapé en cèdre de l\'Atlas dans un minuscule atelier de la Médina. Trois générations plus tard, son établi tient encore.' },
      { title: 'Teint au souk', text: 'Chaque tissu est tissé main et teint au souk de Marrakech avec safran, henné et indigo — des pigments naturels inchangés depuis mille ans. Jamais de couleurs synthétiques.' },
      { title: 'Motifs zellige', text: 'Nos designs s\'inspirent de l\'art géométrique de la mosaïque zellige — chaque motif une méditation, chaque angle une prière. Le riad est notre toile, la géométrie notre langage.' },
    ],
  },
  collections: {
    kicker: 'Collections',
    title: 'Quatre chapitres de la vie en riad',
    subtitle: 'Chaque collection capture un angle différent du jour marocain — de l\'ombre fraîche d\'un patio à la lueur ambrée d\'une soirée aux lanternes.',
    viewLabel: 'Explorer la collection',
    items: [
      { title: 'Cour', tagline: 'Sarcelle · Laine · Cèdre', description: 'Laine sarcelle tissée main sur cadres cèdre sculpté. La sérénité fraîche d\'un patio de riad à l\'aube, capturée dans le confort.' },
      { title: 'Souk', tagline: 'Safran · Soie · Laiton', description: 'Soie safran chaude avec cadres accentués de laiton. L\'énergie vibrante du souk de Marrakech, vivante dans votre salon.' },
      { title: 'Atlas', tagline: 'Rubis · Laine · Olivier', description: 'Laine rubis riche sur olivier recyclé. La chaleur profonde d\'une soirée en montagne, au coin du feu et hors du temps.' },
      { title: 'Lanterne', tagline: 'Crème · Boucle · Lanterne', description: 'Boucle crème avec détails de lanternes en laiton. La lueur ambrée d\'une terrasse aux lanternes, suspendue dans le temps.' },
    ],
    countSuffix: 'pièces',
  },
  products: {
    kicker: 'Pièces signature',
    title: 'Les canapés les plus précieux de la Médina',
    addLabel: 'Demander un devis',
    items: [
      { name: 'Marrakech 3 places', fabric: 'Laine sarcelle · Cèdre', badge: 'Icône' },
      { name: 'Riad Loveseat', fabric: 'Soie safran · Laiton', badge: 'Nouveau' },
      { name: 'Atlas Fauteuil', fabric: 'Laine rubis · Olivier', badge: '' },
      { name: 'Souk Méridienne', fabric: 'Boucle crème · Laiton', badge: 'Édition limitée' },
      { name: 'Zellige Modulaire', fabric: 'Multicolore · Cèdre', badge: 'Sur-mesure' },
      { name: 'Berbère Banc', fabric: 'Laine naturelle · Olivier', badge: '' },
    ],
  },
  stats: {
    items: [
      { label: 'Années de savoir-faire Médina' },
      { label: 'Pièces sculptées main livrées' },
      { label: 'Artisans maîtres par pièce' },
      { label: 'Riads équipés dans le monde' },
    ],
  },
  steps: {
    kicker: 'Le processus artisanal',
    title: 'Du souk au canapé en quatre étapes mystiques',
    items: [
      { title: 'Consultation', text: 'Une conversation avec notre maâlem — nous discutons de votre espace, votre histoire et l\'atmosphère de riad que vous souhaitez chez vous.' },
      { title: 'Tissage main', text: 'Des artisans tissent et teignent chaque tissu au souk avec safran, henné et indigo — des pigments naturels inchangés depuis mille ans.' },
      { title: 'Sculpture du cèdre', text: 'Des sculpteurs maîtres façonnent chaque cadre en cèdre des monts Atlas, suivant des techniques transmises sur trois générations.' },
      { title: 'Livraison riad', text: 'Votre canapé arrive avec service gants blancs, installé professionnellement, avec garantie de savoir-faire à vie de notre atelier.' },
    ],
  },
  gallery: {
    kicker: 'Riads et maisons',
    title: 'Où les pièces Dar Zellige prennent vie',
    captions: [
      'Patio de riad · Marrakech 3 places',
      'Salon Médina · Riad Loveseat',
      'Terrasse · Atlas Fauteuil',
      'Retrait de jardin · Souk Méridienne',
      'Villa piscine · Zellige Modulaire',
      'Chalet de montagne · Berbère Banc',
    ],
  },
  testimonials: {
    kicker: 'Nos clients',
    title: 'Paroles de ceux qui vivent avec Zellige',
    items: [
      { name: 'Yasmine Alaoui', role: 'Designer d\'intérieur · Marrakech', quote: 'La collection Cour, c\'est comme amener la sérénité d\'un patio de riad à l\'intérieur. Mes clients disent que leur maison ressemble enfin à un refuge marrakchi.' },
      { name: 'James Whitfield', role: 'Propriétaire de villa · Tanger', quote: 'Nous avons meublé toute notre terrasse avec Dar Zellige. Six ans de soleil, d\'invités et de vents de l\'Atlas — et les cadres en cèdre ont l\'air du premier jour.' },
      { name: 'Sofia Caruso', role: 'Architecte · Milan', quote: 'Les motifs zellige sont extraordinaires. Chaque canapé est une pièce d\'art géométrique. Mes clients milanais ont désormais un fragment de la Médina dans leur loft.' },
    ],
  },
  faqs: {
    kicker: 'Questions',
    title: 'Questions de nos clients en riad',
    items: [
      { question: 'Les tissus conviennent-ils à un usage extérieur ?', answer: 'Nos tissus tissés main sont conçus pour les espaces intérieurs et extérieurs couverts. Pour une exposition pleine au soleil et à la pluie, nous recommandons la collection Atlas avec cadres en olivier traité.' },
      { question: 'Comment le cèdre est-il sourcé ?', answer: 'Tout le cèdre est récolté durablement dans les monts Atlas, en collaboration avec des coopératives qui replantent pour chaque arbre utilisé. Chaque cadre porte un certificat d\'origine.' },
      { question: 'Puis-je commander une pièce sur-mesure ?', answer: 'Avec plaisir. Notre maâlem accueille les commandes sur-mesure — choisissez tissu, cadre, dimensions et motif zellige. Délai de 10 à 14 semaines.' },
      { question: 'Comment entretenir les tissus et le bois ?', answer: 'Les housses de laine et soie sont amovibles et uniquement au nettoyage à sec professionnel. Les cadres en cèdre nécessitent juste un chiffon humide et de la cire d\'abeille naturelle une fois par an.' },
      { question: 'Livrez-vous à l\'international ?', answer: 'Oui, nous expédions mondialement avec service gants blancs assuré. Les commandes internationales incluent le dédouanement et l\'installation professionnelle par nos équipes partenaires.' },
    ],
  },
  cta: {
    kicker: 'Commencez le voyage',
    title: 'Ramenez l\'âme de Marrakech à la maison',
    subtitle: 'Planifiez une consultation privée avec notre maâlem dans la Médina. Nous vous aiderons à choisir tissu, bois et motif — créant un canapé qui porte votre histoire.',
    primary: 'Réserver une consultation privée',
    secondary: 'Appeler l\'atelier : +212 524 38 39 40',
  },
  footerBits: {
    ratingSuffix: 'avis',
  },
};

const cn: Sofa17Content = {
  nav: {
    home: '首页',
    story: '传承',
    collections: '系列',
    products: '作品',
    gallery: 'Riad',
    testimonials: '客户',
    faqs: '问答',
    contact: '联系我们',
  },
  hero: {
    badge: 'Dar Zellige · 自1958年的马拉喀什工艺',
    title1: '每张沙发',
    titleHighlight: '低语着',
    title2: '千年的故事',
    subtitle:
      '手工编织的织物、雕刻的雪松木框架、来自麦地那中心的zellige几何图案。每件作品都承载着摩洛哥riad的灵魂——温暖、亲密、永恒。',
    ctaPrimary: '探索系列',
    ctaSecondary: '参观集市',
    badgeNumber: '1958',
    badgeLabel: 'Dar Zellige首件沙发在麦地那雕刻之年',
    promos: [
      { label: '手工编织织物', text: '集市染色的羊毛与丝绸' },
      { label: '雕刻雪松框架', text: '阿特拉斯山雪松' },
      { label: '大师工匠', text: '三代工艺传承' },
      { label: '定制委托', text: '为您的riad量身打造' },
    ],
  },
  marquee: ['Zellige', 'Riad', 'Souk', 'Atlas', '藏红花', '青绿', '雪松', '海娜', '马拉喀什', '柏柏尔'],
  story: {
    kicker: '我们的传承',
    title: '马拉喀什灵魂的三大支柱',
    items: [
      { title: '诞生于麦地那', text: 'Dar Zellige始于1958年,Maâlem Hassan在麦地那的一个小作坊里用阿特拉斯雪松雕刻了他的第一个沙发框架。三代之后,他的工作台依然矗立。' },
      { title: '集市染色', text: '每块织物都在马拉喀什集市手工编织和染色,使用藏红花、海娜和靛蓝——千年来不变的自然颜料。绝不使用合成色彩。' },
      { title: 'Zellige图案', text: '我们的设计源自zellige马赛克的几何艺术——每个图案是一次冥想,每个角度是一段祈祷。Riad是我们的画布,几何是我们的语言。' },
    ],
  },
  collections: {
    kicker: '系列',
    title: 'Riad生活的四个篇章',
    subtitle: '每个系列捕捉摩洛哥一天中不同的角落——从庭院的清凉阴影到灯笼点亮夜晚的琥珀光辉。',
    viewLabel: '探索系列',
    items: [
      { title: 'Cour 庭院', tagline: '青绿 · 羊毛 · 雪松', description: '深青绿手工编织羊毛配雕刻雪松框架。riad庭院黎明的清凉宁静,凝聚于舒适之中。' },
      { title: 'Souk 集市', tagline: '藏红 · 丝绸 · 黄铜', description: '温暖的藏红丝绸配黄铜点缀框架。马拉喀什集市的活力,在客厅中跃动。' },
      { title: 'Atlas 阿特拉斯', tagline: '宝石红 · 羊毛 · 橄榄', description: '浓郁宝石红羊毛配回收橄榄木。山间夜晚的深邃温暖,炉火旁的永恒。' },
      { title: 'Lantern 灯笼', tagline: '奶油 · 布料 · 灯笼', description: '奶油布料配黄铜灯笼细节。灯笼露台的琥珀光辉,凝固在时间中。' },
    ],
    countSuffix: '件',
  },
  products: {
    kicker: '标志性作品',
    title: '麦地那中最珍贵的沙发',
    addLabel: '立即咨询',
    items: [
      { name: '马拉喀什 三人座', fabric: '青绿羊毛 · 雪松', badge: '经典' },
      { name: 'Riad 双人座', fabric: '藏红丝绸 · 黄铜', badge: '新品' },
      { name: 'Atlas 休闲椅', fabric: '宝石红羊毛 · 橄榄', badge: '' },
      { name: 'Souk 躺榻', fabric: '奶油布料 · 黄铜', badge: '限量' },
      { name: 'Zellige 模块组合', fabric: '多彩 · 雪松', badge: '定制' },
      { name: '柏柏尔长椅', fabric: '天然羊毛 · 橄榄', badge: '' },
    ],
  },
  stats: {
    items: [
      { label: '年麦地那工艺传承' },
      { label: '件手工雕刻作品交付' },
      { label: '位大师工匠每件' },
      { label: '栋riad在全球选用' },
    ],
  },
  steps: {
    kicker: '工匠流程',
    title: '从集市到沙发,四步神秘之旅',
    items: [
      { title: '咨询', text: '与我们的maâlem对话——讨论您的空间、您的故事,以及您想带回家的riad氛围。' },
      { title: '手工编织', text: '工匠在集市手工编织和染色每块织物,使用藏红花、海娜和靛蓝——千年来不变的自然颜料。' },
      { title: '雪松雕刻', text: '大师雕刻师用阿特拉斯山雪松塑造每个框架,遵循三代同族传承的技艺。' },
      { title: 'Riad配送', text: '沙发以白手套服务送达,专业安装,附工坊终身工艺保修。' },
    ],
  },
  gallery: {
    kicker: 'Riad与家居',
    title: 'Dar Zellige作品焕发生机之处',
    captions: [
      'Riad庭院 · 马拉喀什三人座',
      '麦地那客厅 · Riad双人座',
      '露台休闲 · Atlas休闲椅',
      '花园 retreat · Souk躺榻',
      '泳池别墅 · Zellige模块',
      '山间小屋 · 柏柏尔长椅',
    ],
  },
  testimonials: {
    kicker: '我们的客户',
    title: '与Zellige共处者的感言',
    items: [
      { name: 'Yasmine Alaoui', role: '室内设计师 · 马拉喀什', quote: 'Cour系列就像把riad庭院的宁静带入室内。我的客户说他们的家终于感觉像马拉喀什的避世之所。' },
      { name: 'James Whitfield', role: '别墅主人 · 丹吉尔', quote: '我们用Dar Zellige布置了整个露台。六年的阳光、客人和阿特拉斯风——雪松框架看起来仍像刚雕刻那天。' },
      { name: 'Sofia Caruso', role: '建筑师 · 米兰', quote: 'Zellige图案非凡。每张沙发都是一件几何艺术品。我的米兰客户现在在loft中拥有一片麦地那。' },
    ],
  },
  faqs: {
    kicker: '咨询',
    title: 'Riad客户的常见问题',
    items: [
      { question: '织物适合户外使用吗?', answer: '我们手工编织的织物为室内和有遮盖的户外空间制作。对于完全暴露在阳光和雨中的环境,我们推荐使用经过处理的橄榄木框架的Atlas系列。' },
      { question: '雪松木如何采购?', answer: '所有雪松木可持续采伐自阿特拉斯山,与每使用一棵树就补种一棵的合作社合作。每个框架都有原产地证书。' },
      { question: '我可以定制作品吗?', answer: '非常乐意。我们的maâlem欢迎定制委托——选择织物、框架、尺寸和zellige图案。交货期10-14周。' },
      { question: '如何保养织物和木材?', answer: '羊毛和丝绸套可拆卸,仅限专业干洗。雪松框架只需偶尔用湿布擦拭,每年一次天然蜂蜡保养。' },
      { question: '你们提供国际配送吗?', answer: '是的,我们通过保险白手套服务全球发货。国际订单包括清关和由合作伙伴团队的专业安装。' },
    ],
  },
  cta: {
    kicker: '开启旅程',
    title: '把马拉喀什的灵魂带回家',
    subtitle: '预约在麦地那与我们的maâlem进行私密咨询。我们将帮助您选择织物、木材和图案——打造承载您故事的沙发。',
    primary: '预约私密咨询',
    secondary: '致电工坊:+212 524 38 39 40',
  },
  footerBits: {
    ratingSuffix: '评分',
  },
};

const ar: Sofa17Content = {
  nav: {
    home: 'الرئيسية',
    story: 'الإرث',
    collections: 'المجموعات',
    products: 'القطع',
    gallery: 'الرياض',
    testimonials: 'العملاء',
    faqs: 'الأسئلة',
    contact: 'تواصل معنا',
  },
  hero: {
    badge: 'دار الزليج · حرف مراكش منذ 1958',
    title1: 'حيث كل أريكة',
    titleHighlight: 'تهمس',
    title2: 'بحكاية ألف عام',
    subtitle:
      'أقمشة منسوجة يدوياً، إطارات من خشب الأرز المنحوت، وزخارف زليج من قلب المدينة. كل قطعة تحمل روح رياض مغربي — دافئ، حميم، خالد.',
    ctaPrimary: 'اكتشف المجموعات',
    ctaSecondary: 'زر السوق',
    badgeNumber: '1958',
    badgeLabel: 'سنة نحت أول أريكة دار الزليج في المدينة',
    promos: [
      { label: 'أقمشة منسوجة يدوياً', text: 'صوف وحرير مصبوغ في السوق' },
      { label: 'إطارات أرز منحوتة', text: 'أرز جبال الأطلس' },
      { label: 'حرفيون مهرة', text: 'ثلاثة أجيال من الحرفة' },
      { label: 'طلبات مخصصة', text: 'مفصلة لرياضك' },
    ],
  },
  marquee: ['زليج', 'رياض', 'سوق', 'أطلس', 'زعفران', 'أزرق مخضر', 'أرز', 'حناء', 'مراكش', 'أمازيغي'],
  story: {
    kicker: 'إرثنا',
    title: 'ثلاث ركائز لروح مراكش',
    items: [
      { title: 'وُلد في المدينة', text: 'بدأت دار الزليج عام 1958 عندما نحت المعلم حسن أول إطار أريكة من أرز الأطلس في ورشة صغيرة بالمدينة. بعد ثلاثة أجيال، لا يزال منضده قائماً.' },
      { title: 'مصبوغ في السوق', text: 'كل قماش يُنسج ويُصبغ يدوياً في سوق مراكش بالزعفران والحناء والنيلة — أصباغ طبيعية لم تتغير منذ ألف عام. لا ألوان صناعية أبداً.' },
      { title: 'زخارف الزليج', text: 'تصاميمنا مستوحاة من الفن الهندسي لفسيفساء الزليج — كل نقش تأمل، كل زاوية دعاء. الرياض لوحتنا، الهندسة لغتنا.' },
    ],
  },
  collections: {
    kicker: 'المجموعات',
    title: 'أربعة فصول من حياة الرياض',
    subtitle: 'كل مجموعة تلتقط زاوية مختلفة من اليوم المغربي — من ظل الفناء البارد إلى توهج العنبر لمساء بالفوانيس.',
    viewLabel: 'استكشف المجموعة',
    items: [
      { title: 'فناء', tagline: 'أزرق مخضر · صوف · أرز', description: 'صوف أزرق مخضر منسوج يدوياً على إطارات أرز منحوتة. صفاء فناء رياض عند الفجر، محبوس في الراحة.' },
      { title: 'سوق', tagline: 'زعفران · حرير · نحاس', description: 'حرير زعفراني دافئ بإطارات مرصعة بالنحاس. طاقة السوق المراكشي النابضة، حية في غرفة معيشتك.' },
      { title: 'أطلس', tagline: 'ياقوتي · صوف · زيتون', description: 'صوف ياقوتي غني على خشب زيتون معاد تدويره. دفء أمسية جبلية عميق، بجانب النار وخارج الزمن.' },
      { title: 'فانوس', tagline: 'كريمي · بوكليه · فانوس', description: 'بوكليه كريمي بتفاصيل فوانيس نحاسية. توهج العنبر لشرفة بالفوانيس، معلق في الزمن.' },
    ],
    countSuffix: 'قطعة',
  },
  products: {
    kicker: 'القطع المميزة',
    title: 'أثمن الأرائك في المدينة',
    addLabel: 'استفسر الآن',
    items: [
      { name: 'مراكش 3 مقاعد', fabric: 'صوف أزرق مخضر · أرز', badge: 'أيقونة' },
      { name: 'رياض مقعدين', fabric: 'حرير زعفراني · نحاس', badge: 'جديد' },
      { name: 'أطلس كرسي', fabric: 'صوف ياقوتي · زيتون', badge: '' },
      { name: 'سوق أريكة', fabric: 'بوكليه كريمي · نحاس', badge: 'محدود' },
      { name: 'زليج موديولار', fabric: 'متعدد الألوان · أرز', badge: 'تفصيل خاص' },
      { name: 'أمازيغي مقعد', fabric: 'صوف طبيعي · زيتون', badge: '' },
    ],
  },
  stats: {
    items: [
      { label: 'سنة من حرفية المدينة' },
      { label: 'قطعة منحوتة يدوياً تم تسليمها' },
      { label: 'حرفي ماهر لكل قطعة' },
      { label: 'رياض تم تأثيثها عالمياً' },
    ],
  },
  steps: {
    kicker: 'عملية الحرفيين',
    title: 'من السوق إلى الأريكة في أربع خطوات ساحرة',
    items: [
      { title: 'استشارة', text: 'محادثة مع معلمنا — نناقش مساحتك وقصتك وأجواء الرياض التي ترغب في إحضارها لمنزلك.' },
      { title: 'نسج يدوي', text: 'حرفيون ينسجون ويصبغون كل قماش في السوق بالزعفران والحناء والنيلة — أصباغ طبيعية لم تتغير منذ ألف عام.' },
      { title: 'نحت الأرز', text: 'نحاتون مهرون يشكلون كل إطار من أرز جبال الأطلس، بأساليب متوارثة عبر ثلاثة أجيال من العائلة نفسها.' },
      { title: 'توصيل الرياض', text: 'تصلك أريكتك بخدمة القفازات البيضاء، تُركّب احترافياً، مع ضمان حرفية مدى الحياة من ورشتنا.' },
    ],
  },
  gallery: {
    kicker: 'الرياض والمنازل',
    title: 'حيث تأتي قطع دار الزليج إلى الحياة',
    captions: [
      'فناء رياض · مراكش 3 مقاعد',
      'صالون المدينة · رياض مقعدين',
      'شرفة · أطلس كرسي',
      'ملجأ حديقة · سوق أريكة',
      'فيلا مسبح · زليج موديولار',
      'كوخ جبلي · أمازيغي مقعد',
    ],
  },
  testimonials: {
    kicker: 'عملاؤنا',
    title: 'كلمات من يعيشون مع الزليج',
    items: [
      { name: 'ياسمين العلوي', role: 'مصممة ديكور · مراكش', quote: 'مجموعة فناء كأنها تجلب صفاء فناء رياض إلى الداخل. عملائي يقولون أن منزلهم أخيراً يشعر كملجأ مراكشي.' },
      { name: 'جيمس ويتفيلد', role: 'صاحب فيلا · طنجة', quote: 'أثثنا شرفتنا بالكامل بدار الزليج. ست سنوات من الشمس والضيوف ورياح الأطلس — وإطارات الأرز ما زالت تبدو كيوم نحتها.' },
      { name: 'صوفيا كاروسو', role: 'مهندسة معمارية · ميلانو', quote: 'زخارف الزليج استثنائية. كل أريكة قطعة فنية هندسية. عملائي في ميلانو لديهم الآن جزء من المدينة في لوفتهم.' },
    ],
  },
  faqs: {
    kicker: 'استفسارات',
    title: 'أسئلة من عملاء الرياض',
    items: [
      { question: 'هل الأقمشة مناسبة للاستخدام الخارجي؟', answer: 'أقمشتنا المنسوجة يدوياً مصنوعة للمساحات الداخلية والخارجية المغطاة. للتعرض الكامل للشمس والمطر، نوصي بمجموعة أطلس بإطارات خشب زيتون معالجة.' },
      { question: 'كيف يُ sourced خشب الأرز؟', answer: 'كل الأرز يُحصد بشكل مستدام من جبال الأطلس، بالتعاون مع تعاونيات تعيد زراعة شجرة لكل شجرة تُستخدم. كل إطار يحمل شهادة منشأ.' },
      { question: 'هل يمكنني طلب قطعة مخصصة؟', answer: 'بكل سرور. معلمنا يرحب بطلبات التفصيل — اختر قماشك، إطارك، أبعادك، ونقش الزليج. مدة التسليم 10-14 أسبوعاً.' },
      { question: 'كيف أعتني بالأقمشة والخشب؟', answer: 'أغطية الصوف والحرير قابلة للإزالة وتُنظف جافاً احترافياً فقط. إطارات الأرز تحتاج فقط مسحاً بقطعة قماش رطبة وشمع نحل طبيعي مرة في السنة.' },
      { question: 'هل توصلون دولياً؟', answer: 'نعم، نشحن عالمياً بخدمة القفازات البيضاء المؤمنة. الطلبات الدولية تشمل التخليص الجمركي والتركيب الاحترافي بواسطة فرق شركائنا.' },
    ],
  },
  cta: {
    kicker: 'ابدأ الرحلة',
    title: 'أعد روح مراكش إلى المنزل',
    subtitle: 'احجز استشارة خاصة مع معلمنا في المدينة. سنساعدك في اختيار القماش والخشب والنقش — صنع أريكة تحمل قصتك.',
    primary: 'احجز استشارة خاصة',
    secondary: 'اتصل بالورشة: +212 524 38 39 40',
  },
  footerBits: {
    ratingSuffix: 'تقييم',
  },
};

export const SOFA17_CONTENT = { en, vi, fr, cn, ar };

export function useSofa17Content() {
  const { currentLang } = useTranslate();
  return SOFA17_CONTENT[currentLang.value as keyof typeof SOFA17_CONTENT] ?? SOFA17_CONTENT.en;
}
