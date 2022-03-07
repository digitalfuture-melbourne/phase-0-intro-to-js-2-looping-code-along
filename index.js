// Code your solutions in this file
const name = ["Guadalupe", "Ollie", "Aki"]

function writeCards(name) {
    let thankYouCard = []
    let i = 0
    for (i; i<name.length; i++) {
        thankYouCard.push(`Thank you, ${name[i]}, for the wonderful surprise gift!`)
    }
    return thankYouCard
}

function countDown(number) {
    let i = number
    for (i = number; i >= 0; i--){
        console.log(i)
    }
}