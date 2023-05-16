function display(value){

    document.getElementById("result").value += value;
}
function calc(){
    var r= document.getElementById("result").value;
    var res = eval(r);
    document.getElementById("result").value= res;
}
function reset (){
    document.getElementById("result").value="";

}