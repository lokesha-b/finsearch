import React from 'react';
import { connect } from 'react-redux';

class SearchList extends React.Component
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
    console.log('this.props[a].nameeeeeeeee', this.props.name);
    console.log('this.props[a].length', this.props.length);

    console.log('this.props.setSearchValue', this.props.setSearchValue);
    console.log('Object.keys(a).length', Object.keys(this.props).length );

    return (

      <div>
      { Object.keys(this.props).length <=2 ? null :

      <div className="displayList">

      <ul id="nav">
        {
            Object.keys(this.props).map((key, index) => { console.log('this.props[key].name', this.props[key].name) ;
            return this.props[key].name == 'dispatch' || this.props[key].name == 'bound changeHandler' ? null :
             <div> <li  key={this.props[key].name}  id={key}
            onClick=  { this.changeHandler.bind() } > { this.props[key].name }   </li> </div> })
        }
      </ul>

      </div>
      }
      </div>
    )
  }
}
  function mapStateToProps(state)
  {
    return state;
  }

export default connect(mapStateToProps, null)(SearchList);
