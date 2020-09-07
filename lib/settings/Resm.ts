import { exists } from "https://deno.land/std/fs/exists.ts";

class ResourceManager {
     private _path: string;
     private _defaults: string[];
     private loaded: Map<string, string>;

     constructor() {
          this._path = Deno.cwd() + '/resources';
          this._defaults = ['config.yml'];
          this.loaded = new Map();
     }

     public async checkAllDefaults(): Promise<boolean> {
          for await (const item of this._defaults) {
               if (!await exists(this._path + `/${item}`)) {
                    // @ts-ignore
                    const err: VeloProxyError = new VeloProxyError('Default resource: "' + item + '" not found.');
                    err.hMsg = 'You can resolve this error by redownloading the resource folder from the github.';
                    let stack: string = `Default resource "${item}" of required default resources was missing!\n`;
                    stack += '\nMissing File: ' + this._path + `/${item}`;
                    stack += '\nRequired Resources: ' + this._defaults.map(c => `"${c}"`).join(', ');
                    err.stack = stack;
                    throw err;
               }
          }
          return true;
     }

     /**
      * Loads all resources into memory.
      */
     public async load(): Promise<void> {
          await this.checkAllDefaults();
          for await (const item of this._defaults) {
               if (!(await exists(Deno.cwd() + item))) {
                    this.saveResource(item);
               } else {
                    this.loadResource(item);
               }
          }
     }

     public setResource(res: string, val: string): void {
          this.loaded.set(res, val);
     }

     public getResource(res: string): string|null {
          return this.loaded.get(res) || null;
     }

     public saveAll(): void {
          this.loaded.forEach((v: string, k: string): void => {
               this.save(k);
          });
     }

     public save(res: string): void {
          if (!this.loaded.has(res)) return;
          const savePath = Deno.cwd() + "/" + res;
          const encoder: TextEncoder = new TextEncoder();
          Deno.writeFile(savePath, encoder.encode());  
     }

     private async saveResource(res: string): Promise<void> {
          const path: string = this._path + `/${res}`;
          await Deno.writeFile(Deno.cwd() + `/${res}`, await Deno.readFile(path));
          this.loadResource(res);
     }

     private async loadResource(res: string): Promise<void> {
          const decoder: TextDecoder = new TextDecoder('utf-8');
          this.loaded.set(res, decoder.decode(await Deno.readFile(Deno.cwd() + `/${res}`)));
     }
}
export default ResourceManager;