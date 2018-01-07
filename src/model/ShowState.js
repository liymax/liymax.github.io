import { observable,action } from "mobx";
export default class ShowState{
	@observable showId='home';
  @observable renderedIds=['home'];

	@action.bound
	selectShowId(id){
		this.showId=id;
	}


	@action.bound
	recordRenderedIds(id){
		if(!this.renderedIds.includes(id)){
			this.renderedIds.push(id);
		}
	}
}