import financialList from '../finInstitutionsList.json';
import { SEARCH_RESULTS } from '../actions';

function searchResults(state, action)
{
  console.log('actionnnnnn', action);
  console.log('stateeeeeee', state);
  console.log('action.searchName', action.searchName);
  if (action.searchName)
  {
    state = financialList.products;
  }
  let results = {};
  state = [... new Set(state) ];
  switch(action.type)
  {
    case SEARCH_RESULTS:
    if (action.searchName)
    {
       results = state.filter( item => ( item.name.toUpperCase().indexOf(action.searchName.toUpperCase()) > -1)  )
      console.log('results', results);
    }
    console.log('results', results);
    return results;
    default:
      return  state;
  }
}

export default searchResults;
