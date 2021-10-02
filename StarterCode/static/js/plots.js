// ******************************* Chart functions
// ******************************* Bar Chart
//   
/** update Horizontal Bar Chart
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
        title: 'Samples Bar Chart',
        showlegend: false,
        height: 600,
        width: 400,
        xaxis:{
            title:'Sample Values',
        }

    }

    Plotly.react('bar', data,layout);
  }
//   ***************************** Bubble Chart
//
/** update Bubble Chart
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
            colorscale: 'Jet',
            color: dataChart.otu_ids,
            opacity: [0.8],
            size: dataChart.sample_values,
        }
    };
    //  Data
    let data = [trace1];
    // Layout
    let layout = {
        title: 'Samples Buble Chart',
        showlegend: false,
        height: 600,
        width: 1400,
        xaxis:{
            title:'OTI ID',
        },
        yaxis:{
            title:'Sample Values',
        }       
    };
  
  Plotly.react('bubble', data, layout);

}

// ******************************* Gauge Chart
// 
function updateGaugeChart(gauge){
    console.log('gauge',gauge)
    let data = [
        {
          type: "indicator",
          mode: "gauge+number+delta",
          value: gauge,
          title: { text: "Belly Button Washing Frequency <br> Scrubs per Week", font: { size: 24 } },
          delta: { reference: 7, increasing: { color: "navy" } },
          gauge: {
            axis: { range: [null, 10], tickwidth: 2, tickcolor: "darkblue" },
            bar: { color: "navy" },
            bgcolor: "white",
            borderwidth: 2,
            bordercolor: "gray",
            steps: [
              { range: [0, 1], color: "aliceblue" },
              { range: [0, 2], color: "lightcyan" },
              { range: [2, 4], color: "cyan" },
              { range: [4, 6], color: "turquoise" },
              { range: [6, 8], color: "darkturquoise" },
              { range: [8, 10], color: "darkcyan" },
            ],
            threshold: {
              line: { color: "red", width: 4 },
              thickness: 0.75,
              value: 7
            }
          }
        }
      ];
      
      let layout = {
        width: 500,
        height: 400,
        margin: { t: 100, r: 25, l: 25, b: 25 },
        paper_bgcolor: "white",
        font: { color: "darkblue", family: "Arial" }
      };
      
      Plotly.newPlot('gauge', data, layout);

}