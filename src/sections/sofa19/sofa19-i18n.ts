import { useTranslate } from 'src/locales';

// ----------------------------------------------------------------------
// SOFA19 — BRAZILIAN TROPICAL MODERN — full multi-language content dictionary
// ----------------------------------------------------------------------

const en = {
  nav: { home: 'Home', story: 'Roots', collections: 'Collections', products: 'Pieces', gallery: 'Spaces', testimonials: 'Guests', faqs: 'Inquiries', contact: 'Contact' },
  hero: {
    badge: 'Casa Tropical · Brazilian modern since 1985',
    title1: 'Where every sofa',
    titleHighlight: 'swings',
    title2: 'with the jungle',
    subtitle: 'Bold curves in jungle green velvet, coral cushions, and golden accents inspired by Oscar Niemeyer. Each piece brings the lush, sensual energy of Brazilian modernism — vibrant, organic, alive.',
    ctaPrimary: 'Discover collections',
    ctaSecondary: 'Visit the studio',
    badgeNumber: '1985',
    badgeLabel: 'year the first Casa Tropical sofa was curved in São Paulo',
    promos: [
      { label: 'Velvet curves', text: 'Bold, organic Niemeyer lines' },
      { label: 'Native woods', text: 'Reclaimed jacaranda & peroba' },
      { label: 'Botanical comfort', text: 'Designed for indoor-outdoor flow' },
      { label: 'Tropical color', text: 'Jungle green, coral, golden' },
    ],
  },
  marquee: ['Tropical', 'Copa', 'Jungle', 'Coral', 'Niemeyer', 'Velvet', 'Jacaranda', 'Carnauba', 'Samba', 'Bossa'],
  story: {
    kicker: 'Our roots',
    title: 'Three currents of the Brazilian soul',
    items: [
      { title: 'Curved by Niemeyer', text: 'Casa Tropical began in 1985 when designer Lúcia Costa sketched her first sofa inspired by Oscar Niemeyer\'s curves — the same sensuality of Brasília, now for your living room. Free-form, never straight.' },
      { title: 'Rooted in the jungle', text: 'Our palette is the Atlantic Forest — jungle green velvet, coral sunset cushions, golden ipê accents. We bring the lush, sensual energy of Brazil\'s coast into every piece we shape.' },
      { title: 'Built with reclaimed wood', text: 'Every frame is hand-crafted from reclaimed jacaranda and peroba wood — rescued from old São Paulo buildings. Sustainable, charactered, each piece carrying a century of Brazilian history.' },
    ],
  },
  collections: {
    kicker: 'Collections',
    title: 'Four rhythms of tropical living',
    subtitle: 'Each collection captures a different beat of Brazil — from the cool morning breeze of the coast to the golden glow of a bossa nova evening.',
    viewLabel: 'Explore collection',
    items: [
      { title: 'Costa', tagline: 'Jungle · Velvet · Jacaranda', description: 'Jungle green velvet on reclaimed jacaranda. The lush intensity of the Atlantic Forest, curved into comfort.' },
      { title: 'Pôr do Sol', tagline: 'Coral · Boucle · Peroba', description: 'Warm coral boucle on peroba wood. The sunset glow of Ipanema, radiant and bold.' },
      { title: 'Jardim', tagline: 'Cream · Linen · Cane', description: 'Cream linen with woven cane details. The airy freshness of a tropical garden, light and alive.' },
      { title: 'Bossa', tagline: 'Golden · Velvet · Jacaranda', description: 'Golden velvet on jacaranda. The warm rhythm of a bossa nova evening, smooth and golden.' },
    ],
    countSuffix: 'pieces',
  },
  products: {
    kicker: 'Signature pieces',
    title: 'The most desired sofas in São Paulo',
    addLabel: 'Enquire now',
    items: [
      { name: 'Ipanema Curved 3-Seater', fabric: 'Jungle velvet · Jacaranda', badge: 'Iconic' },
      { name: 'Copacabana Loveseat', fabric: 'Coral boucle · Peroba', badge: 'New' },
      { name: 'Jardim Lounge Chair', fabric: 'Cream linen · Cane', badge: '' },
      { name: 'Bossa Daybed', fabric: 'Golden velvet · Jacaranda', badge: 'Limited' },
      { name: 'Niemeyer Modular', fabric: 'Multicolor · Peroba', badge: 'Bespoke' },
      { name: 'Tropical Bench', fabric: 'Natural linen · Jacaranda', badge: '' },
    ],
  },
  stats: { items: [{ label: 'Years of Brazilian modernism' }, { label: 'Curved pieces delivered' }, { label: 'Artisans per piece' }, { label: 'Tropical homes furnished' }] },
  steps: {
    kicker: 'The studio process',
    title: 'From sketch to sofa in four vibrant steps',
    items: [
      { title: 'Consultation', text: 'A vibrant conversation with our studio — we discuss your space, light, and the tropical energy you wish to bring indoors.' },
      { title: 'Curve sketching', text: 'Our designers sketch each silhouette by hand, channeling Niemeyer\'s free-form curves — no straight lines, only the sensuality of organic movement.' },
      { title: 'Reclaimed framing', text: 'Master carpenters hand-craft each frame from reclaimed jacaranda and peroba, rescued from century-old São Paulo buildings.' },
      { title: 'Tropical delivery', text: 'Your sofa arrives with white-glove care, professionally placed, with a lifetime craftsmanship guarantee from our studio.' },
    ],
  },
  gallery: {
    kicker: 'Spaces & homes',
    title: 'Where Casa Tropical pieces come alive',
    captions: ['São Paulo penthouse · Ipanema Curved 3-Seater', 'Ipanema terrace · Copacabana Loveseat', 'Garden loft · Jardim Lounge Chair', 'Beach house · Bossa Daybed', 'Modern villa · Niemeyer Modular', 'Tropical atrium · Tropical Bench'],
  },
  testimonials: {
    kicker: 'Our guests',
    title: 'Words from those who live with Tropical',
    items: [
      { name: 'Camila Reis', role: 'Interior designer · São Paulo', quote: 'The Costa collection is pure Brazilian soul. My clients say their living room finally feels like it belongs in Ipanema — lush, bold, effortlessly elegant.' },
      { name: 'Marco Silveira', role: 'Hotel owner · Trancoso', quote: 'We furnished our entire lobby with Casa Tropical. Guests constantly ask where the sofas are from — the curves, the colors, they\'re pure magic.' },
      { name: 'Elena Volkov', role: 'Architect · Lisbon', quote: 'The Niemeyer-inspired curves are extraordinary. Each sofa is a sculpture you can sit on. My Lisbon clients now have a piece of Brazilian modernism at home.' },
    ],
  },
  faqs: {
    kicker: 'Inquiries',
    title: 'Questions from our tropical guests',
    items: [
      { question: 'Is the velvet suitable for humid climates?', answer: 'Our velvet is specifically chosen for tropical climates — breathable, moisture-resistant, and fade-tested under intense sun. Perfect for indoor and covered outdoor spaces.' },
      { question: 'How is the reclaimed wood sourced?', answer: 'All jacaranda and peroba is rescued from demolished colonial buildings in São Paulo and Rio. Each frame carries a certificate of provenance and a century of Brazilian history.' },
      { question: 'Can I commission a custom curve?', answer: 'Absolutely! Our studio thrives on bespoke commissions — bring us your wildest curve and we will shape it. Choose velvet, wood, dimensions, and curvature. Lead time is 10-14 weeks.' },
      { question: 'How do I care for the velvet and wood?', answer: 'Velvet covers are removable and professionally dry-clean only. Reclaimed wood frames need only an occasional wipe with a damp cloth and natural wax once a year.' },
      { question: 'Do you ship internationally?', answer: 'Sim! We ship worldwide with insured white-glove service. International orders include customs handling and professional installation by our partner teams.' },
    ],
  },
  cta: {
    kicker: 'Begin the rhythm',
    title: 'Bring the soul of Brazil home',
    subtitle: 'Schedule a private consultation with our studio in São Paulo. We will help you choose velvet, wood, and curve — crafting a sofa that swings with tropical energy.',
    primary: 'Book a private consultation',
    secondary: 'Call the studio: +55 11 3066 2025',
  },
  footerBits: { ratingSuffix: 'rating' },
};

