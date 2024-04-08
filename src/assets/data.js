import {
  Link2,
  UserRound,
  CalendarDays,
  Workflow,
  Route,
  Clock,
  LayoutGrid,
  Shield,
  Settings2,
} from 'lucide-react';

export const menus = [
  { title: 'Home', path: '' },
  { title: 'Blog', path: '' },
  { title: 'About Us', path: '' },
  { title: 'Contact Us', path: '' },
];
export const mainLinks = [
  { label: 'Event types', path: '/event_types', icon: Link2 },
  {
    label: 'Scheduled events',
    path: '/scheduled_events',
    icon: CalendarDays,
  },
  { label: 'Admin Center', path: '/admin', icon: Shield },
  { label: 'Settings', path: '/settings', icon: Settings2 },
];

export const cardsData = [
  { name: 'Event 1', duration: '15', location: 'google-meet' },
  { name: 'Event 2', duration: '30', location: 'zoom' },
  { name: 'Event 3', duration: '45', location: 'teams' },
  { name: 'Event 4', duration: '60', location: 'webex' },
];
