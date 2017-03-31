//7. Inside contextIt, inkoke myFn with its context set explicitly
/////to the contextObj, and with the two parameters passed in - return
/////the result.
function tempFunc(a, b) {
    console.log('Showing this a: ', this[a]);
    console.log('Showing this b: ', this[b]);
    return this[a] - this[b];
}

var tempObj = {
    fruit: 4,
    snakes: 2
};

var para1 = 'fruit';
var para2 = 'snakes';

function contextIt(myFn, contextObj, param1, param2) {
    console.log('function running');

    //This is how bind works  
    // var temp = myFn.bind(contextObj, param1, param2);
    // console.log('Showing return val: ' + temp());

    //This is how call works.
    var result = myFn.call(contextObj, param1, param2);
    console.log('Showing return val call: ' + result);

    //contextObj.myFn(param1, param2)

    //   console.log(myFn);
    //   console.info(contextObj);
    //   console.log(param1);
    //   console.log(param2);
}

contextIt(tempFunc, tempObj, para1, para2);