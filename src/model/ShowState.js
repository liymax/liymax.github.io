import { observable,action } from "mobx";
export default class ShowState{
	@observable showId='home';
  @observable renderedIds=['home'];

	@action.bound
	selectShowId(id){
		this.showId=id;
		!this.renderedIds.includes(id) &&
		this.renderedIds.push(id)
	}
}