import { IIngredientResponse, INewOrderResponse } from './interfaces';
import { apiConfig } from './variables';

class Api {
  constructor(private baseUrl: string) {}

  private parseResponse<T>(res: Response): Promise<T> {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
  }

  ingredientsRequest() {
    return fetch(`${this.baseUrl}/ingredients`, {
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => this.parseResponse<IIngredientResponse>(res));
  }

  postOrder(accessToken: string, order: string[]) {
    return fetch(`${this.baseUrl}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: accessToken,
      },
      body: JSON.stringify({
        ingredients: order,
      }),
    }).then((res) => this.parseResponse<INewOrderResponse>(res));
  }

  createUser(name: string, email: string, password: string) {
    return fetch(`${this.baseUrl}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    }).then((res) => this.parseResponse(res));
  }

  logIn(email: string, password: string) {
    return fetch(`${this.baseUrl}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then((res) => this.parseResponse(res));
  }

  logOut(refreshToken: string) {
    return fetch(`${this.baseUrl}/auth/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: refreshToken,
      }),
    }).then((res) => this.parseResponse(res));
  }

  getUser(accessToken: string) {
    return fetch(`${this.baseUrl}/auth/user`, {
      headers: {
        'Content-Type': 'application/json',
        authorization: accessToken,
      },
    }).then((res) => this.parseResponse(res));
  }

  patchUser(accessToken: string, name: string, email: string, password: string) {
    return fetch(`${this.baseUrl}/auth/user`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        authorization: accessToken,
      },
      body: JSON.stringify({
        email: email,
        name: name,
        password: password,
      }),
    }).then((res) => this.parseResponse(res));
  }

  forgotPassword(email: string) {
    return fetch(`${this.baseUrl}/password-reset`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
      }),
    }).then((res) => this.parseResponse(res));
  }

  resetPassword(password: string, token: string) {
    return fetch(`${this.baseUrl}/password-reset`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        password,
        token,
      }),
    }).then((res) => this.parseResponse(res));
  }

  refreshToken(refreshToken: string) {
    return fetch(`${this.baseUrl}/auth/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: refreshToken,
      }),
    }).then((res) => this.parseResponse(res));
  }
}

export default new Api(apiConfig.baseUrl);
