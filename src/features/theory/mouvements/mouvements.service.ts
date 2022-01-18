import { Injectable } from '@nestjs/common';

@Injectable()
export class MouvementsService {
  create(createMouvementDto: unknown) {
    return 'This action adds a new mouvement';
  }

  findAll() {
    return `This action returns all mouvements`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mouvement`;
  }

  update(id: number, updateMouvementDto: unknown) {
    return `This action updates a #${id} mouvement`;
  }

  remove(id: number) {
    return `This action removes a #${id} mouvement`;
  }
}
