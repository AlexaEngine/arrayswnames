document.addEventListener('DOMContentLoaded', function() {
    function getNames() {
        return ["John", "Jane", "Karen"]; 
    }

    var names = getNames();

    // Populate the list with names
    var namesList = document.getElementById("names-list");
    if (namesList) {
        names.forEach(function(name) {
            var li = document.createElement("li");
            li.textContent = name;
            namesList.appendChild(li);
        });
    }

    // Add event listener to the form
    var addNameForm = document.getElementById("add-name-form");
    if (addNameForm) {
        addNameForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent form submission
            var nameInput = document.getElementById("name-input");
            var newName = nameInput.value;
            if (newName) {
                names.push(newName);
                if (namesList) {
                    var li = document.createElement("li");
                    li.textContent = newName;
                    namesList.appendChild(li);
                }
                nameInput.value = ""; // Clear the input field
            }
        });
    }

    // Add event listener to the delete button
    var deleteNamesButton = document.getElementById("delete-names-button");
    if (deleteNamesButton) {
        deleteNamesButton.addEventListener("click", function() {
            names = []; // Clear the names array
            if (namesList) {
                namesList.innerHTML = ""; // Clear the list
            }
        });
    }
});
