// !========> LOGIN VALIDATION <==========

function validation() {
	
    let uName = document.querySelector("#userName");
	
    let password = document.querySelector("#password");
	
	let validPass = /^[a-zA-z0-9]+$/g;
	
	let isValidPass = validPass.test(password.value);
	console.log(isValidPass);
    let alert = document.querySelector("#invalidAlert");
	

    if (uName.value.trim() == "") {
        alert.classList.add("invalid");
        uName.classList.add("worng");
        alert.innerText = "Enter a valid username";
        uName.style.border = "1px solid red";
        return false;
    } 
    else if (password.value.trim() == "") {
        alert.classList.add("invalid");
        password.classList.add("worng");
        alert.innerText = "Enter a valid password";
        password.style.border = "1px solid red";
        return false;
    } else if (6 > password.value.trim().length || isValidPass === false) {
        alert.classList.add("invalid");
        password.classList.add("worng");
        alert.innerText = "Must use minimum 6 digit password and use any word and digit";
        password.style.border = "1px solid red";
        return false;
    } else {
        return true;
    }
	
};

//  !==============> REGINTRATION FORM VALIDATION <=============

function regValidation() {
  let uName = document.querySelector("#userName");

  let email = document.querySelector("#userEmail");

  let phone = document.querySelector("#Phone");

  let validNumber = /^([\+88])?01[0-9]{9}$/g;

  let isValidNumber = validNumber.test(phone.value);

  let password = document.querySelector("#password");

  let validPass = /^[a-zA-z0-9]+$/g;

  let isValidPass = validPass.test(password.value);
  console.log(isValidPass);
  let alert = document.querySelector("#invalidAlert");

  if (uName.value.trim() == "") {
    alert.classList.add("invalid");
    uName.classList.add("worng");
    alert.innerText = "Enter a valid username";
    uName.style.border = "1px solid red";
    return false;
  } else if (email.value.trim() == "") {
    alert.classList.add("invalid");
    email.classList.add("worng");
    alert.innerText = "Enter a valid email";
    email.style.border = "1px solid red";
    return false;
  } else if (phone.value.trim() == "" || isValidNumber === false) {
    alert.classList.add("invalid");
    phone.classList.add("worng");
    alert.innerText = "Enter a valid number";
    phone.style.border = "1px solid red";
    return false;
  } else if (password.value.trim() == "") {
    alert.classList.add("invalid");
    password.classList.add("worng");
    alert.innerText = "Enter a valid password";
    password.style.border = "1px solid red";
    return false;
  } else if (6 > password.value.trim().length || isValidPass === false) {
    alert.classList.add("invalid");
    password.classList.add("worng");
    alert.innerText =
      "Must use minimum 6 digit password and use any word and digit";
    password.style.border = "1px solid red";
    return false;
  } else {
    return true;
  }
};
