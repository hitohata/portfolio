
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:8787/graphql",
  documents: "./src/external/query/query.graphql",
  generates: {
    "src/gql/request.ts": {
      plugins: ['typescript', 'typescript-operations', 'typescript-graphql-request'],
      config: {
        rowRequest: true,
      }
    }
  }
};

export default config;
