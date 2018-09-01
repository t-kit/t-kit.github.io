$(document).ready(function() {

    $(function() {
        $('form').submit(function() {
            return false;
        })
    })

    $('#editSource').click(function() {
        if (this.checked) {
            $('#utm_source').prop('disabled', false);   
        } else {
            $('#utm_source').prop('disabled', true);                 
        }
    });
    $('#editMedium').click(function() {
        if (this.checked) {
            $('#utm_medium').prop('disabled', false);    
        } else {
            $('#utm_medium').prop('disabled', true);              
        }
    });

    $('.data-submit').click(function() {
        var url = $('#url').val();
        var source = $('#utm_source').val();
        var medium = $('#utm_medium').val();
        var campaign = $('#utm_campaign').val();

        $('.data-output, #longUrl').text(
            url + "/?utm_source=" + 
            source + "&utm_medium=" + 
            medium + "&utm_campaign=" + 
            campaign); 
    });

    function checkValidity() {

        var url = $('#url').val();
        var source = $('#utm_source').val();
        var medium = $('#utm_medium').val();
        var campaign = $('#utm_campaign').val();

        $('#build').click(function() {
            if ($('#url').val() == '') {
                alert('Поле «Целевой URL» не заполнено!»');
            } else if ($('#utm_source').val() == '') {
                alert('Поле «Источник трафика» не заполнено!»');
            } else if ($('#utm_medium').val() == '') {
                alert('Поле «Тип трафика» не заполнено!»');
            } else if ($('#utm_campaign').val() == '') {
                alert('Поле «Название кампании» не заполнено!»');
            }

        })
    };
    checkValidity();
})

