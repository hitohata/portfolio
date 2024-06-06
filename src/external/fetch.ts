import { getSdk } from "../gql/request"
import { GraphQLClient } from 'graphql-request'

export const fetchingResume = async () => {
	const client = new GraphQLClient("http://localhost:8787/graphql", );
	const sdk = getSdk(client);
	return await sdk.MyResume();
};
