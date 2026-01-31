# @lglab/compose-ui-mcp

MCP (Model Context Protocol) server that exposes [Compose UI](https://compose-ui.dev) library documentation to AI tools like Claude.

## Installation

### Claude Desktop

Add to your Claude Desktop configuration (`claude_desktop_config.json`):

```json
{
  "mcpServers": {
    "compose-ui": {
      "command": "npx",
      "args": ["-y", "@lglab/compose-ui-mcp"]
    }
  }
}
```

### Global Installation

```bash
npm install -g @lglab/compose-ui-mcp
```

Then add to your MCP client configuration:

```json
{
  "mcpServers": {
    "compose-ui": {
      "command": "compose-ui-mcp"
    }
  }
}
```

## Available Resources

### `compose-ui://overview`

Returns a markdown overview of the Compose UI library including:
- Library description and key features
- Getting started guide link
- Complete list of available components with descriptions
- Links to documentation

## Development

```bash
# Install dependencies
pnpm install

# Build
pnpm --filter @lglab/compose-ui-mcp build

# Run in development mode
pnpm --filter @lglab/compose-ui-mcp dev

# Start the built server
pnpm --filter @lglab/compose-ui-mcp start
```

## License

MIT
