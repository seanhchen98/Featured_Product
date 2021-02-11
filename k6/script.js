/* eslint-disable prefer-const */
/* eslint-disable func-names */
/* eslint-disable import/no-unresolved */
import http from 'k6/http';
import { check, sleep } from 'k6';
import { Rate } from 'k6/metrics';

let errorRate = new Rate('errorRate');

export let options = {
  // discardResponseBodies: true,
  // scenarios: {
  //   contacts: {
  //     executor: 'ramping-arrival-rate',
  //     startRate: 1000,
  //     timeUnit: '1s',
  //     preAllocatedVUs: 100,
  //     maxVUs: 500,
  //     stages: [
  //       { target: 10, duration: '2m' },
  //       { target: 10, duration: '5m'},
  //       { target: 100, duration: '2m'},
  //       { target: 100, duration: '5m' },
  //       { target: 500, duration: '2m' },
  //       { target: 500, duration: '5m' },
  //       { target: 750, duration: '2m' },
  //       { target: 750, duration: '5m' },
  //       { target: 1000, duration: '2m' },
  //       { target: 1000, duration: '5m' },
  //       { target: 0, duration: '2m' },
  //     ]
  //   }
  // }
  stages: [
    { target: 10, duration: '2m' },
    { target: 10, duration: '5m' },
    { target: 100, duration: '2m'},
    { target: 100, duration: '5m' },
    { target: 500, duration: '2m' },
    { target: 500, duration: '5m' },
    { target: 750, duration: '2m' },
    { target: 750, duration: '5m' },
    { target: 1000, duration: '2m' },
    { target: 1000, duration: '5m' },
    { target: 0, duration: '2m' },
  ]
};

export default function () {
  const product = Math.floor(Math.random() * 10000000);
  const res = http.get(`http://localhost:3001/api/product/${product}`);
  check(res, {'status was 200': (r) => r.status === 200});
  errorRate.add(res.status >= 400);
  sleep(1);
};
