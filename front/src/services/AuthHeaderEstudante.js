export default function authHeaderEstudante() {
    const user = JSON.parse(localStorage.getItem('userEstudante'));
  
    if (user && user.accessToken) {
      // for Node.js Express back-end
      return { 'x-access-token': user.accessToken };
    } else {
      return {};
    }
  }