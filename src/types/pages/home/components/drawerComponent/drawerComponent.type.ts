import { type SvgIconTypeMap } from '@mui/material'
import { type OverridableComponent } from '@mui/material/OverridableComponent'

export type listIconsType = Array<Array<string | (OverridableComponent<SvgIconTypeMap<Record<string, unknown>, 'svg'>> & {
  muiName: string })>>
