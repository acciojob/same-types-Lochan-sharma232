function isSameType(1,3){
return true;
}
function isSameType(value1,value2){
if(Number.string("hey")&& Number.string("hello"))
return true;
}else{
	return false;
}
return typeof value1 === typeof value2;
}
	//your js code here
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
