import DClogo from '../assets/dc-logo.png'
export default function Header(){
    return(
        <div className="row pt-3">
            <div className="col">
                <img className="logo d-flex justify-content-start" src={DClogo} alt="" />
            </div>
            <div className="header_link col d-flex gap-3">
                <a href="#" id="1">CHARACTERS</a>
                <a href="#" id="2">COMICS</a>
                <a href="#" id="3">MOVIES</a>
                <a href="#" id="4">TV</a>
                <a href="#" id="5">GAMES</a>
                <a href="#" id="6>COLLECTIBLES</a>
                <a href="#" id="7">VIDEOS</a>
                <a href="#" className="fan_a">FANS</a>
                <a href="#" className="new_a">NEWS</a>
                <a href="#" className="shop_a">SHOP</a>
            </div>
        </div>
    );
}