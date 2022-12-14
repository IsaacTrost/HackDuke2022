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

//My method ig??
function getData() {
  var content = document.getElementById("textmike").value;
  var data = {}
  data["question"] = document.getElementsByClassName("sample-question-text").innerText;
  data["date"] = new Date().toLocaleString();
  data["content"] = content;
  data["tone"] = Math.floor(Math.random()*100);
  let xhr = new XMLHttpRequest();
  let url = "http://20.163.193.221:8000/answers/"
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify(data));
  return content;
}

async function populate() {
    let today_question = document.getElementsByClassName("sample-question-text")

    const request = new Request("http://20.163.193.221:8000/questions/");

    const response = await fetch(request);
    const todaysquestion = await response.json()[0];

    today_question.innerText = todaysquestion
}

populate()