var username = prompt('ismingizni kiriting');
var money = prompt("Yetarlicha pulni kirgizing:");
const dolor = 11000.34 * 750;
const yevro = 12354.03 * 120;

const dobl = Math.floor (yevro + dolor);


if( money > dobl) {
    console.log( "Oq yol " + username);
}
else{
    console.log( username + " sabr qiling");
}