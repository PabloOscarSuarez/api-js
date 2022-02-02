const {
  createLabel,
  getLabels,
} = require('../controllers/label')

const label = (router) => {
  router.post("/label", createLabel);
  router.get("/label", getLabels);
};

module.exports = label;
