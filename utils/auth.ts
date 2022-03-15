import config from '../app/config';
import jwt, { JsonWebTokenError, JwtPayload, TokenExpiredError } from 'jsonwebtoken';
/**
 *生成身份返回token
 *
 * @param {*} data admin数据
 * @return {*} token
 */
function sign(data:any): any{
    return jwt.sign({admin:data},config.jwt.jwt_secret as string,{expiresIn:config.jwt.jwt_expire})
}
/**
 *验证token
 *
 * @param {string} token token值
 * @return {*}  {({admin:JwtPayload | string | null,error:TokenExpiredError | JsonWebTokenError | null})}
 */
function verify(token:string):{admin:JwtPayload | string | null,error:TokenExpiredError | JsonWebTokenError | null}{
    try{
        var decoded = jwt.verify(token,config.jwt.jwt_secret as string)
        return {
            admin:decoded,
            error:null
        }
    }catch(e){
        return {
            admin:null,
            error:e as TokenExpiredError | JsonWebTokenError | null
        }
    }
}
export{
    sign,
    verify
}