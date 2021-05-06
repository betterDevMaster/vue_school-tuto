import mongoose, { Schema } from "mongoose"
import uniqueValidator from "mongoose-unique-validator"

const refreshTokens = new Schema({
	token: {
		type: String,
		required: true,
	},
})

const StudentSchema = new Schema(
	{
		firstName: {
			type: String,
			required: true,
			minlength: 1,
			trim: true,
		},
		lastName: {
			type: String,
			required: true,
			minlength: 1,
			trim: true,
			unique: true,
		},
		email: {
			type: String,
			required: true,
			minlength: 1,
			trim: true,
		},
		password: {
			type: String,
			required: true,
			minlength: 1,
		},
		mobileNumber: {
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
StudentSchema.plugin(uniqueValidator)

export default mongoose.model("student", StudentSchema)
