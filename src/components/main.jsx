import jumbotron from '../assets/jumbotron.jpg'
import comics from '../data/comics.js'
export default function Main(){
    return(
        <div>
            <div className="row px-0 bg-black">
                <div className="jumbo col px-0">
                    <img className=" w-100" src={jumbotron} alt="" />
                </div>
            </div> 
            <div className="row bg-black">
                <div className="btn-container col text-start">
                    <button className="btn btn-primary rounded-0 ">CURRENT SERIES</button>
                </div>
            </div>
            <div className="row bg-black p-5 text-center">
                {comics.map((comic) => (
                    <div className="col-2">
                        <div className="img_square"><img className="comic_img" src={comic["thumb"]} alt="" /></div>
                        <p className="comic_description text-white text-start">{comic["title"]}</p>
                    </div>
                ))}
            </div>
            <div className="row px-0 bg-black">
                <div className="col text-center pb-4">
                    <button className="btn btn-primary rounded-0 ">LOAD MORE</button>
                </div>
            </div>
        </div>
    );
}