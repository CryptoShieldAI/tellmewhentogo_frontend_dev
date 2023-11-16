import { useState } from "react";
import { FormErrorsType, FormEventType, FormTouchedType, FormValidateFunctionType, FormValuesType } from "../interfaces";

type SubmitFunctionType = () => void | Promise<void>

export default function useFormValidation(
    values: FormValuesType,
    validate: FormValidateFunctionType,
    submit: SubmitFunctionType
) {
    const [touched, setTouched] = useState<FormTouchedType>({})
    const [errors, setErrors] = useState<FormErrorsType>({})

    const handleSubmit = async (
        e: FormEventType
    ) => {
        e.preventDefault();
        const validationErrors = validate(values);
        const noErrors = Object.keys(validationErrors).length === 0;
        if (noErrors) {
            await submit();
        } else {
            setErrors(validationErrors)
            let forceTouched = {}
            Object.keys(values).map((value) => {
                forceTouched = { ...forceTouched, [value]: true };
            })
            setTouched(forceTouched)
        }
    }


    return { touched, errors, handleSubmit }
}