export type Sofa19Content = typeof en;

const vi: Sofa19Content = {
  nav: { home: 'Trang chủ', story: 'Gốc rễ', collections: 'Bộ sưu tập', products: 'Tác phẩm', gallery: 'Không gian', testimonials: 'Khách hàng', faqs: 'Câu hỏi', contact: 'Liên hệ' },
  hero: {
    badge: 'Casa Tropical · Hiện đại Brazil từ 1985',
    title1: 'Nơi mỗi bộ sofa',
    titleHighlight: 'đung đưa',
    title2: 'cùng rừng rậm',
    subtitle: 'Đường cong táo bạo trong nhung xanh rừng rậm, đệm san hô, và điểm nhấn vàng lấy cảm hứng từ Oscar Niemeyer. Mỗi tác phẩm mang năng lượng tươi mát, nhục cảm của chủ nghĩa hiện đại Brazil — sôi động, hữu cơ, sống.',
    ctaPrimary: 'Khám phá bộ sưu tập',
    ctaSecondary: 'Ghé studio',
    badgeNumber: '1985',
    badgeLabel: 'năm bộ sofa Casa Tropical đầu tiên được uốn cong tại São Paulo',
    promos: [
      { label: 'Nhung uốn cong', text: 'Đường cong Niemeyer hữu cơ' },
      { label: 'Gỗ bản địa', text: 'Jacaranda & peroba tái chế' },
      { label: 'Thoải mái thực vật', text: 'Thiết kế trong-ngoài liền mạch' },
      { label: 'Màu nhiệt đới', text: 'Xanh rừng, san hô, vàng' },
    ],
  },
  marquee: ['Nhiệt đới', 'Copa', 'Rừng rậm', 'San hô', 'Niemeyer', 'Nhung', 'Jacaranda', 'Carnauba', 'Samba', 'Bossa'],
  story: {
    kicker: 'Gốc rễ của chúng tôi',
    title: 'Ba dòng chảy của tâm hồn Brazil',
    items: [
      { title: 'Uốn theo Niemeyer', text: 'Casa Tropical bắt đầu năm 1985 khi nhà thiết kế Lúcia Costa phác sofa đầu tiên lấy cảm hứng từ đường cong Oscar Niemeyer — cùng sự nhục cảm của Brasília, giờ cho phòng khách bạn. Tự do hình dáng, không bao giờ thẳng.' },
      { title: 'Rễ trong rừng rậm', text: 'Bảng màu của chúng tôi là Rừng Đại Tây Dương — nhung xanh rừng rậm, đệm san hô hoàng hôn, điểm nhấn vàng ipê. Chúng tôi mang năng lượng tươi mát, nhục cảm của bờ biển Brazil vào mỗi tác phẩm.' },
      { title: 'Xây bằng gỗ tái chế', text: 'Mỗi khung được làm tay từ gỗ jacaranda và peroba tái chế — cứu từ các tòa nhà cũ São Paulo. Bền vững, có cá tính, mỗi tác phẩm mang một thế kỷ lịch sử Brazil.' },
    ],
  },
  collections: {
    kicker: 'Bộ sưu tập',
    title: 'Bốn nhịp điệu của cuộc sống nhiệt đới',
    subtitle: 'Mỗi bộ sưu tập nắm bắt một nhịp khác của Brazil — từ gió mát buổi sáng bờ biển đến vầng vàng của một đêm bossa nova.',
    viewLabel: 'Khám phá bộ sưu tập',
    items: [
      { title: 'Costa', tagline: 'Rừng · Nhung · Jacaranda', description: 'Nhung xanh rừng rậm trên jacaranda tái chế. Cường độ tươi mát của Rừng Đại Tây Dương, uốn vào sự thoải mái.' },
      { title: 'Pôr do Sol', tagline: 'San hô · Boucle · Peroba', description: 'Boucle san hô ấm trên gỗ peroba. Vầng hoàng hôn Ipanema, rực rỡ và táo bạo.' },
      { title: 'Jardim', tagline: 'Kem · Linen · Mây', description: 'Linen kem với chi tiết mây đan. Độ tươi mới thoáng của vườn nhiệt đới, nhẹ và sống.' },
      { title: 'Bossa', tagline: 'Vàng · Nhung · Jacaranda', description: 'Nhung vàng trên jacaranda. Nhịp ấm của một đêm bossa nova, mượt và vàng.' },
    ],
    countSuffix: 'tác phẩm',
  },
  products: {
    kicker: 'Tác phẩm biểu tượng',
    title: 'Những sofa được khao khát nhất São Paulo',
    addLabel: 'Liên hệ đặt',
    items: [
      { name: 'Ipanema Uốn cong 3 chỗ', fabric: 'Nhung rừng · Jacaranda', badge: 'Biểu tượng' },
      { name: 'Copacabana Loveseat', fabric: 'Boucle san hô · Peroba', badge: 'Mới' },
      { name: 'Jardim Lounge Chair', fabric: 'Linen kem · Mây', badge: '' },
      { name: 'Bossa Daybed', fabric: 'Nhung vàng · Jacaranda', badge: 'Giới hạn' },
      { name: 'Niemeyer Modular', fabric: 'Đa sắc · Peroba', badge: 'Định chế' },
      { name: 'Tropical Bench', fabric: 'Linen tự nhiên · Jacaranda', badge: '' },
    ],
  },
  stats: { items: [{ label: 'Năm chủ nghĩa hiện đại Brazil' }, { label: 'Tác phẩm uốn cong đã giao' }, { label: 'Nghệ nhân mỗi tác phẩm' }, { label: 'Ngôi nhà nhiệt đới đã trang bị' }] },
  steps: {
    kicker: 'Quy trình studio',
    title: 'Từ phác đến sofa trong bốn bước sôi động',
    items: [
      { title: 'Tư vấn', text: 'Trò chuyện sôi động với studio — thảo luận không gian, ánh sáng, và năng lượng nhiệt đới bạn muốn mang vào nhà.' },
      { title: 'Phác đường cong', text: 'Nhà thiết kế phác mỗi silhouette bằng tay, dẫn đường cong tự do Niemeyer — không đường thẳng, chỉ sự nhục cảm của chuyển động hữu cơ.' },
      { title: 'Khung tái chế', text: 'Thợ mộc làm tay mỗi khung từ jacaranda và peroba tái chế, cứu từ tòa nhà São Paulo trăm năm.' },
      { title: 'Giao hàng nhiệt đới', text: 'Sofa đến với dịch vụ white-glove, đặt chuyên nghiệp, kèm bảo hành thủ công trọn đời từ studio.' },
    ],
  },
  gallery: {
    kicker: 'Không gian & nhà ở',
    title: 'Nơi tác phẩm Casa Tropical sống dậy',
    captions: ['Penthouse São Paulo · Ipanema Uốn 3 chỗ', 'Sân thượng Ipanema · Copacabana Loveseat', 'Loft vườn · Jardim Lounge Chair', 'Nhà bãi biển · Bossa Daybed', 'Biệt thự hiện đại · Niemeyer Modular', 'Tiền sảnh nhiệt đới · Tropical Bench'],
  },
  testimonials: {
    kicker: 'Khách hàng của chúng tôi',
    title: 'Lời từ những người sống cùng Tropical',
    items: [
      { name: 'Camila Reis', role: 'Nhà thiết kế nội thất · São Paulo', quote: 'Bộ sưu tập Costa là tâm hồn Brazil thuần. Khách hàng tôi nói phòng khách cuối cùng thuộc về Ipanema — tươi mát, táo bạo, thanh lịch bất cần.' },
      { name: 'Marco Silveira', role: 'Chủ khách sạn · Trancoso', quote: 'Chúng tôi trang bị cả sảnh bằng Casa Tropical. Khách liên tục hỏi sofa từ đâu — đường cong, màu sắc, chúng ma thuật.' },
      { name: 'Elena Volkov', role: 'Kiến trúc sư · Lisbon', quote: 'Đường cong Niemeyer phi thường. Mỗi sofa là điêu khắc bạn ngồi được. Khách Lisbon tôi giờ có một phần chủ nghĩa hiện đại Brazil tại nhà.' },
    ],
  },
  faqs: {
    kicker: 'Câu hỏi',
    title: 'Thắc mắc từ khách hàng nhiệt đới',
    items: [
      { question: 'Nhung có phù hợp khí hậu ẩm không?', answer: 'Nhung của chúng tôi được chọn riêng cho khí hậu nhiệt đới — thoáng, kháng ẩm, và đã test phai dưới nắng gắt. Hoàn hảo cho không gian trong nhà và ngoài trời có mái.' },
      { question: 'Gỗ tái chế được lấy từ đâu?', answer: 'Tất cả jacaranda và peroba cứu từ tòa nhà thuộc địa bị phá ở São Paulo và Rio. Mỗi khung có chứng nhận nguồn gốc và một thế kỷ lịch sử Brazil.' },
      { question: 'Tôi có thể đặt đường cong riêng?', answer: 'Chắc chắn! Studio chúng tôi hứng khởi với đơn định chế — mang đến đường cong điên rồ nhất và chúng tôi sẽ uốn. Chọn nhung, gỗ, kích thước, và độ cong. Thời gian 10-14 tuần.' },
      { question: 'Cách chăm sóc nhung và gỗ?', answer: 'Vỏ nhung tháo rời và chỉ giặt khô chuyên nghiệp. Khung gỗ tái chế chỉ cần lau khăn ẩm và sáp tự nhiên mỗi năm một lần.' },
      { question: 'Có giao hàng quốc tế không?', answer: 'Có! Giao toàn cầu với dịch vụ white-glove có bảo hiểm. Đơn quốc tế bao gồm thủ tục hải quan và lắp đặt chuyên nghiệp bởi đội ngũ đối tác.' },
    ],
  },
  cta: {
    kicker: 'Bắt đầu nhịp điệu',
    title: 'Mang tâm hồn Brazil về nhà',
    subtitle: 'Đặt tư vấn riêng với studio tại São Paulo. Chúng tôi sẽ giúp bạn chọn nhung, gỗ, và đường cong — chế tác sofa đung đưa cùng năng lượng nhiệt đới.',
    primary: 'Đặt tư vấn riêng',
    secondary: 'Gọi studio: +55 11 3066 2025',
  },
  footerBits: { ratingSuffix: 'đánh giá' },
};

