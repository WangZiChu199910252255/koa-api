/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-02-14 14:35:57
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-03-02 16:08:11
 * @FilePath: /koa-api/app/router/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import koaRouter from 'koa-router'
import AdminController from '../controller/AdminController'
import IndexController from '../controller/IndexController'
import UploadController from '../controller/UploadController'
import UserController from '../controller/UserController'
import ClassController from '../controller/ClassController'
import HomeworkController from '../controller/HomeworkController'
import TeacherController from '../controller/TeacherController'
import StudentController from '../controller/StudentController'
import Api from '../controller/Api'
const router = new koaRouter({prefix:''})
router.post('/api',Api.api)
router.post('/addUser',UserController.addUser)
router.post('/updateUser/:username',UserController.updateUser)
// router.post('/addAdmin',AdminController.addAdmin)
// router.use(AuthMiddleware)
router.get('/',IndexController.index)
router.get('/admin/list',AdminController.getAdminList)
router.post('/classById',ClassController.getClassByClassId)
router.post('/studentClassById',ClassController.getStudentByClassId)
router.post('/homeworkIssue',HomeworkController.issueHomework)
router.post('/issueChoose',HomeworkController.issueChoose)
router.post('/getChoose',HomeworkController.getChoose)
router.get('/getChooseMax',HomeworkController.getChooseMax)
router.post('/getHomeworkByTeacherIdMax',HomeworkController.getHomeworkByTeacherIdMax)
router.post('/getChooseByGrouping',HomeworkController.getChooseByGrouping)
router.post('/getHomeworkByTeacherIdPage',HomeworkController.getHomeworkByTeacherIdPage)
router.post('/getHomeworkByClassId',HomeworkController.getHomeworkByClassId)
router.post('/getHomeworkByTeacherId',HomeworkController.getHomeworkByTeacherId)
router.post('/getClassListByTeacherId',TeacherController.getClassListByTeacherId)
router.put('/updateAdmin/:id',AdminController.updateAdmin)
router.delete('/deleteAdmin/:id',AdminController.deleteAdmin)
router.post('/upload',UploadController.upload)
router.post('/getUserByStudentId',StudentController.getUserByStudentId)
router.post('/getJobListByStudentId',StudentController.getJobListByStudentId)
router.post('/getStudentMax',StudentController.getStudentMax)
router.post('/getHomeworkByStudentIdPage',StudentController.getHomeworkByStudentIdPage)
router.post('/getJobByStudentIdHomeworkId',StudentController.getJobByStudentIdAndHomeworkId)
router.post('/getHomeworkByJobId',HomeworkController.getHomeworkByJobId)
router.post('/writingHomework',HomeworkController.writingHomework)




export default router