import {Injectable} from '@angular/core';
import {User} from '../objects/user';
@Injectable()
export class UserService {

  constructor() {}

  getAll(): User[] {
    return [
      {name: "Harjeet Singh", email: "abc@gmail.com", phone: 85748483, city: "Chandigarh", profession: "PHP Developer"},
      {name: "Yogesh", email: "vds@gmail.com", phone: 85748483, city: "Chandigarh", profession: "PHP Developer"}
    ];
  }

}
