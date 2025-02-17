function isSameType(value1,value2){
if(!Number.isInteger(value1)){
	value1 = Number(value1);
}
if(!Number.isInteger(value2)){
	value2 =Number(value2);
}

	if(Number.isInteger(value1)&&Number.isInteger(value2)){
return true;
}
	if(Number.isInteger(value1)||Number.isInteger(value2)){
return false;
}
	
if(typeof(value1)===typeof(value2)){
	return true;
 }else{
	return false;
}
}
	//your js code here
// do not change the code below.
// let value1 = prompt("Enter Start of the Range.");
//  let value2 = prompt("Enter End Of the Range.");
// alert(isSameType(value1, value2));
