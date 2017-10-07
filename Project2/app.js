/*
this program updates a web page with an original list of students 
displays 10 students per page and adds buttons to jump forward to 
the next 10 students etc.
*/
let parentElement = document.querySelector('.page');
let studentListElement = document.querySelector('.student-list');
let studentList = document.querySelectorAll('.student-list li');
let studentListLength = document.querySelectorAll('.student-list li').length;
let numberOfPages = (Math.round(studentListLength / 10)) + 1;
let numberOfItemsOnLastPage = studentListLength - ((Math.round(studentListLength / 10)) * 10);
//set the current page to 1 and put an id of students on the student-list ul to use later
let currentPage = 1;
studentListElement.id = 'students';

//create page break and page buttons div, and assign pageButtons id to pageDiv
let br = document.createElement('br');
let pageDiv = document.createElement('div');
parentElement.appendChild(br);
parentElement.appendChild(pageDiv);
pageDiv.id = 'pageButtons';

//select page buttons div to use later
const pageButtons = document.getElementById('pageButtons'); 

//this function clears all the students from the page
function clearStudents(){
  let studentsDiv = document.getElementById('students');
  studentsDiv.innerHTML = '';
}
//this function adds an individual student to the students list
function addStudent(student) {
  document.getElementById('students').appendChild(studentList[student]);
}

//this funciton uses the add student function to add all the students back to the page
function addStudents() {
  let x = currentPage * 10;
  if (currentPage === numberOfPages) {
    for (let i = (x - 10); i < (numberOfItemsOnLastPage + (x-10)); i += 1) {
	  addStudent(i);
    }  
  } else {
    for (let i = (x - 10); i < x; i += 1) {
	  addStudent(i);
    }  
  }
}
//clear the orignal students list
clearStudents();

//add the first 10 students back to the page
addStudents();

/*
create buttons based on how many pages there needs to be
and then set up listeners on the buttons that change the 
current page when clicked and then clear and add the 
students again
*/
for (let y = 1; y <= numberOfPages; y += 1) {
  let newButton = document.createElement('button');
  newButton.textContent = y;
  pageButtons.appendChild(newButton);
  let currentButton = document.getElementsByTagName('button')[(y - 1)];
  currentButton.addEventListener('click', () => {
  currentPage = y;
  clearStudents();
  addStudents();
  });
}