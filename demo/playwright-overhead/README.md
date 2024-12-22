# Demo for measuring the overhead of Playwright.

## Installation

```
pnpm install
pnpm dev

open http://localhost:3000
```

## API

The API is accessible at `/api` and accepts a route parameter such as `/api/<delay>` where `delay` is the number of milliseconds to delay the response. If not provided the response will be immediate.

## Results

Run the tests with:

```bash
pnpm playwright test
```

There are two type of tests:

- Real ones fetch the real the real API made slow purposefully.
- Mocked ones fetch a mocked API that is instant.
