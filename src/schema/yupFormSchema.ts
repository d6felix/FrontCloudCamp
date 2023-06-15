import type { FormData } from "./dataTypes";
import { object, array, string, number, ObjectSchema } from "yup";

export const formDataSchema: ObjectSchema<FormData> = object({
	phoneNumber: number()
		.required("Should have phone number.")
		.typeError("Should be a valid phone number.")
		.positive("Should be a valid phone number.")
		.integer("Should be a valid phone number.")
		.max(9999999999, "Should have 10 digits.")
		.min(1000000000, "Should have 10 digits."),
	email: string()
		.required("Should have email.")
		.email("Should be a valid email: example@domain.com."),
	nickname: string()
		.required("Should have nickname.")
		.max(30, "Nickname max length is 30.")
		.matches(
			/^[0-9a-zA-Z]*$/,
			"Nickname should have only numbers and letters."
		),
	name: string()
		.required("Should have name.")
		.max(50, "Name max length is 30.")
		.matches(
			/^[A-Z][a-z]*$/,
			"Name should have only letters and start with capital."
		),
	surname: string()
		.required("Should have surname.")
		.max(50, "Surname max length is 30.")
		.matches(
			/^[A-Z][a-z]*$/,
			"Surname should have only letters and start with capital."
		),
	sex: string()
		.oneOf(["man", "woman"], "Sex should be a man or woman.")
		.required("Should have sex."),
	advantages: array()
		.of(string().required("Should have advantages items."))
		.required("Should have advantages array."),
	checkbox: array()
		.of(number().required("Should have checkbox item."))
		.required("Should have checkbox."),
	radio: number().required("Should have radio."),
	about: string()
		.required("Should have about.")
		.max(200, "About max length is 200."),
});
