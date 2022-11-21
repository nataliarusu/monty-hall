const getRandom = (max) => {
  return Math.floor(Math.random() * max + 1);
};
/**
 * calculateStatistics the result of iterations showing the possibility that the user choice matches the car door,
 * returns the result of a stick or switch, for Monty Hall (3 doors)  *
 * result depends on the number of iterations(games), the data is for statistic purpose only
 * @param {number} count number of iteration to get statistics
 * @param {number} doors number of doors
 * @returns {object} {iterations:, doors:, stick:,switch:};
 */
export const calculateStatistics = (count, doors) => {
  let iterate = count;
  let sticked = 0;
  let switched = 0;
  while (iterate > 0) {
    const carDoor = getRandom(doors);
    const userDoor = getRandom(doors);
    if (userDoor === carDoor) {
      sticked++;
    } else {
      switched++;
    }
    iterate--;
  }
  return {
    iterations: count,
    doors: doors,
    stick: sticked,
    switch: switched,
  };
};

export const recalculateHandler = (e) => {
  if (e.target.tagName === 'BUTTON') {
    const li = e.target.closest('li');
    const iterations = li.dataset.count;
    const doors = li.dataset.doors;
    const result = calculateStatistics(Number(iterations), Number(doors));
    li.querySelector('.stick .bar').style.setProperty(
      'height',
      `${(result.stick * 100) / result.iterations}%`
    );
    li.querySelector('.stick .result').innerHTML = `${
      (result.stick * 100) / result.iterations
    }%`;
    li.querySelector('.switch .bar').style.setProperty(
      'height',
      `${(result.switch * 100) / result.iterations}%`
    );
    li.querySelector('.switch .result').innerHTML = `${
      (result.switch * 100) / result.iterations
    }%`;
    li.querySelector(
      '.stick-result-output'
    ).innerHTML = `Stick and matched: ${result.stick} times`;
    li.querySelector(
      '.switch-result'
    ).innerHTML = `Switch and matched: ${result.switch} times`;
  }
};
