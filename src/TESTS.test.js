import { render, screen } from '@testing-library/react';
import App from './App';
import Home from './Pages/Home';
import Card from './components/Card';
import fetchRecipes from './functions/fetch';

describe('Card Testing', () => {
  const imageURL =
    'https://edamam-product-images.s3.amazonaws.com/web-img/809/809782edc82556d0ed9dae764098a8fd.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLWVhc3QtMSJIMEYCIQCkd80183sOHXRoFprVZj72EVBPAOcapfKHx7q6FeQQzAIhAOHIE5PKDmkcScHxBvbe1kwGblobvzGo429wtBAHMFyoKswECHEQABoMMTg3MDE3MTUwOTg2Igy0DljptK%2B9ohYkMCYqqQSKTmB6NN1pZ%2FHs7tyum43GIofxBV2M17jLznO1fp8ru0bjrseMV20SU%2BdTtIsN9vHBrZP5VrL4gCzk8h%2BVPUg%2FZwBbMKXU1GRpfiVPHYJIbG7sT4FxmsUj59dcucN3avGSbsiscwzqJ78lrTXV9mgE6O5eQpUKb9ka6Jifmxozb1Hc36FfPxaizg24Xey%2BUvaWMrI2Ty50mjEGVxP9roe7xbtZqTzDPs0BZHfUl%2Br%2BThY4pCMjqL9GaJ%2B%2Bxj0fTRbOlBD3ixAPZDwVxFAphpFmOfRvn12fxrZ82TlzTFLL90G8saJfZMx4L5WcTQB9S1aSsjm5R7uBkyJq2Qwa5TVFOa3AAYtOjZZeMJhLJfHPvZsCUJ9%2BRhXJD8WN1QuuGEnMrFWzvpV3I6y1PrHHTkVn76GMn1m2Vn4HOcxAcNCPK5x9MK%2B8PnOK9cUrcuZJ5CeMGK8kG63Qv7ejHEsG0HO6XAvpHKb0JZ4kJTx%2Bj9iP3Wv%2B%2BkMnKHO7HVZ7ptwGvhDtmrSTSXc6g6N3Tsn7Wz5HDspBNis5YcuJ8w%2FrmOLR0GgTsU3fKRwxgI1JRvUX%2FQ8UgmwDsI%2FR4U7xGj8sEfmhtIddBvlbQPYaRhBqzgzzu2p8TPiHiQbTbM41NAxoMRVK8%2FpwH4d24MoOX2yyn37bPvsmntGvGxSv8WlpcRHnSr%2FHcjJ7oSaX7NLaOQovvx1a79PTRjiJISgvdojM7oi2X6JcjvC3C5WnMIW555sGOqgBrveAQeFXWugQU047hLI22vvKNrdnB8UD8vi0izoYYDfkbFrbTCB%2Btg5MRNWJFeZH87423Aw2CBalbIf8P54qmVoXd8%2BPyl6fWRjhKAJCVgQND9sII7wm%2BdEwR%2FkTSuagUScZpRJ4XiI%2B%2BZIEjwYVkiiJ6qEWxWvLvLvRaTDtRuHk4NtsUWbgtXtJREUrIscafOiZETVC46iBxczflZshxJcSFwoILl2p&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221120T085715Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFKZHKDZ4J%2F20221120%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=254cea0a8d380b64184e331703dbfe5df80cd89920a84d28f4ee2c917f55728c';

  const URL =
    'https://www.prevention.com/food-nutrition/recipes/a20517457/rock-you-shake/';

  const cardtitle = 'Rock You Shake';
  test('should render card component', () => {
    render(<Card title={cardtitle} url={URL} image={imageURL} />);
  });

  test('should render card title', () => {
    render(<Card title={cardtitle} url={URL} image={imageURL} />);
    const title = screen.getByText(cardtitle);
    expect(title).toBeInTheDocument();
  });

  test('should render card image', () => {
    render(<Card title={cardtitle} url={URL} image={imageURL} />);
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', imageURL);
  });

  test('should render card link', () => {
    render(<Card title={cardtitle} url={URL} image={imageURL} />);
    const links = screen.getAllByRole('link');
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    expect(links).toHaveLength(2);
    expect(links[0]).toHaveAttribute('href', URL);
    expect(links[1]).toHaveAttribute('href', URL);
  });
});

describe('Home Testing', () => {
  test('should render home component', () => {
    render(<Home />);

    const title = screen.getByText(/Recipe Search/i);
    const searchInput = screen.getByPlaceholderText(/Search/i);

    expect(title).toBeInTheDocument();
    expect(searchInput).toBeInTheDocument();
  });
});
