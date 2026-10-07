async function HTTPrequest(){
	const resp = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
	if(!resp.ok) throw new Error(`HTTP ${resp.status}`);
	const data = await resp.json();
	console.log(data);
}

HTTPrequest();