import { useTranslate } from 'src/locales';

// ----------------------------------------------------------------------
// SOFA20 — INDUSTRIAL STEAMPUNK FOUNDRY — full multi-language content dictionary
// ----------------------------------------------------------------------

const en = {
  nav: { home: 'Home', story: 'Foundry', collections: 'Collections', products: 'Pieces', gallery: 'Lofts', testimonials: 'Clients', faqs: 'Inquiries', contact: 'Contact' },
  hero: {
    badge: 'Ironworks & Co · Forging comfort since 1898',
    title1: 'Where every sofa',
    titleHighlight: 'forged',
    title2: 'in fire and steel',
    subtitle: 'Full-grain leather on hand-welded steel frames, copper-riveted seams, and Edison-bulb warmth. Each piece carries the raw soul of the industrial revolution — built to outlast generations.',
    ctaPrimary: 'Discover collections',
    ctaSecondary: 'Tour the foundry',
    badgeNumber: '1898',
    badgeLabel: 'year the first Ironworks sofa was forged in Manchester',
    promos: [
      { label: 'Full-grain leather', text: 'Hand-tanned, aged to perfection' },
      { label: 'Hand-welded steel', text: 'Forged frames, built to outlast' },
      { label: 'Copper rivets', text: 'Hand-set, never glued' },
      { label: 'Edison-bulb glow', text: 'Warm, amber, timeless' },
    ],
  },
  marquee: ['Forged', 'Copper', 'Rivets', 'Leather', 'Steam', 'Brass', 'Iron', 'Foundry', 'Gears', 'Manchester'],
  story: {
    kicker: 'Our foundry',
    title: 'Three fires that shaped Ironworks',
    items: [
      { title: 'Forged in Manchester', text: 'Ironworks & Co began in 1898 when blacksmith Edward Holt welded his first sofa frame from railway steel in a Manchester foundry. Over 125 years later, we still forge every frame by hand.' },
      { title: 'Tanned by tradition', text: 'Our full-grain leather is vegetable-tanned in oak pits over 60 days — the same method used in 1898. No chemicals, no shortcuts. Just time, bark, and water, yielding leather that ages like whiskey.' },
      { title: 'Riveted by hand', text: 'Every seam is set with solid copper rivets, hammered by hand — never glued, never stitched with synthetic thread. A riveted Ironworks sofa can be reupholstered forever, frame enduring for a century.' },
    ],
  },
  collections: {
    kicker: 'Collections',
    title: 'Four furnaces of industrial comfort',
    subtitle: 'Each collection captures a different era of the industrial revolution — from the soot-blackened forge to the warm glow of the engineer\'s parlour.',
    viewLabel: 'Explore collection',
    items: [
      { title: 'The Forge', tagline: 'Espresso · Leather · Steel', description: 'Deep espresso leather on hand-welded steel. The raw intensity of the blacksmith\'s forge, built for a century of use.' },
      { title: 'The Locomotive', tagline: 'Copper · Leather · Brass', description: 'Burnt orange leather with copper-riveted seams and brass accents. The power and warmth of the steam age.' },
      { title: 'The Parlour', tagline: 'Chestnut · Velvet · Iron', description: 'Chestnut leather with burnt-orange velvet cushions on iron frames. The refined comfort of the engineer\'s study.' },
      { title: 'The Workshop', tagline: 'Charcoal · Canvas · Steel', description: 'Charcoal canvas on raw steel with copper detailing. The honest utility of the craftsman\'s bench.' },
    ],
    countSuffix: 'pieces',
  },
  products: {
    kicker: 'Signature pieces',
    title: 'The most rugged sofas ever forged',
    addLabel: 'Enquire now',
    items: [
      { name: 'Manchester Chesterfield 3-Seater', fabric: 'Espresso leather · Steel', badge: 'Iconic' },
      { name: 'Locomotive Loveseat', fabric: 'Copper leather · Brass', badge: 'New' },
      { name: 'Forge Lounge Chair', fabric: 'Chestnut leather · Iron', badge: '' },
      { name: 'Engineer\'s Daybed', fabric: 'Velvet · Iron', badge: 'Limited' },
      { name: 'Rivet Modular', fabric: 'Canvas · Steel', badge: 'Bespoke' },
      { name: 'Anvil Bench', fabric: 'Raw leather · Steel', badge: '' },
    ],
  },
  stats: { items: [{ label: 'Years of foundry heritage' }, { label: 'Frames forged and delivered' }, { label: 'Rivets set by hand' }, { label: 'Lofts furnished worldwide' }] },
  steps: {
    kicker: 'The forging process',
    title: 'From fire to sofa in four industrial steps',
    items: [
      { title: 'Consultation', text: 'A no-nonsense conversation with our foundry — we discuss your space, your wear patterns, and how many generations you expect this sofa to serve.' },
      { title: 'Steel forging', text: 'Master welders hand-forge each steel frame in our Manchester foundry, following techniques unchanged since 1898. Every joint is tested to bear 500kg.' },
      { title: 'Leather tanning', text: 'Full-grain leather is vegetable-tanned in oak pits over 60 days, then hand-cut and copper-riveted — no glue, no shortcuts, only fire and iron.' },
      { title: 'Foundry delivery', text: 'Your sofa arrives with white-glove care and a lifetime reupholstering guarantee — the frame is forever, the leather can be replaced for generations.' },
    ],
  },
  gallery: {
    kicker: 'Lofts & spaces',
    title: 'Where Ironworks pieces come to life',
    captions: ['Manchester loft · Manchester Chesterfield', 'Brooklyn warehouse · Locomotive Loveseat', 'Chicago loft · Forge Lounge Chair', 'London studio · Engineer\'s Daybed', 'Berlin atelier · Rivet Modular', 'Glasgow pub · Anvil Bench'],
  },
  testimonials: {
    kicker: 'Our clients',
    title: 'Words from those who live with Ironworks',
    items: [
      { name: 'James Hartwell', role: 'Architect · Manchester', quote: 'The Forge collection is like sitting in a Victorian railway hotel — raw, warm, indestructible. My clients say their loft finally feels like it has a soul.' },
      { name: 'Sarah Castellan', role: 'Interior designer · Brooklyn', quote: 'I\'ve specified Ironworks for a dozen loft projects. The steel frames outlast everything. Fifteen years in, they look better than the day they arrived.' },
      { name: 'Marcus Webb', role: 'Hotel owner · London', quote: 'We furnished our entire lobby with the Locomotive collection. Guests constantly ask about the copper rivets — they\'re conversation pieces as much as seating.' },
    ],
  },
  faqs: {
    kicker: 'Inquiries',
    title: 'Questions from our foundry clients',
    items: [
      { question: 'How durable is the steel frame?', answer: 'Every frame is hand-welded from structural-grade steel and load-tested to 500kg. We guarantee the frame for life — it will outlast the leather, the cushions, and likely the building it sits in.' },
      { question: 'How does the leather age?', answer: 'Our full-grain vegetable-tanned leather is designed to age beautifully. Over 5-10 years it develops a rich patina — darker, softer, more charactered. Scratches and wear become part of its story, like a favorite leather jacket.' },
      { question: 'Can I commission a custom piece?', answer: 'Absolutely. Our foundry thrives on bespoke commissions — choose your leather, steel finish, dimensions, and rivet pattern. Lead time is 8-12 weeks for hand-forged pieces.' },
      { question: 'How does the lifetime reupholstering work?', answer: 'The steel frame is guaranteed forever. When the leather eventually wears — after 15-25 years — we reupholster with fresh leather, reusing the same frame. You pay only for materials and labor.' },
      { question: 'Do you ship internationally?', answer: 'Yes, we ship worldwide with insured freight service. International orders include customs handling and professional placement by our partner teams.' },
    ],
  },
  cta: {
    kicker: 'Begin the forge',
    title: 'Bring the soul of the foundry home',
    subtitle: 'Schedule a private consultation with our foundry in Manchester. We will help you choose leather, steel, and finish — forging a sofa built to outlast generations.',
    primary: 'Book a foundry tour',
    secondary: 'Call the foundry: +44 161 839 1898',
  },
  footerBits: { ratingSuffix: 'rating' },
};

