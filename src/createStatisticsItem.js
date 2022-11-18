const createBar = (option, percent) => {
  const optionEl = document.createElement('div');
  optionEl.classList.add(`${option}`);
  const optionResultEl = document.createElement('span');
  optionResultEl.classList.add('result');
  const optionBar = document.createElement('span');
  optionBar.classList.add('bar');
  optionResultEl.innerHTML = percent.toFixed(2) + '%';
  optionBar.style.setProperty('height', `${percent}%`);
  optionEl.append(optionResultEl, optionBar);
  return optionEl;
};

const createStatisticsItem = (result) => {
  const stickPercent = (result.sticked * 100) / result.iterations;
  const switchPercent = (result.switched * 100) / result.iterations;
  const li = document.createElement('li');
  li.classList.add('statistics-item');
  li.setAttribute('data-count', result.iterations);
  li.setAttribute('data-doors', result.doors);
  li.setAttribute('id', result.id);
  const stickEl = createBar('stick', stickPercent);
  const switchEl = createBar('switch', switchPercent);
  const recalculateBtn = document.createElement('button');
  recalculateBtn.innerHTML = 'Recalculate';
  li.append(stickEl, switchEl, recalculateBtn);
  const infoBlock = generateMessage(result);
  li.append(infoBlock);
  return li;
};

const generateMessage = (result) => {
  const infoContainerEl = document.createElement('div');
  const iterationsEl = document.createElement('p');
  const doorsEl = document.createElement('p');
  const stickedEl = document.createElement('p');
  const switchedEl = document.createElement('p');
  iterationsEl.innerHTML = `Iterations: ${result.iterations}`;
  doorsEl.innerHTML = `Doors: ${result.doors}`;
  stickedEl.innerHTML = `Stick and matched: ${result.sticked} times`;
  switchedEl.innerHTML = `Switch and matched: ${result.switched} times`;
  infoContainerEl.append(iterationsEl, doorsEl, stickedEl, switchedEl);
  return infoContainerEl;
};
