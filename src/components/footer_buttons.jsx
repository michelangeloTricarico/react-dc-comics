import DigitalComics from '../assets/buy-comics-digital-comics.png'
import DCMerchandise from '../assets/buy-comics-merchandise.png'
import Subscription from '../assets/buy-comics-subscriptions.png'
import ComicShopLocator from '../assets/buy-comics-shop-locator.png'
import DCPowerVisa from '../assets/buy-dc-power-visa.svg'
export default function Footer_buttons(){
    return(
        <div className="row bg-primary text-white pt-2 pb-2">

            <button className="col gap-2"><img className="imgBtn" src={DigitalComics} alt="icon"/>DIGITAL COMICS</button>
            <button className="col gap-2"><img className="imgBtn" src={DCMerchandise} alt="icon"/>DC MERCHANDISE</button>
            <button className="col gap-2"><img className="imgBtn" src={Subscription} alt="icon"/>SUBSCRIPTION</button>
            <button className="col gap-2"><img className="imgBtn" src={ComicShopLocator} alt="icon"/>COMIC SHOP LOCATOR</button>
            <button className="col gap-2"><img className="imgBtn" src={DCPowerVisa} alt="icon"/>DC POWER VISA</button>
        </div>
    );
}