# Hoàn thiện module Phân quyền sofa2

## Mục tiêu
Biến bốn mục Người dùng, Vai trò, Quyền hạn và Nhật ký hệ thống thành quy trình quản trị có lưu bền vững và kiểm tra quyền ở máy chủ. Không coi nhãn vai trò trong trình duyệt là biện pháp bảo mật.

## Phạm vi triển khai
- Rà soát và chuẩn hóa lưu trữ tài khoản quản trị, vai trò, quyền theo hành động và phân công vai trò; vai trò được lưu riêng, không nằm trong hồ sơ người dùng.
- Bảo vệ dữ liệu bằng RLS/grant chỉ cho máy chủ; nhận diện người thao tác từ phiên Clerk đã xác minh và giữ tài khoản quản trị cấu hình làm quyền chủ hệ thống.
- Thực thi quyền tại API cho từng module/hành động, không chỉ ẩn nút trên giao diện; chặn tự nâng quyền và không cho xóa/sửa vai trò hệ thống đang được sử dụng.
- Hoàn thiện giao diện sofa2: danh sách tài khoản và trạng thái, tạo/sửa/vô hiệu hóa và gán vai trò; CRUD vai trò với ma trận module/hành động; tra cứu quyền; nhật ký lọc/tìm/xuất chỉ đọc, do máy chủ ghi và không thể sửa/xóa từ giao diện.
- Báo rõ trạng thái tải/lưu và lỗi kết nối; không báo lưu thành công nếu máy chủ từ chối hoặc chưa ghi dữ liệu.

## Kiểm chứng
- Thêm kiểm thử cho các quy tắc quyền và nhật ký bất biến; chạy kiểm thử liên quan và kiểm tra lỗi preview.
- Kiểm tra luồng đăng nhập, lưu/đọc lại thay đổi và từ chối thao tác trái quyền nếu môi trường xác thực và kết nối cơ sở dữ liệu cho phép. Nếu thiếu cấu hình máy chủ hiện có, ghi rõ thao tác nào chưa thể xác minh.

## Chi tiết kỹ thuật
- Dùng migration Lovable Cloud với GRANT/RLS đầy đủ cho mọi bảng mới; API máy chủ là nơi duy nhất đọc/ghi dữ liệu phân quyền.
- Không lưu vai trò trong localStorage, metadata người dùng hoặc bảng hồ sơ; không ghi nhật ký do trình duyệt tự khai báo.
