const getposts = {}

const requestpost = {
	type: "object",
	required: [
		"back_color",
		"inp_position",
		"inp_cmp_name",
		"inp_loc_restrict",
		"sel_pri_tag",
		"inp_ext_tags",
		"inp_anu_salary",
		"edt_desc",
		"edt_req",
		"edt_apply",
		"inp_apply_url_email",
		"inp_cmp_twitter",
		"inp_cmp_email",
		"inp_cmp_card",
		"inp_inv_addr",
		"inp_inv_notes_phone",
		"chk_paylater",
		"chk_cmp_logo",
		"chk_highlight_post_red",
		"chk_highlight_post_cmp_color",
		"chk_pin_post_7",
		"chk_pin_post_30",
	],
	properties: {
		back_color: {
			type: "string",
			errorMessage: {
				type: "Field 'back_color' should be a string",
			},
		},
		inp_position: {
			type: "string",
			errorMessage: {
				type: "Field 'inp_position' should be a string",
			},
		},
		inp_cmp_name: {
			type: "string",
			errorMessage: {
				type: "Field 'inp_cmp_name' should be a string",
			},
		},
		inp_loc_restrict: {
			type: "string",
			errorMessage: {
				type: "Field 'inp_loc_restrict' should be a string",
			},
		},
		sel_pri_tag: {
			type: "string",
			errorMessage: {
				type: "Field 'sel_pri_tag' should be a string",
			},
		},
		inp_ext_tags: {
			type: "array",
			errorMessage: {
				type: "Field 'inp_ext_tags' should be a array",
			},
		},
		inp_anu_salary: {
			type: "number",
			errorMessage: {
				type: "Field 'inp_anu_salary' should be a number",
			},
		},
		amount: {
			type: "number",
			errorMessage: {
				type: "Field 'amount' should be a number",
			},
		},
		edt_desc: {
			type: "string",
			errorMessage: {
				type: "Field 'edt_desc' should be a string",
			},
		},
		edt_req: {
			type: "string",
			errorMessage: {
				type: "Field 'edt_req' should be a string",
			},
		},
		edt_apply: {
			type: "string",
			errorMessage: {
				type: "Field 'edt_apply' should be a string",
			},
		},
		inp_apply_url_email: {
			type: "string",
			errorMessage: {
				type: "Field 'inp_apply_url_email' should be a string",
			},
		},
		inp_cmp_twitter: {
			type: "string",
			errorMessage: {
				type: "Field 'inp_cmp_twitter' should be a string",
			},
		},
		company_logo: {
			type: "string",
			errorMessage: {
				type: "Field 'company_logo' should be a string",
			},
		},
		inp_cmp_email: {
			type: "string",
			errorMessage: {
				type: "Field 'inp_cmp_email' should be a string",
			},
		},
		inp_cmp_card: {
			type: "string",
			errorMessage: {
				type: "Field 'inp_cmp_card' should be a string",
			},
		},
		inp_inv_addr: {
			type: "string",
			errorMessage: {
				type: "Field 'inp_inv_addr' should be a string",
			},
		},
		inp_inv_notes_phone: {
			type: "string",
			errorMessage: {
				type: "Field 'inp_inv_notes_phone' should be a string",
			},
		},
		chk_paylater: {
			type: "boolean",
			errorMessage: {
				type: "Field 'chk_paylater' should be a boolean",
			},
		},
		chk_cmp_logo: {
			type: "boolean",
			errorMessage: {
				type: "Field 'chk_cmp_logo' should be a boolean",
			},
		},
		chk_highlight_post_red: {
			type: "boolean",
			errorMessage: {
				type: "Field 'chk_highlight_post_red' should be a boolean",
			},
		},
		chk_highlight_post_cmp_color: {
			type: "boolean",
			errorMessage: {
				type: "Field 'chk_highlight_post_cmp_color' should be a boolean",
			},
		},
		chk_pin_post_7: {
			type: "boolean",
			errorMessage: {
				type: "Field 'chk_pin_post_7' should be a boolean",
			},
		},
		chk_pin_post_30: {
			type: "boolean",
			errorMessage: {
				type: "Field 'chk_pin_post_30' should be a boolean",
			},
		},
	},
}

export default {
	getposts,
	requestpost,
}
