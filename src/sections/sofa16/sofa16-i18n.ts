import { useTranslate } from 'src/locales';

// ----------------------------------------------------------------------
// SOFA16 — MEDITERRANEAN RIVIERA — full multi-language content dictionary
// ----------------------------------------------------------------------

const en = {
  nav: {
    home: 'Home',
    story: 'Origins',
    collections: 'Collections',
    products: 'Pieces',
    gallery: 'Villas',
    testimonials: 'Guests',
    faqs: 'Inquiries',
    contact: 'Contact',
  },
  hero: {
    badge: 'Casa Sorrento · Coastal comfort since 1962',
    title1: 'Where every sofa',
    titleHighlight: 'breathes',
    title2: 'the sea breeze',
    subtitle:
      'Sun-warmed linen, hand-woven rattan, and terracotta tones inspired by the Amalfi coast. Each piece brings the warmth of an Italian summer into your living room — effortless, timeless, alive.',
    ctaPrimary: 'Discover collections',
    ctaSecondary: 'Visit the atelier',
    badgeNumber: '1962',
    badgeLabel: 'year the first Casa Sorrento sofa was woven',
    promos: [
      { label: 'Sun-dried linen', text: 'Italian flax, hand-woven' },
      { label: 'Olive wood frames', text: 'Reclaimed Mediterranean olive' },
      { label: 'Lifetime craftsmanship', text: 'Frame & upholstery guaranteed' },
    ],
  },
  marquee: ['SOLE', 'MARE', 'TERRACOTTA', 'LINEN', 'RIVIERA', 'OLIVO', 'SUD', 'Azzurro', 'Caldo', ' Naturale'],
  story: {
    kicker: 'Our origins',
    title: 'Three roots of the Sorrento soul',
    items: [
      { title: 'Born by the sea', text: 'Casa Sorrento began in 1962 when Nonna Lucia wove her first sofa from sailcloth and olive wood, overlooking the Bay of Naples. The sea has been our muse ever since.' },
      { title: 'Woven by hand', text: 'Every linen cover is hand-woven on wooden looms by artisans in Sorrento, using techniques passed down through three generations. No machines, no haste.' },
      { title: 'Warm as the sun', text: 'Our terracotta and cream palette is drawn from the cliffside villages — the color of sun-baked walls, lemon groves, and endless August afternoons.' },
    ],
  },
  collections: {
    kicker: 'Collections',
    title: 'Four chapters of coastal living',
    subtitle: 'Each collection captures a different hour of the Mediterranean day — from golden morning light to the warm glow of dusk.',
    viewLabel: 'Explore collection',
    items: [
      { title: 'Mattino', tagline: 'Cream linen · Olive wood', description: 'Soft cream linen on reclaimed olive wood frames. The freshness of a Mediterranean morning, all year round.' },
      { title: 'Mezzogiorno', tagline: 'Terracotta · Rattan', description: 'Warm terracotta cushions with hand-woven rattan. The full heat of the midday sun, captured in comfort.' },
      { title: 'Riposo', tagline: 'Olive green · Linen', description: 'Deep olive green linen with natural wood. The shady calm of an afternoon siesta under the olive trees.' },
      { title: 'Tramonto', tagline: 'Azure · Boucle', description: 'Azure boucle with sand-toned frames. The golden hour, when the sea turns to liquid amber.' },
    ],
    countSuffix: 'pieces',
  },
  products: {
    kicker: 'Signature pieces',
    title: 'The most loved sofas on the coast',
    addLabel: 'Enquire now',
    items: [
      { name: 'Sorrento 3-Seater', fabric: 'Sun linen · Olive wood', badge: 'Iconic' },
      { name: 'Amalfi Loveseat', fabric: 'Terracotta · Rattan', badge: 'New' },
      { name: 'Capri Lounge Chair', fabric: 'Olive linen · Wood', badge: '' },
      { name: 'Positano Daybed', fabric: 'Cream boucle · Rattan', badge: 'Limited' },
      { name: 'Ravello Modular', fabric: 'Azure boucle · Oak', badge: 'Bespoke' },
      { name: 'Ischia Bench', fabric: 'Natural linen · Olive', badge: '' },
    ],
  },
  stats: {
    items: [
      { label: 'Years of coastal craftsmanship' },
      { label: 'Hand-woven pieces delivered' },
      { label: 'Master weavers per sofa' },
      { label: 'Mediterranean villas furnished' },
    ],
  },
  steps: {
    kicker: 'The atelier process',
    title: 'From sea breeze to sofa in four sunlit steps',
    items: [
      { title: 'Consultation', text: 'A relaxed conversation with our atelier — we discuss your space, light, and the coastal mood you wish to bring home.' },
      { title: 'Hand-weaving', text: 'Master weavers hand-weave every linen cover on wooden looms in Sorrento, following techniques unchanged since 1962.' },
      { title: 'Olive wood framing', text: 'Frames are shaped from reclaimed Mediterranean olive wood — each piece unique, each grain telling its own story.' },
      { title: 'Coastal delivery', text: 'Your sofa arrives with white-glove care, professionally placed, with a lifetime craftsmanship guarantee.' },
    ],
  },
  gallery: {
    kicker: 'Villas & homes',
    title: 'Where Sorrento pieces come to life',
    captions: [
      'Cliffside villa · Sorrento 3-Seater',
      'Seaside patio · Amalfi Loveseat',
      'Sunlit salon · Capri Lounge Chair',
      'Garden terrace · Positano Daybed',
      'Coastal loft · Ravello Modular',
      'Harbor house · Ischia Bench',
    ],
  },
  testimonials: {
    kicker: 'Our guests',
    title: 'Words from those who live with Sorrento',
    items: [
      { name: 'Giulia Romano', role: 'Interior designer · Amalfi', quote: 'The Mattino collection is like bringing the Mediterranean morning indoors. My clients say their living room finally feels like a holiday.' },
      { name: 'Thomas Berg', role: 'Villa owner · Mallorca', quote: 'We furnished our entire terrace with Casa Sorrento. Five years of sun, salt air, and guests — and it still looks like the first day.' },
      { name: 'Aiko Tanaka', role: 'Architect · Tokyo', quote: 'The olive wood frames are extraordinary. Each one is a sculpture. My clients in Tokyo now have a piece of the Amalfi coast in their home.' },
    ],
  },
  faqs: {
    kicker: 'Inquiries',
    title: 'Questions from our coastal guests',
    items: [
      { question: 'Is the linen suitable for outdoor use?', answer: 'Our linen is woven for indoor and covered outdoor spaces. For full sun and rain exposure, we recommend the Riposo collection with treated olive wood frames.' },
      { question: 'How is the olive wood sourced?', answer: 'All olive wood is reclaimed from groves that have reached the end of their fruit-bearing life. No trees are cut for our frames — each piece is sustainable and unique.' },
      { question: 'Can I commission a custom piece?', answer: 'With pleasure. Our atelier welcomes bespoke commissions — choose your linen color, frame finish, dimensions, and weave pattern. Lead time is 8-12 weeks.' },
      { question: 'How do I care for the linen and wood?', answer: 'Linen covers are removable and machine washable at 30°C. Olive wood frames need only an occasional wipe with a damp cloth and natural oil once a year.' },
      { question: 'Do you ship internationally?', answer: 'Yes, we ship worldwide with insured white-glove service. International orders include customs handling and professional installation by our partner teams.' },
    ],
  },
  cta: {
    kicker: 'Begin the conversation',
    title: 'Bring the Mediterranean summer home',
    subtitle: 'Schedule a private consultation with our atelier in Sorrento. We will help you choose linen, wood, and weave — crafting a sofa that breathes with your space.',
    primary: 'Book a private consultation',
    secondary: 'Call the atelier: +39 081 878 3030',
  },
  footerBits: {
    ratingSuffix: 'rating',
  },
};

