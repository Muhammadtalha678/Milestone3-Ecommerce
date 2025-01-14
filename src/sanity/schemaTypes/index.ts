import { type SchemaTypeDefinition } from 'sanity'
import product from './product'
import sales from './sales'
import user from './user'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,sales,user],
}
