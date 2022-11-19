import React from "react";

export default interface UserEntity {
    uuid: string,
    name: string,
    email: string,
    age?: number,
    shoe_size?: string,
    shirt_size?: string,
    pants_size?: string,
    ring_size?: number
}