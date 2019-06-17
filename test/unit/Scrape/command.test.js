import { Command } from '/twcheese/src/Models/Command.js';
import { TwCheeseDate } from '/twcheese/src/Models/TwCheeseDate.js';
import { scrapeCommand } from '/twcheese/src/Scrape/command.js';
import { domSample } from '/twcheese/test/util.js';
const assert = require('assert');


function assertCommand(actual, propsExpected) {
    assert(actual instanceof Command);
    assert.deepEqual(propsExpected, actual);
}


describe('scrapeCommand', function() {

    it('should handle attack to player', function() {
        let actual = scrapeCommand(domSample('command/attack-to-player'));
        assertCommand(actual, {
            arrival: TwCheeseDate.newServerDate(2019, 5, 17, 18, 56, 8, 775),
            timber: 0,
            clay: 0,
            iron: 0,
            haulCapacity: 0
        });
    });

    it('should handle attack to playerless', function() {
        let actual = scrapeCommand(domSample('command/attack-to-playerless'));
        assertCommand(actual, {
            arrival: TwCheeseDate.newServerDate(2019, 5, 17, 17, 15, 59, 375),
            timber: 0,
            clay: 0,
            iron: 0,
            haulCapacity: 0
        });
    });    

    it('should handle attack return with haul', function() {
        let actual = scrapeCommand(domSample('command/attack-return-with-haul'));
        assertCommand(actual, {
            arrival: TwCheeseDate.newServerDate(2019, 5, 18, 5, 33, 52, 0),
            timber: 14,
            clay: 16,
            iron: 2,
            haulCapacity: 80
        });
    });

    it('should handle attack return without haul', function() {
        let actual = scrapeCommand(domSample('command/attack-return-without-haul'));
        assertCommand(actual, {
            arrival: TwCheeseDate.newServerDate(2019, 5, 17, 18, 31, 42, 0),
            timber: 0,
            clay: 0,
            iron: 0,
            haulCapacity: 0
        });
    });

    it('should handle support to player', function() {
        let actual = scrapeCommand(domSample('command/support-to-player'));
        assertCommand(actual, {
            arrival: TwCheeseDate.newServerDate(2019, 5, 17, 19, 3, 28, 595),
            timber: 0,
            clay: 0,
            iron: 0,
            haulCapacity: 0
        });
    });

    it('should handle support to playerless', function() {
        let actual = scrapeCommand(domSample('command/support-to-playerless'));
        assertCommand(actual, {
            arrival: TwCheeseDate.newServerDate(2019, 5, 17, 19, 12, 53, 99),
            timber: 0,
            clay: 0,
            iron: 0,
            haulCapacity: 0
        });
    });

    it('should handle support withdrawn from player', function() {
        let actual = scrapeCommand(domSample('command/support-withdrawn-from-player'));
        assertCommand(actual, {
            arrival: TwCheeseDate.newServerDate(2019, 5, 17, 19, 55, 13, 0),
            timber: 0,
            clay: 0,
            iron: 0,
            haulCapacity: 0
        });
    });

    it('should handle support withdrawn from playerless', function() {
        let actual = scrapeCommand(domSample('command/support-withdrawn-from-playerless'));
        assertCommand(actual, {
            arrival: TwCheeseDate.newServerDate(2019, 5, 17, 19, 44, 36, 0),
            timber: 0,
            clay: 0,
            iron: 0,
            haulCapacity: 0
        });
    });

    it('should handle attack cancelled', function() {
        let actual = scrapeCommand(domSample('command/attack-cancelled'));
        assertCommand(actual, {
            arrival: TwCheeseDate.newServerDate(2019, 5, 17, 18, 9, 50, 5),
            timber: 0,
            clay: 0,
            iron: 0,
            haulCapacity: 0
        });
    });

    it('should handle support cancelled', function() {
        let actual = scrapeCommand(domSample('command/support-cancelled'));
        assertCommand(actual, {
            arrival: TwCheeseDate.newServerDate(2019, 5, 17, 18, 8, 29, 99),
            timber: 0,
            clay: 0,
            iron: 0,
            haulCapacity: 0
        });
    });

});