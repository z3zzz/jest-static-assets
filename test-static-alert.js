// 어떤 채점인지에 대한 내용입니다. 
const testContent = "이름 입력 후 버튼 클릭 시, 2초 뒤에 alert가 뜬다."

jest.useFakeTimers()
const spy = jest.spyOn(globalThis, "alert")

describe(testContent, () => {
  beforeAll(() => {
    document.body.innerHTML = `
      <form>
        <label class="label" >이름
          <input type="text" id="inputName" placeholder="박태환" />
        </label>
        <br />
        <button id="buttonSubmit">클릭</button>
      </form>
    `;
    require("./index.js")
  })

  afterEach(() => {
    spy.mockClear()
    jest.clearAllTimers()
  })

  it("test1", async () => {
    const buttonElem = document.querySelector('#buttonSubmit')
    buttonElem.click()
    jest.advanceTimersByTime(1001)
    
    expect(alert).toHaveBeenCalledTimes(0)
  });
  
  it("test2", async () => {
    const buttonElem = document.querySelector('#buttonSubmit')
    buttonElem.click()
    jest.advanceTimersByTime(2001)
    
    expect(alert).toHaveBeenCalledTimes(1)
  });
  
  it("test3", async () => {
    const nameElem = document.querySelector('#inputName')
    nameElem.value = "오바마" 
    
    const buttonElem = document.querySelector('#buttonSubmit')
    buttonElem.click()
    jest.advanceTimersByTime(2001)
    
    expect(alert).toHaveBeenLastCalledWith(expect.stringMatching("오바마"))
  });
  
  it("test4", async () => {
    const nameElem = document.querySelector('#inputName')
    nameElem.value = "트럼프" 
    
    const buttonElem = document.querySelector('#buttonSubmit')
    buttonElem.click()
    jest.advanceTimersByTime(1999)
    
    expect(alert).toHaveBeenCalledTimes(0)
    expect(alert).not.toHaveBeenLastCalledWith(expect.stringMatching("트럼프"))
  });
  
  it("test5", async () => {
    const nameElem = document.querySelector('#inputName')
    nameElem.value = "트럼프" 
    
    const buttonElem = document.querySelector('#buttonSubmit')
    buttonElem.click()
    jest.advanceTimersByTime(3000)
    
    expect(alert).toHaveBeenCalledTimes(1)
    expect(alert).toHaveBeenLastCalledWith(expect.stringMatching("트럼프"))
  });
});
