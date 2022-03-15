import { BelongsToMany, Column, HasMany, Model, Table } from "sequelize-typescript";
import Home_work from "./Home_work";
import Student from "./Student";
import Teacher from "./Teacher";
import Teachers_grade from "./Teachers_grade";
@Table
export default class Grade extends Model{
    @Column
    class_id!: number;
    @Column
    class_name!: string;
    @BelongsToMany(()=>Teacher,()=>Teachers_grade)
    Teachers!:Teacher[]
    @HasMany(() => Student)
    Students!: Student[]
    @HasMany(() => Home_work)
    HomeWorks!: Home_work[]
}