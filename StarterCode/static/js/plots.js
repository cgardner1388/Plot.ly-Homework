
// Create Bar Chart  
/**
 * 
 * @param {*} x value
 * @param {*} y value
 */
 function updateBarChart(x,y){
    // console.log('barchart',x,y)
    let trace={
        x: x,
        y: y,
        type: 'bar',
        orientation:'h'
    }
    let data=[trace];
    let layout={
        //title: 'Samples Bar Chart',
        showlegend: false,
        height: 600,
        width: 400,
        xaxis:{
            title:'Sample Values',
        }

    }

    Plotly.react('bar', data,layout);
  }

//
/** Create Bubble Chart
 * 
 * @param {*} dataChart 
 */
function updateBubbleCharts(dataChart){
    // console.log('bubblechart',dataChart.otu_labels)
    // Trace
    let trace1 = {
        x: dataChart.otu_ids,
        y: dataChart.sample_values,
        text: dataChart.otu_labels,
        mode: 'markers',
        marker: {
            colorscale: 'Blue',
            color: dataChart.otu_ids,
            opacity: [1.0],
            size: dataChart.sample_values,
        }
    };
    //  Data
    let data = [trace1];
    // Layout
    let layout = {
        //title: 'Bubble Chart',
        showlegend: true,
        height: 800,
        width: 1800,
        xaxis:{
            title:'OTI ID',
        },
        yaxis:{
            title:'Sample Values',
        }       
    };
  
  Plotly.react('bubble', data, layout);

}

