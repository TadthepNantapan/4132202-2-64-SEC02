var rname ="" //global variabel
sname = "vong"; // same declare by var

rname = "tae" ;
console.log(rname);

{
        let name = "osu";
        console.log(rname);
}
console.log(rname);

{
        const number = 10;
//        number = 5;
}
function add (a, b){
        let c = a + b;
        return c;
}

const addES5 = function (a,b){
        return a + b;
};

const addES6 = (a, b) => a + b;

const result = addES6(5, 8);
console.log (result);