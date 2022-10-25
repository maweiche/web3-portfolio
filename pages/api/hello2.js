const axios = require('axios');
const key = 'ckey_da302f1c19694bdbbab1f7ae1ce';

// Chain : ChainID
const ethereumChainId = 1;
const polygonChainId = 137;
const bnbChainId = 56;
const fantomChainId = 250;
const avaxChainId = 43114;

// Test ETH address
const testAddressEth = 'demo.eth';

// Test NFT Contract Address (PUDGY PENGUINS)
const ppg_contract_address = '0xBd3531dA5CF5857e7CfAA92426877b022e612cf8';

// Test Block Height
const starting_block = 13000000;
const block_height = 13000000;

// Test Topic Hash
const topic_hash = '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef';

// Test txn hash
const txn_hash = '0x2b0b5e7a1e5d40f8b5bb7b2c0e7b8d2406e7c8c8b8b8b8b8b8b8b8b8b8b8b8b8b';

// Test Dexname
const dexname = 'uniswap-v2';

// Token contract addresses
const usdc_contract_address = '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48';

// usdc_pool_address
const usdc_pool_address = '0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc';


const getChangesInTokenHolders = async (address) => {

  try{
    const response = await axios.get(`https://api.covalenthq.com/v1/${ethereumChainId}/tokens/${ppg_contract_address}/token_holders_changes/?starting-block=${starting_block}&ending-block=latest/?key=${key}`);
    console.log(response.data.data.items);
    return response.data.data.items;
  } catch (error) {
    console.log(error);
  }
}

getChangesInTokenHolders();