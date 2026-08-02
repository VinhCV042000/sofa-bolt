import { paths } from 'src/routes/paths';

// ----------------------------------------------------------------------
// SOFA PAGES — shared data for all sub-pages
// ----------------------------------------------------------------------

export const SOFA_PAGE_IMAGES = {
  aboutHero: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920',
  workshop: 'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=1200',
  team: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200',
  service1: 'https://images.pexels.com/photos/276624/pexels-photo-276624.jpeg?auto=compress&cs=tinysrgb&w=800',
  service2: 'https://images.pexels.com/photos/675849/pexels-photo-675849.jpeg?auto=compress&cs=tinysrgb&w=800',
  service3: 'https://images.pexels.com/photos/691410/pexels-photo-691410.jpeg?auto=compress&cs=tinysrgb&w=800',
  service4: 'https://images.pexels.com/photos/275484/pexels-photo-275484.jpeg?auto=compress&cs=tinysrgb&w=800',
  blog1: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=800',
  blog2: 'https://images.pexels.com/photos/164877/pexels-photo-164877.jpeg?auto=compress&cs=tinysrgb&w=800',
  blog3: 'https://images.pexels.com/photos/1660797/pexels-photo-1660797.jpeg?auto=compress&cs=tinysrgb&w=800',
  blog4: 'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=800',
  blog5: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800',
  blog6: 'https://images.pexels.com/photos/6444/pencil-typography-keys-plans.jpg?auto=compress&cs=tinysrgb&w=800',
  gallery1: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
  gallery2: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=800',
  gallery3: 'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=800',
  gallery4: 'https://images.pexels.com/photos/276624/pexels-photo-276624.jpeg?auto=compress&cs=tinysrgb&w=800',
  gallery5: 'https://images.pexels.com/photos/675849/pexels-photo-675849.jpeg?auto=compress&cs=tinysrgb&w=800',
  gallery6: 'https://images.pexels.com/photos/691410/pexels-photo-691410.jpeg?auto=compress&cs=tinysrgb&w=800',
  gallery7: 'https://images.pexels.com/photos/275484/pexels-photo-275484.jpeg?auto=compress&cs=tinysrgb&w=800',
  gallery8: 'https://images.pexels.com/photos/164877/pexels-photo-164877.jpeg?auto=compress&cs=tinysrgb&w=800',
  gallery9: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800',
  gallery10: 'https://images.pexels.com/photos/1660797/pexels-photo-1660797.jpeg?auto=compress&cs=tinysrgb&w=800',
  gallery11: 'https://images.pexels.com/photos/6444/pencil-typography-keys-plans.jpg?auto=compress&cs=tinysrgb&w=800',
  gallery12: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
  cta: 'https://images.pexels.com/photos/1660797/pexels-photo-1660797.jpeg?auto=compress&cs=tinysrgb&w=1200',
  branch1: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=600',
  branch2: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600',
  branch3: 'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=600',
  branch4: 'https://images.pexels.com/photos/164877/pexels-photo-164877.jpeg?auto=compress&cs=tinysrgb&w=600',
  before1: 'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=600',
  after1: 'https://images.pexels.com/photos/276624/pexels-photo-276624.jpeg?auto=compress&cs=tinysrgb&w=600',
  before2: 'https://images.pexels.com/photos/6444/pencil-typography-keys-plans.jpg?auto=compress&cs=tinysrgb&w=600',
  after2: 'https://images.pexels.com/photos/164877/pexels-photo-164877.jpeg?auto=compress&cs=tinysrgb&w=600',
  before3: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600',
  after3: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=600',
};

