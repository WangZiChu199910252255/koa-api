import { Column, Model, Table } from "sequelize-typescript";
@Table
export default class Admin extends Model{
    @Column
    user!: string;
    @Column
    name!: string;
    @Column
    password!: string;
}