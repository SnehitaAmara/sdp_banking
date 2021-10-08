function GeneratingSlips() {
    var slip_tot = phil
    var obj = {
        "Total Amount:": slip_tot,
        "Five thousand Notes:": p1,
        "One thousand Notes:": p2,
        "Five Hundred Notes:": p3,
        "One Hundred Notes:": p4,
        "Fifty Notes:": p5,
        "Twenty Notes:": p6,
        "Ten Notes:": p7,
        "Five Coins:": p8,
        "Two Coins:": p9,
        "One Coins:": p10,
    }

    document.getElementById("zero").innerHTML += "&emsp;" + "&emsp;" + "&emsp;" + "&emsp;" + "&emsp;" + "Thank You<br>"
    for (var i in obj) {
        if (obj[i] > 0) {
            document.getElementById("zero").innerHTML += (i + "&emsp;" + "&emsp;")
            document.getElementById("zero").innerHTML += ("\t\t" + obj[i] + "<br>")
        }

    }
    p1 = 0
    p2 = 0
    p3 = 0
    p4 = 0
    p5 = 0
    p6 = 0
    p7 = 0
    p8 = 0
    p9 = 0
    p10 = 0
}
