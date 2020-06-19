// grafiek 1 "Onderhoudstype vandaag"

let labels1 = ['M1', 'A4', 'B2', 'M2'] // geeft aan wat labels1 is 
let data1 = [21, 16, 8, 7 ] // geeft aan wat data1 is 
let colors1 = ['#E1ABE5', '#FABC90', '#ABE5B4', '#F4E87A'] // geeft aan welke kleuren colors1 is

let myChart1 = document.getElementById("dougnutchart").getContext('2d'); // voor mychart1 wordt aan de doughnuchart id gevoegd in 2D context

let chart1 = new Chart(myChart1, { // nieuwe grafiek wordt gemaakt
	type:'doughnut', // het type is donut
	data: { // de data wordt hier ingeladen uit hierboven
		labels: labels1,
		datasets: [{
			data: data1,
			backgroundColor: colors1
		}]
	},
	options:{ // hier worden de opties aangegeven voor de grafiek
		title: { 
			text: "Onderhoudstypes vandaag", // dit is de titel van de grafiek
			display: true // de titel wordt laten zien
		}
	}


});

// grafiek 2 "Historie van 150 uur onderhoud toestel"

let labels2 = ['18-5', '20-5', '21-5', '23-5', '26-5', '28-5', '30-5', '2-6', '3-6', '5-6', ' 8-6', '9-6', '12-6', '14-6', '16-6'] // geeft aan wat labels1 is 
let data2 = [15, 13, 12, 5, 6, 13, 8, 10, 15, 14, 15, 6, 15, 11, 9] // geeft aan wat data1 is 
let colors2 = ['#0066CC', '#0066CC', '#0066CC', '#0066CC', '#0066CC', '#0066CC', '#0066CC', '#0066CC', '#0066CC', '#0066CC', '#0066CC', '#0066CC', '#0066CC', '#0066CC', '#0066CC'] // geeft aan welke kleuren colors1 is

let myChart2 = document.getElementById("barchart").getContext('2d'); // voor mychart1 wordt aan de doughnuchart id gevoegd in 2D context

let chart2 = new Chart(myChart2, { // nieuwe grafiek wordt gemaakt
	type:'bar', // het type is donut
	data: { // de data wordt hier ingeladen uit hierboven
		labels: labels2,
		datasets: [{
			data: data2,
			backgroundColor: colors2
		}]
	},
	options:{ // hier worden de opties aangegeven voor de grafiek
		title: { 
			text: "Historie van 150 uur onderhoud toestel", // dit is de titel van de grafiek
			display: true // de titel wordt laten zien
		}
	}


});

// grafiek 3 "Percentage geplande reperatie"

let labels3 = ['Ja', 'Nee'] // geeft aan wat labels1 is 
let data3 = [2, 98] // geeft aan wat data1 is 
let colors3 = ['#ABE5B4', '#FABC90'] // geeft aan welke kleuren colors1 is

let myChart3 = document.getElementById("doughnutchart2").getContext('2d'); // voor mychart1 wordt aan de doughnuchart id gevoegd in 2D context

let chart3 = new Chart(myChart3, { // nieuwe grafiek wordt gemaakt
	type:'doughnut', // het type is donut
	data: { // de data wordt hier ingeladen uit hierboven
		labels: labels3,
		datasets: [{
			data: data3,
			backgroundColor: colors3
		}]
	},
	options:{ // hier worden de opties aangegeven voor de grafiek
		title: { 
			text: "Percentage geplande reperatie", // dit is de titel van de grafiek
			display: true // de titel wordt laten zien
		}
	}


});