export type Sofa20Content = typeof en;

const vi: Sofa20Content = {
  nav: { home: 'Trang chủ', story: 'Xưởng đúc', collections: 'Bộ sưu tập', products: 'Tác phẩm', gallery: 'Loft', testimonials: 'Khách hàng', faqs: 'Câu hỏi', contact: 'Liên hệ' },
  hero: {
    badge: 'Ironworks & Co · Rèn sự thoải mái từ 1898',
    title1: 'Nơi mỗi bộ sofa',
    titleHighlight: 'được rèn',
    title2: 'trong lửa và thép',
    subtitle: 'Da full-grain trên khung thép hàn tay, đường may đinh tán đồng, và ánh ấm Edison. Mỗi tác phẩm mang linh hồn thô của cuộc cách mạng công nghiệp — xây để tồn tại qua nhiều thế hệ.',
    ctaPrimary: 'Khám phá bộ sưu tập',
    ctaSecondary: 'Tham quan xưởng đúc',
    badgeNumber: '1898',
    badgeLabel: 'năm bộ sofa Ironworks đầu tiên được rèn tại Manchester',
    promos: [
      { label: 'Da full-grain', text: 'Thuộc da tay, lão hóa hoàn hảo' },
      { label: 'Thép hàn tay', text: 'Khung rèn, xây để trường tồn' },
      { label: 'Đinh tán đồng', text: 'Đặt tay, không bao giờ dán' },
      { label: 'Ánh Edison', text: 'Ấm, hổ phách, vĩnh cửu' },
    ],
  },
  marquee: ['Rèn', 'Đồng', 'Tán', 'Da', 'Hơi nước', 'Thau', 'Sắt', 'Xưởng', 'Bánh răng', 'Manchester'],
  story: {
    kicker: 'Xưởng đúc của chúng tôi',
    title: 'Ba ngọn lửa định hình Ironworks',
    items: [
      { title: 'Rèn tại Manchester', text: 'Ironworks & Co bắt đầu năm 1898 khi thợ rèn Edward Holt hàn khung sofa đầu tiên từ thép đường sắt trong xưởng Manchester. Hơn 125 năm sau, chúng tôi vẫn rèn mỗi khung bằng tay.' },
      { title: 'Thuộc da truyền thống', text: 'Da full-grain được thuộc bằng rau quả trong hố sồi 60 ngày — cùng phương pháp năm 1898. Không hóa chất, không lối tắt. Chỉ thời gian, vỏ cây, và nước, tạo da lão hóa như rượu.' },
      { title: 'Tán bằng tay', text: 'Mỗi đường may được gắn đinh tán đồng đặc, đóng bằng tay — không dán, không may chỉ tổng hợp. Sofa Ironworks tán đinh có thể bọc lại mãi mãi, khung tồn tại một thế kỷ.' },
    ],
  },
  collections: {
    kicker: 'Bộ sưu tập',
    title: 'Bốn lò nung của sự thoải mái công nghiệp',
    subtitle: 'Mỗi bộ sưu tập nắm bắt một thời đại khác của cuộc cách mạng công nghiệp — từ lò rèn đen than đến ánh ấm của phòng kỹ sư.',
    viewLabel: 'Khám phá bộ sưu tập',
    items: [
      { title: 'The Forge', tagline: 'Espresso · Da · Thép', description: 'Da espresso đậm trên thép hàn tay. Cường độ thô của lò rèn, xây cho một thế kỷ sử dụng.' },
      { title: 'The Locomotive', tagline: 'Đồng · Da · Thau', description: 'Da cam cháy với đường may tán đồng và điểm thau. Sức mạnh và ấm của thời hơi nước.' },
      { title: 'The Parlour', tagline: 'Hạt dẻ · Nhung · Sắt', description: 'Da hạt dẻ với đệm nhung cam cháy trên khung sắt. Sự thoải mái tinh tế của phòng kỹ sư.' },
      { title: 'The Workshop', tagline: 'Than · Vải · Thép', description: 'Vải than trên thép thô với chi tiết đồng. Sự trung thực của bến thợ thủ công.' },
    ],
    countSuffix: 'tác phẩm',
  },
  products: {
    kicker: 'Tác phẩm biểu tượng',
    title: 'Những sofa bền bỉ nhất từng được rèn',
    addLabel: 'Liên hệ đặt',
    items: [
      { name: 'Manchester Chesterfield 3 chỗ', fabric: 'Da espresso · Thép', badge: 'Biểu tượng' },
      { name: 'Locomotive Loveseat', fabric: 'Da đồng · Thau', badge: 'Mới' },
      { name: 'Forge Lounge Chair', fabric: 'Da hạt dẻ · Sắt', badge: '' },
      { name: 'Engineer\'s Daybed', fabric: 'Nhung · Sắt', badge: 'Giới hạn' },
      { name: 'Rivet Modular', fabric: 'Vải · Thép', badge: 'Định chế' },
      { name: 'Anvil Bench', fabric: 'Da thô · Thép', badge: '' },
    ],
  },
  stats: { items: [{ label: 'Năm di sản xưởng đúc' }, { label: 'Khung rèn đã giao' }, { label: 'Đinh tán đặt tay' }, { label: 'Loft đã trang bị toàn cầu' }] },
  steps: {
    kicker: 'Quy trình rèn',
    title: 'Từ lửa đến sofa trong bốn bước công nghiệp',
    items: [
      { title: 'Tư vấn', text: 'Trò chuyện thẳng thắn với xưởng — thảo luận không gian, patterns mài mòn, và bao nhiêu thế hệ bạn kỳ vọng sofa này phục vụ.' },
      { title: 'Rèn thép', text: 'Thợ hàn bậc thầy rèn tay mỗi khung thép tại xưởng Manchester, theo kỹ thuật không đổi từ 1898. Mỗi mối hàn chịu 500kg.' },
      { title: 'Thuộc da', text: 'Da full-grain thuộc bằng rau quả trong hố sồi 60 ngày, rồi cắt tay và tán đồng — không dán, không lối tắt, chỉ lửa và sắt.' },
      { title: 'Giao hàng xưởng', text: 'Sofa đến với dịch vụ white-glove và bảo hành bọc lại trọn đời — khung vĩnh viễn, da có thể thay qua nhiều thế hệ.' },
    ],
  },
  gallery: {
    kicker: 'Loft & không gian',
    title: 'Nơi tác phẩm Ironworks sống dậy',
    captions: ['Loft Manchester · Manchester Chesterfield', 'Kho Brooklyn · Locomotive Loveseat', 'Loft Chicago · Forge Lounge Chair', 'Studio London · Engineer\'s Daybed', 'Atelier Berlin · Rivet Modular', 'Pub Glasgow · Anvil Bench'],
  },
  testimonials: {
    kicker: 'Khách hàng của chúng tôi',
    title: 'Lời từ những người sống cùng Ironworks',
    items: [
      { name: 'James Hartwell', role: 'Kiến trúc sư · Manchester', quote: 'Bộ sưu tập Forge như ngồi trong khách sạn đường sắt Victoria — thô, ấm, bất khả phá. Khách hàng tôi nói loft cuối cùng có linh hồn.' },
      { name: 'Sarah Castellan', role: 'Nhà thiết kế nội thất · Brooklyn', quote: 'Tôi đã chọn Ironworks cho hàng chục dự án loft. Khung thép tồn tại lâu hơn mọi thứ. Mười lăm năm, trông còn đẹp hơn ngày đầu.' },
      { name: 'Marcus Webb', role: 'Chủ khách sạn · London', quote: 'Chúng tôi trang bị cả sảnh bằng bộ sưu tập Locomotive. Khách liên tục hỏi về đinh tán đồng — chúng là đề tài nói chuyện nhiều như chỗ ngồi.' },
    ],
  },
  faqs: {
    kicker: 'Câu hỏi',
    title: 'Thắc mắc từ khách hàng xưởng đúc',
    items: [
      { question: 'Khung thép bền thế nào?', answer: 'Mỗi khung được hàn tay từ thép cấp cấu trúc và test chịu 500kg. Chúng tôi bảo hành khung trọn đời — nó sẽ tồn tại lâu hơn da, đệm, và có thể cả tòa nhà chứa nó.' },
      { question: 'Da lão hóa thế nào?', answer: 'Da full-grain thuộc rau quả được thiết kế để lão hóa đẹp. Trong 5-10 năm phát triển patina đậm — tối hơn, mềm hơn, cá tính hơn. Vết trầy và mài mòn trở thành câu chuyện, như áo da yêu thích.' },
      { question: 'Tôi có thể đặt tác phẩm riêng?', answer: 'Chắc chắn. Xưởng hứng khởi với đơn định chế — chọn da, bề mặt thép, kích thước, và pattern tán. Thời gian 8-12 tuần cho tác phẩm rèn tay.' },
      { question: 'Bảo hành bọc lại trọn đời thế nào?', answer: 'Khung thép bảo hành mãi mãi. Khi da mòn — sau 15-25 năm — chúng tôi bọc lại da mới, tái dụng khung. Bạn chỉ trả vật liệu và nhân công.' },
      { question: 'Có giao hàng quốc tế?', answer: 'Có, giao toàn cầu với dịch vụ vận tải có bảo hiểm. Đơn quốc tế bao gồm thủ tục hải quan và đặt chuyên nghiệp bởi đội ngũ đối tác.' },
    ],
  },
  cta: {
    kicker: 'Bắt đầu rèn',
    title: 'Mang linh hồn xưởng đúc về nhà',
    subtitle: 'Đặt tư vấn riêng với xưởng tại Manchester. Chúng tôi sẽ giúp bạn chọn da, thép, và bề mặt — rèn sofa xây để tồn tại qua nhiều thế hệ.',
    primary: 'Đặt tham quan xưởng',
    secondary: 'Gọi xưởng: +44 161 839 1898',
  },
  footerBits: { ratingSuffix: 'đánh giá' },
};

