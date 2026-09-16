# Module CMS đầy đủ cho khu quản trị sofa2

Hiện tại nhóm CMS ở `/sofa2/admin/cms/...` chỉ là bảng dữ liệu mẫu chung. Kế hoạch này biến CMS thành module thật: thêm/sửa/xoá/cập nhật nội dung, và nội dung đó hiện ngay trên trang khách hàng sofa2.

## 1. Kho nội dung CMS (có lưu trữ)

Một kho nội dung sofa2 duy nhất, lưu trong trình duyệt nên nội dung không mất khi chuyển trang hay tải lại:

- Trang tĩnh: Trang chủ, Giới thiệu, Liên hệ, Chính sách, Điều khoản, FAQ, và các trang tĩnh tự tạo
- Blog: bài viết + chuyên mục
- Menu: menu header / footer / mobile và các mục bên trong
- Banner và Slider: từng banner/slide với ảnh, liên kết, lịch chạy
- SEO: tiêu đề, mô tả, ảnh chia sẻ, đường dẫn chuẩn cho từng trang

Mỗi bản ghi có trạng thái (Đã xuất bản / Bản nháp / Tạm ẩn), người sửa và ngày cập nhật.

## 2. Giao diện quản lý từng loại

Thay bảng chung bằng màn hình chuyên biệt cho nhóm CMS:

- **Trình soạn trang** (dùng cho 6 trang tĩnh + trang tĩnh tự tạo): 3 thẻ
  - *Nội dung*: danh sách khối (hero, văn bản, danh sách sản phẩm, slider, FAQ, CTA…) — thêm, sửa, xoá, đổi thứ tự lên/xuống, bật/tắt hiển thị
  - *SEO*: tiêu đề, mô tả, từ khoá, ảnh chia sẻ, đường dẫn
  - *Xuất bản*: trạng thái, ngày cập nhật, nút "Xem trang khách" mở đúng đường dẫn client
- **Blog**: danh sách bài viết + hộp soạn bài (tiêu đề, chuyên mục, ảnh bìa, tóm tắt, nội dung, trạng thái)
- **Menu**: chọn menu, thêm/sửa/xoá/sắp xếp mục, kiểm tra liên kết
- **Banner / Slider**: quản lý từng mục với ảnh, tiêu đề, nút, lịch chạy, vị trí
- **SEO**: bảng meta từng trang + công cụ sinh sitemap/robots/schema đã có

Mọi thao tác đều có xác nhận xoá, thông báo thành công, tìm kiếm và nút khôi phục dữ liệu mặc định.

## 3. Đồng bộ với trang khách hàng

Trang khách sofa2 đọc nội dung từ kho CMS, có sẵn nội dung mặc định nếu chưa chỉnh:

- Trang chủ: tiêu đề hero, mô tả, nút, dải banner, khối CTA
- Trang FAQ: danh sách câu hỏi
- Trang liên hệ: địa chỉ, điện thoại, email, giờ mở cửa
- Chính sách / Điều khoản: nội dung văn bản
- Tiêu đề và mô tả trang (thẻ SEO) lấy từ thẻ SEO trong CMS

Sửa trong admin → mở trang khách thấy đổi ngay.

## 4. Chi tiết kỹ thuật

- `src/sections/sofa2-admin/cms/sofa2-cms-types.ts`, `sofa2-cms-defaults.ts`: kiểu dữ liệu và nội dung khởi tạo
- `sofa2-cms-store.ts`: store `useSyncExternalStore` + `localStorage` (key `sofa2-cms-v1`), API `usePage`, `useCollection`, `upsert`, `remove`, `move`, `reset`
- `view/sofa2-cms-page-editor.tsx`, `sofa2-cms-blog.tsx`, `sofa2-cms-menu.tsx`, `sofa2-cms-media.tsx` (banner/slider), `sofa2-cms-seo.tsx`
- `sofa2-admin-module-view.tsx`: khi `group === 'cms'` sẽ render view chuyên biệt, các nhóm khác giữ nguyên bảng cũ
- Hook client `useSofa2CmsContent()` dùng trong `sofa2-hero.tsx`, `sofa2-banner.tsx`, `sofa2-faqs.tsx`, `sofa2-cta.tsx`, trang liên hệ/chính sách/điều khoản
- Giữ nguyên bảng màu Soft Clay và bố cục admin hiện tại; kiểm tra bằng typecheck và chạy thử trình duyệt
