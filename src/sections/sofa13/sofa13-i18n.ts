import { useTranslate } from 'src/locales';

// ----------------------------------------------------------------------

const en = {
  nav: {
    home: 'Home',
    story: 'Heritage',
    collections: 'Collections',
    products: 'Salon Pieces',
    materials: 'Materials',
    gallery: 'Interiors',
    contact: 'Contact',
  },
  hero: {
    badge: 'Sofa Noir · Atelier since 1928',
    titleLine1: 'Sit inside',
    titleEm: 'the gilded age',
    titleLine2: 'of the night',
    subtitle:
      'Hand-finished sofas in noir lacquer and gold leaf, cut with the geometry of the jazz age. Theatrical by design, built to last generations.',
    ctaPrimary: 'Explore the collections',
    ctaSecondary: 'Book a private viewing',
    promos: [
      { label: 'Gold-leaf finish', text: 'Hand-gilded by master artisans' },
      { label: 'Lifetime frame', text: 'Solid walnut, mortise joinery' },
      { label: '14-year warranty', text: 'Frame & cushion core' },
    ],
    statNumber: '32',
    statLabel: 'hand-finishing steps',
  },
  marquee: ['ART DECO', 'NOIR & GOLD', 'GILDED EDGES', 'JAZZ AGE', 'HAND CUT VELVET', 'THEATRE OF LIGHT'],
  story: {
    overline: 'The Atelier',
    title: 'Three vows carved in gold',
    items: [
      { title: 'Born of the stage', text: 'Every silhouette borrows from 1920s theatre curtains and cabaret staircases — drama held in still furniture.' },
      { title: 'Cut in gold leaf', text: 'Trims are gilded by hand, one leaf at a time, so no two sofas catch the light exactly alike.' },
      { title: 'Built for the ages', text: 'Solid walnut frames and mortise joints, upholstered to be reupholstered — an heirloom, not a purchase.' },
    ],
  },
  collections: {
    overline: 'Collections',
    title: 'Three acts of noir & gold',
    description:
      'Each collection stages a different mood of the jazz age — pick the one that matches your evenings.',
    viewCta: 'View collection',
    items: [
      { title: 'Gatsby', tagline: 'Emerald velvet · Gold trim', description: 'Deep-buttoned backs and sunburst arms, cut for grand rooms and grander parties.', count: '9 pieces' },
      { title: 'Chrysler', tagline: 'Noir lacquer · Brass inlay', description: 'Stepped chevron legs and lacquered timber, sharp as a skyline silhouette.', count: '7 pieces' },
      { title: 'Cabaret', tagline: 'Champagne bouclé · Gold piping', description: 'Curved low-slung lounging, upholstered in warm champagne bouclé.', count: '6 pieces' },
    ],
  },
  products: {
    overline: 'Salon Pieces',
    title: 'The pieces everyone requests',
    fabricLabel: 'Fabric',
    ctaLabel: 'Reserve',
    badges: { bestseller: 'Bestseller', new: 'New', limited: 'Limited' },
    items: [
      { name: 'Gatsby Grand Sofa', fabric: 'Emerald velvet · Gold trim' },
      { name: 'Chrysler Loveseat', fabric: 'Noir lacquer · Brass inlay' },
      { name: 'Cabaret Lounge Chair', fabric: 'Champagne bouclé' },
      { name: 'Sunburst Sectional', fabric: 'Gold velvet · Walnut frame' },
      { name: 'Deco Armchair', fabric: 'Emerald velvet · Fan back' },
      { name: 'Midnight Daybed', fabric: 'Noir velvet · Gold piping' },
    ],
  },
  materials: {
    overline: 'Materials Table',
    title: 'Touch the gilded surface',
    description: 'Select a swatch to see its character. A real swatch box ships to you, free, on request.',
    items: [
      { name: 'Emerald Velvet', detail: 'Cotton-silk velvet dyed jewel emerald, deep pile that darkens beautifully with light.', specs: ['60,000 double rubs', 'Fade resistant', 'Hand-steamed finish'] },
      { name: 'Noir Lacquer Timber', detail: 'Walnut lacquered in seven coats for a mirror-noir shine that resists fingerprints.', specs: ['7-coat lacquer', 'Scratch resistant', 'Hand-polished'] },
      { name: 'Champagne Bouclé', detail: 'Warm ivory-gold bouclé, soft looped texture that softens sharp Deco lines.', specs: ['Recycled fibre 55%', 'Pill resistant', 'Season-round comfort'] },
      { name: 'Gold Leaf Trim', detail: '23-karat gold leaf applied by hand to every edge, sealed to hold its shine for decades.', specs: ['23-karat leaf', 'Hand gilded', 'UV sealed'] },
    ],
  },
  stats: {
    items: [
      { label: 'Hand-finishing steps per piece' },
      { label: 'Years of frame & cushion warranty' },
      { label: 'Salons furnished worldwide' },
      { label: 'Clients who reorder' },
    ],
  },
  steps: {
    overline: 'The Process',
    title: 'From sketch to spotlight',
    items: [
      { no: '01', title: 'Sketch & measure', text: 'Our designer visits to sketch the room and the mood you want the piece to hold.' },
      { no: '02', title: 'Choose your gold', text: 'A gilded swatch box — fabric, lacquer, gold leaf tone — arrives at your door.' },
      { no: '03', title: 'Hand gild & upholster', text: 'Frame lacquered, trim gilded leaf by leaf, upholstery hand-buttoned over 21 days.' },
      { no: '04', title: 'Grand entrance', text: 'White-glove delivery, styled in place, with a care ritual for the gold finish.' },
    ],
  },
  gallery: {
    overline: 'Real Interiors',
    title: 'Rooms staged in noir & gold',
    items: [
      { caption: 'Penthouse salon · Gatsby Grand' },
      { caption: 'Downtown loft · Chrysler Loveseat' },
      { caption: 'Hotel lobby · Sunburst Sectional' },
      { caption: 'Private theatre · Cabaret Lounge' },
      { caption: 'Corner suite · Deco Armchair' },
    ],
  },
  testimonials: {
    overline: 'What clients say',
    title: 'Applause from every salon',
    items: [
      { name: 'Isabelle Laurent', role: 'Interior architect · Paris', quote: 'The gold leaf catches candlelight exactly like old cabaret posters. My clients gasp every time.' },
      { name: 'Marcus Chen', role: 'Hotel design director · Singapore', quote: 'We furnished an entire lobby with the Chrysler line — three years on, the lacquer still looks freshly poured.' },
      { name: 'Amira Haddad', role: 'Set designer · Dubai', quote: 'Theatrical without being fragile. The swatch box let me match the emerald to our stage lighting perfectly.' },
    ],
  },
  faqs: {
    overline: 'Questions & Answers',
    title: 'Before the curtain rises',
    items: [
      { question: 'Does the gold leaf wear off over time?', answer: 'Every trim is sealed after gilding with a museum-grade lacquer, so the shine is protected from daily handling for decades. We offer a complimentary re-gilding service after year ten.' },
      { question: 'Can dimensions be customised?', answer: 'Yes — depth, length and arm height are all adjustable in centimetres. Custom sizing carries a 10–15% surcharge over list price.' },
      { question: 'How long does production take?', answer: 'In-stock pieces ship within 5 days. Made-to-order pieces take 3–4 weeks, as gilding and hand-buttoning cannot be rushed.' },
      { question: 'Can I see the pieces in person?', answer: 'Our salons in Paris, Singapore and Dubai are open by appointment. We can also send a full swatch box, free of charge, anywhere in the world.' },
      { question: 'What is your return policy?', answer: 'Thirty days to return in-stock pieces if flawed or misdescribed. Made-to-order pieces include one complimentary re-upholstery within the first year.' },
    ],
  },
  cta: {
    overline: 'Begin with a swatch box',
    title: 'Let the gold choose you',
    description: 'Request a complimentary swatch box of velvet, lacquer and gold leaf, shipped to your door. No obligation — only theatre.',
    ctaPrimary: 'Request swatch box',
    ctaSecondary: 'Call the atelier',
    phone: '+1 800 213 9284',
  },
};

