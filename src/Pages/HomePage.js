import "./pages.css";

const HomePage = () => {
  return (
    <div className="home-background">
      <div className="Wrapper">
        <h1 className="MainText" data-text="Plan.">
          Plan.
        </h1>
        <h1 className="MainText" data-text="Schedule.">
          Schedule.
        </h1>
        <h1 className="MainText" data-text="Go.">
          Go.
        </h1>
        <div className="buttonWrapper">
          <a href="/trips" className="button-64">
            <span className="text">Find Your Calling</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
