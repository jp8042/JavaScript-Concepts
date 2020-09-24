let name1 = {
    first: "Jevesh",
    last: "Singh"
}
let name2 = {
    first: "Aakash",
    last: "Singh"
}
let name3 = {
    first: "Nirmala",
    last: "Sitaraman",
    
    printJustName : function(){
    console.log(this.first + " " + this.last);
}
}

let printFullName = function(city, state){
    console.log(this.first + " " + this.last + " from " + city + ", " + state);
}
//function borrowing
name3.printJustName();
name3.printJustName.call(name2);
let printName1 = name3.printJustName.bind(name1);
printName1();

printFullName.call(name2,"Dehradun", "UK");
let printName3 = printFullName.bind(name2,"Dehradun", "UK");
printName3();
printFullName.apply(name1, ["Dehradun", "UK"]);