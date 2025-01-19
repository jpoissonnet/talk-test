import { expect, test } from "@playwright/test";

test("can click the button and get a response", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await page.getByRole("button").click();
  await expect(page.getByTitle("status")).toHaveText("Request successful!");
});