export type Sofa16Content = typeof en;

const vi: Sofa16Content = {
  nav: {
    home: 'Trang chủ',
    story: 'Nguồn gốc',
    collections: 'Bộ sưu tập',
    products: 'Tác phẩm',
    gallery: 'Biệt thự',
    testimonials: 'Khách hàng',
    faqs: 'Câu hỏi',
    contact: 'Liên hệ',
  },
  hero: {
    badge: 'Casa Sorrento · Thoải mái ven biển từ 1962',
    title1: 'Nơi mỗi bộ sofa',
    titleHighlight: 'thở cùng',
    title2: 'gió biển',
    subtitle:
      'Linen phơi nắng, rattan đan tay và sắc terracotta lấy cảm hứng từ bờ biển Amalfi. Mỗi tác phẩm mang hơi ấm mùa hè Ý vào phòng khách — tự nhiên, vĩnh cửu, sống động.',
    ctaPrimary: 'Khám phá bộ sưu tập',
    ctaSecondary: 'Ghé xưởng tại',
    badgeNumber: '1962',
    badgeLabel: 'năm bộ sofa Casa Sorrento đầu tiên được đan',
    promos: [
      { label: 'Linen phơi nắng', text: 'Flax Ý, đan tay' },
      { label: 'Khung gỗ olive', text: 'Olive Địa Trung Hải tái chế' },
      { label: 'Bảo hành trọn đời', text: 'Bao khung và bọc vải' },
    ],
  },
  marquee: ['NẮNG', 'BIỂN', 'TERRACOTTA', 'LINEN', 'RIVIERA', 'OLIVE', 'NAM', 'XANH BIỂN', 'ẤM ÁP', 'TỰ NHIÊN'],
  story: {
    kicker: 'Nguồn gốc của chúng tôi',
    title: 'Ba gốc rễ của tâm hồn Sorrento',
    items: [
      { title: 'Sinh ra bên biển', text: 'Casa Sorrento bắt đầu năm 1962 khi Nonna Lucia đan bộ sofa đầu tiên từ vải buồm và gỗ olive, nhìn ra Vịnh Naples. Biển vẫn là nguồn cảm hứng của chúng tôi từ đó.' },
      { title: 'Đan bằng tay', text: 'Mỗi vỏ linen được đan tay trên khung gỗ bởi nghệ nhân ở Sorrento, theo kỹ thuật truyền ba thế hệ. Không máy móc, không vội vã.' },
      { title: 'Ấm như nắng', text: 'Bảng màu terracotta và kem lấy từ các ngôi làng trên vách đá — màu của bức tường phơi nắng, vườn chanh, và những buổi chiều tháng Tám bất tận.' },
    ],
  },
  collections: {
    kicker: 'Bộ sưu tập',
    title: 'Bốn chương của cuộc sống ven biển',
    subtitle: 'Mỗi bộ sưu tập nắm bắt một giờ khác nhau trong ngày Địa Trung Hải — từ ánh sáng vàng buổi sáng đến vầng sáng ấm của hoàng hôn.',
    viewLabel: 'Khám phá bộ sưu tập',
    items: [
      { title: 'Mattino', tagline: 'Linen kem · Gỗ olive', description: 'Linen kem mềm trên khung gỗ olive tái chế. Sự tươi mát của buổi sáng Địa Trung Hải, quanh năm.' },
      { title: 'Mezzogiorno', tagline: 'Terracotta · Rattan', description: 'Đệm terracotta ấm với rattan đan tay. Trọn vẹn sức nóng của nắng trưa, giữ trong sự thoải mái.' },
      { title: 'Riposo', tagline: 'Xanh olive · Linen', description: 'Linen xanh olive đậm với gỗ tự nhiên. Sự bình yên mát mẻ của giấc ngủ trưa dưới cây olive.' },
      { title: 'Tramonto', tagline: 'Xanh biển · Boucle', description: 'Boucle xanh biển với khung màu cát. Giờ vàng, khi biển chuyển thành hổ phách lỏng.' },
    ],
    countSuffix: 'tác phẩm',
  },
  products: {
    kicker: 'Tác phẩm biểu tượng',
    title: 'Những sofa được yêu nhất trên bờ biển',
    addLabel: 'Liên hệ đặt',
    items: [
      { name: 'Sorrento 3 chỗ', fabric: 'Linen nắng · Gỗ olive', badge: 'Biểu tượng' },
      { name: 'Amalfi Loveseat', fabric: 'Terracotta · Rattan', badge: 'Mới' },
      { name: 'Capri Lounge Chair', fabric: 'Linen olive · Gỗ', badge: '' },
      { name: 'Positano Daybed', fabric: 'Boucle kem · Rattan', badge: 'Giới hạn' },
      { name: 'Ravello Modular', fabric: 'Boucle xanh · Oak', badge: 'Định chế' },
      { name: 'Ischia Bench', fabric: 'Linen tự nhiên · Olive', badge: '' },
    ],
  },
  stats: {
    items: [
      { label: 'Năm thủ công ven biển' },
      { label: 'Tác phẩm đan tay đã giao' },
      { label: 'Nghệ nhân đan mỗi sofa' },
      { label: 'Biệt thự Địa Trung Hải đã trang bị' },
    ],
  },
  steps: {
    kicker: 'Quy trình xưởng',
    title: 'Từ gió biển đến sofa trong bốn bước nắng',
    items: [
      { title: 'Tư vấn', text: 'Trò chuyện thư giãn với xưởng — thảo luận không gian, ánh sáng, và tâm trạng ven biển bạn muốn mang về nhà.' },
      { title: 'Đan tay', text: 'Nghệ nhân đan tay mỗi vỏ linen trên khung gỗ ở Sorrento, theo kỹ thuật không đổi từ 1962.' },
      { title: 'Khung gỗ olive', text: 'Khung được tạo từ gỗ olive Địa Trung Hải tái chế — mỗi tác phẩm độc nhất, mỗi thớ gỗ kể câu chuyện riêng.' },
      { title: 'Giao hàng ven biển', text: 'Sofa đến với dịch vụ white-glove, đặt chuyên nghiệp, kèm bảo hành thủ công trọn đời.' },
    ],
  },
  gallery: {
    kicker: 'Biệt thự & nhà ở',
    title: 'Nơi tác phẩm Sorrento sống dậy',
    captions: [
      'Biệt thự vách đá · Sorrento 3 chỗ',
      'Sân ven biển · Amalfi Loveseat',
      'Phòng nắng · Capri Lounge Chair',
      'Sân vườn · Positano Daybed',
      'Loft ven biển · Ravello Modular',
      'Nhà cảng · Ischia Bench',
    ],
  },
  testimonials: {
    kicker: 'Khách hàng của chúng tôi',
    title: 'Lời từ những người sống cùng Sorrento',
    items: [
      { name: 'Giulia Romano', role: 'Nhà thiết kế nội thất · Amalfi', quote: 'Bộ sưu tập Mattino như mang buổi sáng Địa Trung Hải vào nhà. Khách hàng tôi nói phòng khách cuối cùng cảm thấy như một kỳ nghỉ.' },
      { name: 'Thomas Berg', role: 'Chủ biệt thự · Mallorca', quote: 'Chúng tôi trang bị cả sân hiên bằng Casa Sorrento. Năm năm nắng, gió muối, và khách — mà vẫn như ngày đầu.' },
      { name: 'Aiko Tanaka', role: 'Kiến trúc sư · Tokyo', quote: 'Khung gỗ olive phi thường. Mỗi cái là một điêu khắc. Khách hàng tôi ở Tokyo giờ có một phần bờ biển Amalfi trong nhà.' },
    ],
  },
  faqs: {
    kicker: 'Câu hỏi',
    title: 'Thắc mắc từ khách hàng ven biển',
    items: [
      { question: 'Linen có dùng ngoài trời được không?', answer: 'Linen của chúng tôi dệt cho không gian trong nhà và ngoài trời có mái che. Cho tiếp xúc trực tiếp nắng và mưa, chúng tôi đề xuất bộ sưu tập Riposo với khung gỗ olive đã xử lý.' },
      { question: 'Gỗ olive được lấy từ đâu?', answer: 'Tất cả gỗ olive là tái chế từ các vườn đã hết tuổi trái. Không cây nào bị chặt cho khung — mỗi tác phẩm bền vững và độc nhất.' },
      { question: 'Tôi có thể đặt tác phẩm riêng không?', answer: 'Rất hân hạnh. Xưởng chào đón đơn định chế — chọn màu linen, màu khung, kích thước, và họa tiết đan. Thời gian 8-12 tuần.' },
      { question: 'Cách chăm sóc linen và gỗ?', answer: 'Vỏ linen tháo rời và giặt máy ở 30°C. Khung gỗ olive chỉ cần lau khăn ẩm và dầu tự nhiên mỗi năm một lần.' },
      { question: 'Có giao hàng quốc tế không?', answer: 'Có, giao toàn cầu với dịch vụ white-glove có bảo hiểm. Đơn quốc tế bao gồm thủ tục hải quan và lắp đặt chuyên nghiệp bởi đội ngũ đối tác.' },
    ],
  },
  cta: {
    kicker: 'Bắt đầu cuộc trò chuyện',
    title: 'Mang mùa hè Địa Trung Hải về nhà',
    subtitle: 'Đặt tư vấn riêng với xưởng tại Sorrento. Chúng tôi sẽ giúp bạn chọn linen, gỗ, và họa tiết đan — chế tác sofa thở cùng không gian của bạn.',
    primary: 'Đặt tư vấn riêng',
    secondary: 'Gọi xưởng: +39 081 878 3030',
  },
  footerBits: {
    ratingSuffix: 'đánh giá',
  },
};

