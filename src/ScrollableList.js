import React from 'react';
import  './index.css';
import { bindActionCreators } from 'redux';
import { search } from './actions';

import financialList from './finInstitutionsList.json'
import { connect } from 'react-redux';
import SearchList from './SearchList';
import TableList from './TableList';



class ScrollableList extends React.Component
{

constructor() {
  super();
  this.state = {
    searchValue : '',
    showSearchList: true,
    showTableList: true
  };
  this.changeHandler = this.changeHandler.bind(this);
  this.onBlurEvent = this.onBlurEvent.bind(this);
  this.handleKeyPress = this.handleKeyPress.bind(this);

}

componentDidMount()
{
  const searchApi='https://drive.google.com/file/d/0B-Vm0EdEEvynTHlBOHpESl9wNFk/view?ts=59b4054a';

/*  fetch(searchApi,
  {
    method: 'GET',
  }).then(response => response.json())
    .then(json => console.log('data', json));
    */

    fetch(searchApi,
      {
        method: 'GET',
      }).then(response => console.log('data', response ));

}

displayData()
{

  let jsonObj = financialList.products;
  let finalList = jsonObj.map((k) =>  { return (<div> <h3> {k.name} </h3> </div>) } );
  console.log('abc' + abc);
return (
  <div>
  <ul>
  {finalList}
  </ul>
  </div>
);
}

getComponent(event)
{

}

displayList()
{
let jsonObj = financialList.products;
let abc = jsonObj.map((k) =>  { return ( <li   > <a  onClick= { this.getComponent.bind(this) } href="#"> {k.name} </a> </li> ) });

  return (
      <div id="topPanel">
      <ul id="list">
        { finalList }
      </ul>
      </div>
  );
}
filterResults()
{
  var ulList = document.getElementById('list');
  var liList = ulList.getElementsByTagName("li");
  var inputValue = document.getElementById("searchText").value.toUpperCase();
  console.log(inputValue);
  for (var i=0; i< liList.length; i++)
  {
    if ( liList[i].getElementsByTagName("a")[0].innerHTML.toUpperCase().indexOf(inputValue) > -1 )
    {
      liList[i].style.display="";
    }
    else {
      liList[i].style.display="none";
    }
  }
}

searchResults(event)
{

    this.props.search(event.target.value);
    this.setState({searchValue : event.target.value,
      showSearchList: true
      })

}

changeHandler(value)
{
  this.setState({
     searchValue: value,
     showSearchList: false
   });
   this.props.search(value);
   document.getElementById('searchValue').value = value;

}

handleKeyPress(event)
{
  if (event.key === 'Enter') {
        this.setState({
           showSearchList: false
         });
         //this.props.search(value);
      }
}

onBlurEvent(value)
{
/* this.setState({
     showSearchList: false
   }); */
}

render()
{

  return (<div>

      <input type="text" id="searchValue" ref="myInput"  className="searchText" onKeyPress={event => this.handleKeyPress(event)}
      onChange={event => this.searchResults(event)}  onBlur={event => this.onBlurEvent(event)} placeholder="Search ..." />
 { this.state.showSearchList ?
  <SearchList  onChange={this.changeHandler} /> : null }
  { this.state.showTableList ?
   <TableList   /> : null }

      </div>

      );
}



}


export default connect(null, {search})(ScrollableList);
