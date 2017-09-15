import React from 'react';
import  './index.css';
import { bindActionCreators } from 'redux';
import { search } from './actions';

//import Jquery from 'jquery';
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

  //console.log ('fin list'+ JSON.stringify(financialList));
console.log('faddsfsdf');
  /* for (let i=0; i< financialList.products.length; i++)
  {
    console.log('1111');
    let jsonObj = financialList.products[i];
    for (let key in jsonObj)
    {
      console.log('key and value' + jsonObj[key]);
    }
  }*/
  //console.log('financialList.products[0]' + JSON.stringify(financialList.products[0]));
  let jsonObj = financialList.products;
  let abc = jsonObj.map((k) =>  { return (<div> <h3> {k.name} </h3> </div>) } );
  console.log('abc' + abc);
return (
  <div>
  <ul>
  {abc}
  </ul>
  </div>
);
}

getComponent(event)
{
  console.log('selected component');
  console.log('event' + event.target.text);
  event.currentTarget.style.backgroundColor = '#ccc';
}

displayList()
{
//console.log('hello'+  Jquery);
let jsonObj = financialList.products;
let abc = jsonObj.map((k) =>  { return ( <li   > <a  onClick= { this.getComponent.bind(this) } href="#"> {k.name} </a> </li> ) });
/*
<li> <a href="#"> abc </a> </li>
<li> <a href="#"> def </a> </li>
<li> <a href="#"> gef </a> </li>
*/
  return (
      <div id="topPanel">
      <ul id="list">
        { abc }
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
  console.log('search results');

    console.log('calling search results');
    this.props.search(event.target.value);

    this.setState({searchValue : event.target.value,
      showSearchList: true
      })

  console.log('search results', this.props);
}

changeHandler(value)
{
  console.log('vaaaaaalueee', value);
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
        console.log('do validate');
        this.setState({
           showSearchList: false
         });
         //this.props.search(value);
      }
}

onBlurEvent(value)
{
  console.log('on blur triggered');
/* this.setState({
     showSearchList: false
   }); */
}

render()
{
  //      { this.displayData() }
console.log('haiiiiiiiiii');
console.log('propssssss', this.props);
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
