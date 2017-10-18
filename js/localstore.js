(function(){

  let myName = document.getElementById("my-name"); 
  let getName = document.getElementById("get-name");
  let userName = document.getElementById("user-name"); 
  let nameStored = localStorage.name;

  // Displays the name in the console at this stage:
  console.log(`Name on page load: ${nameStored}`);
  
  if(nameStored) {
    // If there's a name in localStorage, use it:
    myName.innerHTML = `again ${nameStored}`;
    console.log(`Name stored is: ${nameStored}`);
  }
  else {
    // There's no name in localStorage:
    myName.innerHTML = "stranger";
    console.log(`No name stored`);
  }

  function PerformGreeting() {
    if(userName.value === "") {
      // Set the value to default
      alert("Please enter a name");
      userName.focus();
    }
    // Gets the name the user entered:
    nameStored = userName.value;
    
    // Shows the name in "my-name":
    myName.innerHTML = nameStored;
    
    // Puts the name into localStorage:
    localStorage.name = nameStored;
    
    // Displays the name in the console at the final stage:
    console.log(`New name stored: ${nameStored}`);
    
    return false;
  }

  function ClearData() {
    // Check there is data to clear
    if (localStorage.name != undefined){
      // Log the data before clearing
      // log from brower's local storage rather than local var
      console.log(`Data before clear: ${localStorage.name}`);

      // Clear the local data
      localStorage.clear();

      // Log the data after clearing
      console.log(`Data after clear: ${localStorage.name}`);

      // Reset the HTML
      myName.innerHTML = "stranger";
    }
    // If no name stored, alert the user.
    else {
      alert("No named stored!");
    }
  }

  if (typeof event === "undefined") {
    getName.onsubmit = PerformGreeting; // for Firefox
  }
  else {
    getName.addEventListener("submit", PerformGreeting);
    event.preventDefault();
  }
  // Add a listener for clearing the data
  getName.addEventListener("reset", ClearData);

}());
