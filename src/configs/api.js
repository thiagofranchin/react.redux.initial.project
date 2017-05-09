export const api = {
  dev : {
    baseUrl: 'http://localhost:8080/kpi/'
  },
  stagging : {
    baseUrl: 'http://staging.api.chat.ingaia.com.br/kpi/'
  },
  prod:{
    baseUrl: 'https://api-chat.ingaia.com.br/kpi/'
  },
  get authToken (){
    return document.cookie.replace(/(?:(?:^|.*;\s*)webapi_token\s*\=\s*([^;]*).*$)|^.*$/, '$1');
  },
  token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IlpNTTlPMzMtZ3d1OTZ4WVNaSmlHWk91clpBWSIsImtpZCI6IlpNTTlPMzMtZ3d1OTZ4WVNaSmlHWk91clpBWSJ9.eyJpc3MiOiJodHRwOi8vc3RhZ2luZy1hdXRoLWNoYXQuaW5nYWlhLmNvbS5ici8iLCJhdWQiOiJodHRwOi8vc3RhZ2luZy1hdXRoLWNoYXQuaW5nYWlhLmNvbS5ici9yZXNvdXJjZXMiLCJleHAiOjE0OTA5Nzc4OTAsIm5iZiI6MTQ5MDg5MTQ5MCwiY2xpZW50X2lkIjoidmFsdWVnYWlhIiwic2NvcGUiOiJsaXN0aW5ncyIsInN1YiI6Implc3NlLnBpbmhlaXJvQGktdmFsdWUuY29tLmJyIiwiYXV0aF90aW1lIjoxNDkwODkxNDkwLCJpZHAiOiJpZHNydiIsInJvbGUiOiJEaXJldG9yIiwiaWQiOiIyNCIsImNvbXBhbnlfaWQiOiIxIiwibmV0d29ya19pZCI6IjEiLCJhbXIiOlsicGFzc3dvcmQiXX0.nJsOnmibUlSOlDzIiAYagyNvn3rrpem-ct15yzeno1HhmY9adxMWnNpZGY1p11wDsk_kp-9_pHl4GIg3-T1zs1IOpWOKhFpy5pNGIuqnqVZuAO-VaGEesPnTxixKmB7e8NolvKC9mycHuITvxm67C5TjVvmmFONGXFw4r_fMqCXivpTyaba4JJU3KQsNYaK6BESxqEL6RX8_p3aDEFfqWSdu4IDxlSlnmNJUJOEuPUFB92qxeeYjY7Ko9Qdoy9q0Ua_jZ2VBYHrfQiWoIKMAlm2PT--n4yQnpPsluOzSfHo0uCHX14uOoLQb24TbmlrESVCzuSL9-44ElrSxWy2pAg'
};
