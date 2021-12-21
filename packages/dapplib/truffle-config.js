require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install indoor olympic seed curve rare remind history imitate prison flush skirt'; 
let testAccounts = [
"0xbe943aeaf85253d275d6357cdf9e6c321464440356d24fa4739982f2517c9a4c",
"0x708399e342a4a9cf00896478ca26763e877cc40426778f614ddcb3d9979fd856",
"0x6850512b3711901b91706150b00a36eabf812cf4dc7d5e29d739f13305fb6bc7",
"0xba251286436a22cd1460d6249ce43208163f9f776401a3594fb45e88a9d9e8e8",
"0xc890480ee6235649bc0206bfc6b914199857d27de75909acd0bca292863ec8b6",
"0xd00763fa049bc7b1308bac592a9214adc8675c0cc06161cac468e9980d86a26e",
"0x2dbc39baf7ff0dbf378cb343c7b940611b1ea72fbf912c6476d1b2f7dbcb934d",
"0x870897af4920a9e2833c5776a600e6bbab5c85c1f178f7cb336ee54c2de2e004",
"0x1ed71705336c5222736b768888df7cf847c9f401871a4555d56dbb61f9c22845",
"0x513c35f81b3e028c0b4e6907eb739c3fab785ff8d3a08cc3338a77b6f3ea668d"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

