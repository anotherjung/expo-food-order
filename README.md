# Expo Food Order

## About (project description)
A lightweight Expo Router React Native app showcasing a pizza ordering flow: a tabbed layout that redirects to a menu grid, product details with image, price, and size selection. Built to be simple, fast, and easy to extend.

## Topics (comma sperated popular well-know topics)
Expo, React Native, TypeScript, Expo Router, React Navigation, FlatList, Mobile E-commerce, UI Components, Theming, Splash Screen, Image Loading

## Project Structure
```
expo-food-order/
  app/
    _layout.tsx                // Root stack with theme + splash/font loading
    (tabs)/
      _layout.tsx              // Bottom tabs config (Menu tab)
      index.tsx                // Redirect to /menu
      menu/
        _layout.tsx
        index.tsx              // Products grid
        [id].tsx               // Product details (size selection, add button)
    +html.tsx
    +not-found.tsx
  assets/
    data/
      products.ts              // Static products
    fonts/
      SpaceMono-Regular.ttf
    images/                    // App icons and splash
  components/
    Button.tsx                 // Reusable button
    productListItem.tsx        // Product tile with Link to details
    navigation/TabBarIcon.tsx
    ThemedText.tsx, ThemedView.tsx, ...
  constants/Colors.ts
  hooks/
    useColorScheme.ts          // Theme hook
    useThemeColor.ts
  scripts/reset-project.js
  types.ts                     // Types scaffold (orders, cart, enums)
  package.json, tsconfig.json, README.md
```

## Key Features (done list)
- **Routing**: Expo Router stack + tabs; automatic redirect to `/menu`.
- **Menu grid**: `FlatList` 2-column layout with spacing and responsive tiles.
- **Product details**: Image, price, and size selector (S/M/L/XL).
- **Reusable UI**: `Button` and `productListItem` components.
- **Theming**: Light/dark theme via `useColorScheme` and `Colors`.
- **Splash & fonts**: Blocking splash while `SpaceMono` font loads.

### User Flows Diagram
```mermaid
flowchart TD
  A[Launch App] --> B[Root Stack]
  B --> C[Tabs]
  C --> D{Tab Index}
  D -->|Redirect| E[/menu]
  E --> F[Products Grid]
  F --> G[Tap Product]
  G --> H[Product Details]
  H --> I[Select Size S/M/L/XL]
  I --> J["Add to cart" (UI only)]
```

### AI Flows Diagram
```mermaid
flowchart TD
  P[Planned: AI Assistant] --> Q[Recommend Items]
  Q --> R[Personalize Sizes/Combos]
  R --> S[Add to Cart]
  S --> T[Checkout]
  note right of P: Not implemented in this repo
```

## Future Enhancements (todo list)
- **Cart**: State management, cart screen, tab badge, quantity updates.
- **Checkout**: Order summary, address/payment (mock to start).
- **Backend**: Fetch products remotely (REST/GraphQL/Supabase), persist orders.
- **Auth**: Email/OAuth; profile management.
- **Pricing**: Size-based price modifiers and currency formatting.
- **Search & filter**: Categories, text search, sort by price/popularity.
- **Performance**: `getItemLayout`, memoization, image caching, pagination.
- **UX**: Loading states, pull-to-refresh, empty states, error handling.
- **Accessibility**: Roles/labels, TalkBack/VoiceOver verification.
- **Testing**: Unit + snapshot for components; E2E for flows.
