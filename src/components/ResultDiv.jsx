import "./components.css";
import thanksImg from "../images/illustration-thank-you.svg";

export default function ResultDiv(props) {
  return (
    <div className="resultCard">
      <img src={thanksImg} alt="illustration" />
      <span>You selected {props.rate} out of 5</span>
      <h3>Thank you!</h3>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}
