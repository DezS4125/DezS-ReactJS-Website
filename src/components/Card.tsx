interface Props {
  title?: string;
  text?: string;
  id?: string;
  img?: string;
  href?: string;
}

import { Link } from "react-router-dom";
import "../css/Card.css";

const Card = ({
  title = "Card title",
  text = " Some quick example text to build on the card title and make up the bulk of the card's content.",
  id,
  img,
  href = "/",
}: Props) => {
  return (
    <div className="card" id={id}>
      <img src={img} className="card-img-top" alt="--No Image--" />

      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <Link to={href} className="btn btn-primary">
          Go to
        </Link>
      </div>
    </div>
  );
};

export default Card;
