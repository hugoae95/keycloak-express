/*
 * Copyright 2016 Red Hat Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

const Keycloak = require('keycloak-connect')

const keycloakConfig = {
    "clientId": process.env.KC_CLIENT_ID,
    "bearerOnly": true,
    "serverUrl": process.env.KC_SERVER_URL,
    "realm": process.env.KC_REALM,
    "credentials": {
      "secret": process.env.KC_CLIENT_SECRET, 
    },
}

let _keycloak;

function initKeycloak (memoryStore) {
    if(_keycloak){
        console.log("Keycloak again!");
        return _keycloak;
    }else{
        console.log("Initial Keycloak");
        _keycloak =  new Keycloak({ store: memoryStore }, keycloakConfig);
        return _keycloak;
    }
}

function getKeycloak  () {
    if(!_keycloak){
        console.log("No Keycloak");
        
    }
    return _keycloak;
}

module.exports = {
    initKeycloak,
    getKeycloak
}