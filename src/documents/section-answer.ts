import { Document } from './document';

export interface SectionAnswer extends Document {
  answers?: string[];
  comments?: Record<string, string>; // {answerId: commentValue}
}
