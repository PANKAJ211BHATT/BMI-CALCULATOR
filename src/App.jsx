import React, { useEffect, useState } from "react";

const App = () => {
  const [weight, setweight] = useState(0);
  const [height, setheight] = useState(0);
  const [bmi, setBMI] = useState(0);

  const handleHeightChange = (event) => {
    setheight(event.target.value);
  };
  const handleWeightChange = (event) => {
    setweight(event.target.value);
  };

  useEffect(() => {
    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    setBMI(bmiValue.toFixed(1));
  }, [weight, height]);

  return (
    <>
      <div className="body h-screen w-full bg-blue-200 flex justify-center items-center">
        <div className=" Card w-4/5 h-4/6 bg-blue-100  ">
          <div className=" Header w-full h-1/5 bg-blue-600 flex justify-center items-center ">
            <h1 className="text-6xl text-white">BMI CALCULATOR</h1>
          </div>
          <div className="container h-4/5 grid justify-center  ">
            <div className="border-4 my-10 grid h-2/3 w-96 ">
              <label htmlFor="weight">weight : {weight} KG</label>
              <input
                type="range"
                min="40"
                max="220"
                value={weight}
                id="weight"
                onChange={handleWeightChange}
              />

              <label htmlFor="height">height : {height} cm</label>
              <input
                type="range"
                min="140"
                max="220"
                value={height}
                id="height"
                onChange={handleHeightChange}
              />
            </div>
            <div className=" mt-5 flex justify-center items-center ">
              <button className="rounded-md bg-blue-700 h-10 w-1/2 ">
                {bmi}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
