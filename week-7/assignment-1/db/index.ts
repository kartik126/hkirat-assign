import mongoose, { Document, Model, Schema } from 'mongoose';

export interface UserDocument extends Document {
  username: string;
  password: string;
}

export interface TodoDocument extends Document {
  title: string;
  description: string;
  done: boolean;
  userId: string;
}

const userSchema: Schema<UserDocument> = new mongoose.Schema({
  username: String,
  password: String,
});

const todoSchema: Schema<TodoDocument> = new mongoose.Schema({
  title: String,
  description: String,
  done: Boolean,
  userId: String,
});

export const User: Model<UserDocument> = mongoose.model<UserDocument>('User', userSchema);
export const Todo: Model<TodoDocument> = mongoose.model<TodoDocument>('Todo', todoSchema);
