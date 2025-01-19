# Redux Starter for Next.js

This is a simple Next.js starter project with Redux integrated. It features a basic counter application to demonstrate how to set up and use Redux in a Next.js environment.

## Features

- **Next.js Framework**: Built using `npx create-next-app@latest`.
- **Redux Toolkit**: Includes Redux for state management.
- **Counter Example**: A basic counter to illustrate Redux actions, reducers, and store setup.

## Getting Started

Follow these steps to set up and run the project locally:

### 1. Clone the Repository
```bash
git clone https://github.com/Fardeen26/redux-nextjs-starter.git
```

### 2. Navigate to the Project Directory
```bash
cd redux-nextjs-starter
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
redux-nextjs-starter/
├── public/                       # Static assets
├── src/
│   ├── app/                      # Next.js pages
│   ├── features/                 # Redux slice
│   │   ├── counter/              # Counter slice
│   │   │   ├── counterSlice.ts   # Counter reducer and actions
│   ├── store/                    # Redux store configuration
│   │   ├── StoreProvider.tsx     # Redux store provider
│   │   └── store.ts              # Redux store configuration
└── package.json                  # Project dependencies and scripts
```

## How Redux is Integrated

1. **Store Setup**:
   - Located in `src/store/store.ts`.
   - Configured using `@reduxjs/toolkit`.

2. **Slice Example**:
   - A `counterSlice` is defined in `src/features/counter/counterSlice.ts`.
   - Includes actions like `increment`, and `decrement`.

3. **Provider**:
   - The Redux store is wrapped around the application in `src/store/StoreProvider.tsx` using the `Provider` from `react-redux`.
    
## Contributing

Feel free to fork this repository and make contributions. Pull requests are welcome!

---

### Happy Coding! 🚀
