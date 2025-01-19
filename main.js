// close the menu on outside click
document.addEventListener("click", function (event) {
  // Select all details elements
  var detailsElements = document.querySelectorAll("details");

  // Iterate over each details element
  detailsElements.forEach(function (details) {
    var summary = details.querySelector("summary");

    // Check if the clicked target is inside the details element or is the summary itself
    if (!details.contains(event.target) && event.target !== summary) {
      details.removeAttribute("open"); // Close the details
    }
  });
});
