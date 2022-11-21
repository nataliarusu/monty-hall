import { calculatePobability } from './src/calculateProbability.js';
import { calculateStatistics } from './src/calculateStatistics.js';
import { createProbabilityItem, createStatisticsItem } from './src/createListItem.js';
import { generateProbabilityHandler, showDefaultProbability} from './src/generateProbability.js';
import { showHelpInfoHandler } from './src/help.js';
import { recalculateHandler } from './src/calculateStatistics.js';
const getHelp = document.querySelector('.get-help');
const statisticsList = document.querySelector('.statistics-items');
const probabilityList = document.querySelector('.probability-items');
const form = document.querySelector('#probability-form');

const renderProbabilities = () => {
  const pOptions = [
    [7, 1],
    [7, 2],
    [7, 3],
    [7, 4],
    [7, 5]
  ];

  for (const option of pOptions) {
    const [doors, openDoors] = option;
    let probability = calculatePobability(doors, openDoors);
    const li = createProbabilityItem(probability);
    probabilityList.append(li);
  }
};
const renderStatistics = () => {
  const sOptions = [
    [10, 3],
    [100, 3],
    [1000, 3],
    [10000, 3],
    [1000, 10],
    [1000, 100],
  ];

  for (const option of sOptions) {
    //iterations, value
    const [iterations, value] = option;
    let result = calculateStatistics(iterations, value);
    const li = createStatisticsItem(result);
    statisticsList.append(li);
  }
};

showDefaultProbability();
renderProbabilities();
renderStatistics();
statisticsList.addEventListener('click', recalculateHandler);
form.addEventListener('submit', generateProbabilityHandler);
getHelp.addEventListener('click', showHelpInfoHandler);
