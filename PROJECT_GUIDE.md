# Sticket - Web3 NFT Ticketing Platform

## 📋 Project Overview

**Sticket** is a decentralized event ticketing platform built on Ethereum that transforms traditional event tickets into Non-Fungible Tokens (NFTs). The platform enables transparent, verifiable, and transferable ticket ownership with zero platform fees and full user control.

### Core Concept
- **Tickets as NFTs**: Each event ticket is minted as an ERC-721 NFT on Ethereum
- **Blockchain Verification**: All tickets are immutable and verifiable on-chain
- **Zero Middlemen**: Direct peer-to-peer transactions with no platform fees
- **Full Ownership**: Users can transfer, resell, or trade tickets freely

---

## 🎯 Objective

The primary objective of Sticket is to revolutionize event ticketing by:

1. **Eliminating Scalping & Fraud**: Blockchain verification ensures ticket authenticity
2. **Removing Platform Fees**: 0% platform fees, organizers keep 100% of sales
3. **Enabling True Ownership**: Tickets are NFTs that users fully control
4. **Transparent Transactions**: All sales and transfers are visible on-chain
5. **Secondary Market Freedom**: Users can resell tickets without restrictions

---

## 🏗️ Architecture & How It Works

### Technology Stack

- **Framework**: Next.js 15.5.6 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI primitives with custom styling
- **3D Graphics**: Three.js + React Three Fiber for visual effects
- **Form Handling**: React Hook Form + Zod validation
- **Blockchain**: Ethereum (ERC-721 standard for NFTs)

### Project Structure

```
sticket/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx            # Landing page
│   │   ├── create/              # Event creation page
│   │   ├── discover/            # Event discovery & browsing
│   │   │   ├── page.tsx        # Events listing
│   │   │   └── [id]/page.tsx   # Event detail page
│   │   └── tickets/             # User's ticket collection
│   ├── components/              # Reusable components
│   │   ├── Header.tsx          # Navigation header
│   │   ├── Footer.tsx          # Footer component
│   │   ├── Dither.tsx          # Animated background effect
│   │   └── ui/                 # shadcn/ui components
│   ├── hooks/                   # Custom React hooks
│   └── lib/                     # Utility functions
├── public/                      # Static assets
└── package.json
```

### Key Features & Pages

#### 1. **Landing Page** (`/`)
- Hero section with animated dither effect
- Feature highlights (Secure, Transferable, Dashboard, Wallet Integration)
- Live events showcase
- Recent activity feed
- Statistics (0% fees, 100% transparent, ∞ ownership)

#### 2. **Discover Events** (`/discover`)
- Browse all available events
- Category filtering (Music, Sports, Conference, Art, etc.)
- Search functionality
- Event cards with status, price, availability
- Real-time statistics (Live Events, Tickets Sold, Volume)

#### 3. **Event Detail** (`/discover/[id]`)
- Full event information
- Ticket purchase interface
- Quantity selector
- Event description and perks
- Organizer information
- Similar events recommendations

#### 4. **Create Event** (`/create`)
- Event creation form:
  - Event name, description
  - Date, time, location
  - Category selection
  - Image upload
  - Ticket quantity
  - Royalty percentage
- Contract deployment preview
- Gas estimation
- Best practices guide

#### 5. **My Tickets** (`/tickets`)
- User's NFT ticket collection
- Active vs. Past tickets
- Ticket details (Token ID, Event info, Status)
- Actions: View QR, Send, Sell
- Wallet information display

### Design System

