function load(){
	var list = []
	for(var i=1;i<16;i++){
		for(var j=0;j<16;j++){
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
