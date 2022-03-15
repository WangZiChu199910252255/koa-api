import { BelongsTo, BelongsToMany, Column, ForeignKey, Model, Table } from "sequelize-typescript";
import Grade from "./Grade";
import Home_work from "./Home_work";
import Job from "./Job";
@Table
export default class Student extends Model{
    @Column
    name!: string;
    @Column
    password!: string;
    @Column
    username!: string;
    @ForeignKey(() => Grade)
    @Column
    grades_id!: number;
    @BelongsTo(() => Grade)
    Grade!: Grade
    @BelongsToMany(()=>Home_work,()=>Job)
    Homeworks?:Home_work[]
}