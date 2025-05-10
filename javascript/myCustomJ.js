function fetchAge() {
    let fname = document.getElementById("fname").innerHTML;
    let age = document.getElementById("age").innerHTML;
    let futureYears = 5

    let futureAge = futureYears + Number(age);
    let ageinfiveyers = fname + " är " + futureAge + " om " + futureYears + " år.";
    //alert(fname + " " + age);

    document.getElementById("ageinfiveyears").innerHTML = ageinfiveyers;
}

function fetchAge2() {
    let fname = document.getElementById("fname2").value;
    let age = document.getElementById("age2").value;
    let futureYears = document.getElementById("futureyears2").value;

    let futureAge = Number(futureYears) + Number(age);
    let ageinfiveyers = fname + " är " + futureAge + " om " + futureYears + " år.";
    //alert(fname + " " + age);

    document.getElementById("ageinfiveyears2").innerHTML = ageinfiveyers;
}
