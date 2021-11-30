const _BASELOCAL =
    window.location.hostname === 'daftar.rsabhk.co.id'
      ? `https://${window.location.hostname}`
      : `http://localhost`,
  _BASE = _BASELOCAL,
  _IPAKTIVASI = 'http://192.168.12.3';

const isProdMode = window.location.hostname === 'daftar.rsabhk.co.id';

const _PORTPHP = '2222',
  _PORTLOCAL = isProdMode ? '' : ':3000',
  _PORTTRANSAKSI = isProdMode ? '' : ':5665',
  _PORTAKTIVASI = isProdMode ? '' : ':5775',
  // _PORTAKTIVASI = ':5775',
  _PORT = isProdMode ? '' : _PORTLOCAL;

export const BASE_URL = {
  _BASED: `${_BASE}${_PORT}/api/`,
  _BASE_ELEARNING:`${_BASE}${_PORT}/api/elearning/`,
  _BASE_MASTER: `${_BASE}${_PORT}/api/master/`,
  _BASE_TRANSAKSI: `${_BASE}${_PORTTRANSAKSI}/transaksi`,
  _BASE_AUTHSERVICE: `${_BASE}${_PORTLOCAL}/api/auth/`,
  _BASE_WEBAPP: `${_BASE}${_PORTLOCAL}/api/web/`,
  _BASE_CENTRALAPP:`${_BASE}${_PORTLOCAL}/api/central-app/`,
};
