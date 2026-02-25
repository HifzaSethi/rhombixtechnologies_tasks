module.exports = function (req, res, next) {
  console.log("USER FROM TOKEN:", req.user);
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Access denied. Admin only." });
  }
  next();
};
