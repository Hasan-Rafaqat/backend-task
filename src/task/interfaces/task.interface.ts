import { Document } from 'mongoose';

export interface Task extends Document {
  name: string;
}
