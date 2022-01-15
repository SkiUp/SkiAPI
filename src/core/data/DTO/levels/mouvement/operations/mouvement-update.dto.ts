import { MouvementCategory } from "@core/data/enum";

export interface MouvementUpdateDto{
    id: string;
    name: string;
    description: string;
    mouvementCategory: MouvementCategory;
    startLevelId: string;
}