import { observable,action } from "mobx";
import {doGetText} from "src/utils/fetchkit"
export default class Article{
	@observable name='poems';
	@observable content='';

	constructor(){
		this.initContent();
	}

	@action.bound
	initContent(){
		let url='/docs/poems.md';
		doGetText(url,(text)=>{
			this.content=text;
		})
	}

	@action.bound
	loadContentByName(name){
		this.name=name;
		let url=`/docs/${name}.md`;
		doGetText(url,(text)=>{
			this.content=text;
		});
	}
}