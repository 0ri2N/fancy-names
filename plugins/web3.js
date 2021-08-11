import Web3 from 'web3';
import { PolyjuiceHttpProvider } from '@polyjuice-provider/web3';

export default function ({ $config }, inject) {

    const godwokenRpcUrl = $config.web3ProviderUrl;

    const providerConfig = {
        web3Url: godwokenRpcUrl,
        rollupTypeHash: $config.rollupTypeHash,
        ethAccountLockCodeHash: $config.ethAccountLockCodeHash,
    };

    const provider = new PolyjuiceHttpProvider(godwokenRpcUrl, providerConfig);
    
    const web3 = new Web3(provider);

    inject("web3", web3)
}
  