$(document).ready(function () {

});
 /*
 $("#reload_t").ajax.reload();
 alert("Mostafa")
 */
setInterval( function () {
    $('#reload_t').DataTable.ajax.reload(null, false);
}, 2000 );
