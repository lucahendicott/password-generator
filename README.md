# password-generator

This web application generates a password between 8 and 128 characters for a user based off of their preferences for incorporating uppercase letters, lowercase letters, numbers and/or special characters.

## How it Works

The directory includes an HTML, CSS and JS file. HTML and CSS file give this site a stylized card with a generate pawssword button. When you click the generate password button, you are prompted with a series of questions that allow the application to create a random password based off of your answers.

I created a series of string variables including all the possible letters, numbers and characters that the password
can generate. Then we have a generate password function which includes boolean variables that the user can either confirm or cancel. If the user does not confirm at least one, they'll be prompted to do so and have to answer the series of questions again. That function was created with a while loop, declaring if all boolean variables are false, then they get the alert and have to cycle back through the questions.

Given the password can only be between 8 and 128 characters, I created a variable that prompts the user to "Please choose a number between 8 and 128 characters". I created a while loop that only allows the user to make a proper entry. Must be a number >=8 and <=128. If theyre entry is invalid they get an alert to make a proper entry and are prompted again to choose a number. The generator will not proceeed until they make a valid entry.

I then created a series of conditionals, logging if any or all of the boolean variables are true or "confirmed" by the user, that information will be added to the generated password. Then I added a for loop to run the length of the password and generate a random return value based off of all the prior information selected by the user.

Finally, we have a generate button assignment code using a query selector, assigning the function to the button in the HTML. We have a write password function to generate the password and added an event listener to the generate button.

Here are some screenshots of the deployed page:
![uppercase](https://user-images.githubusercontent.com/70814349/96040110-9ebe2000-0e1e-11eb-8aa6-13c33d8896c8.png)
![how many characters](https://user-images.githubusercontent.com/70814349/96040112-9fef4d00-0e1e-11eb-801c-aedae75d4323.png)
![invalid input](https://user-images.githubusercontent.com/70814349/96040113-9fef4d00-0e1e-11eb-9f23-b7ee5bf2c0e7.png)
![generated password](https://user-images.githubusercontent.com/70814349/96040114-9fef4d00-0e1e-11eb-85bc-6bfb931e1822.png)

## Getting Started

Website runs as is in browser. You don't gotta worry about any downloads or installs!

## Credits

I found some super useful code to help me get started on [Stack Overflow](https://stackoverflow.com/questions/1497481/javascript-password-generator)

## Deployed Website

[Check it out!](https://lucahendicott.github.io/password-generator/)
