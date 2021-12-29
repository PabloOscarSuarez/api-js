const user = (router) => {
  router.get("/users", (req, res) => {
    res.send({ success: true });
  });
};

module.exports = user;
