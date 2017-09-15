import React from 'react';
import ScrollableList from './ScrollableList';
import SearchList from './SearchList';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      itemSelected : ''
    }
  }

itemSelected(value)
{
  console.log('statusc changeeeddddddd');
  console.log('statusc changeeeddddddd',value );
  // this.forceUpdate();
/*
  this.setState({
     itemSelected: value
   });
*/
//forceUpdate();

}

  render() {
    console.log('selecctable listtttttttttttt', this.props);
    return (
      <div >
      <h4 className="headerLabel"> Please search to view the list of Banks and Investment firms </h4>

    <ScrollableList />
      </div>
    );
  }
}

export default App;
