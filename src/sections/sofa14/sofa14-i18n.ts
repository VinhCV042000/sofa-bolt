import { useTranslate } from 'src/locales';

// ----------------------------------------------------------------------
// SOFA14 — SOFT CLAY / PASTEL POP — full multi-language content dictionary
// ----------------------------------------------------------------------

const en = {
  nav: {
    home: 'Home',
    story: 'Story',
    collections: 'Collections',
    products: 'Products',
    playground: 'Playground',
    gallery: 'Gallery',
    contact: 'Contact',
  },
  hero: {
    badge: 'Sofa Bloom · Cheerful comfort since 2016',
    title1: 'Sink into',
    titleHighlight: 'squishy',
    title2: 'happiness',
    subtitle:
      'Candy-colored sofas puffed up with clay-soft cushions and bouncy foam. Bright, bubbly, and built for lazy Sunday piles.',
    ctaPrimary: 'Explore collections',
    ctaSecondary: 'Play with colors',
    badgeNumber: '24',
    badgeLabel: 'squish-tested comfort levels',
    promos: [
      { label: 'Cloud-soft foam', text: 'Triple-layer memory blend' },
      { label: 'Stain-proof fabric', text: 'Wipe-clean candy weave' },
      { label: '10-year warranty', text: 'Frame & cushions covered' },
    ],
  },
  marquee: ['SQUISHY', 'BUBBLY', 'PASTEL POP', 'CLAY SOFT', 'CHEERFUL', 'BOUNCE BACK'],
  story: {
    kicker: 'Our story',
    title: 'Three things we never flatten',
    items: [
      { title: 'Born from bubblegum', text: 'The Bloom palette started as leftover paint chips from a candy factory tour — too joyful to waste.' },
      { title: 'Molded like clay', text: 'Every arm and cushion is rounded by hand until it feels like soft modeling clay, never a hard edge in sight.' },
      { title: 'Made to bounce back', text: 'Recycled foam cores spring back after every pile-on, nap, and pillow fort you can build.' },
    ],
  },
  collections: {
    kicker: 'Collections',
    title: 'Three moods, endless bounce',
    subtitle: 'Pick your color mood — each collection is a full palette of squishy shapes for every room.',
    viewLabel: 'View collection',
    items: [
      { title: 'Bubble', tagline: 'Mint · Boucle bounce', description: 'Round, puffy silhouettes in minty pastels for a fresh, airy living room.' },
      { title: 'Marshmallow', tagline: 'Sky · Cloud velvet', description: 'Oversized cloud-like cushions in sky blue, made for sinking in for hours.' },
      { title: 'Gumdrop', tagline: 'Coral · Candy weave', description: 'Playful coral curves with a chunky clay base — a pop of joy in any corner.' },
    ],
    countSuffix: 'styles',
  },
  products: {
    kicker: 'Best sellers',
    title: 'The comfiest picks in the shop',
    addLabel: 'Add to cart',
    items: [
      { name: 'Bubble 3-Seater', fabric: 'Boucle · Mint pop', badge: 'Best seller' },
      { name: 'Marshmallow Loveseat', fabric: 'Cloud velvet · Sky', badge: '' },
      { name: 'Gumdrop Lounge', fabric: 'Candy weave · Coral', badge: 'New' },
      { name: 'Butterscotch Modular', fabric: 'Chunky knit · Butter', badge: '' },
      { name: 'Cotton Candy Daybed', fabric: 'Brushed cotton · Sky', badge: '' },
      { name: 'Jellybean Armchair', fabric: 'Boucle · Coral', badge: 'Limited' },
    ],
  },
  playground: {
    kicker: 'Squish it yourself',
    title: 'Pick a fabric, feel the squish',
    subtitle: 'Tap a color swatch, then slide the comfort dial — watch the cushion squish and bounce in real time.',
    comfortLabel: 'Comfort mode',
    firmnessLabel: 'Firmness',
    swatchLabel: 'Fabric color',
    resultTitle: 'Your custom cushion',
    resultHint: 'This is roughly how your sofa will feel on movie night.',
    comforts: [
      { title: 'Cloud', text: 'Ultra-soft sink-in comfort, like napping on a marshmallow.' },
      { title: 'Squish', text: 'Balanced softness with gentle bounce-back support.' },
      { title: 'Bounce', text: 'Springy and supportive, great for game nights and kids.' },
    ],
    fabrics: [
      { name: 'Mint Bubble' },
      { name: 'Sky Marshmallow' },
      { name: 'Coral Gumdrop' },
      { name: 'Butter Sunshine' },
    ],
  },
  stats: {
    items: [
      { label: 'Squish-tested comfort levels' },
      { label: 'Years of happy warranty' },
      { label: 'Cheerful homes furnished' },
      { label: 'Customers who smile again' },
    ],
  },
  steps: {
    kicker: 'How it works',
    title: 'From swatch to squish in 4 hops',
    items: [
      { title: 'Pick your pop', text: 'Choose a candy color and squish level in our playground above.' },
      { title: 'We measure & bounce-test', text: 'Our team fine-tunes cushion firmness to match your space and family.' },
      { title: 'Molded by hand', text: 'Every blob-shaped arm and cushion is rounded and stitched with care.' },
      { title: 'Bounces into your home', text: 'Delivered, unwrapped, and fluffed — ready for the first pile-on.' },
    ],
  },
  gallery: {
    kicker: 'Real happy homes',
    title: 'Cheerful corners, everywhere',
    captions: [
      'Sunroom in Austin · Bubble collection',
      'Kids playroom · Gumdrop Lounge',
      'Loft apartment · Marshmallow Loveseat',
      'Reading nook · Butterscotch Modular',
      'Family den · Cotton Candy Daybed',
    ],
  },
  testimonials: {
    kicker: 'Happy huggers',
    title: 'People just can’t stop squishing it',
    items: [
      { name: 'Maya Chen', role: 'Interior stylist · Austin', quote: 'It photographs like candy and feels even softer in person. My clients ask for the mint one on every shoot now.' },
      { name: 'Diego Alvarez', role: 'Dad of three · Denver', quote: 'The kids build pillow forts every single day and the cushions just bounce right back. Worth every penny.' },
      { name: 'Priya Nair', role: 'Studio apartment owner · Seattle', quote: 'The playground tool online helped me pick the coral fabric perfectly — it matches my mood board exactly.' },
    ],
  },
  faqs: {
    kicker: 'Questions & answers',
    title: 'Things people love to ask',
    items: [
      { question: 'Does the fabric stain easily with bright pastel colors?', answer: 'Nope! Every candy-colored weave is treated with a water-based stain guard, so spills wipe right off and cushion covers are machine washable.' },
      { question: 'Can I mix and match colors within one sofa?', answer: 'Yes — pick a base fabric and up to two accent cushion colors in our playground, completely free of charge.' },
      { question: 'How long does delivery take?', answer: 'In-stock pieces arrive within 3-5 days. Fully custom color combos take 2-3 weeks to mold, stitch, and squish-test.' },
      { question: 'Is the foam actually squishy or firm underneath?', answer: 'Both! Our tri-layer foam has a squishy top layer and a supportive base, so it feels soft but never bottoms out.' },
      { question: 'What is your return policy?', answer: '45-day happiness guarantee — if it does not make you smile, send it back for a full refund or fabric swap.' },
    ],
  },
  cta: {
    kicker: 'Start with a swatch',
    title: 'Let your living room smile a little wider',
    subtitle: 'Order a free pastel swatch pack, squish it at home, and pick the color that makes you happiest.',
    primary: 'Get free swatches',
    secondary: 'Call us: 1-800-POP-SOFA',
  },
  footerBits: {
    ratingSuffix: 'rating',
  },
};

