// function saveChanges(selectedCB){
// 	for(var i=0;i<selectedCB.length;i++){
// 		localStorage.setItem(i,selectedCB[i]);
// 	}
// }

// function getChanges(){
// 	//get all data
// 	var one=document.getElementById("1");
// 	var two=document.getElementById("2");
// 	var three=document.getElementById("3");
// 	var four=document.getElementById("4");
// 	var five=document.getElementById("5");
// 	var six=document.getElementById("6");

// 	var checkboxList=[one,two,three,four,five,six];
// 	var selectedCB = [];

// 	//check for selected one's and add them in a array
// 	for(var i=0;i<6;i++){
// 		if(checkboxList[i].checked == true){
// 			selectedCB.push(checkboxList[i].value);
// 		}
// 	}

// 	saveChanges(selectedCB);
// }

function load(){
	var list = []
	for(var i=1;i<9;i++){
		for(var j=0;j<9;j++){
			if(document.getElementById(i).value == localStorage.getItem(j))
			{
					//console.log(localStorage.getItem(j));
					list.push(document.getElementById(i).value);
					document.getElementById(i).checked = true;
			}
		}
	}
	//return list;
}

var t = document.getElementById("saveButton");
if(t){
	t.addEventListener("click", function (){
	getChanges();
});
}


load();
