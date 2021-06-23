var aDoc = [
    [{name:'Mathew Pulickal', value:5}, {name:'NICK ANTAYA', value: 1}],
    [{name:'NISHANTH KUMAR', value:2}, {name: 'FCAMPT', value: 3}],
    [{name:'NICK ANTAYA', value:1}],
    [{name:'AMÉLIE BOILEAU', value:4}],
    [{name: 'RONI EL-HADDAD', value:1}],
    [{name: 'KIRSTIE GILLANDERS', value: 5}, {name:'FCAMPT', value:3}]
]

$('#mybutton').click(function() {

    var form = document.querySelectorAll('.needs-validation')[0]
    var number = $('#number').val()
    // Loop over them and prevent submission

    if (!form.checkValidity()) {

    }else{
        if(number.length<10){

        }
        if($( "#dateInput" ).val()){
            $("#add_div").attr("style","display:block;");
        }else{
            alert("please choose one time!")
        }
       
    }
    form.classList.add('was-validated')
    return false;
});

$('#checkout').click(function() {
    var form = document.querySelectorAll('.needs-validation1')[0]
    var count = 0
    // Loop over them and prevent submission
    if (!form.checkValidity()) {

    }else {
        alert('Your appointment has been submitted, we will contact you as soon as possible!');
    }
    form.classList.add('was-validated')
    return false;

});

var unavailableDates = [];
const setDateFormat = "mm/dd/yy";


$(document).ready(function(){
    $( "#dateInput" ).datepicker(
        {
            dateFormat: setDateFormat,
            // no calendar before June 1rst 2020
            minDate: new Date('06/01/2020'),
            maxDate: '+4M',
            // used to disable some dates
            beforeShowDay: $.datepicker.noWeekends,
            beforeShowDay: function(date){
                var string = jQuery.datepicker.formatDate(setDateFormat, date);
                return [ unavailableDates.indexOf(string) === -1 ]
            }
        }
    );
    $("#selService").change(function(){
        var value =  $("#selService").val();
        $('#selDr').children().not(':eq(0)').remove();
        var doctors = aDoc[value];
        for(var k=0;k<doctors.length;k++){
            $('#selDr').append(`<option value=${doctors[k].value}>${doctors[k].name}</option>`);
        }
    })

    $("#selDr").change(function(){
        var value = $("#selDr").val();
        $( "#dateInput" ).datepicker('destroy');
        $( "#dateInput" ).datepicker(
            {
                dateFormat: setDateFormat,
                // no calendar before June 1rst 2020
                minDate: new Date('06/01/2020'),
                maxDate: '+4M',
                // used to disable some dates
                beforeShowDay: $.datepicker.noWeekends,
                beforeShowDay: function(date){
                    if (date.getDay() == value)
                        return [false];
                    var string = jQuery.datepicker.formatDate(setDateFormat, date);
                    return [ unavailableDates.indexOf(string) === -1 ]
                }
            }
        );
    })
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })
});
