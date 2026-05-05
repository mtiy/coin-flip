// Assign div elements/buttons to variables
let coinDisplay = document.getElementById("coin");
let flipCoinButton = document.getElementById("flipCoinButton");
let coinResult = document.getElementById("coinResult");
let ticketDisplay = document.getElementById("ticketCounter");

let consecutiveHeads = 0;
let consecutiveTails = 0;
let tickets = 0;

// Flip coin function, pick one of two random numbers, 0 is tails and 1 is heads
function flipCoin(){
    let result = Math.round(Math.random());

    coinDisplay.classList.add("flipping");
    flipCoinButton.disabled = true;
    setTimeout(()=>{
        coinDisplay.classList.remove("flipping");
        flipCoinButton.disabled = false;
        decideFlip(result);
    }, 2000);


}

function decideFlip(result){
    if(result){
    consecutiveHeads++;

    if(consecutiveHeads > 1){
        coinResult.textContent = "Heads! x" + consecutiveHeads;
        tickets += consecutiveHeads * 1;
        ticketDisplay.textContent = "Tickets: " + tickets;
    } else{
        coinResult.textContent = "Heads!";
        tickets++;
        ticketDisplay.textContent = "Tickets: " + tickets;
    }

    if(consecutiveTails > 0){
        consecutiveTails = 0;
    }
    } else{
        consecutiveTails++;

        if(consecutiveTails > 1){
            coinResult.textContent = "Tails! x" + consecutiveTails;
        } else{
            coinResult.textContent = "Tails!";
        }

        if(consecutiveHeads > 0){
            consecutiveHeads = 0;
        }
    }
}

flipCoinButton.addEventListener("click", flipCoin);