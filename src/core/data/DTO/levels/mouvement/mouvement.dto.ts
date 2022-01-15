import { MouvementCategory } from "../../../enum";

export interface MouvementDto{
    id: string;
    name: string;
    description: string;
    mouvementCategory: MouvementCategory;
    startLevelId: string;
}