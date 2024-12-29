# Vitest with test container

This is a demo project to show how test containers help to isolate the test environment and run integration tests.


## How to run the tests

```bash
pnpm vitest --ui
```

The index.spec should be extremely flaky and mostly fail. The index.container should always pass but be slower.