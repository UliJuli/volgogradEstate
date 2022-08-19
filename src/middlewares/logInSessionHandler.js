const { Wishlist } = require('../../db/models');

const logInSessionWrapper = async (req, res, next) => {
  const user = req.session?.user;
  if (user) {
    res.locals.user = user;
    if (!res.app.locals.userData[user.id]) {
      res.app.locals.userData[user.id] = {};
    }
    if (!res.app.locals.userData[user.id]?.wishlist) {
      const wishlist = await Wishlist.findAll({ where: { userId: user.id }, raw: true });
      res.app.locals.userData[user.id].wishlist = wishlist?.map((el) => el.advertisementId);
    }
  }

  const admin = req.session?.admin;
  if (admin) {
    res.locals.admin = admin;
  }

  next();
};

module.exports = logInSessionWrapper;
