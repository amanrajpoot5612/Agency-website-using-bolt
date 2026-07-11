import mongoose from 'mongoose';

const globalWithMongoose = globalThis as typeof globalThis & {
  mongooseConnection?: Promise<typeof mongoose>;
};

export function connectDatabase() {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error('MONGODB_URI is not configured.');

  if (!globalWithMongoose.mongooseConnection) {
    globalWithMongoose.mongooseConnection = mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5_000,
      maxPoolSize: 5,
    }).catch((error) => {
      globalWithMongoose.mongooseConnection = undefined;
      throw error;
    });
  }

  return globalWithMongoose.mongooseConnection;
}
