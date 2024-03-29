/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-02-14 14:35:57
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-02-14 17:30:37
 * @FilePath: /koa-api/app/model/Teacher.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { BelongsToMany, Column, HasMany, Model, Table } from "sequelize-typescript";
import Grade from "./Grade";
import Homework from "./Home_work";
import Teachers_grade from "./Teachers_grade";
@Table
export default class Teacher extends Model{
    @Column
    name!: string;
    @Column
    password!: string;
    @Column
    username!: string;
    @Column
    discipline?: string;
    // @HasMany(() => Homework)
    // Homeworks!:Homework[]
    @BelongsToMany(()=>Grade,()=>Teachers_grade)
    Grades!:Grade[]
}

