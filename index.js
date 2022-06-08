function calculator() {
    var Operation = prompt("Which operation will you like to carry out? \n Enter '1' for addition \n Enter '2' for subtraction \n Enter '3' for Multiplication \n Enter '4' for division \n Enter '5' for modulus");
    var firstInt = prompt("Enter the first operand");
    var secInt = prompt("Enter the second operand");
    Operation = Number.parseInt(Operation);
    switch (Operation) {
        case 1:
            console.log(`${firstInt} + ${secInt} = ${firstInt + secInt}`);
            break;
        case 2:
            console.log(`${firstInt} - ${secInt} = ${firstInt - secInt}`);
            break;
        case 3:
            console.log(`${firstInt} * ${secInt} = ${firstInt * secInt}`);
            break;
        case 4:
            console.log(`${firstInt} / ${secInt} = ${firstInt / secInt}`);
            break;
        case 5:
            console.log(`${firstInt} % ${secInt} = ${firstInt % secInt}`);
            break;

    }
}
calculator();