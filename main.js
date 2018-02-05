console.log("This works");

var imagePlaceholder1 = document.getElementById('main-img1');
var mainImg1Box       = document.getElementsByClassName('main-img1-box');

var NROWS = 10;
var NCOLUMNS = 30;

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


for(var y = 0; y < NROWS; y++){
    for(var x = 0; x < NCOLUMNS; x++){
        var div = document.createElement('div');
        div.classList.add('main-img1-box');
        div.classList.add('main-img-box');
        imagePlaceholder1.append(div);
    }
}

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
    let arr = generateRandomArray();
    var tl = new TimelineMax();
    var overlappingFactor = 0.045;
    var absolutePosn = overlappingFactor;
    arr.forEach(function(elem){
        tl.fromTo(mainImg1Box[elem], 0.05, {
            transform: 'translateY(+50vh)',
            backgroundColor: 'white',
            opacity: '0'
        }, {
            transform: 'translateY(0)',
            backgroundColor: 'pink',
            opacity: '1'
        }, absolutePosn);
        absolutePosn += overlappingFactor;
    });
    console.log(absolutePosn);

}
