import type { FormData } from "./dataTypes";
import { object, array, string, number, ObjectSchema } from "yup";

export const formDataSchema: ObjectSchema<FormData> = object({
	phoneNumber: string()
		.required("should have phone")
		.matches(
			/^\+7\s\([0-9]{3}\)\s[0-9]{3}-[0-9]{2}-[0-9]{2}$/,
			"should match pattern +7 (999) 999-99-99"
		),
	email: string()
		.required("should have email")
		.email("should be a valid email example@domain.com"),
	nickname: string()
		.required("should have nickname")
		.max(30, "nickname max length is 30")
		.matches(/^[0-9a-zA-Z]*$/, "nickname should have only numbers and letters"),
	name: string()
		.required("should have name")
		.max(50, "name max length is 30")
		.matches(
			/^[A-Z][a-z]*$/,
			"name should have only letters and start with capital"
		),
	sername: string()
		.required("should have sername")
		.max(50, "sername max length is 30")
		.matches(
			/^[A-Z][a-z]*$/,
			"sername should have only letters and start with capital"
		),
	sex: string()
		.oneOf(["man", "woman"], "sex should be a man or woman")
		.required("should have sex"),
	advantages: array()
		.of(string().required("should have advantages items"))
		.required("should have advantages array"),
	checkbox: array()
		.of(number().required("should have checkbox item"))
		.required("should have checkbox"),
	radio: number().required("should have radio"),
	about: string()
		.required("should have about")
		.max(200, "about max length is 200"),
});
