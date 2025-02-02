// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api_url_laravel: 'http://localhost:8000/api', //Laravel Backend
  api_url_redis: "redis:6379/api/redis", //Laravel Backend
  
  api_go_users: 'http://go_users.docker.localhost/api', //Microservicio Users GO
  api_go_redis: 'http://go_redis.docker.localhost/api', //Microservicio REDIS GO
  api_go_products: 'http://go_products.docker.localhost/api', //Microservicio Products GO
  
};

export const environment_stats = {
  production: false,
  // api_url_laravel: 'http://localhost:8000/api', //Laravel Backend
  // api_url_redis: "redis:6379/api/redis", //Laravel Backend
  
  // api_go_users: 'http://go_users.docker.localhost/api', //Microservicio Users GO
  // api_go_redis: 'http://go_redis.docker.localhost/api', //Microservicio REDIS GO
  stats_go_products: 'http://go_products.docker.localhost/stats/',
  stats_go_users: 'http://go_users.docker.localhost/stats/', //Microservicio Products GO
  
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
