import Facebook from '../assets/footer-facebook.png'
import Periscope from '../assets/footer-periscope.png'
import Pinterest from '../assets/footer-pinterest.png'
import Twitter from '../assets/footer-twitter.png'
import Youtube from '../assets/footer-youtube.png'
export default function Footer_contacts(){
    return(
        <div className="row contact_footer text-white pt-2 pb-2">
            <div className="col text-start d-flex align-items-center">
                <button className='btn-sign'>SIGN-UP NOW</button>
            </div>
            <div className="col gap-2 d-flex justify-content-end">
                <p className="follow_text">FOLLOW US</p>
                <button className="btn-contact"><img src={Facebook} alt="icon"/></button>
                <button className="btn-contact"><img src={Periscope} alt="icon"/></button>
                <button className="btn-contact"><img src={Pinterest} alt="icon"/></button>
                <button className="btn-contact"><img src={Twitter} alt="icon"/></button>
                <button className="btn-contact"><img src={Youtube} alt="icon"/></button>
            </div>
        </div>
    );
}