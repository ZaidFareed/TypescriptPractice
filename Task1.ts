//Calculate students grades
let englishMarks =85
let urduMarks= 75
let Average=(englishMarks+urduMarks)
let grade: string;
if(Average>=80){
    grade="A";
}else if (Average>=70 && Average<80){
    grade="B";
}else if (Average>=60 && Average<70){
    grade="C"
}else if (Average>=50&& Average<60){
    grade="D"
}else {
    grade="F"
}
console.log(`Your grade is ${grade}`);
