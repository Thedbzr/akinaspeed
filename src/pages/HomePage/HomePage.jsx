import './HomePage.css';
import ControlledCarousel from '../../components/Carousel/Carousel';
import SaleItems from '../../components/SaleItems/SaleItems';


export default function HomePage({user, setUser}){
    return (
        <>
        <ControlledCarousel />
        <SaleItems />
        </>
    );
}