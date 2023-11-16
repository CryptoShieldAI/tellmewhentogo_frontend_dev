import { RegisterFormValuesType, RegisterFormErrorsType, FormValuesType } from "src/@core/interfaces";

export default function validateRegister(
    values: FormValuesType | RegisterFormValuesType
): RegisterFormErrorsType {
    const errors: RegisterFormErrorsType = {};

    //email
    if (!values.email) {
        errors.email = 'Required Email'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Invalid email address";
    }

    //password
    if (!values.password) {
        errors.password = "Required Password";
    } else if (values.password.length < 6) {
        errors.password = "Password must be at least 6 characters"
    }

    //password confirm
    if (values.passwordConfirm != values.password) {
        errors.passwordConfirm = "Password Confirm is not same"
    }

    return errors
}