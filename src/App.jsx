import {useState} from "react";
import Header from "./components/Header";
import Steps from "./components/Steps";
import TableCalendar from "./components/TableCalendar";
import InformationForm from "./components/InformationForm";
import arrow from "./assets/arrow.svg";
import "./App.css";

function App() {
  const [startDate, setStartDate] = useState(new Date(Date.now()));
  const handlePlusSevenDays = () => {
    const newDate = new Date(startDate);
    newDate.setDate(newDate.getDate() + 7);
    setStartDate(newDate);
  };

  const handleMinusSevenDays = () => {
    const newDate = new Date(startDate);
    newDate.setDate(newDate.getDate() - 7);
    setStartDate(newDate);
  };

  return (
    <>
      <div className="app">
        <Header />
        <Steps />
        <div className="table-wrapper">
          <div
            className="table-action arrow-left"
            onClick={handleMinusSevenDays}
          >
            <img src={arrow} alt="arrow" />
          </div>
          <TableCalendar currentMonday={startDate} />
          <div
            className="table-action arrow-right"
            onClick={handlePlusSevenDays}
          >
            <img src={arrow} alt="arrow" />
          </div>
        </div>
        <InformationForm />
      </div>
    </>
  );
}

export default App;
