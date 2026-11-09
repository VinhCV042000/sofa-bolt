# Sofa2 CMS: quản lý nội dung và đồng bộ website

## Mục tiêu
Hoàn thiện CMS tại `/sofa2/admin` để quản trị 12 nhóm nội dung hiện có: Trang chủ, Giới thiệu, Liên hệ, Chính sách, Điều khoản, FAQ, Blog, Menu, Banner, Slider, SEO và Trang tĩnh. Nội dung đã xuất bản phải được dùng trên đúng trang sofa2; bản nháp và nội dung ẩn không xuất hiện công khai.

## Phạm vi thực hiện
- Rà soát schema và biểu mẫu theo từng loại nội dung; bổ sung kiểm tra dữ liệu cần thiết như slug/đường dẫn duy nhất, URL ảnh/liên kết, lịch xuất bản, trạng thái và trường bắt buộc.
- Đưa thao tác tạo, sửa, nhân bản, xóa, xóa hàng loạt, tìm kiếm, lọc, sắp xếp, phân trang và xuất CSV qua API CMS có xác thực hiện có; hiển thị trạng thái tải/lưu và lỗi rõ ràng, không báo lưu thành công khi máy chủ từ chối.
- Kết nối dữ liệu đã xuất bản với trang khách: khối nội dung cho các trang tĩnh, bài viết và chi tiết blog, menu, banner/slider, metadata SEO và trang tĩnh theo slug. Giữ bố cục sofa2 hiện tại khi không có nội dung CMS tương ứng.
- Bổ sung xem trước nội dung và đường dẫn trang khách ngay từ màn hình quản trị; không cho bản nháp/ẩn lọt ra API công khai.

## Chi tiết kỹ thuật
- Dùng các endpoint CMS hiện có (`/api/admin/cms/:module` và `/api/cms/public`) cùng bảng lưu trữ hiện có; không đưa khóa máy chủ vào trình duyệt, không dùng `localStorage` làm nguồn dữ liệu chính và không nới quyền truy cập công khai.
- Chuẩn hóa ID bản ghi và chuyển đổi trạng thái/định dạng giữa biểu mẫu tiếng Việt, dữ liệu lưu trữ và trang công khai; cập nhật kiểu dữ liệu cần thiết để sửa lỗi kiểm tra hiện có ở các đường dẫn CMS.
- Chỉ nối những trường mà các trang sofa2 hiện có thể hiển thị an toàn; giữ dữ liệu/bố cục mẫu làm phương án dự phòng khi API chưa có nội dung.

## Kiểm tra hoàn tất
- Kiểm tra lỗi build hiện có và lỗi phát sinh; xác nhận CRUD, tìm kiếm, lọc, xuất bản/ẩn, tải lại dữ liệu và xem trước trong giao diện quản trị.
- Kiểm tra các URL khách tương ứng, xác nhận nội dung đã xuất bản hiển thị và bản nháp/ẩn không hiển thị; kiểm tra blog, menu, banner/slider, SEO và trang tĩnh theo slug.
- Nếu dịch vụ lưu trữ hoặc quyền quản trị hiện tại chưa được cấu hình, báo rõ phần nào chưa thể xác minh thay vì giả lập lưu thành công.
