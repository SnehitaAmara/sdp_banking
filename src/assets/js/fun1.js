
    var php5000 = 0;
    var php1000 = 0;
    var php500 = 0;
    var php100 = 0;
    var php50 = 0;
    var php20 = 0;
    var php10 = 0;
    var php5 = 0;
    var php2 = 0;
    var php1 = 0;
    var total = 0;
    var amt_enter = 0;
    var phil = 0;
    var p1 = 0;
    var p2 = 0;
    var p3 = 0;
    var p4 = 0;
    var p5 = 0;
    var p6 = 0;
    var p7 = 0;
    var p8 = 0;
    var p9 = 0;
    var p10 = 0;
    function amount() 
    {
        php5000 = parseInt(prompt("enter quantity for 5000 notes"))
        document.getElementById("php_fivethousand").innerHTML = php5000

        php1000 = parseInt(prompt("enter quantity for 1000 notes"))
        document.getElementById("php_onethousand").innerHTML = php1000

        php500 = parseInt(prompt("enter quantity for 500 notes"))
        document.getElementById("php_fivehundred").innerHTML = php500

        php100 = parseInt(prompt("enter quantity for 100 notes"))
        document.getElementById("php_hundred").innerHTML = php100

        php50 = parseInt(prompt("enter quantity for 50 notes"))
        document.getElementById("php_fifty").innerHTML = php50

        php20 = parseInt(prompt("enter quantity for 20 notes"))
        document.getElementById("twenty").innerHTML = php20

        php10 = parseInt(prompt("enter quantity for 10 notes"))
        document.getElementById("ten").innerHTML = php10

        php5 = parseInt(prompt("enter quantity for 5 coins"))
        document.getElementById("five").innerHTML = php5

        php2 = parseInt(prompt("enter quantity for 2 coins"))
        document.getElementById("two").innerHTML = php2

        php1 = parseInt(prompt("enter quantity for 1 coins"))
        document.getElementById("one").innerHTML = php1

        total = (php5000 * 5000) + (php1000 * 1000) + (php500 * 500) + (php100 * 100) + (php50 * 50) + (php20 * 20) + (php10 * 10) + (php5 * 5) + (php2 * 2) + (php1)
        document.getElementById("tot_Amounts").innerHTML = total;
        document.getElementById("zero").innerHTML = ""
    }