export type Sofa13Content = typeof en;

const vi: Sofa13Content = {
  nav: {
    home: 'Trang chủ',
    story: 'Di sản',
    collections: 'Bộ sưu tập',
    products: 'Sản phẩm',
    materials: 'Chất liệu',
    gallery: 'Không gian',
    contact: 'Liên hệ',
  },
  hero: {
    badge: 'Sofa Noir · Xưởng chế tác từ 1928',
    titleLine1: 'Ngồi giữa',
    titleEm: 'thời hoàng kim',
    titleLine2: 'ánh đèn đêm',
    subtitle:
      'Sofa hoàn thiện thủ công với sơn mài đen huyền và dát vàng, cắt theo hình học thời đại Jazz. Kịch tính trong thiết kế, bền vững qua nhiều thế hệ.',
    ctaPrimary: 'Khám phá bộ sưu tập',
    ctaSecondary: 'Đặt lịch xem riêng',
    promos: [
      { label: 'Dát vàng thủ công', text: 'Nghệ nhân dát từng lá vàng' },
      { label: 'Khung trọn đời', text: 'Gỗ óc chó nguyên khối, mộng chốt' },
      { label: 'Bảo hành 14 năm', text: 'Khung & lõi đệm' },
    ],
    statNumber: '32',
    statLabel: 'công đoạn hoàn thiện tay',
  },
  marquee: ['ART DECO', 'ĐEN & VÀNG', 'VIỀN DÁT VÀNG', 'THỜI ĐẠI JAZZ', 'NHUNG CẮT TAY', 'SÂN KHẤU ÁNH SÁNG'],
  story: {
    overline: 'Xưởng chế tác',
    title: 'Ba lời thề khắc bằng vàng',
    items: [
      { title: 'Sinh ra từ sân khấu', text: 'Mỗi đường nét lấy cảm hứng từ rèm nhà hát và cầu thang cabaret thập niên 1920 — kịch tính ẩn trong nội thất tĩnh lặng.' },
      { title: 'Cắt bằng lá vàng', text: 'Viền được dát vàng thủ công từng lá một, nên không chiếc sofa nào bắt sáng giống hệt nhau.' },
      { title: 'Đóng để trường tồn', text: 'Khung gỗ óc chó nguyên khối, mộng chốt chắc chắn, bọc để bọc lại — một di sản, không chỉ là món đồ mua sắm.' },
    ],
  },
  collections: {
    overline: 'Bộ sưu tập',
    title: 'Ba màn diễn đen & vàng',
    description: 'Mỗi bộ sưu tập dựng nên một sắc thái khác của thời đại Jazz — chọn bộ hợp với những buổi tối của bạn.',
    viewCta: 'Xem bộ sưu tập',
    items: [
      { title: 'Gatsby', tagline: 'Nhung ngọc lục bảo · Viền vàng', description: 'Lưng ghế bấm khuy sâu, tay vịn hình rẻ quạt, dành cho phòng khách lớn và những bữa tiệc lớn hơn.', count: '9 mẫu' },
      { title: 'Chrysler', tagline: 'Sơn mài đen · Khảm đồng', description: 'Chân ghế bậc thang zíc-zắc, gỗ sơn mài sắc nét như đường chân trời thành phố.', count: '7 mẫu' },
      { title: 'Cabaret', tagline: 'Bouclé vàng sâm panh · Viền vàng', description: 'Dáng ngồi thấp, cong mềm, bọc bouclé vàng sâm panh ấm áp.', count: '6 mẫu' },
    ],
  },
  products: {
    overline: 'Sản phẩm nổi bật',
    title: 'Những mẫu được yêu cầu nhiều nhất',
    fabricLabel: 'Chất liệu',
    ctaLabel: 'Giữ chỗ',
    badges: { bestseller: 'Bán chạy', new: 'Mới', limited: 'Giới hạn' },
    items: [
      { name: 'Gatsby Grand Sofa', fabric: 'Nhung ngọc lục bảo · Viền vàng' },
      { name: 'Chrysler Loveseat', fabric: 'Sơn mài đen · Khảm đồng' },
      { name: 'Cabaret Lounge Chair', fabric: 'Bouclé vàng sâm panh' },
      { name: 'Sunburst Sectional', fabric: 'Nhung vàng · Khung óc chó' },
      { name: 'Deco Armchair', fabric: 'Nhung ngọc lục bảo · Lưng quạt' },
      { name: 'Midnight Daybed', fabric: 'Nhung đen · Viền vàng' },
    ],
  },
  materials: {
    overline: 'Bàn chất liệu',
    title: 'Chạm vào bề mặt dát vàng',
    description: 'Chọn một mã vải để xem đặc tính. Hộp swatch thật sẽ được gửi miễn phí theo yêu cầu.',
    items: [
      { name: 'Nhung Ngọc Lục Bảo', detail: 'Nhung cotton-lụa nhuộm sắc ngọc lục bảo, tuyết dày lên màu đẹp dưới ánh sáng.', specs: ['60.000 vòng chà xát', 'Chống phai màu', 'Hoàn thiện hấp tay'] },
      { name: 'Gỗ Sơn Mài Đen', detail: 'Gỗ óc chó phủ bảy lớp sơn mài cho độ bóng đen như gương, chống bám vân tay.', specs: ['7 lớp sơn mài', 'Chống trầy xước', 'Đánh bóng thủ công'] },
      { name: 'Bouclé Vàng Sâm Panh', detail: 'Bouclé màu vàng ngà ấm, kết cấu xoăn mềm làm dịu những đường nét Deco sắc cạnh.', specs: ['55% sợi tái chế', 'Chống xù lông', 'Thoải mái quanh năm'] },
      { name: 'Viền Lá Vàng', detail: 'Lá vàng 23 karat dát tay lên mọi đường viền, phủ bảo vệ để giữ độ sáng hàng thập kỷ.', specs: ['Vàng 23 karat', 'Dát thủ công', 'Phủ chống UV'] },
    ],
  },
  stats: {
    items: [
      { label: 'Công đoạn hoàn thiện tay mỗi sản phẩm' },
      { label: 'Năm bảo hành khung & đệm' },
      { label: 'Phòng khách trên thế giới đang dùng' },
      { label: 'Khách quay lại đặt thêm' },
    ],
  },
  steps: {
    overline: 'Quy trình',
    title: 'Từ bản phác thảo tới ánh đèn sân khấu',
    items: [
      { no: '01', title: 'Phác thảo & đo đạc', text: 'Nhà thiết kế tới tận nơi để phác thảo không gian và cảm xúc bạn muốn sản phẩm mang lại.' },
      { no: '02', title: 'Chọn sắc vàng', text: 'Hộp swatch dát vàng — vải, sơn mài, tông vàng — được gửi tận nhà bạn.' },
      { no: '03', title: 'Dát vàng & bọc vải', text: 'Khung sơn mài, viền dát từng lá vàng, bọc vải bấm khuy tay trong 21 ngày.' },
      { no: '04', title: 'Màn ra mắt', text: 'Giao hàng chuẩn dịch vụ cao cấp, bài trí tại chỗ, kèm hướng dẫn chăm sóc lớp vàng.' },
    ],
  },
  gallery: {
    overline: 'Không gian thật',
    title: 'Những căn phòng đen & vàng',
    items: [
      { caption: 'Phòng khách penthouse · Gatsby Grand' },
      { caption: 'Loft trung tâm · Chrysler Loveseat' },
      { caption: 'Sảnh khách sạn · Sunburst Sectional' },
      { caption: 'Rạp hát riêng · Cabaret Lounge' },
      { caption: 'Suite góc · Deco Armchair' },
    ],
  },
  testimonials: {
    overline: 'Khách hàng nói gì',
    title: 'Tràng vỗ tay từ mọi phòng khách',
    items: [
      { name: 'Isabelle Laurent', role: 'Kiến trúc sư nội thất · Paris', quote: 'Lớp dát vàng bắt ánh nến y hệt những áp phích cabaret cổ điển. Khách của tôi luôn trầm trồ.' },
      { name: 'Marcus Chen', role: 'Giám đốc thiết kế khách sạn · Singapore', quote: 'Chúng tôi bọc toàn bộ sảnh bằng dòng Chrysler — ba năm sau lớp sơn mài vẫn như mới đổ.' },
      { name: 'Amira Haddad', role: 'Nhà thiết kế sân khấu · Dubai', quote: 'Kịch tính mà vẫn chắc chắn. Hộp swatch giúp tôi khớp màu ngọc lục bảo với ánh đèn sân khấu hoàn hảo.' },
    ],
  },
  faqs: {
    overline: 'Câu hỏi thường gặp',
    title: 'Trước khi màn nhung kéo lên',
    items: [
      { question: 'Lớp dát vàng có bị phai theo thời gian không?', answer: 'Mỗi viền được phủ lớp sơn mài chuẩn bảo tàng sau khi dát, bảo vệ độ sáng khỏi va chạm hàng ngày trong nhiều thập kỷ. Chúng tôi tặng dịch vụ dát lại vàng miễn phí sau năm thứ mười.' },
      { question: 'Có thể tuỳ chỉnh kích thước không?', answer: 'Có — chiều sâu, chiều dài và chiều cao tay vịn đều điều chỉnh theo cm. Đặt riêng phụ phí 10–15% trên giá niêm yết.' },
      { question: 'Thời gian sản xuất bao lâu?', answer: 'Hàng có sẵn giao trong 5 ngày. Hàng đặt riêng mất 3–4 tuần vì công đoạn dát vàng và bấm khuy tay không thể vội vàng.' },
      { question: 'Tôi có thể xem trực tiếp sản phẩm không?', answer: 'Showroom tại Paris, Singapore và Dubai mở cửa theo lịch hẹn. Chúng tôi cũng gửi hộp swatch đầy đủ miễn phí tới mọi nơi trên thế giới.' },
      { question: 'Chính sách đổi trả thế nào?', answer: 'Đổi trả trong 30 ngày với hàng có sẵn nếu lỗi hoặc sai mô tả. Hàng đặt riêng được tặng một lần bọc lại vải miễn phí trong năm đầu.' },
    ],
  },
  cta: {
    overline: 'Bắt đầu với một hộp swatch',
    title: 'Để sắc vàng chọn bạn',
    description: 'Nhận miễn phí hộp swatch gồm nhung, sơn mài và lá vàng, giao tận cửa. Không ràng buộc mua hàng — chỉ có kịch tính.',
    ctaPrimary: 'Nhận hộp swatch',
    ctaSecondary: 'Gọi xưởng chế tác',
    phone: '1900 6868',
  },
};

