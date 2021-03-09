import { DeepPartial, Factory, BuildOptions } from 'fishery';
import { Model } from './model';
import { Adapter } from './adapter';
/**
 * A factory that can be used to create models using an adapter.
 */
export declare class ModelFactory<T extends Model, I = any> extends Factory<T, I> {
    private adapter;
    /**
     * Sets the adapter that the factory will use to create models.
     *
     * @param {Adapter|null} adapter
     */
    setAdapter(adapter: Adapter<T> | null): void;
    /**
     * Create an object using your factory
     *
     * @param {DeepPartial}  params The parameters that should populate the object.
     * @param {BuildOptions} options The options to be used in the builder.
     * @return {Promise} Resolves to the created model.
     */
    create(params?: DeepPartial<T>, options?: BuildOptions<T, I>): Promise<T>;
    /**
     * Create an array of objects using your factory
     *
     * @param {number}       number The number of models to create.
     * @param {DeepPartial}  params The parameters that should populate the object.
     * @param {BuildOptions} options The options to be used in the builder.
     * @return {Promise} Resolves to the created model.
     */
    createList(number: number, params?: DeepPartial<T>, options?: BuildOptions<T, I>): Promise<T[]>;
}
