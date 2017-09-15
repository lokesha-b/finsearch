export const SEARCH_RESULTS = 'SEARCH_RESULTS';

export function search(searchName)
{
const action = {
  type: SEARCH_RESULTS,
  searchName
}
return action;
}
