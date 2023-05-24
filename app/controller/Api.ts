/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-03-02 16:00:55
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-03-16 18:05:22
 * @FilePath: /koa-api/app/controller/Api.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Context } from "koa";
import response from "../../utils/response";
import validate from "../../utils/validate"
import { Rules } from "async-validator";
import axios from 'axios'
// import { Configuration, OpenAIApi } from "openai";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: "Bearer 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",
});
const openai = new OpenAIApi(configuration);
import fs from 'fs'
class Api{
    async api(ctx: Context){
        const rules:Rules = {
            data:[
                {
                    type: "string",
                    required: true,
                    message: "data不能为空"
                }
            ]
        }
        const {data,error} = await validate<{data:string}>(ctx,rules)
        if(error !== null){
            return response.error(ctx,error)
        }
        // try {
        //     const res = await axios.post('https://api.openai.com/v1/chat/completions',{
        //         "model": "gpt-3.5-turbo",
        //         "messages": [{"role": "user", "content": data.data }],
        //     },{
        //         headers:{
        //             "Authorization":"Bearer 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"
        //         }
        //     })
        //     console.log(res.data)
        //     response.success(ctx,{res:res.data},"获取成功")
        // } catch (error) {
        //     console.log(error,"error")
        // }
        try{
            console.log(data)
            console.log('------------');
            const completion = await openai.createChatCompletion({
                model: "gpt-3.5-turbo",
                messages: [{role: "user", content: data.data}],
              });
            console.log('------------');
            console.log(completion.data.choices[0].message)
            console.log('------------');
            response.success(ctx,{res:completion.data.choices[0].message},"获取成功")
        }catch(e){
            console.log(e)
            console.log('------------');
        }

       

  
        // const configuration = new Configuration({
        // apiKey: process.env.OPENAI_API_KEY,
        // });
        // const openai = new OpenAIApi(configuration);
        // const response = await openai.createCompletion({
        // model: "text-curie-001",
        // prompt: "Say this is a test",
        // max_tokens: 7,
        // temperature: 0,
        // });
    }
}
export default new Api