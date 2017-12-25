import { AbstractControl } from "@angular/forms";
import { ValidationErrors } from "@angular/forms/src/directives/validators";

export class UsernameValidators {
    static cannotContainSpace(c : AbstractControl) : ValidationErrors | null {
        if ((c.value as string).indexOf(' ') >= 0) {
            return {
                cannotContainSpace: true
            };
        }
        return null;
    }

    static shouldBeUnique(c : AbstractControl) : Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                if (c.value === 'mosh') {
                    resolve({
                        shouldBeUnique : true
                    });
                } else {
                    resolve(null);
                }
            }, 2000);
        });

 

    }
}