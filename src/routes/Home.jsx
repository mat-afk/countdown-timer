import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CountdownContext } from "../context/CountdownContext";

import "./Home.css";

const Home = () => {
  const { setCountdownConfig } = useContext(CountdownContext);
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [color, setColor] = useState("#000000");

  const handleSubmit = (e) => {
    e.preventDefault();

    const countdownConfig = {
      title,
      date,
      image,
      color,
    };

    setCountdownConfig(countdownConfig);

    navigate("/countdown");
  };

  return (
    <div className="home">
      <h2>Make your personalized Countdown!</h2>
      <form className="countdown-form" onSubmit={handleSubmit}>
        <label>
          <span>
            Title <span className="required">*</span>
          </span>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Enter the name of the event"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>
        <label>
          <span>
            Date <span className="required">*</span>
          </span>
          <input
            type="date"
            name="date"
            id="date"
            onChange={(e) => setDate(e.target.value)}
            value={date}
            required
          />
        </label>
        <label>
          <span>Background Image</span>
          <input
            type="text"
            name="image"
            id="image"
            placeholder="Enter the image's URL"
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
        </label>
        <label>
          <span>Color</span>
          <input
            type="color"
            name="color"
            id="color"
            onChange={(e) => setColor(e.target.value)}
            value={color}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Home;
