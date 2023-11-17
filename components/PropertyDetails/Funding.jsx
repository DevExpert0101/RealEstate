const Funding = () => {
  return (
    <div className="progress__type progress__type--two">
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <div className="project__info">
        <p className="project__has">
          <span className="project__has__investors">150 Investors</span> |{" "}
          <span className="project__has__investors__amount">CEE 1,000,000</span>
        </p>
        <p className="project__goal">CEE 1,500,000 Goal</p>
      </div>
    </div>
  );
};

export default Funding;
