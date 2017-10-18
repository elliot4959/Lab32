(function(){

  let myName = document.getElementById("my-name"); 
  let getName = document.getElementById("get-name");
  let userName = document.getElementById("user-name");
  let colourPicker = document.getElementById("colour-picker");
  let nameStored = localStorage.name;
  let colourStored = localStorage.colour;

  // Displays the name in the console at this stage:
  console.log(`Name on page load: ${nameStored}`);
  
  if(nameStored) {
    // If there's a name in localStorage, use it:
    myName.innerHTML = `again ${nameStored}`;
    // If there's a colour in localStorage, use it:
    document.body.style.backgroundColor = colourStored;

    // Log the data stored
    console.log(`Name stored is: ${nameStored}`);
    console.log(`Colour stored is: ${colourStored}`);    
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

    // Gets the name and colour the user entered:
    nameStored = userName.value;
    colourStored = colourPicker.value;
    
    // Shows the name in "my-name" and sets the colour:
    myName.innerHTML = nameStored;
    document.body.style.backgroundColor = colourStored;
    
    // Puts the name and colour into localStorage:
    localStorage.name = nameStored;
    localStorage.colour = colourStored;
    
    // Displays the name and colour in the console at the final stage:
    console.log(`New name stored: ${nameStored}`);
    console.log(`New colour stored: ${colourStored}`);
    
    return false;
  }

  function ClearData() {
    // Check there is data to clear
    if (localStorage.name != undefined){
      // Log the data before clearing
      // log from brower's local storage rather than local var
      console.log(`Name before clear: ${localStorage.name}`);
      console.log(`Colour before clear: ${localStorage.colour}`);

      // Clear the local data
      localStorage.clear();

      // Log the data after clearing
      console.log(`Name after clear: ${localStorage.name}`);
      console.log(`Colour after clear: ${localStorage.colour}`);

      // Reset the HTML
      myName.innerHTML = "stranger";

      // Reset the colour
      document.location.reload();
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
