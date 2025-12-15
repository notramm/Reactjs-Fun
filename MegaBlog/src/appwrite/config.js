import conf from '../conf/conf.js';
import { Client, Account, ID, Databases, Storage, Query } from 'appwrite';

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.tablesDB.createRow({
            databaseId: conf.appwriteDatabaseId,
            tableId: conf.appwriteCollectionId,
            rowId: ID.unique(),
            slug,
            data: {
                title,
                content,
                featuredImage,
                status,
                userId,
            }
        });
        } catch (error) {
            console.log('Error creating post', error);
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            return await this.tablesDB.updateRow({
            databaseId: conf.appwriteDatabaseId,
            tableId: conf.appwriteCollectionId,
            slug,
            data: {
                title,
                content,
                featuredImage,
                status,
            }
        });
        } catch (error) {
            console.log('Error updating post', error);
        }
    }

    async deletePost(slug){
        try {
            await this.tablesDB.deleteRow({
            databaseId: conf.appwriteDatabaseId,
            tableId: conf.appwriteCollectionId,
            slug,
        });
        return true;
        } catch (error) {
            console.log('Error deleting post', error);
            return false;
        }
    }

    async getPost(slug){
        try {
            const posts = await this.databases.getRows({
            databaseId: conf.appwriteDatabaseId,
            tableId: conf.appwriteCollectionId,
            slug
        });
        return posts;
        } catch (error) {
            console.log('Error fetching posts', error);
            return false;
        }
    }

    async getPosts(queries = [Query.equal('status', 'active')]){
        try {
            return await this.databases.listRows({
            databaseId: conf.appwriteDatabaseId,
            tableId: conf.appwriteCollectionId,
            queries
        });
        } catch (error) {
            console.log('Error fetching posts', error);
            return false
        }
    }

    //file upload service
    async uploadFile(file){
        try {
            return await this.bucket.createFile({
            bucketId: conf.appwriteBucketId,
            fileId: ID.unique(),
            file
        });
        } catch (error) {
            console.log('Error uploading file', error);
            return false;
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile({
            bucketId: conf.appwriteBucketId,
            fileId
        });
        return true;
        } catch (error) {
            console.log('Error deleting file', error);
            return false;
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview({
            bucketId: conf.appwriteBucketId,
            fileId
        });
    }
}

const service = new Service();

export default service;