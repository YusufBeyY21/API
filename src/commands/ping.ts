import { Command, CommandContext, Permission } from './command';
import { client } from 'discord.js';

export default class HelpCommand implements Command {
    name = 'ping';
    
    execute = async (ctx: CommandContext) => ctx.channel.send(`🏓 Pong ${this.client.ws.ping}`);
}
