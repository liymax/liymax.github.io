let docHead=document.head,links=docHead.getElementsByTagName("link");

for(let e of links){
	let script=document.createElement("script");
	script.type="text/javascript";
	script.src=e.href.replace(/_/g,"");
	docHead.appendChild(script);
}