export const SOFA_SERVICES = [
  { id: 'custom-design', title: 'Thiết Kế Sofa Theo Yêu Cầu', icon: 'solar:pen-bold-duotone', short: 'Thiết kế và đóng sofa theo kích thước, màu sắc, chất liệu riêng cho không gian của bạn.', description: 'Dịch vụ thiết kế sofa cá nhân hóa với đội ngũ kiến trúc sư nội thất giàu kinh nghiệm. Từ đo đạc đến lên bản vẽ 3D, chọn chất liệu và hoàn thiện sản phẩm.', image: SOFA_PAGE_IMAGES.service1, price: 'Từ 8.000.000đ', duration: '7-14 ngày' },
  { id: 'repair', title: 'Sửa Chữa & Bảo Trì Sofa', icon: 'solar:hammer-bold-duotone', short: 'Sửa chữa, thay đệm, bọc lại da/vải, khắc phục xẹp lún và trầy xước.', description: 'Dịch vụ sửa chữa sofa chuyên nghiệp: thay đệm xẹp, bọc lại da/vải mới, sửa khung gỗ, khắc phục trầy xước. Phục hồi sofa cũ như mới.', image: SOFA_PAGE_IMAGES.service2, price: 'Từ 500.000đ', duration: '1-3 ngày' },
  { id: 'cleaning', title: 'Giặt & Làm Sạch Sofa', icon: 'solar:water-bold-duotone', short: 'Giặt khô, giặt nước, làm sạch sâu, khử mùi và diệt khuẩn sofa.', description: 'Dịch vụ giặt sofa tại nhà với máy móc công nghiệp: giặt khô cho da, giặt nước cho vải, hút bụi sâu, khử mùi, diệt khuẩn bằng hơi nóng.', image: SOFA_PAGE_IMAGES.service3, price: 'Từ 150.000đ', duration: '2-4 giờ' },
  { id: 'consultation', title: 'Tư Vấn Nội Thất Miễn Phí', icon: 'solar:chat-round-dots-bold-duotone', short: 'Chuyên gia đến tận nhà đo đạc và tư vấn phong cách, màu sắc phù hợp.', description: 'Dịch vụ tư vấn nội thất miễn phí tại nhà: đo đạc không gian, tư vấn phong cách, màu sắc, chất liệu phù hợp với thiết kế ngôi nhà.', image: SOFA_PAGE_IMAGES.service4, price: 'Miễn phí', duration: '1-2 giờ' },
];

export const SOFA_BLOG_POSTS = [
  { id: '1', title: 'Cách Chọn Sofa Phù Hợp Cho Phòng Khách Nhỏ', excerpt: 'Những nguyên tắc vàng để chọn sofa cho không gian nhỏ mà vẫn thoải mái và sang trọng.', image: SOFA_PAGE_IMAGES.blog1, date: '15/01/2025', author: 'Nguyễn Minh Anh', category: 'Hướng dẫn', readTime: '5 phút' },
  { id: '2', title: 'Bảo Dưỡng Sofa Da Bò Đúng Cách', excerpt: 'Hướng dẫn chi tiết cách vệ sinh, bảo dưỡng sofa da bò để luôn mềm mại và bền đẹp.', image: SOFA_PAGE_IMAGES.blog2, date: '10/01/2025', author: 'Trần Hoàng Long', category: 'Bảo dưỡng', readTime: '7 phút' },
  { id: '3', title: 'Xu Hướng Nội Thất Sofa 2025', excerpt: 'Khám phá những xu hướng sofa nổi bật năm 2025: từ màu sắc, chất liệu đến hình dáng.', image: SOFA_PAGE_IMAGES.blog3, date: '05/01/2025', author: 'Lê Thu Hà', category: 'Xu hướng', readTime: '6 phút' },
  { id: '4', title: 'Phối Màu Sofa Với Tường & Rèm Cửa', excerpt: 'Bí quyết phối màu sofa với tường và rèm cửa để tạo không gian hài hòa.', image: SOFA_PAGE_IMAGES.blog4, date: '28/12/2024', author: 'Phạm Quốc Bảo', category: 'Hướng dẫn', readTime: '4 phút' },
  { id: '5', title: 'Sofa Góc L hay U: Loại Nào Phù Hợp Với Bạn?', excerpt: 'So sánh chi tiết giữa sofa góc L và U để bạn chọn được loại phù hợp nhất.', image: SOFA_PAGE_IMAGES.blog5, date: '20/12/2024', author: 'Nguyễn Minh Anh', category: 'Hướng dẫn', readTime: '5 phút' },
  { id: '6', title: 'Đồ Gỗ Sồi: Vì Sao Là Chọn Lựa Hàng Đầu?', excerpt: 'Tìm hiểu vì sao gỗ sồi tự nhiên là vật liệu khung sofa được ưa chuộng nhất.', image: SOFA_PAGE_IMAGES.blog6, date: '15/12/2024', author: 'Trần Hoàng Long', category: 'Chất liệu', readTime: '8 phút' },
];

