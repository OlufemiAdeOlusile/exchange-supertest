export interface error {
    code: string,
    message: string
}
export interface ExchangeRatesResponse {
    success: boolean;
    timestamp: number;
    base: string;
    date: string;
    rates: Record<string, number>;
    error: error
}

export interface SymbolsResponse {
    success: boolean;
    symbols: Record<string, string>;
}