import "./Product.css"
import Price from "./Price.jsx"

export default function Product({title,idx}){
    let oldPrices = ["9,999","12,999","10,000","8,900"];
    let newPrices = ["7,999","10,999","8,000","6,900"];
    let description = [["8000 DPI","5 Programmable buttons"],["Intuitive Surface","Designed for iPad Pro"],["Designed for iPad Pro","Intuitute surface"],["Wireless","Optical orientation"]]
    return(
        <div className="Product">
            <h4>{title}</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
    );
}