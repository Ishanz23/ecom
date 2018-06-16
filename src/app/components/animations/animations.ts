import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';

export const toggleExpansion = trigger('expansion', [
  state('true', style({ transform: 'rotate(180deg)' })),
  transition(
    'false => true',
    animate(
      '150ms',
      keyframes([
        style({ offset: 0.5, transform: 'rotate(90deg)' }),
        style({ offset: 1, transform: 'rotate(180deg)' })
      ])
    )
  ),
  transition(
    'true => false',
    animate(
      '150ms',
      keyframes([
        style({ offset: 0.5, transform: 'rotate(90deg)' }),
        style({ offset: 1, transform: 'rotate(0)' })
      ])
    )
  )
]);
