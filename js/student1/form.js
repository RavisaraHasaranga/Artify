function validateForm() {
  let firstName = document.getElementById("first-name").value;
  let lastName = document.getElementById("last-name").value;
  let email = document.getElementById("email").value;
  let address = document.getElementById("address").value;
  let apartment = document.getElementById("address-apartment").value;
  let city = document.getElementById("address-city").value;
  let country = document.getElementById("address-country").value;
  let postalCode = document.getElementById("postal-code").value;
  let contactNumber = document.getElementById("contact-number").value;
  let cardholderName = document.getElementById("cardholder-name").value;
  let cardNumber = document.getElementById("card-number").value;
  let expiryDate = document.getElementById("expiry-date").value;
  let securityCode = document.getElementById("security-code").value;
  let correct = document.getElementById("correct").value;
  let popup = document.getElementById("popup");

  if (
    !firstName ||
    !lastName ||
    !email ||
    !address ||
    !city ||
    !country ||
    !postalCode ||
    !contactNumber ||
    !cardNumber ||
    !expiryDate ||
    !securityCode ||
    !apartment ||
    !cardholderName ||
    !correct
  ) {
    // At least one required field is empty
    alert("Please fill in all required fields");
    return false;
  } else {
    popup.classList.add("open-popup");
    // return true;
  }
}
