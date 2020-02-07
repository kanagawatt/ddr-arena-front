import { get, post } from '../../../src/common/backendConnector'

test('get test', () => {
  expect(get(3)).toBe('')
})

test('post test', () => {
  expect(post(3)).toBe('')
})
