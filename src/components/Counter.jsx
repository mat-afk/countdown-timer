import "./Counter.css";

const Counter = ({ text, number, color }) => {
  return (
    <div className="counter">
      <p className="counter-number" style={{ backgroundColor: color }}>
        {number}
      </p>
      <h3 className="counter-text">{text}</h3>
    </div>
  );
};

export default Counter;
