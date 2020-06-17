import { Injectable } from '@angular/core';
import { StorageKey } from './storage.model';

@Injectable({
    providedIn: 'root',
})
export class StorageService {
    private storage: Storage;

    constructor() {
        this.storage = localStorage;
    }

    public save(key: StorageKey, value: any) {
        if (typeof value === 'string') {
            this.storage.setItem(key, value);
        } else {
            value = JSON.stringify(value);
            this.storage.setItem(key, value);
        }
    }

    public read(key: StorageKey): any {
        const value = this.storage.getItem(key);
        return typeof value === 'string' ? value : JSON.parse(value);
    }

    public remove(key: StorageKey) {
        return this.storage.removeItem(key);
    }

    public clear() {
        this.storage.clear();
    }
}
