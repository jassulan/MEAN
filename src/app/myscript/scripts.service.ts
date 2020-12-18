import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

import { environment } from 'src/environments/environment';
import { Script } from './script.model';
import { map } from 'rxjs/operators';

const BACKEND_URL = environment.apiUrl + '/scripts';

@Injectable({ providedIn: 'root' })
export class ScriptsService {
  private scriptImagePath;

  private scriptUpdated = new Subject<{ scriptImagePath: string}>();

  constructor(private http: HttpClient, private router: Router) {}

  getScript(step1: string, step2: string, step3: string, step4: string, step5: string) {

    const queryParams = `?step1=${step1}&step2=${step2}&step3=${step3}&step4=${step4}&step5=${step5}`;
    this.http
      .get<{imagePath: string}>(
        BACKEND_URL + '/' + queryParams
      )
      .subscribe((scriptImagePath) => {
          console.log(scriptImagePath)
          this.scriptImagePath = scriptImagePath;
          this.scriptUpdated.next({
            scriptImagePath: this.scriptImagePath
          });
        });
  }

  getScriptUpdateListener() {
    return this.scriptUpdated.asObservable();
  }

addScript() {
    this.http
      .post<{ message: string; script: Script }>(BACKEND_URL, null)
      .subscribe((responseData) => {
        console.log("successfully added");
      });
  }
}
