import type { Entry } from '@/lib/types';

/** Everything in the room that isn't a book. */
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
        meta: 'Jul 2026 — present',
        title: 'AI/ML and Full-stack Development Intern',
        org: 'Briskon Technologies Pvt Ltd · Remote',
        detail:
          'Internship. Applied ML alongside the web work that has to carry it.',
      },
      {
        meta: 'Sep 2025 — present',
        title: 'Media Team Member',
        org: 'Google Developer Group on Campus, ITER',
        detail:
          'Media and management teams — organising events, handling creative media, and supporting community operations.',
      },
      {
        meta: 'Mar 2025 — Sep 2025',
        title: 'Design Team Member',
        org: 'Google Developer Group on Campus, ITER',
        detail: 'Design for campus events and community material.',
      },
    ],
    chips: ['Product', 'Applied ML', 'Full-stack', 'Public speaking'],
  },
  {
    id: 'education',
    kind: 'Education',
    title: 'Where I studied',
    meta: 'Computer science',
    timeline: [
      {
        meta: 'Sep 2024 — Sep 2028',
        title: 'B.Tech, Computer Science',
        org: "Siksha 'O' Anusandhan University",
        detail: 'Coursework carrying the Python and SQL side of everything here.',
      },
      {
        meta: 'Jun 2022 — May 2024',
        title: 'Class XII, CBSE — first division',
        org: 'DAV Public School, Bistupur, Jamshedpur',
      },
      {
        meta: '2010 — May 2022',
        title: 'Class X, CBSE — first division',
        org: 'Delhi Public School, Jamshedpur',
      },
    ],
    chips: ['Python', 'SQL', 'Photography'],
  },
  {
    id: 'certifications',
    kind: 'Certifications',
    title: 'Certifications',
    meta: 'Signed, dated, still useful',
    text: `Only the ones whose material I actually use.`,
    timeline: [
      {
        meta: 'Mar 2026',
        title: 'AI Fluency: Framework & Foundations',
        org: 'Anthropic',
      },
      {
        meta: 'Jun 2025',
        title: 'Elysium Volunteer Certificate',
        org: 'Google Developer Group on Campus, ITER',
      },
      {
        meta: 'Mar 2025',
        title: 'Google AI Essentials',
        org: 'Google',
        detail: 'Artificial intelligence, large language models.',
      },
      {
        meta: 'Jan 2025',
        title: 'Career Essentials in Generative AI',
        org: 'Microsoft and LinkedIn',
        detail: 'Generative AI, computer ethics.',
      },
      {
        meta: 'Dec 2024',
        title: 'Supervised Machine Learning: Regression and Classification',
        org: 'DeepLearning.AI · Coursera',
      },
      {
        meta: 'Dec 2024',
        title: 'Prompt Design in Vertex AI',
        org: 'Google Cloud',
      },
      {
        meta: 'Dec 2024',
        title: 'Data Visualisation: Empowering Business with Effective Insights',
        org: 'Tata Group job simulation · Forage',
        detail: 'Power BI, data visualisation.',
      },
    ],
    chips: ['Machine learning', 'Generative AI', 'Vertex AI', 'Power BI'],
  },
  {
    id: 'achievements',
    kind: 'Achievements',
    title: 'Things that went well',
    meta: 'Competitions, recognitions, shipped work',
    timeline: [
      {
        meta: 'Jan 2026',
        title: '24-Hour Hackathon',
        org: 'XIM University',
      },
      {
        meta: 'Dec 2025',
        title: 'Ideathon — runner-up',
        org: 'IEEE CTSoc, KIIT Student Branch Chapter',
      },
    ],
    chips: ['Hackathons', 'Ideathons'],
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
