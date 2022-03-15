import { BelongsTo, BelongsToMany, Column, ForeignKey, Model, Table } from "sequelize-typescript";
import Grade from "./Grade";
import Student from "./Student";
import Job from './Job'
import Teacher from "./Teacher";
@Table
export default class Home_work extends Model{
    @ForeignKey(() => Grade)
    @Column
    class_id!: number;
    @BelongsTo(() => Grade)
    Grade!: Grade

    @Column
    homework_data!: string;

    @ForeignKey(() => Teacher)
    @Column
    teacher_id!:number;
    @BelongsTo(() => Teacher)
    Teacher!: Teacher
    @BelongsToMany(()=>Student,()=>Job)
    Students?:Student[]
}