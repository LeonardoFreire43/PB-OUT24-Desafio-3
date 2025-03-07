import './styles.css';
import Frame from '../../components/frame/frame';
import Nav from '../../components/nav/Nav';
import RectangleImage from '../../components/models/RectangleImage';
import FindClothesThat from '../../components/texts/FindClothesThat';
import BrowseThroughOur from '../../components/texts/BrowseThroughOur';
import ShopNow from '../../components/buttons/ShopNow';
import Vector from '../../components/frame/Vector';
import Vector1 from '../../components/frame/Vector1';
import Numbers from '../../components/texts/Text';
import Line from '../../components/texts/Line';
import Quality from '../../components/texts/Quality';
import Rectangle from '../../components/texts/Rectangle';
import Group from '../../components/texts/Group';

function Home() {
  return (
    <div>
      <Nav />
      <Frame />
      <RectangleImage />
      <FindClothesThat />
      <BrowseThroughOur />
      <ShopNow />
      <Vector />
      <Vector1 />
      <Numbers />
      <Line />
      <Quality />
      <Rectangle />
      <Group />
    </div>
  );
}

export default Home;