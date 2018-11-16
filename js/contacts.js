/* 
Activity: Contact manager
*/

// TODO: Complete the program
var contact = [ {lastname: "John",firstname:"Smith"},
                  {lastname: "Jane",firstname:"Doe"}];
console.log("Welcome to your contacts manager!");
while(true){
                                
function menu(){
	return "1: List of contacts\n2: Add a contact\n0: Quit";
};
console.log(menu());
option=prompt("enter option");
	if(option==1){
console.log("Here's the list of all your contacts: ");
var person1={
lastname: "John",
firstname:"Smith",
};
console.log("lastname:"+person1.lastname+","+"firstname:" + person1.firstname);
var person2={
 lastname:"Jane",
 firstname:"Doe",
};
console.log("lastname:"+person2.lastname+","+"firstname:" + person2.firstname);
var newIn = { firstname: input1,lastname: input2};
contact.push("lastname:"+newIn.lastname+","+"firstname:" + newIn.firstname);
console.log(contact[3]);
 
	}else if(option==2){
var input1 = prompt("enter lastname");
var input2 = prompt("enter firstname");
var newIn = { firstname: input1,lastname: input2};
//contact.push("lastname:"+newIn.lastname+","+"firstname:" + newIn.firstname);
contact.push(newIn);
console.log("contact added");

	} else if(option==0){
      break;
	}

	
}

