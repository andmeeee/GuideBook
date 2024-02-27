import './Home.scss';
import Slider from './component/Slider';

function Home() {
  return (
    <div className="Home">
      <div className='HomeTop'>
        <img src="/image/armad.jfif" className="armad" alt="logo"/>
        <h3>Что добавят в обновлении Minecraft 1.21 — итоги Minecraft Live!</h3>
      </div>
      <Slider/>
    </div>
  );
}

export default Home;