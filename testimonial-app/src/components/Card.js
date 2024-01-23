
import {FaQuoteLeft , FaQuoteRight} from "react-icons/fa";
import './Card.css'

function Card(props){
    let review = props.review;
    return (
        <div className="card">

            <div className="bg"></div>

            <div className="image">
                <img src = {review.image} alt="image"></img>
            </div>

            <div className="name"><p>{review.name}</p></div>

            <div className="job"><p>{review.job}</p></div>

            <div className="quote">
                <FaQuoteLeft/>
            </div>

            <div className="text">
                <p>
                    {review.text}
                </p>
            </div>

            <div className="quote">
            <FaQuoteRight/>
            </div>

        </div>
    );
}

export default Card