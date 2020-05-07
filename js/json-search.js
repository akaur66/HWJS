let info =
    {
        "people": [
            {
                "name": "Jane Doe", "sex": "f", "born": "1876", "died": "1956",
                "father": "Petreus de Milliano", "mother": "Sophia van Damme"
            },
            {
                "name": "Jane Ramirez", "sex": "f", "born": "1102", "died": "--",
                "father": "Themistocles Merovech", "mother": "Amara Floros"
            },
            {
                "name": "Bob Smith ", "sex": "m", "born": "2000", "died": "--",
                "father": "Jack Smith", "mother": "Kate Morris"
            },
            {
                "name": "Matt Simpson", "sex": "m", "born": "1500", "died": "1600",
                "father": "Bill White", "mother": "Mary Walker"
            },
            {
                "name": "Alan Tanner", "sex": "m", "born": "2020", "died": "--",
                "father": "Tom Smith", "mother": "Rachel Johnson"
            }
        ]
    };


document.getElementById('btnSubmit').onclick = check;

function check() {
    let inputName = document.getElementById('inputName').value;
    if (inputName != "") {
        search(inputName);
    }
    else {
        document.getElementById("result").innerHTML = "<p>Name is required</p>";
    }
}

function search(inputName){
    let flag = false;
    let answer = document.getElementById("result");
    answer.innerHTML = "";

    info.people.forEach(result);

    function result(person) {
        if (person.name.toLowerCase().includes(inputName.toLowerCase())) {
            flag = true;

            answer.innerHTML +=
                "<br>Name: " + person.name + "<br>Sex: " + person.sex +
                "<br>Born: " + person.born + "<br>Died: " + person.died +
                "<br>Father: " + person.father + "<br>Mother: " + person.mother + "<br>";
        }
    }
    if(!flag){
       answer.innerHTML = "No person found.";
    }
}

