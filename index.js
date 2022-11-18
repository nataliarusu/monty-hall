const statisticsListEl = document.querySelector('.statistics-items');

const statistics=[];
let itemsGenerated = 0;

const getRandom = (max) => {
  return Math.floor(Math.random() * max + 1);
};

const getStatistics = (count, doors) => {
  const result = {
    iterations: count,
    doors: doors,
    sticked: 0,
    switched: 0,
    id: new Date().getTime().toString()+itemsGenerated
  };
  itemsGenerated++;
  while (count > 0) {
    const carDoor = getRandom(doors); //2
    const userDoor = getRandom(doors);
    if (userDoor === carDoor) {
      result.sticked++;
    } else {
      result.switched++;
    }
    count--;
  }
  statistics.push(result);
  renderResult(result);
  console.log(statistics)
  return result;
};

const renderResult=(result)=>{
    const li = createStatisticsItem(result);
    statisticsListEl.append(li)
}
getStatistics(10, 3);
getStatistics(100, 3);
getStatistics(1000, 3);