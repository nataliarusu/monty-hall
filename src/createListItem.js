/**
 *
 * @param {*string} tag HTML tag name
 * @param {*number} num number of tags to create
 * @returns {[HTMLElement]} array of html elements
 */
const createElements = (tag, num) => {
  const tags = [];
  while (num > 0) {
    tags.push(document.createElement(tag));
    num--;
  }
  return tags;
};

/**
 *
 * @param {*string} option stick | switch
 * @param {*number} percent probability | statistics option matched
 * @returns {HTMLDivElement} div with option's values
 */
export const createBar = (option, percent) => {
  const optionEl = document.createElement('div');
  optionEl.classList.add(`${option}`);
  const [optionBar, optionResultEl] = createElements('span', 2);
  optionBar.classList.add('bar');
  optionBar.style.setProperty('height', `${percent}%`);
  optionResultEl.classList.add('result');
  optionResultEl.innerHTML = percent.toFixed(2) + '%';
  optionEl.append(optionResultEl, optionBar);

  return optionEl;
};

const infoContainer = () => {
  const infoContainerEl = document.createElement('div');
  infoContainerEl.classList.add('info');
  return infoContainerEl;
};

/**
 *
 * @param {*object} result {iterations:, doors:, sticked:, switched:}
 * @returns {HTMLDivElement} div HTML element with statistics object's values
 */
const generateStatisticMessage = (result) => {
  const [iterationsEl, doorsEl, stickEl, switchEl] = createElements('p', 4);
  const infoContainerEl = infoContainer();
  stickEl.classList.add('stick-result-output');
  switchEl.classList.add('switch-result');
  iterationsEl.innerHTML = `Iterations: ${result.iterations}`;
  doorsEl.innerHTML = `Doors: ${result.doors}`;
  stickEl.innerHTML = `Stick and matched: ${result.stick} times`;
  switchEl.innerHTML = `Switch and matched: ${result.switch} times`;
  infoContainerEl.append(iterationsEl, doorsEl, stickEl, switchEl);

  return infoContainerEl;
};

/**
 *
 * @param {*object} result {totalDoors:, opened:, sticked:, switched:}
 * @returns {HTMLDivElement} div HTML element with probability object's values
 */
export const generatePobabilityMessage = (result) => {
  console.log(result)
  const infoContainerEl = infoContainer();
  const [stickedEl, switchedEl] = createElements('p', 2);
  stickedEl.classList.add('stick-result-output');
  switchedEl.classList.add('switch-result');
  stickedEl.innerHTML = `Stick probability: ${result.sticked.toFixed(4)}`;
  switchedEl.innerHTML = `Switch probability: ${result.switched.toFixed(4)}`;
  infoContainerEl.append(stickedEl, switchedEl);

  return infoContainerEl;
};

/**
 * 
 * @param {*object} result {iterations:, doors:, sticked:, switched:}
 * @returns {HTMLLIElement}
 */
export const createStatisticsItem = (result) => {
  const li = document.createElement('li');
  li.classList.add('statistics-item');
  li.setAttribute('data-count', result.iterations);
  li.setAttribute('data-doors', result.doors);
  const stickPercent = (result.stick * 100) / result.iterations;
  const switchPercent = (result.switch * 100) / result.iterations;
  console.log(result.stick, switchPercent)
  const messageEl = generateStatisticMessage(result);
  const stickEl = createBar('stick', stickPercent);
  const switchEl = createBar('switch', switchPercent);
  const button = document.createElement('button');
  button.classList.add('btn-recalculate');
  button.innerHTML = 'Recalculate';
  li.append(stickEl, switchEl, button, messageEl);

  return li;
};

/**
 * 
 * @param {*object} probability {totalDoors:, opened:, sticked:, switched:} 
 * @returns {HTMLLIElement}
 */
export const createProbabilityItem = (probability) => {
  const li = document.createElement('li');
  li.classList.add('probability-item');
  li.setAttribute('data-stick-probability', probability.sticked);
  li.setAttribute('data-switch-probability', probability.switched);
  const titleEl = document.createElement('h3');
  titleEl.innerHTML = `Probability of total ${probability.totalDoors} doors and ${probability.opened} open doors`;
  const stickPercent = probability.sticked * 100;
  const switchPercent = probability.switched * 100;
  const messageEl = generatePobabilityMessage(probability);
  const stickEl = createBar('stick', stickPercent);
  const switchEl = createBar('switch', switchPercent);
  li.append(stickEl, switchEl, titleEl, messageEl);

  return li;
};
