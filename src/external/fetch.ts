import { GraphQLClient } from "graphql-request";
import { getSdk } from "../gql/request";
import { GQL_API_URL } from "../static/static.ts";

export const fetchResume = async () => {
	const client = new GraphQLClient(GQL_API_URL);
	const sdk = getSdk(client);
	return await sdk.MyResume();
};
