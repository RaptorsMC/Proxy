import * as YAML from 'https://deno.land/std/encoding/yaml.ts';
import VeloProxyError from './VeloProxyError.ts';
import ResourceManager from './utils/ResourceManager.ts';
// this is bound to change.
class VeloProxy {
     private connection?: Deno.DatagramConn;
     private resMngr?: ResourceManager;
     
     constructor() {
          // check if settings exist
          this.init();
     }

     private async init(): Promise<void> {
          this.resMngr = new ResourceManager();
          try {
               await this.resMngr.load();
          } catch (err) {
               if (err instanceof VeloProxyError) {
                    err.print();
                    Deno.exit();
               }
          }
     }

     public start() {
     }

     public send(stream: Uint8Array): void {
          
     }
}

export default VeloProxy;

const f = new VeloProxy();
f.start();