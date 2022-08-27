import "./Card.css";

//wrapper component

const Card = (props) => {
  const classes = "card " + props.className;

  return <div className={classes}>{props.children}</div>;
};

//.children is build into react

export default Card;
