import "dotenv/config"
import { APIClient, MarketAPI } from "ig-trading-api"

const client = new APIClient(APIClient.URL_DEMO, process.env.IG_DEMO_API_KEY)
const market = new MarketAPI(client)

const main = async () => {
	const session = await client.rest.login.createSession(process.env.IG_DEMO_USERNAME, process.env.IG_DEMO_PASSWORD)
	console.log(session.clientId)
	const details = await market.getMarketDetails("CC.D.NG.USS.IP")
	console.log(details)
}

main()
