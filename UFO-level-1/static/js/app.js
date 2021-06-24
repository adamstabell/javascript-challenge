// Define variables
var tableData = data;
var tbody = d3.select("tbody");
var button = d3.select("button");
var form = d3.select("form");

// Event listeners
button.on("click", runEnter);
form.on("submit",runEnter);

// Upon event, run the following
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Remove previous table if already present
    d3.selectAll("tr").remove();

    // Select the input
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    // Filter based on input
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
  
    // Add contents of filteredData to table
    filteredData.forEach(function(sighting) {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(function([key, value]) {
          console.log(key, value);
          var cell = row.append("td");
          cell.text(value);
        });
      });
  };