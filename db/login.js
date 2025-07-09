const bcrypt = require('bcrypt');
const pool = require('./pool');

async function loginUser(username, password) {
    try {

        //Find username
        const checkUser = await pool.query ( 'SELECT * FROM users WHERE username = $1', [username]);

        //Fail case: Bad username
        if (checkUser.rows.length < 1) {
            return { success: false, message: 'Username or Password was incorrect'};
        }
        
        //Check Password
        const user = checkUser.rows[0];
        const passwordMatch = await bcrypt.compare(password, user.password_hash);

        //Fail Case: Bad Password
        if (passwordMatch == false){
            return { success: false, message: 'Username or Password was incorrect'};
        }
        else {
            delete user.password_hash; // Delete sensitive data!
            return { success: true, message: 'User logged in successfully', user}; 
        }
        //Catch Error
    } catch (error){
        console.error('Login error:', error);
        return { success: false, message: 'Server error during login' };
    }
}

module.exports = loginUser;