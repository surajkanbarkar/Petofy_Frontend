const isValidEmail = email =>
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );

  export function handleEmailValidation(email){
    console.log("ValidateEmail was called with", email);

    const isValid = isValidEmail(email);

    const validityChanged =
      (isValid) || (!isValid);
    if (validityChanged) {
    }
    return isValid;
  };

  export function handleDobValidation (dob){
    dob=dob.split("-");
    var bday_in_milliseconds = new Date(parseInt(dob[0], 10), parseInt(dob[1], 10) - 1 , parseInt(dob[2]), 10).getTime(); //birth-date in milliseconds
    var now = new Date().getTime(); //current time in milliseconds
    if(now - bday_in_milliseconds > 662695992000){ //567648000000 is 21 years in milliseconds
        return true;
    }
    else{
        return false;
    }
  }

  export function handleDropdownValidation (selectedValue){
    console.log(selectedValue)
    if(selectedValue === null || selectedValue === undefined || selectedValue === "" || selectedValue === "") return false;
    else return true;
  }

  export function handleAgeValidation (minAge){
    if (minAge >= 21) return true;
    else return false;
  }