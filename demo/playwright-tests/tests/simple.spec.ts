import { expect, test } from "@playwright/test";

test("should it contain the right title", async ({ page }) => {
  await page.goto("http://localhost:3000");
  expect(await page.content()).toMatch("Hakuna Matata");
});
