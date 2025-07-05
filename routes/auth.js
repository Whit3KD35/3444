const express = require('express');
const router = express.Router();
const registerUser = require('../db/register.js');

router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password){
        return res.status(400).json({ success: false, message: 'Missing fields'});

    }

    try {
        const result = await registerUser(username, email, password);
        if (result.success) {
            res.status(201).json(result);
        } else {
            res.status(409).json(result);
        }
    } catch (error){
        console.error('Registration failed: ', error);
        res.status(500).json({ success: false, message: 'Server error'});
    }
});

module.exports = router;