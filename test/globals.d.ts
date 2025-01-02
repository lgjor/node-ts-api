// filepath: /i:/node-ts-api/test/globals.d.ts

// declare var testRequest: import('supertest').SuperTest<import('supertest').Test>;

declare global {
  var testRequest: import('supertest/lib/agent');
}

export {};
