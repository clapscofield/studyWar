import axios from "axios";

const API_URL = "http://localhost:7000/api/authEstudante/";

class AuthServiceEstudante {
  login(matricula, senha) {
    return axios
      .post(API_URL + "signin", { matricula, senha })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("userEstudante", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("userEstudante");
  }
}

export default new AuthServiceEstudante();