import * as z from 'zod'

export const LoginSchema = z.object({
    email: z.string().email({
        message: 'Email is required'
    }),
    password: z.string().min(8, {
        message: 'Password is required'
    })
})

export const RegisterSchema = z.object({
    name: z.string(),
    email: z.string().email({
        message: 'Email is required'
    }),
    password: z.string()
        .min(8, { message: 'Minimum of 6 characters required' })
        .regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, { message: "The password must contain at least one letter and one number" })
})

export const ResetSchema = z.object({
    email: z.string().email({
        message: 'Email is required'
    }),
})

export const NewPasswordSchema = z.object({
    password: z.string()
        .min(8, { message: 'Minimum of 6 characters required' })
        .regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, { message: "The password must contain at least one letter and one number" })
})
