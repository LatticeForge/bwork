/**
 * API Configuration
 * Centralized configuration for backend API
 */

export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://apis.bwork.sa/api";

export const API_ENDPOINTS = {
  // Public endpoints
  SERVICES: "/services",
  PROCESS: "/process",
  BENEFITS: "/benefits",
  COMPANY_INFO: "/company-info",
  CONTACT: "/contact",
  
  // Auth endpoints
  LOGIN: "/auth/login",
  REFRESH: "/auth/refresh",
  LOGOUT: "/auth/logout",
  ME: "/auth/me",

  // Admin endpoints
  DASHBOARD: "/admin/dashboard",
  ADMIN_CONTACTS: "/admin/contacts",
  ADMIN_SERVICES: "/admin/services",
  ADMIN_COMPANY_INFO: "/admin/company-info",
} as const;

export default { API_URL, API_ENDPOINTS };
