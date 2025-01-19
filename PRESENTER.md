# This document aims to provide the steps to run before the presentation to have everything ready.

## 1. Install the dependencies
```bash
pnpm i
```

## 2. Prepare the demos
### Run the docker daemon
```bash
orb # start orbstack
```
### Run a Redis container in a terminal
```bash
docker run -d -p 6379:6379 redis # Run a Redis container for the vitest without test containers
```

### Run the demo app for playwright-overhead in another terminal
```bash
pnpm --dir demo/dummy-app exec dev # Run the Playwright Overhead demo
```

# Commands to run the demos
## Playwright Overhead demo
```bash
pnpm --dir demo/dummy-app exec playwright test --ui # run the tests with the playwright UI
```

## Vitest-container
```bash
pnpm --dir demo/vitest-container exec vitest # run all the tests
pnpm --dir demo/vitest-container exec vitest container # run only the mocked tests
pnpm --dir demo/vitest-container exec vitest index --sequence.concurrent # run the tests in parallel
pnpm --dir demo/vitest-container exec vitest container --sequence.concurrent # run the tests in parallel
```
