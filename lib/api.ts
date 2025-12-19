/**
 * API Utility Functions
 * Reusable functions for making API calls to the backend
 */

import { API_URL, API_ENDPOINTS } from './apiConfig';

// Types
export interface ValidationError {
  field: string;
  message: string;
}

export interface APIResponse<T = any> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
  details?: ValidationError[];
}

export interface Service {
  id: number;
  title: string;
  slug: string;
  description: string;
  subServices: string[];
  link: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  order?: number;
}

export interface Benefit {
  category: string;
  features: string[];
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  contact: {
    email: string;
    phone: string;
    phoneFormatted: string;
    phoneLink: string;
  };
  office: {
    address: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    fullAddress: string;
    addressLine1?: string;
    addressLine2?: string;
  };
  businessHours: {
    weekdays: string;
    weekend: string;
    timezone: string;
  };
  social: {
    facebook: string;
    twitter: string;
    linkedin: string;
    instagram: string;
  };
}

export interface ContactData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * Generic fetch wrapper with error handling
 */
async function fetchAPI<T>(
  endpoint: string,
  options?: RequestInit
): Promise<APIResponse<T>> {
  try {
    const url = `${API_URL}${endpoint}`;

    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      ...options,
    });

    const data = await response.json();

    if (!response.ok) {
      // Return the full error response including validation details
      return {
        success: false,
        error: data.error || `API Error: ${response.status}`,
        details: data.details, // Preserve validation error details
      };
    }

    return data;
  } catch (error) {
    console.error(`API Error (${endpoint}):`, error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'An unexpected error occurred',
    };
  }
}

/**
 * Fetch all services
 */
export async function fetchServices(): Promise<APIResponse<{ services: Service[] }>> {
  return fetchAPI<{ services: Service[] }>(API_ENDPOINTS.SERVICES);
}

/**
 * Fetch process steps
 */
export async function fetchProcess(): Promise<APIResponse<{ steps: ProcessStep[] }>> {
  return fetchAPI<{ steps: ProcessStep[] }>(API_ENDPOINTS.PROCESS);
}

/**
 * Fetch benefits
 */
export async function fetchBenefits(): Promise<APIResponse<{ benefits: Benefit[] }>> {
  return fetchAPI<{ benefits: Benefit[] }>(API_ENDPOINTS.BENEFITS);
}

/**
 * Fetch company information
 */
export async function fetchCompanyInfo(): Promise<APIResponse<CompanyInfo>> {
  return fetchAPI<CompanyInfo>(API_ENDPOINTS.COMPANY_INFO);
}

/**
 * Submit contact form
 */
export async function submitContact(data: ContactData): Promise<APIResponse> {
  return fetchAPI(API_ENDPOINTS.CONTACT, {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

/**
 * Admin login
 */
export async function adminLogin(username: string, password: string): Promise<APIResponse> {
  return fetchAPI(API_ENDPOINTS.LOGIN, {
    method: 'POST',
    body: JSON.stringify({ username, password }),
  });
}

export default {
  fetchServices,
  fetchProcess,
  fetchBenefits,
  fetchCompanyInfo,
  submitContact,
  adminLogin,
};
