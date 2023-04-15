////////SMOOTHSCROLL// 
 
 //making a back to top button
const toHome = document.querySelector("Back to Home");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    toHome.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})   
//Creating the smooth scrolling algorithm
window.smoothScroll = function(target) {
    var scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 20);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}
  
////////////////////////////////////////////////////////////////////////////
//////////////////////////////CHART.JS/////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

//FIRST CHART, FIRST CONTAINER//

//Defining data for comparison of recycle rates in Singapore
//declaring colour globally
  Chart.defaults.global.defaultFontColor = '#FFFFFF';

  const labelYear = ["2017", "2018", "2019", "2020", "2021"];
    const RecyclingPercentage= [61, 61, 60, 52, 55];
    
        const dataObj = {
            labels: labelYear, //y-axis
            datasets: [
                {
                label: "Percentage of Recycling", //semantic naming of y-axis
                data: RecyclingPercentage, //array of values corresponding to x-axis
                borderWidth: 2, //bar border width
                backgroundColor: "hsla(20,10%,90%,0.8)", //bar background colour
                borderColor: "hsla(0,100%,40%,1)" //bar border colours
            
                }
            ]
        }
        //CHARTBUILDING//
        new Chart("recycling-chart",
                {
                    type: "line",
                    data: dataObj,
                    options: { 
                        maintainAspectRatio: false,
                        

                        legend: {
                            display: false
                        },
                        title: {
                            display: true,
                            text: ['Recycling: Singapore vs Sweden'],
                            fontFamily: "Helvetica",
                            fontSize: 24,
                            fontColor: 'rgb(245,245,2)',
                            
                        }
                    }
                });


///////////////////////////////////SECOND CHART, FIRST CONTAINER//

//Defining data for comparison of recycle rates in Sweden
//declaring colour globally
Chart.defaults.global.defaultFontColor = '#FFFFFF';

const SwedenYear = ["2017", "2018", "2019", "2020", "2021"];
  const SwedenPercentage= [98, 99, 99, 99, 99];
  
      const swedenObj = {
          labels: SwedenPercentage, //y-axis
          datasets: [
              {
              label: "Percentage of Recycling", //semantic naming of y-axis
              data: SwedenPercentage, //array of values corresponding to x-axis
              borderWidth: 2, //bar border width
              backgroundColor: "hsla(20,10%,90%,0.8)", //bar background colour
              borderColor: "hsla(0,100%,40%,1)" //bar border colours
          
              }
          ]
      }
      //CHARTBUILDING//
      new Chart("sweden-chart",
              {
                  type: "line",
                  data: swedenObj,
                  options: { 
                      maintainAspectRatio: false,
                      

                      legend: {
                          display: false
                      },
                      
                      title: {
                          display: true,
                          text: ['Recycling: Singapore vs Sweden'],
                          fontFamily: "Helvetica",
                          fontSize: 24,
                          fontColor: 'rgb(245,245,2)',
                          
                      }
                      
                  }
              });

//////////////////////////////////////////THIRD CHART, FIRST CONTAINER

const RecycleTrackSG = {
    labels: ["Ferrous metal", "Paper", "Construction", "Plastics", "Food", "Horticultural", "Wood"],
    datasets: [
        {
            label: "Type of Recyclable",
            data: [1312, 1136, 1013, 982, 817, 332, 310],
            borderWidth: 2,
            backgroundColor: [
                "rgb(21,114,123)",
                "rgb(21,114,123)",
                "rgb(21,114,123)",
                "rgb(21,114,123)",
                "rgb(21,114,123)",
                "rgb(21,114,123)",
                "rgb(21,114,123)",
            ],
            borderColor: [
                "rgb(0,100,0)",
                "rgb(0,100,0)",
                "rgb(0,100,0)",
                "rgb(0,100,0)",
                "rgb(0,100,0)",
                "rgb(0,100,0)",
                "rgb(0,100,0)",
            ],
        },
    ],
};


//Chartbuilding//
new Chart("SGrecycleChart", {
    type: "bar",
    data: RecycleTrackSG,
    //configure options for optimal graph function//
    options: { 
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false,
        },
        title: {
            display: true,
            text: 'Types of Waste recycled in Singapore (2022)',
            fontFamily: "Helvetica",
                            fontSize: 24,
                            fontColor: 'rgb(245,245,2)',
        },
        scales: {
            yAxes: [{
                //setting range for bar graph//
                ticks: {
                    min:0,
                    max:1400
                }
            }]
        }
    }
});