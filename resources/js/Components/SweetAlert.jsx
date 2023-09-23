// SweetAlert.js

import Swal from 'sweetalert2';

function SweetAlert({ type, title, text }) {
  Swal.fire({
    icon: type,
    title: title,
    text: text,
  });
}

export default SweetAlert;
