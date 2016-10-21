function saveChanges(selectedCB){
	localStorage.clear();
	for(var i=0;i<selectedCB.length;i++){
		localStorage.setItem(i,selectedCB[i]);
	}
}

function getChanges(){
	//get all data
	var one=document.getElementById("1");
	var two=document.getElementById("2");
	var three=document.getElementById("3");
	var four=document.getElementById("4");
	var five=document.getElementById("5");
	var six=document.getElementById("6");
	var seven=document.getElementById("7");
	var eight=document.getElementById("8");
	var nine=document.getElementById("9");
	var ten=document.getElementById("10");
	var eleven=document.getElementById("11");

	var checkboxList=[one,two,three,four,five,six,seven,eight,nine,ten,eleven];
	var selectedCB = [];

	//check for selected one's and add them in a array
	for(var i=0;i<11;i++){
		if(checkboxList[i].checked == true){
			selectedCB.push(checkboxList[i].value);
		}
	}
	saveChanges(selectedCB);
}

function engine(){
	var engineList = [];
	for(var i=0;i<12;i++){
		if(localStorage.getItem(i))
			engineList.push(localStorage.getItem(i));
	}

	return engineList;
}
