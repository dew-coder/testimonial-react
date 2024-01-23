import Card from "./Card"
import './Testimonials.css';
import {FiChevronLeft, FiChevronRight} from "react-icons/fi";
import { useState } from "react";

function Testimonials(props){
    let reviews = props.review;
    //allows u to change variable state
    //initial index, new updates index, 0 -> initial value
    const [index , setIndex] = useState(0);

    function leftbtn(){
        if(index - 1 < 0){
            setIndex(reviews.length - 1);
        }
        else{
            setIndex(index - 1);
        }
    }
    function rightbtn(){
        if(index + 1 > reviews.length - 1){
            setIndex(0);
        }
        else{
            setIndex(index + 1);
        }
    }
    function surprisebtn(){
        let rdmidx = Math.floor(Math.random() * reviews.length);
        setIndex(rdmidx)
    }

    return (
        <div className="test">
            <div className="cards">
            {/* passing 1 review */}
                <Card review = {reviews[index]}/>
            </div>

            <div className="arrow">
                <button onClick={leftbtn}>
                    <FiChevronLeft/>
                </button>

                <button onClick={rightbtn}>
                    <FiChevronRight/>
                </button>
            </div>

            <div>
                <button className="btn" onClick={surprisebtn}>Surprise Me</button>
            </div>

        </div>
    );
}

export default Testimonials;