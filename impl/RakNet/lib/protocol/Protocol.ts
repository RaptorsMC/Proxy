export enum Protocol {
     /* Versions */
    CURRENT_PROTOCOL = 408,
    PROTOCOL_VERSION = 10,
    SYSTEM_ADDRESSES = 20, // Regular is 10
    /** Query and Raknet */
    CONNECTED_PING = 0x00,
    UNCONNECTED_PING = 0x01,
    PING_OPEN_CONNECTIONS = 0x02,
    CONNECTED_PONG = 0x03,
    OPEN_CONNECTION_REQUEST_1 = 0x05,
    OPEN_CONNECTION_REPLY_1 = 0x06,
    OPEN_CONNECTION_REQUEST_2 = 0x07,
    OPEN_CONNECTION_REPLY_2 = 0x08,
    CONNECTION_REQUEST = 0x09,
    CONNECTION_REQUEST_ACCEPTED = 0x10,
    NEW_INCOMING_CONNECTION = 0x13,
    DISCONNECTION_NOTIFICATION = 0x15,
    INCOMPATIBLE_PROTOCOL = 0x19,
    UNCONNECTED_PONG = 0x1c,
    ACK = 0xc0,
    NAK = 0xa0,
    GAME_PACKET_WRAPPER = 0xFE
}