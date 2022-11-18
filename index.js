const result = {
  sticked: 0,
  switched: 0,
};

const getRandom = (max) => {
  return Math.floor(Math.random() * max + 1);
};

const getStatistics = (count, doors) => {
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

  console.log(result);
};
getStatistics(10, 3);
getStatistics(100, 3);
getStatistics(1000, 3);
