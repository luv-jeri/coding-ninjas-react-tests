import React from 'react';

// Use props to add styles, link and images so that it looks like the reference image.

class ListItem extends React.Component {
  render() {
    return (
      <div className='ListItem'>
        <a href='#'>Link</a>
      </div>
    );
  }
}

export default ListItem;
