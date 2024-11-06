declare module "react-native-zeroconf" {
  interface Service {
    name: string;
    addresses: string[];
    port: number;
  }

  class Zeroconf {
    scan(type: string): void;
    stop(): void;
    on(event: string, callback: (service: Service) => void): void;
  }

  export default Zeroconf;
}
