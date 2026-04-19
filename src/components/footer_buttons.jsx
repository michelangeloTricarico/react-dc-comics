import footer_btn from "../data/footer_data.js"
export default function Footer_buttons(){
    return(
        <div className="row bg-primary text-white pt-4 pb-4">
            {footer_btn.map((btn) => (
                <button className="btn-with-icon text-white col gap-2"><img className="imgBtn" src={btn["icon"]} alt="icon"/>{btn["content"]}</button>
            ))}
        </div>
    );
}