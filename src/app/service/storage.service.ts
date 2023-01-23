import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() {}

  async set(storageKey: string, value: any) {
   await Storage.set({
      key: storageKey,
      value: JSON.stringify(value)
    });
  }


  async  get(key: string): Promise<any> {
    const item = await Storage.get({ key: key });

    return JSON.parse(item.value);
  }

  async clear() {
    await Storage.clear();
  }
}
