import React, { useState } from "react";
import SearchBox from "./componentes/Searchbox/Searchbox";
import FilteredList from "./componentes/FilteredList/FilteredList"

function App() {
  const [movies, setMovies] = useState([
    { id: 1,title: 'Inception', year: 2010, genre: 'Sci-Fi', director: 'Christopher Nolan' },
    { id: 2,title: 'The Godfather', year: 1972, genre: 'Crime', director: 'Francis Ford Coppola' },
    { id: 3,title: 'Pulp Fiction', year: 1994, genre: 'Crime', director: 'Quentin Tarantino' },
    { id: 4,title: 'Spirited Away', year: 2001, genre: 'Animation', director: 'Hayao Miyazaki' },
    { id: 5,title: 'The Dark Knight', year: 2008, genre: 'Action', director: 'Christopher Nolan' },
    { id: 6,title: 'Parasite', year: 2019, genre: 'Thriller', director: 'Bong Joon-ho' },
    { id: 7,title: 'Schindler’s List', year: 1993, genre: 'Drama', director: 'Steven Spielberg' },
    { id: 8,title: 'The Grand Budapest Hotel', year: 2014, genre: 'Comedy', director: 'Wes Anderson' },
    { id: 9,title: 'Interstellar', year: 2014, genre: 'Sci-Fi', director: 'Christopher Nolan' },
    { id: 10,title: 'Coco', year: 2017, genre: 'Animation', director: 'Lee Unkrich' },
    { id: 11,title: 'Gladiator', year: 2000, genre: 'Action', director: 'Ridley Scott' },
    { id: 12,title: 'La La Land', year: 2016, genre: 'Musical', director: 'Damien Chazelle' },
    { id: 13,title: 'The Shawshank Redemption', year: 1994, genre: 'Drama', director: 'Frank Darabont' },
    { id: 14,title: 'The Matrix', year: 1999, genre: 'Sci-Fi', director: 'Lana Wachowski & Lilly Wachowski' },
    { id: 15,title: 'Get Out', year: 2017, genre: 'Horror', director: 'Jordan Peele' },
    { id: 16,title: 'Amélie', year: 2001, genre: 'Romance', director: 'Jean-Pierre Jeunet' },
    { id: 17,title: 'Mad Max: Fury Road', year: 2015, genre: 'Action', director: 'George Miller' },
    { id: 18,title: '12 Angry Men', year: 1957, genre: 'Drama', director: 'Sidney Lumet' },
    { id: 19,title: 'Toy Story', year: 1995, genre: 'Animation', director: 'John Lasseter' },
    { id: 20,title: 'Black Panther', year: 2018, genre: 'Action', director: 'Ryan Coogler' }]
  )

  const [search, setSearch] = useState({
    director: '',
    title: '',
    year: '',
    genre: '',
  });

  const handleSearchChange = (field, value) => {
    setSearch((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const filteredMovies = movies.filter((movie) => 
    (!search.director || movie.director.toLowerCase().includes(search.director.toLowerCase())) &&
    (!search.title || movie.title.toLowerCase().includes(search.title.toLowerCase())) &&
    (!search.year || movie.year.toString().includes(search.year)) &&
    (!search.genre || movie.genre.toLowerCase().includes(search.genre.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <SearchBox search={search} handleSearchChange={handleSearchChange} />
      <FilteredList list={filteredMovies} />
    </div>
  );
};
export default App;
