export default function Card({comic}){
    return(    
        <div className="col-2">
            <div className="img_square"><img className="comic_img" src={comic["thumb"]} alt="" /></div>
            <p className="comic_description text-white text-start">{comic["title"]}</p>
        </div>
    );
}