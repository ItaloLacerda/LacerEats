import AddBusinessIcon from '@mui/icons-material/AddBusiness'
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch'
import { type listIconsType } from '@/types/pages/home/components/drawerComponent/drawerComponent.type'

export const listIcons: listIconsType = [
  ['Seek Suppliers', ContentPasteSearchIcon, '/records/suppliers'],
  ['Register Suppliers', AddBusinessIcon, '/records/suppliers/register']
]
