import cardpic from "./assets/card.jpg"
function Card(){
    return (
        <div className="card">
            <img src={cardpic} alt=""  />
            <h2>Card</h2>
            <p>Created a Card</p>
        </div>
    );
}

export default Card