export type Sofa14Content = typeof en;

const vi: Sofa14Content = {
  nav: {
    home: 'Trang chủ',
    story: 'Câu chuyện',
    collections: 'Bộ sưu tập',
    products: 'Sản phẩm',
    playground: 'Khu vui chơi',
    gallery: 'Không gian',
    contact: 'Liên hệ',
  },
  hero: {
    badge: 'Sofa Bloom · Thoải mái vui vẻ từ 2016',
    title1: 'Lún vào',
    titleHighlight: 'êm xốp',
    title2: 'hạnh phúc',
    subtitle:
      'Sofa màu kẹo ngọt được nhồi êm như đất sét mềm và đệm foam nảy bật. Tươi sáng, đáng yêu, sinh ra để ôm lười vào Chủ Nhật.',
    ctaPrimary: 'Khám phá bộ sưu tập',
    ctaSecondary: 'Chơi với màu sắc',
    badgeNumber: '24',
    badgeLabel: 'mức độ êm đã thử nghiệm',
    promos: [
      { label: 'Foam mềm như mây', text: 'Ba lớp memory foam pha trộn' },
      { label: 'Vải chống bẩn', text: 'Dệt kẹo màu lau sạch dễ dàng' },
      { label: 'Bảo hành 10 năm', text: 'Bao gồm khung và đệm' },
    ],
  },
  marquee: ['ÊM XỐP', 'VUI NHỘN', 'MÀU KẸO NGỌT', 'MỀM NHƯ ĐẤT SÉT', 'TƯƠI VUI', 'NẢY BẬT TRỞ LẠI'],
  story: {
    kicker: 'Câu chuyện của chúng tôi',
    title: 'Ba điều không bao giờ làm phẳng',
    items: [
      { title: 'Sinh ra từ kẹo cao su', text: 'Bảng màu Bloom bắt đầu từ những mẩu sơn thừa trong chuyến tham quan nhà máy kẹo — quá vui để bỏ phí.' },
      { title: 'Nắn như đất sét', text: 'Mỗi tay vịn và đệm ghế được vo tròn bằng tay đến khi mềm như đất sét, không một góc cạnh nào.' },
      { title: 'Sinh ra để nảy lại', text: 'Lõi foam tái chế bật trở lại sau mỗi lần chất chồng, ngủ trưa hay dựng pháo đài gối.' },
    ],
  },
  collections: {
    kicker: 'Bộ sưu tập',
    title: 'Ba tâm trạng, vô vàn độ nảy',
    subtitle: 'Chọn tâm trạng màu sắc của bạn — mỗi bộ sưu tập là trọn bảng dáng êm xốp cho mọi phòng.',
    viewLabel: 'Xem bộ sưu tập',
    items: [
      { title: 'Bubble', tagline: 'Bạc hà · Bouclé nảy', description: 'Dáng tròn, phồng êm sắc bạc hà pastel cho phòng khách tươi mát, thoáng đãng.' },
      { title: 'Marshmallow', tagline: 'Xanh trời · Nhung mây', description: 'Đệm hình mây khổng lồ sắc xanh trời, sinh ra để lún vào hàng giờ.' },
      { title: 'Gumdrop', tagline: 'San hô · Dệt kẹo', description: 'Đường cong san hô vui nhộn trên nền đất sét dày dặn — chút niềm vui cho mọi góc nhà.' },
    ],
    countSuffix: 'mẫu',
  },
  products: {
    kicker: 'Bán chạy nhất',
    title: 'Những món êm ái nhất cửa hàng',
    addLabel: 'Thêm vào giỏ',
    items: [
      { name: 'Bubble 3 chỗ', fabric: 'Bouclé · Bạc hà', badge: 'Bán chạy' },
      { name: 'Marshmallow 2 chỗ', fabric: 'Nhung mây · Xanh trời', badge: '' },
      { name: 'Gumdrop Lounge', fabric: 'Dệt kẹo · San hô', badge: 'Mới' },
      { name: 'Butterscotch Modular', fabric: 'Len dệt dày · Bơ vàng', badge: '' },
      { name: 'Cotton Candy Daybed', fabric: 'Cotton chải · Xanh trời', badge: '' },
      { name: 'Jellybean Armchair', fabric: 'Bouclé · San hô', badge: 'Giới hạn' },
    ],
  },
  playground: {
    kicker: 'Tự tay bóp thử',
    title: 'Chọn vải, cảm nhận độ êm',
    subtitle: 'Chạm vào mẫu vải, kéo thanh trượt độ êm — xem đệm lún và nảy theo thời gian thực.',
    comfortLabel: 'Chế độ êm ái',
    firmnessLabel: 'Độ cứng',
    swatchLabel: 'Màu vải',
    resultTitle: 'Đệm tuỳ chỉnh của bạn',
    resultHint: 'Đây gần đúng cảm giác sofa của bạn vào đêm xem phim.',
    comforts: [
      { title: 'Mây bồng', text: 'Cực êm, lún sâu như ngủ trưa trên kẹo dẻo.' },
      { title: 'Êm vừa', text: 'Độ mềm cân bằng với lực nảy nhẹ nhàng nâng đỡ.' },
      { title: 'Nảy bật', text: 'Đàn hồi và nâng đỡ tốt, hợp cho tối chơi game cùng gia đình.' },
    ],
    fabrics: [
      { name: 'Bubble Bạc hà' },
      { name: 'Marshmallow Xanh trời' },
      { name: 'Gumdrop San hô' },
      { name: 'Sunshine Bơ vàng' },
    ],
  },
  stats: {
    items: [
      { label: 'Mức độ êm đã thử nghiệm' },
      { label: 'Năm bảo hành vui vẻ' },
      { label: 'Ngôi nhà rực rỡ đã trang bị' },
      { label: 'Khách hàng cười lại lần nữa' },
    ],
  },
  steps: {
    kicker: 'Quy trình',
    title: 'Từ mẫu vải đến độ êm chỉ 4 bước',
    items: [
      { title: 'Chọn màu yêu thích', text: 'Chọn màu kẹo và mức êm ngay tại khu vui chơi phía trên.' },
      { title: 'Đo & thử độ nảy', text: 'Đội ngũ tinh chỉnh độ cứng đệm phù hợp không gian và gia đình bạn.' },
      { title: 'Nắn tay từng khối', text: 'Mỗi tay vịn và đệm hình khối được vo tròn, khâu tỉ mỉ bằng tay.' },
      { title: 'Nảy về nhà bạn', text: 'Giao hàng, mở gói, phủi phồng — sẵn sàng cho lần chất chồng đầu tiên.' },
    ],
  },
  gallery: {
    kicker: 'Ngôi nhà vui vẻ thật',
    title: 'Góc nhà rực rỡ khắp mọi nơi',
    captions: [
      'Phòng nắng Austin · Bộ sưu tập Bubble',
      'Phòng chơi trẻ em · Gumdrop Lounge',
      'Căn hộ loft · Marshmallow 2 chỗ',
      'Góc đọc sách · Butterscotch Modular',
      'Phòng sinh hoạt · Cotton Candy Daybed',
    ],
  },
  testimonials: {
    kicker: 'Khách hàng yêu thích',
    title: 'Ai cũng mê bóp thử mãi không thôi',
    items: [
      { name: 'Maya Chen', role: 'Stylist nội thất · Austin', quote: 'Lên hình đẹp như kẹo mà ngoài đời còn êm hơn. Khách hàng của tôi giờ luôn đòi màu bạc hà cho mọi buổi chụp.' },
      { name: 'Diego Alvarez', role: 'Bố của ba con · Denver', quote: 'Bọn trẻ dựng pháo đài gối mỗi ngày mà đệm vẫn nảy về như cũ. Đáng từng đồng.' },
      { name: 'Priya Nair', role: 'Chủ căn hộ studio · Seattle', quote: 'Công cụ khu vui chơi trên web giúp tôi chọn đúng màu san hô — khớp hoàn hảo với mood board của tôi.' },
    ],
  },
  faqs: {
    kicker: 'Câu hỏi thường gặp',
    title: 'Những điều khách hay hỏi',
    items: [
      { question: 'Vải màu pastel tươi có dễ bám bẩn không?', answer: 'Không hề! Mọi lớp dệt màu kẹo đều phủ chống thấm gốc nước, vết bẩn lau sạch dễ dàng và vỏ đệm giặt máy được.' },
      { question: 'Tôi có thể phối nhiều màu trên một bộ sofa không?', answer: 'Có — chọn vải nền và tối đa hai màu đệm nhấn tại khu vui chơi, hoàn toàn miễn phí.' },
      { question: 'Thời gian giao hàng bao lâu?', answer: 'Hàng có sẵn giao trong 3-5 ngày. Phối màu tuỳ chỉnh hoàn toàn mất 2-3 tuần để nắn, khâu và thử độ nảy.' },
      { question: 'Đệm foam thực sự êm hay cứng bên trong?', answer: 'Cả hai! Foam ba lớp có mặt trên êm xốp và lớp đế nâng đỡ, vừa mềm vừa không bị lún hẳn.' },
      { question: 'Chính sách đổi trả thế nào?', answer: 'Bảo đảm hài lòng 45 ngày — nếu chưa khiến bạn mỉm cười, gửi trả để hoàn tiền hoặc đổi vải.' },
    ],
  },
  cta: {
    kicker: 'Bắt đầu bằng mẫu vải',
    title: 'Để phòng khách của bạn mỉm cười rộng hơn',
    subtitle: 'Đặt bộ mẫu vải pastel miễn phí, bóp thử tại nhà và chọn màu khiến bạn hạnh phúc nhất.',
    primary: 'Nhận mẫu vải miễn phí',
    secondary: 'Gọi ngay: 1900 6868',
  },
  footerBits: {
    ratingSuffix: 'đánh giá',
  },
};

