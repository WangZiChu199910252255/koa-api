import { Column , Model, Table } from "sequelize-typescript";
@Table({
    tableName:"choose",
    freezeTableName:true,
})
export default class Choose extends Model{
    @Column
    title!:string;
    @Column
    options!: string;
    @Column
    grouping!: string;
    @Column
    answer!: string;
    @Column
    difficulty!:number;
}