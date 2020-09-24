//Debounce from JS
let count =1;
const getData = ()=>{
    //get API call
    console.log("Fetching API... ", count++);
}

const debounce = function(funcn, delay) {
    let timer;
    return function(){
        let context = this,
        args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            funcn.apply(context,args);
        }, delay);
    }   
}

const caller = debounce(getData, 300);