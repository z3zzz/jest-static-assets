const { func } = require('./countDownThree');

const testContent = '3->2->1->끝이 차례로 출력된다.';

jest.useFakeTimers();
const spy = jest.spyOn(console, 'log');

describe(testContent, () => {
  beforeEach(() => {
    spy.mockClear();
    jest.clearAllTimers();
  });

  it('test1', async () => {
    func();
    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenLastCalledWith(3);
  });

  it('test2', async () => {
    func();
    jest.advanceTimersByTime(1001);
    expect(console.log).toHaveBeenCalledTimes(2);
    expect(console.log).toHaveBeenLastCalledWith(2);
  });

  it('test3', async () => {
    func();
    jest.advanceTimersByTime(2001);
    expect(console.log).toHaveBeenCalledTimes(3);
    expect(console.log).toHaveBeenLastCalledWith(1);
  });

  it('test4', async () => {
    func();
    jest.advanceTimersByTime(3001);
    expect(console.log).toHaveBeenCalledTimes(4);
    expect(console.log).toHaveBeenLastCalledWith('끝');
  });

  it('test5', async () => {
    func();
    jest.advanceTimersByTime(10000);
    expect(console.log).toHaveBeenCalledTimes(4);
    expect(console.log).toHaveBeenLastCalledWith('끝');
  });
});
