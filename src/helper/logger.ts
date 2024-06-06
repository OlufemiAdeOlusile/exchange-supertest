import addContext from 'mochawesome/addContext';
import { Response } from 'supertest';


export const logResponseToReport = (context: Mocha.Context, response: Response) => {
    addContext(context, `Response: ${JSON.stringify(response.body, null, 4)}`);
};