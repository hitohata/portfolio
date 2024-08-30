export const REST_API_URL =
	"https://rest-api.honwakapappa-honwakapappa.workers.dev/docs";
export const GQL_API_URL =
	// "https://graphql.honwakapappa-honwakapappa.workers.dev/graphql";
	"http://localhost:8787/graphql";
export const RESUME = "https://resume-2dm.pages.dev/pdf/TaroHirohata.pdf"

export type DetailNameType = "Resume" | "GraphQL" | "REST API"

type DetailType = {
	name: DetailNameType,
	link: string
}

export const DETAILS: DetailType[] = [
	{
		name: "Resume",
		link: RESUME,
	}, {
		name: "GraphQL",
		link: GQL_API_URL,
	}, {
		name: "REST API",
		link: REST_API_URL,
	}
]