import React from 'react';
import PropTypes from 'prop-types';

function Food({ name, picture, rating})
{
  return (
  <div>
    <h2>I love {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name} />
  </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: '김치',
    image: 'https://th.bing.com/th/id/OIP.QKNL3H-b8pGMgfg77Ig8BAHaE8?pid=ImgDet&rs=1',
    rating: 2,
  },
  {

    id: 2,
    name: '삼겹살',
    image: 'https://th.bing.com/th/id/R.859a34057883e5a7f74499a4a83e278b?rik=BDIILwIK8p8Iug&riu=http%3a%2f%2fzenkimchi.com%2fwp-content%2fuploads%2f2014%2f03%2fSamgyeopsal.jpg&ehk=ciAKQbpmU2xfEwrfx3M5JKMb7XwNhW6yWRSqESQ7R4M%3d&risl=&pid=ImgRaw&r=0',
    rating: 4.9,
  },
  {
    id: 3,
    name: '비빔밥',
    image: 'https://www.thespruceeats.com/thmb/4Dp-1foTVieumGmhq5f8NJyeESw=/3714x2476/filters:fill(auto,1)/classic-korean-bibimbap-recipe-2118765-hero-01-091c0e0f8c20426d8f70747955efa61d.jpg',
    rating: 4.3,
  },
  {
    id: 4,
    name: '돈까스',
    image: 'https://funshop.akamaized.net/products/0000076768/vs_image800.jpg?1627674240',
    rating: 4.37,
  },
  {
    id: 5,
    name: '김밥',
    image: 'https://th.bing.com/th/id/OIP.d1dFi6Q5rQnkJoWTx5zQCAHaFb?pid=ImgDet&rs=1',
    rating: 3.793
  },
];

function App() 
{
  return ( 
    <div>
      <h1>Hi</h1>
      {foodILike.map( dish => (<Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>))}
    </div>
  );
}

Food.propTypes = 
{
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,

};
export default App;