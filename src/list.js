import DataClass from "./data";

export default class List extends DataClass {
    /**
     * @param {array} items
     * @param {BaseModel} dataClass
     */
    constructor(items, dataClass) {
        if (items instanceof Pagination) {
            items = items.items();
        }

        if (dataClass instanceof BaseModel) {
            items = items.map(item => dataClass.initialData(item));
        }

        super(items);
    }


    /**
     * 遍历每个 item
     * @param callback
     * @returns {[]}
     */
    map(callback) {
        return this.data.map(callback);
    }

}
