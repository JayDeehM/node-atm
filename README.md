# ATM app in NODE.js

This works as an atm with only the basic functions withdraw and money transfer.

The app includes a simple user authentication stored in an array, and if the user is not in the array, it will show a pop-up alert box.

As soon as the user was able to enter the app, it will display two choices of transaction types (withdraw and money transfer).

When withdraw is selected, it will display the amount of money the user has and how much tje user would want to review. A pop-up box will show after the user enters an amount containing "Transaction complete" if the has enough money to withdraw the amount entered and "You don't have enough money..." if not. 

When money transfer is selected, same as the display in the withdraw page, it will display the amount of money the user has in his account and how much the user will transfer. There will also be an input field where they enter the name of the person or company the user will transfer the money to.

Every after transaction, the application will automatically log-out the user even if the error box shows up.

This is just a very simple atm app with simple functions. Updates and additional features will be added soon.

If ever you would want to contribute to this code, please feel free to send a pull request. Thanks!


### I am currently studying on making a database in mongoose and will soon be implemented in the ATM app.