export const SOFA_BRANCHES = [
  { id: 1, name: 'Casa Sofa Hà Nội', address: '123 Nguyễn Trãi, Thanh Xuân, Hà Nội', phone: '024 3855 1234', hours: '8:00 - 20:00', image: SOFA_PAGE_IMAGES.branch1, lat: 21.0137, lng: 105.8258 },
  { id: 2, name: 'Casa Sofa TP.HCM', address: '456 Lê Lợi, Quận 1, TP.HCM', phone: '028 3930 5678', hours: '8:00 - 20:00', image: SOFA_PAGE_IMAGES.branch2, lat: 10.7726, lng: 106.7069 },
  { id: 3, name: 'Casa Sofa Đà Nẵng', address: '78 Bạch Đằng, Hải Châu, Đà Nẵng', phone: '0236 3888 901', hours: '8:00 - 19:00', image: SOFA_PAGE_IMAGES.branch3, lat: 16.0544, lng: 108.2022 },
  { id: 4, name: 'Casa Sofa Cần Thơ', address: '12 Hòa Bình, Ninh Kiều, Cần Thơ', phone: '0292 3765 432', hours: '8:00 - 19:00', image: SOFA_PAGE_IMAGES.branch4, lat: 10.0451, lng: 105.7469 },
];

export const SOFA_OFFERS = [
  { id: 1, title: 'Gói Thành Viên Bạc', price: '5.000.000đ/năm', original: '8.000.000đ', features: ['Giảm 10% mọi dịch vụ', 'Giặt sofa miễn phí 2 lần/năm', 'Bảo trì định kỳ 4 lần/năm', 'Ưu tiên đặt lịch'], color: 'primary', icon: 'solar:medal-ribbon-star-bold-duotone' },
  { id: 2, title: 'Gói Thành Viên Vàng', price: '12.000.000đ/năm', original: '18.000.000đ', features: ['Giảm 20% mọi dịch vụ', 'Giặt sofa miễn phí 4 lần/năm', 'Bảo trì định kỳ 6 lần/năm', 'Thay đệm miễn phí 1 lần/năm', 'Tư vấn nội thất miễn phí'], color: 'warning', icon: 'solar:winner-medal-bold-duotone', popular: true },
  { id: 3, title: 'Gói Thành Viên Bạch Kim', price: '25.000.000đ/năm', original: '35.000.000đ', features: ['Giảm 30% mọi dịch vụ', 'Giặt sofa không giới hạn', 'Bảo trì định kỳ 12 lần/năm', 'Thay đệm miễn phí 2 lần/năm', 'Thiết kế sofa mới miễn phí 1 lần', 'Hỗ trợ 24/7'], color: 'success', icon: 'solar:crown-bold-duotone' },
];

