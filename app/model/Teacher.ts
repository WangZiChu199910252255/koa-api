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
    // @HasMany(() => Homework)
    // Homeworks!:Homework[]
    @BelongsToMany(()=>Grade,()=>Teachers_grade)
    Grades!:Grade[]
}