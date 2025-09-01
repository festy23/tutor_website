export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: 'individual' | 'consultation' | 'group' | 'other';
  message: string;
  preferredTime: 'morning' | 'afternoon' | 'evening' | 'flexible';
  studentLevel: 'beginner' | 'intermediate' | 'advanced';
}

export interface FormValidation {
  isValid: boolean;
  errors: Partial<Record<keyof ContactFormData, string>>;
}

export interface ContactFormState extends ContactFormData {
  isSubmitting: boolean;
  isSubmitted: boolean;
  validation: FormValidation;
}
