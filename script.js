// Event listener for form submission
document.getElementById("size-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get user inputs
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const bodyType = document.getElementById("body-type").value;
    const fitPreference = document.getElementById("fit-preference").value;

    // Initialize variables for best fit and close fit
    let bestFit = "";
    let closeFit = "";

    // Check if essential fields are filled
    if (!height || !weight || !fitPreference) {
        document.getElementById("best-fit").innerText = "Necesito toda la información para ofrecerte la recomendación más precisa.";
        return;
    }

    // Primary basis: Height and Weight
    if (height <= 150 && weight <= 50) {
        bestFit = "XS";
        closeFit = "S";
    } else if ((height > 150 && height <= 160) && (weight > 50 && weight <= 60)) {
        bestFit = "S";
        closeFit = "M";
    } else if ((height > 160 && height <= 175) && (weight > 60 && weight <= 75)) {
        bestFit = "M";
        closeFit = "L";
    } else if ((height > 175 && height <= 190) && (weight > 75 && weight <= 90)) {
        bestFit = "L";
        closeFit = "XL";
    } else {
        bestFit = "XL";
        closeFit = "XL";
    }

    // Adjust based on fit preference
    switch (fitPreference) {
        case "tight":
            if (bestFit !== "XS") {
                closeFit = bestFit;
                bestFit = getPreviousSize(bestFit);
            }
            break;
        case "loose":
            if (bestFit !== "XL") {
                closeFit = getNextSize(bestFit);
            }
            break;
    }

    // Fine-tuning based on body type
    if (bodyType === "rounder" && closeFit !== "XL") {
        closeFit = getNextSize(bestFit);
    }

    // Helper functions
    function getNextSize(size) {
        const sizes = ["XS", "S", "M", "L", "XL"];
        return sizes[sizes.indexOf(size) + 1];
    }

    function getPreviousSize(size) {
        const sizes = ["XS", "S", "M", "L", "XL"];
        return sizes[sizes.indexOf(size) - 1];
    }

    // Update the size recommendation in the HTML
    document.getElementById("best-fit").innerText = `Your best fit is size: ${bestFit}`;
    document.getElementById("close-fit").innerText = `A close alternative is size: ${closeFit}`;
});
