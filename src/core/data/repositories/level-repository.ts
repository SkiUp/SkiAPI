import { Level } from "@core/data/models";
import { LevelUpsertDto, LevelDto } from "../DTO/levels";
import { EntityRepository, Repository } from "typeorm";
import { InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/core";

@EntityRepository(Level)
export class LevelRepository extends Repository<Level>{
    constructor(@InjectMapper() private _mapper:Mapper) {
        super();
    }
    
    public async createLevel(levelUpsertDto:LevelUpsertDto): Promise<LevelDto>{
        let level:Level = this._mapper.map(levelUpsertDto, Level, LevelUpsertDto);
        var createdLevel = await this.save(level);     
        return this._mapper.map(createdLevel, LevelDto, Level);
    }

    public async getLevelById(id: string): Promise<LevelDto>{
        let level = await this.findOne(id);
        return this._mapper.map(level, LevelDto, Level);
    }

    public async getLevels(): Promise<LevelDto[]>{
        let levels = await this.find();
        return this._mapper.mapArray(levels, LevelDto, Level);
    }

    public async getLevelByPages(currentPage: number, pageSize: number): Promise<LevelDto[]>{
        let order;        
        order["name"] = "ASC";
        let levels = await this.find({order: order, skip: (currentPage - 1) * pageSize, take: pageSize});
        return this._mapper.mapArray(levels, LevelDto, Level);
    }

}