import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserSession {
  accessToken: string;
  userId: number;

  constructor() {}

  setToken(token: string, userId: number) {
    this.accessToken = token;
    this.userId = userId;
  }

  getToken() {
    return {
      accessToken: this.accessToken,
      userId: this.userId,
    };
  }

  public destroy(): void {
    this.accessToken = null;
  }
}

export class AuthService {
  session: UserSession;
  constructor() {
    this.session = new UserSession();
  }

  public isLoggedIn() {
    return !!this.session.getToken().accessToken;
  }

  getCurrentSession() {
    return this.session;
  }

  public logOut() {
    if (this.session) this.session.destroy();
  }

  public signIn(accessToken: string, userId: number) {
    return new Promise((resolve, reject) => {
      if (!accessToken || !userId) return;

      this.session.setToken(accessToken, userId);
      resolve();
    });
  }
}
