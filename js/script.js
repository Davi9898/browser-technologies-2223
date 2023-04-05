const form = document.querySelector("form");

[...document.querySelectorAll("fieldset")].forEach((fieldset) => {
  fieldset.classList.add("floating-fieldset");

  let fieldSetFooter = document.createElement("div");
  fieldSetFooter.classList.add("buttonfooter");

  let next = document.createElement("button");
  next.classList.add("button-styling-next");
  next.innerText = "volgende";
  next.addEventListener("click", nextfieldset);

  let back = document.createElement("button");
  back.classList.add("button-styling-back");
  back.innerText = "vorige";
  back.addEventListener("click", lastFieldSet);

  if (fieldset !== form.lastElementChild) {
    //Last child niet appenden
    fieldSetFooter.appendChild(next);
  }

  if (fieldset !== form.firstElementChild) {
    fieldSetFooter.appendChild(back);
  }

  fieldset.querySelector("section").appendChild(fieldSetFooter);
});

function updateProgress() {
  console.log("banaan");
  const currentFieldset = document.querySelector(".fieldset-active");
  const allFieldsets = document.querySelectorAll("fieldset");
  const progressList = document.querySelector("header ul");

  progressList.innerHTML = "";

  let counter = 1;
  allFieldsets.forEach((fieldset) => {
    const progressLi = document.createElement("li");
    progressLi.textContent = counter++;

    // Classes toevoegen op basis van current fieldset
    if (currentFieldset == fieldset) {
      progressLi.classList.add("progress-active");
    }
    console.log(
      typeof progressList.querySelector(".progress-active") == "undefined"
    );
    if (
      progressList.querySelectorAll(".progress-active").length == 0 &&
      currentFieldset !== fieldset
    ) {
      progressLi.classList.add("progress-done");
    }

    progressList.appendChild(progressLi);
  });
}

function nextfieldset(e) {
  e.preventDefault();
  // Check of alle required inputs in current fieldset een value hebben
  const currentFieldset = e.target.closest("fieldset");
  const requiredInputs = currentFieldset.querySelectorAll(
    'input[required]:not([type="radio"])'
  );
  let isMissingValue = false;

  for (let input of requiredInputs) {
    if (!input.value) {
      isMissingValue = true;
      break;
    }
  }

  // Check of pattern met input matched
  const patternInput = currentFieldset.querySelector("input[pattern]");
  if (patternInput && !patternInput.checkValidity()) {
    let errorMessage = currentFieldset.querySelector(".error-message");
    if (!errorMessage) {
      errorMessage = document.createElement("p");
      errorMessage.classList.add("error-message");
      errorMessage.textContent = "Een studentnummer heeft 9 cijfers❌";
      currentFieldset.appendChild(errorMessage);
    }
    return;
  }

  // Check of alle radio buttons in de group wel selected zijn.
  const radioGroups = currentFieldset.querySelectorAll(
    'input[type="radio"][name]'
  );
  let isRadioGroupSelected = true;

  for (let radioGroup of radioGroups) {
    const groupName = radioGroup.name;
    const groupRadios = currentFieldset.querySelectorAll(
      `input[type="radio"][name="${groupName}"]`
    );
    let isGroupRadioSelected = false;

    for (let groupRadio of groupRadios) {
      if (groupRadio.checked) {
        isGroupRadioSelected = true;
        break;
      }
    }

    if (!isGroupRadioSelected) {
      isRadioGroupSelected = false;
      break;
    }
  }

  // Geef een foutmelding weer en keer terug als voor de input een waarde ontbreekt
  if (isMissingValue || !isRadioGroupSelected) {
    // Check of er niet al een error message staat
    let errorMessage = currentFieldset.querySelector(".error-message");
    if (!errorMessage) {
      errorMessage = document.createElement("p");
      errorMessage.classList.add("error-message");
      errorMessage.textContent = "Vul alle velden met * in❌";
      currentFieldset.appendChild(errorMessage);
    }
    return;
  }

  // Vorige error messages clearen
  const errorMessages = currentFieldset.querySelectorAll(".error-message");
  errorMessages.forEach((errorMessage) => errorMessage.remove());

  let nextTarget = currentFieldset.nextElementSibling;
  
  if (nextTarget && nextTarget.tagName.toLowerCase() == "fieldset") {
    [...document.querySelectorAll("fieldset")].forEach((fieldset) => {
      fieldset.classList.remove("fieldset-active");
    });

    nextTarget.classList.add("fieldset-active");
    updateProgress();
  }
}

// Terug button
function lastFieldSet(e) {
  e.preventDefault();

  [...document.querySelectorAll("fieldset")].forEach((fieldset) => {
    fieldset.classList.remove("fieldset-active");
  });

  let lastTarget = e.target.closest("fieldset").previousElementSibling;
  lastTarget.classList.add("fieldset-active");
  updateProgress();
}

form.firstElementChild.classList.add("fieldset-active");

updateProgress();

// Local storage

const radioButtons = document.querySelectorAll('input[type="radio"]');

// Door radio buttons loopen en change event toevoegen
radioButtons.forEach((radioButton) => {
  radioButton.addEventListener("change", (event) => {
    // name en value
    const name = event.target.name;
    const value = event.target.value;

    // storen
    localStorage.setItem(name, value);
  });

  // Checken of er een stored value is
  const storedValue = localStorage.getItem(radioButton.name);
  if (storedValue) {
    // Als value stored is dan moeten we die laten zien
    if (radioButton.value === storedValue) {
      radioButton.checked = true;
    }
  }
});


const textareas = document.querySelectorAll("textarea");

textareas.forEach((textarea) => {
  textarea.addEventListener("input", (event) => {
    
    const name = event.target.name;
    const value = event.target.value;

    localStorage.setItem(name, value);
  });

  const storedValue = localStorage.getItem(textarea.name);
  if (storedValue) {
    textarea.value = storedValue;
  }
});

const inputFields = document.querySelectorAll('input[type="text"]');

inputFields.forEach((inputField) => {
  inputField.addEventListener("change", (event) => {
    const name = event.target.name;
    const value = event.target.value;

    localStorage.setItem(name, value);
  });
});

inputFields.forEach((inputField) => {
  const name = inputField.name;
  const value = localStorage.getItem(name);
  if (value) {
    inputField.value = value;
  }
});

// local storage clearen
const submitButton = document.querySelector('input[type="submit"]');

submitButton.addEventListener("click", (event) => {
  localStorage.clear();
});
