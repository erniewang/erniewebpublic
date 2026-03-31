3/28/26

- useContext objects
- passing functions that run after the function completes. classic callbacks
- need to make sure clicking on a button' own nav thing will not cause a re-render'
- adding delays to prevent re-renders while loading => {
    - consider if it is possible to preload some react componets in the delay that would make 
    everything instantnious once it is done reloading?
}

3/29/26

alot of thought has been put in into how to load and render different componets effeciently. i should put more study into 
the basics of routing in both react- router and next js.
Understand the difference between react-rounter and nextjs rounter. 

- load a value immedietly into a useState by doing callback function that returns the value
- learn when to handle conditions that can cause a re-render or not cause a re-render
- utilizing session storage to store data within a session such that there is less computation effort wasted on usecontexts. this 
    matters less for smaller stuff but it is vital for larger projects 
- learn to use uselocation (shows location of the route) and usenavigate (lets you put a nav into a callback)

