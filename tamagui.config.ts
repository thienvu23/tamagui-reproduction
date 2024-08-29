import { config as configBase } from '@tamagui/config/v3'
import { ms } from 'react-native-size-matters'
import { createTamagui } from 'tamagui'

export const config = createTamagui({...configBase, tokens: {...configBase.tokens, size: {
  $true: 0,
  '$0.25': ms(1.8),
  '$0.5': ms(4),
  '$0.75': ms(7.9),
  $1: ms(13),
  '$1.5': ms(17),
  $2: ms(21),
  '$2.5': ms(26),
  $3: ms(29),
  '$3.5': ms(33),
  $4: ms(35),
  true: ms(35),
  '$4.5': ms(38),
  $5: ms(42),
  '$5.5': ms(47),
  $6: ms(50),
  '$6.5': ms(55),
  $7: ms(60),
  '$7.5': ms(65),
  $8: ms(70),
  '$8.5': ms(76),
  $9: ms(82),
  '$9.5': ms(88),
  $10: ms(92),
  '$10.5': ms(100),
  $11: ms(110),
  $12: ms(130),
  $13: ms(150),
  $14: ms(170),
  $15: ms(190),
  $16: ms(205),
  $17: ms(215),
  $18: ms(230),
  $19: ms(245),
  $20: ms(260),
}}})

export default config

export type Conf = typeof config

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}
