import "./components.css";
import star from "../images/icon-star.svg";
import { useState } from "react";

export default function RateDiv(props) {
  const [isHovered, setIsHovered] = useState(false);

  const handleButtonHover = (index) => {
    setIsHovered(index);
  };

  const handleButtonLeave = () => {
    setIsHovered(false);
  };

  const buttons = [1, 2, 3, 4, 5];

  return (
    <div className="rateCard">
      <img src={star} alt="star icon" />
      <h3>How did we do?</h3>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering! Sincerely thankful to you!
      </p>
      <div className="buttonsDiv">
        {buttons.map((item, i) => (
          <button
            key={i}
            onClick={() => {
              props.setRate(item);
            }}
            style={
              props.rate === item
                ? { backgroundColor: "#7C8798", color: "#fff" }
                : isHovered === i
                ? { backgroundColor: "#FC7614", color: "#fff" }
                : {}
            }
            onMouseEnter={() => handleButtonHover(i)}
            onMouseLeave={handleButtonLeave}
          >
            {item}
          </button>
        ))}
      </div>
      <button
        onClick={() => {
          if (props.rate) props.setSubmit(true);
        }}
        style={
          isHovered === buttons.length
            ? { backgroundColor: "#fff", color: "#FC7614" }
            : {}
        }
        onMouseEnter={() => handleButtonHover(buttons.length)}
        onMouseLeave={handleButtonLeave}
        className="submitBtn"
      >
        SUBMIT
      </button>
    </div>
  );
}
