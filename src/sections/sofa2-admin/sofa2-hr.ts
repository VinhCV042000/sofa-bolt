// SOFA2 ADMIN — Lược đồ chi tiết cho module Tuyển dụng (HR)
// 5 trang (Danh sách tuyển dụng, Chi tiết vị trí, Nộp CV, Hồ sơ ứng viên, Theo dõi tuyển dụng)
// dùng chung Sofa2AdminCmsView — form thêm/sửa/xoá, tab trạng thái, thao tác hàng loạt.
// ----------------------------------------------------------------------

import type { Sofa2CmsField, Sofa2CmsSchema, Sofa2CmsFieldType } from './sofa2-cms';

const f = (
  key: string,
  label: string,
  type: Sofa2CmsFieldType,
  group: Sofa2CmsField['group'],
  extra: Partial<Sofa2CmsField> = {}
): Sofa2CmsField => ({ key, label, type, group, ...extra });

const DEPARTMENTS = ['Kinh doanh', 'Marketing', 'Nội dung', 'CSKH', 'Kế toán', 'Kho vận', 'IT', 'Thiết kế', 'Sản xuất', 'Nhân sự'];
const JOB_LEVELS = ['Thực tập sinh', 'Nhân viên', 'Chuyên viên', 'Trưởng nhóm', 'Trưởng phòng', 'Phó giám đốc', 'Giám đốc'];
const JOB_TYPES = ['Toàn thời gian', 'Bán thời gian', 'Thời vụ', 'Freelance', 'Thực tập'];
const LOCATIONS = ['TP.HCM', 'Hà Nội', 'Đà Nẵng', 'Bình Dương', 'Remote'];
const EMPLOYMENT_STATUS = ['Đang tuyển', 'Tạm dừng', 'Đã đóng', 'Đã đủ người'];
const APPLICATION_STATUS = ['Mới', 'Đang sàng lọc', 'Phỏng vấn', 'Thử việc', 'Trúng tuyển', 'Không đạt', 'Tự rút'];
const SCREENING_RESULTS = ['Qua', 'Chưa quyết', 'Loại'];
const INTERVIEW_ROUNDS = ['Sàng lọc CV', 'Phỏng vấn HR', 'Phỏng vấn chuyên môn', 'Phỏng vấn cuối', 'Thử việc'];
const AGENTS = ['Minh Anh', 'Đức Anh', 'Thu Hà', 'Hoàng Long', 'Quốc Bảo', 'Chưa gán'];
const SOURCES = ['Website', 'TopCV', 'VietnamWorks', 'LinkedIn', 'Facebook', 'Giới thiệu', 'Headhunter', 'Khác'];
const CITIES = ['TP.HCM', 'Hà Nội', 'Đà Nẵng', 'Bình Dương', 'Hải Phòng', 'Cần Thơ'];

// ----------------------------------------------------------------------