const fr: Sofa16Content = {
  nav: {
    home: 'Accueil',
    story: 'Origines',
    collections: 'Collections',
    products: 'Pièces',
    gallery: 'Villas',
    testimonials: 'Clients',
    faqs: 'Questions',
    contact: 'Contact',
  },
  hero: {
    badge: 'Casa Sorrento · Confort côtier depuis 1962',
    title1: 'Où chaque canapé',
    titleHighlight: 'respire',
    title2: 'la brise marine',
    subtitle:
      'Lin séché au soleil, rotin tissé main et tons terracotta inspirés de la côte amalfitaine. Chaque pièce apporte la chaleur d\'un été italien dans votre salon — naturelle, intemporelle, vivante.',
    ctaPrimary: 'Découvrir les collections',
    ctaSecondary: 'Visiter l\'atelier',
    badgeNumber: '1962',
    badgeLabel: 'année du premier canapé Casa Sorrento',
    promos: [
      { label: 'Lin séché au soleil', text: 'Lin italien tissé main' },
      { label: 'Cadres en olivier', text: 'Olivier méditerranéen recyclé' },
      { label: 'Savoir-faire à vie', text: 'Structure et tissu garantis' },
    ],
  },
  marquee: ['SOLEIL', 'MER', 'TERRACOTTA', 'LIN', 'RIVIERA', 'OLIVIER', 'SUD', 'AZUR', 'CHALEUR', 'NATUREL'],
  story: {
    kicker: 'Nos origines',
    title: 'Trois racines de l\'âme de Sorrento',
    items: [
      { title: 'Né au bord de la mer', text: 'Casa Sorrento a vu le jour en 1962 lorsque Nonna Lucia a tissé son premier canapé en toile à voile et bois d\'olivier, surplombant la baie de Naples. La mer reste notre muse.' },
      { title: 'Tissé à la main', text: 'Chaque housse de lin est tissée main sur des métiers en bois par des artisans de Sorrento, avec des techniques transmises sur trois générations. Aucune machine.' },
      { title: 'Chaud comme le soleil', text: 'Notre palette terracotta et crème est tirée des villages perchés — la couleur des murs cuits au soleil, des citronniers et des après-midi d\'août sans fin.' },
    ],
  },
  collections: {
    kicker: 'Collections',
    title: 'Quatre chapitres de la vie côtière',
    subtitle: 'Chaque collection capture une heure différente du jour méditerranéen — de la lumière dorée du matin à la lueur chaleureuse du crépuscule.',
    viewLabel: 'Explorer la collection',
    items: [
      { title: 'Mattino', tagline: 'Lin crème · Olivier', description: 'Lin crème doux sur cadres en olivier recyclé. La fraîcheur d\'un matin méditerranéen, toute l\'année.' },
      { title: 'Mezzogiorno', tagline: 'Terracotta · Rotin', description: 'Coussins terracotta chauds avec rotin tissé main. Toute la chaleur du soleil de midi, capturée dans le confort.' },
      { title: 'Riposo', tagline: 'Vert olive · Lin', description: 'Lin vert olive profond avec bois naturel. Le calme ombragé d\'une sieste sous les oliviers.' },
      { title: 'Tramonto', tagline: 'Azur · Boucle', description: 'Boucle azur avec cadres tons sable. L\'heure dorée, quand la mer devient ambre liquide.' },
    ],
    countSuffix: 'pièces',
  },
  products: {
    kicker: 'Pièces signature',
    title: 'Les canapés les plus aimés de la côte',
    addLabel: 'Demander un devis',
    items: [
      { name: 'Sorrento 3 places', fabric: 'Lin soleil · Olivier', badge: 'Icône' },
      { name: 'Amalfi Loveseat', fabric: 'Terracotta · Rotin', badge: 'Nouveau' },
      { name: 'Capri Fauteuil', fabric: 'Lin olive · Bois', badge: '' },
      { name: 'Positano Méridienne', fabric: 'Boucle crème · Rotin', badge: 'Édition limitée' },
      { name: 'Ravello Modulaire', fabric: 'Boucle azur · Chêne', badge: 'Sur-mesure' },
      { name: 'Ischia Banc', fabric: 'Lin naturel · Olivier', badge: '' },
    ],
  },
  stats: {
    items: [
      { label: 'Années de savoir-faire côtier' },
      { label: 'Pièces tissées main livrées' },
      { label: 'Tisserands par canapé' },
      { label: 'Villas méditerranéennes équipées' },
    ],
  },
  steps: {
    kicker: 'Le processus d\'atelier',
    title: 'De la brise marine au canapé en quatre étapes ensoleillées',
    items: [
      { title: 'Consultation', text: 'Une conversation détendue avec notre atelier — nous discutons de votre espace, lumière et de l\'ambiance côtière que vous souhaitez.' },
      { title: 'Tissage main', text: 'Des tisserands maîtres tissent chaque housse de lin sur des métiers en bois à Sorrento, suivant des techniques inchangées depuis 1962.' },
      { title: 'Cadres en olivier', text: 'Les cadres sont façonnés à partir d\'olivier méditerranéen recyclé — chaque pièce unique, chaque veinure racontant sa propre histoire.' },
      { title: 'Livraison côtière', text: 'Votre canapé arrive avec service gants blancs, installé professionnellement, avec garantie de savoir-faire à vie.' },
    ],
  },
  gallery: {
    kicker: 'Villas et maisons',
    title: 'Où les pièces Sorrento prennent vie',
    captions: [
      'Villa sur falaise · Sorrento 3 places',
      'Patio en bord de mer · Amalfi',
      'Salon ensoleillé · Capri Fauteuil',
      'Terrasse de jardin · Positano',
      'Loft côtier · Ravello Modulaire',
      'Maison du port · Ischia Banc',
    ],
  },
  testimonials: {
    kicker: 'Nos clients',
    title: 'Paroles de ceux qui vivent avec Sorrento',
    items: [
      { name: 'Giulia Romano', role: 'Designer d\'intérieur · Amalfi', quote: 'La collection Mattino, c\'est comme amener un matin méditerranéen à l\'intérieur. Mes clients disent que leur salon ressemble enfin à des vacances.' },
      { name: 'Thomas Berg', role: 'Propriétaire de villa · Majorque', quote: 'Nous avons meublé toute notre terrasse avec Casa Sorrento. Cinq ans de soleil, d\'air salin et d\'invités — et ça ressemble encore au premier jour.' },
      { name: 'Aiko Tanaka', role: 'Architecte · Tokyo', quote: 'Les cadres en olivier sont extraordinaires. Chacun est une sculpture. Mes clients à Tokyo ont désormais un morceau de la côte amalfitaine chez eux.' },
    ],
  },
  faqs: {
    kicker: 'Questions',
    title: 'Questions de nos clients côtiers',
    items: [
      { question: 'Le lin convient-il à un usage extérieur ?', answer: 'Notre lin est tissé pour les espaces intérieurs et extérieurs couverts. Pour une exposition pleine au soleil et à la pluie, nous recommandons la collection Riposo avec cadres en olivier traité.' },
      { question: 'Comment le bois d\'olivier est-il sourcé ?', answer: 'Tout le bois d\'olivier est recyclé des vergers en fin de production fruitière. Aucun arbre n\'est abattu pour nos cadres — chaque pièce est durable et unique.' },
      { question: 'Puis-je commander une pièce sur-mesure ?', answer: 'Avec plaisir. Notre atelier accueille les commandes sur-mesure — choisissez couleur de lin, finition de cadre, dimensions et motif de tissage. Délai de 8 à 12 semaines.' },
      { question: 'Comment entretenir le lin et le bois ?', answer: 'Les housses de lin sont amovibles et lavables en machine à 30°C. Les cadres en olivier nécessitent juste un chiffon humide et de l\'huile naturelle une fois par an.' },
      { question: 'Livrez-vous à l\'international ?', answer: 'Oui, nous expédions mondialement avec service gants blancs assuré. Les commandes internationales incluent le dédouanement et l\'installation professionnelle par nos équipes partenaires.' },
    ],
  },
  cta: {
    kicker: 'Engagez la conversation',
    title: 'Ramenez l\'été méditerranéen à la maison',
    subtitle: 'Planifiez une consultation privée avec notre atelier à Sorrento. Nous vous aiderons à choisir lin, bois et tissage — créant un canapé qui respire avec votre espace.',
    primary: 'Réserver une consultation privée',
    secondary: 'Appeler l\'atelier : +39 081 878 3030',
  },
  footerBits: {
    ratingSuffix: 'avis',
  },
};

