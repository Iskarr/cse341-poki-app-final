const express = require('express');
const router = express.Router();
const { graphqlHTTP } = require('express-graphql');
const schema = require('../controllers/schema');

const loadUser = require('../middleware/loadUser');

router.use(
  '/',
  graphqlHTTP(async (req) => ({
    schema,
    graphiql: true,
    context: req.user,
  }))
);
router.use([loadUser]);

module.exports = router;
