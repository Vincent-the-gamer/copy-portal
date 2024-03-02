import SmeeClient from "smee-client"
import { SERVER_LINK, SMEE_PROXY_LINK } from "./config"

const smee = new SmeeClient({
  source: SMEE_PROXY_LINK,
  target: SERVER_LINK,
  logger: console
})

const events = smee.start()

smee.onerror(() => {
    events.close()
})