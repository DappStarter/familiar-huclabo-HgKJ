require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena fog sugar noodle ribbon remember attitude gloom glide flat that'; 
let testAccounts = [
"0x978e2a7cab3c9f497b9b01ca22493c7fe47112e7984f5998e220ea297c5a2983",
"0xfac81d1265c1251bc78e94a62c0eaa21d939fd97780c5ba7627c1e42c14e855c",
"0x95f5db96c9968e43977383bc9114d77bba707c45fac847913fa52c6fbdafcc70",
"0xfb732439cd8d87287df7687c76792be1eba3bab78a668eff269f6eac28b8bb28",
"0xd88b750b8df7c31d01d348f6500cd2f7295d9588ff04ddfe3d82580848822426",
"0x379e085a8854a51267983181dca5fe7cad5609670b9998766402a94650017cf3",
"0x68ee21674f571b3005d769cf790aeb2e419ee0566af2dcbec344514af3e69b56",
"0x430161bc7e01fa8ba52efae6fd5279f47488fb343fba1d2194ea188b74c78d3c",
"0xa0dd6b35a1b8348e42779b3f88e7d67c63dbf9352ac7b7f27cb5b9321e4237b6",
"0xe7e2a711ac594407a6ee65c2ff8312d547480bea8fbe76df24265839f778b99b"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


