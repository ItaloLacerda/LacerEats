export interface ImainData {
  description: string
  group: string
  unit: string
  barCode: string
  NCM: string
  costPrice: string
  salePrice: string
  state: 'active' | 'inactive'
}

export type Tselect = 'selectOne' | 'selectTwo' | 'selectThree'
