


// var btn_min= document.querySelector("#minus");
// var btn_mul= document.querySelector("#mul");
// var btn_div= document.querySelector("#div");
// var btn_add= document.querySelector("#add");


var output = document.querySelector("#output");


function call(clickid){
  var txtIn1= parseFloat(document.querySelector("#input1").value);
  var txtIn2= parseFloat(document.querySelector("#input2").value);
  if(isNaN(txtIn1)||isNaN(txtIn2)){
    output.value="not a number"
  }
  else if(clickid=="add"){
    output.value=txtIn1+txtIn2;
  }
  else if(clickid=="minus"){
    output.value=txtIn1-txtIn2;
  }
  else if(clickid=="mul"){
    output.value=txtIn1*txtIn2;
  }
  else if(clickid=="div"){
    output.value=txtIn1/txtIn2;
  }
}



