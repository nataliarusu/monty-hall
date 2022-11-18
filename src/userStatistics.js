const userStatisticsForm = document.querySelector('#user-statistics');
const grapthOutput = document.querySelector('.user-statistics--graph');
const countEl = document.querySelector('#count-data');
const doorsEl = document.querySelector('#doors-data');

const displayError = (el) => {
  el.classList.add('error');
};

const removeError = (id) => {
  const label = document.querySelector(`label[for="${id}"]`);
  label.classList.contains('error') && label.classList.remove('error');
};

const renderUserStatistics = (result, isStick, isSwitch) => {
  const stickPercent = (result.sticked * 100) / result.iterations;
  const switchPercent = (result.switched * 100) / result.iterations;
  grapthOutput.setAttribute('data-count', result.iterations);
  grapthOutput.setAttribute('data-doors', result.doors);
  grapthOutput.setAttribute('id', result.id);

  if ((isStick && isSwitch) || (!isStick && !isSwitch)) {
    console.log('display all');
    const stickEl = createBar('stick', stickPercent);
    const switchEl = createBar('switch', switchPercent);
    grapthOutput.append(stickEl, switchEl);
  } else if (isStick) {
    const stickEl = createBar('stick', stickPercent);
    grapthOutput.append(stickEl);
  } else if (isSwitch) {
    const switchEl = createBar('switch', switchPercent);
    grapthOutput.append(switchEl);
  }
  const recalculateBtn = document.createElement('button');
  recalculateBtn.innerHTML = 'Recalculate';
  grapthOutput.append(recalculateBtn);
};

const getStatisticsHandler = (e) => {
  e.preventDefault();
  let count = Number(countEl.value);
  let doors = Number(doorsEl.value);
  if (!count || count < 1) {
    //if NaN or 0 or negative
    displayError(document.querySelector('label[for="count-data"]'));
  }
  if (!doors || doors <= 1) {
    //if NaN or 0 or doors < 2
    displayError(document.querySelector('label[for="doors-data"]'));
  }
  if (count && doors) {
    //not NaN and at least 2 doors
    const stickInput = e.target.querySelector(
      'input[name="stick-data"] '
    ).checked;
    const switchInput = e.target.querySelector(
      'input[name="switch-data"] '
    ).checked;
    const result = getStatistics(count, doors);
    grapthOutput.innerHTML = '';
    renderUserStatistics(result, stickInput, switchInput);
    console.log(result);
  }
};
const removeErrorsHandler = (e) => {
  removeError(e.target.id);
};

countEl.addEventListener('focus', removeErrorsHandler);
doorsEl.addEventListener('focus', removeErrorsHandler);
userStatisticsForm.addEventListener('submit', getStatisticsHandler);
