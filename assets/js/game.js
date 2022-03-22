var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function () {
  window.alert("Well come to Robot Gladiators!");

  var promptFight = window.prompt(
    "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose."
  );

  if (promptFight === "fight" || promptFight === "FIGHT") {
    // remove enemy's health by subtracting the amount set in the playerAttack

    enemyHealth = enemyHealth - playerAttack;

    // Log a resulting message to the console so we know that it worked.
    console.log(
      playerName +
        " attacked " +
        enemyName +
        ". " +
        enemyName +
        " now has " +
        enemyHealth +
        " health remaining."
    );

    // Chack enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // remove player's health by subtructing the amount set in the enemyAtack
    playerHealth = playerHealth - enemyAttack;

    // Log a resulting message to the console so we know that it worked.
    console.log(
      enemyName +
        " attacked " +
        playerName +
        ". " +
        playerName +
        " now hase " +
        playerHealth +
        " health remaining."
    );

    // check player's health

    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left!");
    }
    // if player choose to skip
  } else if (promptFight === "skip" || promptFight === "SKIP") {
    //   confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you would like to quit?");

    // if yes (true), leave fight
    if (confirmSkip) {
      // subtract money from playerMoney for skipping
      playerMoney = playerMoney - 2;

      window.alert(
        playerName +
          " has decided to skip this fight and has " +
          playerMoney +
          " money." +
          " Goodbye!"
      );
    }
    // if no(false), ask question again by running fight() again
    else {
      fight();
    }
  }
};
fight();
