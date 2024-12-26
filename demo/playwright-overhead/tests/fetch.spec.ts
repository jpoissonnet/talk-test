import { test, expect } from "@playwright/test";

[0, 100, 200, 400, 800, 1600, 3200, 6400, 12800].forEach((delay) => {
  test(`can fetch with ${delay}ms delay`, async ({ page }) => {
    await page.goto(`http://localhost:3000/${delay}`);
    const response = page.waitForResponse(/api/);
    await page.getByRole("button").click();
    await response;
    await expect(page.getByTitle("status")).toHaveText("Request successful!");
  });
});

[0, 100, 200, 400, 800, 1600, 3200, 6400, 12800].forEach((delay) => {
  test(`[MOCKED] can fetch with ${delay}ms delay`, async ({ page }) => {
    await page.route(`*/**/api/${delay}`, async (route) => {
      await route.fulfill({ body: "Blazingly mocked!" });
    });
    await page.goto(`http://localhost:3000/${delay}`);
    const response = page.waitForResponse(/api/);
    await page.getByRole("button").click();
    await response;
    await expect(page.getByTitle("status")).toHaveText("Request successful!");
  });
});
