import koaRouter from 'koa-router'
import AdminController from '../controller/AdminController'
import IndexController from '../controller/IndexController'
import LoginController from '../controller/LoginController'
import UploadController from '../controller/UploadController'
import AuthMiddleware from '../middleware/AuthMiddleware'
import ClassController from '../controller/ClassController'
import HomeworkController from '../controller/HomeworkController'
const router = new koaRouter({prefix:'/admin'})
router.post('/login',LoginController.index)
router.post('/addAdmin',AdminController.addAdmin)
router.get('/',IndexController.index)
router.get('/admin/list',AdminController.getAdminList)
router.post('/classById',ClassController.getClassByClassId)
router.post('/studentClassById',ClassController.getStudentByClassId)
router.post('/homeworkIssue',HomeworkController.issueHomework)
router.post('/getHomeworkByClassId',HomeworkController.getHomeworkByClassId)
// router.use(AuthMiddleware)
router.put('/updateAdmin/:id',AdminController.updateAdmin)
router.delete('/deleteAdmin/:id',AdminController.deleteAdmin)
router.post('/upload',UploadController.upload)




export default router