import { Column, ForeignKey, Model, Table } from "sequelize-typescript";
import Grade from "./Grade";
import Teacher from "./Teacher";
@Table
export default class Teachers_grade extends Model{
    
    @ForeignKey(()=>Teacher)
    @Column
    teacherId!: number

    @ForeignKey(()=>Grade)
    @Column
    gradeId!: number
}