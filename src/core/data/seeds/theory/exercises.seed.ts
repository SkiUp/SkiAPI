import { ExerciseUpsertDto, ExerciseTypes, SlopeTypes } from '@core/data'

export const ExerciseSeed: ExerciseUpsertDto[] = [
  {
    description: 'Descendre en chasse-neige sous contrôle en ligne droite.',
    slopeType: SlopeTypes.EASY,
    isOfficial: true,
    type: ExerciseTypes.MANEUVRE_DE_BASE,
    levelId: 'Ourson',
    movementId: '',
  },
  {
    description:
      'Descendre en chasse-neige sous contrôle en exécutant quelques changements de direction.',
    slopeType: SlopeTypes.EASY,
    isOfficial: true,
    type: ExerciseTypes.EXERCICE,
    levelId: 'Ourson',
    movementId: '',
  },
  {
    description: 'Tourner sur place (360°) avec les skis aux pieds.',
    isOfficial: true,
    slopeType: SlopeTypes.FLAT,
    type: ExerciseTypes.EXERCICE,
    levelId: 'Ourson',
    movementId: 'Pivot',
  },
  {
    description: 'Descendre en trace directe sans assitance et sèimmobiliser.',
    isOfficial: true,
    slopeType: SlopeTypes.EASY,
    type: ExerciseTypes.EXERCICE,
    levelId: 'Ourson',
    movementId: '',
  },
  {
    description:
      "Pouvoir ramasser un objet sur la neige tout en descendant sans tomber, sans s'arrêter.",
    isOfficial: true,
    slopeType: SlopeTypes.EASY,
    type: ExerciseTypes.HABILITEE,
    levelId: 'Ourson',
    movementId: 'Flexion extension',
  },
  {
    description: 'Pouvoir tomber et se relever sans assitance.',
    isOfficial: true,
    slopeType: SlopeTypes.EASY,
    type: ExerciseTypes.HABILITEE,
    levelId: 'Ourson',
    movementId: '',
  },
  {
    description: 'Exécuter quatre (4) virages chasse-neige.',
    isOfficial: true,
    slopeType: SlopeTypes.EASY,
    type: ExerciseTypes.MANEUVRE_DE_BASE,
    levelId: 'Kangourou',
    movementId: '',
  },
  {
    description: 'Exécuter le pas ciseaux.',
    isOfficial: true,
    slopeType: SlopeTypes.EASY,
    type: ExerciseTypes.EXERCICE,
    levelId: 'Kangourou',
    movementId: '',
  },
  {
    description: 'Exécuter une série de petits sauts tout en descendant.',
    isOfficial: true,
    slopeType: SlopeTypes.EASY,
    type: ExerciseTypes.EXERCICE,
    levelId: 'Kangourou',
    movementId: '',
  },
  {
    description:
      "Exécuter une traversée (skis en position parallèle) et s'immobiliser en se dirigeant vers l'amont (skis en position chasse-neige).",
    isOfficial: true,
    slopeType: SlopeTypes.EASY,
    type: ExerciseTypes.EXERCICE,
    levelId: 'Kangourou',
    movementId: '',
  },
  {
    description:
      'Pouvoir monter dans une remontée mécanique puis en débarquer, seul ou avec une autre personne, mais sans assitance',
    isOfficial: true,
    slopeType: SlopeTypes.NONE,
    type: ExerciseTypes.HABILITEE,
    levelId: 'Kangourou',
    movementId: '',
  },
  {
    description: 'Pouvoir chausser et déchausser les skis sans assiatance.',
    isOfficial: true,
    slopeType: SlopeTypes.FLAT,
    type: ExerciseTypes.HABILITEE,
    levelId: 'Kangourou',
    movementId: '',
  },
  {
    description:
      'Exécuter quatre (4) virages chasse-neige à long rayon à vitesse régulière.',
    isOfficial: true,
    slopeType: SlopeTypes.HARD,
    type: ExerciseTypes.MANEUVRE_DE_BASE,
    levelId: 'Tigre',
    movementId: '',
  },
  {
    description:
      'Exécuter quatre (4) virages chasse-neige tout en ramenant les skis en position parallèle entre les virages (traversées).',
    isOfficial: true,
    slopeType: SlopeTypes.EASY,
    type: ExerciseTypes.EXERCICE,
    levelId: 'Tigre',
    movementId: '',
  },
  {
    description:
      'Immobile, skis perpendiculaires à la pente, le skieur tourne sur lui-même dans la direction opposée (180°).',
    isOfficial: true,
    slopeType: SlopeTypes.HARD,
    type: ExerciseTypes.EXERCICE,
    levelId: 'Tigre',
    movementId: '',
  },
  {
    description:
      'Exécuter un virage chaise-neige tout en tapant le ski intérieur sur la neige à plusieurs reprises.',
    isOfficial: true,
    slopeType: SlopeTypes.EASY,
    type: ExerciseTypes.HABILITEE,
    levelId: 'Tigre',
    movementId: '',
  },
  {
    description:
      'Pouvoir déchausser et chausser à nouveau les skis sans assitance.',
    isOfficial: true,
    slopeType: SlopeTypes.HARD,
    type: ExerciseTypes.HABILITEE,
    levelId: 'Tigre',
    movementId: '',
  },
]

interface ExerciseSeed {
  name: string
  exercises: ExerciseUpsertDto[]
}
