export const BASE_URL = process.env["NX_API_URL"];
export const RECAPTCHA_APP_SITE_KEY =
  "6LcQt6kkAAAAAMIVBFIRnDKXYu0JUmyHurXdRegc";
export const CHUNK_SIZE = 5 * 1024 * 1024;

export const DEFAULT_PAGE_LIMIT = 20;
export const DEFAULT_SORT_BY_COLUMN = "invoiceId";
export const colors = [
  "#FF3380",
  "#CCCC00",
  "#66E64D",
  "#4D80CC",
  "#9900B3",
  "#E64D66",
  "#4DB380",
  "#FF4D4D",
  "#99E6E6",
  "#6666FF",
  "#FF6633",
  "#FFB399",
  "#FF33FF",
  "#FFFF99",
  "#00B3E6",
  "#E6B333",
  "#3366E6",
  "#999966",
  "#99FF99",
  "#B34D4D",
  "#80B300",
  "#809900",
  "#E6B3B3",
  "#6680B3",
  "#66991A",
  "#FF99E6",
  "#CCFF1A",
  "#FF1A66",
  "#E6331A",
  "#33FFCC",
  "#66994D",
  "#B366CC",
  "#4D8000",
  "#B33300",
  "#CC80CC",
  "#66664D",
  "#991AFF",
  "#E666FF",
  "#4DB3FF",
  "#1AB399",
  "#E666B3",
  "#33991A",
  "#CC9999",
  "#B3B31A",
  "#00E680",
  "#4D8066",
  "#809980",
  "#E6FF80",
  "#1AFF33",
  "#999933",
];

export const IMAGES = {
  BG: "assets/usersManagementbg1.webp",
  LOGO: "assets/logo.png",
  AIANALYSIS: "assets/aianalysis.webp",
  ACCESS: "assets/playerexperience1.svg",
  MOBILESUPPORT: "assets/mobilesupport.webp",
};

export const errorMapping: Record<string, string> = {
  duplicate_email_error: "um.duplicateUserEmail.errorMessage",
  duplicate_role: "um.duplicateRole.errorMessage",
  role_user_already_mapped: "um.roleUserAlreadyMapped.errorMessage",
  department_exist: "um.duplicateDepartment.errorMessage",
  department_mapped: "um.departmentAlreadyMapped.errorMessage",
};
