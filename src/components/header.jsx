import DClogo from '../assets/dc-logo.png'
export default function Header(){
    return(
        <div className="row pt-3">
            <div className="col">
                <img className="logo d-flex justify-content-start" src={DClogo} alt="" />
            </div>
            <div className="header_link col d-flex gap-3">
                <a href="#" className="chara_a">CHARACTERS</a>
                <a href="#" className="comics_a">COMICS</a>
                <a href="#" className="movie_a">MOVIES</a>
                <a href="#" className="tv_a">TV</a>
                <a href="#" className="games_a">GAMES</a>
                <a href="#" className="collect_a">COLLECTIBLES</a>
                <a href="#" className="video_a">VIDEOS</a>
                <a href="#" className="fan_a">FANS</a>
                <a href="#" className="new_a">NEWS</a>
                <a href="#" className="shop_a">SHOP</a>
            </div>
        </div>
    );
}