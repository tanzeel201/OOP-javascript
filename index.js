// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1,
//     },
// };


// // Factory Function
// function createCircle(radius){
//     return  {
//         radius,
//         draw: function(){
//             console.log('draw');
//         }
       
//     } ;
//  }
// const circle = createCircle(1);

// // Constructor
// function Circle(radius){
//     this.radius =radius; 
//     this.draw = function(){
//         console.log('draw');
//     }
// }
// Circle.call({}, 1)
// const another = new Circle(1);


// // Reference
// let x = { value: 10};
// let y = x;
// x.value = 20;

// let obj = {value: 10};
// function increase(obj){
//     obj.value++;

// }
// increase(obj);
// console.log(obj);

 

// // Adding and removing property........

// function Circle(radius){
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }

// }
// const circle = new Circle(10);
// circle.location = { x: 1};
// const propertyName = 'center location';
// circle['location'] = {x: 1};

// delete circle[loaction];

// // Enumerating Properties................
// function Circle(radius){
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     };

// }
// const circle = new Circle(10);

// for (let key in circle){
//     if(typeof circle[key] !== 'function')
//     console.log(key, circle[key]);

// }

// const keys = Object.keys(circle);
// console.log(keys);

// if('radius' in circle)
// console.log('circle has a radius');


// // Abstraction.....................

// function Circle(radius){

//     this.radius = radius;
//     let defaultLocation = {x:0, y:0};
//     let computeOptimumLocation = function(factor){

//     }
//     this.draw = function() {

//         this.computeOptimumLocation(0.1);
        
//         console.log('draw');
//     };

// }
// const circle = new Circle(10);
// circle.draw();



// // Getter/Settetr ......................
// function Circle(radius){

//         this.radius = radius;
//         let defaultLocation = {x:0, y:0};
//         this.getDefaultLocation = function() {
//            return defaultLocation; 
//         };
//         this.draw = function() {        
//             console.log('draw');
//         };
//         Object.defineProperty(this, 'defaultLocation',{
//             get:function() {
//                return defaultLocation;
//             },
//             set: function(value){
//                 if(!value.x || !value.y)
//                 throw new Error('Invalid location.');
//                 defaultLocation = value;
//             }
//         });
    
//     }
//     const circle = new Circle(10);
//     circle.defaultLocation = 1;
//     circle.draw();


    // Exercise..........................
function Stopatch() {
    let starTime, endTime, running, duration = 0;
    this.start = function() {
        if(running)
        throw new Error('Stopwach has Started');
    running = true;
    startTime = new Date();

    };
    this.stop = function() {
        if(!running)
        throw new Error("Stopwatch not started");
    running = false;
    endTime = new Date();
    const seconds = (endTime.getTime() - startTime()) / 1000;
    duration += seconds;
    };
    this.reset =function() {
        starTime = null;
        endTime = null;
        running = false;
        duration = 0;


    };
    Object.defineProperty(this, 'duration', {
        get: function(){ return duration}

    });
}

    