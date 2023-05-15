import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

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
    video: Video;
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

export interface Video {
    thumbnail: string;
    link: string;
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

export interface HitpointInfo {
    icon: IconDefinition;
    color: string;
    valuePercentage: number;
}
