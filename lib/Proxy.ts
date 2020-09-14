import { Connection } from "../impl/RakNet/mod.ts";
import ProxiedPlayer from "./player/ProxiedPlayer.ts";
import type { ProxyOptions } from "./ProxyLoader.ts";

class Proxy {
     private connectionPool: Map<string, Connection> = new Map<string, Connection>();
     private serverPool!: string[] // idk what data structure to use here

     public start(options: ProxyOptions) {
          /**
           * Meant to initiate proxy
           * I still don't understand the networking on how to impl this
           */
     }
     /**
      * Function to add a new connection to the connection pool
      * @param username IGN of the connecting player
      * @param connection Information on the connection
      */
     public addConnection(username: string, connection: Connection): void {
          this.connectionPool.set(username, connection);
     }

     /**
      * Function to remove a connection from the connection pool
      * @param username IGN of the disconnecting player
      */
     public removeConnection(username: string): void {
          this.connectionPool.delete(username);
     }

     /**
      * Function to get all the players in the proxy connection pool
      */
     public getPlayers(): Map<string, Connection> {
          return this.connectionPool;
     }
     
     /**
      * Connection to find (absolute, not a search) a given user in the proxy connection pool
      * @param username IGN of the player
      */
     public getPlayer(username: string): ProxiedPlayer | undefined {
          return new ProxiedPlayer(
               'IGN' /** This is a makeshift solution since i don't know how to get the actual ING */,
               this.connectionPool.get(username) || Connection.prototype
          )
     }

     public transferPlayer(username: string): boolean {
          let successfulTransfer = true;
          if(successfulTransfer) {
               return true;
          } else {
               return false;
          }
     }
}

export default Proxy;
