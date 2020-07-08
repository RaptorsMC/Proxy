class VeloProxyError extends Error {
     protected helpMessage?: string;

     constructor(smsg: string) {
          super(smsg);
          this.name = 'VeloProxyError';
     }

     public print(): void {
          
     }

     public set stack(msg: string) {
          this.stack = msg;
          return;
     }

     public get stack(): string {
          return this.stack;
     }

     public set hMsg(msg: string) {
          this.helpMessage = msg;
     }

     public get hMsg(): string {
          return this.helpMessage || '';
     }
}
export default VeloProxyError;