const fr: Sofa19Content = {
  nav: { home: 'Accueil', story: 'Racines', collections: 'Collections', products: 'Pièces', gallery: 'Espaces', testimonials: 'Clients', faqs: 'Questions', contact: 'Contact' },
  hero: {
    badge: 'Casa Tropical · Modernisme brésilien depuis 1985',
    title1: 'Où chaque canapé',
    titleHighlight: 'balance',
    title2: 'avec la jungle',
    subtitle: 'Courbes audacieuses en velours vert jungle, coussins coraux et accents dorés inspirés d\'Oscar Niemeyer. Chaque pièce apporte l\'énergie luxuriante et sensuelle du modernisme brésilien — vibrante, organique, vivante.',
    ctaPrimary: 'Découvrir les collections',
    ctaSecondary: 'Visiter le studio',
    badgeNumber: '1985',
    badgeLabel: 'année du premier canapé Casa Tropical courbé à São Paulo',
    promos: [
      { label: 'Courbes en velours', text: 'Lignes organiques Niemeyer' },
      { label: 'Bois indigènes', text: 'Jacaranda & peroba recyclés' },
      { label: 'Confort botanique', text: 'Conçu pour l\'intérieur-extérieur' },
      { label: 'Couleur tropicale', text: 'Vert jungle, corail, doré' },
    ],
  },
  marquee: ['Tropical', 'Copa', 'Jungle', 'Corail', 'Niemeyer', 'Velours', 'Jacaranda', 'Carnauba', 'Samba', 'Bossa'],
  story: {
    kicker: 'Nos racines',
    title: 'Trois courants de l\'âme brésilienne',
    items: [
      { title: 'Courbé par Niemeyer', text: 'Casa Tropical a vu le jour en 1985 lorsque la designer Lúcia Costa a esquisse son premier canapé inspiré des courbes d\'Oscar Niemeyer — la même sensualité de Brasília, pour votre salon. Forme libre, jamais droite.' },
      { title: 'Enraciné dans la jungle', text: 'Notre palette est la forêt atlantique — velours vert jungle, coussins corail du coucher de soleil, accents dorés ipê. Nous apportons l\'nergie luxuriante et sensuelle de la côte brésilienne dans chaque pièce.' },
      { title: 'Construit en bois recyclé', text: 'Chaque cadre est façonné main en jacaranda et peroba recyclés — sauvés d\'anciens bâtiments de São Paulo. Durable, chargé de caractère, chaque pièce portant un siècle d\'histoire brésilienne.' },
    ],
  },
  collections: {
    kicker: 'Collections',
    title: 'Quatre rythmes de vie tropicale',
    subtitle: 'Chaque collection capture un battement différent du Brésil — de la brise fraîche du matin côtier à la lueur dorée d\'une soirée bossa nova.',
    viewLabel: 'Explorer la collection',
    items: [
      { title: 'Costa', tagline: 'Jungle · Velours · Jacaranda', description: 'Velours vert jungle sur jacaranda recyclé. L\'intensité luxuriante de la forêt atlantique, courbée dans le confort.' },
      { title: 'Pôr do Sol', tagline: 'Corail · Boucle · Peroba', description: 'Boucle corail chaude sur peroba. La lueur du coucher de soleil d\'Ipanema, radieuse et audacieuse.' },
      { title: 'Jardim', tagline: 'Crème · Lin · Rotin', description: 'Lin crème avec détails en rotin tissé. La fraîcheur aérienne d\'un jardin tropical, légère et vivante.' },
      { title: 'Bossa', tagline: 'Doré · Velours · Jacaranda', description: 'Velours doré sur jacaranda. Le rythme chaud d\'une soirée bossa nova, lisse et doré.' },
    ],
    countSuffix: 'pièces',
  },
  products: {
    kicker: 'Pièces signature',
    title: 'Les canapés les plus désirés de São Paulo',
    addLabel: 'Demander un devis',
    items: [
      { name: 'Ipanema Courbé 3 places', fabric: 'Velours jungle · Jacaranda', badge: 'Icône' },
      { name: 'Copacabana Loveseat', fabric: 'Boucle corail · Peroba', badge: 'Nouveau' },
      { name: 'Jardim Fauteuil', fabric: 'Lin crème · Rotin', badge: '' },
      { name: 'Bossa Méridienne', fabric: 'Velours doré · Jacaranda', badge: 'Édition limitée' },
      { name: 'Niemeyer Modulaire', fabric: 'Multicolore · Peroba', badge: 'Sur-mesure' },
      { name: 'Tropical Banc', fabric: 'Lin naturel · Jacaranda', badge: '' },
    ],
  },
  stats: { items: [{ label: 'Années de modernisme brésilien' }, { label: 'Pièces courbées livrées' }, { label: 'Artisans par pièce' }, { label: 'Foyers tropicaux équipés' }] },
  steps: {
    kicker: 'Le processus studio',
    title: 'Du croquis au canapé en quatre étapes vibrantes',
    items: [
      { title: 'Consultation', text: 'Une conversation vibrante avec notre studio — nous discutons de votre espace, lumière et de l\'énergie tropicale que vous souhaitez apporter.' },
      { title: 'Croquis des courbes', text: 'Nos designers croquent chaque silhouette à main levée, canalisant les courbes libres de Niemeyer — aucune ligne droite, seulement la sensualité du mouvement organique.' },
      { title: 'Cadres recyclés', text: 'Des charpentiers maîtres façonnent chaque cadre en jacaranda et peroba recyclés, sauvés de bâtiments centenaires de São Paulo.' },
      { title: 'Livraison tropicale', text: 'Votre canapé arrive avec service gants blancs, installé professionnellement, avec garantie de savoir-faire à vie de notre studio.' },
    ],
  },
  gallery: {
    kicker: 'Espaces et maisons',
    title: 'Où les pièces Casa Tropical prennent vie',
    captions: ['Penthouse São Paulo · Ipanema 3 places', 'Terrasse Ipanema · Copacabana', 'Loft jardin · Jardim Fauteuil', 'Maison plage · Bossa Méridienne', 'Villa moderne · Niemeyer Modulaire', 'Atrium tropical · Tropical Banc'],
  },
  testimonials: {
    kicker: 'Nos clients',
    title: 'Paroles de ceux qui vivent avec Tropical',
    items: [
      { name: 'Camila Reis', role: 'Designer d\'intérieur · São Paulo', quote: 'La collection Costa est l\'âme brésilienne pure. Mes clients disent que leur salon ressemble enfin à Ipanema — luxuriant, audacieux, élégamment insouciant.' },
      { name: 'Marco Silveira', role: 'Propriétaire d\'hôtel · Trancoso', quote: 'Nous avons meublé tout le hall avec Casa Tropical. Les clients demandent constamment d\'où viennent les canapés — les courbes, les couleurs, c\'est magique.' },
      { name: 'Elena Volkov', role: 'Architecte · Lisbonne', quote: 'Les courbes inspirées de Niemeyer sont extraordinaires. Chaque canapé est une sculpture sur laquelle on s\'assied. Mes clients lisboètes ont un morceau de modernisme brésilien chez eux.' },
    ],
  },
  faqs: {
    kicker: 'Questions',
    title: 'Questions de nos clients tropicaux',
    items: [
      { question: 'Le velours convient-il aux climats humides ?', answer: 'Notre velours est spécialement choisi pour les climats tropicaux — respirant, résistant à l\'humidité et testé contre la décoloration au soleil intense. Parfait pour intérieur et extérieur couvert.' },
      { question: 'Comment le bois recyclé est-il sourcé ?', answer: 'Tout le jacaranda et peroba est sauvé de bâtiments coloniaux démolis à São Paulo et Rio. Chaque cadre porte un certificat de provenance et un siècle d\'histoire brésilienne.' },
      { question: 'Puis-je commander une courbe sur-mesure ?', answer: 'Absolument ! Notre studio prospère sur les commandes sur-mesure — apportez-nous votre courbe la plus folle et nous la façonnerons. Choisissez velours, bois, dimensions et courbure. Délai 10-14 semaines.' },
      { question: 'Comment entretenir le velours et le bois ?', answer: 'Les housses de velours sont amovibles et uniquement au nettoyage à sec professionnel. Les cadres en bois recyclé nécessitent juste un chiffon humide et de la cire naturelle une fois par an.' },
      { question: 'Livrez-vous à l\'international ?', answer: 'Oui ! Nous expédions mondialement avec service gants blancs assuré. Les commandes internationales incluent le dédouanement et l\'installation professionnelle par nos équipes partenaires.' },
    ],
  },
  cta: {
    kicker: 'Commencez le rythme',
    title: 'Ramenez l\'âme du Brésil à la maison',
    subtitle: 'Planifiez une consultation privée avec notre studio à São Paulo. Nous vous aiderons à choisir velours, bois et courbe — créant un canapé qui balance avec l\'énergie tropicale.',
    primary: 'Réserver une consultation privée',
    secondary: 'Appeler le studio : +55 11 3066 2025',
  },
  footerBits: { ratingSuffix: 'avis' },
};

