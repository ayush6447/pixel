import type { Entry } from '@/lib/types';

/**
 * Everything in the room that isn't a book.
 *
 * TODO — the four CV entries below (experience, education, certifications,
 * achievements) are scaffolding with placeholder rows. Replace the marked
 * values with real ones before this goes anywhere public.
 */
export const OBJECTS: Entry[] = [
  {
    id: 'about',
    kind: 'About',
    title: 'Ayush Kumar Singh',
    meta: 'Ranchi, Jharkhand · India',
    avatar: { src: '/pfp.jpg', alt: 'Ayush Kumar Singh' },
    text: `Computer science student, co-founder at Ayuda, and the person who built this room one rectangle at a time.

My work keeps landing in the same place: software that has to be right about something physical. An embryo that will or won't implant. Air that is or isn't safe to breathe. A doorway that's actually there. Models get to be wrong on a benchmark; these don't.

When the ground truth doesn't exist, I build the thing that collects it. That's usually where the hardware comes in.`,
    groupsTitle: 'What I work with',
    groups: [
      {
        title: 'Machine learning',
        items: ['PyTorch', 'TensorFlow Lite', 'Vision transformers', 'Grad-CAM'],
      },
      {
        title: 'Computer vision',
        items: ['OpenCV', 'C++', 'Kalman filter', 'HOG'],
      },
      {
        title: 'Product',
        items: ['Flutter', 'React 19', 'FastAPI', 'Express 5'],
      },
      {
        title: 'Data & hardware',
        items: ['MongoDB', 'Supabase', 'USB-C sensors', 'Embedded C'],
      },
    ],
  },
  {
    id: 'terminal',
    kind: 'Terminal',
    title: '$ whoami',
    meta: 'Standard output',
    surface: 'terminal',
    term: [
      '$ whoami',
      'ayush kumar singh — cse student, ranchi',
      '',
      '$ cat focus.txt',
      'applied ml · flutter · computer vision',
      'and the hardware that feeds them',
      '',
      '$ ls ~/now',
      'embryogen/   vayumaan/   ayuda/',
      '',
      '$ echo $PRINCIPLE',
      'explainable, or it does not ship',
    ],
    text: `Have a project, a role, or an idea worth prototyping? I read every message.`,
    links: [
      { label: 'email', value: 'hello@example.com', href: 'mailto:hello@example.com', icon: 'mail' },
      { label: 'github', value: 'ayush6447', href: 'https://github.com/ayush6447', icon: 'github' },
      {
        label: 'linkedin',
        value: 'ayushkumarjsr',
        href: 'https://www.linkedin.com/in/ayushkumarjsr',
        icon: 'linkedin',
      },
      { label: 'x', value: 'akrverse', href: 'https://x.com/akrverse', icon: 'x' },
    ],
  },
  {
    id: 'experience',
    kind: 'Experience',
    title: 'Where I have worked',
    meta: 'Roles and the things they shipped',
    text: `Short list, because I would rather go deep on a few problems than collect logos.`,
    timeline: [
      {
        meta: '2025 — present',
        title: 'Co-founder',
        org: 'Ayuda',
        detail:
          'Building the product end to end — model, mobile client and the API between them.',
      },
      {
        // TODO: replace with a real role
        meta: '2025',
        title: 'ML Intern — TODO',
        org: 'TODO: company',
        detail: 'TODO: one line on what you actually shipped there.',
      },
      {
        // TODO: replace with a real role
        meta: '2024',
        title: 'Freelance — TODO',
        org: 'TODO: client',
        detail: 'TODO: what you built and what it was for.',
      },
    ],
    chips: ['Applied ML', 'Flutter', 'FastAPI', 'Product'],
  },
  {
    id: 'education',
    kind: 'Education',
    title: 'Where I studied',
    meta: 'Computer science',
    timeline: [
      {
        // TODO: replace with your institute and years
        meta: 'TODO: 20XX — 20XX',
        title: 'B.Tech, Computer Science & Engineering',
        org: 'TODO: institute',
        detail: 'TODO: coursework, thesis or anything worth naming.',
      },
      {
        // TODO: replace with your school and years
        meta: 'TODO: 20XX',
        title: 'Class XII — Science',
        org: 'TODO: school, Ranchi',
        detail: 'TODO: board and result.',
      },
    ],
  },
  {
    id: 'certifications',
    kind: 'Certifications',
    title: 'Certifications',
    meta: 'Signed, dated, still useful',
    text: `Kept short on purpose — only the ones whose material I actually use.`,
    timeline: [
      {
        // TODO: replace with a real certificate
        meta: 'TODO: 20XX',
        title: 'TODO: certificate name',
        org: 'TODO: issuer',
        detail: 'TODO: what it covered.',
      },
      {
        // TODO: replace with a real certificate
        meta: 'TODO: 20XX',
        title: 'TODO: certificate name',
        org: 'TODO: issuer',
        detail: 'TODO: what it covered.',
      },
    ],
  },
  {
    id: 'achievements',
    kind: 'Achievements',
    title: 'Things that went well',
    meta: 'Competitions, recognitions, shipped work',
    timeline: [
      {
        // TODO: replace with a real placing
        meta: 'TODO: 20XX',
        title: 'TODO: hackathon or competition',
        org: 'TODO: organiser',
        detail: 'TODO: what you built and where you placed.',
      },
      {
        // TODO: replace with a real recognition
        meta: 'TODO: 20XX',
        title: 'TODO: award or recognition',
        org: 'TODO: awarding body',
        detail: 'TODO: what it was for.',
      },
    ],
    chips: ['TODO: fill these in'],
  },
  {
    id: 'chess',
    kind: 'Off the clock',
    title: 'Chess',
    meta: 'akrverse',
    text: `I play. Badly under time pressure, decently when nobody's rushing me.

The habit that carried over into engineering: assume your first good idea is a blunder you haven't spotted yet, and go looking for the refutation before you commit. Most impressive model metrics are a leak, a bad split, or a test set that already saw training data.`,
    chips: ['akrverse'],
  },
  {
    id: 'sensor',
    kind: 'Hardware',
    title: 'Vayumaan Nano',
    meta: 'Prototype · on the desk',
    text: `A USB-C air quality sensor small enough to live on a keyring. Plug it into a phone and it becomes a monitoring node — one more ground-truth reading in a city that has almost none.

This is the part of Vayumaan that made the rest possible. You can't train a hyperlocal model on data collected kilometres from anywhere local.`,
    chips: ['PM2.5', 'USB-C OTG', 'Flutter bridge', 'Calibration'],
  },
  {
    id: 'contact',
    kind: 'Contact',
    title: 'Say hello',
    meta: 'Usually replies within a day',
    text: `Open to internships, research collaborations, and problems that don't have a clean dataset yet.`,
    links: [
      { label: 'Email', value: 'hello@example.com', href: 'mailto:hello@example.com' },
      { label: 'GitHub', value: 'ayush6447', href: 'https://github.com/ayush6447' },
      { label: 'LinkedIn', value: 'ayushkumarjsr', href: 'https://www.linkedin.com/in/ayushkumarjsr' },
      { label: 'X', value: 'akrverse', href: 'https://x.com/akrverse' },
      { label: 'Web', value: 'akrverse.vercel.app', href: 'https://akrverse.vercel.app' },
    ],
  },
];
