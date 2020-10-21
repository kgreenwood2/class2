
    function sayHello() {
    document.write("this is some JavaScript");
}

    function rollDie()
    {
        var die = Math.floor(Math.random() * 10) + 1;
        alert(die);
    }

    function drawCard()
    {
        var card = Math.floor(Math.random() * 52) + 1;
        alert(card);

    }

    function generateLetter()
    {
        var num= Math.floor(Math.random() * 26) + 65;
        var letter= String.fromCharCode(num);
        return letter;
    }

    function generateAcronym()
    {
        var firstLetter= generateLetter();
        var second letter = generateLetter();
        var third letter = generateLetter();

        alert(firstleLetter + secondLetter + thirdLetter)

    }