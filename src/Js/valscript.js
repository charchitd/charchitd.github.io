
    // form script


    let emailnode, errornode3,emailnode2, errornode, namenode, mssgnode, submitnode, flag=0;
    $(function () {
        namenode = $("#name");
        errornode = $("#error1");

        emailnode = $("#mailid");
        errornode2 = $("#error2");
    
    
        mssgnode = $("#mssg");
        errornode3 = $("#error3");

        submitnode = $("#form");
    
         //declaring events

        namenode.blur(() => { validate1() });
        emailnode.blur(() => { validate2() });
        mssgnode.blur(() => { validate3() });
        submitnode.submit(()=> validateForm());
        
    });    

    function validate1(){

        errornode.html(""); //
        let firstname = namenode.val(); //
        if (firstname == "") {
            errornode.html("This field is required");
            namenode.css({ border: " 3px solid red" });
            return false;
        }
        else if (firstname.length < 2) {
            errornode.html("The length must be greater than 2");
            namenode.css({ border: " 3px solid red" });
            return false;
        }
        else {
            namenode.css("border","3px solid green");
            flag += 1;
            console.log(flag);

            return true;
        }
    }
    
    function validate2(){

        errornode2.html("");

    let email = emailnode.val();
    let ss = email.substring(email.indexOf("@") + 1);
    if (email == "") {
        errornode2.html("This field is required");
        emailnode.css({ border: " 2px solid red" });

        return false;
    }
    else if (!email.includes("@") || ss == "") {
        errornode2.html("Put valid email id");
        emailnode.css({ border: " 2px solid red" });
        return false;
    }

    else {
        emailnode.css({ border: "2px solid green" });
        flag += 1;
        console.log(flag);

        return true;
    }
    }

    function validate3(){

        errornode3.html(""); //
        let Message = mssgnode.val(); //
        if (Message == "") {
            errornode3.html("This field is required");
            mssgnode.css({ border: " 3px solid red" });
            return false;
        }
        else if (Message.length < 5) {
            errornode3.html("The length must be greater than 5");
            mssgnode.css({ border: " 3px solid red" });
            return false;
        }
        else {
            mssgnode.css("border", "3px solid green");
            flag += 1;
            console.log(flag);
            

            return true;
        }

    }


    function validateForm(){

        

        // let butn = 
        if(flag == 3){

        //   $('#butt').click(function(){ $('#butt').disabled= false;});
          $('#butt').removeAttr('diabled');
          

            
        }
        else{
            $('#butt').prop('disabled', "disabled");
        


        //   $('#butt').prop("disabled", true);
        // $('#butt').click(function(){ $('#butt').disabled= true;});
          
          
            
        
    }
}
    
 