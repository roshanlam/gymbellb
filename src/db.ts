import { MongoClient } from 'mongodb';

export const connectDB = async () => {
    try {
        const client = new MongoClient('mongodb+srv://gymbell:ItsSafeAndLit24@cluster0.yg4q8go.mongodb.net/?retryWrites=true&w=majority');
        await client.connect();
        console.log('🛢️ Connected to MongoDB');
        return client;
    } catch (error) {
        console.error('⚠️ Error connecting to MongoDB', error);
        process.exit(1);
    }
};
