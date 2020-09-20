import DataPacket from "../../impl/RakNet/lib/protocol/DataPacket.ts";
import Identifiers from "../../impl/RakNet/lib/protocol/Identifiers.ts";
import Packet from "../../impl/RakNet/lib/protocol/Packet.ts";

class StartGamePacket extends DataPacket {
    public id: number = Identifiers.PlayerStartGamePacket;
    public vanillaVersion!: any; 
    /**
     * We will add more properties onto this packet soon
     * Much of this is based off the PMMP impl
     */

    public read() {
        super.read();
        this.vanillaVersion = this.readString(); 
        // I just want to read the string but this returns void :(
        // Ok so now
        
    }
    
    public write() {
        super.write();
    }
}
export default StartGamePacket;
