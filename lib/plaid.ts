import {Configuration,PlaidApi,PlaidEnvironments} from 'plaid'

const configuration = new Configuration({
    basePath : PlaidEnvironments.sandbox,
    baseOptions : {
       headers :  {
         'PLAID-CLIENT-ID' : "66d1c7a2785707001acfc11a",
         'PLAID-SECRET' : "aa0453dd7dae0aecb53c43f5801912",
       }
    }
});

export const plaidClient = new PlaidApi(configuration);