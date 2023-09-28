import { AbstractControl, ValidationErrors } from "@angular/forms"


export function NoVueValidator(control: AbstractControl): ValidationErrors | null { 
    if(typeof control.value === 'string' && control.value.toLowerCase() === 'vue') {
        return {
            noVue:true
        }
    }
    return null;  
}