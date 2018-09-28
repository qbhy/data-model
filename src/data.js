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

    /**
     * 获取数据长度
     * @returns {number}
     */
    length() {
        if (this.data.length !== undefined) {
            return this.data.length;
        }

        let length = 0;
        for (let _ in this.data) {
            length++;
        }

        return length;
    }

    /**
     * 获取某字段，支持默认值
     * @param name
     * @param defaultValue
     * @returns {*|undefined}
     */
    get(name, defaultValue = undefined) {
        return this.data[name] || defaultValue;
    }

    /**
     * 是否存在某字段
     * @param name
     * @returns {boolean}
     */
    has(name) {
        return !!this.data[name];
    }

}

