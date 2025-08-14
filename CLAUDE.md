# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Development
- `npm start` or `expo start` - Start the development server
- `npm run android` - Run on Android device/emulator  
- `npm run ios` - Run on iOS device/simulator
- `npm run web` - Run on web browser

### Code Quality
- `npm run lint` - Run ESLint to check code quality
- `npm test` - Run Jest tests in watch mode

### Build and Reset
- `npm run reset-project` - Reset project using the provided script

## Architecture Overview

This is an Expo Router-based React Native app showcasing a pizza ordering interface with the following architecture:

### Routing Structure (Expo Router)
- **Root Stack** (`app/_layout.tsx`): Handles theme provider and font loading with splash screen
- **Tab Layout** (`app/(tabs)/_layout.tsx`): Single "Menu" tab with redirect from index
- **Menu Navigation** (`app/(tabs)/menu/`):
  - `index.tsx` - Products grid (2-column FlatList)
  - `[id].tsx` - Product details with size selection (S/M/L/XL)

### Key Components
- **ProductListItem** (`components/productListItem.tsx`): Reusable product tile that links to details
- **Button** (`components/Button.tsx`): Reusable button component
- **Themed Components**: `ThemedText` and `ThemedView` for consistent styling across light/dark themes

### Data Layer
- **Static Products** (`assets/data/products.ts`): Array of pizza products with id, name, image, price
- **Types** (`types.ts`): TypeScript definitions for Product, CartItem, Order, OrderStatus, PizzaSize
- **Note**: References database types that aren't implemented (commented out Product type suggests future backend integration)

### Theming System
- **Colors** (`constants/Colors.ts`): Light/dark theme color definitions
- **Theme Hook** (`hooks/useColorScheme.ts`): Automatic theme detection
- Uses React Navigation's theme provider for consistent navigation theming

### Configuration
- **TypeScript**: Strict mode enabled with path aliases (`@/*` -> root)
- **Expo Router**: File-based routing with typed routes experiment enabled
- **Bundle ID**: `com.jungno.foodorder` (iOS/Android)

## Important Implementation Notes

### Current Limitations
- Cart functionality is not implemented (UI only)
- Product data is static (no backend integration)
- Size selection affects UI but not pricing
- No authentication or user management

### Code Patterns
- Uses Expo Router's Link component for navigation
- FlatList with 2-column layout for product grid
- StyleSheet.create for component styling
- Pressable components for interactive elements
- Image components with fallback URLs for product images

### File Organization
- `app/` - Expo Router pages and layouts
- `components/` - Reusable UI components  
- `assets/` - Static assets (images, fonts, data)
- `constants/` - App-wide constants like colors
- `hooks/` - Custom React hooks for theming
- `types.ts` - Central type definitions