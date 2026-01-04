let goalAmount = 0;
let savedAmount = 0;

function setGoal() {
  const goalName = document.getElementById("goalInput").value;
  goalAmount = Number(document.getElementById("amountInput").value);
  savedAmount = 0;

  if (goalAmount <= 0) {
    alert("Please enter a valid amount 🌸");
    return;
  }

  document.getElementById("goal-name").innerText = goalName || "My Savings Goal";
  updateUI();
  showMessage("Goal set! You’ve got this ✨");
}

function addSavings() {
  const amount = Number(document.getElementById("saveInput").value);
  if (amount <= 0) return;

  savedAmount += amount;
  if (savedAmount > goalAmount) savedAmount = goalAmount;

  updateUI();
  celebrate();
}

function updateUI() {
  document.getElementById("progress-text").innerText =
    `R${savedAmount} / R${goalAmount} saved`;

  const percentage = (savedAmount / goalAmount) * 100;
  document.getElementById("fill").style.height = percentage + "%";
}

function celebrate() {
  if (savedAmount === goalAmount) {
    showMessage("🎉 GOAL REACHED! I’m so proud of you!");
  } else {
    showMessage("🌟 Yay! Every little bit counts!");
  }
}

function showMessage(text) {
  const msg = document.getElementById("message");
  msg.innerText = text;
  msg.style.opacity = 1;

  setTimeout(() => {
    msg.style.opacity = 0;
  }, 3000);
}
