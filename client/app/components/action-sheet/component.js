import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { computed } from '@ember/object';
import { set } from '@ember/object';

export default class ActionSheet extends Component {
    rules = [
        "The objective in Coup is to be the last player remaining. Each player begins with two cards, referred to as " +
        "Influences. There are 5 types of Influences:",
        "LIST INFLUENCES HERE",
        "Each turn, a player takes one action. If the player is claiming an Influence, their opponents YADADA."
    ]

    actions = [
        {
            name: {
                name: 'Any',
                revealed: false,
            },
            action: "Income",
            effect: "+1 coin",
            counteraction: "-"
        },
        {
            name: {
                name: 'Any',
                revealed: false,
            },
            action: "Foreign Aid",
            effect: "+2 coins",
            counteraction: "-"
        },
        {
            name: {
                name: 'Any',
                revealed: false,
            },
            action: "Coup",
            effect: "-7 coins (Choose a player to lose influence)",
            counteraction: "-"
        },
        {
            name: {
                name: 'Duke',
                revealed: false,
            },
            action: "Tax",
            effect: "+3 coins",
            counteraction: "-"
        },
        {
            name: {
                name: 'Assassin',
                revealed: false,
            },
            action: "Assassinate",
            effect: "-3 coins (Choose a player to lose influence)",
            counteraction: "-"
        },
        {
            name: {
                name: 'Captain',
                revealed: false,
            },
            action: "Steal",
            effect: "Steal 2 coins from another player",
            counteraction: "Blocks stealing"
        },
        {
            name: {
                name: 'Ambassador',
                revealed: false,
            },
            action: "Exchange",
            effect: "Exchange your Influence cards with two cards from the Court deck",
            counteraction: "Blocks stealing"
        },
        {
            name: {
                name: 'Contessa',
                revealed: false,
            },
            action: "-",
            effect: "-",
            counteraction: "Blocks assassination"
        },
    ];

    card = {
        name: 'Contessa',
        revealed: false,
    }
}