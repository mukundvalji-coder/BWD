
function order(item) {
  const message = document.getElementById("message");
  if (message) {
    message.textContent = "You selected " + item + "! Thank you.";
  }
}

function sendMessage(event) {
  event.preventDefault();

  document.getElementById("contactMessage").textContent =
    "Thank you! Your form was submitted.";

  event.target.reset();
}
