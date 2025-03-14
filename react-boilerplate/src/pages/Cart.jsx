import './styles.css';
import Nav from '../cart/nav/Nav'; 
import Frame from '../cart/frame/frame'; 
import Section from '../cart/texts/Section';
import Your from '../cart/texts/Your';
import Cart2 from '../cart/models/Cart2';
import Email from '../cart/frame/Email';
import Rec from '../cart/frame/Rec';
import Rodape from '../cart/texts/Rodape';
import Line from '../cart/frame/Line'

function Cart() {
    return (
        <div>
            <Nav />
            <Frame />
            <Section />
            <Your />
            <Cart2 />
            <Email />
            <Rec />
            <Rodape />
            <Line />
        </div>
    );
}

export default Cart;