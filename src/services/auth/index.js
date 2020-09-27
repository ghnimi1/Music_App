import { authUrl, registerUrl,tokenUrl} from '../urls/index';
import { authInstance, globalInstance } from '../tools/index';

export async function authenticate(body) {
    try {
        const response = await authInstance.post(
            authUrl(),
            body,
            {}
        )
        console.log('res', response);
        return response
    } catch (error) {
        console.log('error', error);
        return error
    }

}

export async function register(body) {
    try {
        const response = await authInstance.post(
            registerUrl(),
            body,
            {}
        )
        console.log('res', response);
        return response
    } catch (error) {
        console.log('error', error);
        return error
    }

}

 export async function tokenlogin() {
    try {
        const response = await globalInstance.post(
            tokenUrl(),
            {},
            {}
        )
        console.log('res', response);
        return response
    } catch (error) {
        console.log('error', error);
        return error
    }

} 