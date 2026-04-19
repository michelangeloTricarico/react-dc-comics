import DClogo from '../assets/dc-logo.png'
import nav from "../data/nav.js"
export default function Header(){
    return(
        <div className="row pt-3">
            <div className="col">
                <img className="logo d-flex justify-content-start" src={DClogo} alt="" />
            </div>
            <div className="header_link col d-flex gap-3">
                {nav.map((tab) => (
                    <a href={tab["link"]} className={tab["class"]}>{tab["content"]}</a>
                ))}
            </div>
        </div>
    );
}