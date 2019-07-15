import { Component } from '@angular/core';
@Component({
    selector: 'fetch-request'
})
export class GetRequestComponent {
    apiData;

    getApi() {
        const url = 'http://localhost:8080/api/values';
        fetch(url)
            .then(resp => resp.json())
            .then(resp => (this.apiData = resp));
    }
}