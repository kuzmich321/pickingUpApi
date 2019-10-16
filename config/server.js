module.exports = {
  APPLICATION_ID:
    process.env.APPLICATION_ID ||
    '2cb66408c74d7c65dee1dfd14ce2426b71c3e0be54d380580fcad12bae5f4221',
  SECRET:
    process.env.SECRET ||
    '16024dbad872a44dba3a4f1fdaea778d8a74d6e4848b96e08fde45b05dbbd471',
  CALLBACK_URL: process.env.CALLBACK_URL || 'http://localhost:3000'
};
