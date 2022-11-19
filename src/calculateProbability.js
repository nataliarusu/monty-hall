//Note, host can open ( total doors - user open (1 door)) - (at least 1 door remains closed) )

const calculatePobability = (doors = 3, hostOpen = 1) => {
  // hostOpen = how many doors we want host to open, this should be at least 2 doors less than number of doors

  //assuming we have 5 doors, userPickes 1 door, hostOpens = 2 doors 
  //(host will open 2 remaining doors, 2 doors will remain closed)

  const pickedDoor = 1; //user picked 1 door
  const unPickedDoors = doors - pickedDoor; // (5 - 1 = 4 doors)
  const probabilityPickedDoorsHasCar = pickedDoor / doors; //  1/5 === 20%
  const globalProbabilityCarBehindHost = unPickedDoors / doors; // 4/5 === 80%

  //assume the car wasn't behind user's door
  /*******************************second event probability****************************************/
  //total doors for host is unPickedDoors, 4
  //absolute probability for each unPickedDoor inside this event probability
  const unPickedEachDoorProbability = 1 / unPickedDoors; //each door which unchosen by user now has equal probability=>  1/4

  //host opens door!
  const unopenedDoors = unPickedDoors - hostOpen; // 4 - 2 = 2 doors opened => two door remains unopened

  //each unopened door ( each of 2 doors that are still closed) now have more posibility
  // they gained after host opens the door because host opens goat doors only
  const unopenedEachDoorProbability = 1 / unopenedDoors; // 1/2

  const switchProbability =
    globalProbabilityCarBehindHost * unopenedEachDoorProbability;

  return { sticked: probabilityPickedDoorsHasCar, switched: switchProbability };
};


console.log(calculatePobability());
console.log(calculatePobability(5, 2));
