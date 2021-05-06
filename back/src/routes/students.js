import { Router } from "express"
import StudentController from "../controllers/StudentController"
import Authorize from "../middleware/Authorize"

const router = Router()

router.post("/students", StudentController.saveStudents)
router.get("/students", StudentController.getStudents)
router.get("/students/:id", StudentController.getStudent)
router.put("/students/:id", StudentController.updateStudent)
router.post("/students/:id/courses", StudentController.saveCourses)
router.get("/students/:id/courses", StudentController.getCourses)

export default router
