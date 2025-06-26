# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Package Management
- `pnpm install` - Install all dependencies (uses pnpm workspace configuration)
- `pnpm start` - Start the Expo development server

### Linting
- `npx eslint .` - Run ESLint using the Expo flat config setup

### Testing the Application
- **Android**: Use Expo Go app to scan QR code from `pnpm start`
- **Web**: Access the URL with port 8081 after running `pnpm start`

## Project Architecture

### Multi-Platform Structure
This is a React Native application using Expo Router with support for Android and Web platforms. The project uses platform-specific file extensions and conditional rendering patterns:

- `.android.tsx` - Android-specific implementations
- `.web.tsx` - Web-specific implementations  
- `.tsx` - Default/fallback implementations

### Key Architectural Patterns

**Routing**: Uses Expo Router with file-based routing system. Routes are defined in the `app/` directory with Stack navigation configured in `app/_layout.tsx`.

**Theme System**: Multi-layered theme provider architecture:
- `themeProvider/index.tsx` - Combines Android and Web theme providers
- `themeProvider/android.tsx` - Android-specific theming
- `themeProvider/web.tsx` - Web-specific theming
- `globals.tsx` - Platform-conditional global styles using styled-components

**Component Organization**: 
- Platform-specific components follow the pattern: `component.tsx` (default), `component.android.tsx`, `component.web.tsx`
- Example: `app/container/minha-rota.tsx` with platform variants

**Styling Strategy**:
- Web: Uses styled-components with createGlobalStyle for CSS reset
- Mobile: Uses React Native's StyleSheet and inline styles
- Conditional styling based on `Platform.OS`

### Workspace Configuration
Uses pnpm workspaces with internal packages:
- `@mobilestock-native/*` packages for native components
- `@mobilestockweb/*` packages for web components
- Packages are built with tsup and follow a monorepo structure

### Font Management
Custom fonts loaded via expo-font:
- SpaceMono font is preloaded in root layout
- Font loading state is handled before rendering

### Navigation Structure
- Root layout handles global navigation setup
- Custom header implementation with platform detection
- Modal presentation for configs screen
- Back navigation with router.back()