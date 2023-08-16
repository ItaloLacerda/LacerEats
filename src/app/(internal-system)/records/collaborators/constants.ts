import PersonAddIcon from '@mui/icons-material/PersonAdd'
import PersonSearchIcon from '@mui/icons-material/PersonSearch'
import { type listIconsType } from '@/types/pages/home/components/drawerComponent/drawerComponent.type'

export const listIcons: listIconsType = [
  ['Seek Collaborator', PersonSearchIcon, '/reports/collaborators'],
  ['Register Collaborator', PersonAddIcon, '/records/collaborators/register']
]
