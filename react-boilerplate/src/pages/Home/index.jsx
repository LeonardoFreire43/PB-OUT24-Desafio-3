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
import Products from '../../components/models/Products';
import Clothes from '../../components/models/Clothes';
import ClothesNames from '../../components/texts/ClothesNames';
import ViewAll from '../../components/buttons/ViewAll';
import Clothes2 from '../../components/texts/Clothes2';
import Section from '../../components/models/Section'
import Carrossel from '../../components/models/Carrossel'
import Email from '../../components/frame/Email'
import Rectangle2 from '../../components/frame/Rectangle2';
import Rodape from '../../components/texts/Rodape'
import Price from '../../components/texts/Prices'


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
      <Products /> 
      <Clothes />
      <ClothesNames />
      <ViewAll />
      <Clothes2 />
      <Section />
      <Carrossel />
      <Email />
      <Rectangle2 />
      <Rodape />
      <Price />
    </div>
  );
}

export default Home;