import { MouvementCategory } from "../../../../enum";

export class MouvementUpdateDto{
    id: string;
    name: string;
    description: string;
    mouvementCategory: MouvementCategory;
    startLevelId: string;
}