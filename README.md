# Review-carousel -
I created a Review carousel using HTML, CSS and vanilla JavaScript. I created a json file to hold all the info on each person to simulate an api call or data from a database and imported it using a fetch call with async/await. I then used this data to create a dynamic card for the carousel, building each element of the DOM as you click through the cards. This used createElement, createTextNode, classList and append. I then used a forEach loop to delete the previous card. I tried to make this as functional as possible utilizing const for all variables and limiting global variables as much as possible with vaniall JS