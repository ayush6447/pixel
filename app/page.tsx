import Room from '@/components/Room';
import Hud from '@/components/Hud';
import Drawer from '@/components/Drawer';

export default function Home() {
  return (
    <main>
      <Hud />
      <Room />
      <Drawer />
    </main>
  );
}
