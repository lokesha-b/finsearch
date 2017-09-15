import React from 'react';
import { connect } from 'react-redux';

class TableList extends React.Component
{

  constructor() {
    super();

    this.changeHandler = this.changeHandler.bind(this);

    }


selectedSearch(event)
{
  console.log('event', event.target.id);
  console.log('this.props' , this.props[event.target.id].name);
  this.props.setSearchValue(this.props[event.target.id].name);
}
changeHandler(event) {
      //  if (typeof this.props.onChange === 'function') {
      console.log('eventtttt', event);

            this.props.onChange(this.props[event.target.id].name);
      //  }
    }

  render()
  {
    console.log('this.props', JSON.stringify(this.props));
    console.log('this.props[a].name', this.props.name);
    console.log('this.props.setSearchValue', this.props.setSearchValue);

    return (

      <div className="displayList123">
        {

            Object.keys(this.props).map((key, index) => { console.log('this.props[key].name', this.props[key].name) ;
            return  this.props[key].name == 'dispatch' ? null :
            <div className="tableHeader"> <a href={this.props[key].url} key={this.props[key].name}  id={key}
            onClick=  { this.changeHandler.bind() } > { this.props[key].name }   </a>
            <div >
            <cite className="citeUrl">{this.props[key].url}</cite>
            </div>
            </div> })
        }
      </div>

    )
  }
}
  function mapStateToProps(state)
  {
    return state;
  }

export default connect(mapStateToProps, null)(TableList);