export const SOFA_PROMOTIONS = [
  { id: 1, title: 'Khuyến Mãi Xuân 2025', discount: 'GIẢM 35%', description: 'Giảm 35% tất cả sofa da bò khi mua trong tháng 2. Số lượng có hạn!', image: SOFA_PAGE_IMAGES.blog1, validUntil: '28/02/2025', code: 'XUAN2025' },
  { id: 2, title: 'Flash Sale Cuối Tuần', discount: 'GIẢM 50%', description: 'Flash sale 48 giờ: giảm 50% dịch vụ giặt sofa. Đặt lịch ngay!', image: SOFA_PAGE_IMAGES.blog2, validUntil: 'Chủ nhật hàng tuần', code: 'FLASH50' },
  { id: 3, title: 'Mua 1 Tặng 1 Bảo Dưỡng', discount: 'TẶNG 1 NĂM', description: 'Mua sofa mới tặng gói bảo dưỡng miễn phí 1 năm trị giá 3.000.000đ.', image: SOFA_PAGE_IMAGES.blog3, validUntil: '31/03/2025', code: 'GIFT1Y' },
  { id: 4, title: 'Ưu Đãi Khách Hàng VIP', discount: 'GIẢM 25%', description: 'Thành viên VIP giảm thêm 25% khi sử dụng dịch vụ sửa chữa sofa.', image: SOFA_PAGE_IMAGES.blog4, validUntil: 'Không giới hạn', code: 'VIP25' },
];

export const SOFA_PACKAGES = [
  { id: 1, title: 'Gói Chăm Sóc Sofa Cơ Bản', duration: '1 buổi', price: '350.000đ', items: ['Hút bụi toàn bộ sofa', 'Giặt khô bề mặt', 'Lau sạch tay vịn', 'Phun khử mùi'], image: SOFA_PAGE_IMAGES.service3, icon: 'solar:water-bold-duotone' },
  { id: 2, title: 'Gói Chăm Sóc Sofa Nâng Cao', duration: '2-3 buổi', price: '850.000đ', items: ['Hút bụi sâu', 'Giặt nước/đẫm đặc', 'Xử lý vết bẩn cứng đầu', 'Khử mùi & diệt khuẩn hơi nóng', 'Phủ lớp bảo vệ vải'], image: SOFA_PAGE_IMAGES.service1, icon: 'solar:broom-bold-duotone', popular: true },
  { id: 3, title: 'Gói Phục Hồi Sofa Toàn Diện', duration: '3-5 ngày', price: '3.500.000đ', items: ['Thay toàn bộ đệm', 'Bọc lại da/vải mới', 'Sửa khung gỗ', 'Lên màu & phủ bảo vệ', 'Bảo hành 1 năm'], image: SOFA_PAGE_IMAGES.service2, icon: 'solar:hammer-bold-duotone' },
];

export const SOFA_BEFORE_AFTER = [
  { id: 1, title: 'Phục Hồi Sofa Da Bò 10 Năm', before: SOFA_PAGE_IMAGES.before1, after: SOFA_PAGE_IMAGES.after1, duration: '5 ngày', cost: '4.500.000đ', description: 'Sofa da bò 10 năm cũ xẹp lún, trầy xước → bọc da mới, thay đệm, phục hồi như mới.' },
  { id: 2, title: 'Đổi Mới Sofa Góc Văn Phòng', before: SOFA_PAGE_IMAGES.before2, after: SOFA_PAGE_IMAGES.after2, duration: '7 ngày', cost: '12.000.000đ', description: 'Sofa góc văn phòng cũ màu xỉn → đổi màu mới, thay vải linen cao cấp.' },
  { id: 3, title: 'Sửa Khung Sofa Gỗ Sồi Gãy', before: SOFA_PAGE_IMAGES.before3, after: SOFA_PAGE_IMAGES.after3, duration: '3 ngày', cost: '2.800.000đ', description: 'Khung gỗ sồi bị gãy do vận chuyển → sửa khung, gia cố, bọc lại.' },
];

