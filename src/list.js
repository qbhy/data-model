import DataClass from "./data";

export default class List extends DataClass {
    /**
     * @param {array} items
     * @param {BaseModel|undefined} dataClass
     */
    constructor(items, dataClass = undefined) {
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

    /**
     * 初始化列表数据
     * @param items
     * @return self
     */
    initialItems(items) {
        this.data = items;
        return this;
    }

}
