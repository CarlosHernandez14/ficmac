import Credentials from "next-auth/providers/credentials"
import { userByEmail } from "../actions/users/data"
import bcrypt from "bcryptjs"
 
const authConfig = { providers: [
    Credentials({
        async authorize(credentials){
            const user = await userByEmail(credentials.email)
            if(!user || !user.contrasena){
                return null
            }
            const passwordMatch = await bcrypt.compare(credentials.password, user.contrasena)
            if(passwordMatch){
                return user
            }
            return null
        }
    })
] }

export default authConfig