import { MovementCategory, MovementUpsertDto } from '@core/data'

export const MovementSeed: MovementUpsertDto[] = [
  {
    name: 'Pivot',
    description: '',
    movementCategory: MovementCategory.ROTARY,
    startLevelId: '',
  },
  {
    name: 'Rotation',
    description: '',
    movementCategory: MovementCategory.ROTARY,
    startLevelId: '',
  },
  {
    name: 'Contre Rotation',
    description: '',
    movementCategory: MovementCategory.ROTARY,
    startLevelId: '',
  },
  {
    name: 'Flexion extension',
    description: '',
    movementCategory: MovementCategory.LONGITUDINAL,
    startLevelId: '',
  },
  {
    name: 'Angulation',
    description: '',
    movementCategory: MovementCategory.LATERALS,
    startLevelId: '',
  },
  {
    name: 'Transfer de poids',
    description: '',
    movementCategory: MovementCategory.LATERALS,
    startLevelId: '',
  },
  {
    name: 'Decoupage',
    description:
      "La base d'apuit se déplace plus rapidement que le centre de gravité du corps",
    movementCategory: MovementCategory.BACK_TO_FRONT,
    startLevelId: '',
  },
]
