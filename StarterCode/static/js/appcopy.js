function displaySampleData(ID) {
    console.log ("Display data", ID); 

    d3.json("samples.json").then ((data) => {

        var metadata = data.metadata; 

        var result = metadata.find(o => o.id == ID);
        console.log(result); 

        //handle on the sample metadata DOM element
        var demTable = d3.select("#sample-metadata");

        // clear the table for each section 
        demTable.html("");

        //display data
        for(var key in result){
            demTable.append('h6').text(key + ": " + result[key]);
        }
    });
}




//function to create bar chart
function createBarChart(id) {
    console.log("createBarChart", id)
    d3.json("samples.json").then((data) => {
        var samples = data.samples;
        var resultsArray = samples.filter(o => o.id === id);
        var result = resultsArray[0];
        var otu_ids = result.otu_ids;
        var otu_lables = result.otu_lables;
        var sample_values = result.sample_values;

        yticks = otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse(); 

        var traceBar = {
            x: sample_values.slice(0, 10).reverse(),
            y: yticks,
            text: otu_lables,
            type: "bar",
            orientation: "h",
        };

        var dataBar = [traceBar];

        var layoutBar = {
            title: "Top 10 Bacteria Cultures Found",
        };

        //plot the bar chart
        Plotly.newPlot("bar", dataBar, layoutBar);
        var bubbleChart = d3.select("bubble");
    });
};
//fuction to create bubble chart

var bubbleChart = d3.select("bubble");


function createBubbleChart(id){
    d3.json ("samples.json").then ( (data) => {
        var samples = data.samples; 
        var resultArray = samples.filter (o => o.id === id); 
        var result = resultArray [0];
        var otu_ids = result.otu_ids; 
        var otu_lables = result.otu_lables; 
        var sample_values = result.sample_values; 


        var traceBubble = {
            x: otu_ids, 
            y: sample_values, 
            text: otu_lables, 
            mode: "markers", 
            marker: {
                size: sample_values, 
                color: otu_ids, 
            }
        };
        var dataBubble = [traceBubble]; 

        var layoutBubble = {
            title: "Bubble Chart"
        };
        Plotly.newPlot ('bubble', dataBubble, layoutBubble); 
    });

};

//function to reset data
function optionChanged(newID) {
    displaySampleData(newID);
    createBarChart(newID); 
    createBubbleChart(newID);
};
var selector = d3.select("#selDataset");

d3.json ("samples.json").then ( (data) => {
    var names = data.names; 
    names.forEach(function (name){
        selector.append('option').text(name).property('value', name);
    });
    var selectedID = names[0];
    displaySampleData(selectedID);
    createBarChart(selectedID); 
    createBubbleChart(selectedID);
});