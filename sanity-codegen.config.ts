import { SanityCodegenConfig } from 'sanity-codegen'

const config: SanityCodegenConfig = {
  schemaPath: './studio/schemas/schema.js',
  outputPath: './src/compiled/schema.ts',
}

export default config
