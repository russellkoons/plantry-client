// A function that normalizes the error responses from the API so I can implement them in the app

export const normalizeErrors = res => {
  if (!res.ok) {
    if (
      res.headers.has('content-type') &&
      res.headers.get('content-type').startsWith('application/json')
    ) {
      return res.json().then(err => Promise.reject(err));
    }
    return Promise.reject({
      code: res.status,
      message: res.statusText
    });
  }
  return res;
};