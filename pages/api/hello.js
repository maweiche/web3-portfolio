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

// Get Token Balance of an address on a specific chain
export const getTokenBalance = async (address) => {
  
  try{
    const response = await axios.get(`https://api.covalenthq.com/v1/${ethereumChainId}/address/${testAddressEth}/balances_v2/?key=${key}`);
    console.log(response.data.data.items);
    return response.data.data.items;
  } catch (error) {
    console.log(error);
  }
}

// getTokenBalance();

// Get Historic Portfolio Value over time
export const getHistoricPortfolio = async (address) => {
  
  try{
    const response = await axios.get(`https://api.covalenthq.com/v1/${ethereumChainId}/address/${testAddressEth}/portfolio_v2/?key=${key}`);
    console.log(response.data.data.items);
    return response.data.data.items;
  } catch (error) {
    console.log(error);
  }
}

// getHistoricPortfolio();

// Get ERC20 token transfers for address
export const getERC20Transfers = async (address) => {
    
    try{
      const response = await axios.get(`https://api.covalenthq.com/v1/${ethereumChainId}/address/${testAddressEth}/transfers_v2/?contract-address=${usdc_contract_address}/?key=${key}`);
      console.log(response.data.data.items);
      return response.data.data.items;
    } catch (error) {
      console.log(error);
    }
  }

// getERC20Transfers();

// Get Token Holders as of any block height
export const getTokenHolders = async (address) => {
      
      try{
        const response = await axios.get(`https://api.covalenthq.com/v1/${ethereumChainId}/tokens/${usdc_contract_address}/token_holders/?key=${key}`);
        console.log(response.data.data.items);
        return response.data.data.items;
      } catch (error) {
        console.log(error);
      }
    }

// getTokenHolders();

// Get Changes in token holders between two block height
export const getChangesInTokenHolders = async (address) => {

  try{
    const response = await axios.get(`https://api.covalenthq.com/v1/${ethereumChainId}/tokens/${usdc_contract_address}/token_holders_changes/?starting-block=${starting_block}&ending-block=latest/?key=${key}`);
    console.log(response.data.data.items);
    return response.data.data.items;
  } catch (error) {
    console.log(error);
  }
}

// getChangesInTokenHolders();

// Get NFT Token IDs for contract
export const getNFTTokenIDs = async (address) => {
  
    try{
      const response = await axios.get(`https://api.covalenthq.com/v1/${ethereumChainId}/tokens/${ppg_contract_address}/nft_token_ids/?key=${key}`);
      console.log(response.data.data.items);
      return response.data.data.items;
    } catch (error) {
      console.log(error);
    }
  }

// getNFTTokenIDs();

// Get NFT Transactions for contract
export const getNFTTransactions = async (address) => {
    
      try{
        const response = await axios.get(`https://api.covalenthq.com/v1/${ethereumChainId}/tokens/${ppg_contract_address}/nft_transactions/1/?key=${key}`);
        console.log(response.data.data.items);
        return response.data.data.items;
      } catch (error) {
        console.log(error);
      }
    }

// getNFTTransactions();

// Get NFT external metadata for contract
export const getNFTExternalMetadata = async (address) => {

  try{
    const response = await axios.get(`https://api.covalenthq.com/v1/${ethereumChainId}/tokens/${ppg_contract_address}/nft_metadata/?key=${key}`);
    console.log(response.data.data.items);
    return response.data.data.items;
  } catch (error) {
    console.log(error);
  }
}

// getNFTExternalMetadata();

//Get Transactions for address
export const getTransactions = async (address) => {
  
  try{
    const response = await axios.get(`https://api.covalenthq.com/v1/${ethereumChainId}/address/${testAddressEth}/transactions_v2/?key=${key}`);
    console.log(response.data.data.items);
    return response.data.data.items;
  } catch (error) {
    console.log(error);
  }
}

// getTransactions();

// Get A Transaction
export const getTransaction = async (address) => {
    
    try{
      const response = await axios.get(`https://api.covalenthq.com/v1/${ethereumChainId}/transaction_v2/${txn_hash}/?key=${key}`);
      console.log(response.data.data.items);
      return response.data.data.items;
    } catch (error) {
      console.log(error);
    }
  }

// getTransaction();

// Get A Block
export const getBlock = async (address) => {

  try{
    const response = await axios.get(`https://api.covalenthq.com/v1/${ethereumChainId}/block_v2/${block_height}/?key=${key}`);
    console.log(response.data.data.items);
    return response.data.data.items;
  } catch (error) {
    console.log(error);
  }
}

// getBlock();

// Get Block Heights
export const getBlockHeights = async (address) => {

  try{
    const response = await axios.get(`https://api.covalenthq.com/v1/${ethereumChainId}/block_v2/${block_height}/?key=${key}`);
    console.log(response.data.data.items);
    return response.data.data.items;
  } catch (error) {
    console.log(error);
  }
}

// getBlockHeights();

// Get Log Events by Contract Address from Starting Block to Latest Block (can subsitute latest block to specific block height)
export const getLogEvents = async (address) => {
  
  try{
    const response = await axios.get(`https://api.covalenthq.com/v1/${ethereumChainId}/events/address/${testAddressEth}/?starting-block=${starting_block}&ending-block=latest/?key=${key}`);
    console.log(response.data.data.items);
    return response.data.data.items;
  } catch (error) {
    console.log(error);
  }
}

