import jwt from 'jsonwebtoken';

function decryptToken(token) {
  return jwt.verify(token, process.env.JWT_SECRET);
}

export default {
    decryptToken
};