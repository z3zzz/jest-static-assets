// 어떤 채점인지에 대한 내용입니다.
const testContent = '색을 입력 시, data.json의 value 값이 나온다.';

const data = require('./data.json');
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(data),
  })
);

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

describe(testContent, () => {
  let inputElem;
  let buttonElem;
  let hexaCodeElem;

  beforeAll(() => {
    document.body.innerHTML = `
      <form>
        <label class="label" >색
          <input type="text" id="inputColor" placeholder="red" />
        </label>
        <br />
        <button id="buttonSubmit">클릭</button>
        <h3 id="hexaCode"></h3>
      </form>
    `;
    require('./index.js');

    inputElem = document.querySelector('#inputColor');
    buttonElem = document.querySelector('#buttonSubmit');
    hexaCodeElem = document.querySelector('#hexaCode');
  });

  it('test1', async () => {
    inputElem.value = 'red';
    buttonElem.click();

    await wait(100);
    expect(fetch).toHaveBeenCalledWith(expect.stringMatching('data.json'));
    expect(hexaCodeElem.innerHTML.includes('#f00')).toBe(true);
  });

  it('test2', async () => {
    inputElem.value = 'green';
    buttonElem.click();

    await wait(100);
    expect(fetch).toHaveBeenCalledWith(expect.stringMatching('data.json'));
    expect(hexaCodeElem.innerHTML.includes('#0f0')).toBe(true);
  });

  it('test3', async () => {
    inputElem.value = 'black';
    buttonElem.click();

    await wait(100);
    expect(fetch).toHaveBeenCalledWith(expect.stringMatching('data.json'));
    expect(hexaCodeElem.innerHTML.includes('#000')).toBe(true);
  });

  it('test4', async () => {
    inputElem.value = 'yellow';
    buttonElem.click();

    await wait(100);
    expect(fetch).toHaveBeenCalledWith(expect.stringMatching('data.json'));
    expect(hexaCodeElem.innerHTML.includes('#ff0')).toBe(true);
  });

  it('test5', async () => {
    inputElem.value = 'magenta';
    buttonElem.click();

    await wait(100);
    expect(fetch).toHaveBeenCalledWith(expect.stringMatching('data.json'));
    expect(hexaCodeElem.innerHTML.includes('#f0f')).toBe(true);
  });
});
