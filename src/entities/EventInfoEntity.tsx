import React from "react";

export default interface EventInfoEntity {
    id?: string,
    year?: string,
    address: string,
    date?: number,
    description?: string,
    theme?: string,
    price_limit?: string,
    group_name?: string
}