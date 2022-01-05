async function getDatas() {
	try {
		let response = await fetch("data.json");
		let datasJson = await response.json();
		return datasJson;
	} catch (err) {
		handleError();
	}
}

let datas = await getDatas();
if (datas) {
	datas.forEach((element) => {
		afficherDuHtml(element);
	});
}

function afficherDuHtml(el) {
	console.log(el);
}

function handleError() {
	console.log("bouhou !!");
	alert("pas de données !");
}
