import koaRouter from 'koa-router'
import AdminController from '../controller/AdminController'
import IndexController from '../controller/IndexController'
import LoginController from '../controller/LoginController'
import UploadController from '../controller/UploadController'
import AuthMiddleware from '../middleware/AuthMiddleware'
import ClassController from '../controller/ClassController'
import HomeworkController from '../controller/HomeworkController'
import TeacherController from '../controller/TeacherController'
import StudentController from '../controller/StudentController'
const router = new koaRouter({prefix:'/admin'})
router.post('/login',LoginController.index)
router.post('/addAdmin',AdminController.addAdmin)
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