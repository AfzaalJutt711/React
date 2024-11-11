import { Client, Account, ID } from 'appwrite'
import conf from './../conf/conf';

class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        const userAccount = await this.account.create(ID.unique(), email, password, name)
        try {

            if (userAccount) {
                return await this.account.createEmailPasswordSession(email, password)
            } else {
                return userAccount
            }

        } catch (error) {
            console.log("error while createAccount() :: appwrite", error)
        }
    }
    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            console.log('error while login() :: appwrite', error)
        }
    }
    async getCurrentUser() {
        try {
            return await this.account.get()
        } catch (error) {
            console.log('error while getCurrentUser :: appwrite', error)
        }
    }
    async logout() {
        try {
            await this.account.deleteSessions()
        } catch (error) {
            console.log("error while logout() :: appwrite", error)
        }
    }
}

const authService = new AuthService()

export default authService;