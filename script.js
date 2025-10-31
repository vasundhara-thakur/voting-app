
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("voterForm");
  const result = document.getElementById("result");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); 

    const name = document.getElementById("name").value.trim();
    const age = parseInt(document.getElementById("age").value.trim());
    const voterId = document.getElementById("voterId").value.trim();
    const nationality = document.getElementById("nationality").value;

    if (!name || !age || !voterId || !nationality) {
      result.textContent = "⚠️ Please fill all fields properly!";
      result.style.color = "#ff8800";
      return;
    }

    if (age >= 18 && nationality.toLowerCase() === "indian") {
      result.textContent = `✅ Congratulations, ${name}! You are eligible to vote.`;
      result.style.color = "green";
    } else {
      result.textContent = `❌ Sorry, ${name}. You are not eligible to vote.`;
      result.style.color = "red";
    }
  });
});
