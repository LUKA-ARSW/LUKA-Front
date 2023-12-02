import base64url from 'base64url';

function decryptToken(token) {
  //return jwt.verify(token, process.env.JWT_SECRET);
  return verify(token, process.env.JWT_SECRET).payload;
}

function verify(token, secretKey){
  const [headerEncoded, payloadEncoded, signatureEncoded] = token.split('.');

  const header = JSON.parse(base64url.decode(headerEncoded));
  const payload = JSON.parse(base64url.decode(payloadEncoded));
  const signature = base64url.toBuffer(signatureEncoded);

  const signingString = `${headerEncoded}.${payloadEncoded}`;

  const expectedSignature = crypto.createHmac('sha256', secretKey)
    .update(signingString)
    .digest();

  const isSignatureValid = crypto.timingSafeEqual(signature, expectedSignature);

  if (!isSignatureValid) {
    throw new Error('Invalid signature');
  }

  return {header, payload};
}

export default {
    decryptToken
};