const fr: Sofa13Content = {
  nav: {
    home: 'Accueil',
    story: 'Héritage',
    collections: 'Collections',
    products: 'Pièces de salon',
    materials: 'Matières',
    gallery: 'Intérieurs',
    contact: 'Contact',
  },
  hero: {
    badge: 'Sofa Noir · Atelier depuis 1928',
    titleLine1: "Asseyez-vous dans",
    titleEm: "l'âge doré",
    titleLine2: 'de la nuit',
    subtitle:
      "Canapés finis à la main en laque noire et feuille d'or, taillés selon la géométrie du jazz. Théâtraux par nature, faits pour durer des générations.",
    ctaPrimary: 'Découvrir les collections',
    ctaSecondary: 'Réserver une visite privée',
    promos: [
      { label: "Finition feuille d'or", text: 'Dorée à la main par nos artisans' },
      { label: 'Armature à vie', text: 'Noyer massif, assemblage à tenons' },
      { label: 'Garantie 14 ans', text: 'Armature & mousse' },
    ],
    statNumber: '32',
    statLabel: 'étapes de finition manuelle',
  },
  marquee: ['ART DÉCO', 'NOIR & OR', 'BORDS DORÉS', 'ÈRE DU JAZZ', 'VELOURS TAILLÉ MAIN', 'THÉÂTRE DE LUMIÈRE'],
  story: {
    overline: "L'Atelier",
    title: "Trois vœux gravés dans l'or",
    items: [
      { title: 'Né de la scène', text: "Chaque silhouette emprunte aux rideaux de théâtre et aux escaliers de cabaret des années 1920 — le drame figé dans le mobilier." },
      { title: "Taillé à la feuille d'or", text: "Les finitions sont dorées à la main, feuille par feuille, si bien qu'aucun canapé ne capte la lumière de la même façon." },
      { title: "Bâti pour l'éternité", text: 'Armatures en noyer massif et assemblages à tenons, tapissés pour être retapissés — un héritage, pas un achat.' },
    ],
  },
  collections: {
    overline: 'Collections',
    title: 'Trois actes de noir et or',
    description: "Chaque collection met en scène une ambiance différente de l'ère du jazz — choisissez celle qui accompagne vos soirées.",
    viewCta: 'Voir la collection',
    items: [
      { title: 'Gatsby', tagline: 'Velours émeraude · Liseré doré', description: 'Dossiers capitonnés profonds et accoudoirs en éventail, pour les grandes pièces et les plus grandes fêtes.', count: '9 pièces' },
      { title: 'Chrysler', tagline: 'Laque noire · Incrustations laiton', description: "Pieds à chevrons étagés et bois laqué, aussi nets qu'une silhouette de gratte-ciel.", count: '7 pièces' },
      { title: 'Cabaret', tagline: 'Bouclé champagne · Passepoil doré', description: 'Assise basse et courbée, tapissée dans un bouclé champagne chaleureux.', count: '6 pièces' },
    ],
  },
  products: {
    overline: 'Pièces de salon',
    title: 'Les pièces les plus demandées',
    fabricLabel: 'Tissu',
    ctaLabel: 'Réserver',
    badges: { bestseller: 'Best-seller', new: 'Nouveau', limited: 'Édition limitée' },
    items: [
      { name: 'Gatsby Grand Sofa', fabric: 'Velours émeraude · Liseré doré' },
      { name: 'Chrysler Loveseat', fabric: 'Laque noire · Incrustations laiton' },
      { name: 'Cabaret Lounge Chair', fabric: 'Bouclé champagne' },
      { name: 'Sunburst Sectional', fabric: 'Velours doré · Armature noyer' },
      { name: 'Deco Armchair', fabric: 'Velours émeraude · Dossier éventail' },
      { name: 'Midnight Daybed', fabric: 'Velours noir · Passepoil doré' },
    ],
  },
  materials: {
    overline: 'Table des matières',
    title: 'Touchez la surface dorée',
    description: 'Sélectionnez un échantillon pour voir son caractère. Une véritable boîte d\'échantillons vous est envoyée gratuitement sur demande.',
    items: [
      { name: 'Velours Émeraude', detail: 'Velours coton-soie teint émeraude, chute profonde qui se patine magnifiquement à la lumière.', specs: ['60 000 cycles Martindale', 'Résistant à la décoloration', 'Finition vapeur main'] },
      { name: 'Bois Laqué Noir', detail: "Noyer laqué en sept couches pour un noir miroir résistant aux traces de doigts.", specs: ['7 couches de laque', 'Résistant aux rayures', 'Poli à la main'] },
      { name: 'Bouclé Champagne', detail: "Bouclé ivoire-doré chaleureux, texture bouclée douce qui adoucit les lignes Déco.", specs: ['55% fibre recyclée', 'Anti-boulochage', 'Confort toute saison'] },
      { name: "Liseré Feuille d'Or", detail: "Feuille d'or 23 carats appliquée à la main sur chaque bordure, scellée pour des décennies d'éclat.", specs: ['Feuille 23 carats', 'Dorure manuelle', 'Scellé anti-UV'] },
    ],
  },
  stats: {
    items: [
      { label: 'Étapes de finition manuelle par pièce' },
      { label: "Années de garantie armature & mousse" },
      { label: 'Salons meublés dans le monde' },
      { label: 'Clients qui recommandent' },
    ],
  },
  steps: {
    overline: 'Le processus',
    title: 'Du croquis aux projecteurs',
    items: [
      { no: '01', title: 'Croquis & mesures', text: "Notre designer vient esquisser la pièce et l'ambiance que vous souhaitez donner à votre canapé." },
      { no: '02', title: "Choisissez votre or", text: "Une boîte d'échantillons dorée — tissu, laque, ton d'or — arrive chez vous." },
      { no: '03', title: 'Dorure & tapisserie', text: 'Armature laquée, liseré doré feuille après feuille, capitonnage main sur 21 jours.' },
      { no: '04', title: 'Entrée triomphale', text: 'Livraison soignée, mise en scène sur place, avec un rituel d\'entretien de la dorure.' },
    ],
  },
  gallery: {
    overline: 'Intérieurs réels',
    title: 'Des salons mis en scène en noir et or',
    items: [
      { caption: 'Salon penthouse · Gatsby Grand' },
      { caption: 'Loft centre-ville · Chrysler Loveseat' },
      { caption: "Hall d'hôtel · Sunburst Sectional" },
      { caption: 'Théâtre privé · Cabaret Lounge' },
      { caption: "Suite d'angle · Deco Armchair" },
    ],
  },
  testimonials: {
    overline: 'Ce que disent nos clients',
    title: 'Des applaudissements dans chaque salon',
    items: [
      { name: 'Isabelle Laurent', role: 'Architecte d\'intérieur · Paris', quote: "La feuille d'or capte la lumière des bougies exactement comme les affiches de cabaret d'époque. Mes clients sont toujours éblouis." },
      { name: 'Marcus Chen', role: "Directeur design hôtelier · Singapour", quote: 'Nous avons meublé tout un hall avec la ligne Chrysler — trois ans après, la laque semble toujours neuve.' },
      { name: 'Amira Haddad', role: 'Scénographe · Dubaï', quote: "Théâtral sans être fragile. La boîte d'échantillons m'a permis d'accorder l'émeraude à notre éclairage scénique parfaitement." },
    ],
  },
  faqs: {
    overline: 'Questions & Réponses',
    title: 'Avant le lever de rideau',
    items: [
      { question: "La feuille d'or s'estompe-t-elle avec le temps?", answer: "Chaque liseré est scellé après dorure avec une laque de qualité muséale, protégeant l'éclat pendant des décennies. Nous offrons une redorure gratuite après dix ans." },
      { question: 'Les dimensions sont-elles personnalisables?', answer: 'Oui — profondeur, longueur et hauteur des accoudoirs sont ajustables au centimètre. Le sur-mesure entraîne un supplément de 10 à 15%.' },
      { question: 'Quel est le délai de production?', answer: 'Les pièces en stock partent sous 5 jours. Les pièces sur commande prennent 3 à 4 semaines, la dorure et le capitonnage ne pouvant être précipités.' },
      { question: 'Puis-je voir les pièces en personne?', answer: 'Nos salons à Paris, Singapour et Dubaï sont ouverts sur rendez-vous. Nous pouvons aussi envoyer une boîte d\'échantillons complète, gratuitement, partout dans le monde.' },
      { question: 'Quelle est votre politique de retour?', answer: 'Trente jours pour retourner les pièces en stock si défectueuses ou mal décrites. Les pièces sur commande incluent une retapisserie gratuite la première année.' },
    ],
  },
  cta: {
    overline: "Commencez par une boîte d'échantillons",
    title: "Laissez l'or vous choisir",
    description: "Demandez une boîte d'échantillons gratuite de velours, laque et feuille d'or, livrée chez vous. Aucun engagement — seulement du théâtre.",
    ctaPrimary: "Demander la boîte d'échantillons",
    ctaSecondary: "Appeler l'atelier",
    phone: '+33 1 84 60 21 09',
  },
};

