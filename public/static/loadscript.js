let docHead=document.head,links=docHead.getElementsByTagName("link");
if(process.env.NODE_ENV==="production"){
	links.forEach((item)=>{
		let script=document.createElement("script");
		script.type="text/javascript";
		script.src=item.href;
		docHead.appendChild(script);
	});
}

