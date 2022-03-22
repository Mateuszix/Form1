import { LightningElement } from 'lwc';

import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class FirstLWC extends LightningElement {

    age;

    newdateVal(event){
        console.log( event.detail.value );
        let d1 = new Date( event.detail.value );
        let d2 = new Date();

        let varAge = d2.getYear() - d1.getYear();
        console.log( varAge );

        if ( d1.getUTCMonth() < d2.getUTCMonth() ) {
            
            console.log( 'Month' );
            --varAge;

        }else if ( d1.getUTCMonth() === d2.getUTCMonth() ) {
            
            console.log( 'Day' );
            console.log( d1.getUTCDate() );
            console.log( d2.getUTCDate() );
            
            if ( d1.getUTCDate() < d2.getUTCDate() )
                --varAge;
        }   

        this.age = varAge;
        // if(this.age < 18){
        //     alert("Za młody");
        // }   

    }

    insertForm(){

        if(this.age < 18){
            const event = new ShowToastEvent({
                title: 'Underage',
                message: 'Jesteś za młody / za młoda',
                variant: 'error',
                mode: 'dismissable'
            });
            this.dispatchEvent(event);
        }
        else{
            const event = new ShowToastEvent({
                title: 'Adult',
                message: 'Posiadasz wymagany wiek',
                variant: 'success',
                mode: 'dismissable'
            });
            this.dispatchEvent(event);
        }
        
    }
}