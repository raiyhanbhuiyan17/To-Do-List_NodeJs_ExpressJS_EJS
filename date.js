
// module.exports = getDate;
//using module.exports as an object
exports.getDate = function(){
   const today = new Date();
    const options ={
        weekday: "long",
        day :"numeric",
        month:"long"
    };

    // var day=today.toLocaleDateString("en-US", options);
    // return day;
    return today.toLocaleDateString("en-US", options);
}
exports.getDay = function (){
    const today = new Date();
    const options ={
        weekday: "long",
    };

    // var day=today.toLocaleDateString("en-US", options);
    // return day;
    return today.toLocaleDateString("en-US", options);
}

console.log(module.exports);