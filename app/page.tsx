import Room from '@/components/Room';
import Hud from '@/components/Hud';
import Drawer from '@/components/Drawer';
import Tooltip from '@/components/Tooltip';
import Ambience from '@/components/Ambience';

export default function Home() {
  return (
    <main>
      <Hud />
      <Room />
      <Tooltip />
      <Drawer />
      <Ambience />
    </main>
  );
}
