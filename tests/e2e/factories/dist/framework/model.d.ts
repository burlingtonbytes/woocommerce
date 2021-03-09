import { DeepPartial } from 'fishery';
/**
 * A base class for all models.
 */
export declare abstract class Model {
    private _id;
    protected constructor(partial?: DeepPartial<any>);
    get id(): number;
    setID(id: number): void;
}
