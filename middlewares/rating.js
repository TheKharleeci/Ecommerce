const { ratingSchema } = require('../validation');

const validateRating = (req, res, next) => {
    try {
      const { error } = ratingSchema.validate(req.body);
      if (!error) {
          return next();
      }
      return res.status(400).json({ status: 'fail', message: error.message });
    } catch (error) {
      console.log(error)
      return res.status(500).json({ status: 'fail', message: 'Something went wrong.' });
    }
};

// const checkIfUserHasRated = async (req, res, next) => {
//     try {
//       const user = await fetchSingleProduct(req.params.productId);
//       if (selectedProduct) {
//         req.product = selectedProduct;
//         return next();
//       }
//       return res.status(404).json({ status: 'fail', message: 'product does not exist.' });
//     } catch (error) {
//       console.log(error)
//       return res.status(500).json({ status: 'fail', message: 'Something went wrong.' });
//     }
//   };

module.exports = {
    validateRating,
  };
