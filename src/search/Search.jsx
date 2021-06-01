import useSearch from '../hooks/useSearch';

const Search = () => {
  const values = useSearch('מחלקה פעילה (סגורה) א׳');
  console.log(values);
  return <div>Hello world</div>;
};

export default Search;
