
// Event listener for form submission
document.getElementById("size-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get user inputs
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const bodyType = document.getElementById("body-type").value;
    const age = parseInt(document.getElementById("age").value);
    const fitPreference = document.getElementById("fit-preference").value;

    // Placeholder logic for size recommendation (to be replaced with real logic)
    let bestFit = "M";  // Medium as default best fit
    let closeFit = "L"; // Large as default close fit

    // Example logic for size recommendation based on height and weight
    if (height < 160 && weight < 60) {
        bestFit = "S";
        closeFit = "M";
    } else if (height >= 160 && height < 180 && weight >= 60 && weight < 80) {
        bestFit = "M";
        closeFit = "L";
    } else {
        bestFit = "L";
        closeFit = "XL";
    }

    // Update the size recommendation in the HTML
    document.getElementById("best-fit").innerText = `Your best fit is size: ${bestFit}`;
    document.getElementById("close-fit").innerText = `A close alternative is size: ${closeFit}`;
});
