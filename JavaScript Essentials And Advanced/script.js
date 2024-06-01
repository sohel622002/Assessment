const bookBtn = document.querySelector(".book-btn");
const form = document.querySelector("#booking-form");

const bookingSelector = document.querySelector("#b-choice");

let interval;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  if (!data.get("username"))
    return showError("danger", "Username is Required !");
  if (!data.get("mobile-number"))
    return showError("danger", "Mobile Number is Required !");
  if (data.get("mobile-number").length < 10)
    return showError("danger", "Mobile Number should contains 10 !");
  if (!data.get("email")) return showError("danger", "Email is Required !");
  if (!data.get("No Of Persons"))
    return showError("danger", "There Shold Be Atleast 1 Person !");
  if (!data.get("date")) return showError("danger", "Please Select Date !");
  if (bookingSelector.value == "Half day booking") {
    if (!data.get("Slot")) return showError("danger", "Please Select Slot !");
  }
  if (bookingSelector.value == "Hourly booking") {
    if (!data.get("time-select"))
      return showError("danger", "Please Select Time Slot !");
  }
  clearInterval(interval);
  const entries = Object.fromEntries(data.entries());
  showError("success", "Booked Successfull !");
  form.reset();
});

bookingSelector.addEventListener("change", bookingChoiceHandler);

function showError(errorType, errorMessage) {
  const errorContainer = document.querySelector(".error");
  errorContainer.classList.add(errorType);
  errorContainer.innerText = errorMessage;
  interval = setTimeout(() => {
    errorContainer.innerText = "";
    errorContainer.classList.remove(errorType);
  }, 2000);
}

function createSlotElement() {
  const element = document.createElement("div");
  element.classList.add("slot-wrapper");
  element.innerHTML = `<label for="slot-selector">Select Slot :</label>
    <select name="Slot" id="slot-selector">
      <option value="Breakfast">Breakfast</option>
      <option value="Lunch">Lunch</option>
      <option value="Dinner">Dinner</option>
    </select>`;
  return element;
}

function createTimeElement() {
  const element = document.createElement("div");
  element.classList.add("time-wrapper");
  element.innerHTML = `<label for="time-selector">Select Time :</label>
    <select name="time-select" id="time-selector" value="">
      <option value="12:00AM">12:00AM to 01:00PM</option>
      <option value="01:00PM">01:00PM to 02:00PM</option>
      <option value="02:00PM">02:00PM to 03:00PM</option>
      <option value="03:00PM">03:00PM to 04:00PM</option>
      <option value="04:00PM">04:00PM to 05:00PM</option>
      <option value="05:00PM">05:00PM to 06:00PM</option>
      <option value="06:00PM">06:00PM to 07:00PM</option>
      <option value="07:00PM">07:00PM to 08:00PM</option>
      <option value="08:00PM">08:00PM to 09:00PM</option>
      <option value="09:00PM">09:00PM to 10:00PM</option>
      <option value="10:00PM">10:00PM to 11:00PM</option>
      <option value="11:00PM">11:00PM to 12:00PM</option>
    </select>`;
  return element;
}

function bookingChoiceHandler(e) {
  if (e.target.value == "Full day booking") {
    document.querySelector(".slot-wrapper")?.remove();
    document.querySelector(".time-wrapper")?.remove();
  }
  if (e.target.value == "Half day booking") {
    form.insertBefore(createSlotElement(), bookBtn);
    document.querySelector(".time-wrapper")?.remove();
  }
  if (e.target.value == "Hourly booking") {
    form.insertBefore(createTimeElement(), bookBtn);
    document.querySelector(".slot-wrapper")?.remove();
  }
}
