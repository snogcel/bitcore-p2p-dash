delete global._bitcore // hack -- due to version differences with dash bitcore and npm bitcore, prevents duplicate bitcore warning
var bitcore = require('bitcore-lib-dash');
bitcore.P2P = require('./lib');

module.exports = bitcore.P2P;