export const SOFA_CAREERS = [
  { id: 1, title: 'Nghệ nhân đóng sofa', location: 'Hà Nội', type: 'Toàn thời gian', salary: '15-25 triệu', description: 'Tìm nghệ nhân có kinh nghiệm đóng sofa thủ công, biết may bọc, xử lý gỗ và da.' },
  { id: 2, title: 'Nhân viên tư vấn nội thất', location: 'TP.HCM', type: 'Toàn thời gian', salary: '10-15 triệu', description: 'Tư vấn khách hàng tại showroom, hỗ trợ chọn sản phẩm phù hợp.' },
  { id: 3, title: 'Kỹ thuật viên giặt sofa', location: 'Đà Nẵng', type: 'Bán thời gian', salary: '7-12 triệu', description: 'Phụ trách dịch vụ giặt và làm sạch sofa tại nhà khách hàng.' },
  { id: 4, title: 'Thiết kế nội thất 3D', location: 'Hà Nội', type: 'Toàn thời gian', salary: '12-20 triệu', description: 'Thiết kế bản vẽ 3D cho khách hàng đặt sofa theo yêu cầu.' },
];

export const SOFA_GALLERY_IMAGES = [
  { src: SOFA_PAGE_IMAGES.gallery1, title: 'Showroom Hà Nội' },
  { src: SOFA_PAGE_IMAGES.gallery2, title: 'Phòng trưng bày' },
  { src: SOFA_PAGE_IMAGES.gallery3, title: 'Sofa Milano' },
  { src: SOFA_PAGE_IMAGES.gallery4, title: 'Sofa Toscana' },
  { src: SOFA_PAGE_IMAGES.gallery5, title: 'Sofa Napoli' },
  { src: SOFA_PAGE_IMAGES.gallery6, title: 'Sofa Firenze' },
  { src: SOFA_PAGE_IMAGES.gallery7, title: 'Sofa Verona' },
  { src: SOFA_PAGE_IMAGES.gallery8, title: 'Sofa Capri' },
  { src: SOFA_PAGE_IMAGES.gallery9, title: 'Xưởng sản xuất' },
  { src: SOFA_PAGE_IMAGES.gallery10, title: 'Đóng gói' },
  { src: SOFA_PAGE_IMAGES.gallery11, title: 'Bản vẽ thiết kế' },
  { src: SOFA_PAGE_IMAGES.gallery12, title: 'Đội ngũ nghệ nhân' },
];

export const SOFA_PAGE_FAQS = [
  { question: 'Làm sao để đặt lịch dịch vụ?', answer: 'Bạn có thể đặt lịch online qua trang Đặt lịch, gọi hotline, hoặc đến trực tiếp chi nhánh. Chúng tôi sẽ xác nhận trong vòng 30 phút.' },
  { question: 'Dịch vụ có phục vụ ngoài giờ không?', answer: 'Có. Dịch vụ ngoài giờ (sau 20:00) phụ thu 20%. Bạn có thể chọn khung giờ khi đặt lịch online.' },
  { question: 'Có hóa đơn VAT không?', answer: 'Có. Chúng tôi xuất hóa đơn VAT cho mọi dịch vụ. Vui lòng yêu cầu khi đặt lịch.' },
  { question: 'Khu vực phục vụ gồm những tỉnh nào?', answer: 'Hiện tại phục vụ nội thành Hà Nội, TP.HCM, Đà Nẵng, Cần Thơ. Ngoại thành phụ thu phí di chuyển.' },
  { question: 'Sofa sau khi sửa có bảo hành không?', answer: 'Có. Dịch vụ sửa chữa bảo hành 6 tháng, dịch vụ bọc lại bảo hành 1 năm.' },
  { question: 'Làm sao để trở thành đối tác/cộng sự?', answer: 'Đăng ký qua trang Cộng sự, đội ngũ của chúng tôi sẽ liên hệ trong 3-5 ngày làm việc.' },
];

