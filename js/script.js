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
	document.getElementById("cluedo").style.display = "none";
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

	let select2 = document.getElementById("select2");
	for (let i = 0; i < pnumber; i++) {
		let option = document.createElement('option');
		option.text = document.getElementById(i).value;
		select2.appendChild(option);
		aplayer.push(document.getElementById(i).value);
	}

	document.getElementById("select").style.display = "inline";
	document.getElementById("place").style.display = "inline";
	document.getElementById("weapon").style.display = "inline";
	document.getElementById("person").style.display = "inline";
	document.getElementById("register").style.display = "inline";
	document.getElementById("demande").style.display = "inline-block";
	document.getElementById("table").style.display = "inline-block";
	document.getElementById("select2").style.display = "inline";
	document.getElementById("all").style.display = "inline";
	document.getElementById("yes").style.display = "inline-block";
	document.getElementById("no").style.display = "inline-block";
	document.getElementById("maybe").style.display = "inline-block";

	for (let i = 0; i < pnumber; i++) {
		let label = document.createElement("LABEL");
		label.setAttribute("class", "container");
		let input = document.createElement("INPUT");
		input.setAttribute("type", "radio");
		input.setAttribute("ID", aplayer[i]);
		input.setAttribute("name", "radio");
		input.setAttribute("value", aplayer[i]);
		let span = document.createElement("SPAN");
		span.setAttribute("ID", "span " + aplayer[i]);
		span.setAttribute("class", "checkmark");
		label.innerHTML = aplayer[i];
		label.appendChild(input);
		label.appendChild(span);
		document.getElementById("radio_holder").appendChild(label);
	}

	let label = document.createElement("LABEL");
	label.setAttribute("class", "container");
	let input = document.createElement("INPUT");
	input.setAttribute("type", "radio");
	input.setAttribute("ID", "nobody");
	input.setAttribute("checked", "checked");
	input.setAttribute("name", "radio");
	input.setAttribute("value", "nobody");
	let span = document.createElement("SPAN");
	span.setAttribute("ID", "span nobody");
	span.setAttribute("class", "checkmark");
	label.innerHTML = "Nobody";
	label.appendChild(input);
	label.appendChild(span);
	document.getElementById("radio_holder").appendChild(label);

	let table = document.getElementById("table");

	for (let i = 0; i < pnumber; i++) {
		for (let j = 0; j < table.rows.length; j++) {
			table.rows[j].insertCell();
		}
		table.rows[0].cells[i + 1].innerHTML = aplayer[i];
	}
}

function player_selected() {
	let asker = document.getElementById("select").value;
	for (let i = 0; i < aplayer.length; i++) {
		document.getElementById("span " + aplayer[i]).style.display = "inline";
		document.getElementById(aplayer[i]).disabled = false;
	}
	document.getElementById("span " + "nobody").style.display = "inline";
	document.getElementById("nobody").disabled = false;

	document.getElementById("span " + asker).style.display = "none";
	document.getElementById(asker).disabled = true;
}

function button_register() {
	let asker = document.getElementById("select").value;
	let giver = document.querySelector('input[name="radio"]:checked').value;

	let person = document.getElementById("person").value;
	let weapon = document.getElementById("weapon").value;
	let place = document.getElementById("place").value;

	let tab = [];
	for (let j = aplayer.indexOf(asker) + 1; j < aplayer.length; j++) {
		tab.push(aplayer[j]);
	}
	for (j = 0; j < aplayer.indexOf(asker); j++) {
		tab.push(aplayer[j]);
	}

	for (let i = 0; i < tab.length; i++) {
		if (tab[i] != giver) {
			write_table(tab[i], person, "no");
			write_table(tab[i], place, "no");
			write_table(tab[i], weapon, "no");
		}

		if (tab[i] == giver) {
			write_table(giver, person, "maybe");
			write_table(giver, place, "maybe");
			write_table(giver, weapon, "maybe");
			break;
		}
	}
}

	function write_table(player, object, statut) {
		let table = document.getElementById("table");
		let x;
		let y;
		for (let i = 0; i < table.rows.length; i++) {
			if (table.rows[i].cells[0].innerHTML == object) {
				y = i;
			}
		}

		for (let j = 0; j < table.rows[0].cells.length; j++) {

			if (table.rows[0].cells[j].innerHTML == player) {
				x = j;
			}
		}

		if (statut == "yes") {
			table.rows[y].cells[x].innerHTML = "<img src=\"yes.png\" height=\"20\" width=\"20\">";
		}

		if (statut == "no") {
			table.rows[y].cells[x].innerHTML = "<img src=\"no.png\" height=\"20\" width=\"20\">";
		}

		if (statut == "maybe") {
			table.rows[y].cells[x].innerHTML = "<img src=\"maybe.png\" height=\"20\" width=\"20\">";
		}
	}

	function button_yes() {
		let player = document.getElementById("select2").value;
		let object = document.getElementById("all").value;
		write_table(player, object, "yes");
	}

	function button_no() {
		let player = document.getElementById("select2").value;
		let object = document.getElementById("all").value;
		write_table(player, object, "no");
	}

	function button_maybe() {
		let player = document.getElementById("select2").value;
		let object = document.getElementById("all").value;
		write_table(player, object, "maybe");
	}
