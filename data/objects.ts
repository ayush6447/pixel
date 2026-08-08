import type { Entry } from '@/lib/types';

/** Everything in the room that isn't a book. */
export const OBJECTS: Entry[] = [
  {
    id: 'about',
    kind: 'About',
    title: 'Ayush Kumar Singh',
    meta: 'Ranchi, Jharkhand · India',
    text: `Computer science student, co-founder at Ayuda, and the person who built this room one rectangle at a time.

My work keeps landing in the same place: software that has to be right about something physical. An embryo that will or won't implant. Air that is or isn't safe to breathe. A doorway that's actually there. Models get to be wrong on a benchmark; these don't.

When the ground truth doesn't exist, I build the thing that collects it. That's usually where the hardware comes in.`,
    chips: ['Applied ML', 'Flutter', 'Computer vision', 'Embedded'],
  },
  {
    id: 'terminal',
    kind: 'Terminal',
    title: '$ whoami',
    meta: 'Standard output',
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
      '',
      '$ _',
    ],
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
