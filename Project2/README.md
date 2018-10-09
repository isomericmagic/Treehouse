# READ ME

Project 2 - Pagination & Content Filter

Project Information

In this project, you are tasked with enhancing the usability of a web page that has too much information. To make it easier to find information and read the page, you need to use progressive enhancement to add pagination.

The page includes a list of 54 students. You need to add programming to display 10 students per page, and add buttons to jump between the lists of 10 students. Your solution should work for any number of student listings, whether there were 5, 25, 55 or 100 student listings. You are given the option to use jQuery for this project, but instructed to avoid using plugins to achieve the pagination functionality.

Project Instructions

* When the page loads, your program should hide all but the first 10 students in the list.
* Look at the HTML in the example-meets.html on lines 119-137 -- this is an example of the markup you'll need to add dynamically to the index.html page to create pagination links.
* Since only 10 students should be shown at a time, your programming needs to calculate the number of pages needed and add the appropriate number of links to the bottom of the page.
* When a user clicks "2" in the pagination, students 11 through 20 are shown. When a user clicks "3", students 21 through 30 are shown. And so on. When "6" is clicked 51 through 55 should be shown.
* Your program should work for any number of students. There are 54 students in index.html, but you can test your code by adding the JavaScript file your write to the other lists of students we&#39;ve provided in the student-list-examples folder.
