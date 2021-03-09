import { Model } from '../framework/model';
import { DeepPartial } from 'fishery';
/**
 * The base class for all product types.
 */
export declare abstract class Product extends Model {
    readonly name: string;
    readonly regularPrice: string;
    protected constructor(partial?: DeepPartial<Product>);
}
