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
    const studentDiv = document.createElement("div")
    //console.log(studentDiv);
    studentDiv.textContent = ` Elev:${student.name} Alder:${student.age} Uddanelse:${student.course} <br>`
    studentsDivList.append(studentDiv)

});