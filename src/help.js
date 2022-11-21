const closeHelpInfo = document.querySelector('.close-help-info-btn');
const helpInfoEl = document.querySelector('.help-info');

export const showHelpInfoHandler = ()=>{
    helpInfoEl.classList.add('visible');
}
export const closeHelpInfoHandler =()=>{
    helpInfoEl.classList.contains('visible') && helpInfoEl.classList.remove('visible');
  }


closeHelpInfo.addEventListener('click', closeHelpInfoHandler);
