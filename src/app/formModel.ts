import { FormControl } from "@angular/forms"

export interface IForm {
    firstName: FormControl<string>;
    lastName: FormControl<string>;
    nickName: FormControl<string>;
    email: FormControl<string>;
    birthYear: FormControl<number>;
    passNumber: FormControl<number>;
}