let students = [
    {name:"Sofie", age:25, course:"Webudvikler"},
    {name:"Lukas", age:22, course:"Mediegrafiker"},
    {name:"Emil", age:28, course:"Teknisk designer"}
];

let studentsDivList = document.querySelector(".students-list")

students.forEach(function(student){
    // console.log(student.name);
    // console.log(student.age);
    // console.log(student.course);
    let studentDiv = document.createElement("div")
    studentDiv.classList.add("student")
    //console.log(studentDiv);
    studentDiv.textContent = ` Elev:${student.name} Alder:${student.age} Uddanelse:${student.course}`
    studentsDivList.appendChild(studentDiv)

});