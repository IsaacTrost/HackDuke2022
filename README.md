## Inspiration

Many people feel alone in their struggles with mental health and feel as though their situation is unique. To compound upon this, most people use their phones as a distraction to avoid what they’re feeling. College students have been especially exposed to issues with mental health and suicide in recent years, and, as the primary users of technology, there is a large population of people who can turn their phones into a constructive outlet rather than a way to hide from their mental health issues. 

The primary reason behind many feeling alone in their mental health issues is the stigma around its discussion. People don’t discuss their own mental health issues because of a fear of condemnation by their peers, and social media is full of everyone posting only the good parts of their lives.

The solution to this problem is producing a phone application that serves as a system in which users can share reflections on mental health issues with anonymity guarenteed. People use their phones as a distraction, but they can actually be used as a way to progress mentally as users share issues, remove themselves from isolation in their struggles by identifying with others, and track their progress through analysis of reflection submissions.

## What it does

The <b>deepQuestion</b>: app’s usage starts when a user gets a notification to take time to reflect once a day. 

<b>Once the user reaches the home screen</b>, they are given <b>30 seconds</b> to reflect on the given daily question. After the submission text box opens, the user writes their response and submits it.

<b>Once the user submits their reflection</b>, the notification on the home screen disappears and they are directed to the Feed page, where they can browse other people’s anonymous responses to the same question of the day to get an honest and accurate gauge for how everyone else is feeling. 

Simultaneously, <b>natural language processing</b> is run on the submission text to create an evaluation of the user’s mood each day. The output of this processing is graphed to show the user trends over time.

<b>On the Graph page</b>, the user is shown an analysis of their submissions graphed over time as well as comparisons between their present mental outlook and past weekly, monthly, and yearly checkpoints. From this the user is given a grade which shows how their mental health has progressed.




## How we built it

<b>For front-end development</b>, we used <code>Cordova</code> and <code>Xcode</code> to build an iOS application from <code>HTML</code>, <code>CSS</code>, and <code>JavaScript</code>. 
* The <b>Home</b> screen contains HTML programmed div classes with CSS styling. The notification popup is toggled based on user input through JavaScript.
* The <b>Feed</b> screen builds a feed based on prior user submissions. This front-end also contains HTML and CSS.
* The <b>Graph</b> screen contains Chart.js graphs and toggleable settings from JavaScript, getting data from prior user submissions.


<b>For the back-end</b>, we used <code>Django</code>, <code>Python</code>, and <code>CockroachDB</code> to build a REST API to store daily questions, answers, and user information.
* Our <b>database</b>, CockroachDB, was hosted on its serverless platform while our backend, Django. was hosted on a self-configured Microsoft Azure Virtual Machine.
* Featured in our API is an <b>interactive and easy-to-use GUI</b> that allows easily manipulation of database members.

## Challenges we ran into
A main challenge that we faced was finding the right software to use. We went through <b>multiple</b> types of databases, frontend, and backend frameworks before arriving at our final choices. We did run into some challenges developing for Android, but were able to successfully develop for iOS through Xcode and get a visualization for Android systems through web development.


## Accomplishments that we're proud of

Our user interface is <b>cohesive</b> and <b>elegant</b>, featuring easy-to-navigate menus and smooth transitions. 

## What we learned
We learned tons of new information related to the use of back and front end technologies. Along with this we took the time to engage with the creation of a seamless UI & UX experience all the while becoming more comfortable with graphic design as a whole.

## What's next for deepQuestion:
We are open to the idea of collaborating with <b>mental health professionals</b> to better accommodate users with questions that will accurately reflect the mental health struggles of the average person.
