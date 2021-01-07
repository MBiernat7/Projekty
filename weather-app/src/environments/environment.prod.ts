export const environment:Environment = {
  production: true,
  weatherApi: {
    apiURL: "",
    key: ""
  }
};

export interface Environment {
  production: boolean;
  weatherApi: {
    apiURL: string;
    key: string;
 }
}
