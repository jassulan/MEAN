import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Subscription } from 'rxjs';
import { Script } from './script.model';
import { ScriptsService } from "./scripts.service";

@Component({
  selector: 'app-myscript',
  templateUrl: './myscript.component.html',
  styleUrls: ['./myscript.component.css'],
})
export class MyscriptComponent implements OnInit, OnDestroy {
	isLoading = false;
  script: Script;
  isLinear = false;
  filename = "Your_Script.zip";
  imagePath:string;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;
  private scriptsSub: Subscription;

  constructor(
    public scriptsService: ScriptsService,
    private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.scriptsSub = this.scriptsService
      .getScriptUpdateListener()
      .subscribe((scriptData: {scriptImagePath: string}) => {
        this.imagePath = scriptData.scriptImagePath;
        this.downloadScript();
      });
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      fourthCtrl: ['', Validators.required]
    });
    this.fifthFormGroup = this._formBuilder.group({
      fifthCtrl: ['', Validators.required]
    });
  }

  onCreateScript() {
      this.scriptsService.addScript();
  }

  onGetScript(step1:string, step2:string, step3:string, step4:string, step5:string) {
    this.scriptsService.getScript(step1, step2, step3, step4, step5);
}

downloadScript(){
  const link = document.createElement('a');
  link.setAttribute('target', '_blank');
  link.setAttribute('href', this.imagePath);
  link.setAttribute('download', this.filename);
  document.body.appendChild(link);
  link.click();
  link.remove();
}

  onResetForm(){
    this.imagePath = null;
  }

  ngOnDestroy() {
    this.scriptsSub.unsubscribe();
  }
}
