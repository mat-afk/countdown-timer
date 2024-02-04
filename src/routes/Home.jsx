import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <h2>Make your personalized Countdown!</h2>
      <form className="countdown-form">
        <label>
          <span>Title</span>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Enter the name of the event"
          />
        </label>
        <label>
          <span>Date</span>
          <input type="date" name="date" id="date" />
        </label>
        <label>
          <span>Background Image</span>
          <input
            type="text"
            name="image"
            id="image"
            placeholder="Enter the image's URL"
          />
        </label>
        <label>
          <span>Color</span>
          <input type="color" name="color" id="color" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Home;
