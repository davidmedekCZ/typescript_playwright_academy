export class User {
  readonly username: string; // ? readonly - modifikátor neměnosti  (const), musíme inicializovat ihned nebo v constructoru
  password: string;
  age: number;
  email: string;
  isActive = true;
  private role = "user"; // ? Property role lze použít jen uvnitř třídy, nejde zavolat "zvenku"

  constructor(username: string, password: string, age: number, email: string) {
    this.username = username;
    this.password = password;
    this.age = age;
    this.email = email;
    console.log(
      `Vytvořen uživatel: ${this.username}, heslo: ${this.password}, věk: ${this.age}, email: ${this.email}, je aktivní? ${this.isActive}`
    );
  }

  getUsername(): string {
    return this.username;
  }

  logUser(): void {
    console.log(
      `Informace o uživateli: ${this.username}, věk: ${this.age}, aktivován: ${this.isActive}`
    );
  }

  setAge(newAge: number) {
    const oldAge = this.age;
    this.age = newAge;
    console.log(
      `Změna věku uživatele ${this.username} z ${oldAge} na ${this.age}`
    );
  }

  getEmail(): string {
    return this.email;
  }
}
