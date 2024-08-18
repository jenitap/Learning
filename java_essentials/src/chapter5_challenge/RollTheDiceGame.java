package chapter5_challenge;

import java.util.Random;
import java.util.Scanner;

public class RollTheDiceGame {
    public static void main(String[] args) {

        //variables initialized
        int diceSides = 6;
        int spaces = 20;
        int rollTimes = 5;
        int rollCount = 0;
        int space = 0;
        int spaceGo = 0;

        // Explain the game
        System.out.println("Welcome to the Random Number Generator Game. The board has twenty spaces. " );
        System.out.println("Each time the dice is rolled you will advance the amount shown on the dice.");
        System.out.println("The dice has six sides. You have five rolls of the dice to get to the");
        System.out.println("twentieth space. If you go over the number spaces on the board or if you");
        System.out.println("fall short, you lose the Game. If you land on the twentieth space you");
        System.out.println("will win the game.");
        System.out.println();

        // roll the dice
        for (int i=0; i<rollTimes; i++) {
            rollCount = i + 1;
            //Random number on dice
            Random random = new Random();
            int dice = random.nextInt(diceSides) + 1;
            space = space + dice;
            spaceGo = spaces - space;
            // Tell player game status.
            if (space == spaces) {
                System.out.println("Roll #" + rollCount + ":" + " You've rolled a " + dice + "."
                        + " You are now on space " + space + "." + " Congratulations, you win!!!");
                break;
            } else if (space > spaces) {
                System.out.println("Roll #" + rollCount + ":" + " You've rolled a " + dice + "."
                        + " You have over shot the number of spaces on the board by " +
                        (space - spaces) + "." + " I am sorry. You have lost the game.");
                break;
            } else if ((rollCount == rollTimes) && (spaceGo > 0)) {
                System.out.println("Roll #" + rollCount + ":" + " You've rolled a " + dice + "."
                        + " You are now on space " + space +  "." + " You are " + spaceGo + " spaces"
                       + " away from the twentieth space.");
                System.out.println("You did not reach the twentieth space. "
                       +  " I am sorry. You have lost the game.");
                break;
            } else {

                System.out.println("Roll #" + rollCount + ":" + " You've rolled a " + dice + "."
                        + " You are now on space " + space + " and have " + spaceGo +
                        " more spaces to go.");
                System.out.println();
            }
        }
    }
}
