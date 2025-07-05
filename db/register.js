const bcrypt = require('bcrypt');
const pool = require('./pool');

async function registerUser(username, email, password) {
    try {

        // Verify Unique
        const check = await pool.query(
            'SELECT * FROM users  WHERE username = $1 OR email = $2', 
            [username, email]);
        
        if (check.rows.length > 0){
            return { success: false, message: 'Username or email already in use' };
        }

        // Hash password for security
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // insert User
        const result = await pool.query(
            'INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3) RETURNING user_id, username, email, created_at;',
            [username, email, hashedPassword]
        );

        return {
            success: true,
            message: 'User registered successfully',
            user: result.rows[0],
        };
    } catch (error){
        console.error('Registration error:', error);
        return { success: false, message: 'Server error during registration' };
    }
}

module.exports = registerUser;