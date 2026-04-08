3/28/26

- useContext objects
- passing functions that run after the function completes. classic callbacks
- need to make sure clicking on a button' own nav thing will not cause a re-render'
- adding delays to prevent re-renders while loading => {
    - consider if it is possible to preload some react componets in the delay that would make 
    everything instantnious once it is done reloading?
}

3/29/26 - work is hard. but the solution is easy

alot of thought has been put in into how to load and render different componets effeciently. i should put more study into 
the basics of routing in both react- router and next js.
Understand the difference between react-rounter and nextjs rounter. 

- load a value immedietly into a useState by doing callback function that returns the value
- learn when to handle conditions that can cause a re-render or not cause a re-render
- utilizing session storage to store data within a session such that there is less computation effort wasted on usecontexts. this 
    matters less for smaller stuff but it is vital for larger projects 
- learn to use uselocation (shows location of the route) and usenavigate (lets you put a nav into a callback)

Routing:
    - React Router: Client Side. All Routes Manually Declared
    - Next JS: Server Side Rendered Pages and sends Hydrated Pages. Improves performance. 

Lazy Initial useState:
    - useState(func()) will call every re-render  (state, props, parent, context, changed ref)
    - useState(()=>func()). used for first load only. 


3/30
-grid layout schenaigans 
-explain (x: number, y: number): [number, number]

-create portal: lets you render on a specific/different part of the DOM
-browser painting order: image takes a higher priority. 
    bad: parent's inset shadow gets overpainted by child.'
    good: sibling living in the same stacking area. and is drawn seperately. so it gets painted on top. 


4/7
how to handle spacing easily:
- gap for layout. no random margins. hard-coding but for tailwind

-layout primitives: kind of old fashoned, but creating old layouts that can easily be reused. 

-parent controls layout, while child controlls appearance. seperation of concerns.

Epic Vibe Code:
"For both architextures and interaction.

each one has a json file that will store a list of projects for both arhictextures and interactions

both will have a centerd pannel that does a blur-[1px] on the stuff behind it. 
the center pannel will occupy the entire height, and for large and desktop screens will occpy the middle 3/4 of the width and progressivley be a higher ration until it is md: where it occupies both the full width and the full height.

with each json file will be a list and a project.

each project will have a title. start-date end-date. 
description, which will be a list of strings. 
and a small logo or a small image link which will be optional

so each project card will occpuy the whole width of the centered pannel. the height will depend on how much stuff is inside of it.
and each of the list of strings from the description will be rendered as a <p> 
, and ore importiantly, on the top right of the project card, there will be a thing shown on the button that will take the user to a github link or any  associated link

for the top description in arcthiexture the description will be "Some of my projects that are focused on delivery, correctness, and throughness"

in the interaction, it will be "some other websites or projects in which i contributed partly or whiolly to user experience. showcasing ui/ux design skills


here are some of my other projects. place the in architextres or tasktunes accordingly. 
also read my resume to place the other projects/experiences
"Task-Tunes | Python, Linux, Javascript , HTML, CSS, HTTP Aug. 2023
• Launched a web platform providing users and jazz musicians a place to self-document productivity and compare metrics with
other users
• Customer credentials are stored using salted hashing algorithms to maintain password security and session-based
authentication are implemented to user sessions maintain access
• Customer data is stored in a relational database with indexed columns for data retrieval and SQL queries are designed for
comparing user metrics, pulling rankings, and displaying leader-boards
• Minimized data required for functionality so individual data storage does not exceed 1 MB
Curriculum Planner | Python, Linux, JSON, Selenium, HTTP Sep. 2023
• Conceptualized as a group and completed an application featuring a language learning model providing students a
comprehensible list of courses to take, based off of degree progress and input text
• Served as the role of data engineer and web - scrapped through HTML documents from the web to compile a data set of
classes, and organized the strings in a nested dictionary style dataset
• Engaged in the Scrum methodology for app development, collaborating closely with cross-functional team members over a
couple of months
NotesR.us | React, HTML, CSS, HTTP, Javascript Jan. 2023
• Designed a static website allowing musicians to upload melodies and receive a harmonized rendition
• Engineered a robust static web page capable of accepting and processing both music.xml and music.mxl files, as well as
having the modified files available to download back in XML format
• Utilized ABC.js and Vex flow libraries for browser music rendering and incorporated features for seamless file conversion,
modification, and repackaging
Machine Learning Project | Python, Conda, Pandas, Sci-kit Learn May. 2022
• Brainstormed as a group and built a machine learning model to predict the ’awesomeness’ of a CD with selected components
from Amazon reviews, Utilized Sci-Kit-learn and various models achieved an accuracy of 72% [ Naive Bayes, Random
Forest,and Decision Tree classifiers ]
• Operated Python’s Pandas library and Numpy for data manipulation to process and produce data frames ensuring optimal
and timely input for the MLM
Activity Measure | Javascript, HTML, CSS Oct. 2021
• Created a browser extension to quantify and visualize an user’s daily digital activity on the browser. The data display utilizes
the open-source Chart.js library
• Refactored a browser extension to guarantee cross-compatibility between both Chrome and Firefox
• Utilizes sync storage, and has been tuned to leverage below 10% of the max write operations per minute/hour for Chrome""