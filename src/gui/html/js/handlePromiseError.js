// Depends on the loot.l10n global.

import { closeProgress, showMessage } from './dialog.js';

export default function handlePromiseError(error) {
  /* Error.stack seems to be Chromium-specific. */
  console.error(error.stack); // eslint-disable-line no-console
  closeProgress();
  showMessage(loot.l10n.translate('Error'), error.message);
}
