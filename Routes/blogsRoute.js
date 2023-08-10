const express = require('express');
const router = express.Router();
const verifyJwt = require('../middleware/verifyJwt')
const readBlog = require('../controllers/blogControllers/readBlog')
const writeBlog = require('../controllers/blogControllers/writeBlog');
const manageRoles = require('../middleware/manageRoles')
const deleteBlog = require('../controllers/blogControllers/deleteBlog');
const updateBlog = require('../controllers/blogControllers/updateBlog')
router.route('/')
     .get(verifyJwt,readBlog)
    .post(verifyJwt,manageRoles('POST'),writeBlog)
    .put(verifyJwt,manageRoles('PUT'),updateBlog)
    router.delete('/:id', verifyJwt, manageRoles('DELETE'), deleteBlog);

    module.exports = router
