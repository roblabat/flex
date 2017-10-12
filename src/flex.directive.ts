import { Directive } from '@angular/core';
import * as _ from 'lodash';

const directions = [
    'row',
    'column'
];

const alignmentsPrimary = [
    'start',
    'end',
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'space-evenly'
];

const alignmentsSecondary = [
    'start',
    'end',
    'flex-start',
    'flex-end',
    'center',
    'stretch',
    'baseline'
]

/**
 * 
 * 
 * @export
 * @class FlexDirective
 */
@Directive({
    selector: '[flex]',
    inputs: [
        'flex',
        'align'
    ],
    host: {
        '[style.display]': '"flex"',
        '[style.flex-direction]': 'direction()',
        '[style.justify-content]': 'alignPrimary()',
        '[style.align-items]': 'alignSecondary()'
    }
})
export class FlexDirective {
    flex: string;
    align: string;

    direction(): string {
        if (_.includes(directions, this.flex)) {
            return this.flex;
        }
    }

    alignPrimary(): string {
        if (this.align) {
            const alignment = this.align.split(' ')[0];
            if (alignment && _.includes(alignmentsPrimary, alignment)) {
                if (alignment === 'start' || alignment === 'end') {
                    return 'flex-' + alignment;
                } else {
                    return alignment;
                }
            }
        }
    }

    alignSecondary(): string {
        if (this.align) {
            const alignment = this.align.split(' ')[1];
            if (this.align === 'center') {
                return 'center';
            }
            if (alignment && _.includes(alignmentsSecondary, alignment)) {
                if (alignment === 'start' || alignment === 'end') {
                    return 'flex-' + alignment;
                } else {
                    return alignment;
                }
            }
        }
    }
}
