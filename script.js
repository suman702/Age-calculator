let timer;

function calculateAge() {
  clearInterval(timer); 
  const birthdateInput = document.getElementById("birthdate").value;
  const birthtimeInput = document.getElementById("birthtime").value;
  const errorMessage = document.getElementById("errorMessage");
  const ageResult = document.getElementById("ageResult");

  if (!birthdateInput) {
    errorMessage.innerText = "Please select your birthdate.";
    ageResult.innerText = "";
    return;
  }

  let birthdate = new Date(birthdateInput);
  const today = new Date();

  if (birthdate > today) {
    errorMessage.innerText = "Birthdate cannot be in the future!";
    ageResult.innerText = "";
    return;
  }

 
  if (birthtimeInput) {
    const [hours, minutes] = birthtimeInput.split(":");
    birthdate.setHours(hours, minutes, 0, 0);
  }

  errorMessage.innerText = ""; 

  function updateAge() {
    const now = new Date();
    let years = now.getFullYear() - birthdate.getFullYear();
    let months = now.getMonth() - birthdate.getMonth();
    let days = now.getDate() - birthdate.getDate();
    let hours = now.getHours() - birthdate.getHours();
    let minutes = now.getMinutes() - birthdate.getMinutes();
    let seconds = now.getSeconds() - birthdate.getSeconds();

    
    if (seconds < 0) {
      seconds += 60;
      minutes--;
    }
    if (minutes < 0) {
      minutes += 60;
      hours--;
    }
    if (hours < 0) {
      hours += 24;
      days--;
    }
    if (days < 0) {
      const prevMonth = new Date(
        now.getFullYear(),
        now.getMonth(),
        0
      ).getDate(); 
      days += prevMonth;
      months--;
    }
    if (months < 0) {
      months += 12;
      years--;
    }

   
    if (birthtimeInput) {
      ageResult.innerHTML = `
                You are <strong>${years}</strong> years, <strong>${months}</strong> months, 
                <strong>${days}</strong> days, <strong>${hours}</strong> hours, 
                <strong>${minutes}</strong> minutes, and <strong>${seconds}</strong> seconds old.
            `;
    } else {
      ageResult.innerHTML = `
                You are <strong>${years}</strong> years, <strong>${months}</strong> months, and <strong>${days}</strong> days old.
            `;
    }
  }

  updateAge();
  timer = setInterval(updateAge, 1000); 
}

function toggleDarkMode() {
  const body = document.body;
  const calculator = document.getElementById("ageCalculator");
  const darkModeToggle = document.getElementById("darkModeToggle");

  body.classList.toggle("dark-mode");
  calculator.classList.toggle("dark-mode");

  
  if (body.classList.contains("dark-mode")) {
    darkModeToggle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="yellow" fill="none">
    <path d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z" stroke="currentColor" stroke-width="1.5" />
    <path d="M12 2V3.5M12 20.5V22M19.0708 19.0713L18.0101 18.0106M5.98926 5.98926L4.9286 4.9286M22 12H20.5M3.5 12H2M19.0713 4.92871L18.0106 5.98937M5.98975 18.0107L4.92909 19.0714" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
</svg> `;
  } else {
    darkModeToggle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="lightblue" fill="none">
    <path d="M21.5 14.0784C20.3003 14.7189 18.9301 15.0821 17.4751 15.0821C12.7491 15.0821 8.91792 11.2509 8.91792 6.52485C8.91792 5.06986 9.28105 3.69968 9.92163 2.5C5.66765 3.49698 2.5 7.31513 2.5 11.8731C2.5 17.1899 6.8101 21.5 12.1269 21.5C16.6849 21.5 20.503 18.3324 21.5 14.0784Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg> `;
  }
}
