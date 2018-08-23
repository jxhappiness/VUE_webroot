// RSA 加密算法
const RSA = require('@/utils/jsencrypt');
const JSEncrypt = RSA.JSEncrypt.JSEncrypt;

/**
 * rsa 加密
 * @export
 * @param {String} publicKey 公钥
 * @param {String} str 要加密的数据
 * @returns 加密后的数据
 */
export function encrytRsa(publicKey, str) {
  var encrypt = new JSEncrypt();
  // encrypt.setPublicKey('-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCZKr5J0M/pdMfHSuTiYLxgFvkBNxZTP4jXO3IJ8VM55b4krhrKzjgvRrac12PaGQOQnifc2ZUFIN3fwXMfS79tFhSvwvOtF2VqhFSyozNjHzsnFlyhmeJVxtk5FDH3YqoTrOOfr/d/bOkhNhdyRu6QOb+cZ5flxye7ccWxoReGGQIDAQAB-----END PUBLIC KEY-----');
  // encrypt.setPublicKey('-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCQ+ok1ZNZAAZzWnmo6izPB9wlPR8gye/7tEKilCIFFdsig5Dc/OXtqGVK97wkmNyN1X9hnrP66kdRtsbGktyEB5e5pwT4pVEqbX1Zi3nIS83cpLJnvItyNYyW4eFZfRfDH1eNoHfl6qXK1aPknKHvtL7bUYHoqYmeHlJ12gNb/owIDAQAB-----END PUBLIC KEY-----');
  encrypt.setPublicKey(`-----BEGIN PUBLIC KEY-----${publicKey}-----END PUBLIC KEY-----`);
  var encryptData = encrypt.encryptLong(str); //加密后的字符串
  return encryptData;
}
