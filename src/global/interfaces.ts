export interface CelebrityStory {
  data: Celebrity;
  viewed: boolean;
}

export interface Celebrity {
  name: string;
  realName?: string;
  socials: Social[];
  image: string;
  posts?: Post[];
}

export interface Social {
  name: 'twitter' | 'tiktok' | 'facebook' | 'instagram' | 'youtube';
  link: string;
}

export interface Post {
  platform: 'twitter' | 'tiktok' | 'facebook' | 'instagram' | 'youtube';
  link: string;
  date: string;
  data: string;
}
