import { z } from 'zod';
export const signupSchema = z.object({
  username: z.string().min(1, {
    message: 'Please enter your username',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address',
  }),
  password: z
    .string()
    .min(8)
    .regex(/^(?=.*[a-zA-Z0-9]).{8,}$/, {
      message:
        'Password must be at least 8 characters long, and contain only alphanumeric characters',
    }),
});
export const loginSchema = z.object({
  email: z.string().email({
    message: 'Please enter a valid email address',
  }),
  password: z
    .string()
    .min(8)
    .regex(/^(?=.*[a-zA-Z0-9]).{8,}$/, {
      message:
        'Password must be at least 8 characters long, and contain only alphanumeric characters',
    }),
});
