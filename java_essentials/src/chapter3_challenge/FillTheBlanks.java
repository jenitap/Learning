package chapter3_challenge;

import java.util.Scanner;

public class FillTheBlanks {
    public static void main(String[] args) {

        // Initialize variables
        String adjective = "";
        String season = "";
        int numberCups = 0;

        // Get the adjective, season, and number of cups
        Scanner wordInput = new Scanner(System.in);
        System.out.println("Let's create a story!");
        System.out.println("What is the adjective for the season? ");
        adjective = wordInput.next();

        System.out.println("What is the season of the year? ");
        season = wordInput.next();

        System.out.println("How many cups do you drink? Please enter a whole number. ");
        numberCups = wordInput.nextInt();

        // Print out the text
        System.out.println("On a " + adjective + " " + season + " day, I drink a minimum of "
                + numberCups + " cups of coffee. My head is spinning.");
    }
}
