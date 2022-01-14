import { MouvementCategory } from "../../../../enum";

export class MouvementCreateDto {
    name: string;
    description: string;
    mouvementCategory: MouvementCategory;
    startLevelId: string;
}