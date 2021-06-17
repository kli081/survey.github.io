var iNum1;
var iNum2;
var aTime = ['Monday','Tuesday','Wendesday','Thursday','Friday','Saturday','Sunday'];
var aService =[['Balance or Mobility Issues','An ADP Assessment','Parkinson’s Disease','Sports Injury'],['Neck Pain','An ADP Assessment','Parkinson’s Disease','Sports Injury'],['Neck Pain','Shoulder Pain','Parkinson’s Disease','Sports Injury'],['Neck Pain','Shoulder Pain','Balance or Mobility Issues','Sports Injury'],['Neck Pain','Shoulder Pain','Balance or Mobility Issues','An ADP Assessment'],['Shoulder Pain','Balance or Mobility Issues','An ADP Assessment','Parkinson’s Disease'],['Balance or Mobility Issues','An ADP Assessment','Parkinson’s Disease','Sports Injury']];
var aDoc =[[['NICK ANTAYA'],['AMÉLIE BOILEAU'],['RONI EL-HADDAD'],['KIRSTIE GILLANDERS',' FCAMPT']],[['Mathew Pulickal'],['AMÉLIE BOILEAU'],['RONI EL-HADDAD'],['KIRSTIE GILLANDERS',' FCAMPT']],[['Mathew Pulickal'],['NISHANTH KUMAR','FCAMPT'],['RONI EL-HADDAD'],['KIRSTIE GILLANDERS',' FCAMPT']],[['Mathew Pulickal'],['NISHANTH KUMAR','FCAMPT'],['NICK ANTAYA'],['KIRSTIE GILLANDERS',' FCAMPT']],[['Mathew Pulickal'],['NISHANTH KUMAR','FCAMPT'],['NICK ANTAYA'],['AMÉLIE BOILEAU']],[['NISHANTH KUMAR','FCAMPT'],['NICK ANTAYA'],['AMÉLIE BOILEAU'],['RONI EL-HADDAD']],[['NICK ANTAYA'],['AMÉLIE BOILEAU'],['RONI EL-HADDAD'],['KIRSTIE GILLANDERS',' FCAMPT']]];


$(window).scroll(function() {
    var scroll_len = $(window).scrollTop();
    if (scroll_len > 10) {
        $('.side_bar').fadeIn();
    } else {
        $('.side_bar').fadeOut();
    };
});

$('#mybutton').click(function() {

    var form = document.querySelectorAll('.needs-validation')[0]
    var number = $('#number').val()
    // Loop over them and prevent submission
    if (!form.checkValidity()) {

    }else{
        if(number.length<10){

        }
        $("#add_div").attr("style","display:block;");
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

$(function () {
    for(var i=0;i<aTime.length;i++){
        $('#selTime').append('<option>'+aTime[i]+'</option>');
    };
    $('#selTime').change(function () {
        $('#selService').children().not(':eq(0)').remove();
        $('#selDr').children().not(':eq(0)').remove();
        iNum1 = $(this).children('option:selected').index();
        var aaService = aService[iNum1-1];
        for(var j=0;j<aaService.length;j++){
            $('#selService').append('<option>'+aaService[j]+'</option>');
        }
    });
    $('#selService').change(function () {
        $('#selDr').children().not(':eq(0)').remove();
        iNum2 = $(this).children('option:selected').index();
        var aaDoc = aDoc[iNum1-1][iNum2-1];
        for(var k=0;k<aaDoc.length;k++){
            $('#selDr').append('<option>'+aaDoc[k]+'</option>');
        }
    })
})