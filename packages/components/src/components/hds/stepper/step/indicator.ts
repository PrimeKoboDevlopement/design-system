/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { assert } from '@ember/debug';

import { HdsStepperStatusesValues } from '../types.ts';
import type { HdsStepperStatuses } from '../types.ts';

export const DEFAULT_STATUS = HdsStepperStatusesValues.Incomplete;
export const STATUSES: string[] = Object.values(HdsStepperStatusesValues);

interface HdsStepperIndicatorStepSignature {
  Args: {
    isInteractive?: boolean;
    status: HdsStepperStatuses;
    text: string;
  };
  Element: HTMLDivElement;
}

export default class HdsStepperIndicatorStepComponent extends Component<HdsStepperIndicatorStepSignature> {
  /**
   * @param status
   * @type {string}
   * @default "incomplete"
   */

  get status() {
    const { status = DEFAULT_STATUS } = this.args;

    assert(
      `@status for "Hds::Stepper::Step::Indicator" must be one of the following: ${STATUSES.join(
        ', '
      )}; received: ${status}`,
      STATUSES.includes(status)
    );

    return status;
  }

  /**
   * @param isInteractive
   * @type {boolean}
   * @default false
   */

  get isInteractive() {
    return this.args.isInteractive || false;
  }

  /**
   * Get the class names to apply to the component.
   * @method IndicatorStep#classNames
   * @return {string} The "class" attribute to apply to the component.
   */
  get classNames() {
    const classes = ['hds-stepper-indicator-step'];

    // Based on the @status arg
    classes.push(`hds-stepper-indicator-step--status-${this.status}`);

    if (this.isInteractive) {
      classes.push(`hds-stepper-indicator-step--is-interactive`);
    }

    return classes.join(' ');
  }
}
