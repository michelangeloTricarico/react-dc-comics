import DClogo from '../assets/dc-logo.png'
export default function Header(){
    return(
        <div className="row p-3">
            <div className="col">
                <img src={DClogo} alt="" />
            </div>
            <div className="col d-flex gap-3">
                <a href="#">CHARACTERS</a>
                <a href="#">COMICS</a>
                <a href="#">MOVIES</a>
                <a href="#">TV</a>
                <a href="#">GAMES</a>
                <a href="#">COLLECTIBLES</a>
                <a href="#">VIDEOS</a>
                <a href="#">FANS</a>
                <a href="#">NEWS</a>
                <a href="#">SHOP</a>
            </div>
        </div>
    );
}