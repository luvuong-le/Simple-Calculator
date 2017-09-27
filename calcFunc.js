//Get all buttons from the document
//For each number add an event listener
window.onload = function(){
  var keys = document.querySelectorAll('a');
  var operators = ['+', '-', '*', '/', '%', '.'];
  var KEY_LENGTH = keys.length;
  var total = document.getElementById("total");
  var output = total.innerHTML;
  var i;
  for(i = 0; i < KEY_LENGTH; i++){
    keys[i].addEventListener('click', function(){
      //When clicked add to total screen
      var currentButton = this.innerHTML;
      if(total.innerHTML == "0"){
        total.innerHTML = "";
      }

      if(currentButton == "C"){
        total.innerHTML = "0";
      }else if(currentButton == "="){
        try{
        total.innerHTML = eval(output);
      }catch(err){
        alert(err.message);
        total.innerHTML = "0"
      }
      }else if(currentButton == "DEL"){
        total.innerHTML = total.innerHTML.slice(0,-1);
      }else{
        //Only add if the first character isnt an operator
        var lastCharacter = total.innerHTML.slice(-1);
        if (operators.includes(lastCharacter) && ['1', '2', '3', '4','5', '6', '7', '8', '9', '0', 'AC'].indexOf(currentButton) < 0){
          //Stop from adding two operators consecutively
          alert("You cannot choose an operator consecutively")
        }else{
        output = total.innerHTML += this.innerHTML;
        }
      }
      //Limit users number inputs
      limit = output.length

      if(limit > 12){
        alert("Limit Reached");
        total.innerHTML = "";
      }


    });
  }
}

//Append the key values to the input string IE total and use javascripts eval function to get result
//Check for if DEL is pressed and
//if last character is an operator or not
//Should not be able to put two operators consecutively and should not be able to use more than one decimal
//Should not start with an operator
