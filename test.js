import fs from "fs";
import path from "path";
import { JSDOM } from "jsdom";
import {
  getByText,
  findByText,
  findByRole,
  waitFor,
} from "@testing-library/dom";
import "@testing-library/jest-dom";

const htmlPath = path.resolve("public", "index.html");

describe("testing static files", () => {
  let container;
  beforeEach(() => {
    const html = fs.readFileSync(htmlPath, "utf8");

    const { document } = new JSDOM(html, {
      url: `file://${htmlPath}`,
      runScripts: "dangerously",
      resources: "usable",
    }).window;

    container = document.body;
  });

  it("should show default texts", async () => {
    const text = await findByText(container, /소개/);
    expect(text).toBeTruthy();
  });

  it("should show hobby texts when clicking Hobby button", async () => {
    const hobbyBtn = await findByRole(container, "button", { name: "Hobby" });

    hobbyBtn.click();
    await waitFor(() => expect(findByText(container, /취미/)).toBeTruthy());

    const text = await findByText(container, /취미/);
    expect(text).toBeTruthy();
  });

  it("should show programming texts when clicking Programming button", async () => {
    const programmingBtn = await findByRole(container, "button", {
      name: "Programming",
    });

    programmingBtn.click();
    await waitFor(() => expect(getByText(container, /프로/)).toBeTruthy());

    const text = await findByText(container, /프로그래밍/);
    expect(text).toBeTruthy();
  });

  it("should show contact texts when clicking Communication button", async () => {
    const contactBtn = await findByRole(container, "button", {
      name: "Communication",
    });

    contactBtn.click();
    await waitFor(() => expect(getByText(container, /소통/)).toBeTruthy());

    const text = await findByText(container, /소통/);
    expect(text).toBeTruthy();
  });
});
