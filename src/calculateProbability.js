
/**
 * Note, host can open ( total doors - user open (1 door)) - (at least 1 door remains closed) )
 * @param {number} doors number of total doors for the game
 * @param {number} hostOpen number of how many doors host should open
 * @returns {object} probability object
 * { totalDoors: doors, opened: hostOpen, stick: probabilityPickedDoorsHasCar, switch: switchProbability };
 */

export const calculatePobability = (doors = 3, hostOpen = 1) => {
  if(doors-hostOpen <2) return;
  const pickedDoor = 1; //user picked 1 door
  const unPickedDoors = doors - pickedDoor;
  const probabilityPickedDoorsHasCar = pickedDoor / doors;
  const globalProbabilityCarBehindHost = unPickedDoors / doors;
  const unPickedEachDoorProbability = 1 / unPickedDoors;
  //host opens door!
  const unopenedDoors = unPickedDoors - hostOpen;
  const unopenedEachDoorProbability = 1 / unopenedDoors; 
  const switchProbability =
    globalProbabilityCarBehindHost * unopenedEachDoorProbability;

  return { totalDoors: doors, opened: hostOpen, stick: probabilityPickedDoorsHasCar, switch: switchProbability };
};

