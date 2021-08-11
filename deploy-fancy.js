require('dotenv').config();

const Web3 = require('web3');
const { PolyjuiceHttpProvider, PolyjuiceAccounts } = require("@polyjuice-provider/web3");

const CompiledContractArtifact = require(`./build/contracts/FancyNames.json`);

const polyjuiceConfig = {
    rollupTypeHash: process.env.ROLLUP_TYPE_HASH,
    ethAccountLockCodeHash: process.env.ETH_ACCOUNT_LOCK_CODE_HASH,
    web3Url: process.env.GODWOKEN_RPC_URL
};
  
const provider = new PolyjuiceHttpProvider(
    process.env.GODWOKEN_RPC_URL,
    polyjuiceConfig,
);

const web3 = new Web3(provider);

web3.eth.accounts = new PolyjuiceAccounts(polyjuiceConfig);
const account = web3.eth.accounts.wallet.add(process.env.ACCOUNT_PRIVATE_KEY);
web3.eth.Contract.setProvider(provider, web3.eth.accounts);

(async () => {
    console.log(`Using Ethereum address: ${account.address}`);

    const balance = BigInt(await web3.eth.getBalance(account.address));

    if (balance === 0n) {
        console.log(`Insufficient balance. Can't deploy contract. Please deposit funds to your Ethereum address: ${account.address}`);
        return;
    }

    console.log(`Deploying contract...`);

    const deployTx = new web3.eth.Contract(CompiledContractArtifact.abi).deploy({
        data: getBytecodeFromArtifact(CompiledContractArtifact),
    }).send({
        from: account.address,
        to: '0x' + new Array(40).fill(0).join(''),
        gas: 6000000,
        gasPrice: '0',
    });

    deployTx.on('transactionHash', hash => console.log(`Transaction hash: ${hash}`));

    const receipt = await deployTx;

    console.log(`Deployed Fancy-Names contract address: ${receipt.contractAddress}`);
})();

function getBytecodeFromArtifact(contractArtifact) {
    return contractArtifact.bytecode || contractArtifact.data?.bytecode?.object
}
