export function doGetText(url,success,fail) {
	(async()=>{
		try {
			let res= await fetch(url);
			let text=await res.text();
			success(text);
		}catch (e){
			fail && fail(e)
		}
	})()
}