/**
 * server
 */

// required!
// use nginx.conf to setup reverse proxy.
export const SERVER_HOST = "127.0.0.1"
export const SERVER_PORT = 8080
export const SERVER_LINK = `http://${SERVER_HOST}:${SERVER_PORT}`

/**
 * client
 */
// fill in the server address where you've deployed.
// if nginx proxied, fill in your nginx api address.
export const CLIENT_TARGET = "http://192.168.163.115/copy-portal"