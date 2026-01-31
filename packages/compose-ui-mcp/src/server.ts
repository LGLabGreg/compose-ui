import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'

import { registerResources } from './resources/index.js'
import { registerTools } from './tools/index.js'

export function createServer(): McpServer {
  const server = new McpServer({
    name: 'compose-ui-mcp',
    version: '0.1.0',
  })

  registerResources(server)
  registerTools(server)

  return server
}
