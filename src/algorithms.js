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


const bars = document.getElementsByClassName("bar");
var f = 10; // speed factor

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const bubbleSort = async (
  array,
  setNum,
  setArray,
  speed,
  flag,
  setDisabled,
  setWhichAlgo
) => {
  setDisabled(true);
  setWhichAlgo(0);
  let temp = [...array];
  let n = temp.length;
  let sorted = {};
  let count = 1;
  let pj = -1;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      bars[j].style.background = "yellow";
      bars[j + 1].style.background = "blue";
      await sleep(speed);
      if (pj > -1 && !sorted[pj]) {
        bars[pj].style.background = "turquoise";
        bars[pj].innerHTML = "";
      }

      bars[j].style.background = "turquoise";
      bars[j + 1].style.background = "turquoise";

      setNum(count++);
      setArray([...temp]);
      if (temp[j] > temp[j + 1]) {
        bars[j].style.background = "hotpink";
        pj = j;
        if (flag) {
          bars[j].innerHTML = `<div class="text">${temp[j]}</div>`;
        }
        let t = temp[j];
        temp[j] = temp[j + 1];
        temp[j + 1] = t;
      }
    }
    bars[n - 1 - i].style.background = "hotpink";
    sorted[n - 1 - i] = true;
  }
  setDisabled(false);
};

const selectionSort = async (
  array,
  setNum,
  setArray,
  speed,
  flag,
  setDisabled,
  setWhichAlgo
) => {
  setDisabled(true);
  setWhichAlgo(1);
  let temp = [...array];
  let n = temp.length;
  let count = 1;

  for (let i = 0; i < n; i++) {
    let min_idx = i;
    bars[i].style.background = "yellow";
    let mins_found = [];

    for (let j = i + 1; j < n; j++) {
      setNum(count++);
      bars[j].style.background = "blue";

      if (temp[j] < temp[min_idx]) {
        min_idx = j;
        bars[min_idx].style.background = "orange"; // min_index = j
        if (flag) {
          bars[j].innerHTML = `<div class="text">${temp[min_idx]}</div>`;
        }
        mins_found.push(min_idx);
      }
      await sleep(speed);
      if (j != min_idx) {
        bars[j].style.background = "turquoise";
      }
    }

    for (let i = 0; i < mins_found.length; i++) {
      bars[mins_found[i]].style.background = "turquoise";
      bars[mins_found[i]].innerHTML = "";
    }

    if (min_idx != i) {
      let t = temp[min_idx];
      temp[min_idx] = temp[i];
      temp[i] = t;
    }

    bars[i].style.background = "hotpink";

    console.log(temp);
    setArray([...temp]);
  }
  setDisabled(false);
};

const insertionSort = async (
  array,
  setNum,
  setArray,
  speed,
  setDisabled,
  setWhichAlgo
) => {
  setDisabled(true);
  setWhichAlgo(2);
  let temp = [...array];
  let n = temp.length;
  let count = 1;
  let lastCorrectPos = -1;

  for (let i = 1; i < n; i++) {
    let key = temp[i];
    let j = i - 1;

    bars[i].style.background = "blue";

    while (j >= 0 && temp[j] > key) {
      setNum(count++);

      bars[j + 1].style.background = "blue";
      bars[j].style.background = "yellow";

      await sleep(speed * (f / 2));

      if (j + 1 != i) {
        bars[j + 1].style.background = "turquoise";
      }
      if (j != i) {
        bars[j].style.background = "turquoise";
      }

      temp[j + 1] = temp[j];
      j = j - 1;
    }
    bars[i].style.background = "turquoise";
    if (lastCorrectPos > -1 && lastCorrectPos != j + 1) {
      bars[lastCorrectPos].style.background = "turquoise";
    }
    bars[j + 1].style.background = "hotpink";
    lastCorrectPos = j + 1;
    temp[j + 1] = key;

    setArray([...temp]);
  }

  if (lastCorrectPos > -1) {
    bars[lastCorrectPos].style.background = "turquoise";
  }

  for (let i = 0; i < bars.length; i++) {
    bars[i].style.background = "hotpink";
  }

  setDisabled(false);
};

