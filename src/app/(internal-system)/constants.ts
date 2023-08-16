import Inventory2Icon from '@mui/icons-material/Inventory2'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded'
import QueryStatsIcon from '@mui/icons-material/QueryStats'
import { type listIconsType } from '@/types/pages/home/components/drawerComponent/drawerComponent.type'

export const listIcons: listIconsType = [
  ['Home', HomeRoundedIcon, '/home'],
  ['Records', Inventory2Icon, '/records'],
  ['Orders and Notes', ShoppingCartIcon, '/orders-and-notes'],
  ['Financial', AttachMoneyRoundedIcon, '/financial'],
  ['reports', QueryStatsIcon, '/reports']
]
