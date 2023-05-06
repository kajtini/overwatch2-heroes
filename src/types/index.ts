export interface HeroBriefInfo {
    key: string;
    name: string;
    portrait: string;
    role: string;
}

export interface Ability {
    name: string;
    description: string;
    icon: string;
    video: { thumbnail: string; link: string };
}

interface HeroStory {
    summary: string;
    media: { type: string; link: string };
    chapters: { title: string; content: string; picture: string };
}

export interface Hitpoints {
    health: number;
    shields: number;
    armor: number;
    total: number;
}

export interface HeroDetailedInfo {
    abilities: Ability[];
    description: string;
    location: string;
    name: string;
    portrait: string;
    role: string;
    story: HeroStory;
    hitpoints: Hitpoints;
}
