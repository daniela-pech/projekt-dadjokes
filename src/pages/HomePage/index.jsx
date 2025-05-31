import './style.css';
import { useState, useEffect } from 'react';
import { Joke } from '../../components/Joke/Joke';

export const HomePage = () => {
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
    <div className="container">
      {joke === null ? (
        'Načítám vtip…'
      ) : (
        <Joke
          userAvatar={joke.avatar}
          userName={joke.name}
          text={joke.text}
          likes={joke.likes}
          dislikes={joke.dislikes}
        />
      )}
    </div>
  );
};