var count = 1; // [Global] // it is recursive code
const mergeTwoSortedArrays = async (
  array,
  l,
  m,
  r,
  setNum,
  setArray,
  speed
) => {
  let n1 = m - l + 1;
  let n2 = r - m;

  var leftArray = new Array(n1);
  var rightArray = new Array(n2);

  var leftArrayIndexs = [];
  var rightArrayIndexs = [];

  for (let i = 0; i < n1; i++) {
    leftArray[i] = array[l + i];
    leftArrayIndexs.push(l + i);
    bars[l + i].style.background = "green";
  }

  for (let i = 0; i < n2; i++) {
    rightArray[i] = array[m + 1 + i];
    rightArrayIndexs.push(m + 1 + i);
    bars[m + 1 + i].style.background = "red";
  }

  var i = 0;
  var j = 0;
  var k = l;

  var p1 = -1;
  var p2 = -1;
  var allSorted = [];

  while (i < n1 && j < n2) {
    setNum(count++);
    await sleep(speed * f);

    if (p1 > -1 && p2 > -1) {
      bars[p1].style.background = "green";
      bars[p2].style.background = "red";
      p1 = -1;
      p2 = -1;
    }

    bars[leftArrayIndexs[i]].style.background = "yellow";
    bars[rightArrayIndexs[j]].style.background = "blue";
    p1 = leftArrayIndexs[i];
    p2 = rightArrayIndexs[j];

    if (leftArray[i] <= rightArray[j]) {
      array[k] = leftArray[i];
      allSorted.push(k);
      k++;
      i++;
    } else {
      array[k] = rightArray[j];
      allSorted.push(k);
      k++;
      j++;
    }
  }

  if (p1 > -1 && p2 > -1) {
    bars[p1].style.background = "green";
    bars[p2].style.background = "red";
    p1 = -1;
    p2 = -1;
  }

  while (i < n1) {
    array[k] = leftArray[i];
    allSorted.push(k);
    k++;
    i++;
  }

  while (j < n2) {
    array[k] = rightArray[j];
    allSorted.push(k);
    k++;
    j++;
  }

  setArray([...array]);
  if (l == 0 && r == array.length - 1) {
    for (let i = 0; i < bars.length; i++) {
      bars[i].style.background = "hotpink";
    }
  }
};

const mergeSort = async (
  array,
  l,
  r,
  setNum,
  setArray,
  speed,
  setDisabled,
  setWhichAlgo
) => {
  setDisabled(true);
  setWhichAlgo(3);
  if (l >= r) {
    return;
  }

  var m = l + parseInt((r - l) / 2);
  await mergeSort(
    array,
    l,
    m,
    setNum,
    setArray,
    speed,
    setDisabled,
    setWhichAlgo
  );
  await mergeSort(
    array,
    m + 1,
    r,
    setNum,
    setArray,
    speed,
    setDisabled,
    setWhichAlgo
  );
  await mergeTwoSortedArrays(array, l, m, r, setNum, setArray, speed);
  if (l == 0 && r == array.length - 1) {
    setDisabled(false);
  }
};

var count = 1;
const partition = async (array, l, h, setNum, setArray, speed, setDisabled) => {
  let pivot = array[l];

  let i = l - 1;
  let j = h + 1;

  while (true) {
    do {
      i++;
      setNum(count++);
      bars[i].style.background = "blue";
      await sleep(10);
      bars[i].style.background = "turquoise";
    } while (array[i] < pivot);

    do {
      j--;
      setNum(count++);
      bars[j].style.background = "blue";
      await sleep(10);
      bars[j].style.background = "turquoise";
    } while (array[j] > pivot);

    if (i >= j) {
      return j;
    }

    bars[i].style.background = "yellow";
    bars[j].style.background = "yellow";

    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;

    await sleep(speed);

    bars[i].style.background = "turquoise";
    bars[j].style.background = "turquoise";
  }
};

const quickSort = async (
  array,
  l,
  h,
  setNum,
  setArray,
  speed,
  setDisabled,
  setWhichAlgo
) => {
  setDisabled(true);
  setWhichAlgo(4);
  if (l >= h) return;
  var p = await partition(array, l, h, setNum, setArray, speed, setDisabled);

  setArray([...array]);

  for (let i = l; i <= p; i++) {
    bars[i].style.background = "green";
  }
  for (let i = p + 1; i <= h; i++) {
    bars[i].style.background = "red";
  }

  await sleep(speed * 50);

  for (let i = l; i <= p; i++) {
    bars[i].style.background = "turquoise";
  }
  for (let i = p + 1; i <= h; i++) {
    bars[i].style.background = "turquoise";
  }

  await quickSort(
    array,
    l,
    p,
    setNum,
    setArray,
    speed,
    setDisabled,
    setWhichAlgo
  );
  await quickSort(
    array,
    p + 1,
    h,
    setNum,
    setArray,
    speed,
    setDisabled,
    setWhichAlgo
  );

  if (l == 0 && h == array.length - 1) {
    for (let i = 0; i < bars.length; i++) {
      bars[i].style.background = "hotpink";
      setDisabled(false);
    }
  }
};

export {
  sleep,
  bubbleSort,
  selectionSort,
  insertionSort,
  mergeSort,
  quickSort,
};
