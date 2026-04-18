const facts = [
  "Germs include bacteria, viruses, fungi, and protozoa.",
  "Not all germs are harmful—many are beneficial.",
  "The human body contains trillions of microorganisms.",
  "Handwashing helps prevent the spread of germs.",
  "Some bacteria help digest food in your body."
];

function showFact() {
  const random = Math.floor(Math.random() * facts.length);
  document.getElementById("fact").innerText = facts[random];
}

function scanGerm() {
  alert("🦠 Scanning sample... Germs detected!");
}
