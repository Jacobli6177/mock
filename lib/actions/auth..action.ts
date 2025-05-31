'use server';


export async function signUp(params: SignUpParams) {
    const { uid, name, email } = params;

    try {
        const userRecord = await db.collection('user').doc(uid).get();

        if(userRecord.exist){
            return {
                success: false,
                message: 'User already exists. Please sign in Instead.'
            }
        }
    } catch (e: any) {
        console.error('Error creating a user' , e)

        if (e.code === 'auth/email-already-exist'){
            return {
                success: false,
                message: 'This email already in use.'
            }
        }

        return {
            success: false,
            message: 'Failed to create an account'
        }
    }
}