const cn: Sofa16Content = {
  nav: {
    home: '首页',
    story: '起源',
    collections: '系列',
    products: '作品',
    gallery: '别墅',
    testimonials: '客户',
    faqs: '问答',
    contact: '联系我们',
  },
  hero: {
    badge: 'Casa Sorrento · 自1962年的海岸舒适',
    title1: '每张沙发',
    titleHighlight: '呼吸着',
    title2: '海风',
    subtitle:
      '阳光晾晒的亚麻、手工编织的藤条、灵感来自阿马尔菲海岸的赤陶色调。每件作品都将意大利夏日的温暖带入客厅——自然、永恒、生动。',
    ctaPrimary: '探索系列',
    ctaSecondary: '参观工坊',
    badgeNumber: '1962',
    badgeLabel: '首件Casa Sorrento沙发编织之年',
    promos: [
      { label: '阳光晾晒亚麻', text: '意大利亚麻,手工编织' },
      { label: '橄榄木框架', text: '回收地中海橄榄木' },
      { label: '终身工艺', text: '框架与面料保修' },
    ],
  },
  marquee: ['阳光', '大海', '赤陶', '亚麻', '里维埃拉', '橄榄', '南方', '蔚蓝', '温暖', '自然'],
  story: {
    kicker: '我们的起源',
    title: 'Sorrento灵魂的三条根',
    items: [
      { title: '海边诞生', text: 'Casa Sorrento始于1962年,Nonna Lucia用帆布和橄榄木编织了第一张沙发,俯瞰那不勒斯湾。从那时起,大海一直是我们的缪斯。' },
      { title: '手工编织', text: '每件亚麻套由Sorrento的工匠在木织机上手工编织,技艺传承三代。无机器,不急躁。' },
      { title: '温暖如阳', text: '我们的赤陶和奶油色调取自悬崖村落——阳光烘烤的墙壁、柠檬园和无尽八月午后的色彩。' },
    ],
  },
  collections: {
    kicker: '系列',
    title: '海岸生活的四个篇章',
    subtitle: '每个系列捕捉地中海一天中不同的时刻——从金色的晨光到黄昏的温暖余晖。',
    viewLabel: '探索系列',
    items: [
      { title: 'Mattino 晨光', tagline: '奶油亚麻 · 橄榄木', description: '柔软奶油亚麻配回收橄榄木框架。地中海清晨的清新,全年相伴。' },
      { title: 'Mezzogiorno 正午', tagline: '赤陶 · 藤条', description: '温暖赤陶坐垫配手工编织藤条。正午阳光的热度,凝聚于舒适之中。' },
      { title: 'Riposo 午憩', tagline: '橄榄绿 · 亚麻', description: '深橄榄绿亚麻配天然木。橄榄树下午睡的阴凉宁静。' },
      { title: 'Tramonto 日落', tagline: '蔚蓝 · 布料', description: '蔚蓝布料配沙色框架。黄金时刻,当大海化为流动的琥珀。' },
    ],
    countSuffix: '件',
  },
  products: {
    kicker: '标志性作品',
    title: '海岸上最受喜爱的沙发',
    addLabel: '立即咨询',
    items: [
      { name: 'Sorrento 三人座', fabric: '阳光亚麻 · 橄榄木', badge: '经典' },
      { name: 'Amalfi 双人座', fabric: '赤陶 · 藤条', badge: '新品' },
      { name: 'Capri 休闲椅', fabric: '橄榄亚麻 · 木', badge: '' },
      { name: 'Positano 躺榻', fabric: '奶油布料 · 藤条', badge: '限量' },
      { name: 'Ravello 模块组合', fabric: '蔚蓝布料 · 橡木', badge: '定制' },
      { name: 'Ischia 长椅', fabric: '天然亚麻 · 橄榄', badge: '' },
    ],
  },
  stats: {
    items: [
      { label: '年海岸工艺传承' },
      { label: '件手工编织作品交付' },
      { label: '位工匠完成每张沙发' },
      { label: '栋地中海别墅选用' },
    ],
  },
  steps: {
    kicker: '工坊流程',
    title: '从海风到沙发,四步阳光之旅',
    items: [
      { title: '咨询', text: '与工坊轻松对话——讨论您的空间、光线和想要带回的海岸氛围。' },
      { title: '手工编织', text: '工匠大师在Sorrento的木织机上手工编织每件亚麻套,技艺自1962年不变。' },
      { title: '橄榄木框架', text: '框架由回收地中海橄榄木塑造——每件独一无二,每道纹路讲述自己的故事。' },
      { title: '海岸配送', text: '沙发以白手套服务送达,专业安装,附终身工艺保修。' },
    ],
  },
  gallery: {
    kicker: '别墅与家居',
    title: 'Sorrento作品焕发生机之处',
    captions: [
      '悬崖别墅 · Sorrento 三人座',
      '海滨露台 · Amalfi 双人座',
      '阳光客厅 · Capri 休闲椅',
      '花园平台 · Positano 躺榻',
      '海岸阁楼 · Ravello 模块',
      '港口住宅 · Ischia 长椅',
    ],
  },
  testimonials: {
    kicker: '我们的客户',
    title: '与Sorrento共处者的感言',
    items: [
      { name: 'Giulia Romano', role: '室内设计师 · 阿马尔菲', quote: 'Mattino系列就像把地中海的早晨带入室内。我的客户说他们的客厅终于感觉像度假了。' },
      { name: 'Thomas Berg', role: '别墅主人 · 马略卡', quote: '我们用Casa Sorrento布置了整个露台。五年的阳光、咸风和客人——看起来仍然像第一天。' },
      { name: 'Aiko Tanaka', role: '建筑师 · 东京', quote: '橄榄木框架非凡。每一件都是雕塑。我的东京客户现在家中拥有一片阿马尔菲海岸。' },
    ],
  },
  faqs: {
    kicker: '咨询',
    title: '海岸客户的常见问题',
    items: [
      { question: '亚麻适合户外使用吗?', answer: '我们的亚麻为室内和有遮盖的户外空间编织。对于完全暴露在阳光和雨中的环境,我们推荐使用经过处理的橄榄木框架的Riposo系列。' },
      { question: '橄榄木如何采购?', answer: '所有橄榄木均回收自已结束结果期的果园。没有树木因我们的框架而被砍伐——每件作品都可持续且独特。' },
      { question: '我可以定制作品吗?', answer: '非常乐意。我们的工坊欢迎定制委托——选择亚麻颜色、框架饰面、尺寸和编织图案。交货期8-12周。' },
      { question: '如何保养亚麻和木材?', answer: '亚麻套可拆卸,30°C机洗。橄榄木框架只需偶尔用湿布擦拭,每年一次自然油保养。' },
      { question: '你们提供国际配送吗?', answer: '是的,我们通过保险白手套服务全球发货。国际订单包括清关和由合作伙伴团队的专业安装。' },
    ],
  },
  cta: {
    kicker: '开启对话',
    title: '把地中海夏日带回家',
    subtitle: '预约在Sorrento工坊的私密咨询。我们将帮助您选择亚麻、木材和编织——打造与您的空间共同呼吸的沙发。',
    primary: '预约私密咨询',
    secondary: '致电工坊:+39 081 878 3030',
  },
  footerBits: {
    ratingSuffix: '评分',
  },
};

