import { Document } from './document';

export enum HowAreYouSection {
  HowAreYou = 'How are you?',
  HowIsWork = 'How is work/school/home?',
  HowIsSport = 'How is sport/recreation?'
}

export interface HowAreYouQuestion {
  id: number;
  title: string;
  value: number | undefined;
  section: HowAreYouSection;
}

export interface HowAreYou extends Document {
  questions: HowAreYouQuestion[];
}
