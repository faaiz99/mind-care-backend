import crypto from 'crypto'
import { Therapist } from '../models/therapist/therapist.model.ts'
import { issueTokens } from '../middlewares/auth.middleware.ts'
import { emailSender, resetAccountPassword } from '../utils/sendmail.util.ts'

export const changePassword = async (email: string, password: string) => {
    const client = await Therapist.findOneAndUpdate({ email: email }, { password: password })
    if (!client)
        throw new Error('Account password cannot be changed')
    return client
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const updateProfile = async (therapist: any) => {
    //A therapist profile already exists
    const filter = therapist.email;
    const response = await Therapist.findOneAndUpdate(filter, therapist, {
        returnOriginal: false
    })
    if (!response)
        throw new Error('Therapist Profile could not be updated')
    return response
}
export const enternewPassword = async (email: string, password: string) => {
    const response = await Therapist.findOneAndUpdate({ email: email }, { password: password })
    if (!response)
        throw new Error('Account Password could not be Changed')
    return response
}
export const resetPassword = async (email: string) => {
    const response = await Therapist.findOne({
        email: email
    })

    if (!response)
        throw new Error('Account does not exist')
    const token = crypto.randomBytes(32).toString("hex")
    const role = 'therapist'
    resetAccountPassword(email, token, role)
    return response
}
export const verifyAccount = async (email:string) => {
    const response = await Therapist.findOneAndUpdate({
        email: email,
    }, {
        verifiedAccount: true
    }, {
        new: true
    })

    if (response == undefined || response == null)
        throw new Error('Account could not be verified')
    return response
}
export const sendverificationEmail = async (email:string) => {
    const role = 'therapist' // static
    const token = crypto.randomBytes(32).toString("hex")
    emailSender(email, token, role)
}
export const login = async (email: string, password: string) => {
        // check existance by email
        const exists = await Therapist.exists({
            email: email
        })
        // email exists
        //console.log('Email exists? ', exists)
        if (exists == null || exists == undefined) {
            throw new Error('Account does not exists')
        }
    
        // get therapist details if password is correct
        const client = await Therapist.findOne({
            email: email,
            password: password,
        })
        // delete client?.password
        // setting password to undefined for security purposes
        if (!client)
            throw new Error('Incorrect Password')
    
        return issueTokens(client)

}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const signup = async (therapist:any) => {
    // check existance by email
    const exists = await Therapist.exists({
        email: therapist.email
    })
    // email exists
    //console.log('Email exists? ', exists)
    if (exists != null || exists != undefined) {
        throw new Error('email already in database')
    }

    const response = await Therapist.create(therapist);
    if(!response)
        throw new Error('account could not be created')

    return response

}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const renewTokens = async (therapist:unknown) => {
    return issueTokens(therapist)

}
export const getTherapists = async () => {
    const response = await Therapist.find({})
    if(!response)
        throw new Error('Therapists not found')
    return response
}
export const getTherapistById = async (id:string) => {
    const response =  await Therapist.find({ _id:id })
    if(!response)
        throw new Error('Therapist not found')
    return response
}




