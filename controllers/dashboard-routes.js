const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Post, User } = require('../models');

router.get('/', withAuth, (req, res) => {
    Post.findAll({
        where: { user_id: req.session.user_id },
        attributes: ['id', 'title', 'created_at']
    })
        .then(dbPostData => {
            const posts = dbPostData.map(post => post.get({ plain: true }));
            res.render('dashboard', { posts, loggedIn: true });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/new', withAuth, (req, res) => {
    res.render('new-post', { loggedIn: true });
});

