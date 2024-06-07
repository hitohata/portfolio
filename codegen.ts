
import type { CodegenConfig } from '@graphql-codegen/cli';
import { GQL_API_URL } from "./src/static/static.ts";

const config: CodegenConfig = {
  overwrite: true,
  schema: GQL_API_URL,
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
