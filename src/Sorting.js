import { useState, useEffect } from "react";
import {
  bubbleSort,
  selectionSort,
  insertionSort,
  mergeSort,
  quickSort,
} from "./algorithms";
import ToggleBtn from "./ToggleBtn";
import BarChart from "./BarChart";
import Slider from "./Slider";
import Button from "./Button";

const Sorting = () => {
  const [array, setArray] = useState([]);
  const [num, setNum] = useState(0);
  const [bars, setBars] = useState(80);
  const [speed, setSpeed] = useState(5);
  const [flag, setFlag] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [whichAlgo, setWhichAlgo] = useState(-1);

  const data = [
    {
      title: "Bubble Sort: Time Complexity is O(N^2)",
      algorithm:
        "In every iteration it finds the largest element and move to the end",
    },
    {
      title: "Selection Sort: Time Complexity is O(N^2)",
      algorithm:
        "In every iteration it finds the smallest element and move to the beggining",
    },
    {
      title: "Insertion Sort: Time Complexity is O(N^2)",
      algorithm:
        "Assume first element sorted, then from second element find its correct position in left side and swap elements right side to make room for current element",
    },
    {
      title: "Merge Sort: Time Complexity is O(NlogN)",
      algorithm:
        "Recursively divide the arrays into two sorted arrays then merge this two sorted arrays into one final array",
    },
    {
      title: "Quick Sort: Time Complexity is O(NlogN)",
      algorithm:
        "Recursively find partition element by considering first element as pivot then all the elements on left of partition becomes smaller and all elements on right of partition becomes larger then divide the array around the partition",
    },
  ];

  const resetArray = () => {
    try {
      let bars = document.getElementsByClassName("bar");
      for (let i = 0; i < bars.length; i++) {
        bars[i].style.background = "turquoise";
      }
    } catch (error) {
      console.log(error);
    }
    let array = [];
    for (let i = 0; i < bars; i++) {
      let randomNumber = Math.floor(Math.random() * 400 + 1);
      array.push(randomNumber);
    }
    setArray(array);
  };

  useEffect(() => {
    resetArray();
  }, [bars]);

  const barsHandler = (e) => {
    setBars(e.target.value);
  };

  const speedHandler = (e) => {
    let n = parseInt(e.target.value);
    let s = 10 - Math.floor(n / 10) + 1;
    s = 5 * s - 5 + 1;
    setSpeed(s);
  };

  return (
    <>
      <div className="container">
        <div className="actions" id="navbar">
          <div className="action">
            <h2>Sorting Visualizer</h2>
          </div>
          <div className="action" style={{ color: "black" }}>
            Time(N={bars}): {num}
          </div>

          <Slider
            title="Bars"
            handler={barsHandler}
            min="50"
            max="250"
            default="100"
            disabled={disabled}
          />
          <Slider
            title="Speed"
            handler={speedHandler}
            min="10"
            max="100"
            def="80"
            disabled={disabled}
          />
          <div className="action">
            <span>Flag</span>
            <ToggleBtn setFlag={setFlag} disabled={disabled} />
          </div>
        </div>

        <BarChart array={array} />
        <div className="sortingBtns">
          <Button text="New Array" disabled={disabled} handler={resetArray} />

          <Button
            text="Bubble Sort"
            disabled={disabled}
            handler={() =>
              bubbleSort(
                array,
                setNum,
                setArray,
                speed,
                flag,
                setDisabled,
                setWhichAlgo
              )
            }
          />
          <Button
            text="Selection Sort"
            disabled={disabled}
            handler={() =>
              selectionSort(
                array,
                setNum,
                setArray,
                speed,
                flag,
                setDisabled,
                setWhichAlgo
              )
            }
          />
          <Button
            text="Insertion Sort"
            disabled={disabled}
            handler={() =>
              insertionSort(
                array,
                setNum,
                setArray,
                speed,
                setDisabled,
                setWhichAlgo
              )
            }
          />
          <Button
            text="Merge Sort"
            disabled={disabled}
            handler={() =>
              mergeSort(
                array,
                0,
                array.length - 1,
                setNum,
                setArray,
                speed,
                setDisabled,
                setWhichAlgo
              )
            }
          />

          <Button
            text="Quick Sort"
            disabled={disabled}
            handler={() =>
              quickSort(
                array,
                0,
                array.length - 1,
                setNum,
                setArray,
                speed,
                setDisabled,
                setWhichAlgo
              )
            }
          />
        </div>

        {whichAlgo > -1 ? (
          <>
            <div className="info">
              <p>{data[whichAlgo]["title"]}</p>
              <p>{data[whichAlgo]["algorithm"]}</p>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Sorting;

/*
Created By: Connect/Follow me on LinkedIn.
=> https://www.linkedin.com/in/ujjawal-biswas-b40611142/
          _   _                         _  _      _                           
  _   _  (_) (_)  __ _ __      __ __ _ | || |__  (_) ___ __      __ __ _  ___ 
 | | | | | | | | / _` |\ \ /\ / // _` || || '_ \ | |/ __|\ \ /\ / // _` |/ __|
 | |_| | | | | || (_| | \ V  V /| (_| || || |_) || |\__ \ \ V  V /| (_| |\__ \
  \__,_|_/ |_/ | \__,_|  \_/\_/  \__,_||_||_.__/ |_||___/  \_/\_/  \__,_||___/
       |__/|__/                                                                                                                                                                               
*/
