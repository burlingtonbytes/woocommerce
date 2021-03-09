import { DeepPartial } from 'fishery';
import { Product } from './product';
import { ModelRegistry } from '../framework/model-registry';
export declare class SimpleProduct extends Product {
    constructor(partial?: DeepPartial<SimpleProduct>);
}
/**
 * Registers the simple product factory and adapters.
 *
 * @param {ModelRegistry} registry The registry to hold the model reference.
 */
export declare function registerSimpleProduct(registry: ModelRegistry): void;
