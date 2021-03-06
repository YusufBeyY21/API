import { Command, CommandContext, Permission } from './command';

export default class HelpCommand implements Command {
    name = 'help';
    precondition: Permission = 'KICK_MEMBERS';
    
    execute = async (ctx: CommandContext) => {
        return ctx.channel.send(
            '🔨 `zero accept <bot> <reason>` -> accept bot user with reason\n' +
            '🅰 `zero add-badge <bot> <badge_name>` -> add a badge to a bot\n' +
            '🅰 `zero clear-badges <bot>` -> clear badges from a bot\n' +
            '🅰 `zero delete <bot> <reason>` -> delete a bot from the list\n' +
            '🔨 `zero decline <bot> <reason>` -> decline bot user with reason\n' +
            '🔨 `zero help` -> show this\n' +
            '✅ `zero ping` -> `dbots ping` -> pong!\n' +
            '🔨 `zero q` -> show approval queue');
    }
}
