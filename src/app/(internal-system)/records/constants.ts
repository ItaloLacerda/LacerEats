import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import Diversity3Icon from '@mui/icons-material/Diversity3'
import { type listIconsType } from '@/types/pages/home/components/drawerComponent/drawerComponent.type'

export const listIcons: listIconsType = [
  ['Collaborators', Diversity3Icon, '/records/collaborators'],
  ['suppliers', LocalShippingIcon, '/records/suppliers'],
  ['products', ShoppingBasketIcon, '/records/products']
]
