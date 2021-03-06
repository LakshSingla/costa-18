console.log("This works");

var imagePlaceholder1 = document.getElementById('main-img1');
var mainImg1Box       = document.getElementsByClassName('main-img1-box');


//NOTE: MAKE SURE THAT NROWS * NCOLUMNS IS EVEN
var NROWS = 10  ;
var NCOLUMNS = 10;

// var NROWS = 11;
// var NCOLUMNS = 14;

var BOXSIZE = 5;

// Array.from(mainImg1Box).forEach(function(elem){
//     console.log(elem);
//     elem.style.backgroundColor = "white";
// });

var generateRandomArray = function(size = NROWS * NCOLUMNS){
    var arr = [];
    var randarr = [];
    var k = 0;
    for(var x = 0; x < size; x++){
        arr[x] = x;
    }
    console.log(arr);
    while(size--){
        var y = Math.floor(Math.random() * size);
        // console.log(size);
        randarr[size] = arr[y];
        arr.splice(y, 1);
    }
    return randarr;
};

var generateSequentialRandomArray = function(rowSize = NROWS, columnSize = NCOLUMNS , rowThreshold = 1, ascending = true){
    var sequentialArr = [];
    for(i = 0; i <= Math.floor(rowSize / rowThreshold); i++){
        sequentialArr = sequentialArr.concat(generateRandomArray(rowThreshold * columnSize ).map(function(elem){
            return elem + (i * columnSize * rowThreshold);
        }).filter(function(elem){
            return elem < rowSize * columnSize;
        }));
    }
    return sequentialArr;
};


//size parameter should be a multiple of 2
var generateCheckeredArray = function(size = NROWS * NCOLUMNS){
    var checkeredArr = [];
    var randArr1 = generateRandomArray(size/2)
    for(var i = 0; i < size/2; i++){
        checkeredArr.push(2*randArr1[i]);
    }
    for(var i = 0; i < size/2; i++){
        checkeredArr.push(2*randArr1[i] + 1);
    }
    return checkeredArr;
};
//
// var swapArrayElements = function(arr , iterations = 30, threshold = 5, ){
//     var swappedArr = [];
//     while(iterations--){
//         var index1 = Math.random() * thr;
//     }
//     return swappedArr;
// }




// window.onload = function(){
    // TweenLite.fromTo(mainImg1Box[0], 2, {
    //     transform: "scaleX(0)",
    //     backgroundColor: '#ffffff'
    // }, {
    //     transform: "scaleX(10)",
    //     backgroundColor: 'pink'
    // });
    // setTimeout (function(){
    //     TweenLite.fromTo(mainImg1Box[0], 2, {
    //         transform: "scaleX(0)",
    //         backgroundColor: '#ffffff'
    //     }, {
    //         transform: "scaleX(10)",
    //         backgroundColor: 'pink'
    //     });
    // }, 2000);
    // setTimeout(function () {
    //     TweenLite.set(mainImg1Box[0], {
    //         transform: "scaleY(5)"
    //     });
    // }, 4000);
    // var tl = new TimelineMax({});
    // tl.staggerFromTo(mainImg1Box, 5,  {
    //     transform: 'scaleX(0)',
    //     backgroundColor: 'white'
    // }, {
    //     transform: 'scaleX(10)',
    //     backgroundColor: 'pink'
    // }, 0.1);
//     tl.to(mainImg1Box[0], 1, {
//         transform: 'scaleX(5)',
//         backgroundColor: 'white'
//     });
//     tl.to(mainImg1Box[1], 1, {
//         transform: 'scaleX(5)',
//         backgroundColor: 'white'
//     });
// }

var showAnim = function () {
    var animProperties = {
            overlappingFactor: 0.003,
            duration         : 0.1
    };
    // var arr = generateSequentialRandomArray();
    // var arr = generateSequentialRandomArray();
    var arr = generateCheckeredArray();
    var tl = new TimelineMax();
    // var overlappingFactor = 0.003;
    var absolutePosn = 0;
    arr.forEach(function(elem){
        tl.fromTo(mainImg1Box[elem], animProperties.duration , {
            transform: 'translateY(+60vh)',
            backgroundColor: 'white',
            // opacity: '0'
        }, {
            transform: 'translateY(0)',
            backgroundColor: 'pink',
            // opacity: '1',
            ease:  Expo. easeOut
        },absolutePosn );
        //"-=0.097"
        absolutePosn += animProperties.overlappingFactor;
    });
    tl.duration(1.5).play();
    console.log(absolutePosn);

};

//Main program

// TweenMax.defaultEase = SlowMo.ease.config(0.7, 0.7, false);
// TweenMax.defaultEase = SteppedEase.config(0.7, 0.7, false);


for(var y = 0; y < NROWS; y++){
    for(var x = 0; x < NCOLUMNS; x++){
        var div = document.createElement('div');
        div.classList.add('main-img1-box');
        div.classList.add('main-img-box');
        imagePlaceholder1.append(div);
    }
}

imagePlaceholder1.style.width  = (BOXSIZE * NROWS    + 0.45 ) + 'vh';
imagePlaceholder1.style.height = (BOXSIZE * NCOLUMNS + 0.45 ) + 'vh';


for(var i = 0; i < NCOLUMNS * NROWS; i++){
    var rowNo    = Math.floor( i / NCOLUMNS),
        columnNo = i % NCOLUMNS;
    var topBgMargin  = -rowNo    * BOXSIZE,
        leftBgMargin = -columnNo * BOXSIZE;
    mainImg1Box[i].style.width              = BOXSIZE + 'vh';
    mainImg1Box[i].style.height             = BOXSIZE + 'vh';
    mainImg1Box[i].style.backgroundImage    = "url('sample.jpg')";
    mainImg1Box[i].style.backgroundSize     = (NCOLUMNS * BOXSIZE )+ "vh " + (NROWS * BOXSIZE) + "vh";
    mainImg1Box[i].style.backgroundPosition = leftBgMargin + "vh " + topBgMargin + "vh";

}
