// Write your JavaScript code here!


window.addEventListener("load", function() {
    // adding validations for input
          let button = document.getElementById("formSubmit");
          event.preventDefault()
         button.addEventListener("click", function(event) {
            let validate = true;
            let cargoNumber = true
            let cargoSupply = true
            let inputName = document.getElementById("pilotName");
            if(inputName.value == "") {
               document.getElementById("pilotStatus") .innerHTML = "Pilot name required"
               validate = false;
            }  else {
               document.getElementById("pilotStatus") .innerHTML = "Pilot ready"
            }
            let inputCoName = document.getElementsByName("copilotName")[0];
            if(inputCoName.value == "") {
               document.getElementById("copilotStatus") .innerHTML = "Co-Pilot name required"
               validate = false;
            }  else {
               document.getElementById("copilotStatus") .innerHTML = "Co-Pilot ready"
            }
            let inputFuel = document.getElementsByName("fuelLevel")[0];
            if(inputFuel.value == "") {
               document.getElementById("fuelStatus") .innerHTML = "Fuel level required"
               validate = false;
             } else if (isNaN(inputFuel.value)){
                cargoNumber = false
             } else if  (inputFuel.value < 10000) {
                 cargoSupply = false;
                 document.getElementById("fuelStatus") .innerHTML = "Fuel level to low for launch"
             } else {
                  document.getElementById("fuelStatus") .innerHTML = "Fuel level high enough for launch"
               }
              let inputMass = document.getElementsByName("cargoMass")[0];
            if(inputMass.value == "") {
               document.getElementById("cargoStatus") .innerHTML = "Cargo mass required"
               validate = false;
             } else if (isNaN(inputMass.value)){
              cargoNumber = false
             } else if (inputMass.value > 10000) {
                    document.getElementById("cargoStatus") .innerHTML = "Cargo mass is too heavy"
                    cargoSupply = false;
             } else {
                  document.getElementById("cargoStatus") .innerHTML = "Cargo mass low enough for launch"
             }
             if (!validate){
                event.preventDefault();
                alert("All fields are required!");
                document.getElementById("faultyItems").style.visibility = "visible";
                document.getElementById("launchStatus").style.color = "red";
                document.getElementById("launchStatus") .innerHTML = "Shuttle not ready for launch";
                }
             if (!cargoNumber){
                   event.preventDefault()
                   alert("Make sure to enter vaild information for each field!")
                }
             if (!cargoSupply){
             event.preventDefault()
             document.getElementById("faultyItems").style.visibility = "visible";
             document.getElementById("launchStatus").style.color = "red";
             document.getElementById("launchStatus") .innerHTML = "Shuttle not ready for launch";
             } else {
                event.preventDefault()
                document.getElementById("launchStatus").style.visibility = "visible";
                document.getElementById("launchStatus").style.color = "green";
                document.getElementById("launchStatus") .innerHTML = "Shuttle is ready for launch";
             }
             });
          });

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
