import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'

import { registerComponentsResource } from './components.js'
import { registerOverviewResource } from './overview.js'

export function registerResources(server: McpServer): void {
  registerOverviewResource(server)
  registerComponentsResource(server)
}
