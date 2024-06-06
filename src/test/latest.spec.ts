import { expect } from 'chai';
import supertest, {Response} from 'supertest';
import {logResponseToReport} from '@Helper/logger';
import {ExchangeRatesResponse} from '@Types/types';
import {fetchDataFromAPI} from '@Helper/testHelpers';
import {env} from '@Helper/miscellaneous';


const API = supertest(env.BASE_URL);
const API_KEY: string = env.API_KEY;
const INVALID_API_KEY = 'wrong_api_key';
const ENDPOINT = '/v1/latest';
describe('Exchange Rates API', function () {
    let response: Response;
    let responseData: ExchangeRatesResponse;

    describe('Error Handling', function() {
        before(async () => {
            response = await fetchDataFromAPI(API, ENDPOINT, INVALID_API_KEY);
            responseData = response.body as ExchangeRatesResponse;
        });

        it('should handle incorrect API keys with an error', function() {
            logResponseToReport(this, response);
            expect(response.status).to.equal(401);
            expect(responseData.error.code).to.equal('invalid_access_key');
            expect(responseData.error.message).to.equal('You have not supplied a valid API Access Key.');
        });
    });

    describe('Successful Responses', function() {
        before(async () => {
            response = await fetchDataFromAPI(API, ENDPOINT, API_KEY);
            responseData = response.body as ExchangeRatesResponse;
        });

        it('should return exchange rates for all currencies with base EUR', function() {
            logResponseToReport(this, response);
            expect(response.status).to.equal(200);
            expect(responseData).to.be.an('object');
            expect(responseData.success).to.equal(true);
            expect(responseData.base).to.contain('EUR');
        });

        it('should verify the rate type for each currency is a number', function() {
            logResponseToReport(this, response);
            Object.values(responseData.rates).forEach(rate => expect(rate).to.be.a('number'));
        });
    });

    describe('Filtering Currencies', function() {
        before(async () => {
            response = await fetchDataFromAPI(API, ENDPOINT, API_KEY, { symbols: 'USD,JPY' });
            responseData = response.body as ExchangeRatesResponse;
        });

        it('should return a response even with a limited number of currencies', function() {
            logResponseToReport(this, response);
            expect(responseData.rates).to.include.keys('USD', 'JPY');
            expect(responseData.rates).to.not.have.any.keys('GBP', 'AUD');
        });
    });
});
