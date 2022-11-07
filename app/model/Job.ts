import { BelongsTo, Column, ForeignKey, Model, Table } from "sequelize-typescript";
import Homework from "./Home_work";
import Student from "./Student";
@Table({
    tableName:"jobs",
    freezeTableName:true,
})
export default class Job extends Model{
    @ForeignKey(()=>Homework)
    @Column
    homeworks_id!: number;
    @BelongsTo(() => Homework)
    Homework!: Homework;
    @ForeignKey(()=>Student)
    @Column
    students_id!: number;
    @Column
    state!:number;
    @Column
    achievement!: number;
    @Column
    jobsdata?: string
}