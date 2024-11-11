import { Client, Databases, Storage, ID } from "appwrite";
import conf from './../conf/conf'

class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log("error while createPost() :: appwrite", error)
        }
    }
    async deletePost(slug) {
        try {
            return await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log('error while deletePost() :: appwrite', error)
        }
    }
    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("error while getPost() :: appwrite", error)
        }
    }
    async getPosts() {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId
            )
        } catch (error) {
            console.log("error while getPosts() :: appwrite", error)
        }
    }

    // storage
    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("error while uploadFile() :: appwrite", error)
        }
    }
    async deleteFile(fileID) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                fileID
            )
        } catch (error) {
            console.log("error while deleteFile() :: appwrite", error)
        }
    }

    getFilePreview(fileID) {
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileID
        )
    }
}

const service = new Service()

export default service;

