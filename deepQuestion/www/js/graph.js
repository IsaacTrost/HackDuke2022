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
        labels: ['1','2','3','4','5','6','7','8','9','10','11','12', '13'],
        datasets: [{
            label: 'contentness expressed',
            data: [99,98, 45, 87, 67, 41, 34, 56, 99, 78, 3, 75, 24, 1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
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
        labels: ['Contentment Today', 'Average This Week', 'Average This Month', 'Average This'],
        datasets: [{
            label: 'contentness expressed',
            data: [99,98, 45, 87],
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

function monthclick(){
    wrapper.className = "graph-switch centery"
    myChart.data.labels = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
    myChart.update()
    montheo.className = "graphbtn "
    yeareo.className = "graphbtn not-selected"
    weekeo.className = "graphbtn not-selected"
}
function weekclick(){
    wrapper.className = "graph-switch lefty"
    myChart.data.labels = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
    myChart.update();
    montheo.className = "graphbtn not-selected"
    yeareo.className = "graphbtn not-selected"
    weekeo.className = "graphbtn"
}
function yearclick(){
    wrapper.className = "graph-switch righty"
    myChart.data.labels = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
    myChart.update()
    montheo.className = "graphbtn not-selected"
    yeareo.className = "graphbtn"
    weekeo.className = "graphbtn not-selected"
}
montheo.addEventListener("click", monthclick)
weekeo.addEventListener("click", weekclick)
yeareo.addEventListener("click", yearclick)


