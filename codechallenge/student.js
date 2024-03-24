// A programe to prompt student grades
// The Function is to calculate the grade in a systematic way
// And accepting the marks of the students
// I will start by grading students who got 79 to 100 as A using the if else function
// Always when there will be an input of a grede the out put will define the grade of the student
// The grsde will always be determid by the marks 


function getGrade(marks){
    if (marks < 0 || marks > 100){
        console.log("Enter number between 0 to 100");
    }else{
        let grade;
        if (marks > 79 && marks <=100){
            grade ="A"
        }
        else  if (marks >= 60 && marks  <=79){
            grade = "B-"
        }
        else if (marks >= 49 && marks <= 59){
            grade = "c-"
        }
        else if (marks >= 40 && marks <= 49){
            grade = "D-"
        }
        else if (marks < 40 ){
            grade = "E"
        }
        return grade;
    }  

    
console.log(getGrade(80));
console.log(getGrade(65));
console.log(getGrade(50));
console.log(getGrade(45));
console.log(getGrade(10));
}

