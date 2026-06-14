import { chromium } from "playwright";
import fs from "fs";
import path from "path";

(async () => {
  console.log("Starting E2E verification test...");
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 }
  });
  const page = await context.newPage();

  const screenshotDir = "C:/Users/Admin/.gemini/antigravity/brain/52e72662-2442-40ab-afd1-1319cb642c32";

  try {
    // 1. Navigate to landing page
    console.log("Navigating to http://localhost:3000...");
    await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
    
    // Take screenshot of landing page
    await page.screenshot({ path: path.join(screenshotDir, "test_1_landing.png") });
    console.log("Landing page screenshot saved.");

    // 2. Open Auth Overlay Modal
    console.log("Opening login modal...");
    await page.click("button:has-text('Đăng nhập')");
    await page.waitForSelector("input[placeholder='Nhập tên đăng nhập hoặc email...']");
    
    // Fill credentials
    console.log("Entering credentials...");
    await page.fill("input[placeholder='Nhập tên đăng nhập hoặc email...']", "admin");
    await page.fill("input[placeholder='Nhập mật khẩu...']", "admin");
    
    await page.screenshot({ path: path.join(screenshotDir, "test_2_login_modal.png") });
    
    // Submit
    console.log("Submitting login form...");
    await Promise.all([
      page.click("button[type='submit']:has-text('Đăng nhập')"),
      page.waitForSelector(".bento-subject-card, h1:has-text('Chọn môn học')")
    ]);
    
    await page.screenshot({ path: path.join(screenshotDir, "test_3_subject_select.png") });
    console.log("Login successful. On Subject Selection screen.");

    // 3. Select subject
    console.log("Selecting Tư tưởng Hồ Chí Minh subject...");
    await page.click(".bento-subject-card:has-text('Tư tưởng Hồ Chí Minh')");
    await page.waitForSelector(".book-wrap");
    
    await page.screenshot({ path: path.join(screenshotDir, "test_4_hero_book.png") });
    console.log("Lesson Hero page loaded successfully.");

    // Check body overflow is hidden (Scroll lock active)
    const overflowInitial = await page.evaluate(() => window.getComputedStyle(document.body).overflow);
    console.log("Initial body overflow:", overflowInitial);
    if (overflowInitial !== "hidden") {
      throw new Error(`Expected body overflow to be 'hidden' but got '${overflowInitial}'`);
    }

    // 4. Trigger transition
    console.log("Triggering 3D book transition by scrolling down...");
    // Simulate scroll down wheel event
    await page.mouse.wheel(0, 100);
    
    // Wait for the transition to finish (approx 4.5 seconds)
    console.log("Waiting for transition to complete and load study page...");
    await page.waitForTimeout(4500);
    
    await page.screenshot({ path: path.join(screenshotDir, "test_5_study_loaded.png") });

    // Check body overflow is restored
    const overflowAfter = await page.evaluate(() => window.getComputedStyle(document.body).overflow);
    console.log("Body overflow after transition:", overflowAfter);

    // 5. Scroll down to test the cards appearance
    console.log("Scrolling down inside the lesson content...");
    await page.evaluate(() => window.scrollTo(0, 500));
    await page.waitForTimeout(1000); // Wait for GSAP transitions

    await page.screenshot({ path: path.join(screenshotDir, "test_6_scrolled_cards.png") });
    
    // Retrieve opacity and blur filter of cinematic-card elements
    const cardStyles = await page.evaluate(() => {
      const cards = Array.from(document.querySelectorAll(".cinematic-card"));
      return cards.slice(0, 5).map((card, idx) => {
        const style = window.getComputedStyle(card);
        return {
          index: idx,
          opacity: style.opacity,
          filter: style.filter,
          transform: style.transform
        };
      });
    });
    
    console.log("Card styles after scrolling:", JSON.stringify(cardStyles, null, 2));

    // Check if cards are fully visible (opacity should be near 1 and filter blur should be none/0px)
    for (const card of cardStyles) {
      if (parseFloat(card.opacity) < 0.8 || card.filter.includes("blur")) {
        console.warn(`Warning: Card ${card.index} might still be blurry or hidden:`, card);
      }
    }

    console.log("E2E verification completed successfully!");
  } catch (error) {
    console.error("Test failed with error:", error);
  } finally {
    await browser.close();
  }
})();
