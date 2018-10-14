function shifterNotify() {

  const bootup = '../../.bootup';

  jQuery.get('../../.bootup', function (unixtime) {

    const time_max = 180; // 3 hours
    let time_start = Math.round(unixtime);
    let time_current = Math.round(new Date().getTime() / 1000);
    let time_elapsed = Math.round((time_current - time_start) / 60);
    let time_remaining = Math.round(time_max - time_elapsed);

    console.log('start: ' + time_start);
    console.log('current: ' + time_current);
    console.log('elapsed: ' + time_elapsed);
    console.log('remaining: ' + time_remaining);

    var state = 3;

    if (state = 1) {
      swal({
        title: 'Notice',
        text: 'WordPress will power down in ' + time_remaining + ' minutes.',
        padding: '3em',
        showConfirmButton: false,
        showCloseButton: true,
        footer: '<a rel="noopener noreferrer" target="_blank" href="https://support.getshifter.io/faqs/why-does-my-wordpress-container-stop-running">Why will WordPress power down?</a>'
      })
      .then((result) => {
        if (result.value) {
          window.location.href = 'http://go.getshifter.io';
        }
      });
    } else if (state = 2) {
      swal({
        title: 'Notice',
        text: 'WordPress will power down in ' + time_remaining + ' minutes.',
        padding: '3em',
        showConfirmButton: false,
        showCloseButton: true,
        footer: '<a rel="noopener noreferrer" target="_blank" href="https://support.getshifter.io/faqs/why-does-my-wordpress-container-stop-running">Why will WordPress power down?</a>'
      })
      .then((result) => {
        if (result.value) {
          window.location.href = 'http://go.getshifter.io';
        }
      });
    } else if (state = 3) {
      swal({
        title: 'WordPress has stopped',
        text: 'Restart WordPress from the Shifter Dashboard',
        padding: '3em',
        confirmButtonColor: '#bc4e9c',
        confirmButtonText: 'Dashboard',
        footer: '<a rel="noopener noreferrer" target="_blank" href="https://support.getshifter.io/faqs/why-does-my-wordpress-container-stop-running">Why will WordPress power down?</a>'
      })
      .then((result) => {
        if (result.value) {
          window.location.href = 'http://go.getshifter.io';
        }
      });
    }

  });

  function shifter_app_warning() {
    alert('Will power down');
  }

}

shifterNotify();



















// // Handler
// function call_shifter_operation(action) {
//   jQuery.ajax({
//     method: "POST",
//     url: ajax_object.ajax_url,
//     data: { "action": action }
//   }).done((response) => {
//     console.log(response);
//     console.log(ajax_object.ajax_url);
//   });
// };

// // Terminate App
// function terminate_app() {

//     swal({
//       title: 'Are you sure?',
//       text: "Confirm to power down your Shifter app.",
//       type: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: '#bc4e9c',
//       cancelButtonColor: '#333',
//       confirmButtonText: 'Terminate'
//     })
//     .then((result) => {
//       if (result.value) {
//         call_shifter_operation("shifter_app_terminate");
//         swal(
//           'App Terminated',
//           'Check Shifter Dashboard for status or to resetart.',
//           'success'
//         ).then(() => window.close());
//       }
//     });

// };

// // Terminate App
// jQuery(document).on("click", "#wp-admin-bar-shifter_support_terminate", function() {
//   terminate_app();
// });