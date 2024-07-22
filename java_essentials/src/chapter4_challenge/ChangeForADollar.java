package chapter4_challenge;

import java.util.Scanner;

public class ChangeForADollar {
    public static void main(String[] args) {

        //Initialize variables
        int pennyValue = 1;
        int nickelValue = 5;
        int dimeValue = 10;
        int quarterValue = 25;
        int dollarValue = 100;
        int totalChange = 0;

        int pennyNumber = 0;
        int nickelNumber = 0;
        int dimeNumber = 0;
        int quarterNumber = 0;

        Scanner coinAmounts = new Scanner(System.in);

        System.out.println("Welcome to 'Change for a Dollar'! Your goal is to enter enough change" +
                " to make a exactly $1.00.");

        System.out.println("Enter the number of pennies: ");
        pennyNumber = coinAmounts.nextInt();

        System.out.println("Enter the number of nickel: ");
        nickelNumber = coinAmounts.nextInt();

        System.out.println("Enter the number of dime: ");
        dimeNumber = coinAmounts.nextInt();

        System.out.println("Enter the number of quarter: ");
        quarterNumber = coinAmounts.nextInt();

        totalChange = pennyNumber*pennyValue + nickelNumber*nickelValue + dimeNumber*dimeValue
                + quarterNumber*quarterValue;

        if (totalChange > dollarValue) {
            int changeDifference = totalChange - dollarValue;
            if (changeDifference > dollarValue) {
                int dollarDiff = changeDifference/dollarValue;
                int changeDiff = changeDifference  % dollarValue;
                System.out.println("You lost the game!!! Your are over a dollar by " + dollarDiff +
                        " dollars and " + changeDiff + " cents. Please try again.");
            } else {
                System.out.println("You lost the game!!! Your are over a dollar by " + changeDifference
                        + " cents. Please try again.");
            }
        } else if (totalChange < dollarValue) {
            int changeDifference = dollarValue - totalChange;
                System.out.println("You lost the game!!! Your are under a dollar by " + changeDifference
                        + " cents. Please try again.");
            }  else {
            System.out.println("You Won the game!!! Here is your change for a dollar.");
        }
    }
}
