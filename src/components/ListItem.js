import React from 'react';

// Use props to add styles, link and images so that it looks like the reference image.

const ListItem = (props) => {
  const { data } = props;
  return (
    <div className='listItem' style={{ backgroundColor: `${data.bgColor}` }}>
      <img src={data.icon} alt={data.name} />
      <a href={data.link}>{data.name}</a>
    </div>
  );
};

export default ListItem;
