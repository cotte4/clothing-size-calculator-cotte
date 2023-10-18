// Event listener for form submission
document.getElementById("size-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get user inputs
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const bodyType = document.getElementById("body-type").value;
    const fitPreference = document.getElementById("fit-preference").value;

    // Initialize variables for points
    let heightPoints = 0;
    let weightPoints = 0;
    let fitPreferencePoints = 0;
    let bodyTypeAdjustment = 0;

    // Assign points based on height
    if (height < 160) heightPoints = 1;
    else if (height < 170) heightPoints = 2;
    else if (height < 180) heightPoints = 3;
    else if (height < 190) heightPoints = 4;
    else heightPoints = 5;

    // Assign points based on weight
    if (weight < 50) weightPoints = 1;
    else if (weight < 60) weightPoints = 2;
    else if (weight < 70) weightPoints = 3;
    else if (weight < 80) weightPoints = 4;
    else weightPoints = 5;

    // Assign points based on fit preference
    if (fitPreference === "very-tight") fitPreferencePoints = 1;
    else if (fitPreference === "tight") fitPreferencePoints = 2;
    else if (fitPreference === "average") fitPreferencePoints = 3;
    else if (fitPreference === "loose") fitPreferencePoints = 4;
    else if (fitPreference === "very-loose") fitPreferencePoints = 5;

    // Adjust points based on body type
    if (bodyType === "flatter") bodyTypeAdjustment = -1;
    else if (bodyType === "rounder") bodyTypeAdjustment = 1;

    // Calculate average points
    const averagePoints = (heightPoints + weightPoints + fitPreferencePoints + bodyTypeAdjustment) / 3;

    // Initialize variables for best fit and close fit
    let bestFit = "";
    let closeFit = "";

    // Assign sizes based on average points
    if (averagePoints < 1.5) {
        bestFit = "XS";
        closeFit = "S";
    } else if (averagePoints < 2.5) {
        bestFit = "S";
        closeFit = "M";
    } else if (averagePoints < 3.5) {
        bestFit = "M";
        closeFit = "L";
    } else if (averagePoints < 4.5) {
        bestFit = "L";
        closeFit = "XL";
    } else {
        bestFit = "XL";
        closeFit = "XXL";  // Assuming you also have XXL
    }

    // Update the size recommendation in the HTML
    document.getElementById("best-fit").innerText = `Your best fit is size: ${bestFit}`;
    document.getElementById("close-fit").innerText = `A close alternative is size: ${closeFit}`;
});
