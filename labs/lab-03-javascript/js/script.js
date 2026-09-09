// Lab 03: JavaScript Foundations and Simple Interaction
// Student Workshop Registration System

// Number of available seats for the workshop
let availableSeats = 12;

// Interaction 1: Change registration status text on the page
function checkRegistration() {
  let message = document.getElementById("registrationStatus");
  message.textContent = "Registration is currently open.";
}

// Interaction 2: Check seat availability using a simple if...else condition
function checkSeats() {
  let message = document.getElementById("seatMessage");

  if (availableSeats > 0) {
    message.textContent = "Seats are available. Remaining seats: " + availableSeats;
  } else {
    message.textContent = "Sorry, no seats are available.";
  }
}

// Interaction 3: Read the student's name and show a personalised greeting
function showGreeting() {
  let name = document.getElementById("studentName").value;
  let output = document.getElementById("greetingMessage");
  output.textContent = "Hello, " + name + ". Welcome to CSE472 Lab 03!";
}

// Interaction 4 (independent improvement): Show the workshop venue
function showVenue() {
  let message = document.getElementById("venueMessage");
  message.textContent = "The workshop will be held at CSE Lab 4, Southeast University.";
}