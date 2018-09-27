import BaseModel from "./model";

export default class Pagination extends BaseModel {

    constructor(props, dataClass) {
        props.list = new List(props.list, dataClass);

        super(props);
    }

    /**
     * 获取 list
     * @returns {*}
     */
    list() {
        return this.get('list');
    }

    /**
     * 总数量
     * @returns {number}
     */
    totalPage() {
        return this.get('total', 0);
    }

    /**
     * 获取当前页数
     * @returns {number}
     */
    currentPage() {
        return this.get('page', 0);
    }

    /**
     * 获取每页多少条数据
     * @returns {number}
     */
    perPage() {
        return this.get('per_page', 0);
    }

    /**
     * 是否还有下一页
     * @returns {boolean}
     */
    hasNextPage() {
        return this.currentPage() * this.perPage() <= this.totalPage();
    }

}