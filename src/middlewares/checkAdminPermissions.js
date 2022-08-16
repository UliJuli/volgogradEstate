function checkAdminPermissions(req, res, next) {
  next();
  return;
  if (!res.locals.admin) { res.locals.errStatus = 400; throw new Error('У Вас нет прав доступа на это действие'); }
  next();
}

module.exports = checkAdminPermissions;