// getLogEvents();

// Get Log Events by Topic Hash
export const getLogEventsByTopicHash = async (address) => {
  
  try{
    const response = await axios.get(`https://api.covalenthq.com/v1/${ethereumChainId}/events/topics/${topic_hash}/?starting-block=${starting_block}&ending-block=latest/?key=${key}`);
    console.log(response.data.data.items);
    return response.data.data.items;
  } catch (error) {
    console.log(error);
  }
}

// getLogEventsByTopicHash();

// Get all chains
export const getAllChains = async () => {

  try{
    const response = await axios.get(`https://api.covalenthq.com/v1/chains/?key=${key}`);
    console.log(response.data.data.items);
    return response.data.data.items;
  } catch (error) {
    console.log(error);
  }
}

getAllChains();

// Get all chain statuses
export const getAllChainStatuses = async () => {
  
  try{
    const response = await axios.get(`https://api.covalenthq.com/v1/chains/statuses/?key=${key}`);
    console.log(response.data.data.items);
    return response.data.data.items;
  } catch (error) {
    console.log(error);
  }
}

// getAllChainStatuses();

// Get xy=k pools
export const getXYKpools = async () => {

  try{
    const response = await axios.get(`https://api.covalenthq.com/v1/xyk/${dexname}/pools/?key=${key}`);
    console.log(response.data.data.items);
    return response.data.data.items;
  } catch (error) {
    console.log(error);
  }
}

// getXYKpools();

// Get xy=k pools by address
export const getXYKpoolsByAddress = async () => {

  try{
    const response = await axios.get(`https://api.covalenthq.com/v1/xyk/${dexname}/pools/address/${usdc_pool_address}/?key=${key}`);
    console.log(response.data.data.items);
    return response.data.data.items;
  } catch (error) {
    console.log(error);
  }
}

// getXYKpoolsByAddress();

// Get xy=k address exchange balances
export const getXYKaddressExchangeBalances = async () => {

  try{
    const response = await axios.get(`https://api.covalenthq.com/v1/${ethereumChainId}/xyk/${dexname}/balances/address/${testAddressEth}/?key=${key}`);
    console.log(response.data.data.items);
    return response.data.data.items;
  } catch (error) {
    console.log(error);
  }
}

// getXYKaddressExchangeBalances();


// Get xy=k network exchange tokens
export const getXYKnetworkExchangeTokens = async () => {

  try{
    const response = await axios.get(`https://api.covalenthq.com/v1/${ethereumChainId}/xyk/${dexname}/tokens/?key=${key}`);
    console.log(response.data.data.items);
    return response.data.data.items;
  } catch (error) {
    console.log(error);
  }
}

// getXYKnetworkExchangeTokens();

// Get xy=k supported DEXes
export const getXYKsupportedDEXes = async () => {

  try{
    const response = await axios.get(`https://api.covalenthq.com/v1/xyk/dexes/?key=${key}`);
    console.log(response.data.data.items);
    return response.data.data.items;
  } catch (error) {
    console.log(error);
  }
}

// getXYKsupportedDEXes();


// Get xy=k transactions for account address
export const getXYKtransactionsForAccountAddress = async () => {

  try{
    const response = await axios.get(`https://api.covalenthq.com/v1/${ethereumChainId}/xyk/${dexname}/transactions/address/${testAddressEth}/?key=${key}`);
    console.log(response.data.data.items);
    return response.data.data.items;
  } catch (error) {
    console.log(error);
  }
}

// getXYKtransactionsForAccountAddress();

// Get xy=k transactions for token address
export const getXYKtransactionsForTokenAddress = async () => {

  try{
    const response = await axios.get(`https://api.covalenthq.com/v1/${ethereumChainId}/xyk/${dexname}/transactions/token/${usdc_address}/?key=${key}`);
    console.log(response.data.data.items);
    return response.data.data.items;
  } catch (error) {
    console.log(error);
  }
}

// getXYKtransactionsForTokenAddress();

// Get xy=k transactions for exchange
export const getXYKtransactionsForExchange = async () => {

  try{
    const response = await axios.get(`https://api.covalenthq.com/v1/${ethereumChainId}/xyk/${dexname}/transactions/exchange/${dexname}/?key=${key}`);
    console.log(response.data.data.items);
    return response.data.data.items;
  } catch (error) {
    console.log(error);
  }
}

// getXYKtransactionsForExchange();

// Get xy=k ecosystem chart data
export const getXYKecosystemChartData = async () => {

  try{
    const response = await axios.get(`https://api.covalenthq.com/v1/xyk/ecosystem/?key=${key}`);
    console.log(response.data.data.items);
    return response.data.data.items;
  } catch (error) {
    console.log(error);
  }
}

// getXYKecosystemChartData();

// Get xy=k health data
export const getXYKhealthData = async () => {

  try{
    const response = await axios.get(`https://api.covalenthq.com/v1/${ethereumChainId}/xyk/health/?key=${key}`);
    console.log(response.data.data.items);
    return response.data.data.items;
  } catch (error) {
    console.log(error);
  }
}

// getXYKhealthData();



