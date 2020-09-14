import Packet from "../../impl/RakNet/lib/protocol/Packet.ts";

class StartGamePacket extends Packet {
    constructor(id: number) {
        super(id)
    }

    read() {
        // Still confused on how to implement this
    }
}
export default StartGamePacket;