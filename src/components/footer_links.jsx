import footer_dc_comics from "../data/footer_dc_comics";
import footer_shop from "../data/footer_shop";
import footer_dc from "../data/footer_dc";
import footer_site from "../data/footer_sites";

export default function Footer_links(){
    return(
        <div className="link_footer row text-white pt-2 pb-2">
            <div className="col-2 text-start">
                <h2 className="pb-1">DC COMICS</h2>
                <ul className="list-unstyled">
                    {footer_dc_comics.map((item) => (
                        <li><a href={item["link"]}>{item["content"]}</a></li>
                    ))}
                </ul>
                <h2 className="pb-1">SHOP</h2>
                <ul className="list-unstyled">
                    {footer_shop.map((item) => (
                        <li><a href={item["link"]}>{item["content"]}</a></li>
                    ))}
                </ul>
            </div>
            <div className="col-2 text-start">
                <h2 className="pb-1">DC</h2>
                <ul className="list-unstyled">
                    {footer_dc.map((item) => (
                        <li><a href={item["link"]}>{item["content"]}</a></li>
                    ))}
                </ul>
            </div>
            <div className="col-2 text-start">
                <h2 className="pb-1">SITES</h2>
                <ul className="list-unstyled">
                    {footer_site.map((item) => (
                        <li><a href={item["link"]}>{item["content"]}</a></li>
                    ))}
                </ul>
            </div>
        </div>
    );
}