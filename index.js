const statisticsList = document.querySelector('.statistics-items');
const probabilityList = document.querySelector('.probability-items');

const getRandom = (max) => {
  return Math.floor(Math.random() * max + 1);
};
/**
 * get result of rundom matched 
 * @param {number} count number of iteration to get statistics
 * @param {number} doors number of doors 
 * @returns {object} {iterations:, doors:, stick:,switch:};
 */
const getStatistics = (count, doors) => {
  let iterate=count;
  let sticked= 0;
  let switched= 0;
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
 console.log(sticked, switched)
  return {
    iterations: count,
    doors: doors,
    stick: sticked,
    switch: switched,
  };
};

const renderProbabilities = () => {
  const P = [
    [3, 1],
    [4, 2],
    [5, 1],
    [5, 2],
    [5, 3],
  ];

  for (const pData of P) {
    const [doors, openDoors] = pData;
    let probability = calculatePobability(doors, openDoors);
    const li = createProbabilityItem(probability);
    probabilityList.append(li);
  }
};
const renderStatistics = () => {
  const S = [
    [3, 3],
    [10, 3],
    [100, 3],
    [1000, 3],
    [10000, 3],
  ];

  for (const ivData of S) {
    //iterations, value
    const [iterations, value] = ivData;
    let result = getStatistics(iterations, value);
    console.log(result)
    const li = createStatisticsItem(result);
    statisticsList.append(li);
  }
};

const recalculateHandler = (e) => {
  if (e.target.tagName === 'BUTTON') {
    const li = e.target.closest('li');
    const iterations = li.dataset.count;
    const doors = li.dataset.doors;
    const result = getStatistics(iterations, doors);

    li.querySelector('.stick .bar').style.setProperty(
      'height',
      `${(result.stick * 100) / result.iterations}%`
    );

    li.querySelector('.switch .bar').style.setProperty(
      'height',
      `${(result.switch * 100) / result.iterations}%`
    );
    li.querySelector(
      '.stick-result-output'
    ).innerHTML = `Stick and matched: ${result.stick} times`;
    li.querySelector(
      '.switch-result'
    ).innerHTML = `Switch and matched: ${result.switch} times`;
  }
};
renderProbabilities();
renderStatistics();
statisticsList.addEventListener('click', recalculateHandler);
