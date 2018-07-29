// ------------------------
let pnumber; // Number of players
let aplayer = []; // Array containing players names


// Create as many input field as the number of players
function button_compute() {
	pnumber = document.getElementById("playerNumber").value;
	create_inputs(pnumber);
}

function create_inputs(number) {
	for (let i = 0; i < pnumber; i++) {
		let x = document.createElement("INPUT");
		x.setAttribute("type", "text");
		x.setAttribute("ID", i);
		//By default the name is player_i
		x.value = "player " + i;
		// Insert them is the div "name_holder"
		document.getElementById("name_holder").appendChild(x);
	}
	document.getElementById("go").style.display = "none";
	document.getElementById("enter_player").style.display = "inline-block";
}

function hide_gui() {
	document.getElementById("playerNumber").style.display = "none";
	for (let i = 0; i < pnumber; i++) {
		document.getElementById(i).style.display = "none";
	}
	document.getElementById("enter_player").style.display = "none";
	document.getElementById("info").style.display = "none";
}

function enter_player() {
	hide_gui();
	//Append the players name into the select element and fill the array aplayer with the names
	let select = document.getElementById("select");
	for (let i = 0; i < pnumber; i++) {
		let option = document.createElement('option');
		option.text = document.getElementById(i).value;
		select.appendChild(option);
		aplayer.push(document.getElementById(i).value);
	}
	document.getElementById("select").style.display = "inline-block";
	document.getElementById("place").style.display = "inline-block";
	document.getElementById("weapon").style.display = "inline-block";
	document.getElementById("person").style.display = "inline-block";
}
