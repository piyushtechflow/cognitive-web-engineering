// -------------------------------------------------------------
// 1. Configuration & State Variables
// -------------------------------------------------------------
const MIN_NUM = 1;
const MAX_NUM = 20;
const MAX_CHANCES = 5;

let secretNumber = generateRandomNumber();
let chancesLeft = MAX_CHANCES;

// -------------------------------------------------------------
// 2. DOM Elements Selection
// -------------------------------------------------------------
const inputNumber = document.getElementById('input-number');
const checkBtn = document.getElementById('checkBtn');
const rangeMsg = document.getElementById('rangeMsg');
const chanceMsg = document.getElementById('chanceMsg');
const resultContainer = document.getElementById('container');

// Initialize the game UI configuration text
rangeMsg.textContent = `Range: ${MIN_NUM}-${MAX_NUM}`;
updateChanceDisplay();

// -------------------------------------------------------------
// 3. Core Game Core Mechanics
// -------------------------------------------------------------
function generateRandomNumber() {
    return Math.floor(Math.random() * (MAX_NUM - MIN_NUM + 1)) + MIN_NUM;
}

function updateChanceDisplay() {
    chanceMsg.textContent = `Chances left: ${chancesLeft}`;
}

function displayMessage(text, isCorrect) {
    // Clear old elements in target zone
    resultContainer.innerHTML = '';
    
    // Build pristine fresh message element targeting your precise CSS classes
    const msgElement = document.createElement('p');
    msgElement.textContent = text;
    msgElement.className = isCorrect ? 'correct' : 'wrongInput';
    
    resultContainer.appendChild(msgElement);
}

// -------------------------------------------------------------
// 4. Input Evaluation Core Handling
// -------------------------------------------------------------
function handleGuess() {
    const userGuess = parseInt(inputNumber.value, 10);

    // Guard Clause: Check if empty string or NaN
    if (isNaN(userGuess)) {
        displayMessage('⚠️ Please type a number before checking.', false);
        return;
    }

    // Guard Clause: Check boundary range validity
    if (userGuess < MIN_NUM || userGuess > MAX_NUM) {
        displayMessage(`❌ Pick a valid number between ${MIN_NUM} and ${MAX_NUM}!`, false);
        inputNumber.value = '';
        return;
    }

    // Process valid attempt logic sequence
    chancesLeft--;
    updateChanceDisplay();

    if (userGuess === secretNumber) {
        displayMessage(`🎉 Match found! The magic number was ${secretNumber}!`, true);
        endGame(true);
    } else if (chancesLeft <= 0) {
        displayMessage(`💀 Game Over! The code was ${secretNumber}. Try again!`, false);
        endGame(false);
    } else {
        const hint = userGuess > secretNumber ? 'Too high! Try a lower number.' : 'Too low! Try a higher number.';
        displayMessage(hint, false);
        inputNumber.value = ''; // Clean field for quick successive typing
        inputNumber.focus();
    }
}

// -------------------------------------------------------------
// 5. Game State Controls
// -------------------------------------------------------------
function endGame(hasWon) {
    // Lock the entry field to prevent post-game inputs
    inputNumber.disabled = true;
    
    // Mutate primary CTA action container button state into a Restart utility trigger
    checkBtn.textContent = 'Play Again';
    
    // Style update: emphasize victory state color context accent glow changes if wanted
    if (hasWon) {
        checkBtn.style.background = 'linear-gradient(90deg, #10b981, #059669)';
        checkBtn.style.color = '#ffffff';
    }

    // Swap processing listener cleanly
    checkBtn.removeEventListener('click', handleGuess);
    checkBtn.addEventListener('click', resetGame);
}

function resetGame() {
    // Reinitialize state engines
    secretNumber = generateRandomNumber();
    chancesLeft = MAX_CHANCES;
    
    // Restore raw interface element presets
    inputNumber.disabled = false;
    inputNumber.value = '';
    resultContainer.innerHTML = '';
    
    checkBtn.textContent = 'Check Answer';
    checkBtn.style.background = ''; // Reverts back cleanly to modern fallback styles
    checkBtn.style.color = '';
    
    updateChanceDisplay();

    // Re-attach core event handler engine loops
    checkBtn.removeEventListener('click', resetGame);
    checkBtn.addEventListener('click', handleGuess);
    
    inputNumber.focus();
}

// -------------------------------------------------------------
// 6. Action Activation Binding Registers
// -------------------------------------------------------------
checkBtn.addEventListener('click', handleGuess);

// Allow user to seamlessly smash the "Enter" keyboard button directly to check responses
inputNumber.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Blocks unexpected window refreshes
        if (inputNumber.disabled === false) {
            handleGuess();
        } else {
            resetGame();
        }
    }
});
