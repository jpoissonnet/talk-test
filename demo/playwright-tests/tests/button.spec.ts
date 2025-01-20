import { expect, test } from "@playwright/test";

test("can click the button and get a response", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await page.getByRole("button").click();
  await expect(page.getByTitle("status")).toHaveText("Request successful!");
});

Array(10)
  .fill(0)
  .map((_, i) => 99 + i)
  .forEach((delay) => {
    test(`can click the button and get a response with a ${delay}ms delay`, async ({
      page,
    }) => {
      await page.goto(`http://localhost:3000/${delay}`);
      await page.getByRole("button").click();
      await expect
        .poll(() => page.getByTitle("status").textContent(), { intervals: [0] })
        .toBe("Request successful!");
    });
  });
