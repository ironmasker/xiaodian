import { ValidationErrors } from '@angular/forms/src/directives/validators';
import { AbstractControl } from '@angular/forms';

export class PasswordValidators {
    static validOldPassword(c: AbstractControl) : Promise<ValidationErrors | null> {
        return new Promise((resolve) => {
            if (c.value !== '1234') {
                resolve( {
                    invalidOldPassword: true
                });
            } else {
                resolve(null);
            }
        });
    }

    static passwordShouldMatch(c: AbstractControl) : ValidationErrors | null {
        let newPwd  = c.get("newPwd");
        let confPwd  = c.get("confPwd");
        if (newPwd.value !== confPwd.value) {
            return {
                passwordsShouldMatch: true
            };
        }
        return null;
    }
}