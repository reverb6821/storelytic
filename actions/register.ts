'use server'

import bcrypt from 'bcryptjs'
import * as z from 'zod'

import { getUserByEmail } from '@/data/user'
import { db } from '@/lib/db'
import { sendVerificationEmail } from '@/lib/mail'
import { generateVerificationToken } from '@/lib/token'
import { RegisterSchema } from '@/schemas'

export const register = async(values: z.infer<typeof RegisterSchema>) => {
    const validateFields = RegisterSchema.safeParse(values)

    if(!validateFields.success) return {error: 'Invalids fields'}

    const { email, password, name } = validateFields.data
    const hashedPassword = await bcrypt.hash(password, 10)
    const existingUser = await getUserByEmail(email)

    if(existingUser) return {error: 'Email already in use!'}

    await db.user.create({
        data: {
            name,
            email,
            password: hashedPassword
        }
    })

    const verificationToken = await generateVerificationToken(email)
    await sendVerificationEmail(verificationToken.email, verificationToken.token)

    return { success: 'Confirmation email sent!'}
}