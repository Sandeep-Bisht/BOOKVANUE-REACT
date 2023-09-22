import React from 'react'
import '../../css/modal.css'

const BootstrapModal = ({children, modalId, centered, className}) => {
  return (
<div class={`modal fade ${className ? className : ""}`} id={modalId} tabindex="-1" aria-labelledby={`${modalId}Label`} aria-hidden="true">
  <div class={`modal-dialog ${centered ? "modal-dialog-centered" : ""} modal-lg`}>
    <div class="modal-content">
      <div class="modal-body">
        {children}
      </div>
    </div>
  </div>
</div>
  )
}

export default BootstrapModal