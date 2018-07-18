
import * as MapboxConfig from '../../mapbox.json';

export const environment = {
  production: true,
  mapbox: {
    token: (<any>MapboxConfig).token
  }
};
