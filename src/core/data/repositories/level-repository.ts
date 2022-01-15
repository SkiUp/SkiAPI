import { Level } from "@core/data/models";
import { LevelCreateDto, LevelDto } from "../DTO/levels";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Level)
export class LevelRepository extends Repository<Level>{

    
    public createLevel(levelCreateDto:LevelCreateDto): LevelDto{
        let level: Level;



        throw new Error("Not Implemented");
    }


}