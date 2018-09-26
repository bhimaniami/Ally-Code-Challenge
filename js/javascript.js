//Rate Table with JSON data

$( document ).ready(function() {
     var out = '<table>'+
                    '<tr style="background:none;">'+
                        '<th style="width:20%;"></th>'+
                        '<th style="width:22%;text-align: right;">Annual Percentage Yield</th>'+    
                        '<th style="width:22%;text-align: right;">Est. Earnings for 1 Year*</th>'+
                    '</tr>';
    var i;
    for(i = 0; i<myArray.length; i++) {
        if(myArray[i].name == 'URBank'){
          out += '<tr><td>'+myArray[i].name+'</td><td style="text-align: right;">'+myArray[i].apy+'%</td><td style="text-align: right;">$'+myArray[i].earnings.toFixed(2);+'</td></tr>';
        }
    }
    for(i = 0; i<myArray.length; i++) {
        if(myArray[i].name != 'URBank'){
          out += '<tr><td>'+myArray[i].name+'</td><td style="text-align: right;">'+myArray[i].apy+'%</td><td style="text-align: right;">$'+myArray[i].earnings.toFixed(2);+'</td></tr>';
        }
    }
    out += '<tr style="background:none;padding:0px;margin:0px;"><td style="text-align: right;"></td><td style="text-align: right;"></td><td style="text-align: right;"><h6 style="padding:0px;margin:0px;color: #7c7c7c;font-size:12px;">*Based on $50,000 deposit.</h6></td></tr> </table> ';

    document.getElementById("rates-table").innerHTML = out;

//Navigation Menu

    $("nav div").click(function() {
            $(".top-menu ul ").slideToggle();
            $(".top-menu  ul ul").css("display", "none");
      });

//Navigation Responsive

      $("ul li").click(function() {
            $("ul ul"). slideUp();
            $(this).find('ul').slideToggle();
      });

      $(window).resize(function() {
            if($(window).width() > 768) {
                  $("ul").removeAttr('style');
            }
      });

//Log In Popup 

      $(".close").click(function(){
        $("#myModal").hide();
    });
    $(".login-btn a").click(function(){
        $("#myModal").show();
    });


   
});

//Article Sidebar

function articleTabs(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}