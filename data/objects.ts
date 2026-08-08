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
    meta: 'Jamshedpur, Jharkhand · India',
    avatar: { src: '/pfp.jpg', alt: 'Ayush Kumar Singh' },
    text: `Computer science student, co-founder at Ayuda, and the person who built this room one rectangle at a time.

My work keeps landing in the same place: software that has to be right about something physical. An embryo that will or won't implant. Air that is or isn't safe to breathe. A doorway that's actually there. Models get to be wrong on a benchmark; these don't.

When the ground truth doesn't exist, I build the thing that collects it. That's usually where the hardware comes in.`,
    groupsTitle: 'What I work with',
    groups: [
      {
        title: 'FRONT-END',
        items: ['Flutter', 'React 19', 'Next.js', 'TypeScript', 'Tailwind', 'SCSS'],
      },
      {
        title: 'CREATIVE / 3D',
        items: ['Computer vision', 'OpenCV', 'PyTorch', 'C++', 'WebGL', 'Grad-CAM'],
      },
      {
        title: 'BACK-END & DATA',
        items: ['FastAPI', 'Node.js', 'Python', 'Supabase', 'Firestore', 'PostgreSQL', 'SQLite'],
      },
      {
        title: 'PRODUCT & PLATFORM',
        items: ['Applied ML', 'Embedded', 'USB-C Hardware', 'IoT', 'Custom software'],
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
      'ayush kumar singh — cse student, Jamshedpur',
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
      { label: 'email', value: 'akr6447@gmail.com', href: 'mailto:akr6447@gmail.com', icon: 'mail' },
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
    id: 'racing',
    kind: 'Off the clock',
    title: 'Formula 1',
    meta: 'Ferrari, for better or worse',
    text: `Sundays are spoken for. I follow the sport for the part most people skip — the engineering argument happening underneath the race.

An F1 team is a control problem with a deadline: incomplete telemetry, a tyre model that drifts, and a pit call you have to make three laps before you know if it was right. Strategy is inference under uncertainty with someone else's championship on the line.

Ferrari, which means I have made peace with being wrong about outcomes and right about process.`,
    chips: ['Scuderia Ferrari', 'Strategy nerd', 'Sunday shot'],
  },
  {
    id: 'gaming',
    kind: 'Off the clock',
    title: 'Games',
    meta: 'Open worlds and tight gunplay',
    text: `GTA V for the world, Call of Duty for the mechanics. Between them they cover both halves of what I like about games — one is a place you inhabit, the other is a system you get measurably better at.

The open world taught me more about design than most design writing: a good map tells you where to go without a single instruction. This room is a small, flat attempt at the same trick.`,
    chips: ['GTA V', 'Call of Duty', 'Open worlds'],
  },
  {
    id: 'valorant',
    kind: 'Off the clock',
    title: 'Valorant',
    meta: 'Ascendant · buddy on the shelf',
    text: `Ascendant. Hard-earned, and defended less often than I'd like.

The rank is mostly a lesson in error analysis. You do not climb by aiming better; you climb by noticing which specific decision keeps costing rounds, then refusing to make it again. That is the same loop as debugging a model that looks fine on average and fails on one slice.

Utility before aim. Information before entry. It transfers.`,
    chips: ['Ascendant', 'Utility first', 'VOD review'],
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
      { label: 'Email', value: 'akr6447@gmail.com', href: 'mailto:akr6447@gmail.com' },
      { label: 'GitHub', value: 'ayush6447', href: 'https://github.com/ayush6447' },
      { label: 'LinkedIn', value: 'ayushkumarjsr', href: 'https://www.linkedin.com/in/ayushkumarjsr' },
      { label: 'X', value: 'akrverse', href: 'https://x.com/akrverse' },
      { label: 'Web', value: 'akrverse.vercel.app', href: 'https://akrverse.vercel.app' },
    ],
  },
];
