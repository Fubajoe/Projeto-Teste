

const classes = [
{  
  class: "Hipátia",
  course: "JavaScript",
  start: "30/11/2022",
  termination: "03/01/2023",
  numberOfStudents: 150,
  period: "Noturno",
  completed: false

}, 
{
class: "Sibyla",
  course: "JavaScript",
  start: "30/10/2022",
  termination: "30/12/2022",
  numberOfStudents: 200,
  period: "Integral",
  completed: false
},
{
    class: "Curie",
  course: "HTML e CSS",
  start: "15/09/2022",
  termination: "15/10/2022",
  numberOfStudents: 180,
  period: "Noturno",
  completed: true
},
{
    class: "Zhenyi",
  course: "HTML e CSS",
  start: "01/11/2022",
  termination: "01/01/2023",
  numberOfStudents: 80,
  period: "Integral",
  completed: false
},
{
    class: "Clarke",
  course: "HTML e CSS",
  start: "04/07/2022",
  termination: "04/09/2022",
  numberOfStudents: 200,
  period: "Noturno",
  completed: true
},
{
    class: "Blackwell",
  course: "APIsRest",
  start: "20/03/2022",
  termination: "20/06/2022",
  numberOfStudents: 100,
  period: "Integral",
  completed: true
},
{
    class: "Elion",
  course: "APIsRest",
  start: "12/01/2022",
  termination: "12/06/2022",
  numberOfStudents: 200,
  period: "Noturno",
  completed: true
},
{
    class: "Burnell",
  course: "APIsRest",
  start: "18/10/2022",
  termination: "18/04/2023",
  numberOfStudents: 90,
  period: "Integral",
  completed: false
}
]

const courses = [
{
  course: "HTML e CSS",
  description: "HTML e CSS do básico ao avançado",
  duration: "1 mês",
  value: 500 

},
{
  course: "Javascript",
  description: "Exorcize Javascript",
  duration: "2 meses",
  value: 900 
},
{
  course: "APIsRest",
  description: "APIsRest do básico ao avançado",
  duration: "6 meses",
  value: 2000 
}
]

const students = [
    {
  student: "Chris Evans",
  class: "Hipátia",
  course: "JavaScript",
  value: 900,
  numberOfInstallments: 9,
  discount: false,
  installmentValue: 100


},
{
    student: "Halle Berry",
    class: "Burnell",
    course: "APIsRest",
    value: 2000,
    numberOfInstallments: 4,
    discount: false,
    installmentValue: 500

},
{
    student: "Lashana Lynch",
    class: "Zhenyi",
    course: "HTML e CSS",
    value: 2000,
    numberOfInstallments: 0,
    discount: true,
    installmentValue: 0

}
];


const parcelarCurso = (numeroDeParcelas) => {


  if(numeroDeParcelas <= 2) {
    
    const discount = (courses[1].value*0.2)
    console.log(`O curso ${courses[1].course} ficou no valor total de R$ 720. Em 2x de 360 reais. Foi concedido 20% de desconto, equivalente a R$${discount}`)
  
  }else{
    
    console.log(`O curso ${courses[1].course} ficou no valor total de R$ ${courses[1].value}. Em 8x de 112.5 reais.`)
  }
  
  
}
console.log(parcelarCurso(2))


const searchCourse = (courseName) => {
  for(let search of courses){
     if(search.course.toLowerCase() === courseName.toLowerCase())
     return search

     
    }
  }

  console.log(searchCourse("javascript"))

  const searchClass = (className) =>{
    for(let search of classes){
      if(search.class.toLowerCase() === className.toLowerCase())
      return search

  }
  }

  console.log(searchClass("sibyla"))

  const searchStudents = (studentsName) => {
  for(let search of students){
    if(search.student.toLowerCase() === studentsName.toLowerCase())
    return search
  }
 }

 console.log(searchStudents("chris EVANS")) 

 const enroll = (studentName,newCourseName,newClassName,numberInsta ) =>{
    
  for(let item of students) {
    console.log(item.value)
 }
    let discount = numberInsta <= 2 ? true : false

  const newStudent = {
   
  student: studentName,
  class: newClassName,
  course: newCourseName,
  numberOfInstallments: numberInsta,

}

students.push(newStudent) 
 

}

enroll("joe", "Javascript", "Sibyla", 2 )

console.log(students)
