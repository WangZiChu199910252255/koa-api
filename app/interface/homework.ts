interface ChooseType{
    title:string,
    options: string,
    grouping: string,
    answer: string,
    difficulty:number
}
interface PagingType{
    limit?:number,
    page:number
}
interface teacherId{ 
    teacherId:number
}
interface studentId{ 
    studentId:number
}
export { ChooseType , PagingType ,teacherId,studentId}