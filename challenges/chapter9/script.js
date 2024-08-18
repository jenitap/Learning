// JavaScript code below
// Change these values to control whether you see 
// the expected answer and/or hints.
const showExpectedResult = true
const showHints = true

function updatePage(document) {
    // Your code goes here.
    
    const updateForms = document.querySelectorAll("form");

    updateForms.forEach((updateForm) => {
        updateForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const target = event.target.getAttribute("data-target");
            const inputElement = document.getElementById(`${target}-input`);
            const targetElement = document.getElementById(target).querySelector(".value");
            targetElement.textContent=inputElement.value;
        
        })
      
    }) 
          
}

