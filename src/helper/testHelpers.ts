// testHelpers.ts
import { SuperTest, Test, Response } from 'supertest';

export function fetchDataFromAPI(api: SuperTest<Test>, endpoint: string, apiKey: string, queryParams: Record<string, string> = {}): Promise<Response> {
    return api.get(endpoint)
        .query({ access_key: apiKey, ...queryParams });
}