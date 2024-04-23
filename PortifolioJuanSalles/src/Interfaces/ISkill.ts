export interface ISkill {
    name: string;
    level: Level;
    description: string;
    icon: string;
}

enum Level{
    Junior = 1,
    Midlle = 2,
    Senior = 3
}