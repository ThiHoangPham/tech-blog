const router = require('express').Rounter();

const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/post', postRoutes);
router.use('/comments', commentRoutes);

module.exports = rounter;