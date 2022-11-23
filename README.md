# monty-hall
The Monty Hall problem is a famous, seemingly paradoxical problem in conditional probability. Marilyn vos Savant's solution 'switch' is the best option in a column in Parade Magazine was initially rejected in the popular media of the day.<br>
This program was built to demonstrate probability calculations and statistics standard assumptions calculation for stick or switch better option to prove that Vos Savant solution is correct. The program proves correctness through various examples of probabilistic calculations and game simulations.<br>
It is a simple project developed using JavaScript, CSS, and HTML. <br>
See in action https://nataliarusu.github.io/monty-hall/
   <hr>

### The rules of the game

- The host must always open a door that was not picked by the player.
- The host must always open a door to reveal a goat and never the car.
- The host must always offer the chance to switch between the initial chosen door and the remaining closed door.
### Methods to prove Vos Savant solution
To prove and demonstrate that Vos Savant is right we need to think about the probability of having more than 3 doors because 3 doors is just the beginning of calculating probabilities. This program's two main functions calculate probability to prove Vos Savant solution:
  
- <b>direct calculation of conditional probabilities</b><br> implemented the function <code>calculateProbability()</code> which calculates changing-event probability. The function results show that for example if the player had 10 doors to choose from and the host opened 8 of them, then the probability that the car would be behind the initial door is 0.1, and the probability of the car behind the switching door is 0.9.
- <b>multiple simulation of the game</b><br>
  to demonstrate that the switching strategy actually wins two out of three times under the standard assumptions, we must simulate the game multiple times. The simulation is implemented in <code>calculateStatistics</code> function.


### <b>Function calculateProbability() </b>
This probability function helps to understand the change in probability depending on the open-door event.
This function takes two arguments, the number of doors and the number of doors the host should open for the game. In this function, one of the doors is saved as the user's initial selection. At least one door must remain unopened for the user to switch. Therefore, the difference between the total number of doors and the number of doors the host can open must be at least 2 in order to calculate the probability between 2 doors.

### <b>Function calculateStatistics() </b>
This function repeats the game several times to simulate multiple rounds of the game. For the experiment's objectivity
and calculation accuracy user's initial door for each game is generated randomly. This is because a user can choose different initial doors for a new game.

One iteration (one game)
1. user's initial choice door, which is always randomly generated
2. the door car is always randomly generated

Once the initial door has been chosen, it is already determined whether the switch will win the round for the player, because the host only opens the 'goat door' behind him.<br>

The probability of winning each game is likely to be approximately equal to its theoretical probability of winning. These repeated plays make it clearer why switching is the better strategy.

### <b>Calculate probability form</b>
The form on the page allows a user to get calculated probabilities depending on the open-door events. 
This proves that even if the host opens only one from multiple doors a player should think about switching to another unopened door/doors by taking in consideration the advantage of the event-changing probability.<br>

#### <b>Conclusion</b>
A player who stays with the initial choice wins in only one out of three of these equally likely possibilities, while a player who switches wins in two out of three because they takes an advantage of change in probability depending on the open-door event.

<hr>
To run this project you need to use web-server. This project's js files are splitted into multiple module files for readability and debbagging purpose. Use a local web-server, such as static-server or use the “live server” capability of your editor, such as VS Code Live Server Extension to run this project.
