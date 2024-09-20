package chapter9_challenge;

import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class CheckPassword {
    // variables initialized

    public static String userName = "John Doe";


    public static void main(String[] args) {
        String newPassword1 = "";
        int verifiedCount = 0;
        boolean verified = false;
        printPasswordRules();

        while (!verified) {
            verifiedCount = verifyPassword(verifiedCount);
            if (verifiedCount == 6) {
                verified = true;
            }
        }



    }
    public static void printPasswordRules() {
        System.out.print(userName);
        System.out.println("! It is time to change your password. Your password must be: \n" +
                """
                     - At least eight characters long
                     - Must contain an uppercase letter
                     - Must contain a special character
                     - Must contain a number
                     - Must not contain the username
                     - Must not be the same as the old password
                """);
        System.out.println();
    }

    public static int verifyPassword(int count) {
         String lowerNewPassword = "";
         String oldPassword = "";
         int minLength = 8;
         boolean containUppercase = false;
         boolean containSpecialChar = false;
         boolean noUserName;
         boolean numberFlag = false;
         boolean verified = false;
         char ch;
         String currentPassword = "ABC_1234";
         int verifiedCount = count;
         String lowerUserName = userName.toLowerCase();
         String newPassword = "";

         // Get new password
        Scanner potentialPass = new Scanner(System.in);
        // printPasswordRules();
        System.out.println();
        System.out.println("Please input the new password and press Enter/Return: ");
        System.out.println();
        newPassword = potentialPass.next();
        oldPassword = currentPassword;
        lowerUserName = lowerUserName.replaceAll("\\s+", "");
        lowerNewPassword = newPassword.toLowerCase();

        if (newPassword.length() < minLength) {
            System.out.println();
            System.out.println("The new password is not long enough!");
        } else {
            verifiedCount = verifiedCount +1;
        }

        if (newPassword.equals(oldPassword)) {
            System.out.println();
            System.out.println("The new password cannot be the same as the old password!");

        } else {
            verifiedCount = verifiedCount +1;
        }

        for (int i = 0; i < newPassword.length(); i++) {
            ch = newPassword.charAt(i);
            if (Character.isDigit(ch)) {
                numberFlag = true;
            }
            if (Character.isUpperCase(ch)) {
                containUppercase = true;
            }
        }
        if (!numberFlag) {
            System.out.println();
            System.out.println("The new password must contain a number!");

        } else {
            verifiedCount = verifiedCount +1;
        }

        if (!containUppercase) {
            System.out.println();
            System.out.println("The new password must contain an uppercase letter!");

        } else {
            verifiedCount = verifiedCount +1;
        }

        Pattern pat = Pattern.compile("[^A-Za-z0-9]");
        Matcher matches = pat.matcher(newPassword);
        containSpecialChar = matches.find();
        if (!containSpecialChar) {
            System.out.println();
            System.out.println("The new password must contain a special character!");

        }  else {
            verifiedCount = verifiedCount +1;
        }

        noUserName = lowerNewPassword.contains(lowerUserName);

        if (noUserName) {
            System.out.println();
            System.out.println("The new password must NOT contain the user name!");

        }  else {
            verifiedCount = verifiedCount +1;
        }
        if (verifiedCount < 6) {
                verifiedCount = 0;
                System.out.println("Invalid new password. Please enter a new Password: ");
                newPassword = potentialPass.next();
                oldPassword = currentPassword;
                lowerUserName = lowerUserName.replaceAll("\\s+", "");
                lowerNewPassword = newPassword.toLowerCase();
            } else  if (verifiedCount == 6) {
            verified = true;
            currentPassword = newPassword;
            System.out.println();
            System.out.println("Your password has been successfully changed!");
            System.out.print("The old password is: ");
            System.out.println(oldPassword);
            System.out.println();
            System.out.print("The new password is: ");
            System.out.println(newPassword);
        }

        return verifiedCount;
    }
}
