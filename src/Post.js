import { useState } from 'react';

const Post = (props) => {
  // #Task-2: Toggle "liked-btn" and "like-btn" class when user clicks the like button.

  // ? State to store the like status of the post.
  const [isLiked, setIsLiked] = useState(false);

  // ?  Function to toggle the isLiked state, on Click of the like button.
  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className='post'>
      <hr />
      <h2>{props.title}</h2>
      <div>
        <i>
          <span>{props.date}</span>
          <br />
          <span>{props.length} min read</span>
        </i>
      </div>
      <p>{props.content}</p>

      {/* Depending on the value of isLiked state, we will render the like button or the liked button.      */}
      <button onClick={handleLike} className={isLiked ? 'liked-btn' : 'like-btn'}>
        {isLiked ? 'Liked' : 'Like'}
      </button>
    </div>
  );
};

export default Post;
