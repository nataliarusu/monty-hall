import { calculatePobability } from './src/calculateProbability.js';
import { calculateStatistics } from './src/calculateStatistics.js';
import { createProbabilityItem, createStatisticsItem } from './src/createListItem.js';
import { generateProbabilityHandler, calculateInitialP} from './src/generateProbability.js';
import { showHelpInfoHandler } from './src/help.js';
import { recalculateHandler } from './src/calculateStatistics.js';
const getHelp = document.querySelector('.get-help');
const statisticsList = document.querySelector('.statistics-items');
const probabilityList = document.querySelector('.probability-items');
const form = document.querySelector('#probability-form');

const renderProbabilities = () => {
  const P = [
    [7, 1],
    [7, 2],
    [7, 3],
    [7, 4],
    [7, 5]
  ];

  for (const pData of P) {
    const [doors, openDoors] = pData;
    let probability = calculatePobability(doors, openDoors);
    const li = createProbabilityItem(probability);
    probabilityList.append(li);
    console.log(probability);
  }
};
const renderStatistics = () => {
  const S = [
    [10, 3],
    [100, 3],
    [1000, 3],
    [10000, 3],
    [1000, 10],
    [1000, 100],
  ];

  for (const ivData of S) {
    //iterations, value
    const [iterations, value] = ivData;
    let result = calculateStatistics(iterations, value);
    const li = createStatisticsItem(result);
    statisticsList.append(li);
    console.log(result);
  }
};

calculateInitialP();
renderProbabilities();
renderStatistics();
statisticsList.addEventListener('click', recalculateHandler);
form.addEventListener('submit', generateProbabilityHandler);
getHelp.addEventListener('click', showHelpInfoHandler);
