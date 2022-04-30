/**
 * 아래와 같은 babel.config.json 이 있어야 함.
 * 자동으로 jest-babel이 babel.config.json 파일을 인식하고, 컴파일 후 jest 실행함.
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "node": "current"
        }
      }
    ]
  ],
  "plugins": ["@babel/plugin-transform-runtime"]
}
**/

import 'fake-indexeddb/auto';

const testContent = '추가 및 초기화 기능이 구현되어 있다.';
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

describe(testContent, () => {
  let getListButton;
  let wordInput;
  let addWordButton;
  let deleteListButton;
  let wordList;

  beforeAll(() => {
    document.body.innerHTML = `
<body>
  <div class="container">
    <div class="item">
      <h3>프로그래밍 관련 용어 모음</h3>
        <button id="buttonGetWordList">목록 불러오기</button>
        <br />
        <ol id="wordList"></ol>
    </div>
    <div class="item">
      <h3>용어 추가하기</h3>
      <form>
        <input type="text" id="inputWord" placeholder="React" />
        <button id="buttonAddWord">추가</button>
      </form>
    </div>
    <div class="item">
      <h3>용어 모음 초기화하기</h3>
      <form>
        <button id="buttonDeleteAll">초기화</button>
      </form>
    </div>
  </div>
    `;
    import('./index.js');

    wordList = document.querySelector('#wordList');
    getListButton = document.querySelector('#buttonGetWordList');
    wordInput = document.querySelector('#inputWord');
    addWordButton = document.querySelector('#buttonAddWord');
    deleteListButton = document.querySelector('#buttonDeleteAll');
  });

  it('test1', async () => {
    // 초기 데이터 삽입 딜레이 대기
    await wait(100);

    wordInput.value = 'docker';
    addWordButton.click();
    await wait(100);

    getListButton.click();
    await wait(100);

    expect(wordList.innerHTML.includes('docker')).toBe(true);
  });

  it('test2', async () => {
    wordInput.value = 'kubernetes';
    addWordButton.click();
    await wait(100);

    getListButton.click();
    await wait(100);

    expect(wordList.innerHTML.includes('kubernetes')).toBe(true);
  });

  it('test3', async () => {
    expect(wordList.innerHTML.includes('kubernetes')).toBe(true);
    deleteListButton.click();
    await wait(100);

    getListButton.click();
    await wait(100);

    expect(wordList.innerHTML.includes('docker')).not.toBe(true);
  });

  it('test4', async () => {
    wordInput.value = 'web3';
    addWordButton.click();
    await wait(100);

    getListButton.click();
    await wait(100);

    expect(wordList.innerHTML.includes('web3')).toBe(true);
  });

  it('test5', async () => {
    expect(wordList.innerHTML.includes('web3')).toBe(true);
    deleteListButton.click();
    await wait(100);

    getListButton.click();
    await wait(100);

    expect(wordList.innerHTML.includes('web3')).not.toBe(true);
  });
});
