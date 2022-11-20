import React, { useState, useEffect } from 'react';
import styles from '../Styles/home.module.css';
import Card from '../Components/Card';
import fetchRecipes from '../functions/fetch';

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetchRecipes(query, setRecipes);
  }, [query]);

  return (
    <div>
      <h1>Recipe Search</h1>
      <input
        className={styles.search}
        type='search'
        placeholder='Search a recipe'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className={styles.list}>
        {recipes.map((recipe) => (
          <Card
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            image={recipe.recipe.image}
            url={recipe.recipe.url}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
