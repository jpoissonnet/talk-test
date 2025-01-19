import { expect, test } from "@playwright/test";

test("should display a good title", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await expect(page.getByRole("heading")).toHaveText("API Fetch Demo");
});
