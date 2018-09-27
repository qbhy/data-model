import DataClass from "./data";

export default class BaseModel extends DataClass {

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
