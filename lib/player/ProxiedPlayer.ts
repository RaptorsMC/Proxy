import Packet from "../../impl/RakNet/lib/protocol/Packet.ts";
import { Connection } from '../../impl/RakNet/mod.ts';
import PlayerLoginPacket from "../packets/PlayerLoginPacket.ts";

class ProxiedPlayer {
    public server!: string;
    // This will be its own data structure eventually
    // For now it remains as string for the server name
    
    private name: string;
    private connection: Connection;
    

    constructor(name: string, connection: Connection) {
        this.name = name;
        this.connection = connection;
    }

    public getName() {
        return this.name;
    }

    public getConnectionInfo() {
        return this.connection;
    } 

    public setServer(name: string) {
        this.server = name
    }
    
    public close() {
        this.connection.close();
    }

    public handleLogin() {
        //@ts-ignore
        let loginPK = new PlayerLoginPacket();
        this.connection.sendPacket(loginPK);
        /**
         * Still don't know how to impl this into the proxy
         * "we need to convince the client they're connecting to a server, not a proxy"
         */
    }
    



}
export default ProxiedPlayer
