const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

   bookingForm.addEventListener("submit", function(event){

    event.preventDefault();

    window.location.href = "payment.html";

});

}
const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        document.getElementById("contactSuccess").innerHTML =
            "✅ Message Sent Successfully!";

        contactForm.reset();

    });

}
// ==========================
// TEST SEARCH
// ==========================

const search = document.getElementById("search");

if (search) {

    search.addEventListener("keyup", function () {

        const value = search.value.toLowerCase();

        const cards = document.querySelectorAll(".test-card");

        cards.forEach(function (card) {

            const testName = card.dataset.name.toLowerCase();

            if (testName.includes(value)) {

                card.style.display = "";

            } else {

                card.style.display = "none";

            }

        });

    });

}
// ==========================
// LOGIN FORM
// ==========================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event){

        event.preventDefault();

        document.getElementById("loginSuccess").innerHTML =
        "✅ Login Successful!";

        loginForm.reset();

    });

}
document.getElementById("loginForm").addEventListener("submit", function(e) {

    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("Login Successful!");
});

// ===============================
// TEST LOCATION SELECTION
// ===============================

const locationOptions = document.querySelectorAll(
    'input[name="testLocation"]'
);

const homeDetails = document.getElementById("homeDetails");
const clinicDetails = document.getElementById("clinicDetails");

locationOptions.forEach(option => {

    option.addEventListener("change", function () {

        // Hide both sections first
        homeDetails.classList.remove("active");
        clinicDetails.classList.remove("active");


        // Show selected section
        if (this.value === "home") {

            homeDetails.classList.add("active");

        } else if (this.value === "clinic") {

            clinicDetails.classList.add("active");

        }

    });

});

// ======================================
// PAYMENT METHOD SWITCHING
// ======================================

function showPayment(method) {

    const upiPayment = document.getElementById("upiPayment");
    const cardPayment = document.getElementById("cardPayment");
    const bankPayment = document.getElementById("bankPayment");

    const paymentMethods = document.querySelectorAll(".payment-method");

    // Hide all payment sections
    upiPayment.classList.add("hidden");
    cardPayment.classList.add("hidden");
    bankPayment.classList.add("hidden");

    // Remove active from all payment cards
    paymentMethods.forEach(function(card) {
        card.classList.remove("active");
    });

    // Show selected section

    if (method === "upi") {

        upiPayment.classList.remove("hidden");
        paymentMethods[0].classList.add("active");

    }

    else if (method === "card") {

        cardPayment.classList.remove("hidden");
        paymentMethods[1].classList.add("active");

    }

    else if (method === "bank") {

        bankPayment.classList.remove("hidden");
        paymentMethods[2].classList.add("active");

    }
}


// ======================================
// COPY UPI ID
// ======================================

function copyUPI() {

    navigator.clipboard.writeText("diagnocare@upi");

    alert("UPI ID copied successfully!");

}


// ======================================
// DEMO PAYMENT
// ======================================

function makePayment() {

    const popup = document.getElementById("successPopup");

    popup.style.display = "flex";

}