const cn: Sofa13Content = {
  nav: {
    home: '首页',
    story: '传承',
    collections: '系列',
    products: '沙龙精品',
    materials: '材质',
    gallery: '空间实景',
    contact: '联系我们',
  },
  hero: {
    badge: 'Sofa Noir · 1928年创立工坊',
    titleLine1: '坐入',
    titleEm: '黄金年代',
    titleLine2: '的夜色之中',
    subtitle: '手工黑漆与金箔工艺沙发，以爵士时代的几何美学裁切而成。设计充满戏剧张力，历经几代仍历久弥新。',
    ctaPrimary: '探索系列',
    ctaSecondary: '预约私享品鉴',
    promos: [
      { label: '金箔贴面', text: '匠人手工贴金' },
      { label: '终身骨架', text: '实心胡桃木榫卯结构' },
      { label: '14年保修', text: '骨架与坐垫芯' },
    ],
    statNumber: '32',
    statLabel: '道手工精修工序',
  },
  marquee: ['装饰艺术', '黑与金', '镀金边饰', '爵士时代', '手工裁绒', '光影剧场'],
  story: {
    overline: '工坊故事',
    title: '三条以金铭刻的誓言',
    items: [
      { title: '源自舞台', text: '每一处轮廓皆取自1920年代剧院幕帘与卡巴莱楼梯的戏剧感，静止的家具中蕴藏张力。' },
      { title: '金箔裁边', text: '边饰由匠人逐片手工贴金，因此没有两张沙发折射的光泽完全相同。' },
      { title: '为传世而生', text: '实心胡桃木骨架配合榫卯结构，可拆卸重新装裱——这是传家之物，而非一次性消费品。' },
    ],
  },
  collections: {
    overline: '系列',
    title: '黑与金的三幕剧',
    description: '每个系列演绎爵士时代的不同氛围——选择契合您夜晚气质的那一款。',
    viewCta: '查看系列',
    items: [
      { title: 'Gatsby 盖茨比', tagline: '祖母绿丝绒 · 金色滚边', description: '深邃扣钉靠背与扇形扶手，专为盛大空间与更盛大的派对而生。', count: '9款' },
      { title: 'Chrysler 克莱斯勒', tagline: '黑色烤漆 · 黄铜镶嵌', description: '阶梯锯齿形桌腿与烤漆木材，锐利如城市天际线。', count: '7款' },
      { title: 'Cabaret 卡巴莱', tagline: '香槟色布克力 · 金色包边', description: '低矮曲线造型，以温暖香槟色布克力面料包覆。', count: '6款' },
    ],
  },
  products: {
    overline: '沙龙精品',
    title: '最受欢迎的单品',
    fabricLabel: '面料',
    ctaLabel: '预定',
    badges: { bestseller: '畅销', new: '新品', limited: '限量' },
    items: [
      { name: 'Gatsby Grand Sofa', fabric: '祖母绿丝绒 · 金色滚边' },
      { name: 'Chrysler Loveseat', fabric: '黑色烤漆 · 黄铜镶嵌' },
      { name: 'Cabaret Lounge Chair', fabric: '香槟色布克力' },
      { name: 'Sunburst Sectional', fabric: '金色丝绒 · 胡桃木骨架' },
      { name: 'Deco Armchair', fabric: '祖母绿丝绒 · 扇形靠背' },
      { name: 'Midnight Daybed', fabric: '黑色丝绒 · 金色包边' },
    ],
  },
  materials: {
    overline: '材质一览',
    title: '触摸镀金表面',
    description: '选择一款面料样卡以了解其特性。真实样卡可免费应要求寄送到府。',
    items: [
      { name: '祖母绿丝绒', detail: '棉丝混纺丝绒染成祖母绿色，绒毛厚实，光线下色泽愈显深邃迷人。', specs: ['耐磨6万次', '抗褪色', '手工蒸汽定型'] },
      { name: '黑色烤漆木材', detail: '胡桃木经七层烤漆处理，呈现镜面般的黑色光泽，抗指纹。', specs: ['七层烤漆', '抗刮擦', '手工抛光'] },
      { name: '香槟色布克力', detail: '温暖的象牙金色布克力面料，柔软圈绒质感柔化装饰艺术的锐利线条。', specs: ['55%再生纤维', '抗起球', '四季舒适'] },
      { name: '金箔滚边', detail: '23K金箔手工贴于每一处边缘，封层处理确保光泽历经数十年不褪。', specs: ['23K金箔', '手工贴金', '防紫外线封层'] },
    ],
  },
  stats: {
    items: [
      { label: '每件单品的手工精修工序' },
      { label: '骨架与坐垫保修年限' },
      { label: '全球已布置的沙龙空间' },
      { label: '复购客户比例' },
    ],
  },
  steps: {
    overline: '制作流程',
    title: '从草图到聚光灯下',
    items: [
      { no: '01', title: '草图与测量', text: '设计师登门为空间绘制草图，倾听您希望这件作品承载的氛围。' },
      { no: '02', title: '选择您的金色', text: '一份镀金样卡——面料、烤漆、金箔色调——将寄送至您家中。' },
      { no: '03', title: '手工贴金与装裱', text: '骨架烤漆、边饰逐片贴金、面料手工扣钉，历时21天完成。' },
      { no: '04', title: '隆重登场', text: '尊享级配送，现场造型摆放，并附赠金饰保养指南。' },
    ],
  },
  gallery: {
    overline: '真实空间',
    title: '黑与金演绎的房间',
    items: [
      { caption: '顶层沙龙 · Gatsby Grand' },
      { caption: '市中心复式公寓 · Chrysler Loveseat' },
      { caption: '酒店大堂 · Sunburst Sectional' },
      { caption: '私人剧场 · Cabaret Lounge' },
      { caption: '转角套房 · Deco Armchair' },
    ],
  },
  testimonials: {
    overline: '客户评价',
    title: '来自每一间沙龙的掌声',
    items: [
      { name: 'Isabelle Laurent', role: '室内建筑师 · 巴黎', quote: '金箔在烛光下折射的光泽与老式卡巴莱海报如出一辙，每次都让我的客户惊叹不已。' },
      { name: 'Marcus Chen', role: '酒店设计总监 · 新加坡', quote: '我们用Chrysler系列布置了整个大堂——三年过去，烤漆依旧如新。' },
      { name: 'Amira Haddad', role: '舞台设计师 · 迪拜', quote: '戏剧感十足却毫不脆弱。样卡让我完美地将祖母绿与我们的舞台灯光相匹配。' },
    ],
  },
  faqs: {
    overline: '常见问题',
    title: '幕布升起之前',
    items: [
      { question: '金箔会随时间褪色吗？', answer: '每处边饰贴金后都会封上博物馆级漆层，保护光泽历经数十年日常使用不褪色。十年后我们还提供免费重新贴金服务。' },
      { question: '尺寸可以定制吗？', answer: '可以——深度、长度与扶手高度均可按厘米调整。定制尺寸将在标价基础上加收10%至15%。' },
      { question: '生产周期需要多久？', answer: '现货商品5天内发货。定制商品需3至4周，因为贴金与手工扣钉工艺无法加快。' },
      { question: '可以亲自到店查看吗？', answer: '我们位于巴黎、新加坡与迪拜的沙龙均可预约参观。我们也可免费向全球任何地址寄送完整样卡。' },
      { question: '退换货政策是怎样的？', answer: '现货商品如有瑕疵或描述不符，可在30天内退货。定制商品在第一年内可享一次免费重新装裱服务。' },
    ],
  },
  cta: {
    overline: '从一份样卡开始',
    title: '让金色选择你',
    description: '免费申领包含丝绒、烤漆与金箔的样卡，直送到府。无需任何承诺——只为呈现戏剧之美。',
    ctaPrimary: '申领样卡',
    ctaSecondary: '致电工坊',
    phone: '+86 400 821 3927',
  },
};

