import { z } from 'zod';
export const signup = z.object({
  name: z.string().min(1, {
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
export const login = z.object({
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
export const slot = z.object({
  email: z.string().email({
    message: 'Please enter a valid email address',
  }),
  name: z.string().min(1, {
    message: 'Please enter a valid name',
  }),
});

export const event = z.object({
  name: z.string().min(3, {
    message: 'Event name should be at least 3 characters long.',
  }),
  duration: z.enum(['10', '20', '30', '60'], {
    errorMap: () => ({ message: 'Please select a valid duration.' }),
  }),
  mode: z.enum(['Google Meet', 'Teams', 'Zoom', 'Other'], {
    errorMap: () => ({ message: 'Please select a valid meeting mode.' }),
  }),
  meetingLink: z.string().url({
    message: 'Please provide a valid meeting link.',
  }),
  startDate: z.date({
    errorMap: () => ({ message: 'Start date must be a valid date.' }),
  }),
  endDate: z.date({
    errorMap: () => ({ message: 'End date must be a valid date.' }),
  }),
  startTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, {
    message: 'Start time must be in HH:MM format.',
  }),
  endTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, {
    message: 'End time must be in HH:MM format.',
  }),
  bufferTime: z.string(),
  description: z.string().min(10, {
    message: 'Description should be at least 10 characters long.',
  }),
  color: z.enum(
    [
      'bg-purple-400',
      'bg-blue-400',
      'bg-black',
      'bg-orange-400',
      'bg-green-400',
    ],
    {
      errorMap: () => ({ message: 'Please select a valid color.' }),
    }
  ),
});
