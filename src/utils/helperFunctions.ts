export function capitalizeFirstLetter(string: string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

export function phonenumberTransform(phoneNumber: number | string) {
	if (typeof phoneNumber === "number") {
		return phoneNumber;
	} else if (typeof phoneNumber === "string") {
		return +phoneNumber.replace(/\D/g, "").slice(1);
	}
}
