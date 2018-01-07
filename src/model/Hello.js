import { observable, computed,action } from "mobx";
export class Hello{
	@observable first='hello';
	@observable last='world';

	@computed get fullname(){
		return this.first+this.last
	}

	@action.bound
	setFirst(first){
		this.first=first;
	}
}