import jwt from 'jsonwebtoken';

const key = import.meta.env.VITE_JWT_SECRET;

function decryptToken(token) {
  console.log(key);
  return jwt.verify(token, key);
}

export default {
    decryptToken
};