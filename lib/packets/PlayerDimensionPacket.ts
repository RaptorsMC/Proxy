import Packet from "../../impl/RakNet/lib/protocol/Packet.ts";

class PlayerDimensionPacket extends Packet {
    constructor(id: number) {
        super(id)
    }

    read() {
        // Still confused on how to implement this
    }
}
export default PlayerDimensionPacket