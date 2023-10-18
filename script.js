// Event listener for form submission
document.getElementById("size-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get user inputs
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const bodyType = document.getElementById("body-type").value;
    const age = parseInt(document.getElementById("age").value);
    const fitPreference = document.getElementById("fit-preference").value;

    // Initialize variables for best fit and close fit
    let bestFit = "";
    let closeFit = "";

    // Enhanced logic for size recommendation based on multiple criteria
    if (height < 160 && weight < 60 && age < 30 && bodyType === "flatter" && fitPreference === "tight") {
        bestFit = "XS";
        closeFit = "S";
    } else if (height >= 160 && height < 180 && weight >= 60 && weight < 80 && age >= 30 && age < 50 && bodyType === "average" && fitPreference === "average") {
        bestFit = "M";
        closeFit = "L";
    } else {
        // Default or catch-all condition
        bestFit = "L";
        closeFit = "XL";
    }

    // Update the size recommendation in the HTML
    document.getElementById("best-fit").innerText = `Your best fit is size: ${bestFit}`;
    document.getElementById("close-fit").innerText = `A close alternative is size: ${closeFit}`;
});
