//auto close modals//

//$('.modal-dialog').modal('show');
//console.log('Modal Shown');

setTimeout(function() {
console.log('Countdown Start');
    $('#profileModal').modal('hide');
}, 5000);

setTimeout(function() {
    console.log('Countdown Start');
        $('#captionModal').modal('hide');
    }, 5000);

//end auto close modals//