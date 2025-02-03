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
    let studentHeadline = document.createElement("h2")
    studentHeadline.textContent = student.name;
    let studentInfo = document.createElement("p")
    studentInfo.textContent = `Alder:${student.age} Uddanelse:${student.course}`;
    studentDiv.append(studentHeadline, studentInfo);
    studentsDivList.appendChild(studentDiv)
});