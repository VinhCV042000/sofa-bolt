# Hoàn thiện khu quản trị Sofa11

## Mục tiêu
Nâng cấp khu `/sofa11/admin` thành hệ thống quản trị demo đầy đủ, giữ phong cách Wabi-Sabi của Sofa11 và bao phủ toàn bộ nhóm CMS, Sản phẩm, Kho hàng, Đơn hàng, CRM, Marketing, Analytics, SEO và Phân quyền.

## Phạm vi triển khai
- Giữ và chuẩn hóa cấu hình các nhóm/trang quản trị hiện có, bao gồm đầy đủ các mục người dùng yêu cầu.
- Nâng bảng dữ liệu từ chế độ chỉ xem thành CRUD đầy đủ:
  - thêm, xem chi tiết, sửa, xoá;
  - chọn nhiều và xoá hàng loạt;
  - tìm kiếm, phân trang;
  - xuất CSV và khôi phục dữ liệu mẫu;
  - thông báo kết quả và xác nhận trước khi xoá.
- Bổ sung bảng điều khiển trực quan:
  - doanh thu theo tháng và mục tiêu;
  - đơn hàng theo tháng;
  - nguồn truy cập/đặt hàng;
  - sản phẩm bán chạy;
  - chỉ số tồn kho, chuyển đổi và khách quay lại.
- Bổ sung các trang tiện ích hữu ích:
  - Báo cáo tổng hợp;
  - Cài đặt hệ thống;
  - Thông báo & Nhật ký;
  - Hồ sơ quản trị và phiên đăng nhập.
- Hoàn thiện menu quản trị trên máy tính và điện thoại, gồm nhóm chức năng, tiện ích và nút quay lại trang bán hàng.
- Thêm mục **Quản trị** vào cả menu trang chủ Sofa11 và menu dùng ở các trang con.
- Bổ sung đường dẫn cho các trang tiện ích và bảo đảm đường dẫn nhóm/trang con đang có tiếp tục hoạt động.

## Chi tiết kỹ thuật
- Dùng kho dữ liệu cục bộ theo mẫu các khu admin đã hoàn chỉnh trong dự án; dữ liệu giữ khi chuyển trang trong phiên hiện tại nhưng không lưu lên backend.
- Tái sử dụng bộ biểu đồ và thành phần giao diện hiện có; không thay đổi phần bán hàng ngoài liên kết menu.
- Thêm tiêu đề trang và chỉ thị `noindex, nofollow` cho toàn bộ khu quản trị.
- Kiểm tra kiểu dữ liệu có phạm vi Sofa11, sau đó chạy thử trên trình duyệt các luồng tổng quan, mở module, tìm kiếm, thêm/sửa/xem/xoá và trang tiện ích ở kích thước desktop/mobile.
