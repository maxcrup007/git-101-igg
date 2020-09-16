const calculateGrade = score => grade

if (score < 101 && score > 80) {
    grade = "A";
}

else if ( score < 80 && score > 69) {
    grade = "B";
}

else if ( score < 70 && score > 59 ) {
    grade = "C";
}

else if ( score < 60 && score > 49 ) {
    grade = "D";
}

else {
    grade = "F";
}

console.log(grade(score))