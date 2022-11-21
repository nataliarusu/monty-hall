import { calculatePobability } from "./calculateProbability.js";
import { createBars, generatePobabilityMessage } from "./createListItem.js";
import {closeHelpInfoHandler} from './help.js';
const doorslabel = document.querySelector('label[for="doors"]');
const doorsInput = document.querySelector('#doors');
const openDoorsInput = document.querySelector('#num-host-open-doors');
const openDoorslabel = document.querySelector(
  'label[for="num-host-open-doors"]'
);
const probabilityRtitle = document.querySelector('.probability-output--title');
const probabilityGraph = document.querySelector('.probability-output--graph');
const resultInfoOutputEl = document.querySelector(
  '.probability-output--result'
);

const displayError = (el, errClass) => {
  el.classList.add(errClass);
};
const resetFormResult = () => {
  probabilityRtitle.innerHTML = '';
  probabilityGraph.innerHTML = '';
  resultInfoOutputEl.innerHTML = '';
};
/**
 * 
 * @param {object} result {totalDoors:, opened:, sticked:, switched:}
 * renders result on the page and closes the help info block
 */
const renderProbability = (result) => {
  resetFormResult();
  const barsEl = createBars(result.stick * 100, result.switch * 100);
  probabilityGraph.append(barsEl);
  probabilityRtitle.innerHTML = `Stick and Switch probabilities for ${result.totalDoors} doors when host opens ${result.opened} doors`;
  const resultInfoEl = generatePobabilityMessage(result);
  resultInfoOutputEl.append(resultInfoEl);
  closeHelpInfoHandler();
};
export const generateProbabilityHandler = (e) => {
  e.preventDefault();
  console.log('submitted');
  if (Number(doorsInput.value) - Number(openDoorsInput.value) >= 2) {
    const result = calculatePobability(
      Number(doorsInput.value),
      Number(openDoorsInput.value)
    );
    renderProbability(result);
  }
};

const validateDoorsHandler = (e) => {
  if (
    openDoorsInput.value &&
    Number(e.target.value) - Number(openDoorsInput.value) < 2
  ) {
    displayError(doorslabel, 'error-doors');
  } else {
    doorslabel.classList.remove('error-doors');
    openDoorslabel.classList.remove('error-doors');
  }
};

const validateOpenDoorsHanler = (e) => {
  if (
    doorsInput.value &&
    Number(doorsInput.value) - Number(e.target.value) < 2
  ) {
    displayError(openDoorslabel, 'error-doors');
  } else {
    doorslabel.classList.remove('error-doors');
    openDoorslabel.classList.remove('error-doors');
  }
};

export const calculateInitialP=()=>{
  doorsInput.value=3;
  openDoorsInput.value=1;
  let result=calculatePobability(3, 1);
  renderProbability(result, 3, 1);
}

openDoorsInput.addEventListener('input', validateOpenDoorsHanler);
doorsInput.addEventListener('input', validateDoorsHandler);