const fr: Sofa20Content = {
  nav: { home: 'Accueil', story: 'Fonderie', collections: 'Collections', products: 'Pièces', gallery: 'Lofts', testimonials: 'Clients', faqs: 'Questions', contact: 'Contact' },
  hero: {
    badge: 'Ironworks & Co · Forger le confort depuis 1898',
    title1: 'Où chaque canapé',
    titleHighlight: 'forgé',
    title2: 'dans le feu et l\'acier',
    subtitle: 'Cuir pleine fleur sur cadres en acier soudés main, coutures rivetées en cuivre, et chaleur d\'ampoule Edison. Chaque pièce porte l\'âme brute de la révolution industrielle — bâtie pour traverser les générations.',
    ctaPrimary: 'Découvrir les collections',
    ctaSecondary: 'Visiter la fonderie',
    badgeNumber: '1898',
    badgeLabel: 'année du premier canapé Ironworks forgé à Manchester',
    promos: [
      { label: 'Cuir pleine fleur', text: 'Tanné main, vieilli à perfection' },
      { label: 'Acier soudé main', text: 'Cadres forgés, bâtis pour durer' },
      { label: 'Rivets en cuivre', text: 'Posés main, jamais collés' },
      { label: 'Lueur Edison', text: 'Chaud, ambre, intemporel' },
    ],
  },
  marquee: ['Forgé', 'Cuivre', 'Rivets', 'Cuir', 'Vapeur', 'Laiton', 'Fer', 'Fonderie', 'Engrenages', 'Manchester'],
  story: {
    kicker: 'Notre fonderie',
    title: 'Trois feux qui ont façonné Ironworks',
    items: [
      { title: 'Forgé à Manchester', text: 'Ironworks & Co a vu le jour en 1898 lorsque le forgeron Edward Holt a soudé son premier cadre de canapé en acier de chemin de fer dans une fonderie de Manchester. Plus de 125 ans plus tard, nous forgeons encore chaque cadre à la main.' },
      { title: 'Tanné par tradition', text: 'Notre cuir pleine fleur est tanné végétal dans des fosses de chêne pendant 60 jours — la même méthode qu\'en 1898. Sans produits chimiques, sans raccourcis. Juste le temps, l\'écorce et l\'eau, donnant un cuir qui vieillit comme le whisky.' },
      { title: 'Riveté à la main', text: 'Chaque couture est fixée avec des rivets en cuivre massif, martelés à la main — jamais collés, jamais cousus avec du fil synthétique. Un canapé Ironworks riveté peut être retapissé à l\'infini, le cadre durmant un siècle.' },
    ],
  },
  collections: {
    kicker: 'Collections',
    title: 'Quatre fours du confort industriel',
    subtitle: 'Chaque collection capture une époque différente de la révolution industrielle — de la forge noircie de suie à la lueur chaude du salon de l\'ingénieur.',
    viewLabel: 'Explorer la collection',
    items: [
      { title: 'The Forge', tagline: 'Espresso · Cuir · Acier', description: 'Cuir espresso profond sur acier soudé main. L\'intensité brute de la forge du forgeron, bâtie pour un siècle d\'usage.' },
      { title: 'The Locomotive', tagline: 'Cuivre · Cuir · Laiton', description: 'Cuir orange brûlé avec coutures rivetées cuivre et accents en laiton. La puissance et chaleur de l\'âge de la vapeur.' },
      { title: 'The Parlour', tagline: 'Châtaigne · Velours · Fer', description: 'Cuir châtaigne avec coussins en velours orange brûlé sur cadres en fer. Le confort raffiné du bureau de l\'ingénieur.' },
      { title: 'The Workshop', tagline: 'Charbon · Toile · Acier', description: 'Toile charbon sur acier brut avec détails en cuivre. L\'honnêteté utilitaire de l\'établi de l\'artisan.' },
    ],
    countSuffix: 'pièces',
  },
  products: {
    kicker: 'Pièces signature',
    title: 'Les canapés les plus robustes jamais forgés',
    addLabel: 'Demander un devis',
    items: [
      { name: 'Manchester Chesterfield 3 places', fabric: 'Cuir espresso · Acier', badge: 'Icône' },
      { name: 'Locomotive Loveseat', fabric: 'Cuir cuivre · Laiton', badge: 'Nouveau' },
      { name: 'Forge Fauteuil', fabric: 'Cuir châtaigne · Fer', badge: '' },
      { name: 'Méridienne de l\'Ingénieur', fabric: 'Velours · Fer', badge: 'Édition limitée' },
      { name: 'Rivet Modulaire', fabric: 'Toile · Acier', badge: 'Sur-mesure' },
      { name: 'Anvil Banc', fabric: 'Cuir brut · Acier', badge: '' },
    ],
  },
  stats: { items: [{ label: 'Années de patrimoine fonderie' }, { label: 'Cadres forgés et livrés' }, { label: 'Rivets posés main' }, { label: 'Lofts équipés dans le monde' }] },
  steps: {
    kicker: 'Le processus de forge',
    title: 'Du feu au canapé en quatre étapes industrielles',
    items: [
      { title: 'Consultation', text: 'Une conversation sans détour avec notre fonderie — nous discutons de votre espace, de vos habitudes d\'usage, et du nombre de générations que vous attendez de ce canapé.' },
      { title: 'Forge de l\'acier', text: 'Des soudeurs maîtres forgent main chaque cadre en acier dans notre fonderie de Manchester, suivant des techniques inchangées depuis 1898. Chaque joint est testé pour supporter 500 kg.' },
      { title: 'Tannage du cuir', text: 'Le cuir pleine fleur est tanné végétal dans des fosses de chêne pendant 60 jours, puis coupé main et riveté en cuivre — pas de colle, pas de raccourcis, seulement le feu et le fer.' },
      { title: 'Livraison fonderie', text: 'Votre canapé arrive avec service gants blancs et garantie de retapissage à vie — le cadre est éternel, le cuir peut être remplacé pour des générations.' },
    ],
  },
  gallery: {
    kicker: 'Lofts et espaces',
    title: 'Où les pièces Ironworks prennent vie',
    captions: ['Loft Manchester · Manchester Chesterfield', 'Entrepôt Brooklyn · Locomotive', 'Loft Chicago · Forge Fauteuil', 'Studio Londres · Méridienne Ingénieur', 'Atelier Berlin · Rivet Modulaire', 'Pub Glasgow · Anvil Banc'],
  },
  testimonials: {
    kicker: 'Nos clients',
    title: 'Paroles de ceux qui vivent avec Ironworks',
    items: [
      { name: 'James Hartwell', role: 'Architecte · Manchester', quote: 'La collection Forge, c\'est comme s\'asseoir dans un hôtel ferroviaire victorien — brut, chaleureux, indestructible. Mes clients disent que leur loft a enfin une âme.' },
      { name: 'Sarah Castellan', role: 'Designer d\'intérieur · Brooklyn', quote: 'J\'ai prescrit Ironworks pour une douzaine de projets loft. Les cadres en acier survivent à tout. Quinze ans plus tard, ils sont plus beaux qu\'au premier jour.' },
      { name: 'Marcus Webb', role: 'Propriétaire d\'hôtel · Londres', quote: 'Nous avons meublé tout le hall avec la collection Locomotive. Les clients demandent constamment les rivets en cuivre — ce sont des sujets de conversation autant que des assises.' },
    ],
  },
  faqs: {
    kicker: 'Questions',
    title: 'Questions de nos clients fonderie',
    items: [
      { question: 'Quelle est la durabilité du cadre en acier ?', answer: 'Chaque cadre est soudé main en acier de grade structurel et testé en charge à 500 kg. Nous garantissons le cadre à vie — il survivra au cuir, aux coussins, et probablement au bâtiment qui l\'abrite.' },
      { question: 'Comment le cuir vieillit-il ?', answer: 'Notre cuir pleine fleur tanné végétal est conçu pour vieillir magnifiquement. En 5-10 ans, il développe une riche patine — plus sombre, plus souple, plus caractérisée. Les rayures et l\'usure deviennent son histoire, comme une veste en cuir favorite.' },
      { question: 'Puis-je commander une pièce sur-mesure ?', answer: 'Absolument. Notre fonderie prospère sur les commandes sur-mesure — choisissez votre cuir, finition d\'acier, dimensions et motif de rivets. Délai de 8-12 semaines pour les pièces forgées main.' },
      { question: 'Comment fonctionne le retapissage à vie ?', answer: 'Le cadre en acier est garanti à vie. Quand le cuir s\'use — après 15-25 ans — nous retapissons avec du cuir neuf, en réutilisant le même cadre. Vous ne payez que les matériaux et la main-d\'œuvre.' },
      { question: 'Livrez-vous à l\'international ?', answer: 'Oui, nous expédions mondialement avec service de fret assuré. Les commandes internationales incluent le dédouanement et l\'installation professionnelle par nos équipes partenaires.' },
    ],
  },
  cta: {
    kicker: 'Commencez la forge',
    title: 'Ramenez l\'âme de la fonderie à la maison',
    subtitle: 'Planifiez une consultation privée avec notre fonderie à Manchester. Nous vous aiderons à choisir cuir, acier et finition — forgeant un canapé bâti pour traverser les générations.',
    primary: 'Réserver une visite de fonderie',
    secondary: 'Appeler la fonderie : +44 161 839 1898',
  },
  footerBits: { ratingSuffix: 'avis' },
};

