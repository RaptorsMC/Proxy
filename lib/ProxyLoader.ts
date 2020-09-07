import { Listener, MOTD } from '../impl/RakNet/mod.ts';

interface ProxyOptions {
     ip: string;
     port: number;
     dimensions: boolean;
     motd: MOTD;
}

class ProxyLoader {
     private listener!: Listener;

     constructor() {
     }

     public start(options: ProxyOptions): void {
          
     }
}
export default ProxyLoader;