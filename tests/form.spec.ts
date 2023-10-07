import { test, expect } from "@playwright/test";

test("input form data", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/input-form-demo"
  );

  await page.locator('[placeholder="Name"]').fill("Moyinoluwa");
  //   use when locating form that do not have labels but do have placeholder text.
  //   await page.getByPlaceholder("Email").fill("strabie0@gmail.com");
  await page.locator('[placeholder="Email"]').fill("strabie0@gmail.com");
  await page.locator('[placeholder="Password"]').fill("ABC123");
  await page.locator('[placeholder="Company"]').fill("musicport");
  await page.locator('[placeholder="Website"]').fill("musicport.io");
  await page.locator('select[name="country"]').selectOption("GB");
  await page.locator('[placeholder="City"]').fill("London");
  await page.getByPlaceholder("Address 1").fill("123 New road");
  await page.getByPlaceholder("Address 2").fill("New Street");
  await page.getByPlaceholder("State").fill("Scotland");
  await page.getByPlaceholder("Zip code").fill("abc123");
  await page.getByRole("button", { name: "Submit" }).click();

  const locator = page.getByText(
    "Thanks for contacting us, we will get back to you shortly."
  );
  await expect(locator).toBeVisible();
});
