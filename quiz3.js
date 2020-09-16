if (condition => 80) {
    grade = 'A';
}

else if ( condition < 80 , condition => 70) {
    grade = 'B';
}

else if ( condition < 70 , condition => 60 ) {
    grade = 'C';
}

else if ( condition < 60 , condition => 50 ) {
    grade = 'D';
}

else ( condition < 50 ) {
    grade = 'F';
}

console.log(grade)