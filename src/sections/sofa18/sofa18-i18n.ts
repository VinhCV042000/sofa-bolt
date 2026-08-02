import { useTranslate } from 'src/locales';

// ----------------------------------------------------------------------
// SOFA18 — JAPANESE WABI-SABI — full multi-language content dictionary
// ----------------------------------------------------------------------

const en = {
  nav: { home: 'Home', story: 'Philosophy', collections: 'Collections', products: 'Pieces', gallery: 'Spaces', testimonials: 'Guests', faqs: 'Inquiries', contact: 'Contact' },
  hero: {
    badge: 'Muji-An · Quiet comfort since 1972',
    title1: 'Where every sofa',
    titleHighlight: 'breathes',
    title2: 'in silence',
    subtitle: 'Organic linen on hand-planed cedar, forms that celebrate imperfection. Each piece embodies wabi-sabi — the beauty of the incomplete, the weathered, the perfectly imperfect.',
    ctaPrimary: 'Discover collections',
    ctaSecondary: 'Visit the atelier',
    badgeNumber: '1972',
    badgeLabel: 'year the first Muji-An sofa was shaped in Kyoto',
    promos: [
      { label: 'Organic linen', text: 'Undyed, hand-woven flax' },
      { label: 'Hand-planed cedar', text: 'Hinoki from Yoshino forest' },
      { label: 'Low platform design', text: 'Grounded, meditative comfort' },
      { label: 'Lifetime repair', text: 'Kintsugi philosophy of care' },
    ],
  },
  marquee: ['Wabi', 'Sabi', 'Muji', 'Zen', 'Hinoki', 'Linen', 'Kyo', 'Kuro', 'Shiro', 'Sabi'],
  story: {
    kicker: 'Our philosophy',
    title: 'Three principles of the quiet way',
    items: [
      { title: 'Embrace imperfection', text: 'Muji-An began in 1972 when Tanaka-sensei shaped his first sofa from imperfect cedar — knots, grain, and all. We celebrate what others discard: the weathered, the irregular, the alive.' },
      { title: 'Sit close to earth', text: 'Our low-platform silhouettes bring you closer to the ground — the traditional Japanese posture of seiza, reimagined for modern comfort. To sit low is to feel rooted, calm, present.' },
      { title: 'Repair, never replace', text: 'Inspired by kintsugi — the art of repairing with gold — we offer lifetime mending for every piece. A crack is not a flaw but a story, gilded and honored, never hidden.' },
    ],
  },
  collections: {
    kicker: 'Collections',
    title: 'Four seasons of quiet living',
    subtitle: 'Each collection captures a season of the Japanese year — from the first warmth of spring earth to the deep stillness of winter snow.',
    viewLabel: 'Explore collection',
    items: [
      { title: 'Haru', tagline: 'Sage · Linen · Cedar', description: 'Soft sage linen on hand-planed cedar. The gentle awakening of spring earth, grounded and alive.' },
      { title: 'Natsu', tagline: 'Cream · Hemp · Bamboo', description: 'Breathable cream hemp with bamboo accents. The airy lightness of a summer shoji screen.' },
      { title: 'Aki', tagline: 'Clay · Wool · Cedar', description: 'Warm clay-toned wool on cedar. The quiet richness of autumn, earthy and contemplative.' },
      { title: 'Fuyu', tagline: 'Charcoal · Boucle · Oak', description: 'Deep charcoal boucle on dark oak. The profound stillness of winter, silent and serene.' },
    ],
    countSuffix: 'pieces',
  },
  products: {
    kicker: 'Signature pieces',
    title: 'The most cherished sofas in quiet homes',
    addLabel: 'Enquire now',
    items: [
      { name: 'Kyoto Platform 3-Seater', fabric: 'Sage linen · Cedar', badge: 'Iconic' },
      { name: 'Seiza Loveseat', fabric: 'Cream hemp · Bamboo', badge: 'New' },
      { name: 'Zazen Lounge Chair', fabric: 'Clay wool · Cedar', badge: '' },
      { name: 'Engawa Daybed', fabric: 'Charcoal boucle · Oak', badge: 'Limited' },
      { name: 'Tatami Modular', fabric: 'Natural linen · Cedar', badge: 'Bespoke' },
      { name: 'Roji Bench', fabric: 'Undyed hemp · Oak', badge: '' },
    ],
  },
  stats: { items: [{ label: 'Years of quiet craftsmanship' }, { label: 'Hand-shaped pieces delivered' }, { label: 'Artisans per piece' }, { label: 'Quiet homes furnished' }] },
  steps: {
    kicker: 'The atelier process',
    title: 'From forest to sofa in four mindful steps',
    items: [
      { title: 'Consultation', text: 'A quiet conversation with our atelier — we discuss your space, light, and the silence you wish to cultivate at home.' },
      { title: 'Hand-planing', text: 'Master carpenters hand-plane each cedar frame in our Kyoto workshop, following techniques unchanged since 1972.' },
      { title: 'Natural weaving', text: 'Artisans hand-weave undyed linen and hemp covers — no dyes, no chemicals, only the natural color of the fiber.' },
      { title: 'Lifetime delivery', text: 'Your sofa arrives with white-glove care and a lifetime mending promise — we repair, never replace, for as long as you own it.' },
    ],
  },
  gallery: {
    kicker: 'Spaces & homes',
    title: 'Where Muji-An pieces come to rest',
    captions: ['Kyoto townhouse · Kyoto Platform 3-Seater', 'Tokyo loft · Seiza Loveseat', 'Tea room · Zazen Lounge Chair', 'Garden engawa · Engawa Daybed', 'Mountain retreat · Tatami Modular', 'Temple guesthouse · Roji Bench'],
  },
  testimonials: {
    kicker: 'Our guests',
    title: 'Words from those who live with Muji-An',
    items: [
      { name: 'Aiko Nakamura', role: 'Interior designer · Kyoto', quote: 'The Haru collection transformed my clients\' home into a sanctuary. They say they finally understand what wabi-sabi means — not flaws, but character.' },
      { name: 'Lucas Moreau', role: 'Architect · Paris', quote: 'The low-platform design is revolutionary. My Parisian clients now sit closer to the earth and feel a calm they never expected from a sofa.' },
      { name: 'Sarah Chen', role: 'Wellness author · Singapore', quote: 'I wrote my entire last book sitting on the Zazen lounge chair. It holds you like a meditation cushion — grounded, supported, perfectly quiet.' },
    ],
  },
  faqs: {
    kicker: 'Inquiries',
    title: 'Questions from our quiet guests',
    items: [
      { question: 'Is the low-platform height suitable for everyone?', answer: 'Our platform seats sit 28-32cm from the floor — lower than conventional sofas but higher than floor cushions. Most guests adapt within a day and find the grounded posture deeply comfortable.' },
      { question: 'How is the cedar wood sourced?', answer: 'All hinoki cedar is sustainably harvested from the Yoshino forest in Nara, working with family forestry cooperatives. Each frame carries a certificate of forest origin.' },
      { question: 'Can I commission a custom piece?', answer: 'With quiet pleasure. Our atelier welcomes bespoke commissions — choose your wood, fiber, dimensions, and finish. Lead time is 12-16 weeks for hand-crafted pieces.' },
      { question: 'How does the lifetime mending work?', answer: 'Inspired by kintsugi, we mend any damage — tears, cracks, wear — for as long as you own the piece. We use natural fibers and visible mending, honoring the repair as part of the story.' },
      { question: 'Do you ship internationally?', answer: 'Yes, we ship worldwide with insured white-glove service. International orders include customs handling and professional placement by our partner teams.' },
    ],
  },
  cta: {
    kicker: 'Begin the quiet conversation',
    title: 'Bring the silence of Kyoto home',
    subtitle: 'Schedule a private consultation with our atelier in Kyoto. We will help you choose wood, fiber, and form — crafting a sofa that cultivates stillness in your space.',
    primary: 'Book a private consultation',
    secondary: 'Call the atelier: +81 75 411 5555',
  },
  footerBits: { ratingSuffix: 'rating' },
};