const fr: Sofa14Content = {
  nav: {
    home: 'Accueil',
    story: 'Histoire',
    collections: 'Collections',
    products: 'Produits',
    playground: 'Espace de jeu',
    gallery: 'Galerie',
    contact: 'Contact',
  },
  hero: {
    badge: 'Sofa Bloom · Confort joyeux depuis 2016',
    title1: 'Plongez dans',
    titleHighlight: 'un moelleux',
    title2: 'plein de bonheur',
    subtitle:
      'Des canapés aux couleurs bonbon, gonflés de coussins doux comme de l’argile et de mousse rebondissante. Vif, pétillant, parfait pour les dimanches paresseux.',
    ctaPrimary: 'Découvrir les collections',
    ctaSecondary: 'Jouer avec les couleurs',
    badgeNumber: '24',
    badgeLabel: 'niveaux de confort testés',
    promos: [
      { label: 'Mousse douce comme un nuage', text: 'Mélange mémoire à trois couches' },
      { label: 'Tissu anti-taches', text: 'Tissage bonbon facile à nettoyer' },
      { label: 'Garantie 10 ans', text: 'Structure et coussins couverts' },
    ],
  },
  marquee: ['MOELLEUX', 'PÉTILLANT', 'PASTEL POP', 'DOUX COMME L’ARGILE', 'JOYEUX', 'REBONDIT TOUJOURS'],
  story: {
    kicker: 'Notre histoire',
    title: 'Trois choses que nous n’aplatissons jamais',
    items: [
      { title: 'Né du chewing-gum', text: 'La palette Bloom est née de chutes de peinture lors d’une visite d’usine à bonbons — trop joyeuses pour être jetées.' },
      { title: 'Modelé comme de l’argile', text: 'Chaque accoudoir et coussin est arrondi à la main jusqu’à ressembler à de l’argile souple, sans le moindre angle dur.' },
      { title: 'Fait pour rebondir', text: 'Les mousses recyclées reprennent leur forme après chaque empilement, sieste ou fort en oreillers.' },
    ],
  },
  collections: {
    kicker: 'Collections',
    title: 'Trois ambiances, un rebond infini',
    subtitle: 'Choisissez votre ambiance colorée — chaque collection propose une palette complète de formes moelleuses.',
    viewLabel: 'Voir la collection',
    items: [
      { title: 'Bubble', tagline: 'Menthe · Bouclé rebondissant', description: 'Silhouettes rondes et pulpeuses en pastel menthe pour un salon frais et aéré.' },
      { title: 'Marshmallow', tagline: 'Ciel · Velours nuage', description: 'Coussins géants façon nuage en bleu ciel, parfaits pour s’y enfoncer des heures.' },
      { title: 'Gumdrop', tagline: 'Corail · Tissage bonbon', description: 'Courbes corail espiègles sur une base d’argile épaisse — une touche de joie dans chaque coin.' },
    ],
    countSuffix: 'modèles',
  },
  products: {
    kicker: 'Meilleures ventes',
    title: 'Les pièces les plus confortables de la boutique',
    addLabel: 'Ajouter au panier',
    items: [
      { name: 'Bubble 3 places', fabric: 'Bouclé · Pop menthe', badge: 'Best-seller' },
      { name: 'Marshmallow 2 places', fabric: 'Velours nuage · Ciel', badge: '' },
      { name: 'Gumdrop Lounge', fabric: 'Tissage bonbon · Corail', badge: 'Nouveau' },
      { name: 'Butterscotch Modulable', fabric: 'Tricot épais · Beurre', badge: '' },
      { name: 'Cotton Candy Daybed', fabric: 'Coton brossé · Ciel', badge: '' },
      { name: 'Jellybean Fauteuil', fabric: 'Bouclé · Corail', badge: 'Édition limitée' },
    ],
  },
  playground: {
    kicker: 'Testez le moelleux',
    title: 'Choisissez un tissu, sentez le moelleux',
    subtitle: 'Touchez un échantillon, glissez le curseur de confort — regardez le coussin s’enfoncer et rebondir en temps réel.',
    comfortLabel: 'Mode de confort',
    firmnessLabel: 'Fermeté',
    swatchLabel: 'Couleur du tissu',
    resultTitle: 'Votre coussin personnalisé',
    resultHint: 'Voici à peu près la sensation de votre canapé lors d’une soirée film.',
    comforts: [
      { title: 'Nuage', text: 'Confort ultra-doux et enveloppant, comme une sieste sur une guimauve.' },
      { title: 'Moelleux', text: 'Douceur équilibrée avec un léger soutien rebondissant.' },
      { title: 'Rebond', text: 'Élastique et soutenant, idéal pour les soirées jeux en famille.' },
    ],
    fabrics: [
      { name: 'Bubble Menthe' },
      { name: 'Marshmallow Ciel' },
      { name: 'Gumdrop Corail' },
      { name: 'Sunshine Beurre' },
    ],
  },
  stats: {
    items: [
      { label: 'Niveaux de confort testés' },
      { label: 'Années de garantie joyeuse' },
      { label: 'Foyers joyeux équipés' },
      { label: 'Clients qui sourient à nouveau' },
    ],
  },
  steps: {
    kicker: 'Comment ça marche',
    title: 'De l’échantillon au moelleux en 4 étapes',
    items: [
      { title: 'Choisissez votre pop', text: 'Sélectionnez une couleur bonbon et un niveau de moelleux dans notre espace de jeu ci-dessus.' },
      { title: 'Mesure et test de rebond', text: 'Notre équipe ajuste la fermeté des coussins selon votre espace et votre famille.' },
      { title: 'Modelé à la main', text: 'Chaque accoudoir et coussin en forme de bulle est arrondi et cousu avec soin.' },
      { title: 'Rebondit chez vous', text: 'Livré, déballé et gonflé — prêt pour le premier empilement.' },
    ],
  },
  gallery: {
    kicker: 'Vrais foyers joyeux',
    title: 'Des coins pétillants, partout',
    captions: [
      'Véranda à Austin · Collection Bubble',
      'Salle de jeux enfants · Gumdrop Lounge',
      'Loft · Marshmallow 2 places',
      'Coin lecture · Butterscotch Modulable',
      'Salon familial · Cotton Candy Daybed',
    ],
  },
  testimonials: {
    kicker: 'Clients conquis',
    title: 'Impossible d’arrêter de le presser',
    items: [
      { name: 'Maya Chen', role: 'Styliste d’intérieur · Austin', quote: 'Il est photogénique comme un bonbon et encore plus doux en vrai. Mes clients réclament la version menthe à chaque séance.' },
      { name: 'Diego Alvarez', role: 'Père de trois enfants · Denver', quote: 'Les enfants construisent des forts en coussins tous les jours et ça rebondit toujours parfaitement. Ça vaut chaque centime.' },
      { name: 'Priya Nair', role: 'Propriétaire de studio · Seattle', quote: 'L’outil d’espace de jeu en ligne m’a aidée à choisir parfaitement le tissu corail — exactement comme mon mood board.' },
    ],
  },
  faqs: {
    kicker: 'Questions et réponses',
    title: 'Ce que les gens adorent demander',
    items: [
      { question: 'Le tissu pastel vif se tache-t-il facilement ?', answer: 'Non ! Chaque tissage bonbon est traité avec une protection anti-taches à base d’eau, les taches partent facilement et les housses sont lavables en machine.' },
      { question: 'Puis-je mélanger les couleurs sur un même canapé ?', answer: 'Oui — choisissez un tissu de base et jusqu’à deux couleurs de coussins d’accent dans notre espace de jeu, gratuitement.' },
      { question: 'Quel est le délai de livraison ?', answer: 'Les pièces en stock arrivent sous 3 à 5 jours. Les combinaisons de couleurs sur mesure prennent 2 à 3 semaines de modelage et de test.' },
      { question: 'La mousse est-elle vraiment moelleuse ou ferme ?', answer: 'Les deux ! Notre mousse à trois couches a une surface moelleuse et une base soutenante, douce sans jamais s’affaisser.' },
      { question: 'Quelle est votre politique de retour ?', answer: 'Garantie satisfaction de 45 jours — s’il ne vous fait pas sourire, renvoyez-le pour un remboursement complet ou un échange de tissu.' },
    ],
  },
  cta: {
    kicker: 'Commencez par un échantillon',
    title: 'Faites sourire votre salon un peu plus',
    subtitle: 'Commandez un kit d’échantillons pastel gratuit, testez-le chez vous et choisissez la couleur qui vous rend le plus heureux.',
    primary: 'Recevoir des échantillons gratuits',
    secondary: 'Appelez-nous : 1-800-POP-SOFA',
  },
  footerBits: {
    ratingSuffix: 'avis',
  },
};

