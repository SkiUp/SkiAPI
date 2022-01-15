import { Injectable } from '@nestjs/common';
import { CreateMouvementDto } from './dto/create-mouvement.dto';
import { UpdateMouvementDto } from './dto/update-mouvement.dto';

@Injectable()
export class MouvementsService {
  create(createMouvementDto: CreateMouvementDto) {
    return 'This action adds a new mouvement';
  }

  findAll() {
    return `This action returns all mouvements`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mouvement`;
  }

  update(id: number, updateMouvementDto: UpdateMouvementDto) {
    return `This action updates a #${id} mouvement`;
  }

  remove(id: number) {
    return `This action removes a #${id} mouvement`;
  }
}
