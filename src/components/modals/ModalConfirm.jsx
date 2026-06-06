/**
 * ModalConfirm
 * version: 0.1.0
 * created: 06-06-2026
 * updated: 06-06-2026
 * description: Confirmation dialog for destructive or irreversible actions.
 * props:
 *   title       — modal title (required)
 *   message     — confirmation message (required)
 *   onConfirm   — function called on confirm (required)
 *   onClose     — function called on cancel/close (required)
 *   confirmLabel  — confirm button label (default: "Confirm")
 *   cancelLabel   — cancel button label (default: "Cancel")
 *   destructive   — boolean, uses ButtonDestructive if true (default: true)
 */

import React from 'react';
import { ButtonPrimary } from '../buttons/ButtonPrimary.jsx';
import { ButtonDestructive } from '../buttons/ButtonDestructive.jsx';
import { ButtonSecondary } from '../buttons/ButtonSecondary.jsx';
import './ModalConfirm.css';

export function ModalConfirm({
  title,
  message,
  onConfirm,
  onClose,
  confirmLabel = 'Confirm',
  cancelLabel  = 'Cancel',
  destructive  = true,
}) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal"
        onClick={e => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header */}
        <div className="modal__header">
          <span className="modal__title" id="modal-title">{title}</span>
          <button className="modal__close" onClick={onClose} aria-label="Close">×</button>
        </div>

        {/* Message */}
        <p className="modal__message">{message}</p>

        {/* Actions */}
        <div className="modal__actions">
          <ButtonSecondary
            label={cancelLabel}
            onClick={onClose}
          />
          {destructive ? (
            <ButtonDestructive
              label={confirmLabel}
              onClick={onConfirm}
            />
          ) : (
            <ButtonPrimary
              label={confirmLabel}
              onClick={onConfirm}
            />
          )}
        </div>
      </div>
    </div>
  );
}
