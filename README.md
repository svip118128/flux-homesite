# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

node minimum version 20.19.6

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Deep Link Integration

This application supports deep linking for mobile platforms (iOS and Android). When users access URLs containing `/link`, the app automatically attempts to open the native mobile app using a custom URL scheme.

### How It Works

1. **URL Pattern**: Any URL containing `/link` will trigger the deep link handler
2. **Path Extraction**: Everything after `/link` is extracted and converted to a custom scheme URL
3. **Platform Detection**: Automatically detects iOS or Android devices
4. **App Opening**: Attempts to open the native app with the extracted path

### Deep Link Format

**Web URL Format:**
```
https://yourdomain.com/link/{path}?{params}
```

**Converted to Custom Scheme:**
```
ken-server.vercel://{path}?{params}
```

### Examples

| Web URL | Custom Scheme URL |
|---------|------------------|
| `https://yourdomain.com/link/chat?code=12323` | `ken-server.vercel://chat?code=12323` |
| `https://yourdomain.com/link/profile/123` | `ken-server.vercel://profile/123` |
| `https://yourdomain.com/link/home` | `ken-server.vercel://home` |

### Configuration

The custom scheme can be configured in `app/config/index.ts`:

```typescript
export const customScheme = 'ken-server.vercel'
```

### Implementation Details

- **iOS**: Uses a hidden iframe to trigger the custom scheme
- **Android**: Uses `window.location.href` to open the custom scheme
- **Fallback**: The page still loads normally for desktop users or if the app is not installed
- **Route Handling**: The `/link/*` catch-all route prevents 404 errors

### Files

- `app/utils/deeplink.ts` - Deep link utility functions
- `app/config/index.ts` - Custom scheme configuration
- `app/app.vue` - Deep link trigger on page load
- `app/pages/link/[...slug].vue` - Catch-all route for `/link/*` paths
