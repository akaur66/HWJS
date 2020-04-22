function printNum(number, index){
    if(isNaN(number)){ //wrong input
        document.write("Wrong input. Number was expected");
    }
    else{ //check conditions to print hee haw
        if(number >= index) {
            if (index % 3 == 0 && index % 5 == 0) {
                document.write("Hee Haw! <br>");
            } else if (index % 3 == 0) {
                document.write("Hee! <br>");
            } else if (index % 5 == 0) {
                document.write("Haw! <br>");
            } else {
                document.write(index + "<br>");
            }

            printNum(number, index + 1); //recursion
        }
    }
}
