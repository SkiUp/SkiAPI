import { MouvementCategory } from "../../../../enum";

export interface MouvementCreateDto {
    name: string;
    description: string;
    mouvementCategory: MouvementCategory;
    startLevelId: string;
}