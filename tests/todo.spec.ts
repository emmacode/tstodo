import { test, expect } from "@playwright/test";

test.describe("New Todo", () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting URL before each test
    // await page.goto("http://localhost:3000/");
    await page.goto("/");
  });

  test("has heading Add Task", async ({ page }) => {
    // Expect a Heading Add Task
    await expect(page.getByRole("heading", { name: "Add Task" })).toBeVisible();
  });

  test("form input", async ({ page }) => {
    // Fill the Title
    await page.getByPlaceholder("Title").fill("IT Report");
    // Fill Task to do
    await page.getByPlaceholder("Task").fill("Section 1");
    // Click Create button to create todo
    await page.getByRole("button", { name: "Create" }).click();

    // Checks if a heading with IT Report is visible on the screen
    await expect(
      page.getByRole("heading", { name: "IT Report" })
    ).toBeVisible();
    // Checks if a text with Section 1 is visible on the screen
    await expect(page.getByText("Section 1")).toBeVisible();

    // Click on the Edit button
    await page.getByRole("button", { name: "Edit" }).click();
    // Checks with the getByLabel method to know if the input have a text with value IT Report
    await expect(page.getByLabel("editTItle")).toHaveValue("IT Report");
    // Replaces the editTitle value
    await page.getByLabel("editTitle").fill("Industrial Training");
    // Checks editTasks have a value Section 1
    await expect(page.getByLabel("editTask")).toHaveValue("Section 1");
    // Replaces editTask value
    await page.getByLabel("editTask").fill("Section 2");
    // Click on Save button
    await page.getByRole("button", { name: "Save" }).click();

    await expect(
      page.getByRole("heading", { name: "Industrial Training" })
    ).toBeVisible();

    await expect(page.getByText("Section 2")).toBeVisible();
  });

  test("Delete Task", async ({ page }) => {
    // Delete Todo
    await page.getByRole("button", { name: "Delete" }).click();
  });

  test("test for an empty list", async ({ page }) => {
    await page.getByLabel("loading...").isVisible();

    // await page.getByText("Empty List").isVisible();
    await expect(page.getByText("Empty List")).toBeVisible();
  });
});
