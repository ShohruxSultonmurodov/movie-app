import React, {useState} from "react";
function Navbar({getMovies}) {
  const search_api = "https://api.themoviedb.org/3/search/movie?&api_key=0f0e2af2e57d1673ab107a92ac78c5b9&query=";
  const [searchText, setSearchText] = useState('');
  function handleOnSubmit(e) {
    e.preventDefault();

    if(searchText) {
      getMovies(search_api+searchText);
      setSearchText('');
    }
  }
  function handleChangeText(e) {
    setSearchText(e.target.value);
  }
  return (
    <div className="navbar row d-flex justify-content-between">
        <h1 className="logo col-md-3 col-sm-5 col-xs-6">Movie app</h1>
        <form onSubmit={handleOnSubmit} className="col-md-2 col-sm-4 col-xs-6">
            <input type='search' onChange={handleChangeText} value={searchText} placeholder="Search..." className="search_input col-12" />
        </form>
      </div>
  );
}

export default Navbar;
