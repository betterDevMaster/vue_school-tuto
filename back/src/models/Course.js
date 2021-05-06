import mongoose, { Schema } from "mongoose"
import uniqueValidator from "mongoose-unique-validator"

const refreshTokens = new Schema({
	token: {
		type: String,
		required: true,
	},
})

const CourseSchema = new Schema(
	{
		studentId: {
			type: String,
			required: true,
			minlength: 1,
			trim: true,
		},
		name: {
			type: String,
			required: true,
			minlength: 1,
			trim: true,
			unique: true,
		},
		lastName: {
			type: String,
			required: true,
			minlength: 1,
			trim: true,
		},
		refreshTokens: [refreshTokens],
	},
	{
		timestamps: true,
	},
)

mongoose.set("useCreateIndex", true)
CourseSchema.plugin(uniqueValidator)

export default mongoose.model("course", CourseSchema)
