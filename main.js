const form = document.querySelector("#landingPageForm");
form.addEventListener("submit", e => {
  e.preventDefault();
  const firstName = document.querySelector("#firstNameInput").value;
  const lastName = document.querySelector("#lastNameInput").value;
  const email = document.querySelector("#emailInput").value;
  console.log(`First Name: ${firstName} Last Name: ${lastName} Email: ${email}`);
  // You can send this data to a server or process it in any other way you need
});
