// src/objects/
// users_management.ts

import { User } from "./user.ts";

const adminUser = new User("admin", "123456", 27, "admin@tredgate.cz");
adminUser.logUser();
adminUser.setAge(54);
console.log("Username admina: " + adminUser.getUsername());
console.log("Email: " + adminUser.getEmail());
// console.log(adminUser.role); // ? Nelze zavolat private property/metodu
console.log(adminUser.username);
