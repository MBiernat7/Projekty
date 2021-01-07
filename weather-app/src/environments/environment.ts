// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment: Environment = {
  production: false,
  weatherApi: {
    apiURL: 'https://api.openweathermap.org/data/2.5/weather',
    key: '2064fc1c307c6eeb52202e5f860ea270'
  }
};

export interface Environment {
  production: boolean;
  weatherApi: {
    apiURL: string;
    key: string;
 }
}


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
