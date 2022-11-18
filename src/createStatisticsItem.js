

const createStatisticsItem=(result)=>{
    const stickPercent=result.sticked*100/result.iterations;
    const switchPercent=result.switched*100/result.iterations;
    const li=document.createElement('li');
    li.classList.add('statistics-item');
    li.setAttribute('data-count',result.iterations);
    li.setAttribute('data-doors',result.doors);
    li.setAttribute('id', result.id);
    const stickEl = document.createElement('div');
    stickEl.classList.add('stick');
    const switchEl = document.createElement('div');
    switchEl.classList.add('switch');
    const stickResultEl = document.createElement('span');
    const switchResultEl  = document.createElement('span');
    stickResultEl.classList.add('result');
    switchResultEl.classList.add('result');
    const stickBar = document.createElement('span');
    const switchBar = document.createElement('span');
    stickBar.classList.add('bar');
    switchBar.classList.add('bar');
    stickResultEl.innerHTML=`${stickPercent}%`;
    switchResultEl.innerHTML=`${switchPercent}%`;
    stickBar.style.setProperty('height', `calc(${stickPercent}% - ${1}rem)`);
    switchBar.style.setProperty('height', `calc(${switchPercent}% - ${1}rem)`);
    stickEl.append(stickResultEl, stickBar);
    switchEl.append(switchResultEl, switchBar);
    const recalculateBtn=document.createElement('button');
    recalculateBtn.innerHTML='Recalculate';
    li.append(stickEl, switchEl, recalculateBtn);
    return li;
}
