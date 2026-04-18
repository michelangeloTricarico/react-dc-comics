import DigitalComics from '../assets/buy-comics-digital-comics.png'
import DCMerchandise from '../assets/buy-comics-merchandise.png'
import Subscription from '../assets/buy-comics-subscriptions.png'
import ComicShopLocator from '../assets/buy-comics-shop-locator.png'
import DCPowerVisa from '../assets/buy-dc-power-visa.svg'
export default function Footer_buttons(){
    return(
        <div className="row bg-primary text-white pt-4 pb-4">
            <button className="btn-with-icon text-white col gap-2"><img className="imgBtn" src={DigitalComics} alt="icon"/>DIGITAL COMICS</button>
            <button className="btn-with-icon text-white col gap-2"><img className="imgBtn" src={DCMerchandise} alt="icon"/>DC MERCHANDISE</button>
            <button className="btn-with-icon text-white col gap-2"><img className="imgBtn" src={Subscription} alt="icon"/>SUBSCRIPTION</button>
            <button className="btn-with-icon text-white col gap-2"><img className="imgBtn" src={ComicShopLocator} alt="icon"/>COMIC SHOP LOCATOR</button>
            <button className="btn-with-icon text-white col gap-2"><img className="imgBtn" src={DCPowerVisa} alt="icon"/>DC POWER VISA</button>
        </div>
    );
}