export const SOFA_POLICIES = [
  { title: 'Chính Sách Bảo Hành', icon: 'solar:shield-check-bold-duotone', content: 'Bảo hành 5 năm cho khung gỗ và cơ cấu, 3 năm cho đệm và vải bọc. Bảo trì trọn đời với chi phí ưu đãi cho khách hàng đã mua sản phẩm.' },
  { title: 'Chính Sách Đổi Trả', icon: 'solar:refresh-circle-bold-duotone', content: '30 ngày đổi trả cho sản phẩm tiêu chuẩn (không áp dụng sofa đặt riêng). Hoàn tiền 100% nếu sản phẩm còn nguyên trạng, kèm đầy đủ phụ kiện.' },
  { title: 'Chính Sách Giao Hàng', icon: 'solar:delivery-bold-duotone', content: 'Miễn phí giao hàng và lắp đặt nội thành. Ngoại thành và tỉnh tính phí theo khoảng cách, thời gian 2-5 ngày làm việc.' },
  { title: 'Chính Sách Bảo Mật', icon: 'solar:lock-keyhole-bold-duotone', content: 'Thông tin khách hàng được bảo mật tuyệt đối. Chúng tôi không chia sẻ dữ liệu với bên thứ ba. Mọi giao dịch được mã hóa.' },
  { title: 'Chính Sách Thanh Toán', icon: 'solar:wallet-bold-duotone', content: 'Chấp nhận tiền mặt, chuyển khoản, thẻ tín dụng, trả góp 0% qua thẻ. Đặt cọc 30% cho sofa đặt riêng.' },
  { title: 'Điều Khoản Sử Dụng', icon: 'solar:document-bold-duotone', content: 'Việc sử dụng website đồng nghĩa với việc bạn đồng ý với các điều khoản. Mọi tranh chấp được giải quyết tại Tòa án Hà Nội.' },
];

export const SOFA_NAV_DATA = [
  { title: 'Trang chủ', path: '/', icon: 'solar:home-2-bold-duotone' },
  { title: 'Giới thiệu', path: paths.sofaAbout, icon: 'solar:info-circle-bold-duotone' },
  {
    title: 'Dịch vụ',
    path: paths.sofaServices,
    icon: 'solar:tools-bold-duotone',
    children: [
      { title: 'Tất cả dịch vụ', path: paths.sofaServices },
      { title: 'Thiết kế theo yêu cầu', path: '/services/custom-design' },
      { title: 'Sửa chữa & bảo trì', path: '/services/repair' },
      { title: 'Giặt & làm sạch', path: '/services/cleaning' },
      { title: 'Tư vấn nội thất', path: '/services/consultation' },
    ],
  },
  { title: 'Gói liệu trình', path: paths.sofaPackages, icon: 'solar:box-bold-duotone' },
  { title: 'Đào tạo', path: paths.sofaTraining, icon: 'solar:book-bold-duotone' },
  { title: 'Blog', path: paths.sofaBlog, icon: 'solar:pen-bold-duotone' },
  { title: 'Tuyển dụng', path: paths.sofaCareers, icon: 'solar:case-bold-duotone' },
  { title: 'Đặt lịch', path: paths.sofaBooking, icon: 'solar:calendar-bold-duotone' },
  {
    title: 'Ưu đãi',
    path: paths.sofaOffers,
    icon: 'solar:gift-bold-duotone',
    children: [
      { title: 'Gói ưu đãi', path: paths.sofaOffers },
      { title: 'Khuyến mãi', path: paths.sofaPromotions },
    ],
  },
  { title: 'Kết quả trước-sau', path: paths.sofaBeforeAfter, icon: 'solar:gallery-bold-duotone' },
  { title: 'Gallery', path: paths.sofaGallery, icon: 'solar:gallery-bold-duotone' },
  { title: 'Chi nhánh', path: paths.sofaBranches, icon: 'solar:map-point-bold-duotone' },
  { title: 'Cộng sự', path: paths.sofaPartners, icon: 'solar:hand-bold-duotone' },
  { title: 'FAQ', path: paths.sofaFaq, icon: 'solar:question-circle-bold-duotone' },
  { title: 'Feedback', path: paths.sofaFeedback, icon: 'solar:chat-bold-duotone' },
  { title: 'Chính sách', path: paths.sofaPolicy, icon: 'solar:document-bold-duotone' },
  { title: 'Tài khoản', path: paths.sofaAccount, icon: 'solar:user-bold-duotone' },
  { title: 'Liên hệ', path: paths.contact, icon: 'solar:phone-bold-duotone' },
];
