export interface CelebrityStory {
  data: Celebrity;
  viewed: boolean;
}

export interface Celebrity {
  name: string;
  realName?: string;
  socials: Social[];
  image: string;
}

export interface Social {}
