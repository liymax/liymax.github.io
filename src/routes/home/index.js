import React from "react";
import qs from 'querystring';
import Contacts from './contacts';
import Development from './development';
import Partner from './partner';
import Team from './team';
import About from './about';
export default class extends React.PureComponent {
  constructor(props) {
    super(props);
    const url = document.URL;
    let query =url.substr(url.lastIndexOf('?')+1);
    const { page = 'contacts' } = qs.parse(query);
    this.state = {
			page,
      loadedPages:[page]
    };
  }

  getDisplay=(pg)=>{
		const { page } = this.state;
		return page === pg?null:{display:'none'};
  };

  render() {
    const { page, loadedPages } = this.state;
    return (
			<div>
        {loadedPages.includes('contacts') &&
          <Contacts display = {this.getDisplay('contacts')}/> }
        {loadedPages.includes('development') &&
          <Development display = {this.getDisplay('development')}/> }
				{loadedPages.includes('partner') &&
				<Partner display = {this.getDisplay('partner')}/> }
				{loadedPages.includes('team') &&
				<Team display = {this.getDisplay('team')}/> }
				{loadedPages.includes('about') &&
				<About display = {this.getDisplay('about')}/> }
			</div>);

  }
}