const cn: Sofa14Content = {
  nav: {
    home: '首页',
    story: '品牌故事',
    collections: '系列',
    products: '产品',
    playground: '互动体验',
    gallery: '空间展示',
    contact: '联系我们',
  },
  hero: {
    badge: 'Sofa Bloom · 自2016年起的欢乐舒适',
    title1: '沉入',
    titleHighlight: '软糯',
    title2: '的幸福',
    subtitle: '糖果色沙发,填充如软陶般柔软的坐垫与弹力泡棉。明亮、俏皮,专为慵懒的周日而生。',
    ctaPrimary: '探索系列',
    ctaSecondary: '玩转配色',
    badgeNumber: '24',
    badgeLabel: '种经过测试的舒适度',
    promos: [
      { label: '云朵般柔软泡棉', text: '三层记忆棉混合' },
      { label: '防污面料', text: '糖果编织,轻松擦净' },
      { label: '10年质保', text: '框架与坐垫全包' },
    ],
  },
  marquee: ['软糯弹力', '俏皮活泼', '糖果色系', '软陶质感', '欢乐满满', '弹力回弹'],
  story: {
    kicker: '我们的故事',
    title: '三件我们从不妥协的事',
    items: [
      { title: '源自泡泡糖', text: 'Bloom 色板源自一次糖果工厂参观时留下的颜料样片——太欢快而舍不得丢弃。' },
      { title: '如陶土般塑形', text: '每一处扶手与坐垫都经手工打磨,直到摸起来像软陶一样,不留一丝硬角。' },
      { title: '天生会回弹', text: '再生泡棉芯在每次堆叠、小憩或搭建枕头堡垒后都能迅速回弹。' },
    ],
  },
  collections: {
    kicker: '系列',
    title: '三种心情,无尽弹力',
    subtitle: '选择你的色彩心情——每个系列都是专为每个房间打造的软糯造型全集。',
    viewLabel: '查看系列',
    items: [
      { title: 'Bubble 泡泡', tagline: '薄荷绿 · 波纹弹力', description: '圆润饱满的薄荷色轮廓,为客厅带来清新通透之感。' },
      { title: 'Marshmallow 棉花糖', tagline: '天空蓝 · 云朵绒面', description: '超大云朵般的天空蓝坐垫,让人一坐就是几个小时。' },
      { title: 'Gumdrop 软糖', tagline: '珊瑚橙 · 糖果编织', description: '俏皮的珊瑚色曲线搭配厚实陶土基座——为每个角落带来一份欢乐。' },
    ],
    countSuffix: '款',
  },
  products: {
    kicker: '畅销单品',
    title: '店内最舒适的选择',
    addLabel: '加入购物车',
    items: [
      { name: 'Bubble 三人座', fabric: '波纹布 · 薄荷绿', badge: '畅销' },
      { name: 'Marshmallow 双人座', fabric: '云朵绒 · 天空蓝', badge: '' },
      { name: 'Gumdrop 休闲椅', fabric: '糖果编织 · 珊瑚橙', badge: '新品' },
      { name: 'Butterscotch 模块沙发', fabric: '厚织物 · 奶油黄', badge: '' },
      { name: 'Cotton Candy 躺椅', fabric: '刷毛棉 · 天空蓝', badge: '' },
      { name: 'Jellybean 单人扶手椅', fabric: '波纹布 · 珊瑚橙', badge: '限量' },
    ],
  },
  playground: {
    kicker: '亲手体验软糯感',
    title: '选择面料,感受软糯',
    subtitle: '点击面料色样,拖动舒适度滑块——实时观看坐垫下陷与回弹。',
    comfortLabel: '舒适模式',
    firmnessLabel: '软硬度',
    swatchLabel: '面料颜色',
    resultTitle: '你的专属坐垫',
    resultHint: '这大致是你在电影之夜的沙发触感。',
    comforts: [
      { title: '云朵型', text: '超柔软下陷感,如同在棉花糖上小憩。' },
      { title: '软糯型', text: '柔软度均衡,带有轻柔的回弹支撑。' },
      { title: '弹力型', text: '富有弹性且支撑力强,非常适合家庭游戏之夜。' },
    ],
    fabrics: [
      { name: 'Bubble 薄荷绿' },
      { name: 'Marshmallow 天空蓝' },
      { name: 'Gumdrop 珊瑚橙' },
      { name: 'Sunshine 奶油黄' },
    ],
  },
  stats: {
    items: [
      { label: '经过测试的舒适度等级' },
      { label: '年欢乐质保' },
      { label: '已装点的欢乐家庭' },
      { label: '重新露出笑容的顾客' },
    ],
  },
  steps: {
    kicker: '流程',
    title: '从色样到软糯,仅需4步',
    items: [
      { title: '选择你的色彩', text: '在上方互动体验区选择糖果色与软糯程度。' },
      { title: '测量与回弹测试', text: '我们的团队根据您的空间与家庭调整坐垫软硬度。' },
      { title: '手工塑形', text: '每一个圆润的扶手与坐垫都经手工打磨与精心缝制。' },
      { title: '弹进您的家', text: '送货上门、拆包、蓬松整理——随时准备好第一次堆叠。' },
    ],
  },
  gallery: {
    kicker: '真实的欢乐家庭',
    title: '处处洋溢欢乐的角落',
    captions: [
      '奥斯汀阳光房 · Bubble 系列',
      '儿童游戏室 · Gumdrop 休闲椅',
      '复式公寓 · Marshmallow 双人座',
      '阅读角 · Butterscotch 模块沙发',
      '家庭休闲区 · Cotton Candy 躺椅',
    ],
  },
  testimonials: {
    kicker: '快乐的拥趸',
    title: '大家都停不下来地捏它',
    items: [
      { name: 'Maya Chen', role: '室内设计师 · 奥斯汀', quote: '拍照像糖果一样好看,亲手摸起来更柔软。我的客户现在每次拍摄都指定要薄荷绿款。' },
      { name: 'Diego Alvarez', role: '三个孩子的爸爸 · 丹佛', quote: '孩子们每天都用坐垫搭枕头堡垒,坐垫总能立刻回弹。物超所值。' },
      { name: 'Priya Nair', role: '公寓业主 · 西雅图', quote: '网站上的互动体验工具帮我完美挑选了珊瑚色面料——和我的灵感板完全匹配。' },
    ],
  },
  faqs: {
    kicker: '常见问题',
    title: '大家最爱问的问题',
    items: [
      { question: '明亮的糖果色面料容易脏吗?', answer: '完全不会!每种糖果色编织面料都经过水性防污处理,污渍轻松擦掉,坐垫套也可机洗。' },
      { question: '我可以在一张沙发上搭配多种颜色吗?', answer: '可以——在互动体验区选择基础面料和最多两种点缀色坐垫,完全免费。' },
      { question: '送货需要多久?', answer: '现货款式3-5天送达。完全定制的配色组合需要2-3周进行塑形、缝制和回弹测试。' },
      { question: '泡棉到底是软还是硬?', answer: '两者兼具!我们的三层泡棉表层软糯,底层支撑力强,柔软但绝不会塌陷。' },
      { question: '退换货政策是怎样的?', answer: '45天满意保证——如果它没能让你露出笑容,可退货获得全额退款或更换面料。' },
    ],
  },
  cta: {
    kicker: '从一份色样开始',
    title: '让你的客厅笑得更灿烂一点',
    subtitle: '免费索取糖果色色样套装,在家亲手感受软糯,选出让你最开心的颜色。',
    primary: '获取免费色样',
    secondary: '致电我们:1-800-POP-SOFA',
  },
  footerBits: {
    ratingSuffix: '评分',
  },
};