const cn: Sofa20Content = {
  nav: { home: '首页', story: '铸造厂', collections: '系列', products: '作品', gallery: '阁楼', testimonials: '客户', faqs: '问答', contact: '联系我们' },
  hero: {
    badge: 'Ironworks & Co · 自1898年锻造舒适',
    title1: '每张沙发',
    titleHighlight: '锻造于',
    title2: '烈火与钢铁',
    subtitle: '全粒面皮革覆于手工焊接的钢架上,铜铆钉接缝,爱迪生灯泡的温暖。每件作品都承载着工业革命的原始灵魂——为跨越世代而造。',
    ctaPrimary: '探索系列',
    ctaSecondary: '参观铸造厂',
    badgeNumber: '1898',
    badgeLabel: 'Ironworks首张沙发在曼彻斯特锻造之年',
    promos: [
      { label: '全粒面皮革', text: '手工鞣制,完美老化' },
      { label: '手工焊接钢架', text: '锻造框架,为持久而造' },
      { label: '铜铆钉', text: '手工设置,永不胶合' },
      { label: '爱迪生灯泡光辉', text: '温暖、琥珀色、永恒' },
    ],
  },
  marquee: ['锻造', '铜', '铆钉', '皮革', '蒸汽', '黄铜', '铁', '铸造', '齿轮', '曼彻斯特'],
  story: {
    kicker: '我们的铸造厂',
    title: '塑造Ironworks的三团烈火',
    items: [
      { title: '在曼彻斯特锻造', text: 'Ironworks & Co始于1898年,当铁匠Edward Holt在曼彻斯特铸造厂用铁路钢手工焊接了他的第一个沙发框架。125年后,我们仍然手工锻造每一个框架。' },
      { title: '传统鞣制', text: '我们的全粒面皮革在橡木坑中植物鞣制60天——与1898年相同的方法。无化学,无捷径。只有时间、树皮和水,造就如威士忌般越陈越香的皮革。' },
      { title: '手工铆接', text: '每条接缝都用实心铜铆钉固定,手工锤打——永不胶合,永不用合成线缝制。铆接的Ironworks沙发可以永远重新 upholster,框架可存续一个世纪。' },
    ],
  },
  collections: {
    kicker: '系列',
    title: '工业舒适的四座熔炉',
    subtitle: '每个系列捕捉工业革命的不同时代——从煤烟熏黑的锻炉到工程师客厅的温暖光辉。',
    viewLabel: '探索系列',
    items: [
      { title: 'The Forge 锻炉', tagline: '浓缩咖啡色 · 皮革 · 钢', description: '深浓缩咖啡色皮革覆于手工焊接钢架。铁匠锻炉的原始强度,为一个世纪的使用而造。' },
      { title: 'The Locomotive 机车', tagline: '铜色 · 皮革 · 黄铜', description: '焦橙色皮革配铜铆钉接缝和黄铜点缀。蒸汽时代的力量与温暖。' },
      { title: 'The Parlour 客厅', tagline: '栗色 · 天鹅绒 · 铁', description: '栗色皮革配焦橙天鹅绒靠垫于铁架上。工程师书房的精致舒适。' },
      { title: 'The Workshop 工坊', tagline: '炭灰 · 帆布 · 钢', description: '炭灰帆布覆于原钢配铜细节。工匠台面的诚实实用。' },
    ],
    countSuffix: '件',
  },
  products: {
    kicker: '标志性作品',
    title: '有史以来最坚固的沙发',
    addLabel: '立即咨询',
    items: [
      { name: '曼彻斯特切斯特菲尔德三人座', fabric: '浓缩咖啡皮革 · 钢', badge: '经典' },
      { name: '机车双人沙发', fabric: '铜色皮革 · 黄铜', badge: '新品' },
      { name: '锻炉休闲椅', fabric: '栗色皮革 · 铁', badge: '' },
      { name: '工程师躺榻', fabric: '天鹅绒 · 铁', badge: '限量' },
      { name: '铆钉模块组合', fabric: '帆布 · 钢', badge: '定制' },
      { name: '铁砧长椅', fabric: '原色皮革 · 钢', badge: '' },
    ],
  },
  stats: { items: [{ label: '年铸造厂传承' }, { label: '个框架已锻造交付' }, { label: '颗铆钉手工设置' }, { label: '个阁楼全球选用' }] },
  steps: {
    kicker: '锻造流程',
    title: '从烈火到沙发,四步工业之旅',
    items: [
      { title: '咨询', text: '与铸造厂的直来直去对话——讨论您的空间、使用模式,以及您期望这张沙发服务几代人。' },
      { title: '锻造钢架', text: '焊接大师在曼彻斯特铸造厂手工锻造每个钢架,遵循自1898年不变的技艺。每个接缝经测试可承重500公斤。' },
      { title: '鞣制皮革', text: '全粒面皮革在橡木坑中植物鞣制60天,然后手工裁剪和铜铆钉固定——无胶、无捷径,只有火与铁。' },
      { title: '铸造厂配送', text: '沙发以白手套服务送达,附终身重新 upholster 保证——框架永恒,皮革可代代更换。' },
    ],
  },
  gallery: {
    kicker: '阁楼与空间',
    title: 'Ironworks作品焕发生机之处',
    captions: ['曼彻斯特阁楼 · 曼彻斯特切斯特菲尔德', '布鲁克林仓库 · 机车双人沙发', '芝加哥阁楼 · 锻炉休闲椅', '伦敦工作室 · 工程师躺榻', '柏林工作室 · 铆钉模块', '格拉斯哥酒吧 · 铁砧长椅'],
  },
  testimonials: {
    kicker: '我们的客户',
    title: '与Ironworks共处者的感言',
    items: [
      { name: 'James Hartwell', role: '建筑师 · 曼彻斯特', quote: 'Forge系列就像坐在维多利亚铁路酒店里——原始、温暖、坚不可摧。我的客户说他们的阁楼终于有了灵魂。' },
      { name: 'Sarah Castellan', role: '室内设计师 · 布鲁克林', quote: '我已经为十几个阁楼项目指定了Ironworks。钢架比一切都长寿。十五年后,它们比到达那天更美。' },
      { name: 'Marcus Webb', role: '酒店主人 · 伦敦', quote: '我们用机车系列布置了整个大堂。客人不断询问铜铆钉——它们既是座位也是话题。' },
    ],
  },
  faqs: {
    kicker: '咨询',
    title: '铸造厂客户的常见问题',
    items: [
      { question: '钢架有多耐用?', answer: '每个框架由结构级钢手工焊接,并经负载测试可承重500公斤。我们终身保修框架——它将比皮革、靠垫,甚至可能比它所在的建筑更长寿。' },
      { question: '皮革如何老化?', answer: '我们的全粒面植物鞣制皮革专为美丽老化而设计。5-10年内形成丰富包浆——更深、更软、更有个性。划痕和磨损成为它故事的一部分,就像心爱的皮夹克。' },
      { question: '我可以定制作品吗?', answer: '当然。我们的铸造厂热衷于定制委托——选择皮革、钢面处理、尺寸和铆钉图案。手工锻造作品的交货期8-12周。' },
      { question: '终身重新 upholster 如何运作?', answer: '钢架终身保修。当皮革最终磨损——15-25年后——我们用新皮革重新 upholster,复用同一框架。您只需支付材料和人工。' },
      { question: '你们提供国际配送吗?', answer: '是的,我们通过保险货运服务全球发货。国际订单包括清关和由合作伙伴团队的专业安装。' },
    ],
  },
  cta: {
    kicker: '开启锻造',
    title: '把铸造厂的灵魂带回家',
    subtitle: '预约在曼彻斯特与我们铸造厂的私密咨询。我们将帮助您选择皮革、钢和饰面——锻造为跨越世代而造的沙发。',
    primary: '预约铸造厂参观',
    secondary: '致电铸造厂:+44 161 839 1898',
  },
  footerBits: { ratingSuffix: '评分' },
};

