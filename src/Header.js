import logo from "../images/logo.png";
import footer_logo from '../images/footer_logo.png'; 
import Bruschetta from '../images/Bruschetta.jpg'; 
import GreekSalad from '../images/GreekSalad.jpg';
import GrilledFish from '../images/GrilledFish.jpg';
import Lemon_Dessert from '../images/Lemon_Dessert.jpg';
import little_lemon_hero from '../images/little_lemon_hero.jpg';


// 2. Use the imported variable inside your JSX source attribute
<img src={logo} alt="Little Lemon Logo" />
<img src={GreekSalad} alt="Delicious Greek Salad" />
<img src={GrilledFish} alt="Delicious Grilled Fish" />
<img src={little_lemon_hero} alt="Little Lemon Hero" />
<img src={footer_logo} alt="Little Lemon Footer Logo" />
<img src={Bruschetta} alt="Delicious Bruschetta" />
<img src={Lemon_Dessert} alt="Delicious Lemon Dessert" />


function Header() {
    return (
        <header>
            <img src={logo} alt="Little Lemon Logo" />

        </header>
    );
}

export default Header;