export type Sofa18Content = typeof en;

const vi: Sofa18Content = {
  nav: { home: 'Trang chủ', story: 'Triết lý', collections: 'Bộ sưu tập', products: 'Tác phẩm', gallery: 'Không gian', testimonials: 'Khách hàng', faqs: 'Câu hỏi', contact: 'Liên hệ' },
  hero: {
    badge: 'Muji-An · Sự tĩnh lặng từ 1972',
    title1: 'Nơi mỗi bộ sofa',
    titleHighlight: 'thở',
    title2: 'trong tĩnh lặng',
    subtitle: 'Linen hữu cơ trên gỗ tuyết tùng bào tay, hình dạng tôn vinh sự không hoàn hảo. Mỗi tác phẩm hiện thân của wabi-sabi — vẻ đẹp của điều chưa trọn, điều thời phong, điều không hoàn hảo một cách hoàn hảo.',
    ctaPrimary: 'Khám phá bộ sưu tập',
    ctaSecondary: 'Ghé xưởng',
    badgeNumber: '1972',
    badgeLabel: 'năm bộ sofa Muji-An đầu tiên được tạo hình tại Kyoto',
    promos: [
      { label: 'Linen hữu cơ', text: 'Flax không nhuộm, đan tay' },
      { label: 'Tuyết tùng bào tay', text: 'Hinoki từ rừng Yoshino' },
      { label: 'Thiết kế nền thấp', text: 'Thoải mái扎根, thiền định' },
      { label: 'Bảo hành trọn đời', text: 'Triết lý kintsugi chăm sóc' },
    ],
  },
  marquee: ['Wabi', 'Sabi', 'Muji', 'Thiền', 'Hinoki', 'Linen', 'Kyoto', 'Kuro', 'Shiro', 'Sabi'],
  story: {
    kicker: 'Triết lý của chúng tôi',
    title: 'Ba nguyên tắc của con đường tĩnh lặng',
    items: [
      { title: 'Ôm lấy sự không hoàn hảo', text: 'Muji-An bắt đầu năm 1972 khi Tanaka-sensei tạo hình sofa đầu tiên từ tuyết tùng không hoàn hảo — nốt, thớ gỗ, và tất cả. Chúng tôi tôn vinh điều người khác bỏ qua: cái phong hóa, cái bất thường, cái sống động.' },
      { title: 'Ngồi gần đất', text: 'Hình dáng nền thấp đưa bạn gần mặt đất — tư thế seiza truyền thống Nhật, tái tưởng cho thoải mái hiện đại. Ngồi thấp là cảm thấy扎根, bình, hiện diện.' },
      { title: 'Sửa chữa, không thay thế', text: 'Lấy cảm hứng từ kintsugi — nghệ thuật sửa bằng vàng — chúng tôi hứa bảo trì trọn đời cho mỗi tác phẩm. Vết nứt không phải lỗi mà là câu chuyện, dát vàng và tôn trọng, không giấu.' },
    ],
  },
  collections: {
    kicker: 'Bộ sưu tập',
    title: 'Bốn mùa của cuộc sống tĩnh lặng',
    subtitle: 'Mỗi bộ sưu tập nắm bắt một mùa trong năm Nhật — từ ấm đầu của đất mùa xuân đến tĩnh lặng sâu của tuyết mùa đông.',
    viewLabel: 'Khám phá bộ sưu tập',
    items: [
      { title: 'Haru', tagline: 'Sage · Linen · Tuyết tùng', description: 'Linen sage mềm trên tuyết tùng bào tay. Sự thức tỉnh dịu của đất mùa xuân,扎根 và sống động.' },
      { title: 'Natsu', tagline: 'Kem · Gai · Tre', description: 'Gai kem thoáng với điểm nhấn tre. Độ nhẹ bồng bềnh của shoji mùa hè.' },
      { title: 'Aki', tagline: 'Đất sét · Len · Tuyết tùng', description: 'Len màu đất sét ấm trên tuyết tùng. Sự phong phú tĩnh của mùa thu, đất và chiêm nghiệm.' },
      { title: 'Fuyu', tagline: 'Than · Boucle · Oak', description: 'Boucle than đậm trên oak tối. Tĩnh lặng sâu của mùa đông, im lặng và thanh tịnh.' },
    ],
    countSuffix: 'tác phẩm',
  },
  products: {
    kicker: 'Tác phẩm biểu tượng',
    title: 'Những sofa được trân quý trong ngôi nhà tĩnh',
    addLabel: 'Liên hệ đặt',
    items: [
      { name: 'Kyoto Platform 3 chỗ', fabric: 'Linen sage · Tuyết tùng', badge: 'Biểu tượng' },
      { name: 'Seiza Loveseat', fabric: 'Gai kem · Tre', badge: 'Mới' },
      { name: 'Zazen Lounge Chair', fabric: 'Len đất sét · Tuyết tùng', badge: '' },
      { name: 'Engawa Daybed', fabric: 'Boucle than · Oak', badge: 'Giới hạn' },
      { name: 'Tatami Modular', fabric: 'Linen tự nhiên · Tuyết tùng', badge: 'Định chế' },
      { name: 'Roji Bench', fabric: 'Gai không nhuộm · Oak', badge: '' },
    ],
  },
  stats: { items: [{ label: 'Năm thủ công tĩnh lặng' }, { label: 'Tác phẩm tạo tay đã giao' }, { label: 'Nghệ nhân mỗi tác phẩm' }, { label: 'Ngôi nhà tĩnh đã trang bị' }] },
  steps: {
    kicker: 'Quy trình xưởng',
    title: 'Từ rừng đến sofa trong bốn bước chánh niệm',
    items: [
      { title: 'Tư vấn', text: 'Trò chuyện tĩnh với xưởng — thảo luận không gian, ánh sáng, và sự tĩnh lặng bạn muốn nuôi dưỡng tại nhà.' },
      { title: 'Bào tay', text: 'Thợ mộc bào tay mỗi khung tuyết tùng tại xưởng Kyoto, theo kỹ thuật không đổi từ 1972.' },
      { title: 'Đan tự nhiên', text: 'Nghệ nhân đan tay vỏ linen và gai không nhuộm — không thuốc, không hóa chất, chỉ màu tự nhiên của sợi.' },
      { title: 'Giao hàng trọn đời', text: 'Sofa đến với dịch vụ white-glove và lời hứa bảo trì trọn đời — chúng tôi sửa, không thay thế, suốt đời bạn sở hữu.' },
    ],
  },
  gallery: {
    kicker: 'Không gian & nhà ở',
    title: 'Nơi tác phẩm Muji-An nằm yên',
    captions: ['Nhà phố Kyoto · Kyoto Platform 3 chỗ', 'Loft Tokyo · Seiza Loveseat', 'Phòng trà · Zazen Lounge Chair', 'Engawa vườn · Engawa Daybed', 'Nơi nghỉ núi · Tatami Modular', 'Nhà khách chùa · Roji Bench'],
  },
  testimonials: {
    kicker: 'Khách hàng của chúng tôi',
    title: 'Lời từ những người sống cùng Muji-An',
    items: [
      { name: 'Aiko Nakamura', role: 'Nhà thiết kế nội thất · Kyoto', quote: 'Bộ sưu tập Haru biến nhà khách hàng tôi thành chốn yên tĩnh. Họ nói cuối cùng hiểu wabi-sabi — không phải lỗi, mà là tính cách.' },
      { name: 'Lucas Moreau', role: 'Kiến trúc sư · Paris', quote: 'Thiết kế nền thấp cách mạng. Khách Paris tôi giờ ngồi gần đất hơn và cảm thấy bình yên không ngờ từ một bộ sofa.' },
      { name: 'Sarah Chen', role: 'Tác giả wellness · Singapore', quote: 'Tôi viết trọn cuốn sách cuối ngồi trên ghế Zazen. Nó ôm bạn như gối thiền —扎根, nâng đỡ, hoàn toàn tĩnh.' },
    ],
  },
  faqs: {
    kicker: 'Câu hỏi',
    title: 'Thắc mắc từ khách hàng tĩnh',
    items: [
      { question: 'Chiều cao nền thấp có phù hợp với mọi người?', answer: 'Ghế nền của chúng tôi cao 28-32cm từ sàn — thấp hơn sofa truyền thống nhưng cao hơn gối sàn. Đa số thích nghi trong một ngày và thấy tư thế扎根 rất thoải mái.' },
      { question: 'Gỗ tuyết tùng được lấy từ đâu?', answer: 'Tất cả hinoki khai thác bền vững từ rừng Yoshino ở Nara, hợp tác với hợp tác xã lâm nghiệp gia đình. Mỗi khung có chứng nhận nguồn rừng.' },
      { question: 'Tôi có thể đặt tác phẩm riêng không?', answer: 'Rất hân hạnh. Xưởng chào đón đơn định chế — chọn gỗ, sợi, kích thước, và bề mặt. Thời gian 12-16 tuần cho tác phẩm thủ công.' },
      { question: 'Bảo trì trọn đời hoạt động thế nào?', answer: 'Lấy cảm hứng từ kintsugi, chúng tôi sửa mọi hư hỏng — rách, nứt, mòn — suốt đời bạn sở hữu. Dùng sợi tự nhiên và sửa thấy được, tôn trọng việc sửa như một phần câu chuyện.' },
      { question: 'Có giao hàng quốc tế không?', answer: 'Có, giao toàn cầu với dịch vụ white-glove có bảo hiểm. Đơn quốc tế bao gồm thủ tục hải quan và đặt chuyên nghiệp bởi đội ngũ đối tác.' },
    ],
  },
  cta: {
    kicker: 'Bắt đầu cuộc trò chuyện tĩnh',
    title: 'Mang sự tĩnh lặng của Kyoto về nhà',
    subtitle: 'Đặt tư vấn riêng với xưởng tại Kyoto. Chúng tôi sẽ giúp bạn chọn gỗ, sợi, và hình dáng — chế tác sofa nuôi dưỡng tĩnh lặng trong không gian bạn.',
    primary: 'Đặt tư vấn riêng',
    secondary: 'Gọi xưởng: +81 75 411 5555',
  },
  footerBits: { ratingSuffix: 'đánh giá' },
};