const ar: Sofa20Content = {
  nav: { home: 'الرئيسية', story: 'المسبك', collections: 'المجموعات', products: 'القطع', gallery: 'العلالي', testimonials: 'العملاء', faqs: 'الأسئلة', contact: 'تواصل معنا' },
  hero: {
    badge: 'آيرووركس آند كو · تشكيل الراحة منذ 1898',
    title1: 'حيث كل أريكة',
    titleHighlight: 'تُشكّل',
    title2: 'في النار والفولاذ',
    subtitle: 'جلد كامل الحبيبات على إطارات فولاذية ملحومة يدوياً، دروز مرزرة بالنحاس، ودفء مصباح إديسون. كل قطعة تحمل روح الثورة الصناعية الخام — مبنية لتبقى لأجيال.',
    ctaPrimary: 'اكتشف المجموعات',
    ctaSecondary: 'زر المسبك',
    badgeNumber: '1898',
    badgeLabel: 'سنة تشكيل أول أريكة آيرووركس في مانشستر',
    promos: [
      { label: 'جلد كامل الحبيبات', text: 'مدبوغ يدوياً، يشيخ بإتقان' },
      { label: 'فولاذ ملحوم يدوياً', text: 'إطارات مشكلة، مبنية للبقاء' },
      { label: 'مرزرات نحاسية', text: 'مثبتة يدوياً، لا تلصق أبداً' },
      { label: 'توهج إديسون', text: 'دافئ، كهرماني، خالد' },
    ],
  },
  marquee: ['تشكيل', 'نحاس', 'مرزرات', 'جلد', 'بخار', 'نحاس أصفر', 'حديد', 'مسبك', 'تروس', 'مانشستر'],
  story: {
    kicker: 'مسبكنا',
    title: 'ثلاث نيران شكلت آيرووركس',
    items: [
      { title: 'مشكول في مانشستر', text: 'بدأت آيرووركس آند كو عام 1898 عندما لحّم الحداد إدوارد هولت أول إطار أريكة من فولاذ السكك الحديدية في مسبك مانشستر. بعد أكثر من 125 عاماً، لا زلنا نشكّل كل إطار يدوياً.' },
      { title: 'مدبوغ بالتقاليد', text: 'جلدنا كامل الحبيبات مدبوغ نباتياً في حفر البلوط على مدى 60 يوماً — نفس طريقة 1898. لا كيماويات، لا اختصارات. فقط الوقت، اللحاء، والماء، تنتج جلداً يشيخ كالويسكي.' },
      { title: 'مزرّر يدوياً', text: 'كل درز مثبّت بمرزرات نحاسية صلبة، مطروقة يدوياً — لا تلصق، لا تخاط بخيط صناعي. أريكة آيرووركس المزرّرة يمكن إعادة تنجيدها للأبد، والإطار يدوم قرناً.' },
    ],
  },
  collections: {
    kicker: 'المجموعات',
    title: 'أربعة أفران للراحة الصناعية',
    subtitle: 'كل مجموعة تلتقط حقبة مختلفة من الثورة الصناعية — من الفرن المسود بالسخام إلى التوهج الدافئ لصالون المهندس.',
    viewLabel: 'استكشف المجموعة',
    items: [
      { title: 'الفرن', tagline: 'إسبريسو · جلد · فولاذ', description: 'جلد إسبريسو عميق على فولاذ ملحوم يدوياً. شدة الفرن الخام، مبنية لقرن من الاستخدام.' },
      { title: 'القاطرة', tagline: 'نحاس · جلد · نحاس أصفر', description: 'جلد برتقالي محروق بدروز مرزرة نحاسية ولمسات نحاس أصفر. قوة ودفء عصر البخار.' },
      { title: 'الصالون', tagline: 'كستنائي · مخمل · حديد', description: 'جلد كستنائي بوسائد مخمل برتقالي محروق على إطارات حديدية. راحة الصالون الراقية للمهندس.' },
      { title: 'الورشة', tagline: 'فحمي · قماش · فولاذ', description: 'قماش فحمي على فولاذ خام بتفاصيل نحاسية. صدق طاولة الحرفي.' },
    ],
    countSuffix: 'قطعة',
  },
  products: {
    kicker: 'القطع المميزة',
    title: 'أصلب الأرائك على الإطلاق',
    addLabel: 'استفسر الآن',
    items: [
      { name: 'مانشستر تشيسترfield 3 مقاعد', fabric: 'جلد إسبريسو · فولاذ', badge: 'أيقونة' },
      { name: 'القاطرة مقعدين', fabric: 'جلد نحاسي · نحاس أصفر', badge: 'جديد' },
      { name: 'الفرن كرسي', fabric: 'جلد كستنائي · حديد', badge: '' },
      { name: 'أريكة المهندس', fabric: 'مخمل · حديد', badge: 'محدود' },
      { name: 'مرزرة موديولار', fabric: 'قماش · فولاذ', badge: 'تفصيل خاص' },
      { name: 'السندان مقعد', fabric: 'جلد خام · فولاذ', badge: '' },
    ],
  },
  stats: { items: [{ label: 'سنة من تراث المسبك' }, { label: 'إطار مشكل وتم تسليمه' }, { label: 'مرزرة مثبتة يدوياً' }, { label: 'علية تم تأثيثها عالمياً' }] },
  steps: {
    kicker: 'عملية التشكيل',
    title: 'من النار إلى الأريكة في أربع خطوات صناعية',
    items: [
      { title: 'استشارة', text: 'محادثة صريحة مع مسبكنا — نناقش مساحتك وأنماط البلى وكم جيلاً تتوقع أن تخدمه هذه الأريكة.' },
      { title: 'تشكيل الفولاذ', text: 'لحّامون مهرون يشكلون يدوياً كل إطار فولاذي في مسبك مانشستر، بأساليب لم تتغير منذ 1898. كل وصلة تُختبر لتحمل 500 كجم.' },
      { title: 'دباغة الجلد', text: 'الجلد كامل الحبيبات يُدبغ نباتياً في حفر البلوط على مدى 60 يوماً، ثم يُقطّع يدوياً ويُمرزر بالنحاس — لا غراء، لا اختصارات، فقط النار والحديد.' },
      { title: 'توصيل المسبك', text: 'تصلك أريكتك بخدمة القفازات البيضاء وضمان إعادة تنجيد مدى الحياة — الإطار للأبد، والجلد يمكن استبداله لأجيال.' },
    ],
  },
  gallery: {
    kicker: 'العلالي والفضاءات',
    title: 'حيث تأتي قطع آيرووركس إلى الحياة',
    captions: ['علية مانشستر · مانشستر تشيسترfield', 'مخزن بروكلين · القاطرة', 'علية شيكاغو · الفرن', 'استوديو لندن · أريكة المهندس', 'أتيليه برلين · مرزرة', 'حانة غلاسكو · السندان'],
  },
  testimonials: {
    kicker: 'عملاؤنا',
    title: 'كلمات من يعيشون مع آيرووركس',
    items: [
      { name: 'جيمس هارتويل', role: 'مهندس معماري · مانشستر', quote: 'مجموعة الفرن كالجلوس في فندق سكك حديدية فيكتورية — خام، دافئ، لا يقهر. عملائي يقولون أن علّيتهم أخيراً لها روح.' },
      { name: 'سارة كاستيلان', role: 'مصممة ديكور · بروكلين', quote: 'حددت آيرووركس لعشرات مشاريع العلية. الإطارات الفولاذية تتفوق على كل شيء. بعد خمسة عشر عاماً، تبدو أجمل من يوم وصولها.' },
      { name: 'ماركوس ويب', role: 'صاحب فندق · لندن', quote: 'أثثنا بهو الفندق بالكامل بمجموعة القاطرة. الضيوف يسألون باستمرار عن المرزرات النحاسية — إنها موضوع حديث بقدر ما هي جلوس.' },
    ],
  },
  faqs: {
    kicker: 'استفسارات',
    title: 'أسئلة من عملاء المسبك',
    items: [
      { question: 'ما مدى متانة الإطار الفولاذي؟', answer: 'كل إطار ملحوم يدوياً من فولاذ درجة إنشائية ومختبر بالحمل حتى 500 كجم. نحن نضمن الإطار مدى الحياة — سيفوق الجلد والوسائد، وربما المبنى الذي يحتويه.' },
      { question: 'كيف يشيخ الجلد؟', answer: 'جلدنا كامل الحبيبات المدبوغ نباتياً مصمم ليشيخ بجمال. خلال 5-10 سنوات يطور صبغة غنية — أغمق، أنعم، أكثر شخصية. الخدوش والبلى تصبح جزءاً من قصته، كسترة جلدية مفضلة.' },
      { question: 'هل يمكنني طلب قطعة مخصصة؟', answer: 'بالتأكيد. مسبكنا يزدهر بالطلبات المخصصة — اختر جلدك، تشطيب الفولاذ، أبعادك، ونمط المرزرات. مدة التسليم 8-12 أسبوعاً للقطع المشكلة يدوياً.' },
      { question: 'كيف يعمل إعادة التنجيد مدى الحياة؟', answer: 'الإطار الفولاذي مضمون مدى الحياة. عندما يتآكل الجلد — بعد 15-25 سنة — نعيد تنجيده بجلد جديد، نعيد استخدام نفس الإطار. تدفع فقط المواد والعمالة.' },
      { question: 'هل توصلون دولياً؟', answer: 'نعم، نشحن عالمياً بخدمة شحن مؤمنة. الطلبات الدولية تشمل التخليص الجمركي والتركيب الاحترافي بواسطة فرق شركائنا.' },
    ],
  },
  cta: {
    kicker: 'ابدأ التشكيل',
    title: 'أعد روح المسبك إلى المنزل',
    subtitle: 'احجز استشارة خاصة مع مسبكنا في مانشستر. سنساعدك في اختيار الجلد والفولاذ والتشطيب — تشكيل أريكة مبنية لتبقى لأجيال.',
    primary: 'احجز جولة في المسبك',
    secondary: 'اتصل بالمسبك: +44 161 839 1898',
  },
  footerBits: { ratingSuffix: 'تقييم' },
};

export const SOFA20_CONTENT = { en, vi, fr, cn, ar };

export function useSofa20Content() {
  const { currentLang } = useTranslate();
  return SOFA20_CONTENT[currentLang.value as keyof typeof SOFA20_CONTENT] ?? SOFA20_CONTENT.en;
}
