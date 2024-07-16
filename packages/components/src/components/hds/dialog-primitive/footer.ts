/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import templateOnlyComponent from '@ember/component/template-only';

export interface HdsDialogPrimitiveFooterSignature {
  Args: {
    contextualClass?: string;
    onDismiss: () => void;
  };
  Blocks: {
    default: [
      {
        close: () => void;
      },
    ];
  };
  Element: HTMLDivElement;
}

const HdsDialogPrimitiveFooterComponent =
  templateOnlyComponent<HdsDialogPrimitiveFooterSignature>();

export default HdsDialogPrimitiveFooterComponent;
