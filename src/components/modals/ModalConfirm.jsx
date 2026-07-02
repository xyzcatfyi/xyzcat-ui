/**
 * ModalConfirm
 * version: 0.1.0
 * created: 06-06-2026
 * updated: 02-07-2026
 * description: Confirmation dialog for destructive or irreversible actions.
 *              Always pair with ButtonDestructive for dangerous actions (default behaviour).
 *              Use destructive=false for non-dangerous confirmations.
 * props:
 *   title         — modal title (required)
 *   message       — confirmation message (required)
 *   onConfirm     — function called on confirm (required)
 *   onClose       — function called on cancel/close (required)
 *   confirmLabel  — confirm button label (default: "Confirm")
 *   cancelLabel   — cancel button label (default: "Cancel")
 *   destructive   — boolean, uses ButtonDestructive if true (default: true)
 *
 * usage:
 *   <ModalConfirm
 *     title="Delete entry"
 *     message="This cannot be undone. Are you sure?"
 *     onConfirm={handleDelete}
 *     onClose={() => setModalOpen(false)}
 *   />
 *
 *   <ModalConfirm
 *     title="Save changes"
 *     message="Are you sure you want to save?"
 *     onConfirm={handleSave}
 *     onClose={() => setModalOpen(false)}
 *     confirmLabel="Save"
 *     destructive={false}
 *   />
 */

import React from "react";
import { ButtonPrimary } from "../buttons/ButtonPrimary.jsx";
import { ButtonDestructive } from "../buttons/ButtonDestructive.jsx";
import { ButtonSecondary } from "../buttons/ButtonSecondary.jsx";
import "./ModalConfirm.css";

export function ModalConfirm({
  title,
  message,
  onConfirm,
  onClose,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  destructive = true,
}) {
  return (
    // Clicking the overlay (outside the modal) closes it
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal"
        // stopPropagation prevents clicks inside the modal from bubbling up
        // to the overlay and accidentally closing it
        onClick={(e) => e.stopPropagation()}
        // role="dialog" and aria-modal tell screen readers this is a modal
        role="dialog"
        aria-modal="true"
        // aria-labelledby links the dialog to its title for screen readers
        aria-labelledby="modal-title"
      >
        <div className="modal__header">
          <span className="modal__title" id="modal-title">
            {title}
          </span>
          <button className="modal__close" onClick={onClose} aria-label="Close">
            ×
          </button>
        </div>

        <p className="modal__message">{message}</p>

        <div className="modal__actions">
          <ButtonSecondary label={cancelLabel} onClick={onClose} />
          {/* Conditionally render destructive or primary confirm button
              based on the destructive prop */}
          {destructive ? (
            <ButtonDestructive label={confirmLabel} onClick={onConfirm} />
          ) : (
            <ButtonPrimary label={confirmLabel} onClick={onConfirm} />
          )}
        </div>
      </div>
    </div>
  );
}
