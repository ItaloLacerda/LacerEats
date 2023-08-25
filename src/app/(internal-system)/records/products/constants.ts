import AddCircleIcon from '@mui/icons-material/AddCircle'
import GroupWorkIcon from '@mui/icons-material/GroupWork'
import SearchIcon from '@mui/icons-material/Search'
import { type listIconsType } from '@/types/pages/home/components/drawerComponent/drawerComponent.type'

export const listIcons: listIconsType = [
  ['Register Product Group', GroupWorkIcon, '/records/products/register-product-group'],
  ['Register Product', AddCircleIcon, '/records/products/register-product'],
  ['Search Products', SearchIcon, '/records/products/search']
]
