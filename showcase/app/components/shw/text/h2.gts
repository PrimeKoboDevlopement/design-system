/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';

import ShwText from './index';
import type { ShwTextSignature } from './index';

export interface ShwTextH2Signature {
  Args: {
    align?: ShwTextSignature['Args']['align'];
    weight?: ShwTextSignature['Args']['weight'];
    tag?: ShwTextSignature['Args']['tag'];
  };
  Blocks: {
    default: [];
  };
  Element: ShwTextSignature['Element'];
}

export default class ShwTextH2 extends Component<ShwTextH2Signature> {
  <template>
    <ShwText
      @variant="h2"
      @align={{@align}}
      @weight={{@weight}}
      @tag={{@tag}}
      ...attributes
    >{{yield}}</ShwText>
  </template>
}
