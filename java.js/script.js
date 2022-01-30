function myFunction () {
    let ism = prompt("Your name");
    document.getElementById ('name').innerHTML = "Your name: " + ism;

    let link = prompt("Your image");
    document.getElementById ('img').src = link;

    let yosh = prompt("Your age");
    document.getElementById ('age').innerHTML = "Your age: " + yosh;

    let kasb = prompt("Your job");
    document.getElementById ('your-job').innerHTML = "Your job: " + kasb;
}
// decide
function decide () {
    let pul = document.getElementById ('money').value;
    document.getElementById ('Ymoney').innerHTML = "Your money: " + pul + "so'm";

    let sut = document.getElementById ('cost').value;
    document.getElementById ('costM').innerHTML = "Cost of Milk: " + sut + "so'm";

    let butilka = Math.floor(pul / sut);
    document.getElementById ('bottle').innerHTML = "Number of bottles: " +  butilka;

    let qaytim = pul % sut;

    if (qaytim === 0){
        document.getElementById ('change').innerHTML = "Siz qaytim olmaysiz";
    }

    else {
    document.getElementById ('change').innerHTML = "Your change: " + qaytim + "so'm";
    }
}