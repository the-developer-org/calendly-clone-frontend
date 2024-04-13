import { Link2, CalendarDays, Shield, Settings2, Plus } from 'lucide-react';

export const menus = [
  { title: 'Home', path: '' },
  { title: 'Blog', path: '' },
  { title: 'About Us', path: '' },
  { title: 'Contact Us', path: '' },
];
export const mainLinks = [
  { label: 'Create Event', path: '/new-event', icon: Plus },
  { label: 'Events', path: '/events', icon: Link2 },
  {
    label: 'Scheduled events',
    path: '/scheduled_events',
    icon: CalendarDays,
  },
  { label: 'Settings', path: '/settings', icon: Settings2 },
];
