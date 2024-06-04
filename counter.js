let counterValue = 0;

function updateCounter() {
    document.getElementById('counterstart').innerHTML = counterValue;
}

function increment() {
    counterValue++;
    updateCounter();
}

function decrement() {
    counterValue--;
    updateCounter();
}

function resetCounter() {
    counterValue = 0;
    updateCounter();
}