const fr: Sofa18Content = {
  nav: { home: 'Accueil', story: 'Philosophie', collections: 'Collections', products: 'Pièces', gallery: 'Espaces', testimonials: 'Clients', faqs: 'Questions', contact: 'Contact' },
  hero: {
    badge: 'Muji-An · Confort silencieux depuis 1972',
    title1: 'Où chaque canapé',
    titleHighlight: 'respire',
    title2: 'en silence',
    subtitle: 'Lin organique sur cèdre raboté main, des formes qui célèbrent l\'imperfection. Chaque pièce incarne le wabi-sabi — la beauté de l\'inachevé, du patiné, du parfaitement imparfait.',
    ctaPrimary: 'Découvrir les collections',
    ctaSecondary: 'Visiter l\'atelier',
    badgeNumber: '1972',
    badgeLabel: 'année du premier canapé Muji-An façonné à Kyoto',
    promos: [
      { label: 'Lin organique', text: 'Lin non teint, tissé main' },
      { label: 'Cèdre raboté main', text: 'Hinoki de la forêt de Yoshino' },
      { label: 'Design plateforme basse', text: 'Confort enraciné, méditatif' },
      { label: 'Réparation à vie', text: 'Philosophie kintsugi du soin' },
    ],
  },
  marquee: ['Wabi', 'Sabi', 'Muji', 'Zen', 'Hinoki', 'Lin', 'Kyoto', 'Kuro', 'Shiro', 'Sabi'],
  story: {
    kicker: 'Notre philosophie',
    title: 'Trois principes de la voie silencieuse',
    items: [
      { title: 'Accueillir l\'imperfection', text: 'Muji-An a vu le jour en 1972 lorsque Tanaka-sensei a façonné son premier canapé en cèdre imparfait — nœuds, veinures et tout. Nous célébrons ce que d\'autres rejettent : le patiné, l\'irrégulier, le vivant.' },
      { title: 'S\'asseoir près de la terre', text: 'Nos silhouettes plateforme basse vous rapprochent du sol — la posture traditionnelle japonaise du seiza, réinventée pour le confort moderne. S\'asseoir bas, c\'est se sentir enraciné, calme, présent.' },
      { title: 'Réparer, jamais remplacer', text: 'Inspirés par le kintsugi — l\'art de réparer avec l\'or — nous offrons une réparation à vie pour chaque pièce. Une fissure n\'est pas un défaut mais une histoire, dorée et honorée, jamais cachée.' },
    ],
  },
  collections: {
    kicker: 'Collections',
    title: 'Quatre saisons de vie silencieuse',
    subtitle: 'Chaque collection capture une saison de l\'année japonaise — de la première chaleur de la terre printanière au silence profond de la neige hivernale.',
    viewLabel: 'Explorer la collection',
    items: [
      { title: 'Haru', tagline: 'Sauge · Lin · Cèdre', description: 'Lin sauge doux sur cèdre raboté main. L\'éveil tendre de la terre printanière, enraciné et vivant.' },
      { title: 'Natsu', tagline: 'Crème · Chanvre · Bambou', description: 'Chanvre crème respirant avec accents bambou. La légèreté aérienne d\'un shoji d\'été.' },
      { title: 'Aki', tagline: 'Argile · Laine · Cèdre', description: 'Laine argile chaude sur cèdre. La richesse tranquille de l\'automne, terreuse et contemplative.' },
      { title: 'Fuyu', tagline: 'Charbon · Boucle · Chêne', description: 'Boucle charbon profond sur chêne sombre. Le silence profond de l\'hiver, muet et serein.' },
    ],
    countSuffix: 'pièces',
  },
  products: {
    kicker: 'Pièces signature',
    title: 'Les canapés les plus chéris des foyers silencieux',
    addLabel: 'Demander un devis',
    items: [
      { name: 'Kyoto Plateforme 3 places', fabric: 'Lin sauge · Cèdre', badge: 'Icône' },
      { name: 'Seiza Loveseat', fabric: 'Chanvre crème · Bambou', badge: 'Nouveau' },
      { name: 'Zazen Fauteuil', fabric: 'Laine argile · Cèdre', badge: '' },
      { name: 'Engawa Méridienne', fabric: 'Boucle charbon · Chêne', badge: 'Édition limitée' },
      { name: 'Tatami Modulaire', fabric: 'Lin naturel · Cèdre', badge: 'Sur-mesure' },
      { name: 'Roji Banc', fabric: 'Chanvre brut · Chêne', badge: '' },
    ],
  },
  stats: { items: [{ label: 'Années de savoir-faire silencieux' }, { label: 'Pièces façonnées main livrées' }, { label: 'Artisans par pièce' }, { label: 'Foyers silencieux équipés' }] },
  steps: {
    kicker: 'Le processus d\'atelier',
    title: 'De la forêt au canapé en quatre étapes attentives',
    items: [
      { title: 'Consultation', text: 'Une conversation silencieuse avec notre atelier — nous discutons de votre espace, lumière et du silence que vous souhaitez cultiver chez vous.' },
      { title: 'Rabotage main', text: 'Des maîtres charpentiers rabotent main chaque cadre en cèdre dans notre atelier de Kyoto, suivant des techniques inchangées depuis 1972.' },
      { title: 'Tissage naturel', text: 'Des artisans tissent main les housses de lin et chanvre non teints — ni teinture, ni produit chimique, uniquement la couleur naturelle de la fibre.' },
      { title: 'Livraison à vie', text: 'Votre canapé arrive avec service gants blancs et une promesse de réparation à vie — nous réparons, jamais remplaçons, tant que vous le possédez.' },
    ],
  },
  gallery: {
    kicker: 'Espaces et maisons',
    title: 'Où les pièces Muji-An viennent se reposer',
    captions: ['Maison de ville Kyoto · Kyoto 3 places', 'Loft Tokyo · Seiza Loveseat', 'Salle de thé · Zazen Fauteuil', 'Engawa jardin · Engawa Méridienne', 'Retraite montagne · Tatami Modulaire', 'Maison d\'hôtes temple · Roji Banc'],
  },
  testimonials: {
    kicker: 'Nos clients',
    title: 'Paroles de ceux qui vivent avec Muji-An',
    items: [
      { name: 'Aiko Nakamura', role: 'Designer d\'intérieur · Kyoto', quote: 'La collection Haru a transformé la maison de mes clients en sanctuaire. Ils disent qu\'ils comprennent enfin le wabi-sabi — non des défauts, mais du caractère.' },
      { name: 'Lucas Moreau', role: 'Architecte · Paris', quote: 'Le design plateforme basse est révolutionnaire. Mes clients parisiens s\'assoient désormais plus près de la terre et ressentent un calme qu\'ils n\'attendaient pas d\'un canapé.' },
      { name: 'Sarah Chen', role: 'Auteure bien-être · Singapour', quote: 'J\'ai écrit tout mon dernier livre assise sur le fauteuil Zazen. Il vous porte comme un coussin de méditation — enraciné, soutenu, parfaitement silencieux.' },
    ],
  },
  faqs: {
    kicker: 'Questions',
    title: 'Questions de nos clients silencieux',
    items: [
      { question: 'La hauteur plateforme basse convient-elle à tous ?', answer: 'Nos assises plateforme se trouvent à 28-32 cm du sol — plus basses que les canapés classiques mais plus hautes que des coussins au sol. La plupart s\'adaptent en un jour et trouvent la posture enracinée profondément confortable.' },
      { question: 'Comment le cèdre est-il sourcé ?', answer: 'Tout le cèdre hinoki est récolté durablement dans la forêt de Yoshino à Nara, en collaboration avec des coopératives forestières familiales. Chaque cadre porte un certificat d\'origine forestière.' },
      { question: 'Puis-je commander une pièce sur-mesure ?', answer: 'Avec plaisir silencieux. Notre atelier accueille les commandes sur-mesure — choisissez bois, fibre, dimensions et finition. Délai de 12 à 16 semaines pour les pièces façonnées main.' },
      { question: 'Comment fonctionne la réparation à vie ?', answer: 'Inspirés du kintsugi, nous réparons tout dommage — déchirures, fissures, usure — tant que vous possédez la pièce. Nous utilisons des fibres naturelles et une réparation visible, honorant la réparation comme partie de l\'histoire.' },
      { question: 'Livrez-vous à l\'international ?', answer: 'Oui, nous expédions mondialement avec service gants blancs assuré. Les commandes internationales incluent le dédouanement et l\'installation professionnelle par nos équipes partenaires.' },
    ],
  },
  cta: {
    kicker: 'Engagez la conversation silencieuse',
    title: 'Ramenez le silence de Kyoto à la maison',
    subtitle: 'Planifiez une consultation privée avec notre atelier à Kyoto. Nous vous aiderons à choisir bois, fibre et forme — créant un canapé qui cultive le silence dans votre espace.',
    primary: 'Réserver une consultation privée',
    secondary: 'Appeler l\'atelier : +81 75 411 5555',
  },
  footerBits: { ratingSuffix: 'avis' },
};

