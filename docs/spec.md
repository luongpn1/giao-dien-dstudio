# Spec: Giao diện trang chủ dnews247.net (Phase 1)

## A. Brief
- **Vấn đề:** Chưa có giao diện trang chủ. Làm giống bố cục trang https://doagency.vn/.
- **Ai dùng:** Khách truy cập website (khách hàng tiềm năng).
- **Thành công khi:** Trang chủ mở đẹp, đủ các khối bên dưới, đúng trên điện thoại và máy tính, chủ dự án so với doagency.vn thấy giống bố cục.
- **Dữ liệu có sẵn:** Toàn bộ chữ + ảnh trên doagency.vn (đã được cho phép dùng).
- **🚩 Cờ đỏ:** Không (không dữ liệu cá nhân thật, không ghi hệ thống, form chỉ là giao diện).

## B. Chi tiết
### 1. Ai xem / sửa
Khách: xem. Chủ dự án: sửa nội dung qua PR.

### 2. Các khối trang chủ (theo thứ tự)
1. **Header/menu:** TRANG CHỦ, GIỚI THIỆU, DỊCH VỤ, DỰ ÁN, TUYỂN DỤNG, TIN TỨC, nút "Đăng ký tư vấn". Menu thu gọn (hamburger) trên mobile. Nút chat nổi (Messenger, Zalo, 0905 155 500) – chỉ là link.
2. **Hero:** tiêu đề, mô tả "Công ty Truyền thông Marketing đa kênh", "Đối tác chính thức của TikTok Shop (TSP, MCN)", đoạn giới thiệu, nút "Tìm hiểu thêm" và "Xem dịch vụ", ảnh nền hero.
3. **Cam kết:** "Mỗi dự án là một đứa con ruột của chính mình", nút "Xem các dự án", ảnh nền.
4. **Các dự án mới nhất:** 6 thẻ (OCOP Đà Nẵng, G4S, Mỹ Sơn, Mobifone, Tan Ca, My Hanh Seafood) + nút "Xem tất cả các dự án".
5. **Đối tác tin cậy:** lưới 20 logo khách hàng.
6. **Mọi người nói về chúng tôi:** 3 đánh giá (Ahamove, Nessa House, Kính mắt Anna).
7. **Tin tức nổi bật:** 4 bài.
8. **Đăng ký tư vấn miễn phí:** form giao diện, nút "Đặt lại"/"Gửi đi".
9. **Footer:** 4 cột liên kết, địa chỉ, điện thoại, MST, mạng xã hội, bản quyền.

### 3. Quy tắc
- **R1:** Chỉ giao diện; mọi link trang con trỏ `#`; không database/backend.
- **R2:** Responsive: hiển thị đúng ở 375px, 768px, 1440px, không cuộn ngang.
- **R3:** Nội dung/ảnh lấy từ doagency.vn; tải ảnh về `assets/` trong repo, không hotlink.
- **R4:** Form "Gửi đi" không gửi đi đâu; chỉ kiểm tra ô bắt buộc trống và báo lỗi tiếng Việt.
- **R5:** Ảnh tối ưu (webp), có alt; tải nhanh.
- **R6:** Mọi nơi ghi tên thương hiệu "Do Agency" (tiêu đề, hero, footer, bản quyền, alt ảnh, tab trình duyệt) đổi thành **Dnews Media Studio**. Tên khách hàng/dự án (Ahamove, G4S, Mobifone…) giữ nguyên. Số điện thoại, địa chỉ, MST, link mạng xã hội: giữ mẫu tới khi có thông tin thật.

### 4. Ví dụ kiểm thử
| # | Nhập | Kết quả đúng | Quy tắc |
|---|---|---|---|
| 1 | Mở ở 1440px | Đủ 9 khối đúng thứ tự | R1 |
| 2 | Mở ở 375px | Menu thành hamburger, không cuộn ngang | R2 |
| 3 | Đếm thẻ | 6 dự án, 20 logo, 3 đánh giá, 4 tin | R3 |
| 4 (đặc biệt) | Bấm "Gửi đi" khi form trống | Báo lỗi dễ hiểu, không gửi | R4 |
| 5 (đặc biệt) | Ảnh bị lỗi/không tải | Hiện nền dự phòng, không vỡ bố cục | R5 |
| 6 | Bấm mọi link/nút | Không sang trang lỗi 404 | R1 |
| 7 | Tìm chữ "Do Agency" trong trang | Không còn; thay bằng "Dnews Media Studio" (trừ tên dự án khách) | R6 |

### 5. Không làm
Trang con, logic, database, gửi form thật, đăng nhập, CMS, SEO nâng cao, đa ngôn ngữ.

### 6. Câu hỏi còn mở (cần bạn chốt)
- ĐÃ CHỐT: tên thương hiệu = Dnews Media Studio. CÒN MỞ: logo, số điện thoại, địa chỉ, MST, email, link mạng xã hội thật của Dnews (mặc định: giữ mẫu tới khi bạn gửi).
- Màu và font: lấy theo doagency.vn? (Mặc định: có.)
- Nơi host xem thử: GitHub Pages miễn phí? (Mặc định: có.)
