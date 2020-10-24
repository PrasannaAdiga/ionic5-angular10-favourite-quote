import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
   private altBackground: boolean = false;

    setAltBackground(altBackground: boolean) {
        this.altBackground = altBackground;
    }

    isAltBackground() {
        return this.altBackground;
    }
}
