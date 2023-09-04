import React from 'react';

const ProgressBar = ({ progress }) => {

  console.log("Render ProgressBar")

  return (
    <>
      <div className="progress-content">
        <p> {progress !== 100 ? "You are almost done, go ahead!" : "Congratulations, you are done!"} </p>
        <p> {progress ? progress : 0}% </p>
      </div>
        <div className="progress-bar">
          <div
            className="progress-bar-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </>
  );
};

export default ProgressBar