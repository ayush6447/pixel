import type { Book } from '@/lib/types';

/**
 * The bookshelf. Shelf boards sit at y = 90, 130, 170 and 206.
 * Books stand ON a board, so `shelf` is the board's y and the spine
 * is drawn upward from there. Keep spines between x=44 and x=170.
 */
export const PROJECTS: Book[] = [
  {
    id: 'embryogen',
    x: 46,
    shelf: 90,
    w: 11,
    fill: 's-bone',
    ink: '#1B1F26',
    spine: 'EMBRYOGEN',
    kind: 'Project',
    title: 'EmbryoGen',
    meta: '2026 · Clinical AI',
    text: `Embryologists grade embryos by eye, and two experienced people often disagree. EmbryoGen scores morphology from time-lapse imagery and shows its reasoning in the vocabulary clinicians already use — expansion, inner cell mass, trophectoderm — instead of a confidence number with nothing behind it.

Biology-first by design: every feature the model uses maps to something an embryologist can check or overrule. Currently in incubation.`,
    chips: ['PyTorch', 'Vision transformers', 'Grad-CAM', 'FastAPI', 'Clinical UX'],
    cta: { label: 'Repository', href: '#' },
  },
  {
    id: 'vayumaan',
    x: 59,
    shelf: 90,
    w: 13,
    fill: 's-amber',
    ink: '#1B1F26',
    spine: 'VAYUMAAN',
    kind: 'Project',
    title: 'Vayumaan',
    meta: '2025 · Sensing + hardware',
    text: `Government AQI stations sit kilometres apart, so the number on your phone describes a place you aren't standing in. Vayumaan predicts air quality at street resolution and closes the data gap with Vayumaan Nano — a USB-C sensor that turns any phone into a monitoring node.

Every reading a user takes improves the model for their neighbourhood. The hardware exists because the training data didn't.`,
    chips: ['Flutter', 'FastAPI', 'TFLite', 'USB-C sensor', 'Time series'],
    cta: { label: 'Repository', href: '#' },
  },
  {
    id: 'moderation',
    x: 74,
    shelf: 90,
    w: 10,
    fill: 's-indigo',
    ink: '#F2F1EC',
    spine: 'MODERATION',
    kind: 'Project',
    title: 'Trust & Safety pipeline',
    meta: '2025 · ML infrastructure',
    text: `Two moderation services running behind a queue. The first catches recycled and manipulated images with perceptual hashing and vision APIs; the second scores text using sentence embeddings alongside a hand-tuned rule engine, so obvious spam is caught cheaply and the model handles the rest.

The interesting part was the evaluation. The first strong numbers came from a leaking split — near-duplicate posts landing on both sides. Clustering before splitting fixed it, and the honest score is the one I quote.`,
    chips: ['FastAPI', 'MiniLM', 'BullMQ', 'Node / Express', 'Supabase', 'DBSCAN'],
    cta: { label: 'Repository', href: '#' },
  },
  {
    id: 'blindassist',
    x: 46,
    shelf: 130,
    w: 12,
    fill: 's-light',
    ink: '#F2F1EC',
    spine: 'BLINDASSIST',
    kind: 'Project',
    title: 'BlindAssistant',
    meta: '2025 · Computer vision',
    text: `A native Windows tool that reads a single camera feed and speaks obstacles aloud. No GPU, no cloud round trip — background subtraction, HOG pedestrian detection, Kalman tracking and monocular depth cues, all running locally in C++.

Deep learning would have been easier to write and worse to depend on. This has to work on a modest laptop, offline, every time.`,
    chips: ['C++', 'OpenCV', 'MOG2', 'HOG', 'Kalman filter'],
    cta: { label: 'Repository', href: '#' },
  },
  {
    id: 'flowtrack',
    x: 60,
    shelf: 130,
    w: 11,
    fill: 's-bone',
    ink: '#1B1F26',
    spine: 'FLOWTRACK',
    kind: 'Project',
    title: 'FlowTrack',
    meta: '2024 · Mobile',
    text: `A Flutter app that pulls hydration, activity and screen-time signals into one timeline — HealthKit and Health Connect for the body, a native Kotlin channel into UsageStatsManager for the habits, Firestore keeping it in sync across devices.

Built to feel like it shipped with the operating system rather than beside it.`,
    chips: ['Flutter', 'Kotlin', 'Firestore', 'HealthKit', 'Health Connect'],
    cta: { label: 'Repository', href: '#' },
  },
  {
    id: 'arena',
    x: 46,
    shelf: 170,
    w: 12,
    fill: 's-amber',
    ink: '#1B1F26',
    spine: 'ALGO ARENA',
    kind: 'Project',
    title: 'Algorithm Arena',
    meta: '2024 · Full stack',
    text: `Contests, submissions, live leaderboards. The build taught me more about session handling than about algorithms — cross-origin cookies silently dropping auth in production, race conditions on concurrent submissions, and an authorization audit that found the gaps the happy path had been hiding.`,
    chips: ['React 19', 'Express 5', 'MongoDB', 'JWT', 'Vercel / Render'],
    cta: { label: 'Repository', href: '#' },
  },
];