const cn: Sofa19Content = {
  nav: { home: '首页', story: '根源', collections: '系列', products: '作品', gallery: '空间', testimonials: '客户', faqs: '问答', contact: '联系我们' },
  hero: {
    badge: 'Casa Tropical · 自1985年的巴西现代主义',
    title1: '每张沙发',
    titleHighlight: '摇曳着',
    title2: '丛林韵律',
    subtitle: '丛林绿天鹅绒的大胆曲线,珊瑚色靠垫,受奥斯卡·尼迈耶启发的金色点缀。每件作品都带来巴西现代主义 lush、感官的能量——活力、有机、鲜活。',
    ctaPrimary: '探索系列',
    ctaSecondary: '参观工作室',
    badgeNumber: '1985',
    badgeLabel: 'Casa Tropical首张沙发在圣保罗弯塑之年',
    promos: [
      { label: '天鹅绒曲线', text: '大胆的有机尼迈耶线条' },
      { label: '本土木材', text: '回收紫檀与破布木' },
      { label: '植物舒适', text: '为室内外流通设计' },
      { label: '热带色彩', text: '丛林绿、珊瑚、金色' },
    ],
  },
  marquee: ['热带', '科帕', '丛林', '珊瑚', '尼迈耶', '天鹅绒', '紫檀', '蜡棕', '桑巴', '波萨'],
  story: {
    kicker: '我们的根源',
    title: '巴西灵魂的三股潮流',
    items: [
      { title: '尼迈耶之曲', text: 'Casa Tropical始于1985年,当设计师Lúcia Costa受奥斯卡·尼迈耶曲线启发,勾勒了她的第一张沙发——同样的巴西利亚性感,如今为你的客厅。自由形态,永不笔直。' },
      { title: '根植丛林', text: '我们的调色板是大西洋森林——丛林绿天鹅绒,珊瑚落日靠垫,金色伊佩点缀。我们将巴西海岸的lush感官能量带入每件作品。' },
      { title: '回收木材打造', text: '每个框架由回收紫檀和破布木手工制成——从圣保罗老建筑中拯救。可持续、有个性,每件承载一个世纪的巴西历史。' },
    ],
  },
  collections: {
    kicker: '系列',
    title: '热带生活的四重节奏',
    subtitle: '每个系列捕捉巴西不同的节拍——从海岸清晨的凉爽微风到波萨诺瓦夜晚的金色光辉。',
    viewLabel: '探索系列',
    items: [
      { title: 'Costa 海岸', tagline: '丛林 · 天鹅绒 · 紫檀', description: '丛林绿天鹅绒覆于回收紫檀。大西洋森林的lush强度,弯入舒适。' },
      { title: 'Pôr do Sol 落日', tagline: '珊瑚 · 布料 · 破布木', description: '温暖珊瑚布料覆于破布木。伊帕内玛落日的光辉,耀眼而大胆。' },
      { title: 'Jardim 花园', tagline: '奶油 · 亚麻 · 藤', description: '奶油亚麻配编织藤细节。热带花园的通透清新,轻盈而鲜活。' },
      { title: 'Bossa 波萨', tagline: '金色 · 天鹅绒 · 紫檀', description: '金色天鹅绒覆于紫檀。波萨诺瓦夜晚的温暖节奏,顺滑而金亮。' },
    ],
    countSuffix: '件',
  },
  products: {
    kicker: '标志性作品',
    title: '圣保罗最令人向往的沙发',
    addLabel: '立即咨询',
    items: [
      { name: '伊帕内玛曲形三人座', fabric: '丛林天鹅绒 · 紫檀', badge: '经典' },
      { name: '科帕卡巴纳双人座', fabric: '珊瑚布料 · 破布木', badge: '新品' },
      { name: '花园休闲椅', fabric: '奶油亚麻 · 藤', badge: '' },
      { name: '波萨躺榻', fabric: '金色天鹅绒 · 紫檀', badge: '限量' },
      { name: '尼迈耶模块组合', fabric: '多彩 · 破布木', badge: '定制' },
      { name: '热带长椅', fabric: '天然亚麻 · 紫檀', badge: '' },
    ],
  },
  stats: { items: [{ label: '年巴西现代主义传承' }, { label: '件曲线作品交付' }, { label: '位工匠每件' }, { label: '个热带之家选用' }] },
  steps: {
    kicker: '工作室流程',
    title: '从草图到沙发,四步活力之旅',
    items: [
      { title: '咨询', text: '与工作室的活力对话——讨论您的空间、光线,以及您想带入室内的热带能量。' },
      { title: '曲线勾勒', text: '我们的设计师手工勾勒每个轮廓,引导尼迈耶的自由曲线——没有直线,只有有机运动的性感。' },
      { title: '回收框架', text: '木匠大师用回收紫檀和破布木手工打造每个框架,从圣保罗百年建筑中拯救。' },
      { title: '热带配送', text: '沙发以白手套服务送达,专业安装,附工作室终身工艺保修。' },
    ],
  },
  gallery: {
    kicker: '空间与家居',
    title: 'Casa Tropical作品焕发生机之处',
    captions: ['圣保罗顶层公寓 · 伊帕内玛三人座', '伊帕内玛露台 · 科帕卡巴纳', '花园阁楼 · 花园休闲椅', '海滩别墅 · 波萨躺榻', '现代别墅 · 尼迈耶模块', '热带中庭 · 热带长椅'],
  },
  testimonials: {
    kicker: '我们的客户',
    title: '与Tropical共处者的感言',
    items: [
      { name: 'Camila Reis', role: '室内设计师 · 圣保罗', quote: 'Costa系列是纯粹的巴西灵魂。我的客户说他们的客厅终于感觉像伊帕内玛——lush、大胆、毫不费力的优雅。' },
      { name: 'Marco Silveira', role: '酒店主人 · 特兰科苏', quote: '我们用Casa Tropical布置了整个大堂。客人不断问沙发从哪来——曲线、色彩,简直是魔法。' },
      { name: 'Elena Volkov', role: '建筑师 · 里斯本', quote: '尼迈耶启发的曲线非凡。每张沙发是可以坐的雕塑。我的里斯本客户现在家中拥有一件巴西现代主义。' },
    ],
  },
  faqs: {
    kicker: '咨询',
    title: '热带客户的常见问题',
    items: [
      { question: '天鹅绒适合潮湿气候吗?', answer: '我们的天鹅绒专为热带气候选择——透气、防潮、并在强烈阳光下经过褪色测试。非常适合室内和有遮盖的户外空间。' },
      { question: '回收木材如何采购?', answer: '所有紫檀和破布木从圣保罗和里约被拆除的殖民建筑中拯救。每个框架都有来源证书和一个世纪的巴西历史。' },
      { question: '我可以定制曲线吗?', answer: '当然!我们的工作室热衷于定制委托——带来您最疯狂的曲线,我们将塑造它。选择天鹅绒、木材、尺寸和曲度。交货期10-14周。' },
      { question: '如何保养天鹅绒和木材?', answer: '天鹅绒套可拆卸,仅限专业干洗。回收木框架只需偶尔用湿布擦拭,每年一次天然蜡保养。' },
      { question: '你们提供国际配送吗?', answer: '是的!我们通过保险白手套服务全球发货。国际订单包括清关和由合作伙伴团队的专业安装。' },
    ],
  },
  cta: {
    kicker: '开启节奏',
    title: '把巴西的灵魂带回家',
    subtitle: '预约在圣保罗与我们工作室的私密咨询。我们将帮助您选择天鹅绒、木材和曲线——打造与热带能量共摇的沙发。',
    primary: '预约私密咨询',
    secondary: '致电工作室:+55 11 3066 2025',
  },
  footerBits: { ratingSuffix: '评分' },
};

