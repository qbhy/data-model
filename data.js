export default class DataClass {

    data = {};

    constructor(data = {}) {
        this.data = data;
    }

    /**
     * 初始化数据
     * @param data
     * @returns {self}
     */
    initialData(data) {
        this.data = data;
        return this;
    }

    /**
     * 返回原始数据
     */
    rawData() {
        return this.data;
    }

    /**
     * 设置某字段
     * @param name
     * @param value
     * @returns {self}
     */
    set(name, value) {
        this.data[name] = value;

        return this;
    }

}

