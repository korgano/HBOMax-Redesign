//auto close modals//

$('.modal-dialog').modal('show');
console.log('Modal Shown');

setTimeout(function() {
console.log('Countdown Start');
    $('.modal-dialog').modal('hide');
}, 5000);
console.log('Countdown End');

//end auto close modals//