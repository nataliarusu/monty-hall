import { calculatePobability } from "./calculateProbability.js";
import { createBar, generatePobabilityMessage } from "./createListItem.js";
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
const renderProbability = (result, doors, openDoors) => {
  resetFormResult();
  const stickPercent = result.sticked;
  const switchPercent = result.switched;
  const stickEl = createBar('stick', stickPercent * 100);
  const switchEl = createBar('switch', switchPercent * 100);
  probabilityGraph.append(stickEl, switchEl);
  probabilityRtitle.innerHTML = `Stick and Switch probabilities for ${doors} doors when host opens ${openDoors} doors`;
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
    renderProbability(
      result,
      Number(doorsInput.value),
      Number(openDoorsInput.value)
    );
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

