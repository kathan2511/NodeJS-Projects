var rect = require('./rectangle');

function solveRect (l,b) {
    console.log("Solving for Rectangle with l = " + l  + " and b = " + b);
    rect(l,b, (err, rectangle) => {
        if (err) {
            console.log("ERROR" , err.message);
        }
        else {
            console.log("Area is " + rectangle.area());
            console.log("Perimeter is " + rectangle.perimeter());
        }
    });

    console.log("After rect call statement");

}
solveRect(2,4); 
solveRect(0,5);