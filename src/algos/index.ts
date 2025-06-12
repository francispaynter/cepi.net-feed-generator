import { globalHealthFeed } from './algos/globalHealthFeed'
import { AppContext } from '../config'
import {
  QueryParams,
  OutputSchema as AlgoOutput,
} from '../lexicon/types/app/bsky/feed/getFeedSkeleton'
import * as whatsAlf from './whats-alf'

type AlgoHandler = (ctx: AppContext, params: QueryParams) => Promise<AlgoOutput>

const algos: Record<string, AlgoHandler> = {
  [whatsAlf.shortname]: whatsAlf.handler,
  [globalHealthFeed.shortname]: globalHealthFeed.handler,
}

export default algos
