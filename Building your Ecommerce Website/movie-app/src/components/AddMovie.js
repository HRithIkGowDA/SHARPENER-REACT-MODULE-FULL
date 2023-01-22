import React, { useRef } from 'react';

import classes from './AddMovie.module.css';

const AddMovie = (props) => {
  const title = useRef();
  const openingText = useRef();
  const releaseDate = useRef();

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const newMovieData = {
      title: title.current.value,
      openingText: openingText.current.value,
      releaseDate: releaseDate.current.value,
    };

    const response = await fetch(
      'https://movie-app-a0fe2-default-rtdb.firebaseio.com//movies.json',
      {
        method: 'POST',
        body: JSON.stringify(newMovieData),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const data = await response.json();
    console.log(data);

    props.onAdd();

    title.current.value = '';
    openingText.current.value = '';
    releaseDate.current.value = '';
  };

  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <label htmlFor='title'>Title</label>
      <input id='title' type='text' ref={title} />
      <label htmlFor='openingText'>Opening Text</label>
      <textarea
        id='openingText'
        type='text'
        className={classes.openingText}
        ref={openingText}
      ></textarea>
      <label htmlFor='releaseDate'>Release Date</label>
      <input
        id='releaseDate'
        type='date'
        ref={releaseDate}
        className={classes.date}
      />
      <div>
        <button type='submit'>Add Movie</button>
      </div>
    </form>
  );
};

export default AddMovie;
