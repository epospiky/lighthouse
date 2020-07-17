     $(document).ready(function(){
        $('#submit').click(function(){

          var email = $('#email').val();
          if(email == '')
          {
            $('#error_message').html("Please enter email");
          }
          else
          {
            $('#error_message').html('');
            $.ajax({
                    url:"conn.php",
                    method:"POST",
                    data:{email:email},
                    success:function(data){
                       $(".notify_form").trigger("reset"); 

                          $('#success_message').fadeIn().html(data);  
                          setTimeout(function(){  
                               $('#success_message').fadeOut("Slow");  
                          }, 2000);
                      
                    }

            });
          }
          
        });
      });