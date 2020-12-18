import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

import { environment } from 'src/environments/environment';
import { Profile } from './profile.model';

const BACKEND_URL = environment.apiUrl + '/profiles';

@Injectable({ providedIn: 'root' })
export class ProfilesService {
  private profiles: Profile[] = [];
  private profilesUpdated = new Subject<{ profiles: Profile[]; profileCount: number }>();
  private profile: Profile;
  private profileUpdated = new Subject<{ profile: Profile; profileExist: boolean }>();

  constructor(private http: HttpClient, private router: Router) {}

  getProfiles(profilesPerPage: number, currentPage: number) {
    const queryParams = `?pagesize=${profilesPerPage}&page=${currentPage}`;
    this.http
      .get<{ message: string; profiles: any; maxProfiles: number }>(
        BACKEND_URL + '/' + queryParams
      )
      .pipe(
        map((profileData) => {
          return {
            profiles: profileData.profiles.map((profile) => {
              return {
                name: profile.name,
                surname: profile.surname,
                id: profile._id,
                imagePath: profile.imagePath,
                userId: profile.userId,
              };
            }),
            maxProfiles: profileData.maxProfiles,
          };
        })
      )
      .subscribe((transformedProfileData) => {
        this.profiles = transformedProfileData.profiles;
        this.profilesUpdated.next({
          profiles: [...this.profiles],
          profileCount: transformedProfileData.maxProfiles,
        });
      });
  }

  getProfilesUpdateListener() {
    return this.profilesUpdated.asObservable();
  }

  getProfileByUserId() {
    this.http
      .get<{ message: string; profile: any }>(
        BACKEND_URL + '/byUserId/'
      )
      .pipe(
        map((profileData) => {
          if(profileData.message==="no_user_founded"){
            return {
              profile: {
                name: null,
                surname: null,
                id: null,
                imagePath: null,
                userId: null,
              },
             profileExist: false
            }
          } else{
            console.log("user_founded");
            console.log(profileData);
          return {
            profile: {
                name: profileData.profile.name,
                surname: profileData.profile.surname,
                id: profileData.profile._id,
                imagePath: profileData.profile.imagePath,
                userId: profileData.profile.userId,
              },
              profileExist: true
          }};
        })
      )
      .subscribe((transformedProfileData) => {
        console.log(transformedProfileData.profile);
        this.profile = transformedProfileData.profile;
        this.profileUpdated.next({
          profile: this.profile,
          profileExist: transformedProfileData.profileExist
        });
      });
  }

  getProfileUpdateListener() {
    return this.profileUpdated.asObservable();
  }

  getProfile(id: string) {
    return this.http.get<{
      _id: string;
      name: string;
      surname: string;
      imagePath: string;
      userId: string;
    }>(BACKEND_URL + '/' + id);
  }

  addProfile(name: string, surname: string, image: File) {
    const profileData = new FormData();
    profileData.append('name', name);
    profileData.append('surname', surname);
    profileData.append('image', image, name);
    this.http
      .post<{ message: string; profile: Profile }>(BACKEND_URL, profileData)
      .subscribe((responseData) => {
        this.router.navigate(['/']);
      });
  }

  updateProfile(id: string, name: string, surname: string, image: File | string) {
    let profileData: Profile | FormData;
    if (typeof image === 'object') {
      profileData = new FormData();
      profileData.append('id', id);
      profileData.append('name', name);
      profileData.append('surname', surname);
      profileData.append('image', image, name);
    } else {
      profileData = {
        id: id,
        name: name,
        surname: surname,
        imagePath: image,
        userId: null,
      };
    }
    this.http.put(BACKEND_URL + '/' + id, profileData).subscribe((response) => {
      this.router.navigate(['/']);
    });
  }

  deleteProfile(profileId: string) {
    return this.http.delete(BACKEND_URL + '/' + profileId);
  }
}