const ar: Sofa19Content = {
  nav: { home: 'الرئيسية', story: 'الجذور', collections: 'المجموعات', products: 'القطع', gallery: 'الفضاءات', testimonials: 'العملاء', faqs: 'الأسئلة', contact: 'تواصل معنا' },
  hero: {
    badge: 'كازا تروبيكال · الحداثة البرازيلية منذ 1985',
    title1: 'حيث كل أريكة',
    titleHighlight: 'تتأرجح',
    title2: 'مع الأدغال',
    subtitle: 'منحنيات جريئة بالمخمل الأخضر الاستوائي، وسائد مرجانية، ولمسات ذهبية مستوحاة من أوسكار نيماير. كل قطعة تجلب طاقة الحداثة البرازيلية الغنية الحسية — نابضة، عضوية، حية.',
    ctaPrimary: 'اكتشف المجموعات',
    ctaSecondary: 'زر الاستوديو',
    badgeNumber: '1985',
    badgeLabel: 'سنة انحناء أول أريكة كازا تروبيكال في ساو باولو',
    promos: [
      { label: 'منحنيات مخمل', text: 'خطوط نيماير العضوية الجريئة' },
      { label: 'أخشاب محلية', text: 'جاكاراندا وبيروبا معاد تدويره' },
      { label: 'راحة نباتية', text: 'مصمم للتدفق الداخلي-الخارجي' },
      { label: 'لون استوائي', text: 'أخضر أدغال، مرجاني، ذهبي' },
    ],
  },
  marquee: ['استوائي', 'كوبا', 'أدغال', 'مرجاني', 'نيماير', 'مخمل', 'جاكاراندا', 'كارناوبا', 'سامبا', 'بوسا'],
  story: {
    kicker: 'جذورنا',
    title: 'ثلاث تيارات للروح البرازيلية',
    items: [
      { title: 'منحنى بواسطة نيماير', text: 'بدأت كازا تروبيكال عام 1985 عندما رسمت المصممة لوسيا كوستا أول أريكة مستوحاة من منحنيات أوسكار نيماير — نفس إثارة برازيليا، الآن لغرفة معيشتك. شكل حر، لا مستقيم أبداً.' },
      { title: 'متأصلة في الأدغال', text: 'لوحتنا هي غابة الأطلسي — مخمل أخضر أدغال، وسائد مرجانية للغروب، لمسات ذهبية إيبيه. نحن نجلب طاقة الساحل البرازيلي الغنية الحسية لكل قطعة نصنعها.' },
      { title: 'مبنية بخشب معاد تدويره', text: 'كل إطار مصنوع يدوياً من جاكاراندا وبيروبا معاد تدويره — منقذ من مباني ساو باولو القديمة. مستدام، ذو شخصية، كل قطعة تحمل قرناً من التاريخ البرازيلي.' },
    ],
  },
  collections: {
    kicker: 'المجموعات',
    title: 'أربع إيقاعات للحياة الاستوائية',
    subtitle: 'كل مجموعة تلتقط نبضة مختلفة من البرازيل — من نسيم الصباح البارد على الساحل إلى توهج ذهبي لمساء بوسا نوفا.',
    viewLabel: 'استكشف المجموعة',
    items: [
      { title: 'كوستا', tagline: 'أدغال · مخمل · جاكاراندا', description: 'مخمل أخضر أدغال على جاكاراندا معاد تدويره. كثافة غابة الأطلسي الغنية، منحنية في الراحة.' },
      { title: 'بور دو سول', tagline: 'مرجاني · بوكليه · بيروبا', description: 'بوكليه مرجاني دافئ على خشب بيروبا. توهج غروب إيبانيما، مشع وجريء.' },
      { title: 'جارديم', tagline: 'كريمي · كتان · قصب', description: 'كتان كريمي بتفاصيل قصب منسوج. نضارة حديقة استوائية الهوائية، خفيفة وحية.' },
      { title: 'بوسا', tagline: 'ذهبي · مخمل · جاكاراندا', description: 'مخمل ذهبي على جاكاراندا. إيقاع مساء بوسا نوفا الدافئ، ناعم وذهبي.' },
    ],
    countSuffix: 'قطعة',
  },
  products: {
    kicker: 'القطع المميزة',
    title: 'أكثر الأرائك رغبة في ساو باولو',
    addLabel: 'استفسر الآن',
    items: [
      { name: 'إيبانيما منحنية 3 مقاعد', fabric: 'مخمل أدغال · جاكاراندا', badge: 'أيقونة' },
      { name: 'كوباكابانا مقعدين', fabric: 'بوكليه مرجاني · بيروبا', badge: 'جديد' },
      { name: 'جارديم كرسي', fabric: 'كتان كريمي · قصب', badge: '' },
      { name: 'بوسا أريكة', fabric: 'مخمل ذهبي · جاكاراندا', badge: 'محدود' },
      { name: 'نيماير موديولار', fabric: 'متعدد الألوان · بيروبا', badge: 'تفصيل خاص' },
      { name: 'تروبيكال مقعد', fabric: 'كتان طبيعي · جاكاراندا', badge: '' },
    ],
  },
  stats: { items: [{ label: 'سنة من الحداثة البرازيلية' }, { label: 'قطعة منحنية تم تسليمها' }, { label: 'حرفي لكل قطعة' }, { label: 'بيت استوائي تم تأثيثه' }] },
  steps: {
    kicker: 'عملية الاستوديو',
    title: 'من الرسم إلى الأريكة في أربع خطوات نابضة',
    items: [
      { title: 'استشارة', text: 'محادثة نابضة مع استوديونا — نناقش مساحتك وضوءك والطاقة الاستوائية التي ترغب في إحضارها للداخل.' },
      { title: 'رسم المنحنيات', text: 'مصممونا يرسمون كل صورة يدوياً، يستلهمون منحنيات نيماير الحرة — لا خطوط مستقيمة، فقط إثارة الحركة العضوية.' },
      { title: 'إطارات معاد تدويرها', text: 'نجارون مهرون يصنعون كل إطار من جاكاراندا وبيروبا معاد تدويره، منقذ من مباني ساو باولو القرنية.' },
      { title: 'توصيل استوائي', text: 'تصلك أريكتك بخدمة القفازات البيضاء، تُركّب احترافياً، مع ضمان حرفية مدى الحياة من استوديونا.' },
    ],
  },
  gallery: {
    kicker: 'الفضاءات والمنازل',
    title: 'حيث تأتي قطع كازا تروبيكال إلى الحياة',
    captions: ['بنتهاوس ساو باولو · إيبانيما 3 مقاعد', 'شرفة إيبانيما · كوباكابانا', 'لوفت حديقة · جارديم', 'بيت شاطئ · بوسا', 'فيلا حديثة · نيماير', 'بهو استوائي · تروبيكال'],
  },
  testimonials: {
    kicker: 'عملاؤنا',
    title: 'كلمات من يعيشون مع تروبيكال',
    items: [
      { name: 'كاميلا رايس', role: 'مصممة ديكور · ساو باولو', quote: 'مجموعة كوستا روح برازيلية خالصة. عملائي يقولون أن غرفة معيشتهم أخيراً تنتمي لإيبانيما — غنية، جريئة، أناقة بلا جهد.' },
      { name: 'ماركو سيلفيرا', role: 'صاحب فندق · ترانكوسو', quote: 'أثثنا بهو الفندق بالكامل بكازا تروبيكال. الضيوف يسألون باستمرار من أين الأرائك — المنحنيات، الألوان، سحر خالص.' },
      { name: 'إيلينا فولكوف', role: 'مهندسة معمارية · لشبونة', quote: 'المنحنيات المستوحاة من نيماير استثنائية. كل أريكة منحوتة يمكنك الجلوس عليها. عملائي في لشبونة لديهم قطعة من الحداثة البرازيلية في منزلهم.' },
    ],
  },
  faqs: {
    kicker: 'استفسارات',
    title: 'أسئلة من عملائنا الاستوائيين',
    items: [
      { question: 'هل المخمل مناسب للمناخات الرطبة؟', answer: 'مخملنا مختار خصيصاً للمناخات الاستوائية — تنفسي، مقاوم للرطوبة، ومختبر ضد البهات تحت شمس قوية. مثالي للمساحات الداخلية والخارجية المغطاة.' },
      { question: 'كيف يُ sourced الخشب المعاد تدويره؟', answer: 'كل الجاكاراندا والبيروبا منقذ من مباني استعمارية هُدمت في ساو باولو وريو. كل إطار يحمل شهادة منشأ وقرناً من التاريخ البرازيلي.' },
      { question: 'هل يمكنني طلب منحنى مخصص؟', answer: 'بالتأكيد! استوديونا يزدهر بالطلبات المخصصة — أحضر لنا أجرأ منحنى وسنشكله. اختر مخمل، خشب، أبعاد، وانحناء. مدة التسليم 10-14 أسبوعاً.' },
      { question: 'كيف أعتني بالمخمل والخشب؟', answer: 'أغطية المخمل قابلة للإزالة وتُنظف جافاً احترافياً فقط. إطارات الخشب المعاد تدويره تحتاج فقط مسحاً بقطعة قماش رطبة وشمع طبيعي مرة في السنة.' },
      { question: 'هل توصلون دولياً؟', answer: 'نعم! نشحن عالمياً بخدمة القفازات البيضاء المؤمنة. الطلبات الدولية تشمل التخليص الجمركي والتركيب الاحترافي بواسطة فرق شركائنا.' },
    ],
  },
  cta: {
    kicker: 'ابدأ الإيقاع',
    title: 'أعد روح البرازيل إلى المنزل',
    subtitle: 'احجز استشارة خاصة مع استوديونا في ساو باولو. سنساعدك في اختيار المخمل والخشب والمنحنى — صنع أريكة تتأرجح بالطاقة الاستوائية.',
    primary: 'احجز استشارة خاصة',
    secondary: 'اتصل بالاستوديو: +55 11 3066 2025',
  },
  footerBits: { ratingSuffix: 'تقييم' },
};

export const SOFA19_CONTENT = { en, vi, fr, cn, ar };

export function useSofa19Content() {
  const { currentLang } = useTranslate();
  return SOFA19_CONTENT[currentLang.value as keyof typeof SOFA19_CONTENT] ?? SOFA19_CONTENT.en;
}
