import { MouvementCategory } from "../../../enum";

export class MouvementDto{
    id: string;
    name: string;
    description: string;
    mouvementCategory: MouvementCategory;
    startLevelId: string;
}