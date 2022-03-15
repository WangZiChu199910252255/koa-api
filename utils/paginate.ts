import { Model } from "sequelize-typescript"

/**
 *
 *分页函数
 * @template T
 * @param {T} data  数据
 * @param {number} [currentPage=1]  页码
 * @param {number} [total=0]    总数据条数
 * @param {number} [limit=15]   每页多少条数据
 * @return {*} 
 */
function paginate<T extends Model[]>(data:T,currentPage:number=1,total:number=0,limit:number=15){
    return{
        data,
        currentPage,
        total,
        totalPage:Math.ceil(total/limit),
        limit
    }
}
export default paginate