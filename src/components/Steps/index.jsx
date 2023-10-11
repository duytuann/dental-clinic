import "./styles.css";

const Steps = () => {
  return (
    <>
      <div className="selection-step">
        <div className="choose-datetime">
          <div className="select-order">1</div>
          <div>
            Choose a <br></br>Date & Time
          </div>
        </div>
        <div className="enter-information">
          <div className="select-order">2</div>
          <div>
            Enter Patient<br></br> Information
          </div>
        </div>
      </div>
    </>
  );
};

export default Steps;
