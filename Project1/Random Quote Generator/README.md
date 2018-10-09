# READ ME #

Project Information

In this project, you'll create an app that displays random famous quotes each time a button is clicked. You can display a quote from a famous athlete, politician, or historical figure. You'll need to use your knowledge of basic JavaScript syntax, including variables, loops and object literals, to complete this project.

To help you get started, we'll give you basic HTML and CSS, as well a JavaScript file containing some starter code. But you'll have to find the quotes yourself and build the data structure to store them in. This project is a fun and effective way for you to practice fundamental JavaScript skills. It also gives you a simple interactive portfolio piece to show off your understanding of JavaScript.

Project Instructions

  * Create an array of JavaScript objects to hold the data for your quotes. Name the array quotes. The quotes array should be accessible in the global scope.
  * Each quote object in the quotes array should have the following properties:
  * A quote property which contains a string: the text of the quote that will be displayed on the page.
	* A source property which contains a string identifying the creator of the quote. For example: "Mark Twain" or "Traditional Irish proverb."
	* An optional citation property which contains a string identifying where the quote comes from, like a speech or publication. For example, "Famous Anonymous Jokes." If there is no known publication, do not include this property on the object.
	* An optional year property which contains a number identifying the date of the quote. For example, 1997. If there is no known date, then do not include this property on the object.

Create a function named getRandomQuote which:
  * selects a random quote object from the quotes array
  * returns the randomly selected quote object

Create a function named printQuote which follows these rules:
  * printQuote calls the getRandomQuote function and stores the returned quote object in a variable
  * printQuote constructs a string containing the different properties of the quote object
  * printQuote doesn't add a citation for a missing citation or a year if the year property is missing
  * printQuote displays the final HTML string to the page. You can use this JS snippet to accomplish that: 
    document.getElementById('quote-box').innerHTML
