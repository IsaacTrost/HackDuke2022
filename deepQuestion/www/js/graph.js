/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
import "./chart.js";
async function getText(file) {
    let myObject = await fetch(file);
    let myText = await myObject.text();
    myDisplay(myText);
}


const ct1 = document.getElementById('graph').getContext('2d');
var gradient = ct1.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, 'rgba(59,160,249, 1)');   
gradient.addColorStop(1, 'rgba(20,100,256,1)');
const myChart = new Chart(ct1, {
    type: 'bar',
    data: {
        labels: ['Sunday','Monday','Tuesday','Wednsday','Thursday','Friday','Saturday'],
        datasets: [{
            label: 'contentness expressed',
            data: [50,55, 68, 61, 67, 41, 85],
            borderRadius: 6,
            backgroundColor: gradient,
            barPercentage: .95
            
        }]
    },
    options: {
        plugins:{
            legend: {
                display: false,
            }
        },
        scales: {
            x: {
                grid: {
                  display: false
                }
              },
              y: {
                beginAtZero: true,
                display: false,
                grid: {
                  display: false
                }
              }
        }
        
    },

});

const ct2 = document.getElementById('graph2').getContext('2d');
const myChart2 = new Chart(ct2, {
    type: 'bar',
    data: {
        labels: ['Contentment Today', 'Average This Week', 'Average This Month', 'Average This year'],
        datasets: [{
            label: 'contentness expressed',
            data: [99,98, 45, 73],
            borderRadius: 6,
            backgroundColor: 'rgba(59,160,249, 1)',
            barPercentage: .95
            
        }]
    },
    options: {
        plugins:{
            legend: {
                display: false,
            }
        },
        indexAxis: 'y',
        scales: {
            x: {
                grid: {
                  display: false
                },
                display: false
              },
              y: {
                beginAtZero: true,
                grid: {
                  display: false
                }
              }
        }
        
    },

});

const wrapper = document.getElementById("switch")
const montheo = document.getElementById("monthbtn")
const weekeo = document.getElementById("weekbtn")
const yeareo = document.getElementById("yearbtn")

function weekclick(){
    wrapper.className = "graph-switch centery"
    myChart.data.labels = ['Sunday','Monday','Tuesday','Wednsday','Thursday','Friday','Saturday'];
    myChart.data.datasets[0].data=[50,55, 68, 61, 67, 41, 85]
    myChart.update()
    montheo.className = "graphbtn not-selected"
    yeareo.className = "graphbtn not-selected"
    weekeo.className = "graphbtn "
}
function monthclick(){
    wrapper.className = "graph-switch lefty"
    myChart.data.labels = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
    myChart.data.datasets[0].data= [13,34, 56,25,48,14,49,25,34,54,65,67,34,34,67,12,45,56,57,18,12,45,56,50,55, 68, 61, 67, 41, 85]
    myChart.update();
    montheo.className = "graphbtn "
    yeareo.className = "graphbtn not-selected"
    weekeo.className = "graphbtn not-selected"
}
function yearclick(){
    wrapper.className = "graph-switch righty"
    let arrayo = []
    for (let x=1; x<366; x++) {
        arrayo.push(x)
    }
    let datum=[]
    while (datum.length<336){
        datum.push(Math.floor(Math.random()*50+datum.length/7.4))
    }
    datum.concat([13,34, 56,25,48,14,49,25,34,54,65,67,34,34,67,12,45,56,57,18,12,45,56,50,55, 68, 61, 67, 41, 85])
    myChart.data.labels = arrayo;
    myChart.data.datasets[0].data= datum;
    myChart.update()
    montheo.className = "graphbtn not-selected"
    yeareo.className = "graphbtn"
    weekeo.className = "graphbtn not-selected"
}
montheo.addEventListener("click", monthclick)
weekeo.addEventListener("click", weekclick)
yeareo.addEventListener("click", yearclick)


