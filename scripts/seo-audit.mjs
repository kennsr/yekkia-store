import { chromium } from "playwright";

async function auditSEO(url) {
  console.log(`\n🔍 Auditing SEO for: ${url}\n`);

  const browser = await chromium.launch();
  const page = await browser.newPage();

  try {
    await page.goto(url, { waitUntil: "networkidle" });

    // 1. Title Check
    const title = await page.title();
    const titleLength = title.length;
    console.log(`📌 Title: "${title}"`);
    console.log(
      `   Length: ${titleLength} characters (${titleLength >= 30 && titleLength <= 60 ? "✅ Optimal" : "❌ Suboptimal (30-60 req)"})`,
    );

    // 2. Meta Description Check
    const description = await page
      .$eval('meta[name="description"]', (el) => el.content)
      .catch(() => null);
    if (description) {
      const descLength = description.length;
      console.log(`📝 Description: "${description.substring(0, 50)}..."`);
      console.log(
        `   Length: ${descLength} characters (${descLength >= 130 && descLength <= 160 ? "✅ Optimal" : "❌ Suboptimal (130-160 req)"})`,
      );
    } else {
      console.log(`❌ Description: Not found!`);
    }

    // 3. H1 Count Check
    const h1Count = await page.$$eval("h1", (els) => els.length);
    console.log(
      `🏷️  H1 Count: ${h1Count} (${h1Count === 1 ? "✅ Optimal" : "❌ Suboptimal (exactly 1 req)"})`,
    );

    // 4. Word Count Check
    const text = await page.$eval("body", (el) => el.innerText);
    const wordCount = text
      .split(/\s+/)
      .filter((word) => word.length > 0).length;
    console.log(
      `📖 Word Count: ${wordCount} words (${wordCount >= 400 ? "✅ Optimal" : "❌ Suboptimal (>400 req)"})`,
    );

    console.log("\n✅ Audit complete.\n");
  } catch (error) {
    console.error(`❌ Error auditing ${url}: ${error.message}`);
    console.log("Tip: Make sure your dev server is running (npm run dev)");
  } finally {
    await browser.close();
  }
}

const targetUrl = process.argv[2] || "http://localhost:3000/id";
auditSEO(targetUrl);
