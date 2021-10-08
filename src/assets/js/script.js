know = {

    "Hello": "&nbsp &nbsp &nbsp &nbsp &nbsp Welcome to OUR BANK!",
    "hello": "&nbsp &nbsp &nbsp &nbsp &nbsp Welcome to OUR BANK!",
    "HELLO": "&nbsp &nbsp &nbsp &nbsp &nbsp Welcome to OUR BANK!",
    "who are you?": "&nbsp &nbsp &nbsp &nbsp &nbsp I am the chatBot deployed for OUR Banking services to solve the customer queries.",
    "what to do when we lost our atm card?": "&nbsp &nbsp &nbsp &nbsp &nbsp You should immediatly visit the bank and make sure that you block the card so that even others know your pin they cant use the card. ",
    "what are the services provided here?": "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp We allow the user to deposit money,veiw their balance,withdraw money,transfer money.",
    "how to check my account balance?": "&nbsp &nbsp &nbsp &nbsp &nbsp We provided a option called CHECK BALANCE in the homepage.You can click on that button and enter your respective details and veiw your balance.",
    "What’s the interest rate in my savings account?": "&nbsp &nbsp &nbsp &nbsp &nbsp You can check the intrest and all that stuff the accounts section.",




};

function talk() {
    var user = document.getElementById("userBox").value;
    document.getElementById("userBox").value = "";
    document.getElementById("chatLog").innerHTML += user + "<br>";

    if (user in know) {
        document.getElementById("chatLog").innerHTML += know[user] + "<br>";
    } else {
        document.getElementById("chatLog").innerHTML += "I don't understand... <br>";
    }
}