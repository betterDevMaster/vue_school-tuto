// import fs from "fs-extra"
import StudentModel from "../models/Student";
import CourseModel from "../models/Course";
import TryCatchErrorDecorator from "../decorators/TryCatchErrorDecorator";
import PasswordService from "../services/PasswordService";
import ClientError from "../exeptions/ClientError";
// import { config } from "dotenv"
// import appConfig from "../config/app"
import randomize from "../utils/randomize";
import MailService from "../services/MailService";
// import Mailgun from "mailgun-js"

class StudentController {
    @TryCatchErrorDecorator
    static async saveStudents(req, res) {
        const student = await new StudentModel(req.body).save();
        const ret = await StudentModel.findOne({ _id: student._id });
        res.json(ret);
    }

    @TryCatchErrorDecorator
    static async getStudents(req, res) {
        const student = await StudentModel.find();
        res.json(student);
    }

    @TryCatchErrorDecorator
    static async getStudent(req, res) {
		var array = req.originalUrl.split('/');
        const student = await StudentModel.findOne({ _id: array[3] });
        res.json(student);
    }

    @TryCatchErrorDecorator
    static async updateStudent(req, res) {
        await StudentModel.findOneAndUpdate({ _id: req.body._id }, req.body);
        res.json({ status: true, message: "Current account has been updated." });
    }

	@TryCatchErrorDecorator
    static async saveCourses(req, res) {
        const course = await new CourseModel(req.body).save();
        const ret = await CourseModel.findOne({ _id: course._id });
        res.json(ret);
    }
	
    @TryCatchErrorDecorator
    static async getCourses(req, res) {
		console.log('getCourses: ---------- ', req.originalUrl)
		var array = req.originalUrl.split('/');
        const courses = await CourseModel.find({ studentId: array[3] });
        res.json(courses);
    }
}

export default StudentController;
