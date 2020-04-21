import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  // const addToSavedList = (movie) => {
  //   if (!savedList.includes(movie)) {
  //     if (savedList.length < 3) setSavedList([...savedList, movie]);
  //     else alert("Only 3 movies can be saved!");
  //   } else {
  //     alert("You have already saved this movie!");
  //   }
  // };
  const addToSavedList = (movie) => {
    var exists = false;
    savedList.forEach((item) => {
      if (item.title === movie.title) {
        exists = true;
        alert(`You have already saved ${movie.title}`);
      }
    });
    if (!exists) {
      if (savedList.length < 3) setSavedList([...savedList, movie]);
      else alert("You can only have 3 movies saved!");
    }
  };

  const removeFromSavedList = (movie) => {
    setSavedList(
      savedList.filter((x) => {
        return x.title != movie;
      })
    );
  };

  return (
    <Router>
      <div>
        <SavedList list={savedList} removeFromSavedList={removeFromSavedList} />
        <Switch>
          <Route path="/movies/:id">
            <Movie addToSavedList={addToSavedList} />
          </Route>
          <Route path="/">
            <MovieList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
