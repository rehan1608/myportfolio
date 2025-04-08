import "./App.css";
import React, { useEffect, useState } from "react";
import PortfolioContainer from "./PortfolioContainer/PortfoliContainer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./BirthdayEffect.css"; // Add your CSS for the birthday effect

function App() {
  const [isBirthday, setIsBirthday] = useState(false);

  useEffect(() => {
    const today = new Date();
    const birthday = new Date(today.getFullYear(), 7, 16); // August is 7 (0-based index)

    if (
      today.getMonth() === birthday.getMonth() &&
      today.getDate() === birthday.getDate()
    ) {
      setIsBirthday(true);

      setTimeout(() => {
        setIsBirthday(false);
      }, 5000); // Effect duration in milliseconds (10 seconds)
    }
  }, []);

  return (
    <div className="App">
      {isBirthday && (
        <div className="birthday-effect">
          <div className="cracker cracker-1" />
          <div className="cracker cracker-2" />
          <div className="cracker cracker-3" />
          <div className="balloon balloon-1" />
          <div className="balloon balloon-2" />
          <div className="balloon balloon-3" />
          <div className="message" aria-label="Birthday Message">
            <p>
              <span role="img" aria-label="Party Popper">
                🎉
              </span>
              Hello, It's a Special Day!
              <p>
                It's My Birthday
                <span role="img" aria-label="Party Popper">
                  🎉
                </span>
              </p>
            </p>
          </div>
          
        </div>
      )}
      <ToastContainer />
      <PortfolioContainer />
    </div>
  );
}

export default App;
