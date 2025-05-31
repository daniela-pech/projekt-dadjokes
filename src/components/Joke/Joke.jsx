import './Joke.css';
import { useState, useEffect } from 'react';

export const Joke = ({ userAvatar, userName, text, likes, dislikes }) => {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  const [joke, setJoke] = useState('');

  useEffect(() => {
    const fetchJoke = async () => {
      const response = await fetch(
        'https://raw.githubusercontent.com/Czechitas-podklady-WEB/daweb-test/deploy/jokes.json',
      );
      const responseData = await response.json();
      setJoke(responseData[0]);
    };

    fetchJoke();
  }, []);

  const handleClick = () => {
    setLike(like + 1);
  };

  const handleClickDis = () => {
    setDislike(dislike + 1);
  };

  return (
    <>
      {joke === null ? (
        'Načítám vtip…'
      ) : (
        <div className="joke">
          <div className="joke__body">
            <div className="joke__user">
              <img className="user-avatar" src={userAvatar} />
              <p className="user-name">{userName}</p>
            </div>

            <p className="joke__text">{text}</p>
          </div>
          <div className="joke__likes">
            <button
              id="btn-up"
              className="btn-like btn-like--up"
              onClick={handleClick}
            ></button>
            <span id="likes-up" className="likes-count likes-count--up">
              {likes}
            </span>
            <button
              id="btn-down"
              className="btn-like btn-like--down"
              onClick={handleClickDis}
            ></button>
            <span id="likes-down" className="likes-count likes-count--down">
              {dislikes}
            </span>
          </div>
        </div>
      )}
    </>
  );
};
