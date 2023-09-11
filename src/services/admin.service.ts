
import { Admin } from '../models/admin/admin.model.ts'
import { issueTokens } from '../middlewares/auth.middleware.ts'
import { Token } from '../Types/Tokens.js'



export const login= async (email: string, password: string):Promise<Token> => {
    const admin = await Admin.findOne({
        email: email,
        password: password,
    })
    if (!admin){
        throw new Error('Account does not exist')
    }
    return issueTokens(admin)

}

export const signup = async (admin: unknown) => {

    const response = await Admin.create(admin);
    if (!response)
        throw new Error('Account could not be created')
    return response
}

export const renewTokens = async (admin: unknown):Promise<Token>  => {
    return issueTokens(admin)
}

export const aboutAdmin = async (id: string) => {
    const response = await Admin.findOne({ _id: id })
    if (!response)
        throw new Error('Account could not be found')
    return response
}