const cn: Sofa18Content = {
  nav: { home: '首页', story: '哲学', collections: '系列', products: '作品', gallery: '空间', testimonials: '客户', faqs: '问答', contact: '联系我们' },
  hero: {
    badge: 'Muji-An · 自1972年的静谧舒适',
    title1: '每张沙发',
    titleHighlight: '呼吸着',
    title2: '寂静',
    subtitle: '有机亚麻覆于手工刨削的雪松木上,形态颂扬不完美。每件作品体现侘寂——残缺之美、风化之美、完美之不完美。',
    ctaPrimary: '探索系列',
    ctaSecondary: '参观工坊',
    badgeNumber: '1972',
    badgeLabel: 'Muji-An首件沙发在京都塑形之年',
    promos: [
      { label: '有机亚麻', text: '未染色,手工编织亚麻' },
      { label: '手工刨削雪松', text: '吉野森林的桧木' },
      { label: '低台座设计', text: '扎根的冥想式舒适' },
      { label: '终身修复', text: '金继哲学的关怀' },
    ],
  },
  marquee: ['侘', '寂', '无印', '禅', '桧木', '亚麻', '京都', '黑', '白', '寂'],
  story: {
    kicker: '我们的哲学',
    title: '静默之道的三大原则',
    items: [
      { title: '拥抱不完美', text: 'Muji-An始于1972年,当Tanaka老师用不完美的雪松木——节疤、纹理、一切——塑造了他的第一张沙发。我们颂扬他人所弃:风化的、不规则的、有生命的。' },
      { title: '贴近大地而坐', text: '我们的低台座轮廓将您带近地面——日本传统的正座姿态,为现代舒适重新构想。坐低即是感受扎根、平静、当下。' },
      { title: '修复,永不替换', text: '受金继启发——以金修复的艺术——我们为每件作品提供终身修补。裂痕不是瑕疵而是故事,镀金并受敬,永不被隐藏。' },
    ],
  },
  collections: {
    kicker: '系列',
    title: '静默生活的四季',
    subtitle: '每个系列捕捉日本一年中的一季——从春土初暖到冬雪的深邃静默。',
    viewLabel: '探索系列',
    items: [
      { title: 'Haru 春', tagline: '鼠尾草绿 · 亚麻 · 雪松', description: '柔软鼠尾草绿亚麻覆于手工刨削雪松。春土温柔的苏醒,扎根而有生命。' },
      { title: 'Natsu 夏', tagline: '奶油 · 大麻 · 竹', description: '透气奶油大麻配竹质点缀。夏日障子的轻盈通透。' },
      { title: 'Aki 秋', tagline: '陶土 · 羊毛 · 雪松', description: '温暖陶土色羊毛覆于雪松。秋日静谧的丰盈,质朴而沉思。' },
      { title: 'Fuyu 冬', tagline: '炭灰 · 布料 · 橡木', description: '深邃炭灰布料覆于深色橡木。冬日的深邃静默,无声而宁静。' },
    ],
    countSuffix: '件',
  },
  products: {
    kicker: '标志性作品',
    title: '静谧之家中最珍贵的沙发',
    addLabel: '立即咨询',
    items: [
      { name: '京都台座 三人座', fabric: '鼠尾草亚麻 · 雪松', badge: '经典' },
      { name: '正座双人沙发', fabric: '奶油大麻 · 竹', badge: '新品' },
      { name: '坐禅休闲椅', fabric: '陶土羊毛 · 雪松', badge: '' },
      { name: '缘侧躺榻', fabric: '炭灰布料 · 橡木', badge: '限量' },
      { name: '榻榻米模块', fabric: '天然亚麻 · 雪松', badge: '定制' },
      { name: '露地长椅', fabric: '原色大麻 · 橡木', badge: '' },
    ],
  },
  stats: { items: [{ label: '年静谧工艺传承' }, { label: '件手工塑形作品交付' }, { label: '位工匠每件' }, { label: '个静谧之家选用' }] },
  steps: {
    kicker: '工坊流程',
    title: '从森林到沙发,四步正念之旅',
    items: [
      { title: '咨询', text: '与工坊的静谧对话——讨论您的空间、光线,以及您希望在家中培养的寂静。' },
      { title: '手工刨削', text: '木匠大师在京都工坊手工刨削每个雪松框架,遵循自1972年不变的技艺。' },
      { title: '自然编织', text: '工匠手工编织未染色的亚麻和大麻套——无染料、无化学,只有纤维的天然色彩。' },
      { title: '终身配送', text: '沙发以白手套服务送达,附带终身修补承诺——我们修复,永不替换,只要您拥有它。' },
    ],
  },
  gallery: {
    kicker: '空间与家居',
    title: 'Muji-An作品安息之处',
    captions: ['京都町屋 · 京都台座三人座', '东京阁楼 · 正座双人沙发', '茶室 · 坐禅休闲椅', '花园缘侧 · 缘侧躺榻', '山间隐居 · 榻榻米模块', '寺庙客房 · 露地长椅'],
  },
  testimonials: {
    kicker: '我们的客户',
    title: '与Muji-An共处者的感言',
    items: [
      { name: '中村爱子', role: '室内设计师 · 京都', quote: 'Haru系列将我客户的家变成了圣所。他们说终于理解了侘寂——不是瑕疵,而是性格。' },
      { name: 'Lucas Moreau', role: '建筑师 · 巴黎', quote: '低台座设计革命性的。我的巴黎客户现在坐得更近大地,感受到了从未在沙发上期望过的平静。' },
      { name: '陈莎拉', role: '健康作家 · 新加坡', quote: '我整本上一本书都坐在坐禅休闲椅上写的。它像冥想坐垫一样托着你——扎根、支撑、完美寂静。' },
    ],
  },
  faqs: {
    kicker: '咨询',
    title: '静谧客户的常见问题',
    items: [
      { question: '低台座高度适合所有人吗?', answer: '我们的台座座椅距地面28-32厘米——比传统沙发低但比地板坐垫高。大多数人一天内就能适应,并觉得扎根的姿势非常舒适。' },
      { question: '雪松木如何采购?', answer: '所有桧木雪松可持续采伐自奈良吉野森林,与家庭林业合作社合作。每个框架都附有森林来源证书。' },
      { question: '我可以定制作品吗?', answer: '以静谧之心欢迎。我们的工坊欢迎定制委托——选择木材、纤维、尺寸和饰面。手工作品的交货期12-16周。' },
      { question: '终身修复如何运作?', answer: '受金继启发,我们修复任何损伤——撕裂、裂缝、磨损——只要您拥有该作品。我们使用天然纤维和可见修复,将修复视为故事的一部分加以尊重。' },
      { question: '你们提供国际配送吗?', answer: '是的,我们通过保险白手套服务全球发货。国际订单包括清关和由合作伙伴团队的专业安装。' },
    ],
  },
  cta: {
    kicker: '开启静谧对话',
    title: '把京都的寂静带回家',
    subtitle: '预约在京都与我们工坊的私密咨询。我们将帮助您选择木材、纤维和形态——打造在您空间中培养寂静的沙发。',
    primary: '预约私密咨询',
    secondary: '致电工坊:+81 75 411 5555',
  },
  footerBits: { ratingSuffix: '评分' },
};

