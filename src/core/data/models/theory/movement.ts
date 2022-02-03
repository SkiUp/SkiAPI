import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm'
import { MovementCategory } from '@core/data/enum'
import { Exercise } from '.'

@Entity()
export class Movement {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  description: string

  @Column({ type: 'enum', enum: MovementCategory })
  movementCategory: MovementCategory

  @Column({ nullable: true })
  startLevelId: string

  @ManyToMany(() => Exercise, (type) => type.movement)
  exerises: Exercise
}