export const SOFA2_HR_SCHEMAS: Record<string, Sofa2CmsSchema> = {
  // ---- Danh sách tuyển dụng -------------------------------------------
  recruitment: {
    clientPath: '/sofa2',
    entity: 'vị trí tuyển dụng',
    titleKey: 'title',
    statusKey: 'status',
    statusOptions: EMPLOYMENT_STATUS,
    publishLabel: 'Đăng tuyển',
    defaultStatus: 'Đang tuyển',
    hideClientLink: true,
    fields: [
      f('title', 'Vị trí tuyển dụng', 'text', 'content', { required: true, maxLength: 120 }),
      f('department', 'Phòng ban', 'select', 'content', { required: true, options: DEPARTMENTS }),
      f('level', 'Cấp bậc', 'select', 'content', { required: true, options: JOB_LEVELS }),
      f('type', 'Hình thức', 'select', 'content', { required: true, options: JOB_TYPES }),
      f('quantity', 'Số lượng', 'number', 'content', { required: true }),
      f('location', 'Địa điểm', 'select', 'content', { required: true, options: LOCATIONS }),
      f('salaryMin', 'Lương tối thiểu (₫)', 'number', 'content', { helper: 'Để trống nếu thỏa thuận.' }),
      f('salaryMax', 'Lương tối đa (₫)', 'number', 'content'),
      f('deadline', 'Hạn nộp hồ sơ', 'date', 'content', { required: true }),
      f('description', 'Mô tả công việc', 'textarea', 'content', { multiline: 6 }),
      f('requirements', 'Yêu cầu công việc', 'textarea', 'content', { multiline: 6 }),
      f('benefits', 'Quyền lợi', 'textarea', 'content', { multiline: 4 }),
      f('postedDate', 'Ngày đăng tuyển', 'date', 'display'),
      f('views', 'Lượt xem', 'number', 'display'),
      f('applicants', 'Số ứng viên', 'number', 'display'),
      f('hired', 'Đã tuyển', 'number', 'display'),
      f('owner', 'Người phụ trách', 'select', 'display', { options: AGENTS }),
      f('status', 'Trạng thái', 'select', 'display', {
        required: true,
        options: EMPLOYMENT_STATUS,
      }),
    ],
  },

  // ---- Chi tiết vị trí ------------------------------------------------
  'job-detail': {
    clientPath: '/sofa2',
    entity: 'chi tiết vị trí',
    titleKey: 'title',
    statusKey: 'status',
    statusOptions: EMPLOYMENT_STATUS,
    publishLabel: 'Đăng tuyển',
    defaultStatus: 'Đang tuyển',
    hideClientLink: true,
    fields: [
      f('title', 'Vị trí', 'text', 'content', { required: true }),
      f('department', 'Phòng ban', 'select', 'content', { required: true, options: DEPARTMENTS }),
      f('level', 'Cấp bậc', 'select', 'content', { required: true, options: JOB_LEVELS }),
      f('type', 'Hình thức', 'select', 'content', { required: true, options: JOB_TYPES }),
      f('location', 'Địa điểm', 'select', 'content', { required: true, options: LOCATIONS }),
      f('salaryRange', 'Khoảng lương', 'text', 'content', { placeholder: '15–25 triệu' }),
      f('deadline', 'Hạn nộp', 'date', 'content', { required: true }),
      f('description', 'Mô tả công việc', 'textarea', 'content', { multiline: 8 }),
      f('requirements', 'Yêu cầu', 'textarea', 'content', { multiline: 8 }),
      f('benefits', 'Quyền lợi', 'textarea', 'content', { multiline: 6 }),
      f('skills', 'Kỹ năng yêu cầu (cách nhau dấu phẩy)', 'text', 'content', { placeholder: 'Excel, CRM, đàm phán' }),
      f('experience', 'Kinh nghiệm tối thiểu', 'text', 'content', { placeholder: '2 năm' }),
      f('education', 'Trình độ học vấn', 'select', 'content', { options: ['Không yêu cầu', 'THPT', 'Trung cấp', 'Cao đẳng', 'Đại học', 'Thạc sĩ', 'Tiến sĩ'] }),
      f('gender', 'Yêu cầu giới tính', 'select', 'content', { options: ['Không yêu cầu', 'Nam', 'Nữ'] }),
      f('ageRange', 'Độ tuổi yêu cầu', 'text', 'content', { placeholder: '22–35' }),
      f('languages', 'Ngoại ngữ', 'text', 'content', { placeholder: 'Tiếng Anh — IELTS 6.0+' }),
      f('contactPerson', 'Người liên hệ', 'select', 'display', { options: AGENTS }),
      f('contactEmail', 'Email liên hệ', 'text', 'display', { placeholder: 'tuyendung@luxe.vn' }),
      f('contactPhone', 'Điện thoại liên hệ', 'text', 'display'),
      f('postedDate', 'Ngày đăng', 'date', 'display'),
      f('closedDate', 'Ngày đóng', 'date', 'display'),
      f('views', 'Lượt xem tin', 'number', 'display'),
      f('applicants', 'Số hồ sơ nộp', 'number', 'display'),
      f('note', 'Ghi chú nội bộ', 'textarea', 'display', { multiline: 2 }),
      f('status', 'Trạng thái', 'select', 'display', {
        required: true,
        options: EMPLOYMENT_STATUS,
      }),
    ],
  },

  // ---- Nộp CV ---------------------------------------------------------
  'submit-cv': {
    clientPath: '/sofa2',
    entity: 'đơn ứng tuyển',
    titleKey: 'applicant',
    statusKey: 'status',
    statusOptions: APPLICATION_STATUS,
    publishLabel: 'Nhận hồ sơ',
    defaultStatus: 'Mới',
    hideClientLink: true,
    fields: [
      f('applicant', 'Họ tên ứng viên', 'text', 'content', { required: true }),
      f('email', 'Email', 'text', 'content', { required: true, placeholder: 'email@example.com' }),
      f('phone', 'Điện thoại', 'text', 'content', { required: true, placeholder: '09xx xxx xxx' }),
      f('job', 'Vị trí ứng tuyển', 'text', 'content', { required: true }),
      f('source', 'Nguồn ứng tuyển', 'select', 'content', { required: true, options: SOURCES }),
      f('cvUrl', 'Link CV / Portfolio', 'url', 'content', { helper: 'Google Drive, Dropbox hoặc portfolio online.' }),
      f('coverLetter', 'Thư ứng tuyển', 'textarea', 'content', { multiline: 5 }),
      f('expectedSalary', 'Lương mong muốn (₫)', 'number', 'content'),
      f('availableDate', 'Ngày có thể bắt đầu', 'date', 'content'),
      f('submittedDate', 'Ngày nộp', 'date', 'display', { required: true }),
      f('screeningResult', 'Kết quả sàng lọc', 'select', 'display', { options: SCREENING_RESULTS }),
      f('screenedBy', 'Người sàng lọc', 'select', 'display', { options: AGENTS }),
      f('note', 'Ghi chú sàng lọc', 'textarea', 'display', { multiline: 3 }),
      f('status', 'Trạng thái', 'select', 'display', {
        required: true,
        options: APPLICATION_STATUS,
      }),
    ],
  },

  // ---- Hồ sơ ứng viên -------------------------------------------------
  'applicant-profile': {
    clientPath: '/sofa2',
    entity: 'hồ sơ ứng viên',
    titleKey: 'name',
    statusKey: 'status',
    statusOptions: APPLICATION_STATUS,
    publishLabel: 'Chuyển phỏng vấn',
    defaultStatus: 'Mới',
    hideClientLink: true,
    fields: [
      f('name', 'Họ tên', 'text', 'content', { required: true }),
      f('email', 'Email', 'text', 'content', { required: true }),
      f('phone', 'Điện thoại', 'text', 'content', { required: true }),
      f('gender', 'Giới tính', 'select', 'content', { options: ['Nam', 'Nữ', 'Khác'] }),
      f('birthday', 'Ngày sinh', 'date', 'content'),
      f('city', 'Thành phố', 'select', 'content', { options: CITIES }),
      f('address', 'Địa chỉ hiện tại', 'textarea', 'content', { multiline: 2 }),
      f('education', 'Trình độ học vấn', 'select', 'content', { options: ['THPT', 'Trung cấp', 'Cao đẳng', 'Đại học', 'Thạc sĩ', 'Tiến sĩ'] }),
      f('school', 'Trường tốt nghiệp', 'text', 'content'),
      f('major', 'Chuyên ngành', 'text', 'content'),
      f('experience', 'Kinh nghiệm (năm)', 'number', 'content'),
      f('currentJob', 'Công việc hiện tại', 'text', 'content'),
      f('currentSalary', 'Lương hiện tại (₫)', 'number', 'content'),
      f('expectedSalary', 'Lương mong muốn (₫)', 'number', 'content'),
      f('skills', 'Kỹ năng (cách nhau dấu phẩy)', 'text', 'content', { placeholder: 'CRM, Excel, đàm phán' }),
      f('languages', 'Ngoại ngữ', 'text', 'content', { placeholder: 'Tiếng Anh — IELTS 6.5' }),
      f('cvUrl', 'Link CV', 'url', 'content'),
      f('portfolioUrl', 'Link Portfolio', 'url', 'content'),
      f('appliedJob', 'Vị trí ứng tuyển', 'text', 'display'),
      f('appliedDate', 'Ngày ứng tuyển', 'date', 'display'),
      f('source', 'Nguồn', 'select', 'display', { options: SOURCES }),
      f('interviewRound', 'Vòng phỏng vấn hiện tại', 'select', 'display', { options: INTERVIEW_ROUNDS }),
      f('interviewDate', 'Ngày phỏng vấn', 'date', 'display'),
      f('interviewer', 'Người phỏng vấn', 'select', 'display', { options: AGENTS }),
      f('interviewScore', 'Điểm phỏng vấn', 'number', 'display', { helper: 'Thang 1–10.' }),
      f('interviewNote', 'Nhận xét phỏng vấn', 'textarea', 'display', { multiline: 4 }),
      f('offerSent', 'Đã gửi offer', 'switch', 'display'),
      f('offerDate', 'Ngày gửi offer', 'date', 'display'),
      f('onboardDate', 'Ngày nhận việc', 'date', 'display'),
      f('note', 'Ghi chú nội bộ', 'textarea', 'display', { multiline: 3 }),
      f('status', 'Trạng thái', 'select', 'display', {
        required: true,
        options: APPLICATION_STATUS,
      }),
    ],
  },

  // ---- Theo dõi tuyển dụng --------------------------------------------
  'recruitment-tracking': {
    clientPath: '/sofa2',
    entity: 'tiến trình tuyển dụng',
    titleKey: 'job',
    statusKey: 'status',
    statusOptions: ['Đang tuyển', 'Tạm dừng', 'Đã đóng', 'Đã đủ người'],
    publishLabel: 'Mở lại',
    defaultStatus: 'Đang tuyển',
    hideClientLink: true,
    fields: [
      f('job', 'Vị trí tuyển dụng', 'text', 'content', { required: true }),
      f('department', 'Phòng ban', 'select', 'content', { required: true, options: DEPARTMENTS }),
      f('vacancies', 'Chỉ tiêu', 'number', 'content', { required: true }),
      f('applicants', 'Tổng hồ sơ', 'number', 'display'),
      f('screeningPassed', 'Qua sàng lọc', 'number', 'display'),
      f('interviewing', 'Đang phỏng vấn', 'number', 'display'),
      f('offered', 'Đã gửi offer', 'number', 'display'),
      f('hired', 'Đã nhận việc', 'number', 'display'),
      f('rejected', 'Không đạt', 'number', 'display'),
      f('postedDate', 'Ngày đăng', 'date', 'display'),
      f('deadline', 'Hạn nộp', 'date', 'display'),
      f('daysOpen', 'Số ngày tuyển', 'number', 'display'),
      f('cost', 'Chi phí tuyển dụng (₫)', 'number', 'display'),
      f('source', 'Nguồn hiệu quả nhất', 'select', 'display', { options: SOURCES }),
      f('owner', 'Người phụ trách', 'select', 'display', { options: AGENTS }),
      f('note', 'Ghi chú', 'textarea', 'display', { multiline: 2 }),
      f('status', 'Trạng thái', 'select', 'display', {
        required: true,
        options: ['Đang tuyển', 'Tạm dừng', 'Đã đóng', 'Đã đủ người'],
      }),
    ],
  },
};

// ----------------------------------------------------------------------

export function getSofa2HrSchema(moduleSlug?: string) {
  return moduleSlug ? SOFA2_HR_SCHEMAS[moduleSlug] : undefined;
}
