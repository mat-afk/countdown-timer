import "./Counter.css";

const Counter = ({ text, number }) => {
  return (
    <div className="counter">
      <p className="counter-number">{number}</p>
      <h3 className="counter-text">{text}</h3>
    </div>
  );
};

export default Counter;
