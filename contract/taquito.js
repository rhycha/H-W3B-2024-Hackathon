const { TezosToolkit } = require('@taquito/taquito');
const { InMemorySigner } = require('@taquito/signer');

const tezos = new TezosToolkit('https://YOUR_TEZOS_NODE_URL');

// Use the private key of the account to interact with the contract
const signer = new InMemorySigner('YOUR_PRIVATE_KEY');
tezos.setProvider({ signer });

const contractAddress = 'YOUR_CONTRACT_ADDRESS';

async function callContractEntryPoint() {
  try {
    const contract = await tezos.contract.at(contractAddress);
    const operation = await contract.methods.YOUR_ENTRY_POINT(parameters).send();
    await operation.confirmation();
    console.log('Operation successful:', operation.hash);
  } catch (error) {
    console.error('Error:', error);
  }
}

callContractEntryPoint();