const ar: Sofa16Content = {
  nav: {
    home: 'الرئيسية',
    story: 'الأصول',
    collections: 'المجموعات',
    products: 'القطع',
    gallery: 'الفيلات',
    testimonials: 'العملاء',
    faqs: 'الأسئلة',
    contact: 'تواصل معنا',
  },
  hero: {
    badge: 'كازا سورينتو · راحة ساحلية منذ 1962',
    title1: 'حيث كل أريكة',
    titleHighlight: 'تتنفس',
    title2: 'نسيم البحر',
    subtitle:
      'كتان مجفف بالشمس، رتان منسوج يدوياً، ودرجات تيراكوتا مستوحاة من ساحل أمالفي. كل قطعة تجلب دفء صيف إيطالي إلى غرفة معيشتك — طبيعية، خالدة، حية.',
    ctaPrimary: 'اكتشف المجموعات',
    ctaSecondary: 'زر الورشة',
    badgeNumber: '1962',
    badgeLabel: 'سنة نسج أول أريكة كازا سورينتو',
    promos: [
      { label: 'كتان مجفف بالشمس', text: 'كتان إيطالي منسوج يدوياً' },
      { label: 'إطارات خشب الزيتون', text: 'زيتون متوسطي معاد تدويره' },
      { label: 'حرفية مدى الحياة', text: 'ضمان الإطار والتنجيد' },
    ],
  },
  marquee: ['شمس', 'بحر', 'تيراكوتا', 'كتان', 'ريفييرا', 'زيتون', 'جنوب', 'أزرق', 'دفء', 'طبيعي'],
  story: {
    kicker: 'أصولنا',
    title: 'ثلاث جذور لروح سورينتو',
    items: [
      { title: 'وُلد بجانب البحر', text: 'بدأت كازا سورينتو عام 1962 عندما نسجت نونا لوتشيا أول أريكة من قماش الشراع وخشب الزيتون، مطلة على خليج نابولي. ظل البحر ملهمنا منذ ذلك الحين.' },
      { title: 'منسوج يدوياً', text: 'كل غطاء كتان يُنسج يدوياً على أنوال خشبية بواسطة حرفيين في سورينتو، بتقنيات متوارثة عبر ثلاثة أجيال. لا آلات، لا تسرع.' },
      { title: 'دافئ كالشمس', text: 'لوحتنا التيراكوتا والكريمية مستوحاة من القرى الجرفية — لون الجدران المخبوزة بالشمس، بساتين الليمون، ومدد أغسطس التي لا تنتهي.' },
    ],
  },
  collections: {
    kicker: 'المجموعات',
    title: 'أربعة فصول من الحياة الساحلية',
    subtitle: 'كل مجموعة تلتقط ساعة مختلفة من اليوم المتوسطي — من ضوء الصباح الذهبي إلى توهج الغروب الدافئ.',
    viewLabel: 'استكشف المجموعة',
    items: [
      { title: 'ماتينو', tagline: 'كتان كريمي · زيتون', description: 'كتان كريمي ناعم على إطارات زيتون معاد تدويره. نضارة صباح متوسطي، طوال العام.' },
      { title: 'ميزوجورنو', tagline: 'تيراكوتا · رتان', description: 'وسائد تيراكوتا دافئة مع رتان منسوج يدوياً. حرارة شمس الظهيرة كاملة، محبوسة في الراحة.' },
      { title: 'ريبوزو', tagline: 'أخضر زيتوني · كتان', description: 'كتان أخضر زيتوني عميق مع خشب طبيعي. هدوء ظل قيلولة بعد الظهر تحت أشجار الزيتون.' },
      { title: 'ترامونتو', tagline: 'أزرق · بوكليه', description: 'بوكليه أزرق بإطارات بلون الرمل. الساعة الذهبية، حين يتحول البحر إلى كهرمان سائل.' },
    ],
    countSuffix: 'قطعة',
  },
  products: {
    kicker: 'القطع المميزة',
    title: 'الأكثر حباً على الساحل',
    addLabel: 'استفسر الآن',
    items: [
      { name: 'سورينتو 3 مقاعد', fabric: 'كتان شمسي · زيتون', badge: 'أيقونة' },
      { name: 'أمالفي مقعدين', fabric: 'تيراكوتا · رتان', badge: 'جديد' },
      { name: 'كابري كرسي', fabric: 'كتان زيتوني · خشب', badge: '' },
      { name: 'بوزيتانو أريكة', fabric: 'بوكليه كريمي · رتان', badge: 'محدود' },
      { name: 'رافيللو موديولار', fabric: 'بوكليه أزرق · بلوط', badge: 'تفصيل خاص' },
      { name: 'إسكيا مقعد', fabric: 'كتان طبيعي · زيتون', badge: '' },
    ],
  },
  stats: {
    items: [
      { label: 'سنة من الحرفية الساحلية' },
      { label: 'قطعة منسوجة يدوياً تم تسليمها' },
      { label: 'حرفي نسيج لكل أريكة' },
      { label: 'فيلا متوسطية تم تأثيثها' },
    ],
  },
  steps: {
    kicker: 'عملية الورشة',
    title: 'من نسيم البحر إلى الأريكة في أربع خطوات مشمسة',
    items: [
      { title: 'استشارة', text: 'محادثة مريحة مع ورشتنا — نناقش مساحتك وضوءك والمزاج الساحلي الذي ترغب في إحضاره.' },
      { title: 'نسج يدوي', text: 'حرفيو النسيج ينسجون كل غطاء كتان يدوياً على أنوال خشبية في سورينتو، بتقنيات لم تتغير منذ 1962.' },
      { title: 'إطارات خشب الزيتون', text: 'الإطارات تُشكل من خشب زيتون متوسطي معاد تدويره — كل قطعة فريدة، كل عرق يروي قصته.' },
      { title: 'توصيل ساحلي', text: 'تصلك أريكتك بخدمة القفازات البيضاء، تُركّب احترافياً، مع ضمان حرفية مدى الحياة.' },
    ],
  },
  gallery: {
    kicker: 'الفيلات والمنازل',
    title: 'حيث تأتي قطع سورينتو إلى الحياة',
    captions: [
      'فيلا جرفية · سورينتو 3 مقاعد',
      'فناء ساحلي · أمالفي',
      'صالة مشمسة · كابري',
      'شرفة حديقة · بوزيتانو',
      'لوفت ساحلي · رافيللو',
      'منزل الميناء · إسكيا',
    ],
  },
  testimonials: {
    kicker: 'عملاؤنا',
    title: 'كلمات من يعيشون مع سورينتو',
    items: [
      { name: 'جوليا رومانو', role: 'مصممة ديكور · أمالفي', quote: 'مجموعة ماتينو كأنها تجلب صباح المتوسط إلى الداخل. عملائي يقولون أن غرفة معيشتهم أخيراً تشعر كعطلة.' },
      { name: 'توماس بيرغ', role: 'صاحب فيلا · مايوركا', quote: 'أثثنا شرفتنا بالكامل بكازا سورينتو. خمس سنوات من الشمس والهواء المالح والضيوف — وما زالت تبدو كأول يوم.' },
      { name: 'آيكو تاناكا', role: 'مهندسة معمارية · طوكيو', quote: 'إطارات خشب الزيتون استثنائية. كل واحدة منحوتة. عملائي في طوكيو لديهم الآن قطعة من ساحل أمالفي في منزلهم.' },
    ],
  },
  faqs: {
    kicker: 'استفسارات',
    title: 'أسئلة من عملائنا الساحليين',
    items: [
      { question: 'هل الكتان مناسب للاستخدام الخارجي؟', answer: 'كتاننا منسوج للمساحات الداخلية والخارجية المغطاة. للتعرض الكامل للشمس والمطر، نوصي بمجموعة ريبوزو بإطارات خشب زيتون معالجة.' },
      { question: 'كيف يُ sourced خشب الزيتون؟', answer: 'كل خشب الزيتون معاد تدويره من بساتين وصلت لنهاية حياتها المنتجة. لا تُقطع أشجار لإطاراتنا — كل قطعة مستدامة وفريدة.' },
      { question: 'هل يمكنني طلب قطعة مخصصة؟', answer: 'بكل سرور. ورشتنا ترحب بطلبات التفصيل — اختر لون الكتان، نهاية الإطار، الأبعاد، ونمط النسيج. مدة التسليم 8-12 أسبوعاً.' },
      { question: 'كيف أعتني بالكتان والخشب؟', answer: 'أغطية الكتان قابلة للإزالة والغسل في الغسالة عند 30°م. إطارات خشب الزيتون تحتاج فقط مسحاً بقطعة قماش رطبة وزيتاً طبيعياً مرة في السنة.' },
      { question: 'هل توصلون دولياً؟', answer: 'نعم، نشحن عالمياً بخدمة القفازات البيضاء المؤمنة. الطلبات الدولية تشمل التخليص الجمركي والتركيب الاحترافي بواسطة فرق شركائنا.' },
    ],
  },
  cta: {
    kicker: 'ابدأ المحادثة',
    title: 'أعد صيف المتوسط إلى المنزل',
    subtitle: 'احجز استشارة خاصة مع ورشتنا في سورينتو. سنساعدك في اختيار الكتان والخشب والنسيج — صنع أريكة تتنفس مع مساحتك.',
    primary: 'احجز استشارة خاصة',
    secondary: 'اتصل بالورشة: +39 081 878 3030',
  },
  footerBits: {
    ratingSuffix: 'تقييم',
  },
};

export const SOFA16_CONTENT = { en, vi, fr, cn, ar };

export function useSofa16Content() {
  const { currentLang } = useTranslate();
  return SOFA16_CONTENT[currentLang.value as keyof typeof SOFA16_CONTENT] ?? SOFA16_CONTENT.en;
}
