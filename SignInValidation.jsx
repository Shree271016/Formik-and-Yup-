import *as Yup from 'yup'


export const SignInValidation = Yup.object({
name:Yup.string().min(3).required("please enter name"),
email:Yup.string().email("please Enter Valid email").required("Please Enter Valid email"),
password:Yup.string().min(5).required("please enter password"),
})
