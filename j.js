document.addEventListener("DOMContentLoaded", () => {
  console.log("Webtoon page loaded!");

  // Handle form submission
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    alert(`Thank you, ${name}! Your message has been sent.`);

    // Clear form fields
    form.reset();
  });
}) 
const s = document.getElementById('level');
fetch('./obj.json')
  .then(res => res.json())
  .then(data => {
    data.best_action_manhwa.forEach(post => {
      s.innerHTML = `${post[synopsis]}`;
    });
  })