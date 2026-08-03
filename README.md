## Prerequisites

- Node.js 20.x (Recommended)

## Installation

**Using Yarn (Recommended)**

```sh
yarn install
yarn dev
```

**Using Npm**
trong souce trang Home sofa2 tạo trang:
Home(sofa2)
├── Giới thiệu(Giới thiệu công ty,Lịch sử hình thành,Tầm nhìn & sứ mệnh,Giá trị cốt lõi,Nhà máy sản xuất,Quy trình sản xuất,Công nghệ sản xuất,Chứng nhận chất lượng,Đội ngũ nhân sự,Đối tác,Hình ảnh công ty,Video giới thiệu)
├── Sản phẩm
│   ├── Danh mục
│   ├── ├── Sofa phòng khách: Sofa góc chữ L,Sofa chữ U,Sofa văng,Sofa đơn,Sofa băng dài,Sofa giường,Sofa thông minh,Sofa thư giãn,Sofa recliner,Sofa da,Sofa nỉ,Sofa vải,Sofa gỗ
│   ├── ├── Theo phong cách: Hiện đại,Tân cổ điển,Bắc Âu,Luxury,Minimalist,Indochine,Châu Âu
│   ├── ├── Theo không gian: Căn hộ,Nhà phố,Biệt thự,Văn phòng,Khách sạn,Resort,Nhà hàng,Cafe
│   ├── ├── Theo kích thước: Sofa nhỏ,Sofa trung,Sofa lớn
│   ├── ├── Theo giá: Dưới 10 triệu,10-20 triệu,20-50 triệu,Trên 50 triệu
│   ├── Chi tiết sản phẩm (Thông tin sản phẩm,Hình ảnh 360°,Video sản phẩm,Thông số kỹ thuật,Chất liệu,Kích thước,Màu sắc,Tùy chọn cấu hình,Hướng dẫn sử dụng,Hướng dẫn bảo quản,Sản phẩm liên quan,Đánh giá khách hàng,Hỏi đáp sản phẩm)
│   └── Bộ sưu tập
│   ├── ├── Bộ sưu tập mới
│   ├── ├── Bộ sưu tập nổi bật
│   ├── ├── Bộ sưu tập theo mùa
│   ├── ├── Bộ sưu tập Luxury
│   ├── ├── Bộ sưu tập Bestseller
├── Dự án
│   ├── Portfolio (Danh sách dự án: Dự án căn hộ,Dự án biệt thự,Dự án khách sạn,Dự án resort,Dự án văn phòng,Dự án showroom)
│   ├── Chi tiết dự án (Album ảnh,Video,Mô tả dự án,Sản phẩm sử dụng,Đánh giá khách hàng)
├── Showroom (Danh sách showroom, Bản đồ showroom, Chi tiết showroom, Lịch mở cửa, Hình ảnh showroom, Đặt lịch tham quan, Đặt lịch tư vấn)
├── Dịch vụ
│   ├── Thiết kế nội thất
│   ├── ├── Thiết kế sofa theo yêu cầu
│   ├── ├── Thiết kế 3D
│   ├── ├── Tư vấn bố trí nội thất
│   ├── Dịch vụ sản xuất
│   ├── ├── Gia công sofa
│   ├── ├── Sofa OEM
│   ├── ├── Sofa ODM
│   ├── ├── Đặt hàng theo dự án
├── Blog
│   ├── Chuyên mục (Tin công ty,Tin khuyến mãi,Kinh nghiệm chọn sofa,Xu hướng nội thất,Kiến thức vật liệu,Phong thủy nội thất,Hướng dẫn vệ sinh sofa,Hướng dẫn bảo quản,Thiết kế phòng khách)
│   ├── Chi tiết bài viết (Bài viết,Tác giả,Bình luận,Chia sẻ mạng xã hội)
├── Khuyến mãi
│   ├── ├── Bảo hành
│   ├── ├── Bảo trì
│   ├── ├── Sửa chữa
│   ├── ├── Vệ sinh sofa
│   ├── ├── Đổi trả hàng
├── Tuyển dụng (Danh sách tuyển dụng, Chi tiết vị trí, Nộp CV, Hồ sơ ứng viên, Theo dõi tuyển dụng)
├── Liên hệ
├── Tài khoản khách hàng
├── Đại lý B2B (Giới thiệu hợp tác, Đại lý phân phối, Nhà phân phối, Đăng ký đại lý, Báo giá dự án, Yêu cầu sản xuất OEM, Đối tác thi công, Chính sách đại lý)
├── Giỏ hàng (Thanh toán,Thanh toán thành công,Theo dõi đơn hàng,Tài khoản khách hàng,Hồ sơ cá nhân,Địa chỉ giao hàng,Đơn hàng của tôi,Yêu thích,Lịch sử giao dịch,Phiếu bảo hành)
├── Thanh toán
└── Hỗ trợ
```sh
npm i
npm run dev
```

## Build

```sh
yarn build
# or
npm run build
```

## Mock server

By default we provide demo data from : `https://api-dev-minimal-[version].vercel.app`

To set up your local server:

- **Guide:** [https://docs.minimals.cc/mock-server](https://docs.minimals.cc/mock-server).

- **Resource:** [Download](https://www.dropbox.com/sh/6ojn099upi105tf/AACpmlqrNUacwbBfVdtt2t6va?dl=0).

## Full version

- Create React App ([migrate to CRA](https://docs.minimals.cc/migrate-to-cra/)).
- Next.js
- Vite.js

## Starter version

- To remove unnecessary components. This is a simplified version ([https://starter.minimals.cc/](https://starter.minimals.cc/))
- Good to start a new project. You can copy components from the full version.
- Make sure to install the dependencies exactly as compared to the full version.

---

**NOTE:**
_When copying folders remember to also copy hidden files like .env. This is important because .env files often contain environment variables that are crucial for the application to run correctly._
