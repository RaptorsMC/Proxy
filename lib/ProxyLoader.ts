import { Listener, MOTD } from '../impl/RakNet/mod.ts';
import Proxy from "./Proxy.ts";
import ResourceManager from "./settings/Resm.ts";

export interface ProxyOptions {
     ip: string;
     port: number;
     dimensions: boolean;
     motd: MOTD;
}

class ProxyLoader {
     private listener!: Listener;
     private instance!: Proxy;
     private resm!: ResourceManager;

     public start(options: ProxyOptions): void {
          let proxy = new Proxy();
          let listener = new Listener();
          let resm = new ResourceManager();

          this.resm = resm;
          this.listener = listener;
          this.instance = proxy;

          this.resm.checkAllDefaults();
          this.resm.load();
          this.resm.saveAll();
          
          this.instance.start(options);
     }
}
export default ProxyLoader;
