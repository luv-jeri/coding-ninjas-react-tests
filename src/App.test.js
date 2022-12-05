import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import List from './components/List';
import ListItem from './components/ListItem';

describe('ListItem should render with data prop', () => {
  test('should render with data prop', () => {
    const data = {
      id: 1,
      name: 'LinkedIn',
      link: 'http://linkedin.com',
      icon: 'https://image.flaticon.com/icons/png/128/1409/1409945.png',
      bgColor: '#ff9580',
    };

    // check it the container has the correct background color
    const { container } = render(<ListItem data={data} />);
    // eslint-disable-next-line testing-library/no-node-access
    expect(container.firstChild).toHaveStyle(`background-color: ${data.bgColor}`);

    // check if the image has the correct src and alt
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', data.icon);
    expect(image).toHaveAttribute('alt', data.name);

    // check if the link has the correct href and text
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', data.link);

    // check if the link has the correct text
    expect(link).toHaveTextContent(data.name);

    // check if the link is clickable
    fireEvent.click(link);
    expect(link).toHaveAttribute('href', data.link);
  });
});
