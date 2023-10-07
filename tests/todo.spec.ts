import { test, expect } from "@playwright/test";

test.describe("New Todo", () => {
  test("has heading Add Task", async ({ page }) => {
    await page.goto("/");
    // Expect a Heading Add Task
    await expect(page.getByRole("heading", { name: "Add Task" })).toBeVisible();
  });

  test("form input", async ({ page }) => {
    page.goto("/");

    await page.getByPlaceholder("Title").fill("IT Report");

    await page.getByPlaceholder("Task").fill("Section 1");

    await page.getByRole("button", { name: "Create" }).click();

    await expect(
      page.getByRole("heading", { name: "IT Report" })
    ).toBeVisible();

    await expect(page.getByText("Section 1")).toBeVisible();

    await page.getByRole("button", { name: "Edit" }).click();

    await expect(page.getByLabel("editTItle")).toHaveValue("IT Report");

    await page.getByLabel("editTitle").fill("Industrial Training");

    await expect(page.getByLabel("editTask")).toHaveValue("Section 1");

    await page.getByLabel("editTask").fill("Section 2");

    await page.getByRole("button", { name: "Save" }).click();

    await expect(
      page.getByRole("heading", { name: "Industrial Training" })
    ).toBeVisible();

    await expect(page.getByText("Section 2")).toBeVisible();
  });

  test("Delete todo", async ({ page }) => {
    page.goto("/");

    await page.locator('button:has-text("Delete")').click();
  });

  test("test for an empty list", async ({ page }) => {
    page.goto("/");
    await page.getByLabel("loading...").isVisible();

    const visibleEmptyList = await page.getByText("Empty List");
    await expect(visibleEmptyList).toBeVisible();
  });
});
