import { expect } from 'chai';
import supertest, {Response} from 'supertest';
import {SymbolsResponse} from '@Types/types';
import {logResponseToReport} from '@Helper/logger';
import {fetchDataFromAPI} from '@Helper/testHelpers';
import {env} from '@Helper/miscellaneous';


const API = supertest(env.BASE_URL);
const API_KEY: string = env.API_KEY;
const ENDPOINT = '/v1/symbols';
describe('Exchange Rates API Symbols', function (): void {
    let response: Response;
    let responseData: SymbolsResponse;

    before(async () => {
        response = await fetchDataFromAPI.call(this, API, ENDPOINT, API_KEY);
        responseData = response.body as SymbolsResponse;
    });

    it('should return a successful response', function() {
        logResponseToReport(this, response);
        expect(response.status).to.equal(200);
        expect(responseData.success).to.be.true;
    });

    it('should have the basic symbols in the response', function() {
        logResponseToReport(this, response);
        expect(responseData.symbols).to.have.property('USD');
        expect(responseData.symbols).to.have.property('EUR');
        expect(responseData.symbols).to.have.property('GBP');
    });

    it('should include at least 100 currency symbols', function() {
        logResponseToReport(this, response);
        expect(Object.keys(responseData.symbols).length).to.be.at.least(100);
    });

    it('should check for specific currency name correctness', function() {
        logResponseToReport(this, response);
        expect(responseData.symbols['EUR']).to.equal('Euro');
    });

});