const ar: Sofa14Content = {
  nav: {
    home: 'الرئيسية',
    story: 'قصتنا',
    collections: 'المجموعات',
    products: 'المنتجات',
    playground: 'منطقة التجربة',
    gallery: 'معرض الصور',
    contact: 'تواصل معنا',
  },
  hero: {
    badge: 'صوفا بلوم · راحة مرحة منذ 2016',
    title1: 'اغرق في',
    titleHighlight: 'نعومة مرنة',
    title2: 'مليئة بالسعادة',
    subtitle:
      'أرائك بألوان الحلوى محشوة بوسائد ناعمة كالصلصال ورغوة مرنة. مشرقة، مرحة، وصُممت لأيام الأحد الكسولة.',
    ctaPrimary: 'استكشف المجموعات',
    ctaSecondary: 'العب بالألوان',
    badgeNumber: '24',
    badgeLabel: 'مستوى راحة تم اختباره',
    promos: [
      { label: 'رغوة ناعمة كالسحاب', text: 'مزيج ميموري فوم ثلاثي الطبقات' },
      { label: 'قماش مقاوم للبقع', text: 'نسيج حلوى يُمسح بسهولة' },
      { label: 'ضمان 10 سنوات', text: 'يشمل الهيكل والوسائد' },
    ],
  },
  marquee: ['نعومة مرنة', 'مرح وحيوية', 'ألوان الحلوى', 'ناعم كالصلصال', 'بهجة دائمة', 'يعود لشكله دائماً'],
  story: {
    kicker: 'قصتنا',
    title: 'ثلاثة أشياء لا نسمح بتسطيحها أبداً',
    items: [
      { title: 'وُلدت من العلكة', text: 'بدأت لوحة ألوان بلوم من بقايا دهانات خلال جولة في مصنع للحلوى — كانت مبهجة جداً لنهدرها.' },
      { title: 'تُشكَّل كالصلصال', text: 'كل ذراع ووسادة تُقوَّس يدوياً حتى تصبح ملمسها كالصلصال الطري، دون أي حافة صلبة.' },
      { title: 'صُممت لتعود لشكلها', text: 'أنوية الرغوة المعاد تدويرها تعود لشكلها بعد كل تكديس أو قيلولة أو قلعة وسائد.' },
    ],
  },
  collections: {
    kicker: 'المجموعات',
    title: 'ثلاثة أمزجة، ومرونة بلا حدود',
    subtitle: 'اختر مزاجك اللوني — كل مجموعة عبارة عن لوحة كاملة من الأشكال الناعمة لكل غرفة.',
    viewLabel: 'عرض المجموعة',
    items: [
      { title: 'بابل', tagline: 'نعناعي · بوكليه مرن', description: 'أشكال دائرية منتفخة بألوان نعناعية باستيل لغرفة معيشة منعشة ومشرقة.' },
      { title: 'مارشميلو', tagline: 'سماوي · مخمل سحابي', description: 'وسائد ضخمة أشبه بالسحاب باللون السماوي، صُممت للغرق فيها لساعات.' },
      { title: 'غامدروب', tagline: 'مرجاني · نسيج حلوى', description: 'منحنيات مرجانية مرحة على قاعدة صلصالية سميكة — لمسة من البهجة في كل زاوية.' },
    ],
    countSuffix: 'موديل',
  },
  products: {
    kicker: 'الأكثر مبيعاً',
    title: 'أكثر القطع راحة في المتجر',
    addLabel: 'أضف إلى السلة',
    items: [
      { name: 'بابل 3 مقاعد', fabric: 'بوكليه · نعناعي', badge: 'الأكثر مبيعاً' },
      { name: 'مارشميلو مقعدين', fabric: 'مخمل سحابي · سماوي', badge: '' },
      { name: 'غامدروب لاونج', fabric: 'نسيج حلوى · مرجاني', badge: 'جديد' },
      { name: 'باترسكوتش موديولار', fabric: 'حياكة سميكة · زبدي', badge: '' },
      { name: 'كوتون كاندي ديباد', fabric: 'قطن منفوش · سماوي', badge: '' },
      { name: 'جيلي بين', fabric: 'بوكليه · مرجاني', badge: 'إصدار محدود' },
    ],
  },
  playground: {
    kicker: 'جرّب النعومة بنفسك',
    title: 'اختر القماش، واشعر بالنعومة',
    subtitle: 'انقر على عيّنة لون، ثم حرّك منزلق الراحة — وشاهد الوسادة تنغرز وترتد في الوقت الفعلي.',
    comfortLabel: 'وضع الراحة',
    firmnessLabel: 'الصلابة',
    swatchLabel: 'لون القماش',
    resultTitle: 'وسادتك المخصصة',
    resultHint: 'هذا تقريباً شعور أريكتك في ليلة مشاهدة الأفلام.',
    comforts: [
      { title: 'سحابي', text: 'راحة فائقة النعومة والانغراس، كأنك تغفو على قطعة حلوى مطاطية.' },
      { title: 'مرن', text: 'نعومة متوازنة مع دعم ارتدادي لطيف.' },
      { title: 'نطاط', text: 'مرن وداعم، مثالي لأمسيات الألعاب العائلية.' },
    ],
    fabrics: [
      { name: 'بابل نعناعي' },
      { name: 'مارشميلو سماوي' },
      { name: 'غامدروب مرجاني' },
      { name: 'صنشاين زبدي' },
    ],
  },
  stats: {
    items: [
      { label: 'مستوى راحة تم اختباره' },
      { label: 'سنوات من الضمان المبهج' },
      { label: 'منزل مبهج تم تأثيثه' },
      { label: 'عميل عادت له الابتسامة' },
    ],
  },
  steps: {
    kicker: 'كيف تعمل',
    title: 'من العيّنة إلى النعومة في 4 خطوات',
    items: [
      { title: 'اختر لونك المفضل', text: 'اختر لون الحلوى ومستوى النعومة في منطقة التجربة أعلاه.' },
      { title: 'نقيس ونختبر الارتداد', text: 'يقوم فريقنا بضبط صلابة الوسائد لتناسب مساحتك وعائلتك.' },
      { title: 'تُشكَّل يدوياً', text: 'كل ذراع ووسادة كروية الشكل تُقوَّس وتُخاط بعناية.' },
      { title: 'ترتد إلى منزلك', text: 'تُسلَّم، تُفتح، وتُنفَّش — جاهزة لأول عملية تكديس.' },
    ],
  },
  gallery: {
    kicker: 'منازل مبهجة حقيقية',
    title: 'زوايا مبهجة في كل مكان',
    captions: [
      'غرفة شمسية في أوستن · مجموعة بابل',
      'غرفة ألعاب الأطفال · غامدروب لاونج',
      'شقة لوفت · مارشميلو مقعدين',
      'ركن قراءة · باترسكوتش موديولار',
      'صالة عائلية · كوتون كاندي ديباد',
    ],
  },
  testimonials: {
    kicker: 'عملاء سعداء',
    title: 'الجميع لا يتوقفون عن الضغط عليها',
    items: [
      { name: 'مايا تشن', role: 'مصممة ديكور داخلي · أوستن', quote: 'تبدو في الصور كالحلوى وأكثر نعومة في الواقع. عملائي يطلبون اللون النعناعي في كل جلسة تصوير الآن.' },
      { name: 'دييغو ألفاريز', role: 'أب لثلاثة أطفال · دنفر', quote: 'أطفالي يبنون قلاع الوسائد كل يوم والوسائد ترتد لشكلها دائماً. تستحق كل قرش.' },
      { name: 'بريا نائير', role: 'صاحبة استوديو · سياتل', quote: 'أداة منطقة التجربة على الموقع ساعدتني في اختيار القماش المرجاني بشكل مثالي — يطابق لوحة إلهامي تماماً.' },
    ],
  },
  faqs: {
    kicker: 'أسئلة وأجوبة',
    title: 'الأسئلة الأكثر شيوعاً',
    items: [
      { question: 'هل تتلطخ الألوان الباستيلية الزاهية بسهولة؟', answer: 'أبداً! كل نسيج بلون الحلوى مُعالج بطبقة حماية مائية من البقع، فتُمسح البقع بسهولة والأغطية قابلة للغسل في الغسالة.' },
      { question: 'هل يمكنني مزج أكثر من لون في أريكة واحدة؟', answer: 'نعم — اختر قماشاً أساسياً وحتى لونين إضافيين للوسائد في منطقة التجربة، مجاناً تماماً.' },
      { question: 'كم تستغرق مدة التوصيل؟', answer: 'القطع المتوفرة تصل خلال 3-5 أيام. توليفات الألوان المخصصة بالكامل تستغرق 2-3 أسابيع للتشكيل والخياطة والاختبار.' },
      { question: 'هل الرغوة ناعمة فعلاً أم صلبة من الداخل؟', answer: 'كلاهما! رغوتنا ثلاثية الطبقات لها سطح ناعم وقاعدة داعمة، فهي طرية لكنها لا تنهار أبداً.' },
      { question: 'ما هي سياسة الإرجاع لديكم؟', answer: 'ضمان رضا لمدة 45 يوماً — إن لم تُشعرك بالابتسامة، أعدها لاسترداد كامل المبلغ أو استبدال القماش.' },
    ],
  },
  cta: {
    kicker: 'ابدأ بعيّنة قماش',
    title: 'اجعل غرفة معيشتك تبتسم أكثر',
    subtitle: 'اطلب مجموعة عيّنات باستيل مجانية، جرّبها في منزلك، واختر اللون الذي يُسعدك أكثر.',
    primary: 'احصل على عيّنات مجانية',
    secondary: 'اتصل بنا: 1-800-POP-SOFA',
  },
  footerBits: {
    ratingSuffix: 'تقييم',
  },
};

export const SOFA14_CONTENT = { en, vi, fr, cn, ar };

export function useSofa14Content() {
  const { currentLang } = useTranslate();
  return SOFA14_CONTENT[currentLang.value as keyof typeof SOFA14_CONTENT] ?? SOFA14_CONTENT.en;
}
