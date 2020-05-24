/** 
 * @author ZYROUGE
 * @license MIT
*/

module.exports = class {
    constructor(client) {
        this.client = client;
    }

    async run(shardID) {
        const shard = this.client.shards.get(shardID);
        shard.editStatus("online", {
            name: `${this.client.guilds.size} Server(s) | a&help | Shard ${shard.id}/${this.client.shards.size}`,
            type: 3
        });
    }
}