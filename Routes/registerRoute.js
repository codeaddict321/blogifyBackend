const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../model/User');

router.post('/', async (req, res) => {
    const { username, password } = req.body;
    
    try {
        const securedPwd = await bcrypt.hash(password, 10);

        const duplicate = await User.findOne({ username: username });
        if (duplicate) {
            return res.status(409).json({ 'message': 'Username already exists' });
        }

        await User.create({ username: username, password: securedPwd,role:'user'}); // Assuming you have a User model with 'create' method
        
        res.status(201).json({ 'message': 'User Created' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ 'message': 'Internal Server Error' });
    }
});

module.exports = router;
