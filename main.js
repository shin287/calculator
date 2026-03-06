$(function(){
    let number;
    let op;
    let formula="";
    $(".num").on("click",function(){
        const pushed=$(this).text();
        const now=$("#cal").val();

        if(formula==="" && pushed==="."){
            formula="0.";
        }else if(formula==="0"&&pushed!=="."){
            formula=pushed;
        }else if(formula==="00"&&pushed!=="."){
            formula=pushed;
        }else if(formula==="00"&&pushed==="."){
            formula="0.";
        }else{
            formula=formula+pushed;
        }
        $("#cal").val(formula);
    });

    $(".sign").on("click",function(){
        const four=$(this).text();
        const last=formula.slice(-1);

        if(formula===""){
            return;
        }
        if(four==="."){
            const parts=formula.split(/[\+\-\*\/]/);
            const lastnumber=parts[parts.length-1];
            if(lastnumber.includes(".")){
                return;
            }
            formula=formula+four;
            $("#cal").val(formula);
            return;
        }
        if(last==="+"||last==="-"||last==="*"||last==="/"||last==="."){
            return;
        }
        formula=formula+four;
        $("#cal").val(formula);
    });

    $(".eq").on("click",function(){
        if(formula===""){
            return;
        }
        const last=formula.slice(-1);
        if(last==="+"||last==="-"||last==="*"||last==="/"||last==="."){
            return;
        }
        let result=eval(formula);
        result=Math.round(result*1000000000)/1000000000;

        formula=String(result);
        $("#cal").val(formula);
    });
    $(".ac").on("click",function(){
        $("#cal").val("0");
        number=null;
        op=null;
        formula="";
    });
});