const ar: Sofa18Content = {
  nav: { home: 'الرئيسية', story: 'الفلسفة', collections: 'المجموعات', products: 'القطع', gallery: 'الفضاءات', testimonials: 'العملاء', faqs: 'الأسئلة', contact: 'تواصل معنا' },
  hero: {
    badge: 'موجي-آن · راحة صامتة منذ 1972',
    title1: 'حيث كل أريكة',
    titleHighlight: 'تتنفس',
    title2: 'في صمت',
    subtitle: 'كتان عضوي على خشب الأرز المشغول يدوياً، أشكال تحتفي بالنقص. كل قطعة تجسد وابي-سابي — جمال الناقص، العتيق، غير المكتمل بشكل مثالي.',
    ctaPrimary: 'اكتشف المجموعات',
    ctaSecondary: 'زر الورشة',
    badgeNumber: '1972',
    badgeLabel: 'سنة تشكيل أول أريكة موجي-آن في كيوتو',
    promos: [
      { label: 'كتان عضوي', text: 'كتان غير مصبوغ منسوج يدوياً' },
      { label: 'أرز مشغول يدوياً', text: 'هينوكي من غابة يوشينو' },
      { label: 'تصميم منصة منخفضة', text: 'راحة متجذرة، تأملية' },
      { label: 'إصلاح مدى الحياة', text: 'فلسفة كينتسوجي للرعاية' },
    ],
  },
  marquee: ['وابي', 'سابي', 'موجي', 'زن', 'هينوكي', 'كتان', 'كيوتو', 'كورو', 'شيرو', 'سابي'],
  story: {
    kicker: 'فلسفتنا',
    title: 'ثلاثة مبادئ للطريق الصامت',
    items: [
      { title: 'احتضن النقص', text: 'بدأت موجي-آن عام 1972 عندما شكّل تاناكا-سينسي أول أريكة من أرز غير مثالي — عُقد، عروق، وكل شيء. نحن نحتفي بما يرفضه الآخرون: العتيق، غير المنتظم، الحي.' },
      { title: 'اجلس قريباً من الأرض', text: 'أشكالنا المنخفضة تقربك من الأرض — وضعية السيزا اليابانية التقليدية، مُعادة للراحة الحديثة. الجلوس منخفضاً هو الشعور بالتجذر، الهدوء، الحضور.' },
      { title: 'أصلح، لا تستبدل', text: 'مستوحى من كينتسوجي — فن الإصلاح بالذهب — نحن نقدم إصلاحاً مدى الحياة لكل قطعة. الشق ليس عيباً بل قصة، مذهبة ومُكرمة، لا مخفية أبداً.' },
    ],
  },
  collections: {
    kicker: 'المجموعات',
    title: 'أربع فصول للحياة الصامتة',
    subtitle: 'كل مجموعة تلتقط فصلاً من السنة اليابانية — من دفء الأرض الربيعي الأول إلى سكون الثلج الشتوي العميق.',
    viewLabel: 'استكشف المجموعة',
    items: [
      { title: 'هارو', tagline: 'ميرمية · كتان · أرز', description: 'كتان ميرمية ناعم على أرز مشغول يدوياً. الصحوة اللطيفة للأرض الربيعية، متجذرة وحية.' },
      { title: 'ناتسو', tagline: 'كريمي · قنب · خيزران', description: 'قنب كريمي تنفسي بلمسات خيزران. خفة شوجي الصيفي الهوائية.' },
      { title: 'أكي', tagline: 'طين · صوف · أرز', description: 'صوف طيني دافئ على أرز. ثراء الخريف الهادئ، ترابي وتأملي.' },
      { title: 'فويو', tagline: 'فحمي · بوكليه · بلوط', description: 'بوكليه فحمي عميق على بلوط داكن. سكون الشتاء العميق، صامت وهادئ.' },
    ],
    countSuffix: 'قطعة',
  },
  products: {
    kicker: 'القطع المميزة',
    title: 'أثمن الأرائك في البيوت الهادئة',
    addLabel: 'استفسر الآن',
    items: [
      { name: 'كيوتو منصة 3 مقاعد', fabric: 'كتان ميرمية · أرز', badge: 'أيقونة' },
      { name: 'سيزا مقعدين', fabric: 'قنب كريمي · خيزران', badge: 'جديد' },
      { name: 'زازن كرسي', fabric: 'صوف طيني · أرز', badge: '' },
      { name: 'إنغاوا أريكة', fabric: 'بوكليه فحمي · بلوط', badge: 'محدود' },
      { name: 'تاتامي موديولار', fabric: 'كتان طبيعي · أرز', badge: 'تفصيل خاص' },
      { name: 'روجي مقعد', fabric: 'قنب خام · بلوط', badge: '' },
    ],
  },
  stats: { items: [{ label: 'سنة من الحرفية الصامتة' }, { label: 'قطعة مشكلة يدوياً تم تسليمها' }, { label: 'حرفي لكل قطعة' }, { label: 'بيت هادئ تم تأثيثه' }] },
  steps: {
    kicker: 'عملية الورشة',
    title: 'من الغابة إلى الأريكة في أربع خطوات يقظة',
    items: [
      { title: 'استشارة', text: 'محادثة صامتة مع ورشتنا — نناقش مساحتك وضوءك والصمت الذي ترغب في تنميته في منزلك.' },
      { title: 'شغل يدوي', text: 'نجارون مهرة يشغلون يدوياً كل إطار أرز في ورشة كيوتو، بأساليب لم تتغير منذ 1972.' },
      { title: 'نسج طبيعي', text: 'حرفيون ينسجون يدوياً أغطية كتان وقنب غير مصبوغة — لا أصباغ، لا كيماويات، فقط لون الألياف الطبيعي.' },
      { title: 'توصيل مدى الحياة', text: 'تصلك أريكتك بخدمة القفازات البيضاء ووعد إصلاح مدى الحياة — نحن نصلح، لا نستبدل، ما دمت تملكها.' },
    ],
  },
  gallery: {
    kicker: 'الفضاءات والمنازل',
    title: 'حيث تأتي قطع موجي-آن لترتاح',
    captions: ['منزل كيوتو · كيوتو 3 مقاعد', 'لوفت طوكيو · سيزا', 'غرفة الشاي · زازن', 'إنغاوا الحديقة · إنغاوا', 'ملجأ جبلي · تاتامي', 'بيت ضيافة المعبد · روجي'],
  },
  testimonials: {
    kicker: 'عملاؤنا',
    title: 'كلمات من يعيشون مع موجي-آن',
    items: [
      { name: 'أيكو ناكامورا', role: 'مصممة ديكور · كيوتو', quote: 'مجموعة هارو حوّلت منزل عملائي إلى ملاذ. يقولون أنهم فهموا أخيراً وابي-سابي — ليس عيوباً، بل شخصية.' },
      { name: 'لوكاس مورو', role: 'مهندس معماري · باريس', quote: 'تصميم المنصة المنخفضة ثوري. عملائي الباريسيون يجلسون أقرب للأرض ويشعرون بهدوء لم يتوقعوه من أريكة.' },
      { name: 'سارة تشين', role: 'كاتبة العافية · سنغافورة', quote: 'كتبت كتابي الأخير كله وأنا جالسة على كرسي زازن. يحتضنك كوسادة تأمل — متجذر، داعم، صامت تماماً.' },
    ],
  },
  faqs: {
    kicker: 'استفسارات',
    title: 'أسئلة من عملائنا الهادئين',
    items: [
      { question: 'هل ارتفاع المنصة المنخفضة مناسب للجميع؟', answer: 'مقاعدنا المنخفضة ترتفع 28-32 سم عن الأرض — أقل من الأرائك التقليدية لكن أعلى من وسائد الأرض. معظم الناس يتكيفون في يوم ويجدون الوضعية المتجذرة مريحة جداً.' },
      { question: 'كيف يُ sourced خشب الأرز؟', answer: 'كل أرز هينوكي يُحصد بشكل مستدام من غابة يوشينو في نارا، بالتعاون مع تعاونيات حراجية عائلية. كل إطار يحمل شهادة منشأ حرجي.' },
      { question: 'هل يمكنني طلب قطعة مخصصة؟', answer: 'بكل سرور هادئ. ورشتنا ترحب بالطلبات المخصصة — اختر خشبك، أليافك، أبعادك، وتشطيبك. مدة التسليم 12-16 أسبوعاً للقطع المصنوعة يدوياً.' },
      { question: 'كيف يعمل الإصلاح مدى الحياة؟', answer: 'مستوحى من كينتسوجي، نحن نصلح أي ضرر — تمزقات، شقوق، تآكل — ما دمت تملك القطعة. نستخدم أليافاً طبيعية وإصلاحاً مرئياً، نكرم الإصلاح كجزء من القصة.' },
      { question: 'هل توصلون دولياً؟', answer: 'نعم، نشحن عالمياً بخدمة القفازات البيضاء المؤمنة. الطلبات الدولية تشمل التخليص الجمركي والتركيب الاحترافي بواسطة فرق شركائنا.' },
    ],
  },
  cta: {
    kicker: 'ابدأ المحادثة الصامتة',
    title: 'أعد صمت كيوتو إلى المنزل',
    subtitle: 'احجز استشارة خاصة مع ورشتنا في كيوتو. سنساعدك في اختيار الخشب والألياف والشكل — صنع أريكة تنمي السكون في مساحتك.',
    primary: 'احجز استشارة خاصة',
    secondary: 'اتصل بالورشة: +81 75 411 5555',
  },
  footerBits: { ratingSuffix: 'تقييم' },
};

export const SOFA18_CONTENT = { en, vi, fr, cn, ar };

export function useSofa18Content() {
  const { currentLang } = useTranslate();
  return SOFA18_CONTENT[currentLang.value as keyof typeof SOFA18_CONTENT] ?? SOFA18_CONTENT.en;
}
