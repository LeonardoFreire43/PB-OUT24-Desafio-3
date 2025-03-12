import './styles.css';
import Nav from '../componentsp/nav/Nav';
import Frame from '../componentsp/frame/frame'
import Email from '../componentsp/frame/Email'
import Rectangle2 from '../components/frame/Rectangle2';
import Rodape from '../componentsp/texts/Rodape'
import Sections from '../componentsp/texts/Sections'
import OneLife from '../componentsp/texts/OneLife'
import Choose from '../componentsp/buttons/ChooseSize'
import Div from '../componentsp/frame/Div'
import Catolog from '../componentsp/texts/Catalog'
import Write from '../componentsp/buttons/Write'


function Products() {
    return (
        <div>
            <Nav />
            <Frame />
            <Email />
            <Rectangle2 />
            <Rodape />
            <Sections />
            <OneLife />
            <Choose />
            <Div />
            <Catolog />
            <Write />

        </div>
    );
}

export default Products;
