import { Context } from "koa";
/**
 * 统一处理成功返回
 * @param ctx 
 * @param data 返回的数据
 * @param msg 对应的信息
 * @param code 状态码
 */
function success(ctx: Context, data: any = [] , msg:string='success', code:number=0){
    ctx.body={
        code,
        msg,
        data
    }
}
/**
 *
 *统一处理失败返回
 * @param {Context} ctx 
 * @param {string} [msg='error'] 错误提示
 * @param {*} [data=[]] 扩展提示
 * @param {number} [code=1]  状态码
 */
function error(ctx: Context, msg:string='error', data: any = [] , code:number=1){
    ctx.body={
        code,
        msg,
        data
    }
}
export default{
    success,
    error
}