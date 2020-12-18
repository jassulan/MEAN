import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";

import { ProfilesService } from "./profiles.service";
import { Profile } from "./profile.model";
import { mimeType } from "./mime-type.validator";
import { AuthService } from "../auth/auth.service";

@Component({
  selector: "app-profile-create",
  templateUrl: "./profile-create.component.html",
  styleUrls: ["./profile-create.component.css"]
})
export class ProfileCreateComponent implements OnInit, OnDestroy {
  profile: Profile;
  isLoading = false;
  form: FormGroup;
  imagePreview: string | ArrayBuffer;
  userId: string;
  userName:string = "temporary";
  private mode = "create";
  private profileId: string;
  private authStatusSub: Subscription;
  private profilesSub: Subscription;

  profiles: Profile[] = [];
  totalProfiles = 0;
  profilesPerPage = 1;
  currentPage = 1;

  constructor(
    public profilesService: ProfilesService,
    public route: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit() {
    //this.isLoading = true;
    this.profilesService.getProfileByUserId();
    this.userId = this.authService.getUserId();
    this.authStatusSub = this.authService
      .getAuthStatusListener()
      .subscribe(authStatus => {
        this.isLoading = false;
      });
    this.form = new FormGroup({
      name: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      surname: new FormControl(null, { validators: [Validators.required] }),
      image: new FormControl(null, {
        validators: [Validators.required],
        asyncValidators: [mimeType]
      })
    });
    this.profilesSub = this.profilesService
      .getProfileUpdateListener()
      .subscribe((profileData: { profile: Profile, profileExist: boolean }) => {
        this.userName = this.authService.getUserName();
        if (profileData.profileExist) {
          this.mode = "edit";
          this.profileId = profileData.profile.id;
          this.profile = {
            id: profileData.profile.id,
            name: profileData.profile.name,
            surname: profileData.profile.surname,
            imagePath: profileData.profile.imagePath,
            userId: profileData.profile.userId
          };
          this.imagePreview = profileData.profile.imagePath;
          this.form.setValue({
            name: this.profile.name,
            surname: this.profile.surname,
            image: this.profile.imagePath
          });
        } else {
          this.mode = "create";
          this.profileId = null;
        }
      });
  }

  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({ image: file });
    this.form.get("image").updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(file);
  }

  onSaveProfile() {
    if (this.form.invalid) {
      console.log("form is invalid");
      return;
    }
    this.isLoading = true;
    if (this.mode === "create") {
      this.profilesService.addProfile(
        this.form.value.name,
        this.form.value.surname,
        this.form.value.image
      );
    } else {
      this.profilesService.updateProfile(
        this.profileId,
        this.form.value.name,
        this.form.value.surname,
        this.form.value.image
      );
    }
    this.form.reset();
  }

  ngOnDestroy() {
    this.profilesSub.unsubscribe();
    this.authStatusSub.unsubscribe();
  }
}