const ar: Sofa13Content = {
  nav: {
    home: 'الرئيسية',
    story: 'الإرث',
    collections: 'المجموعات',
    products: 'قطع الصالون',
    materials: 'الخامات',
    gallery: 'التصاميم الداخلية',
    contact: 'اتصل بنا',
  },
  hero: {
    badge: 'صوفا نوار · ورشة منذ عام 1928',
    titleLine1: 'اجلس في قلب',
    titleEm: 'العصر الذهبي',
    titleLine2: 'لليل',
    subtitle: 'أرائك مُشغَّلة يدويًا بطلاء أسود لامع وورق ذهب، مقصوصة بهندسة عصر الجاز. مسرحية بتصميمها، ومصنوعة لتدوم أجيالاً.',
    ctaPrimary: 'استكشف المجموعات',
    ctaSecondary: 'احجز معاينة خاصة',
    promos: [
      { label: 'تشطيب بورق الذهب', text: 'مذهّب يدويًا بواسطة حرفيين محترفين' },
      { label: 'هيكل مدى الحياة', text: 'خشب جوز صلب بوصلات نجارة متينة' },
      { label: 'ضمان 14 عامًا', text: 'الهيكل ولب الوسائد' },
    ],
    statNumber: '32',
    statLabel: 'خطوة تشطيب يدوية',
  },
  marquee: ['آرت ديكو', 'أسود وذهبي', 'حواف مذهّبة', 'عصر الجاز', 'مخمل مقصوص يدويًا', 'مسرح الضوء'],
  story: {
    overline: 'الورشة',
    title: 'ثلاثة عهود منقوشة بالذهب',
    items: [
      { title: 'وُلدت من المسرح', text: 'كل تفصيلة مستوحاة من ستائر مسارح ودرجات كباريهات عشرينيات القرن الماضي — دراما محفوظة في أثاث ثابت.' },
      { title: 'مقصوصة بورق الذهب', text: 'تُذهَّب الحواف يدويًا، ورقة تلو الأخرى، فلا تتشابه أريكتان في انعكاس الضوء تمامًا.' },
      { title: 'مصنوعة لتدوم', text: 'هياكل من خشب الجوز الصلب ووصلات نجارة متينة، مُنجَّدة لتُعاد تنجيدها — إرث لا مجرد قطعة أثاث.' },
    ],
  },
  collections: {
    overline: 'المجموعات',
    title: 'ثلاثة فصول من الأسود والذهبي',
    description: 'تجسّد كل مجموعة أجواء مختلفة من عصر الجاز — اختر ما يناسب أمسياتك.',
    viewCta: 'عرض المجموعة',
    items: [
      { title: 'غاتسبي', tagline: 'مخمل زمردي · حواف ذهبية', description: 'ظهور مبطّنة بأزرار عميقة وأذرع بشكل مروحي، مصممة للغرف الفخمة والحفلات الأضخم.', count: '9 قطع' },
      { title: 'كرايسلر', tagline: 'طلاء أسود لامع · تطعيم نحاسي', description: 'أرجل متدرجة بزخرفة متعرجة وخشب مطلي، حادة كخط أفق ناطحات السحاب.', count: '7 قطع' },
      { title: 'كباريه', tagline: 'قماش بوكليه شمبانيا · حواف ذهبية', description: 'جلسة منخفضة ومنحنية، مُنجّدة بقماش بوكليه دافئ بلون الشمبانيا.', count: '6 قطع' },
    ],
  },
  products: {
    overline: 'قطع الصالون',
    title: 'القطع الأكثر طلبًا',
    fabricLabel: 'القماش',
    ctaLabel: 'احجز',
    badges: { bestseller: 'الأكثر مبيعًا', new: 'جديد', limited: 'إصدار محدود' },
    items: [
      { name: 'Gatsby Grand Sofa', fabric: 'مخمل زمردي · حواف ذهبية' },
      { name: 'Chrysler Loveseat', fabric: 'طلاء أسود لامع · تطعيم نحاسي' },
      { name: 'Cabaret Lounge Chair', fabric: 'قماش بوكليه شمبانيا' },
      { name: 'Sunburst Sectional', fabric: 'مخمل ذهبي · هيكل خشب جوز' },
      { name: 'Deco Armchair', fabric: 'مخمل زمردي · ظهر مروحي' },
      { name: 'Midnight Daybed', fabric: 'مخمل أسود · حواف ذهبية' },
    ],
  },
  materials: {
    overline: 'جدول الخامات',
    title: 'المس السطح المذهّب',
    description: 'اختر عينة قماش لمعرفة خصائصها. صندوق عينات حقيقي يُرسل مجانًا عند الطلب.',
    items: [
      { name: 'مخمل زمردي', detail: 'مخمل قطني حريري مصبوغ بلون زمردي، وبر كثيف يزداد جمالاً مع الضوء.', specs: ['60,000 دورة احتكاك', 'مقاوم للبهتان', 'تشطيب بالبخار اليدوي'] },
      { name: 'خشب مطلي أسود', detail: 'خشب جوز مطلي بسبع طبقات ليمنحك لمعانًا أسود كالمرآة يقاوم آثار الأصابع.', specs: ['7 طبقات طلاء', 'مقاوم للخدش', 'تلميع يدوي'] },
      { name: 'بوكليه شمبانيا', detail: 'قماش بوكليه دافئ بلون ذهبي عاجي، ملمس حلقي ناعم يخفف من حدة خطوط الآرت ديكو.', specs: ['55% ألياف معاد تدويرها', 'مقاوم للتكرمش', 'راحة على مدار الفصول'] },
      { name: 'حواف ورق الذهب', detail: 'ورق ذهب عيار 23 قيراط يُطبَّق يدويًا على كل حافة، ومُحكم لضمان بريق يدوم عقودًا.', specs: ['ورق 23 قيراط', 'تذهيب يدوي', 'حماية من الأشعة فوق البنفسجية'] },
    ],
  },
  stats: {
    items: [
      { label: 'خطوة تشطيب يدوية لكل قطعة' },
      { label: 'سنوات ضمان الهيكل والوسائد' },
      { label: 'صالون مؤثث حول العالم' },
      { label: 'عملاء يعيدون الطلب' },
    ],
  },
  steps: {
    overline: 'خطوات العمل',
    title: 'من الرسم إلى الأضواء',
    items: [
      { no: '01', title: 'الرسم والقياس', text: 'يزورك مصممنا لرسم الغرفة والإحساس الذي تريده لهذه القطعة.' },
      { no: '02', title: 'اختر ذهبك', text: 'صندوق عينات مذهّب — قماش، طلاء، درجة ذهب — يصل إلى باب منزلك.' },
      { no: '03', title: 'التذهيب والتنجيد', text: 'يُطلى الهيكل، وتُذهَّب الحواف ورقة تلو أخرى، ويُنجَّد القماش يدويًا خلال 21 يومًا.' },
      { no: '04', title: 'الظهور الكبير', text: 'توصيل بخدمة راقية، وتنسيق في مكانه، مع طقوس للعناية بالتشطيب الذهبي.' },
    ],
  },
  gallery: {
    overline: 'تصاميم داخلية حقيقية',
    title: 'غرف بأسلوب الأسود والذهبي',
    items: [
      { caption: 'صالون بنتهاوس · Gatsby Grand' },
      { caption: 'شقة وسط المدينة · Chrysler Loveseat' },
      { caption: 'ردهة فندق · Sunburst Sectional' },
      { caption: 'مسرح خاص · Cabaret Lounge' },
      { caption: 'جناح ركني · Deco Armchair' },
    ],
  },
  testimonials: {
    overline: 'آراء العملاء',
    title: 'تصفيق في كل صالون',
    items: [
      { name: 'Isabelle Laurent', role: 'مهندسة ديكور داخلي · باريس', quote: 'يعكس ورق الذهب ضوء الشموع تمامًا كملصقات الكباريه القديمة. عملائي يندهشون في كل مرة.' },
      { name: 'Marcus Chen', role: 'مدير تصميم فندقي · سنغافورة', quote: 'أثثنا ردهة كاملة بخط Chrysler — بعد ثلاث سنوات، ما زال الطلاء يبدو كأنه جديد.' },
      { name: 'Amira Haddad', role: 'مصممة مسرح · دبي', quote: 'مسرحي دون أن يكون هشًا. صندوق العينات مكّنني من مطابقة اللون الزمردي مع إضاءة المسرح تمامًا.' },
    ],
  },
  faqs: {
    overline: 'الأسئلة الشائعة',
    title: 'قبل رفع الستار',
    items: [
      { question: 'هل يتلاشى ورق الذهب مع الوقت؟', answer: 'تُغلَّف كل حافة بعد التذهيب بطلاء بجودة متحفية، مما يحمي البريق من الاستخدام اليومي لعقود. نقدّم خدمة إعادة تذهيب مجانية بعد عشر سنوات.' },
      { question: 'هل يمكن تخصيص الأبعاد؟', answer: 'نعم — العمق والطول وارتفاع الذراع كلها قابلة للتعديل بالسنتيمتر. يُضاف رسم إضافي بنسبة 10 إلى 15٪ للمقاسات المخصصة.' },
      { question: 'كم تستغرق مدة الإنتاج؟', answer: 'القطع المتوفرة تُشحن خلال 5 أيام. القطع المخصصة تستغرق 3 إلى 4 أسابيع لأن التذهيب والتنجيد اليدوي لا يمكن تسريعهما.' },
      { question: 'هل يمكنني رؤية القطع شخصيًا؟', answer: 'صالوناتنا في باريس وسنغافورة ودبي مفتوحة بموعد مسبق. يمكننا أيضًا إرسال صندوق عينات كامل مجانًا إلى أي مكان في العالم.' },
      { question: 'ما هي سياسة الإرجاع لديكم؟', answer: 'ثلاثون يومًا لإرجاع القطع المتوفرة في حال وجود عيب أو وصف غير دقيق. القطع المخصصة تشمل إعادة تنجيد مجانية واحدة خلال السنة الأولى.' },
    ],
  },
  cta: {
    overline: 'ابدأ بصندوق عينات',
    title: 'دع الذهب يختارك',
    description: 'اطلب صندوق عينات مجاني من المخمل والطلاء وورق الذهب، يُشحن إلى باب منزلك. بلا التزام — فقط دراما.',
    ctaPrimary: 'اطلب صندوق العينات',
    ctaSecondary: 'اتصل بالورشة',
    phone: '+971 800 213 928',
  },
};

const SOFA13_CONTENT = { en, vi, fr, cn, ar };

export function useSofa13Content() {
  const { currentLang } = useTranslate();
  return SOFA13_CONTENT[currentLang.value as keyof typeof SOFA13_CONTENT] ?? SOFA13_CONTENT.en;
}