#### Visual Style
- **Theme**: Dark mode with retro/tech aesthetic
- **Accent Color**: Red (#e92b31 / #FC3038)
- **Typography**: 
  - Primary: Figtree (sans-serif)
  - Monospace: Geist Mono (for technical elements)
- **Border Style**: Custom corner accents with decorative borders

#### UI Patterns
- **Corner Accents**: Decorative corner elements on borders
- **Grid Layouts**: Responsive grid system (1-3 columns)
- **Hover States**: Subtle background transitions
- **Status Badges**: Color-coded status indicators
- **Monospace Labels**: Technical elements use monospace font

---

## 🚀 Development Guidelines

### Code Style & Best Practices

#### 1. **Component Structure**
```tsx
// Use "use client" for client components
"use client";

// Import order: React → Next.js → Components → Utils → Types
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
```

#### 2. **Naming Conventions**
- **Components**: PascalCase (`EventCard.tsx`)
- **Files**: Match component name
- **Variables**: camelCase (`eventName`, `ticketPrice`)
- **Constants**: UPPER_SNAKE_CASE for technical labels (`[EVENT_DETAILS]`)
- **CSS Classes**: Use Tailwind utility classes, custom classes for reusable patterns

#### 3. **Styling Guidelines**

**Use Tailwind CSS utility classes:**
```tsx
<div className="border corner-accents p-6 hover:bg-muted/30 transition-colors">
```

**Custom CSS classes:**
- `.corner-accents` - Decorative border corners
- `.scrollbar-hide` - Hide scrollbars

**Color System:**
- Use semantic color tokens: `bg-accent`, `text-muted-foreground`
- Accent color for highlights: `text-accent`, `bg-accent/10`
- Muted colors for secondary text: `text-muted-foreground`

#### 4. **Component Patterns**

**Page Layout:**
```tsx
export default function PageName() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="max-w-5xl mx-auto md:px-0">
        {/* Content sections with border corner-accents */}
      </div>
      <Footer />
    </div>
  );
}
```

**Grid Layouts:**
```tsx
// Responsive grid: 1 column mobile, 2-3 columns desktop
<div className="grid grid-cols-1 md:grid-cols-3 md:divide-x">
  {/* Grid items */}
</div>
```

**Status Badges:**
```tsx
<div className="bg-accent/10 text-accent px-2 py-1 text-xs font-bold rounded">
  {status}
</div>
```

#### 5. **State Management**
- Use React hooks (`useState`, `useEffect`) for local state
- Keep state as close to where it's used as possible
- For complex forms, use React Hook Form with Zod validation

#### 6. **TypeScript**
- Define types for props and data structures
- Use interfaces for component props
- Avoid `any` types; use `unknown` if type is truly unknown

#### 7. **File Organization**
- **Pages**: One component per page file
- **Components**: Reusable components in `/components`
- **UI Components**: shadcn/ui components in `/components/ui`
- **Utilities**: Helper functions in `/lib`
- **Hooks**: Custom hooks in `/hooks`

#### 8. **Accessibility**
- Use semantic HTML elements
- Include proper ARIA labels where needed
- Ensure keyboard navigation works
- Maintain color contrast ratios

#### 9. **Performance**
- Use Next.js Image component for images (when implemented)
- Lazy load heavy components
- Optimize Three.js animations (Dither component)
- Use React.memo for expensive components

#### 10. **Blockchain Integration** (Future Implementation)
- Use Web3 libraries (ethers.js or viem)
- Implement wallet connection (MetaMask, WalletConnect)
- Handle transaction states (pending, success, error)
- Display transaction hashes and confirmations

---

## 🔧 Setup & Development

### Prerequisites
- Node.js 18+ or Bun
- Package manager: npm, yarn, pnpm, or bun

### Installation
```bash
# Install dependencies
bun install
# or
npm install
```

### Development Server
```bash
bun dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build
```bash
bun run build
# or
npm run build
```

### Linting
```bash
bun run lint
# or
npm run lint
```

---

## 📝 Current Implementation Status

### ✅ Implemented
- UI/UX design system
- Page layouts and routing
- Component library (shadcn/ui)
- Animated background effects (Dither)
- Responsive design
- Dark theme styling

### 🚧 To Be Implemented
- **Blockchain Integration**:
  - Smart contract deployment
  - Wallet connection (MetaMask, WalletConnect)
  - NFT minting functionality
  - Transaction handling
  - On-chain data fetching
  
- **Backend/API**:
  - Event data persistence
  - User authentication
  - Ticket metadata storage (IPFS)
  - Image upload handling
  
- **Features**:
  - QR code generation for tickets
  - Ticket transfer functionality
  - Secondary market (resale)
  - Event check-in system
  - Real-time activity feed

---

## 🎨 Design Principles

1. **Minimalist & Clean**: Focus on content, reduce visual clutter
2. **Technical Aesthetic**: Monospace fonts, bracket notation `[LABELS]`
3. **Consistent Spacing**: Use Tailwind spacing scale consistently
4. **Hover Interactions**: Subtle feedback on interactive elements
5. **Status Indicators**: Clear visual states (ACTIVE, USED, SELLING FAST)
6. **Grid-Based Layout**: Structured, organized content presentation

---

## 🔐 Security Considerations (Future)

- Smart contract security audits
- Input validation and sanitization
- Rate limiting for API endpoints
- Secure wallet connection handling
- Protection against common Web3 attacks (reentrancy, etc.)

---

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Radix UI](https://www.radix-ui.com)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- [ERC-721 Standard](https://eips.ethereum.org/EIPS/eip-721)

---

## 🤝 Contributing

When contributing to this project:

1. Follow the code style guidelines above
2. Use semantic commit messages
3. Test your changes thoroughly
4. Update documentation as needed
5. Ensure responsive design works on mobile and desktop

---

## 📄 License

[Add license information here]

---

**Last Updated**: 2024
**Version**: 0.1.0

