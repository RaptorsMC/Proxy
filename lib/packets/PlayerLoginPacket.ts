import BinaryStream from "https://raw.githubusercontent.com/RaptorsMC/BinaryUtils/master/lib/BinaryStream.ts";
import DataPacket from "../../impl/RakNet/lib/protocol/DataPacket.ts";
import Identifiers from "../../impl/RakNet/lib/protocol/Identifiers.ts";
import { Address } from "../../impl/RakNet/mod.ts";

class PlayerLoginPacket extends DataPacket {
    public id: number = Identifiers.PlayerStartGamePacket;

    public username!: string;
    public protocol!: number;
    public clientID!: string;
    public serverAddr!: Address;

    public data!: string[][] | object;


    public read() {
        this.protocol = this.readInt();
        this.serverAddr = this.readAddress();
        
        this.decodeConnection();
    }

    public decodeConnection() {
        let buf = new BinaryStream();
        this.data = buf.read(buf.readLInt()).toJSON();
    }
}
export default PlayerLoginPacket;
