import propTypes from 'prop-types';

const ingredientPropType = propTypes.shape({
  _id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  type: propTypes.oneOf(['bun', 'main', 'sauce']).isRequired,
  proteins: propTypes.number.isRequired,
  fat: propTypes.number.isRequired,
  carbohydrates: propTypes.number.isRequired,
  calories: propTypes.number.isRequired,
  price: propTypes.number.isRequired,
  image: propTypes.string.isRequired,
  image_mobile: propTypes.string.isRequired,
  image_large: propTypes.string.isRequired,
  __v: propTypes.number.isRequired,
});

export { ingredientPropType };
