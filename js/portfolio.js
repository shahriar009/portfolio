
$(function(){




  var imageBackground = ["icon/0.jpeg","icon/1.jpeg","icon/2.jpeg"];

  var count = 0;

  setInterval(function(){

      if (count == imageBackground.length) {
        count = 0;
      }

      $('.upperSectionIntro').css({
        "background":"linear-gradient(rgba(128,124,116,0.45),rgb(0,0,0)),url("+imageBackground[count++]+")no-repeat center center fixed",
        "background-size":"cover"
      });




  },6000);

  //Start Box showin


    $('.imgWebWidth').hover(function(){
        $(this).addClass('webImageBlur');
        $('.imgWebSample').children('.showingBoxWeb').show('fast');
      //$('.showingBoxWeb').show();

      var imageSrc = $(this).attr('src');

      $('.showingBoxWe').attr('src',imageSrc);


    },function(){
      $(this).removeClass('webImageBlur');
      $('.imgWebSample').children('.showingBoxWeb').hide('fast');
      //$('.showingBoxWeb').hide();
    });

    console.log("print this");

    //boxshowing on web dept hover ENd

//IMage pagination


    //var imageAlt = $('.img-thumbnail').attr("alt");

    $('.paginationImg').click(function(){


      var buttonHref = $(this).attr("href");
        //$('.as').hide();



        if (buttonHref === "#t1") {

            $('.img-thumbnail0').attr("src","icon/71appicon.png");



        }
       if (buttonHref === "#t2") {
          $('.img-thumbnail0').attr("src","icon/anothericonfoeapp.png");



        }
        if (buttonHref === "#t3") {

          $('.img-thumbnail0').attr("src","icon/latesign.png");

        }
        if (buttonHref === "#t4") {


          $('.img-thumbnail0').attr("src","icon/logo_by_shr.png");

        }
        if (buttonHref === "#t5") {
          $('.img-thumbnail0').attr("src","icon/trying.png");





        }
        if (buttonHref === "#t6") {
            $('.img-thumbnail0').attr("src","icon/Sicon.jpg");




        }
        if (buttonHref === "#t7") {

            $('.img-thumbnail0').attr("src","icon/calculator_page_header.png");



        }
        if (buttonHref === "#t8") {


            $('.img-thumbnail0').attr("src","icon/production.jpg");


        }



    });

    //ENd pagination

    //Showing twxt on image hoverBox

    $('.img-thumbnail0').hover(function(){
      $('.textShow').show("fast");
    },function(){
      $('.textShow').hide("fast");
    });

    //Testing Header personal information

    $('.personal').hover(function(){

        $(this).children('.personalInformation').show();


    },function(){
        $(this).children('.personalInformation').hide();
    });


        // NOTE: For web DevMenu

        console.log("print Web dev");

        $('.mButton').click(function(){

            //$('nav ul').show('fast');

            $('nav ul').toggleClass('show');



            // if ($('nav ul').is(":hidden")) {
            //     $('nav ul').show("fast");
            // }
            // else{
            //   $('nav ul').hide("fast");
            // }


        });

        // NOTE: FOr web dev image showing on images

        $('.uu').hover(function(){
            $(".uu").children('.child').show("fast");
            $('.firstBox').css("margin-right","3px");
        },function(){
          $(".uu").children('.child').hide("fast");
          $('.firstBox').css("margin-right","-3px");
        });

        $('.uuu').hover(function(){
            $(".uuu").children('.child2').show("fast");
            $('.secondBox').css("margin-left","3px");
        },function(){
          $(".uuu").children('.child2').hide("fast");
          $('.secondBox').css("margin-left","-3px");
        });

        //FOr image change on Web dev html page


        //webDesign/web1.png
        //webDesign/2.jpg

        $('.One').click(function(){
          $('#myVideo').hide('fast');
          $('#imageForWeb').attr("src","webDesign/Capture.PNG").show('fast');
          $(".textForClick").html("click again");
        

        });

        $('.Two').click(function(){
          $('#myVideo').hide('fast');

          $('#imageForWeb').attr("src","webDesign/3.PNG");


        });

        $('.Three').click(function(){
          $('#myVideo').hide('fast');
          $('#imageForWeb').attr("src","webDesign/web1.png").show('fast');

        });

        $('.Four').click(function(){
          $('#myVideo').hide('fast');
          $('#imageForWeb').attr("src","webDesign/2.jpg").show('fast');

        });


    //Looping the social icon

    //for dtetec the scrollingAndroid

    //Detect the Scroll

    //It should be appear  always end of the code

    $('body,html').bind('scroll mousedown wheel DOMMouseScroll mousewheel keyup', function (event) {

      var passTrue = false;

      var onlyOne = false;


      if ($(window).scrollTop() >= ($("#photoshopScroll").offset().top)) {

          //Web design mapping
          if (passTrue === false) {


              var dta = 0;
              var androidData = 0;
              var pythonRatio = 0;
              var programmingRatio = 0;
              setInterval(function(){

                  if (dta > 85) {
                      $('.webDEsignRatio').html(dta);
                  }
                  if (dta<86) {
                    $('.webDEsignRatio').html(dta);
                    dta++;
                  }

                  //for android

                  if (androidData > 61) {

                      $('.androidRatio').html(androidData);

                  }
                  if (androidData < 61) {
                    $('.androidRatio').html(androidData);
                    androidData++;
                  }
                  //for python
                  if (pythonRatio > 45) {

                      $('.pythonRatio').html(pythonRatio);

                  }
                  if (pythonRatio < 45) {
                    $('.pythonRatio').html(pythonRatio);
                    pythonRatio++;
                  }

                  //for programming
                  if (programmingRatio > 60) {

                      $('.programmingRatio').html(programmingRatio);

                  }
                  if (programmingRatio < 60) {
                    $('.programmingRatio').html(programmingRatio);
                    programmingRatio++;
                  }

              },60);
            passTrue = true;

          }
          }
      }).scroll();









});
