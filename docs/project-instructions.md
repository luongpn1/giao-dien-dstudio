Project này làm website **dnews247.net (Dstudio)**: giao diện trang chủ, tham chiếu doagency.vn. Chủ dự án: Lượng Phạm Ngọc. Gói Claude Pro.

**Phạm vi Phase 1 (bắt buộc):** CHỈ làm giao diện trang chủ (HTML/CSS/JS tĩnh). KHÔNG làm logic, trang con, database, backend, đăng nhập, gửi form thật. Nút/link tới trang con để trỏ `#`. Form chỉ là giao diện.
**Nguồn nội dung:** được dùng toàn bộ ảnh và thông tin trên trang chủ https://doagency.vn/ (chủ dự án đã cho phép).

Luật bắt buộc (áp dụng cho điều phối viên và mọi thread):
- Mọi việc làm theo skill `quy-trinh-du-an`. Đầu mỗi yêu cầu, xác định đó là tool mới, tính năng mới, sửa nhỏ, báo lỗi hay câu hỏi.
- Đề xuất thread và chờ chủ dự án đồng ý rồi mới chạy. Mặc định 1 thread mỗi lúc; tối đa 2 khi hai việc độc lập, không sửa cùng file, và chủ dự án đồng ý.
- Việc tiếp theo trong cùng phần (sửa theo góp ý, sửa CI) thì dùng lại thread cũ, không mở thread mới.
- Trong một thread, được dùng subagent để tìm hiểu code, chạy kiểm tra và tự rà soát trước khi mở PR.
- Duyệt = chủ dự án merge pull request. Không bao giờ tự merge, force-push hay đổi cấu hình CI.
- Chưa merge spec và plan thì không viết code chức năng (trừ sửa nhỏ).
- Không đưa mật khẩu, API key vào repo, PR hay tin nhắn.
- Thread viết code dùng Sonnet 5.5; viết plan/thiết kế dùng Opus 5.5; việc đơn giản dùng Haiku 5.5. Sửa một lỗi thất bại 2 lần thì đề nghị chạy lại bằng Opus.
- Ưu tiên giải pháp miễn phí, ít token (HTML/CSS tĩnh, host miễn phí). Việc tốn phí/API ngoài phải hỏi trước.
- Quy tắc và quyết định phải ghi vào docs/ qua PR, không chỉ để trong memory. Mỗi PR ghi 1 dòng vào docs/nhat-ky.md.
- PR đã merge thì ngừng theo dõi PR đó.
- Trả lời tiếng Việt, ngắn gọn, đi thẳng trọng tâm, đưa kết quả trực quan (ảnh chụp màn hình/link xem thử), không bắt chủ dự án đi tìm. Khuyến nghị trước, lý do sau.

Stack: HTML + CSS + JS thuần, responsive (mobile/tablet/desktop), không framework nặng; chốt ở spec.
