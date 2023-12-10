import jwt from 'jsonwebtoken';

const key = import.meta.env.VITE_JWT_SECRET;

function decryptToken(token) {
  return jwt.verify(token, key);
}

export default {
    decryptToken
};