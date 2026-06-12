import { expect, test } from "@playwright/test"

test.describe("Über uns", () => {
  test("renders the complete Figma page content", async ({ page }) => {
    await page.goto("/uber-uns")

    await expect(
      page.getByRole("heading", { level: 1, name: "Unsere Geschichte" }),
    ).toBeVisible()

    for (const year of ["2002", "2016–2019", "2022", "2024", "2025"]) {
      await expect(page.getByText(year, { exact: true }).last()).toBeVisible()
    }

    await expect(
      page.getByRole("heading", {
        name: "Familientradition trifft Innovation",
      }),
    ).toBeVisible()
    await expect(
      page.getByText("Professionelle Dienstleistungen seit 2002"),
    ).toBeVisible()
    await expect(
      page.getByText("Modernes Team mit Herz und Verstand"),
    ).toBeVisible()
    await expect(
      page.getByRole("heading", {
        name: "Bereit für erstklassige Facility Services?",
      }),
    ).toBeVisible()

    await expect(page.locator('img[src*="about-tradition"]')).toBeVisible()
    await expect(page.locator('img[src*="about-team"]')).toBeVisible()
    await expect(
      page.getByRole("link", { name: "+41 79 704 14 11" }),
    ).toHaveAttribute("href", "tel:+41797041411")
  })

  test("keeps typed navigation localized", async ({ page }) => {
    await page.goto("/uber-uns")

    await expect(
      page.getByRole("link", { name: "Leistungen" }).first(),
    ).toHaveAttribute("href", "/leistungen")
    await expect(
      page.getByRole("link", { name: "Termin vereinbaren" }).first(),
    ).toHaveAttribute("href", "/#kontakt")

    await page.goto("/de/uber-uns")

    await expect(
      page.getByRole("link", { name: "Leistungen" }).first(),
    ).toHaveAttribute("href", "/de/leistungen")
    await expect(
      page.getByRole("link", { name: "Termin vereinbaren" }).first(),
    ).toHaveAttribute("href", "/de#kontakt")
  })
})
