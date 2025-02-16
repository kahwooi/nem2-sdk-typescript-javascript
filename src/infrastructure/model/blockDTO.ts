/*
 * Copyright 2019 NEM
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Catapult REST Endpoints
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.7.16
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class BlockDTO {
    /**
    * The signature of the block. The signature was generated by the signer and can be used to validate tha the entity data was not modified by a node. 
    */
    'signature': string;
    /**
    * The public key of the block harvester formatted as hexadecimal.
    */
    'signer': string;
    /**
    * The entity version. The higher byte represents the network identifier: * 0x68 (MAIN_NET) - Public main network. * 0x98 (TEST_NET) - Public test network. * 0x60 (MIJIN) - Private network. * 0x90 (MIJIN_TEST) - Private test network. 
    */
    'version': number;
    /**
    * The block type: * 0x8043 (32835 decimal) - Nemesis block. * 0x8143 (33091 decimal) - Regular block. 
    */
    'type': number;
    'height': Array<number>;
    'timestamp': Array<number>;
    'difficulty': Array<number>;
    /**
    * The fee multiplier applied to transactions contained in block.
    */
    'feeMultiplier': number;
    /**
    * The hash of the previous block.
    */
    'previousBlockHash': string;
    /**
    * The transactions included in a block are hashed forming a merkle tree. The root of the tree summarizes them. 
    */
    'blockTransactionsHash': string;
    /**
    * The collection of receipts  are hashed into a merkle tree and linked to a block. The block header stores the root hash. 
    */
    'blockReceiptsHash': string;
    /**
    * For each block, the state of the blockchain is stored in RocksDB, forming a patricia tree. The root of the tree summarizes the state of the blockchain for the given block. 
    */
    'stateHash': string;
    /**
    * The public key of the optional beneficiary designated by harvester.
    */
    'beneficiary': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "signature",
            "baseName": "signature",
            "type": "string"
        },
        {
            "name": "signer",
            "baseName": "signer",
            "type": "string"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "number"
        },
        {
            "name": "height",
            "baseName": "height",
            "type": "Array<number>"
        },
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "Array<number>"
        },
        {
            "name": "difficulty",
            "baseName": "difficulty",
            "type": "Array<number>"
        },
        {
            "name": "feeMultiplier",
            "baseName": "feeMultiplier",
            "type": "number"
        },
        {
            "name": "previousBlockHash",
            "baseName": "previousBlockHash",
            "type": "string"
        },
        {
            "name": "blockTransactionsHash",
            "baseName": "blockTransactionsHash",
            "type": "string"
        },
        {
            "name": "blockReceiptsHash",
            "baseName": "blockReceiptsHash",
            "type": "string"
        },
        {
            "name": "stateHash",
            "baseName": "stateHash",
            "type": "string"
        },
        {
            "name": "beneficiary",
            "baseName": "beneficiary",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return BlockDTO.attributeTypeMap;
    }
}

