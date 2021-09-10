import { IPagination } from '../models/pagination';
import { IProduct } from '../models/product';

export const UNKNOWN_STRING = 'Unknown';
export const UNKNOWN_NUMBER = 0;
export const UNKNOWN_DECIMAL = 0.0;
export const UNKNOWN_URL = 'https://sample.com';

export const defaultProduct: IProduct = {
    id: 0,
    name: UNKNOWN_STRING,
    description: UNKNOWN_STRING,
    pictureUrl: UNKNOWN_URL,
    price: UNKNOWN_DECIMAL,
    productBrand: UNKNOWN_STRING,
    productType: UNKNOWN_STRING,
};

export const defaultPagination: IPagination = {
    pageIndex: 0,
    pageSize: 0,
    count: 0,
    data: [],
}
