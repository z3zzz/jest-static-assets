const testContent = "require을 활용한 dom 테스트."

describe(testContent, () => {
  let container
  beforeAll(() => {
    document.body.innerHTML = "<div id='root'></div>";
    require("./index.js")
    container = document.body.innerHTML
  })

  it("test1", async () => {
    expect(container.includes("bio")).toBe(true)
  });
  
  it("test2", async () => {
    expect(container.includes("form")).toBe(true)
  });
  
  it("test3", async () => {
    expect(container.includes("nput")).toBe(true)
  });
  
  it("test4", async () => {
    expect(container.includes("search")).toBe(true)
  });
  
  it("test5", async () => {
    expect(container.includes("container")).toBe(true)
  });
});
