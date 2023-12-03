import jwt from 'jsonwebtoken';

const key = "KFLadinoBermudezDanielaLuisa0402";

function decryptToken(token) {
  //return jwt.verify(token, process.env.JWT_SECRET);
  //return jwt.verify(token, Buffer.from(key, "utf8").toString("base64"));
  return jwt.decode(token);
}

export default {
    decryptToken
};