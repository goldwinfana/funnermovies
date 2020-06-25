$('#results').append($(".movser").children());
$('#results').css('display','none');
function myFunction() {
 
    var input, filter, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    var  divName = $("#results").children();

    if(input.value == '')
    {
        $('#results').css('display','none');
    }
    else{
        $('#results').css('display','block');
    }
    
    for (i = 0; i < divName.length; i++) {
        a = divName[i].getElementsByTagName("p")[0];
        txtValue = a.textContent || a.innerText;
       
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            divName[i].style.display = "";
          } else {
            divName[i].style.display = "none";
          }
    }

    if($("#results > a:visible").length == 0)
    {
        if(input.value !== '')
        {
            $('.not-found').css('display', 'block');
        }
     
    }else{
      $('.not-found').css('display', 'none');
    }
}

function openSearch(){
    $('.search-modal').css('display', 'block');
}

function closeSearch(){
    $('.search-modal').trigger('click');
}