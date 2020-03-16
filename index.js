const marks = '98';
switch (true) {
    //given a constant here(marks)
case (marks <=100 && marks >= 86):
    console.log('A+');
    console.log('Pass With Distinction');
    break;
    //range of marks according to the grade
case (marks <=85 && marks >= 81):
    console.log('A');
    console.log('Pass With Distinction');
    break;
case (marks <=80 && marks >= 76):
    console.log('A-');
    console.log('Pass With Distinction');
    break;
case (marks <=75 && marks >= 71):
    console.log('B+');
    console.log('Pass With Merit');
    break;
case marks <=70 && marks >= 66:
    console.log('B');
    console.log('Pass With Merit');
    break;
case (marks <=65 && marks >= 61):
    console.log('B-');
    console.log('Pass With Merit');
    break;
case (marks <=60 & marks >= 56):
    console.log('C+');
    console.log('Pass');
    break;
case (marks <=55 && marks >= 50):
    console.log('C');
    console.log('Pass');
    break;
case (marks <=49 && marks >= 40):
    console.log('D Fail Grade');
    console.log('Pass With Distinction');
    break;
case (marks <=39 && marks >= 0):
    console.log('E');
    console.log('Fail Grade');
    break;
default:
    console.log('fail');
    break;
} // all the cases are the range of marks according the grades 
