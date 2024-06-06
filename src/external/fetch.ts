import { GraphQLClient } from "graphql-request";
import { getSdk } from "../gql/request";

export const fetchResume = async () => {
	const client = new GraphQLClient("http://localhost:8787/graphql");
	const sdk = getSdk(client);
	return await sdk.MyResume();
};
