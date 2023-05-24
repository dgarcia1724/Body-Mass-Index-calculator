document.addEventListener("DOMContentLoaded", function () {
  const calculatorText = document.querySelector(".calculatorText");

  // RADIO
  const metric = document.querySelector(".metric");
  const imperial = document.querySelector(".imperial");

  // HIDE / SHOW
  const metricData = document.querySelector(".metricData");
  const imperialData = document.querySelector(".imperialData");

  // METRIC Inputs
  const metricHeightInput = document.querySelector(".metricHeightInput");
  const metricWeightInput = document.querySelector(".metricWeightInput");

  // IMPERIAL Inputs
  const ftInput = document.querySelector(".ftInput");
  const inInput = document.querySelector(".inInput");
  const stInput = document.querySelector(".stInput");
  const lbsInput = document.querySelector(".lbsInput");

  // Global Variables
  let bmi;
  let weightClassification;
  let idealRange;

  // metric variables
  let metricWeight;
  let metricHeightCM;
  let metricHeightM;

  function determineWeightClassification() {
    if (bmi < 18.5) {
      weightClassification = "underweight";
    } else if (18.5 <= bmi && bmi < 25) {
      weightClassification = "a healthy weight";
    } else if (25 <= bmi && bmi < 30) {
      weightClassification = "overweight";
    } else if (bmi >= 30) {
      weightClassification = "obese";
    }
  }

  // ********* METRIC WORK *********

  function metricCalcBMI() {
    metricWeight = Number(metricWeightInput.value);
    metricHeightCM = Number(metricHeightInput.value);
    metricHeightM = metricHeightCM / 100;
    bmi = metricWeight / metricHeightM ** 2;
    bmi = Number(bmi.toFixed(1));
    determineWeightClassification();
    metricDetermineIdealRange();
  }

  function metricDetermineIdealRange() {
    if (metricHeightM < 1.37) {
      idealRange = "28.5kgs - 34.9kgs";
    } else if (metricHeightM < 1.4) {
      idealRange = "30.8kgs - 38.1kgs";
    } else if (metricHeightM < 1.42) {
      idealRange = "33.5kgs - 40.8kgs";
    } else if (metricHeightM < 1.45) {
      idealRange = "35.8kgs - 43.9kgs";
    } else if (metricHeightM < 1.47) {
      idealRange = "38.5kgs - 46.7kgs";
    } else if (metricHeightM < 1.5) {
      idealRange = "40.8kgs - 49.9kgs";
    } else if (metricHeightM < 1.52) {
      idealRange = "43.1kgs - 53kgs";
    } else if (metricHeightM < 1.55) {
      idealRange = "45.8kgs - 55.8kgs";
    } else if (metricHeightM < 1.57) {
      idealRange = "48.1kgs - 58.9kgs";
    } else if (metricHeightM < 1.6) {
      idealRange = "50.8kgs - 61.6kgs";
    } else if (metricHeightM < 1.63) {
      idealRange = "53kgs - 64.8kgs";
    } else if (metricHeightM < 1.65) {
      idealRange = "55.3kgs - 68kgs";
    } else if (metricHeightM < 1.68) {
      idealRange = "58kgs - 70.7kgs";
    } else if (metricHeightM < 1.7) {
      idealRange = "60.3kgs - 73.9kgs";
    } else if (metricHeightM < 1.73) {
      idealRange = "63kgs - 76.6kgs";
    } else if (metricHeightM < 1.75) {
      idealRange = "65.3kgs - 79.8kgs";
    } else if (metricHeightM < 1.78) {
      idealRange = "67.6kgs - 83kgs";
    } else if (metricHeightM < 1.8) {
      idealRange = "70.3kgs - 85.7kgs";
    } else if (metricHeightM < 1.83) {
      idealRange = "72.6kgs - 88.9kgs";
    } else if (metricHeightM < 1.85) {
      idealRange = "75.3kgs - 91.6kgs";
    } else if (metricHeightM < 1.88) {
      idealRange = "77.5kgs - 94.8kgs";
    } else if (metricHeightM < 1.91) {
      idealRange = "79.8kgs - 98kgs";
    } else if (metricHeightM < 1.93) {
      idealRange = "82.5kgs - 100.6kgs";
    } else {
      idealRange = "84.8kgs - 103.8kgs";
    }
  }

  // ********* IMPERIAL WORK *********
  // imperial variables
  let imperialFt;
  let imperialIn;
  let imperialSt;
  let imperialLbs;

  // totals
  let totalLbs;
  let totalIn;

  function imperialCalcBMI() {
    imperialFt = Number(ftInput.value);
    imperialIn = Number(inInput.value);
    imperialSt = Number(stInput.value);
    imperialLbs = Number(lbsInput.value);

    totalLbs = imperialSt * 14 + imperialLbs;
    totalIn = imperialFt * 12 + imperialIn;
    bmi = (totalLbs / totalIn ** 2) * 703;

    bmi = Number(bmi.toFixed(1));
    determineWeightClassification();
    imperialDetermineIdealRange();
    console.log(totalLbs, totalIn, bmi);
  }

  function imperialDetermineIdealRange() {
    if (totalIn < 54) {
      idealRange = "63lbs - 77lbs";
    } else if (totalIn < 55) {
      idealRange = "68lbs - 84lbs";
    } else if (totalIn < 56) {
      idealRange = "74lbs - 90lbs";
    } else if (totalIn < 57) {
      idealRange = "79lbs - 97lbs";
    } else if (totalIn < 58) {
      idealRange = "85lbs - 103lbs";
    } else if (totalIn < 59) {
      idealRange = "90lbs - 110lbs";
    } else if (totalIn < 60) {
      idealRange = "95lbs - 117lbs";
    } else if (totalIn < 61) {
      idealRange = "101lbs - 123lbs";
    } else if (totalIn < 62) {
      idealRange = "106lbs - 130lbs";
    } else if (totalIn < 63) {
      idealRange = "112lbs - 136lbs";
    } else if (totalIn < 64) {
      idealRange = "117lbs - 143lbs";
    } else if (totalIn < 65) {
      idealRange = "122lbs - 150lbs";
    } else if (totalIn < 66) {
      idealRange = "128lbs - 156lbs";
    } else if (totalIn < 67) {
      idealRange = "133lbs - 163lbs";
    } else if (totalIn < 68) {
      idealRange = "139lbs - 169lbs";
    } else if (totalIn < 69) {
      idealRange = "144lbs - 176lbs";
    } else if (totalIn < 70) {
      idealRange = "149lbs - 183lbs";
    } else if (totalIn < 71) {
      idealRange = "155lbs - 189lbs";
    } else if (totalIn < 72) {
      idealRange = "160lbs - 196lbs";
    } else if (totalIn < 73) {
      idealRange = "166lbs - 202lbs";
    } else if (totalIn < 74) {
      idealRange = "171lbs - 209lbs";
    } else if (totalIn < 75) {
      idealRange = "176lbs - 216lbs";
    } else if (totalIn < 76) {
      idealRange = "182lbs - 222lbs";
    } else {
      idealRange = "187lbs - 229lbs";
    }
  }

  // ********* Press Enter *********

  document.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
      if (metric.checked) {
        metricCalcBMI();
        calculatorText.innerHTML = `
      <h2>Your BMI is...</h2>
      <span class='bmiNumber'>${bmi}</span>
      <p>Your BMI suggests you're ${weightClassification}. Your ideal weight is between ${idealRange}. </p>
      `;
      } else {
        imperialCalcBMI();
        calculatorText.innerHTML = `
      <h2>Your BMI is...</h2>
      <span class='bmiNumber'>${bmi}</span>
      <p>Your BMI suggests you're ${weightClassification}. Your ideal weight is between ${idealRange}. </p>
      `;
      }
    }
  });

  // Click on Radio Btn
  // HIDE / SHOW
  metric.addEventListener("change", function () {
    showHide();
  });

  imperial.addEventListener("change", function () {
    showHide();
  });

  function showHide() {
    if (metric.checked) {
      // SHOW
      metricData.style.display = "grid";
      // HIDE
      imperialData.style.display = "none";
    } else {
      // SHOW
      imperialData.style.display = "grid";
      // HIDE
      metricData.style.display = "none";
    }
  }

  showHide();
});
